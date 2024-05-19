// 一覧画面

import Link from "next/link";

const avatars = [
  { id: 1, name: "Avatar 1", imageUrl: "/avatars/avatar1.png" },
  { id: 2, name: "Avatar 2", imageUrl: "/avatars/avatar2.png" },
];

export default function Home() {
  return (
    <div>
      <h1>Avatar List</h1>
      <ul>
        {avatars.map((avatar) => (
          <li key={avatar.id}>
            <Link href={`/view/${avatar.id}`}>
              <a>
                <img
                  src={avatar.imageUrl}
                  alt={avatar.name}
                  width={50}
                  height={50}
                />
                <p>{avatar.name}</p>
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
