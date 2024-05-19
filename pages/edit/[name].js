// pages/edit/[name].js
import { useRouter } from "next/router";
import { useState } from "react";
import fs from "fs";
import path from "path";

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

export default function EditPerson({ person }) {
  const router = useRouter();
  const [name, setName] = useState(person.name);
  const [icon, setIcon] = useState(person.icon);

  const handleSave = async () => {
    const updatedPerson = { name, icon };
    // Update the JSON file or backend with the new data (not implemented here)
    console.log("Saved:", updatedPerson);
    router.push(`/${name}`);
  };

  return (
    <div>
      <h1>{person.name}の編集</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSave();
        }}
      >
        <div>
          <label>名前: </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label>アイコン: </label>
          <input
            type="text"
            value={icon}
            onChange={(e) => setIcon(e.target.value)}
          />
        </div>
        <button type="submit">保存</button>
      </form>
    </div>
  );
}
