// 個別閲覧画面
import { useRouter } from "next/router";
import Link from "next/link";
import AvatarEditor from "react-avatar-editor";

export default function ViewAvatar() {
  const router = useRouter();
  const { id } = router.query;

  const handleDownload = () => {
    alert("Download PNG");
  };

  return (
    <div>
      <h1>View Avatar {id}</h1>
      <AvatarEditor
        image="/avatars/default.png"
        width={250}
        height={250}
        border={50}
        color={[255, 255, 255, 0.6]} // RGBA
        scale={1.2}
        disableBoundaryChecks={true}
      />
      <div>
        <Link href={`/edit/${id}`}>
          <a>Edit</a>
        </Link>
        <button onClick={handleDownload}>Download PNG</button>
      </div>
    </div>
  );
}
