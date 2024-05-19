import Link from "next/link";
import styles from "../styles/index.module.css";

const avatars = [
  { id: 1, name: "Avatar 1", imageUrl: "/data/image/sample1.png" },
  { id: 2, name: "Avatar 2", imageUrl: "/data/image/sample2.png" },
];

export default function Home() {
  return (
    <div>
      <h1>Avatar List</h1>
      <ul className={styles.avatarList}>
        {avatars.map((avatar) => (
          <li key={avatar.id}>
            <Link href={`/view/${avatar.id}`}>
              <div className={styles.avatarContainer}>
                <p className={styles.avatarName}>{avatar.name}</p>

                <img
                  src={avatar.imageUrl}
                  alt={avatar.name}
                  width={50}
                  height={50}
                  className={styles.avatarImage}
                />
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
