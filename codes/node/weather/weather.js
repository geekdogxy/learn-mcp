import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import { z } from 'zod';

// 初始化MCP服务器
const server = new McpServer({
  name: 'weather',
  version: '1.0.0',
});

server.tool('get-weather', 'get weather for area', { area: z.string() }, async ({ area }) => {
  // 模拟温度 实际可以调用天气API
  const randomChoice = (array) => {
    return array[Math.floor(Math.random() * array.length)];
  };

  const temperature = randomChoice([1, 15, 30]);
  return {
    content: [{ type: 'text', text: String(temperature) }],
  };
});

const transport = new StdioServerTransport();
await server.connect(transport);
