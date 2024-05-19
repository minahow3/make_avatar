//編集画面

import { useRouter } from "next/router";
import { useState } from "react";
import AvatarEditor from "react-avatar-editor";

const parts = [
  { id: "part1", name: "Part 1" },
  { id: "part2", name: "Part 2" },
];

export default function EditAvatar() {
  const router = useRouter();
  const { id } = router.query;
  const [selectedPart, setSelectedPart] = useState(parts[0].id);

  const handleSave = () => {
    alert("Avatar saved!");
  };

  return (
    <div>
      <h1>Edit Avatar {id}</h1>
      <AvatarEditor
        image="/avatars/default.png"
        width={250}
        height={250}
        border={50}
        color={[255, 255, 255, 0.6]} // RGBA
        scale={1.2}
      />
      <div>
        <h2>Select Part</h2>
        <select
          onChange={(e) => setSelectedPart(e.target.value)}
          value={selectedPart}
        >
          {parts.map((part) => (
            <option key={part.id} value={part.id}>
              {part.name}
            </option>
          ))}
        </select>
      </div>
      <button onClick={handleSave}>Save</button>
    </div>
  );
}
