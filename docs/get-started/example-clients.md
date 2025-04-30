---
sidebar_position: 6
title: MCP 客户端示例
---

本页面概述了支持 Model Context Protocol (MCP) 的应用程序。每个客户端可能支持不同的 MCP 功能，从而允许与 MCP 服务器进行不同级别的集成。

## 功能支持矩阵

| 客户端                               | [Resources] | [Prompts] | [Tools] | [Sampling] | Roots | 说明                                                    |
| ------------------------------------ | ----------- | --------- | ------- | ---------- | ----- | ------------------------------------------------------- |
| [Claude Desktop App][Claude]         | ✅          | ✅        | ✅      | ❌         | ❌    | 完全支持所有 MCP 功能                                   |
| [Claude Code][Claude Code]           | ❌          | ✅        | ✅      | ❌         | ✅    | 支持 prompts、tools 和 roots                            |
| [5ire][5ire]                         | ❌          | ❌        | ✅      | ❌         | ❌    | 支持 tools。                                            |
| [BeeAI Framework][BeeAI Framework]   | ❌          | ❌        | ✅      | ❌         | ❌    | 支持 agentic 工作流中的 tools。                         |
| [Cline][Cline]                       | ✅          | ❌        | ✅      | ❌         | ❌    | 支持 tools 和 resources。                               |
| [Continue][Continue]                 | ✅          | ✅        | ✅      | ❌         | ❌    | 完全支持所有 MCP 功能                                   |
| [Copilot-MCP][CopilotMCP]            | ✅          | ❌        | ✅      | ❌         | ❌    | 支持 tools 和 resources。                               |
| [Cursor][Cursor]                     | ❌          | ❌        | ✅      | ❌         | ❌    | 支持 tools。                                            |
| [Emacs Mcp][Mcp.el]                  | ❌          | ❌        | ✅      | ❌         | ❌    | 支持 Emacs 中的 tools。                                 |
| [fast-agent][fast-agent]             | ✅          | ✅        | ✅      | ✅         | ✅    | 完全多模态 MCP 支持，带有端到端测试                     |
| [Genkit][Genkit]                     | ⚠️          | ✅        | ✅      | ❌         | ❌    | 通过 tools 支持 resource 列表和查找。                   |
| [GenAIScript][GenAIScript]           | ❌          | ❌        | ✅      | ❌         | ❌    | 支持 tools。                                            |
| [Goose][Goose]                       | ❌          | ❌        | ✅      | ❌         | ❌    | 支持 tools。                                            |
| [LibreChat][LibreChat]               | ❌          | ❌        | ✅      | ❌         | ❌    | 支持 Agents 的 tools                                    |
| [mcp-agent][mcp-agent]               | ❌          | ❌        | ✅      | ⚠️         | ❌    | 支持 tools、server 连接管理和 agent 工作流。            |
| [Microsoft Copilot Studio]           | ❌          | ❌        | ✅      | ❌         | ❌    | 支持 tools                                              |
| [oterm][oterm]                       | ❌          | ✅        | ✅      | ❌         | ❌    | 支持 tools 和 prompts。                                 |
| [Roo Code][Roo Code]                 | ✅          | ❌        | ✅      | ❌         | ❌    | 支持 tools 和 resources。                               |
| [Sourcegraph Cody][Cody]             | ✅          | ❌        | ❌      | ❌         | ❌    | 通过 OpenCTX 支持 resources                             |
| [Superinterface][Superinterface]     | ❌          | ❌        | ✅      | ❌         | ❌    | 支持 tools                                              |
| [TheiaAI/TheiaIDE][TheiaAI/TheiaIDE] | ❌          | ❌        | ✅      | ❌         | ❌    | 支持 Theia AI 和 AI 驱动的 Theia IDE 中 Agents 的 tools |
| [VS Code GitHub Copilot][VS Code]    | ❌          | ❌        | ✅      | ❌         | ❌    | 支持 tools、roots、动态发现、安全密钥配置和一键安装     |
| [Windsurf Editor][Windsurf]          | ❌          | ❌        | ✅      | ❌         | ❌    | 支持带有 AI Flow 的 tools，用于协作开发。               |
| [Witsy][Witsy]                       | ❌          | ❌        | ✅      | ❌         | ❌    | 支持 Witsy 中的 tools。                                 |
| [Zed][Zed]                           | ❌          | ✅        | ❌      | ❌         | ❌    | Prompts 显示为斜杠命令                                  |
| [SpinAI][SpinAI]                     | ❌          | ❌        | ✅      | ❌         | ❌    | 支持 Typescript AI Agents 的 tools                      |
| [OpenSumi][OpenSumi]                 | ❌          | ❌        | ✅      | ❌         | ❌    | 支持 OpenSumi 中的 tools                                |
| [Daydreams Agents][Daydreams]        | ✅          | ✅        | ✅      | ❌         | ❌    | 支持将 Servers 放入 Daydreams agents                    |
| [Apify MCP Tester][Apify MCP Tester] | ❌          | ❌        | ✅      | ❌         | ❌    | 支持 tools                                              |

[Claude]: https://claude.ai/download
[Claude Code]: https://claude.ai/code
[Cursor]: https://cursor.com
[Zed]: https://zed.dev
[Cody]: https://sourcegraph.com/cody
[Genkit]: https://github.com/firebase/genkit
[Continue]: https://github.com/continuedev/continue
[GenAIScript]: https://microsoft.github.io/genaiscript/reference/scripts/mcp-tools/
[Cline]: https://github.com/cline/cline
[LibreChat]: https://github.com/danny-avila/LibreChat
[TheiaAI/TheiaIDE]: https://eclipsesource.com/blogs/2024/12/19/theia-ide-and-theia-ai-support-mcp/
[Superinterface]: https://superinterface.ai
[5ire]: https://github.com/nanbingxyz/5ire
[Apify MCP Tester]: https://apify.com/jiri.spilka/tester-mcp-client
[BeeAI Framework]: https://i-am-bee.github.io/beeai-framework
[fast-agent]: https://github.com/evalstate/fast-agent
[mcp-agent]: https://github.com/lastmile-ai/mcp-agent
[Mcp.el]: https://github.com/lizqwerscott/mcp.el
[Roo Code]: https://roocode.com
[Goose]: https://block.github.io/goose/docs/goose-architecture/#interoperability-with-extensions
[Witsy]: https://github.com/nbonamy/witsy
[Windsurf]: https://codeium.com/windsurf
[CopilotMCP]: https://github.com/VikashLoomba/copilot-mcp
[Daydreams]: https://github.com/daydreamsai/daydreams
[SpinAI]: https://spinai.dev
[OpenSumi]: https://github.com/opensumi/core
[oterm]: https://github.com/ggozad/oterm
[Resources]: https://modelcontextprotocol.io/docs/concepts/resources
[Prompts]: https://modelcontextprotocol.io/docs/concepts/prompts
[Tools]: https://modelcontextprotocol.io/docs/concepts/tools
[Sampling]: https://modelcontextprotocol.io/docs/concepts/sampling
[Microsoft Copilot Studio]: https://learn.microsoft.com/en-us/microsoft-copilot-studio/agent-extend-action-mcp
[VS Code]: https://code.visualstudio.com/

## 客户端详情

### Claude Desktop App

Claude 桌面应用程序提供对 MCP 的全面支持，能够与本地工具和数据源进行深度集成。

**主要功能：**

- 完全支持 resources，允许附加本地文件和数据
- 支持 prompt 模板
- Tool 集成，用于执行命令和脚本
- 本地 server 连接，增强隐私和安全性

> ⓘ 注意：Claude.ai Web 应用程序目前不支持 MCP。MCP 功能仅在桌面应用程序中可用。

### Claude Code

Claude Code 是 Anthropic 推出的交互式 agentic 编码工具，可通过自然语言命令帮助您更快地编码。它支持 MCP 集成 prompts 和 tools，并且还可以作为 MCP server 与其他客户端集成。

**主要功能：**

- 支持 MCP servers 的 tool 和 prompt
- 通过 MCP server 提供自己的 tools，以便与其他 MCP 客户端集成

### 5ire

[5ire](https://github.com/nanbingxyz/5ire) 是一个开源的跨平台桌面 AI 助手，通过 MCP servers 支持 tools。

**主要功能：**

- 内置的 MCP servers 可以快速启用和禁用。
- 用户可以通过修改配置文件添加更多 servers。
- 它是开源且用户友好的，适合初学者。
- 未来将持续改进对 MCP 的支持。

### BeeAI Framework

[BeeAI Framework](https://i-am-bee.github.io/beeai-framework) 是一个用于大规模构建、部署和提供强大的 agentic 工作流的开源框架。该框架包含 **MCP Tool**，这是一个原生功能，可简化 MCP servers 与 agentic 工作流的集成。

**主要功能：**

- 将 MCP tools 无缝整合到 agentic 工作流中。
- 从连接的 MCP 客户端快速实例化框架原生 tools。
- 计划未来支持 agentic MCP 功能。

**了解更多：**

- [在 agentic 工作流中使用 MCP tools 的示例](https://i-am-bee.github.io/beeai-framework/#/typescript/tools?id=using-the-mcptool-class)

### Cline

[Cline](https://github.com/cline/cline) 是 VS Code 中的一个自主编码 agent，可以在每一步获得您的许可后编辑文件、运行命令、使用浏览器等。

**主要功能：**

- 通过自然语言创建和添加 tools（例如，"添加一个搜索网络的 tool"）
- 通过 `~/Documents/Cline/MCP` 目录与他人共享 Cline 创建的自定义 MCP servers
- 显示已配置的 MCP servers 及其 tools、resources 和任何错误日志

### Continue

[Continue](https://github.com/continuedev/continue) 是一个开源的 AI 代码助手，内置支持所有 MCP 功能。

**主要功能**

- 输入"@"提及 MCP resources
- Prompt 模板显示为斜杠命令
- 在聊天中直接使用内置和 MCP tools
- 支持 VS Code 和 JetBrains IDEs，可与任何 LLM 一起使用

### Cursor

[Cursor](https://docs.cursor.com/advanced/model-context-protocol) 是一个 AI 代码编辑器。

**主要特点**：

- 在 Cursor Composer 中支持 MCP tools
- 支持 STDIO 和 SSE

### Emacs Mcp

[Emacs Mcp](https://github.com/lizqwerscott/mcp.el) 是一个 Emacs 客户端，旨在与 MCP servers 交互，实现无缝连接和互动。它为 [gptel](https://github.com/karthink/gptel) 和 [llm](https://github.com/ahyatt/llm) 等 AI 插件提供 MCP tool 调用支持，遵循 Emacs 的标准 tool 调用格式。这种集成增强了 Emacs 生态系统中 AI tools 的功能。

**主要功能：**

- 为 Emacs 提供 MCP tool 支持。

### fast-agent

[fast-agent](https://github.com/evalstate/fast-agent) 是一个 Python Agent 框架，通过简单的声明式支持创建 Agents 和 Workflows，并为 Anthropic 和 OpenAI 模型提供完全的多模态支持。

**主要功能：**

- 基于 MCP 原生类型的 PDF 和 Image 支持
- 用于开发和诊断 Agent 应用程序的交互式前端，包括 passthrough 和 playback simulators
- 内置支持"构建有效 Agents"工作流。
- 将 Agents 部署为 MCP Servers

### Genkit

[Genkit](https://github.com/firebase/genkit) 是一个跨语言 SDK，用于构建 GenAI 功能并将其集成到应用程序中。[genkitx-mcp](https://github.com/firebase/genkit/tree/main/js/plugins/mcp) 插件能够作为客户端使用 MCP servers，或从 Genkit tools 和 prompts 创建 MCP servers。

**主要功能：**

- 客户端支持 tools 和 prompts（部分支持 resources）
- 丰富的发现功能，支持 Genkit 的 Dev UI playground
- 与 Genkit 现有的 tools 和 prompts 无缝互操作
- 可跨顶级提供商的各种 GenAI 模型工作

### GenAIScript

使用 [GenAIScript](https://microsoft.github.io/genaiscript/) (in JavaScript) 以编程方式为 LLMs 组装 prompts。在 JavaScript 中编排 LLMs、tools 和数据。

**主要功能：**

- 用于处理 prompts 的 JavaScript 工具箱
- 抽象层，使其简单高效
- 无缝的 Visual Studio Code 集成

### Goose

[Goose](https://github.com/block/goose) 是一个开源 AI agent，通过自动化编码任务来增强您的软件开发。

**主要功能：**

- 通过 tools 向 Goose 公开 MCP 功能。
- 可以通过 [extensions directory](https://block.github.io/goose/v1/extensions/)、CLI 或 UI 直接安装 MCPs。
- Goose 允许您通过[构建自己的 MCP servers](https://block.github.io/goose/docs/tutorials/custom-extensions) 来扩展其功能。
- 包括用于开发、Web 抓取、自动化、内存以及与 JetBrains 和 Google Drive 集成的内置 tools。

### LibreChat

[LibreChat](https://github.com/danny-avila/LibreChat) 是一个开源、可定制的 AI 聊天 UI，支持多个 AI 提供商，现已包含 MCP 集成。

**主要功能：**

- 通过 MCP servers 扩展当前的 tool 生态系统，包括 [Code Interpreter](https://www.librechat.ai/docs/features/code_interpreter) 和图像生成 tools
- 使用来自顶级提供商的各种 LLMs 将 tools 添加到可定制的 [Agents](https://www.librechat.ai/docs/features/agents)
- 开源且可自托管，支持安全的多用户
- 未来的路线图包括扩展的 MCP 功能支持

### mcp-agent

[mcp-agent] 是一个简单、可组合的框架，用于使用 Model Context Protocol 构建 agents。

**主要功能：**

- MCP servers 的自动连接管理。
- 向 LLM 公开来自多个 servers 的 tools。
- 实现 [Building Effective Agents](https://www.anthropic.com/research/building-effective-agents) 中定义的每种模式。
- 支持工作流暂停/恢复信号，例如等待人工反馈。

### Microsoft Copilot Studio

[Microsoft Copilot Studio] 是一个强大的 SaaS 平台，专为构建自定义 AI 驱动的应用程序和智能 agents 而设计，使开发人员能够创建、部署和管理复杂的 AI 解决方案。

**主要功能：**

- 支持 MCP tools
- 使用 MCP servers 扩展 Copilot Studio agents
- 利用 Microsoft 统一、受治理且安全的 API 管理解决方案

### oterm

[oterm] 是 Ollama 的一个终端客户端，允许用户创建 chats/agents。

**主要功能：**

- 支持与 Ollama 连接的多个完全可定制的聊天会话，并带有 tools。
- 支持 MCP tools。

### Roo Code

[Roo Code](https://roocode.com) 通过 MCP 实现 AI 编码辅助。

**主要功能：**

- 支持 MCP tools 和 resources
- 与开发工作流集成
- 可扩展的 AI 功能

### Sourcegraph Cody

[Cody](https://openctx.org/docs/providers/modelcontextprotocol) 是 Sourcegraph 的 AI 编码助手，它通过 OpenCTX 实现 MCP。

**主要功能：**

- 支持 MCP resources
- 与 Sourcegraph 的代码智能集成
- 使用 OpenCTX 作为抽象层
- 计划未来支持其他 MCP 功能

### SpinAI

[SpinAI](https://spinai.dev) 是一个用于构建可观察 AI agents 的开源 TypeScript 框架。该框架提供原生的 MCP 兼容性，允许 agents 与 MCP servers 和 tools 无缝集成。

**主要功能：**

- AI agents 的内置 MCP 兼容性
- 开源 TypeScript 框架
- 可观察的 agent 架构
- 对 MCP tools 集成的原生支持

### Superinterface

[Superinterface](https://superinterface.ai) 是一个 AI 基础设施和开发者平台，用于构建支持 MCP、交互式组件、客户端函数调用等的应用内 AI 助手。

**主要功能：**

- 在通过 React 组件或 script 标签嵌入的助手中使用来自 MCP servers 的 tools
- 支持 SSE 传输
- 使用来自任何 AI 提供商（OpenAI、Anthropic、Ollama 等）的任何 AI 模型

### TheiaAI/TheiaIDE

[Theia AI](https://eclipsesource.com/blogs/2024/10/07/introducing-theia-ai/) 是一个用于构建 AI 增强型 tools 和 IDEs 的框架。[AI-powered Theia IDE](https://eclipsesource.com/blogs/2024/10/08/introducting-ai-theia-ide/) 是一个基于 Theia AI 构建的开放灵活的开发环境。

**主要功能：**

- **Tool 集成**：Theia AI 使 AI agents（包括 Theia IDE 中的 agents）能够利用 MCP servers 实现无缝的 tool 交互。
- **可定制 Prompts**：Theia IDE 允许用户定义和调整 prompts，动态集成 MCP servers 以实现定制化的工作流。
- **自定义 agents**：Theia IDE 支持创建利用 MCP 功能的自定义 agents，使用户能够即时设计专门的工作流。

Theia AI 和 Theia IDE 的 MCP 集成为用户提供了灵活性，使其成为探索和适应 MCP 的强大平台。

**了解更多：**

- [Theia IDE and Theia AI MCP Announcement](https://eclipsesource.com/blogs/2024/12/19/theia-ide-and-theia-ai-support-mcp/)
- [Download the AI-powered Theia IDE](https://theia-ide.org/)

### VS Code GitHub Copilot

[VS Code](https://code.visualstudio.com/) 通过 [agent mode](https://code.visualstudio.com/docs/copilot/chat/chat-agent-mode) 将 MCP 与 GitHub Copilot 集成，允许在您的 agentic 编码工作流中直接与 MCP 提供的 tools 交互。在 Claude Desktop、工作区或用户设置中配置 servers，提供引导式 MCP 安装和安全处理输入变量中的密钥，以避免泄漏硬编码密钥。

**主要功能：**

- 支持 stdio 和 server-sent events (SSE) 传输
- 每个 agent 会话可按会话选择 tools，以获得最佳性能
- 通过重启命令和输出日志轻松进行 server 调试
- 带有可编辑输入的 tool 调用和始终允许切换
- 与现有的 VS Code 扩展系统集成，可从扩展注册 MCP servers

### Windsurf Editor

[Windsurf Editor](https://codeium.com/windsurf) 是一个 agentic IDE，它将 AI 辅助与开发者工作流相结合。它具有创新的 AI Flow 系统，可在保持开发者控制的同时实现协作和独立的 AI 交互。

**主要功能：**

- 革命性的 AI Flow 范式，用于人机协作
- 智能代码生成和理解
- 丰富的开发工具，支持多模型

### Witsy

[Witsy](https://github.com/nbonamy/witsy) 是一个 AI 桌面助手，支持 Anthropic 模型和 MCP servers 作为 LLM tools。

**主要功能：**

- 支持多个 MCP servers
- Tool 集成，用于执行命令和脚本
- 本地 server 连接，增强隐私和安全性
- 可从 Smithery.ai 轻松安装
- 开源，适用于 macOS、Windows 和 Linux

### Zed

[Zed](https://zed.dev/docs/assistant/model-context-protocol) 是一个高性能代码编辑器，内置 MCP 支持，专注于 prompt 模板和 tool 集成。

**主要功能：**

- Prompt 模板在编辑器中显示为斜杠命令
- Tool 集成，增强编码工作流
- 与编辑器功能和工作区上下文紧密集成
- 不支持 MCP resources

### OpenSumi

[OpenSumi](https://github.com/opensumi/core) 是一个帮助您快速构建 AI Native IDE 产品的框架。

**主要功能：**

- 在 OpenSumi 中支持 MCP tools
- 支持内置 IDE MCP servers 和自定义 MCP servers

### Daydreams

[Daydreams](https://github.com/daydreamsai/daydreams) 是一个用于在链上执行任何操作的生成式 agent 框架

**主要功能：**

- 在配置中支持 MCP Servers
- 公开 MCP Client

### Apify MCP Tester

[Apify MCP Tester](https://github.com/apify/tester-mcp-client) 是一个开源客户端，使用 Server-Sent Events (SSE) 连接到任何 MCP server。
它是一个独立的 Apify Actor，专为通过 SSE 测试 MCP servers 而设计，支持 Authorization 标头。
它使用纯 JavaScript（老式风格）并托管在 Apify 上，允许您无需任何设置即可运行它。

**主要功能：**

- 通过 SSE 连接到任何 MCP server。
- 与 [Apify MCP Server](https://apify.com/apify/actors-mcp-server) 配合使用，与一个或多个 Apify [Actors](https://apify.com/store) 交互。
- 根据上下文和用户查询动态利用 tools（如果 server 支持）。

## 向您的应用程序添加 MCP 支持

如果您已向应用程序添加了 MCP 支持，我们鼓励您提交 pull request 将其添加到此列表中。MCP 集成可以为您的用户提供强大的上下文 AI 功能，并使您的应用程序成为不断增长的 MCP 生态系统的一部分。

添加 MCP 支持的好处：

- 使用户能够自带上下文和 tools
- 加入不断增长的可互操作 AI 应用程序生态系统
- 为用户提供灵活的集成选项
- 支持本地优先的 AI 工作流

要开始在您的应用程序中实施 MCP，请查看我们的 [Python SDK 文档](https://github.com/modelcontextprotocol/python-sdk) 或 [TypeScript SDK 文档](https://github.com/modelcontextprotocol/typescript-sdk)

## 更新和更正

此列表由社区维护。如果您发现任何不准确之处或希望更新有关您应用程序中 MCP 支持的信息，请提交 pull request 或[在我们的文档存储库中提出 issue](https://github.com/modelcontextprotocol/docs/issues)。
