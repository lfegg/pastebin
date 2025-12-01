# Pastebin

快速分享文本片段的在线工具 - 简单、快速、安全

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com)

## 特性

- **即时分享** - 一键创建，秒级生成分享链接
- **安全可靠** - 使用加密安全的随机 ID，内容自动加密存储
- **自动过期** - 7 天后自动删除，保护隐私
- **响应式设计** - 完美支持手机、平板、电脑
- **全球加速** - 基于 Vercel 边缘网络，全球访问秒开
- **完全免费** - 无广告，无需注册

## 使用方法

### 创建分享

1. 访问首页
2. 在文本框中输入或粘贴你的内容（最大 100KB）
3. 点击 "Create" 按钮
4. 复制生成的链接分享给他人

### 查看内容

- 直接访问分享链接即可查看内容
- 例如：`https://your-domain.com/view.html?id=abc123`

## 隐私与安全

- 所有内容加密存储在 Redis 数据库
- 使用加密随机算法生成 6 位唯一 ID（62^6 = 56,800,235,584 种组合）
- 7 天后自动删除，不留痕迹
- 无需注册，不收集个人信息
- 不记录访问日志（除服务器基础日志外）

## 使用限制

- 单个文本最大 **100,000 字符**（约 100KB）
- 内容有效期 **7 天**
- 无创建频率限制（请合理使用）

## 使用场景

- 快速分享代码片段
- 临时分享文本笔记
- 分享配置文件
- 跨设备传输文本
- 分享日志信息
- 教学演示代码

## 技术实现

本项目使用现代 Web 技术栈构建：

- **[MoonBit](https://www.moonbitlang.com/)** - 新一代 WebAssembly 编程语言，提供核心安全算法
- **Vercel** - 全球边缘网络部署，极速访问体验
- **Redis** - 高性能内存数据库，毫秒级读写

## 自己部署

### 1. Fork 本仓库

点击右上角 "Fork" 按钮

### 2. 一键部署到 Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/lfegg/pastebin)

### 3. 配置 Redis

在 Vercel 项目设置中：

- 创建 KV 数据库（免费层足够）
- 环境变量会自动配置

完成！你的专属 Pastebin 服务已上线

## 贡献

欢迎提交 Issue 和 Pull Request！

## 开源协议

Apache-2.0 License

<div align="center">

[报告问题](https://github.com/lfegg/pastebin/issues) · [功能建议](https://github.com/lfegg/pastebin/issues)

</div>
