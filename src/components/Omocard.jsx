import mapimg from "../img/map.png";
import Button from "react-bootstrap/Button";
import ProgressBar from "react-bootstrap/ProgressBar";
import React, { useState } from "react";
import { BsBatteryFull } from "react-icons/bs";
import { FaRunning } from "react-icons/fa";
import { BsSpeedometer2 } from "react-icons/bs";
import { ImConnection } from "react-icons/im";

export default function Omocard() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [robotNum, setRobotNum] = useState("");
  return (
    <div style={{ margin: "auto", width: "90%" }}>
      <p className="mt-5 text-3xl font-bold">Robot</p>
      <div
        className={
          menuOpen
            ? " duration-500 mt-4 mb-4 flex justify-center  bg-white rounded-lg shadow-lg pt-4 pb-4"
            : " duration-500 mt-4 mb-4 flex justify-center  bg-white rounded-lg shadow-lg pt-4 pb-4"
        }
      >
        <div>
          <img
            src={mapimg}
            className={
              menuOpen
                ? " rounded-xl scale-50	duration-500"
                : " rounded-xl duration-500"
            }
          />
        </div>

        <div
          className={
            menuOpen
              ? " grid content-center gap-4 -ml-20 duration-500 z-10"
              : " grid content-center gap-4 ml-10 duration-500 z-10"
          }
        >
          <div className="flex items-center">
            <Button
              variant="primary"
              className="bg-blue-500 border-none "
              onClick={() => {
                setMenuOpen((menuOpen) => !menuOpen);
                setRobotNum("Robot A");
              }}
            >
              Robot A
            </Button>
            <div className="flex">
              <ProgressBar now={60} className="w-20 mt-1 ml-3" />
              <p className="ml-1">(60%)</p>
            </div>
          </div>
          <div className="flex items-center">
            <Button
              variant="success"
              className="text-white bg-green-500 border-none hover:bg-green-600"
              onClick={() => {
                setMenuOpen((menuOpen) => !menuOpen);
                setRobotNum("Robot B");
              }}
            >
              Robot B
            </Button>{" "}
            <div className="flex">
              <ProgressBar now={80} className="w-20 mt-1 ml-3" />
              <p className="ml-1">(80%)</p>
            </div>
          </div>
          <div className="flex items-center">
            <Button
              variant="danger"
              className="text-white bg-red-500 border-none hover:bg-red-600"
              onClick={() => {
                setMenuOpen((menuOpen) => !menuOpen);
                setRobotNum("Robot C");
              }}
            >
              Robot C
            </Button>{" "}
            <div className="flex">
              <ProgressBar now={100} className="w-20 mt-1 ml-3" />
              <p className="ml-1">(100%)</p>
            </div>
          </div>
        </div>
        <div
          className={
            menuOpen
              ? " ml-10 rounded-lg w-96 h-70 z-0 duration-500  shadow-lg"
              : " ml-10 rounded-lg w-96 h-70 z-0 -mr-96 duration-500 opacity-0 shadow-lg"
          }
        >
          <div className="font-bold bg-indigo-700 rounded-t-lg ">
            <p className="text-center text-white">{robotNum}</p>
          </div>
          <div className="flex justify-center mt-7">
            <div className="flex mt-4 col-10 h-13">
              <BsBatteryFull className="text-3xl text-blue-500" />
              <p className="mt-1 ml-3 font-bold ">배터리</p>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="flex mt-4 col-10 h-13">
              <FaRunning className="text-3xl text-blue-500" />
              <p className="mt-1 ml-3 font-bold ">구동시간</p>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="flex mt-4 col-10 h-13">
              <BsSpeedometer2 className="text-3xl text-blue-500" />
              <p className="mt-1 ml-3 font-bold ">속도</p>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="flex mt-4 col-10 h-13">
              <ImConnection className="text-3xl text-blue-500" />
              <p className="mt-1 ml-3 font-bold ">연결상태</p>
            </div>
          </div>
          <Button
            variant="primary"
            className="mt-5 ml-8 font-semibold bg-blue-500 border-none "
          >
            제어하기
          </Button>
        </div>
      </div>
    </div>
  );
}
