#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run docs:build

# 进入生成的文件夹
cd docs/.vuepress/dist

# 如果是发布到自定义域名
echo 'www.liouliooo.com' > CNAME

# 生成readme
echo -e '# 我的主页\n\n欢迎来到我的[主页](https://www.liouliooo.com/)' > README.md

git init
git add -A
git commit -m 'deploy'

# 发布到 https://liouliooo.github.io
git push -f git@github.com:liouliooo/liouliooo.github.io.git master

cd -
