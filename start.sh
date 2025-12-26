#!/bin/bash

echo "🌈 启动单词小勇士 - Word Hero..."
echo ""

# Check if node is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js 未安装，请先安装 Node.js"
    exit 1
fi

# Start the server
node server.js
