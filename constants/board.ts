type BoardList = {
  title: string;
  contents: string;
  regDate: Date;
  uptDate: Date;
  password: string;
  viewCnt: number;
  topYn: string;
  likes: number;
};

export type Board = {
  _id?: string;
  boardData: BoardList;
};
