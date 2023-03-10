import React, { useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function BoardDetail() {
  const { dataId } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:4000/board/list_id?id=${dataId}&type=single`)
      .then((response) => {
        if (response.data.success) {
          console.log(response.data);
        } else {
          alert("상세 정보 가져오기를 실패했습니다.");
        }
      });
  }, []);

  return <div>BoardDetail</div>;
}

export default BoardDetail;
