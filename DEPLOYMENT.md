# 部署指南 - 单词小勇士游戏

## 🚀 快速部署（推荐方案）

### 方案1：使用 Vercel 部署（最简单，推荐）

**优点**：
- ✅ 完全免费
- ✅ 自动HTTPS
- ✅ 全球CDN加速
- ✅ 自动部署（每次git push自动更新）
- ✅ 提供免费域名

**步骤**：

1. **安装 Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **登录 Vercel**
   ```bash
   vercel login
   ```
   选择你喜欢的登录方式（GitHub、GitLab、Email等）

3. **部署项目**
   ```bash
   cd /Users/tingtinggu/CascadeProjects/word-picture-game
   vercel
   ```
   
   按照提示操作：
   - Set up and deploy? → Yes
   - Which scope? → 选择你的账号
   - Link to existing project? → No
   - What's your project's name? → word-picture-game（或自定义）
   - In which directory is your code located? → ./
   - Want to override the settings? → No

4. **完成！**
   部署完成后，Vercel会给你一个URL，例如：
   ```
   https://word-picture-game.vercel.app
   ```
   
   分享这个链接给其他人就可以使用了！

5. **后续更新**
   每次修改代码后，只需运行：
   ```bash
   vercel --prod
   ```

---

### 方案2：使用 Netlify 部署

**优点**：
- ✅ 完全免费
- ✅ 简单易用
- ✅ 自动HTTPS

**步骤**：

1. **安装 Netlify CLI**
   ```bash
   npm install -g netlify-cli
   ```

2. **登录并部署**
   ```bash
   cd /Users/tingtinggu/CascadeProjects/word-picture-game
   netlify deploy
   ```

3. **按照提示操作**
   - Create & configure a new site
   - 选择你的团队
   - Site name: word-picture-game（或自定义）
   - Publish directory: ./

4. **生产环境部署**
   ```bash
   netlify deploy --prod
   ```

---

### 方案3：使用 GitHub Pages（仅静态文件）

**注意**：由于项目使用了Node.js服务器，需要稍作修改才能在GitHub Pages上运行。

**步骤**：

1. **推送代码到GitHub**
   ```bash
   git add .
   git commit -m "Prepare for deployment"
   git push origin main
   ```

2. **在GitHub仓库设置中**
   - 进入 Settings → Pages
   - Source: Deploy from a branch
   - Branch: main / (root)
   - Save

3. **访问**
   ```
   https://你的用户名.github.io/word-picture-game/
   ```

---

## 🔧 本地网络部署（局域网内分享）

如果只想在家里或办公室内分享，不需要公网部署：

1. **启动服务器**
   ```bash
   node server.js
   ```

2. **查看本机IP地址**
   ```bash
   ifconfig | grep "inet " | grep -v 127.0.0.1
   ```
   
   例如得到：192.168.1.100

3. **分享链接**
   同一WiFi下的其他设备访问：
   ```
   http://192.168.1.100:3000
   ```

---

## 📱 自定义域名（可选）

部署到Vercel或Netlify后，你可以：

1. 购买域名（如 GoDaddy、Namecheap、阿里云等）
2. 在Vercel/Netlify控制台添加自定义域名
3. 按照提示配置DNS记录

---

## 🎯 推荐配置

**最佳方案**：Vercel + 自定义域名
- 速度快
- 稳定可靠
- 专业形象
- 完全免费（基础版）

**预算有限**：直接使用Vercel免费域名
- 例如：word-picture-game.vercel.app
- 完全够用，无需额外费用

---

## 📊 部署后的功能

✅ 全球任何地方都可以访问
✅ 手机、平板、电脑都可以使用
✅ 自动HTTPS加密
✅ 快速加载（CDN加速）
✅ 支持多人同时使用

---

## 🆘 常见问题

**Q: 部署后能修改内容吗？**
A: 可以！修改本地代码后，重新运行 `vercel --prod` 即可更新。

**Q: 免费版有限制吗？**
A: Vercel免费版对个人项目完全够用，每月100GB流量。

**Q: 需要一直开着电脑吗？**
A: 不需要！部署到Vercel后，服务器在云端运行，24小时可访问。

**Q: 如何分享给别人？**
A: 直接把Vercel给你的URL发给别人即可，例如：
   https://word-picture-game.vercel.app

---

## 📞 需要帮助？

如果遇到问题，可以：
1. 查看 Vercel 文档：https://vercel.com/docs
2. 查看项目 README.md
3. 检查部署日志找出错误原因
