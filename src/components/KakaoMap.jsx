/*global kakao */
import React, { useEffect } from "react";
import { TbMap2 } from "react-icons/tb";
import { AiOutlineMail } from "react-icons/ai";
import { AiOutlinePhone } from "react-icons/ai";
import { useState } from "react";
import Fade from "react-reveal/Fade";
import ContactUs from "./Email";

export default function KakaoMap() {
  useEffect(() => {
    mapscript();
  }, []);

  const [mouseOver, setMouseOver] = useState(false);
  const [mouseOverTwo, setMouseOverTwo] = useState(false);
  const [mouseOverThree, setMouseOverThree] = useState(false);

  const mapscript = () => {
    let container = document.getElementById("map");
    let options = {
      center: new kakao.maps.LatLng(36.34851082043921, 127.382162385308),
      level: 4,
    };
    //map
    const map = new kakao.maps.Map(container, options);

    //마커가 표시 될 위치
    let markerPosition = new kakao.maps.LatLng(
      36.34851082043921,
      127.382162385308
    );

    // 마커를 생성
    let marker = new kakao.maps.Marker({
      position: markerPosition,
    });

    // 마커를 지도 위에 표시
    marker.setMap(map);
  };

  return (
    <div
      style={{ margin: "auto", width: "60%" }}
      id="contact"
      className="pt-20"
    >
      <Fade bottom>
        <p className="text-2xl font-bold">Contact Us</p>
      </Fade>
      <Fade bottom>
        <div
          className="mt-4 mb-3 bg-white rounded-lg shadow-md"
          style={{ height: "300px" }}
        >
          <div
            className="rounded-lg shadow-md"
            id="map"
            style={{ height: "300px" }}
          ></div>
        </div>
      </Fade>
      <div className="flex mt-16 mb-16">
        <div>
          <div className="flex">
            <div className="flex items-center justify-center w-12 h-12 bg-blue-500 rounded-full">
              <TbMap2 className="text-3xl text-white" />
            </div>
            <div className="grid ml-3">
              <div>
                <p className="text-sm font-bold">주소</p>
              </div>
              <div>
                <p className="text-sm">
                  대전 서구 계룡로491번길 86 미래융합교육원
                </p>
              </div>
            </div>
          </div>
          <div className="flex mt-5">
            <div className="flex items-center justify-center w-12 h-12 bg-blue-500 rounded-full">
              <AiOutlineMail className="text-3xl text-white" />
            </div>
            <div className="grid ml-3">
              <div>
                <p className="text-sm font-bold">메일</p>
              </div>
              <div>
                <p className="text-sm">omorobot123@sample.com</p>
              </div>
            </div>
          </div>
          <div className="flex mt-5">
            <div className="flex items-center justify-center w-12 h-12 bg-blue-500 rounded-full">
              <AiOutlinePhone className="text-3xl text-white" />
            </div>
            <div className="grid ml-3">
              <div>
                <p className="text-sm font-bold">연락처</p>
              </div>
              <div>
                <p className="text-sm">042-333-0000</p>
              </div>
            </div>
          </div>
        </div>

        <div style={{ flexGrow: 2 }} className="ml-32 bg-white ">
          <ContactUs />
        </div>
      </div>

      {/* <Fade bottom>
        <div className="flex justify-between">
          <div
            id="map-card"
            className={
              mouseOver
                ? "grid items-center h-48 mb-4 bg-blue-500 rounded-lg shadow-lg duration-300"
                : "grid items-center h-48 mb-4 bg-white rounded-lg shadow-lg duration-300"
            }
            onMouseOver={() => {
              setMouseOver((mouseOver) => !mouseOver);
            }}
            onMouseLeave={() => {
              setMouseOver((mouseOver) => !mouseOver);
            }}
            style={{ width: "360px" }}
          >
            <div className="grid items-center justify-center lign-middle">
              <div className="flex justify-center mb-2">
                <p className="text-5xl text-center">
                  <TbMap2
                    className={
                      mouseOver
                        ? " text-white duration-300"
                        : "text-blue-500 duration-300"
                    }
                  />
                </p>
              </div>
              <p
                className={
                  mouseOver
                    ? " mb-2 text-lg font-bold text-center text-white duration-300"
                    : "mb-2 text-lg font-bold text-center duration-300"
                }
              >
                주소
              </p>
              <p
                className={
                  mouseOver ? "  text-white duration-300" : " duration-300"
                }
              >
                대전 서구 계룡로491번길 86 미래융합교육원
              </p>
            </div>
          </div>
          <div
            id="map-card"
            className={
              mouseOverTwo
                ? "grid items-center h-48 mb-4 bg-blue-500 rounded-lg shadow-lg duration-300"
                : "grid items-center h-48 mb-4 bg-white rounded-lg shadow-lg duration-300"
            }
            onMouseOver={() => {
              setMouseOverTwo((mouseOverTwo) => !mouseOverTwo);
            }}
            onMouseLeave={() => {
              setMouseOverTwo((mouseOverTwo) => !mouseOverTwo);
            }}
            style={{ width: "360px" }}
          >
            <div className="grid items-center justify-center lign-middle">
              <div className="flex justify-center mb-2">
                <p className="text-5xl text-center">
                  <AiOutlineMail
                    className={
                      mouseOverTwo
                        ? " text-white duration-300"
                        : "text-blue-500 duration-300"
                    }
                  />
                </p>
              </div>
              <p
                className={
                  mouseOverTwo
                    ? " mb-2 text-lg font-bold text-center text-white duration-300"
                    : "mb-2 text-lg font-bold text-center duration-300"
                }
              >
                메일
              </p>
              <p
                className={
                  mouseOverTwo ? "  text-white duration-300" : " duration-300"
                }
              >
                omorobot123@sample.com
              </p>
            </div>
          </div>
          <div
            id="map-card"
            className={
              mouseOverThree
                ? "grid items-center h-48 mb-4 bg-blue-500 rounded-lg shadow-lg duration-300"
                : "grid items-center h-48 mb-4 bg-white rounded-lg shadow-lg duration-300"
            }
            onMouseOver={() => {
              setMouseOverThree((mouseOverThree) => !mouseOverThree);
            }}
            onMouseLeave={() => {
              setMouseOverThree((mouseOverThree) => !mouseOverThree);
            }}
            style={{ width: "360px" }}
          >
            <div className="grid items-center justify-center lign-middle">
              <div className="flex justify-center mb-2">
                <p className="text-5xl text-center">
                  <AiOutlinePhone
                    className={
                      mouseOverThree
                        ? " text-white duration-300"
                        : "text-blue-500 duration-300"
                    }
                  />
                </p>
              </div>
              <p
                className={
                  mouseOverThree
                    ? " mb-2 text-lg font-bold text-center text-white duration-300"
                    : "mb-2 text-lg font-bold text-center duration-300"
                }
              >
                연락처
              </p>
              <p
                className={
                  mouseOverThree ? "  text-white duration-300" : " duration-300"
                }
              >
                042-330-0000
              </p>
            </div>
          </div>
        </div>
      </Fade> */}
    </div>
  );
}
