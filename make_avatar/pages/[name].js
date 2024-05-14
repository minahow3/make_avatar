// pages/[name].js
import { useRouter } from "next/router";
import fs from "fs";
import path from "path";
import Link from "next/link";

export async function getStaticPaths() {
  const filePath = path.join(process.cwd(), "data", "names.json");
  const jsonData = fs.readFileSync(filePath, "utf8");
  const namesList = JSON.parse(jsonData);

  const paths = namesList.map((item) => ({
    params: { name: item.name },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const filePath = path.join(process.cwd(), "data", "names.json");
  const jsonData = fs.readFileSync(filePath, "utf8");
  const namesList = JSON.parse(jsonData);

  const person = namesList.find((item) => item.name === params.name);

  return {
    props: {
      person,
    },
  };
}

export default function Person({ person }) {
  const router = useRouter();

  const downloadIcon = () => {
    const link = document.createElement("a");
    link.href = `/icons/${person.name}.png`;
    link.download = `${person.name}.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div>
      <h1>{person.name}の詳細</h1>
      <div style={{ fontSize: "4rem" }}>{person.icon}</div>
      <button onClick={downloadIcon}>PNGダウンロード</button>
      <Link href={`/edit/${person.name}`}>
        <button>編集</button>
      </Link>
    </div>
  );
}
