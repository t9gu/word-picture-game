#!/bin/bash

echo "🛑 停止单词小勇士服务器..."

# Find and kill the node server process
pkill -f "node server.js" 2>/dev/null

if [ $? -eq 0 ]; then
    echo "✅ 服务器已停止"
else
    echo "ℹ️ 没有找到运行中的服务器"
fi
