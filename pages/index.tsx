// pages/index.tsx
import Link from "next/link";
import Read from "./board/Read";

export default function Home() {
  return (
    <div>
      <h1>뽀동이의 게시판</h1>
      <Read />
      <Link href={"./board/create"}>글쓰기</Link>
    </div>
  );
}
