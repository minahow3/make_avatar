// pages/index.js
import fs from "fs";
import path from "path";
import Link from "next/link";

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), "data", "names.json");
  const jsonData = fs.readFileSync(filePath, "utf8");
  const namesList = JSON.parse(jsonData);

  return {
    props: {
      namesList,
    },
  };
}

export default function Home({ namesList }) {
  return (
    <div>
      <h1>名前とアイコンの一覧</h1>
      <ul>
        {namesList.map((item, index) => (
          <li key={index}>
            <Link href={`/${item.name}`}>
              {item.icon} {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
