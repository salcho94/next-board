import { useState, useEffect } from "react";
import { Board } from "../constants/board";

const Read = () => {
  const [boards, setUsers] = useState<Board[]>([]);
  useEffect(() => {
    fetch("/api/board")
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);
  return (
    <ul>
      {boards.map((data) => (
        <div key={data._id}>
          <li>{data._id}</li>
          <li>{data.boardData.title}</li>
          <li>{data.boardData.contents}</li>
          <li>{data.boardData.regDate}</li>
          <li>{data.boardData.title}</li>
        </div>
      ))}
    </ul>
  );
};

export default Read;
