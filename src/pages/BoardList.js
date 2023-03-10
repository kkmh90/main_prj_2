import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import CommonTable from "../components/table/CommonTable";
import CommonTableColumn from "../components/table/CommonTableColumn";
import CommonTableRow from "../components/table/CommonTableRow";

function GetData() {
  const [data, setData] = useState({});
  useEffect(() => {
    axios.get("http://localhost:4000/board/list").then((response) => {
      setData(response.data);
    });
  }, []);

  const item = Object.values(data).map((item) => (
    <CommonTableRow key={item.id}>
      <CommonTableColumn>{item.id}</CommonTableColumn>
      <CommonTableColumn>{item.title}</CommonTableColumn>
      <CommonTableColumn>{item.createAt}</CommonTableColumn>
      <CommonTableColumn>{item.username}</CommonTableColumn>
    </CommonTableRow>
  ));
  return item;
}

function BoardList() {
  const item = GetData();

  return (
    <>
      <CommonTable headersName={["글번호", "제목", "등록일", "작성자"]}>
        {item}
      </CommonTable>
    </>
  );
}

export default BoardList;
