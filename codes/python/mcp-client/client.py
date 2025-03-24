import json
import os
from typing import List, Dict, Any
from mcp import ClientSession, StdioServerParameters
from mcp.client.stdio import stdio_client
from openai import OpenAI
from dotenv import load_dotenv

# 从.env文件加载环境变量
load_dotenv()
API_KEY = os.getenv("API_KEY")
MODEL = os.getenv("MODEL")
BASE_URL = os.getenv("BASE_URL")

# 连接 mcp 服务器，这里使用 python 启动 weather.py
# 请根据实际情况更改 weather.py 文件路径
server_params = StdioServerParameters(
    command="python",  # Executable
    args=[
        "/Users/xy/Desktop/mcp/website/learn-mcp/codes/python/weather-server/weather.py"
    ],
    env=None,
)


async def main():
    async with stdio_client(server_params) as (read, write):
        async with ClientSession(read, write) as session:
            # Initialize the connection
            await session.initialize()
            # List available tools
            ret = await session.list_tools()
            tools = ret.tools
            print("Connected to mcp server with tools:", [tool for tool in tools])
            openai_tools = convert_to_openai_tools(tools)
            print(f"openaiTools: {json.dumps(openai_tools, indent=2)}\n")
            # 初始化OpenAI
            client = OpenAI(api_key=API_KEY, base_url=BASE_URL)
            # 用户查询
            query = "请问上海的温度多少度"
            messages = [{"role": "user", "content": query}]
            await run_conversation(client, messages, openai_tools, session)


def convert_to_openai_tools(mcp_tools: List[Dict[str, Any]]) -> List[Dict[str, Any]]:
    """将MCP工具转换为OpenAI格式的工具"""
    return [
        {
            "type": "function",
            "function": {
                "name": tool.name,
                "description": tool.description,
                "parameters": tool.inputSchema,
            },
        }
        for tool in mcp_tools
    ]


async def call_function(tool_call, session):
    """调用MCP工具并返回结果"""
    print(f"调用工具: {tool_call.function.name}, 参数: {tool_call.function.arguments}")

    args = json.loads(tool_call.function.arguments)
    result = await session.call_tool(name=tool_call.function.name, arguments=args)

    print(f"工具返回结果: {result}")
    return result.content


async def run_conversation(client, messages, tools, session):
    """运行对话流程，处理工具调用"""
    # 初始调用，可能会触发工具调用
    completion = client.chat.completions.create(
        model=MODEL, messages=messages, tools=tools, tool_choice="auto"
    )

    response_message = completion.choices[0].message
    # 第一次回复
    print("AI 回复:", response_message.content)

    # 判断是否需要调用工具
    if response_message.tool_calls:
        # 将AI回复加入对话历史
        messages.append(response_message.model_dump())

        # 处理每个工具调用
        for tool_call in response_message.tool_calls:
            result = await call_function(tool_call, session)

            # 将工具调用结果加入对话历史
            messages.append(
                {
                    "role": "tool",
                    "tool_call_id": tool_call.id,
                    "content": result,
                }
            )

        # 使用工具调用结果再次调用模型获取最终回复
        second_completion = client.chat.completions.create(
            model=MODEL,
            messages=messages,
        )

        final_message = second_completion.choices[0].message
        print("AI回复:", final_message.content)
        return final_message.content


if __name__ == "__main__":
    import asyncio

    asyncio.run(main())
