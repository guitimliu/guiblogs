const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

const postsDirectory = path.join(__dirname, 'source/_posts');
const outputDirectory = path.join(__dirname, 'public/api');
const outputFile = path.join(outputDirectory, 'posts.json');

// 读取所有文章
const files = fs.readdirSync(postsDirectory);
const posts = files.reverse().slice(0, 4).map(file => {
  const fullPath = path.join(postsDirectory, file);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const frontmatter = matter(fileContents);

  return {
    title: frontmatter.data.title,
    image: frontmatter.data.index_img,
    desc: frontmatter.content.replace(/<!--[\s\S]*?-->/g, '').replace(/(\r\n|\n|\r)|([#>*_`])/gm, '').slice(0, 100), // 或者任何你想要的内容摘录
    url: `https://guiblogs.com/${path.basename(fullPath, path.extname(fullPath)).slice(11)}/`,
  };
});

// 创建输出目录（如果不存在）
if (!fs.existsSync(outputDirectory)){
  fs.mkdirSync(outputDirectory, { recursive: true });
}

// 写入 JSON 文件
fs.writeFileSync(outputFile, JSON.stringify(posts, null, 2));
console.log('Posts API generated.');
