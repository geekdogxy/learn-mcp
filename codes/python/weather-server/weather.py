from typing import Any
import random
from mcp.server.fastmcp import FastMCP

# 初始化MCP服务器
mcp = FastMCP("weather")

@mcp.tool()
async def get_weather(area: str) -> str:
  # 模拟温度 实际可以调用天气API
  temperature = random.choice([1, 15, 30])
  return f"{temperature}"

if __name__ == "__main__":
  mcp.run()
