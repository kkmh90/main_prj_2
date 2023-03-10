import NewNavBoard from "../../components/NewNavBoard";

export default function BoardList() {
  return (
    <div>
      <NewNavBoard />
      <div style={{ margin: "auto", width: "60%" }} className="h-screen">
        <div>.</div>
        <table class="board-table mt-20">
          <thead>
            <tr className="text-center">
              <th scope="col" className="pb-3 col-1">
                번호
              </th>
              <th scope="col" className="pb-3 col-2">
                제목
              </th>
              <th scope="col" className="pb-3 col-1">
                이름
              </th>
              <th scope="col" className="pb-3 col-1">
                등록일
              </th>
            </tr>
          </thead>
          <tbody className="border-t-2 border-black ">
            <tr className="border-b border-gray-300">
              <td className="pt-2 pb-2 text-center">3</td>
              <th>
                <a href="#!">[공지사항] 개인정보 처리방침 변경안내처리방침</a>
              </th>
              <td className="pt-2 pb-2 text-center">강호동</td>
              <td className="pt-2 pb-2 text-center">2023.01.01</td>
            </tr>

            <tr className="border-b border-gray-300">
              <td className="pt-2 pb-2 text-center">2</td>
              <th>
                <a href="#!">공지사항 안내입니다. 이용해주셔서 감사합니다</a>
              </th>
              <td className="pt-2 pb-2 text-center">이수근</td>
              <td className="pt-2 pb-2 text-center">2023.01.02</td>
            </tr>

            <tr className="border-b border-gray-300">
              <td className="pt-2 pb-2 text-center">1</td>
              <th>
                <a href="#!">공지사항 안내입니다. 이용해주셔서 감사합니다</a>
              </th>
              <td className="pt-2 pb-2 text-center">은지원</td>
              <td className="pt-2 pb-2 text-center">2023.01.03</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
