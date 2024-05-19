// EditAvatar.js

// import fs from "fs"; // fsモジュールはブラウザ環境で使用できませんのでコメントアウトします
import path from "path";
import { useRouter } from "next/router";
import { useState } from "react";
import AvatarEditor from "react-avatar-editor";
import styles from "../../styles/EditAvatar.module.css"; // CSSファイルのインポート
import parts from "../../public/data/parts/index.json"; // ファイルを直接インポート

// parts フォルダ内の画像ファイル名を取得する関数
function getPartImageFiles(partName) {
  if (parts.hasOwnProperty(partName)) {
    // ファイル名にパスを付加して返す
    return parts[partName].map((part) => `${part}`);
  } else {
    console.error(`指定されたパーツ '${partName}' が見つかりませんでした。`);
    return [];
  }
}

export default function EditAvatar() {
  const router = useRouter();
  const { id } = router.query;
  const [selectedPart, setSelectedPart] = useState(getPartImageFiles()[0]); // 最初のパーツを選択済みにする

  const handleSave = () => {
    alert("Avatar saved!");
  };

  // 各パーツの画像ファイル名を取得
  const faceImageFiles = getPartImageFiles("face");
  const eyeImageFiles = getPartImageFiles("eyes");
  const eyebrowImageFiles = getPartImageFiles("eyebrows");
  const mouthImageFiles = getPartImageFiles("mouse");
  const cheekImageFiles = getPartImageFiles("cheeks");
  const noseImageFiles = getPartImageFiles("nose");

  return (
    <div>
      <h1>Edit Avatar {id}</h1>
      <div className={styles.container}>
        {/*  プレビュー画面*/}
        <div className={styles.avatar}>
          <AvatarEditor
            image="/data/image/sample1.png"
            width={500} // 幅を300pxに設定
            height={500} // 高さを300pxに設定
          />
        </div>

        {/* パーツ画像の表示 */}
        <div className={styles.part_images}>
          {/* 顔 */}
          <div className={styles.partImages}>
            {faceImageFiles.map((filename) => (
              <img
                key={filename}
                src={`../../data/parts/${filename}`}
                alt={filename}
                className={styles.face_parts_image}
              />
            ))}
          </div>
          {/* 目 */}
          <div className={styles.partImages}>
            {eyeImageFiles.map((filename) => (
              <img
                key={filename}
                src={`../../data/parts/${filename}`}
                alt={filename}
              />
            ))}
          </div>
          {/* 口 */}
          <div className={styles.partImages}>
            {mouthImageFiles.map((filename) => (
              <img
                key={filename}
                src={`../../data/parts/${filename}`}
                alt={filename}
              />
            ))}
          </div>
          {/* 眉 */}
          <div className={styles.partImages}>
            {eyebrowImageFiles.map((filename) => (
              <img
                key={filename}
                src={`../../data/parts/${filename}`}
                alt={filename}
              />
            ))}
          </div>
          {/* チーク */}
          <div className={styles.partImages}>
            {cheekImageFiles.map((filename) => (
              <img
                key={filename}
                src={`../../data/parts/${filename}`}
                alt={filename}
              />
            ))}
          </div>
          {/* 鼻 */}
          <div className={styles.partImages}>
            {noseImageFiles.map((filename) => (
              <img
                key={filename}
                src={`../../data/parts/${filename}`}
                alt={filename}
              />
            ))}
          </div>
        </div>
      </div>
      {/* 保存ボタン */}
      <button onClick={handleSave}>Save</button>
    </div>
  );
}
