import { Client } from '@modelcontextprotocol/sdk/client/index.js';
import { StdioClientTransport } from '@modelcontextprotocol/sdk/client/stdio.js';
import dotenv from 'dotenv';
import OpenAI from 'openai';

// 从.env文件加载环境变量
dotenv.config();
const { API_KEY, MODEL, BASE_URL } = process.env;
if (!API_KEY || !MODEL || !BASE_URL) {
  throw new Error('请设置好API_KEY、MODEL和BASE_URL');
}

// 连接 mcp 服务器，这里使用node启动weather.js
// 请根据实际情况更改 weather.js 文件路径
const transport = new StdioClientTransport({
  command: 'node',
  args: ['/Users/xy/Desktop/mcp/website/learn-mcp/codes/node/weather-server/weather.js'],
});

const mcpClient = new Client({
  name: 'mcp-client',
  version: '1.0.0',
});

await mcpClient.connect(transport);

// 获取 mcp server tools
const ret = await mcpClient.listTools();
const { tools } = ret;
console.log(
  'Connected to mcp server with tools:',
  tools.map(({ name }) => name)
);
console.log(`mcpTools: ${JSON.stringify(tools, null, 2)}\n`);

// 转换MCP tools到OpenAI格式
const convertToOpenAITools = (mcpTools) => {
  return mcpTools.map((tool) => ({
    type: 'function',
    function: {
      name: tool.name,
      description: tool.description,
      parameters: tool.inputSchema,
    },
  }));
};

const openaiTools = convertToOpenAITools(tools);
console.log(`openaiTools: ${JSON.stringify(openaiTools, null, 2)}\n`);

// 初始化OpenAI
const openai = new OpenAI({
  apiKey: API_KEY,
  baseURL: BASE_URL,
});

// 调用OpenAI
const query = `请问上海的温度多少度`;
const messages = [{ role: 'user', content: query }];
let toolCalls = [];

async function callFunction(toolCall) {
  console.log(`调用工具: ${toolCall.function.name}, 参数: ${toolCall.function.arguments}`);

  const args = JSON.parse(toolCall.function.arguments);
  const result = await mcpClient.callTool({
    name: toolCall.function.name,
    arguments: args,
  });

  console.log(`工具返回结果: ${JSON.stringify(result, null, 2)}`);
  return result.content;
}

async function runConversation() {
  // 初始调用，可能会触发工具调用
  const completion = await openai.chat.completions.create({
    model: MODEL,
    messages,
    tools: openaiTools,
    tool_choice: 'auto',
  });

  const responseMessage = completion.choices[0].message;
  // 第一次回复
  console.log('AI 回复:', responseMessage.content);

  // 判断是否需要调用工具
  if (responseMessage.tool_calls) {
    // 将AI回复加入对话历史
    messages.push(responseMessage);

    // 处理每个工具调用
    for (const toolCall of responseMessage.tool_calls) {
      const result = await callFunction(toolCall);

      // 将工具调用结果加入对话历史
      messages.push({
        role: 'tool',
        tool_call_id: toolCall.id,
        content: result,
      });
    }

    // 使用工具调用结果再次调用模型获取最终回复
    const secondCompletion = await openai.chat.completions.create({
      model: MODEL,
      messages,
    });

    const finalMessage = secondCompletion.choices[0].message;
    console.log('AI回复:', finalMessage.content);
    return finalMessage.content;
  }
}

// 运行对话流程
runConversation()
  .then((result) => {
    process.exit(0);
  })
  .catch((error) => {
    console.error('发生错误:', error);
    process.exit(1);
  });
