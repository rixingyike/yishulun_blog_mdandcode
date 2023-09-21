import globby from "globby";
import matter from "gray-matter";
import fs from "fs-extra";
import path from "path";

export async function getPosts() {
  let paths = await getPostMDFilePaths();
  let posts = await Promise.all(
    paths.map(async (item) => {
      const content = await fs.readFile(item, "utf-8");
      const { data } = matter(content);
      data.date = _convertDate(data.date);
      
      if (!data.title) {
        const title = readMdFile(item, content);
        data.title = title
      }
      
      return {
        frontMatter: data,
        regularPath: `/${item.replace(".md", ".html").replace("src", "")}`,
      };
    })
  );
  posts.sort(_compareDate);
  return posts;
}

// 从MD文件中读取#title作为文章的标题
function readMdFile(filePath, content) {
  // 不用重复读取md文件的内容了
  // 解析出#title（标题）的内容
  let titles = content.match(/^#\s*(.+)/m);
  
  if (titles) {
    return titles[1];
  } else {
    let ret = filePath.match(/\/([^\/]+)\.md+$/)
    if (ret) return ret[1];
    return "title";
  }
}

function _convertDate(date = new Date().toString()) {
  const json_date = new Date(date).toJSON();
  return json_date.split("T")[0];
}

function _compareDate(obj1, obj2) {
  return obj1.frontMatter.date < obj2.frontMatter.date ? 1 : -1;
}

async function getPostMDFilePaths() {
  let paths = await globby(["**.md"], {
    ignore: ["node_modules", "README.md"],
  });
  return paths.filter((item) => item.includes("posts/"));
}

export async function getPostLength() {
  // getPostMDFilePath return type is object not array
  return [...(await getPostMDFilePaths())].length;
}
