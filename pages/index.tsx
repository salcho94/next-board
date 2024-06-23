// pages/index.tsx
import { useState, useEffect } from 'react';

type Board = {
    _id?: string;
    boardData:{
        title : string;
        contents : string;
        regDate : Date;
        uptDate : Date;
        password :string;
        viewCnt:number;
        topYn :string;
        likes :number;
    }
};

export default function Home() {
  const [boards, setUsers] = useState<Board[]>([]);

  useEffect(() => {
    fetch('/api/board')
        .then((response) => response.json())
        .then((data) => setUsers(data));
  }, []);

  return (
      <div>
        <h1>뽀동이의 게시판</h1>
        <ul>
          {boards.map((data) => (
              <div key={data._id}>
                  <li >{data._id}</li>
                  <li >{data.boardData.title}</li>
                  <li >{data.boardData.contents}</li>
                  <li >{data.boardData.regDate}</li>
                  <li >{data.boardData.title}</li>
              </div>
          ))}
        </ul>
      </div>
  );
}
