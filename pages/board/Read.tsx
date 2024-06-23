import { useState, useEffect } from "react";
import { Board } from "../../constants/board";
import dayjs from "dayjs";

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
          <li>{data.boardData.title}</li>
          <li>{data.boardData.contents}</li>
          <li>{dayjs(data.boardData.regDate).format("YYYY/MM/DD")}</li>
        </div>
      ))}
    </ul>
  );
};

export default Read;
