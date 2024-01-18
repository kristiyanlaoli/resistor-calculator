import { useState } from "react";
import formatNumber from "../utils/formatNumber";
import bg1 from "../utils/bg1";
import bg2 from "../utils/bg2";
import bg3 from "../utils/bg3";
import bg4 from "../utils/bg4";
import bg5 from "../utils/bg5";

let Resistor = () => {
  const [value1, setValue1] = useState(0);
  const [value2, setValue2] = useState(0);
  const [value3, setValue3] = useState(0);
  const [multiplier, setMultiplier] = useState(1);
  const [tolerance, setTolerance] = useState("");

  return (

      <div className="flex flex-wrap justify-center gap-20 bg-slate-200 lg:pt-16 pb-16">
        <div className="bg-orange-200 rounded-2xl border-2 border-slate-800 h-[74px] w-[260px] mt-8 lg:mt-24 relative">
          <div
            className={`${bg1[value1]} h-[70px] w-[25px] left-[20px] absolute`}
          ></div>
          <div
            className={`${bg2[value2]} h-[70px] w-[25px] left-[60px] absolute`}
          ></div>
          <div
            className={`${bg3[value3]} h-[70px] w-[25px] left-[100px] absolute`}
          ></div>
          <div
            className={`${bg4[multiplier]} h-[70px] w-[25px] left-[140px] absolute`}
          ></div>
          <div
            className={`${bg5[tolerance]} h-[70px] w-[25px] left-[210px] absolute`}
          ></div>
           <p className="font-bold text-3xl text-center mt-24">{`R = ${formatNumber(
          (value1 + value2 + value3) * multiplier
        )}Ω ${tolerance}`}</p>

        
        </div>

       
        <div className="flex flex-wrap justify-center gap-2">
          <div className="bg-slate-300 p-2 w-[100px]">
            <p className="font-bold text-center pl-4 pb-2">Band 1</p>
            <div className="flex items-center mb-1">
              <input
                id="red-radio"
                type="radio"
                value=""
                onClick={() => {
                  setValue1(0);
                }}
                name="band-1"
                className="w-4 h-4 text-slate-950 bg-gray-100 border-gray-300 focus:ring-slate-900  focus:ring-2"
              ></input>
              <label
                htmlFor="red-radio"
                className="ms-2 text-sm font-medium text-gray-50 bg-black w-full pl-1"
              >
                Black
              </label>
            </div>
            <div className="flex items-center mb-1">
              <input
                id="red-radio"
                type="radio"
                value=""
                onClick={() => {
                  setValue1(100);
                }}
                name="band-1"
                className="w-4 h-4 text-yellow-900 bg-gray-100 border-gray-300 focus:ring-yellow-900  focus:ring-2"
              ></input>
              <label
                htmlFor="red-radio"
                className="ms-2 text-sm font-medium text-gray-50 bg-yellow-900 w-full pl-1"
              >
                Brown
              </label>
            </div>
            <div className="flex items-center mb-1">
              <input
                id="red-radio"
                type="radio"
                value=""
                onClick={() => {
                  setValue1(200);
                }}
                name="band-1"
                className="w-4 h-4 text-red-600 bg-gray-100 border-gray-300 focus:ring-red-600 focus:ring-2"
              ></input>
              <label
                htmlFor="red-radio"
                className="ms-2 text-sm font-medium text-gray-50 bg-red-600 w-full pl-1"
              >
                Red
              </label>
            </div>
            <div className="flex items-center mb-1">
              <input
                id="red-radio"
                type="radio"
                value=""
                onClick={() => {
                  setValue1(300);
                }}
                name="band-1"
                className="w-4 h-4 text-orange-500 bg-gray-100 border-gray-300 focus:ring-orange-500 focus:ring-2"
              ></input>
              <label
                htmlFor="red-radio"
                className="ms-2 text-sm font-medium text-gray-50 bg-orange-500 w-full pl-1"
              >
                Orange
              </label>
            </div>
            <div className="flex items-center mb-1">
              <input
                id="red-radio"
                type="radio"
                value=""
                onClick={() => {
                  setValue1(400);
                }}
                name="band-1"
                className="w-4 h-4 text-yellow-300 bg-gray-100 border-gray-300 focus:ring-yellow-300 focus:ring-2"
              ></input>
              <label
                htmlFor="red-radio"
                className="ms-2 text-sm font-medium text-gray-50 bg-yellow-300 w-full pl-1"
              >
                Yellow
              </label>
            </div>
            <div className="flex items-center mb-1">
              <input
                id="red-radio"
                type="radio"
                value=""
                onClick={() => {
                  setValue1(500);
                }}
                name="band-1"
                className="w-4 h-4 text-green-600 bg-gray-100 border-gray-300 focus:ring-green-500 focus:ring-2"
              ></input>
              <label
                htmlFor="red-radio"
                className="ms-2 text-sm font-medium text-gray-50 bg-green-600 w-full pl-1"
              >
                Green
              </label>
            </div>
            <div className="flex items-center mb-1">
              <input
                id="red-radio"
                type="radio"
                value=""
                onClick={() => {
                  setValue1(600);
                }}
                name="band-1"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-20"
              ></input>
              <label
                htmlFor="red-radio"
                className="ms-2 text-sm font-medium text-gray-50 bg-blue-600 w-full pl-1"
              >
                Blue
              </label>
            </div>
            <div className="flex items-center mb-1">
              <input
                id="red-radio"
                type="radio"
                value=""
                onClick={() => {
                  setValue1(700);
                }}
                name="band-1"
                className="w-4 h-4 text-fuchsia-600 bg-gray-100 border-gray-300 focus:ring-fuchsia-600 focus:ring-2"
              ></input>
              <label
                htmlFor="red-radio"
                className="ms-2 text-sm font-medium text-gray-50 bg-fuchsia-600 w-full pl-1"
              >
                Violet
              </label>
            </div>
            <div className="flex items-center mb-1">
              <input
                id="red-radio"
                type="radio"
                value=""
                onClick={() => {
                  setValue1(800);
                }}
                name="band-1"
                className="w-4 h-4 text-gray-600 bg-gray-100 border-gray-300 focus:ring-gray-500 focus:ring-2"
              ></input>
              <label
                htmlFor="red-radio"
                className="ms-2 text-sm font-medium text-gray-50 bg-gray-600 w-full pl-1"
              >
                Gray
              </label>
            </div>
            <div className="flex items-center mb-1">
              <input
                id="red-radio"
                type="radio"
                value=""
                onClick={() => {
                  setValue1(900);
                }}
                name="band-1"
                className="w-4 h-4 text-neutral-500 bg-gray-100 border-gray-300 focus:ring-neutral-600  focus:ring-2"
              ></input>
              <label
                htmlFor="red-radio"
                className="ms-2 text-sm font-medium text-gray-900 bg-neutral-50 w-full pl-1"
              >
                White
              </label>
            </div>
          </div>

          <div className="bg-slate-300 p-2 w-[100px]">
            <p className="font-bold text-center pl-4 pb-2">Band 2</p>
            <div className="flex items-center mb-1">
              <input
                id="red-radio"
                type="radio"
                value=""
                onClick={() => {
                  setValue2(0);
                }}
                name="band-2"
                className="w-4 h-4 text-slate-950 bg-gray-100 border-gray-300 focus:ring-slate-900  focus:ring-2"
              ></input>
              <label
                htmlFor="red-radio"
                className="ms-2 text-sm font-medium text-gray-50 bg-black w-full pl-1"
              >
                Black
              </label>
            </div>
            <div className="flex items-center mb-1">
              <input
                id="red-radio"
                type="radio"
                value=""
                onClick={() => {
                  setValue2(10);
                }}
                name="band-2"
                className="w-4 h-4 text-yellow-900 bg-gray-100 border-gray-300 focus:ring-yellow-900  focus:ring-2"
              ></input>
              <label
                htmlFor="red-radio"
                className="ms-2 text-sm font-medium text-gray-50 bg-yellow-900 w-full pl-1"
              >
                Brown
              </label>
            </div>
            <div className="flex items-center mb-1">
              <input
                id="red-radio"
                type="radio"
                value=""
                onClick={() => {
                  setValue2(20);
                }}
                name="band-2"
                className="w-4 h-4 text-red-600 bg-gray-100 border-gray-300 focus:ring-red-600 focus:ring-2"
              ></input>
              <label
                htmlFor="red-radio"
                className="ms-2 text-sm font-medium text-gray-50 bg-red-600 w-full pl-1"
              >
                Red
              </label>
            </div>
            <div className="flex items-center mb-1">
              <input
                id="red-radio"
                type="radio"
                value=""
                onClick={() => {
                  setValue2(30);
                }}
                name="band-2"
                className="w-4 h-4 text-orange-500 bg-gray-100 border-gray-300 focus:ring-orange-500 focus:ring-2"
              ></input>
              <label
                htmlFor="red-radio"
                className="ms-2 text-sm font-medium text-gray-50 bg-orange-500 w-full pl-1"
              >
                Orange
              </label>
            </div>
            <div className="flex items-center mb-1">
              <input
                id="red-radio"
                type="radio"
                value=""
                onClick={() => {
                  setValue2(40);
                }}
                name="band-2"
                className="w-4 h-4 text-yellow-300 bg-gray-100 border-gray-300 focus:ring-yellow-300 focus:ring-2"
              ></input>
              <label
                htmlFor="red-radio"
                className="ms-2 text-sm font-medium text-gray-50 bg-yellow-300 w-full pl-1"
              >
                Yellow
              </label>
            </div>
            <div className="flex items-center mb-1">
              <input
                id="red-radio"
                type="radio"
                value=""
                onClick={() => {
                  setValue2(50);
                }}
                name="band-2"
                className="w-4 h-4 text-green-600 bg-gray-100 border-gray-300 focus:ring-green-500 focus:ring-2"
              ></input>
              <label
                htmlFor="red-radio"
                className="ms-2 text-sm font-medium text-gray-50 bg-green-600 w-full pl-1"
              >
                Green
              </label>
            </div>
            <div className="flex items-center mb-1">
              <input
                id="red-radio"
                type="radio"
                value=""
                onClick={() => {
                  setValue2(60);
                }}
                name="band-2"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-20"
              ></input>
              <label
                htmlFor="red-radio"
                className="ms-2 text-sm font-medium text-gray-50 bg-blue-600 w-full pl-1"
              >
                Blue
              </label>
            </div>
            <div className="flex items-center mb-1">
              <input
                id="red-radio"
                type="radio"
                value=""
                onClick={() => {
                  setValue2(70);
                }}
                name="band-2"
                className="w-4 h-4 text-fuchsia-600 bg-gray-100 border-gray-300 focus:ring-fuchsia-600 focus:ring-2"
              ></input>
              <label
                htmlFor="red-radio"
                className="ms-2 text-sm font-medium text-gray-50 bg-fuchsia-600 w-full pl-1"
              >
                Violet
              </label>
            </div>
            <div className="flex items-center mb-1">
              <input
                id="red-radio"
                type="radio"
                value=""
                onClick={() => {
                  setValue2(80);
                }}
                name="band-2"
                className="w-4 h-4 text-gray-600 bg-gray-100 border-gray-300 focus:ring-gray-500 focus:ring-2"
              ></input>
              <label
                htmlFor="red-radio"
                className="ms-2 text-sm font-medium text-gray-50 bg-gray-600 w-full pl-1"
              >
                Gray
              </label>
            </div>
            <div className="flex items-center mb-1">
              <input
                id="red-radio"
                type="radio"
                value=""
                onClick={() => {
                  setValue2(90);
                }}
                name="band-2"
                className="w-4 h-4 text-neutral-500 bg-gray-100 border-gray-300 focus:ring-neutral-500  focus:ring-2"
              ></input>
              <label
                htmlFor="red-radio"
                className="ms-2 text-sm font-medium text-gray-900 bg-neutral-50 w-full pl-1"
              >
                White
              </label>
            </div>
          </div>

          <div className="bg-slate-300 p-2 w-[100px]">
            <p className="font-bold text-center pl-4 pb-2">Band 3</p>
            <div className="flex items-center mb-1">
              <input
                id="red-radio"
                type="radio"
                value=""
                onClick={() => {
                  setValue3(0);
                }}
                name="band-3"
                className="w-4 h-4 text-slate-950 bg-gray-100 border-gray-300 focus:ring-slate-900  focus:ring-2"
              ></input>
              <label
                htmlFor="red-radio"
                className="ms-2 text-sm font-medium text-gray-50 bg-black w-full pl-1"
              >
                Black
              </label>
            </div>
            <div className="flex items-center mb-1">
              <input
                id="red-radio"
                type="radio"
                value=""
                onClick={() => {
                  setValue3(1);
                }}
                name="band-3"
                className="w-4 h-4 text-yellow-900 bg-gray-100 border-gray-300 focus:ring-yellow-900  focus:ring-2"
              ></input>
              <label
                htmlFor="red-radio"
                className="ms-2 text-sm font-medium text-gray-50 bg-yellow-900 w-full pl-1"
              >
                Brown
              </label>
            </div>
            <div className="flex items-center mb-1">
              <input
                id="red-radio"
                type="radio"
                value=""
                onClick={() => {
                  setValue3(2);
                }}
                name="band-3"
                className="w-4 h-4 text-red-600 bg-gray-100 border-gray-300 focus:ring-red-600 focus:ring-2"
              ></input>
              <label
                htmlFor="red-radio"
                className="ms-2 text-sm font-medium text-gray-50 bg-red-600 w-full pl-1"
              >
                Red
              </label>
            </div>
            <div className="flex items-center mb-1">
              <input
                id="red-radio"
                type="radio"
                value=""
                onClick={() => {
                  setValue3(3);
                }}
                name="band-3"
                className="w-4 h-4 text-orange-500 bg-gray-100 border-gray-300 focus:ring-orange-500 focus:ring-2"
              ></input>
              <label
                htmlFor="red-radio"
                className="ms-2 text-sm font-medium text-gray-50 bg-orange-500 w-full pl-1"
              >
                Orange
              </label>
            </div>
            <div className="flex items-center mb-1">
              <input
                id="red-radio"
                type="radio"
                value=""
                onClick={() => {
                  setValue3(4);
                }}
                name="band-3"
                className="w-4 h-4 text-yellow-300 bg-gray-100 border-gray-300 focus:ring-yellow-300 focus:ring-2"
              ></input>
              <label
                htmlFor="red-radio"
                className="ms-2 text-sm font-medium text-gray-50 bg-yellow-300 w-full pl-1"
              >
                Yellow
              </label>
            </div>
            <div className="flex items-center mb-1">
              <input
                id="red-radio"
                type="radio"
                value=""
                onClick={() => {
                  setValue3(5);
                }}
                name="band-3"
                className="w-4 h-4 text-green-600 bg-gray-100 border-gray-300 focus:ring-green-500 focus:ring-2"
              ></input>
              <label
                htmlFor="red-radio"
                className="ms-2 text-sm font-medium text-gray-50 bg-green-600 w-full pl-1"
              >
                Green
              </label>
            </div>
            <div className="flex items-center mb-1">
              <input
                id="red-radio"
                type="radio"
                value=""
                onClick={() => {
                  setValue3(6);
                }}
                name="band-3"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-20"
              ></input>
              <label
                htmlFor="red-radio"
                className="ms-2 text-sm font-medium text-gray-50 bg-blue-600 w-full pl-1"
              >
                Blue
              </label>
            </div>
            <div className="flex items-center mb-1">
              <input
                id="red-radio"
                type="radio"
                value=""
                onClick={() => {
                  setValue3(7);
                }}
                name="band-3"
                className="w-4 h-4 text-fuchsia-600 bg-gray-100 border-gray-300 focus:ring-fuchsia-600 focus:ring-2"
              ></input>
              <label
                htmlFor="red-radio"
                className="ms-2 text-sm font-medium text-gray-50 bg-fuchsia-600 w-full pl-1"
              >
                Violet
              </label>
            </div>
            <div className="flex items-center mb-1">
              <input
                id="red-radio"
                type="radio"
                value=""
                onClick={() => {
                  setValue3(8);
                }}
                name="band-3"
                className="w-4 h-4 text-gray-600 bg-gray-100 border-gray-300 focus:ring-gray-500 focus:ring-2"
              ></input>
              <label
                htmlFor="red-radio"
                className="ms-2 text-sm font-medium text-gray-50 bg-gray-600 w-full pl-1"
              >
                Gray
              </label>
            </div>
            <div className="flex items-center mb-1">
              <input
                id="red-radio"
                type="radio"
                value=""
                onClick={() => {
                  setValue3(9);
                }}
                name="band-3"
                className="w-4 h-4 text-neutral-500 bg-gray-100 border-gray-300 focus:ring-neutral-500  focus:ring-2"
              ></input>
              <label
                htmlFor="red-radio"
                className="ms-2 text-sm font-medium text-gray-900 bg-neutral-50 w-full pl-1"
              >
                White
              </label>
            </div>
          </div>

          <div className="bg-slate-300 p-2 w-[100px]">
            <p className="font-bold text-center pl-4 pb-2">Band 4</p>
            <div className="flex items-center mb-1">
              <input
                id="red-radio"
                type="radio"
                value=""
                onClick={() => {
                  setMultiplier(1);
                }}
                name="band-4"
                className="w-4 h-4 text-slate-950 bg-gray-100 border-gray-300 focus:ring-slate-900  focus:ring-2"
              ></input>
              <label
                htmlFor="red-radio"
                className="ms-2 text-sm font-medium text-gray-50 bg-black w-full pl-1"
              >
                Black
              </label>
            </div>
            <div className="flex items-center mb-1">
              <input
                id="red-radio"
                type="radio"
                value=""
                onClick={() => {
                  setMultiplier(10);
                }}
                name="band-4"
                className="w-4 h-4 text-yellow-900 bg-gray-100 border-gray-300 focus:ring-yellow-900  focus:ring-2"
              ></input>
              <label
                htmlFor="red-radio"
                className="ms-2 text-sm font-medium text-gray-50 bg-yellow-900 w-full pl-1"
              >
                Brown
              </label>
            </div>
            <div className="flex items-center mb-1">
              <input
                id="red-radio"
                type="radio"
                value=""
                onClick={() => {
                  setMultiplier(100);
                }}
                name="band-4"
                className="w-4 h-4 text-red-600 bg-gray-100 border-gray-300 focus:ring-red-600 focus:ring-2"
              ></input>
              <label
                htmlFor="red-radio"
                className="ms-2 text-sm font-medium text-gray-50 bg-red-600 w-full pl-1"
              >
                Red
              </label>
            </div>
            <div className="flex items-center mb-1">
              <input
                id="red-radio"
                type="radio"
                value=""
                onClick={() => {
                  setMultiplier(1000);
                }}
                name="band-4"
                className="w-4 h-4 text-orange-500 bg-gray-100 border-gray-300 focus:ring-orange-500 focus:ring-2"
              ></input>
              <label
                htmlFor="red-radio"
                className="ms-2 text-sm font-medium text-gray-50 bg-orange-500 w-full pl-1"
              >
                Orange
              </label>
            </div>
            <div className="flex items-center mb-1">
              <input
                id="red-radio"
                type="radio"
                value=""
                onClick={() => {
                  setMultiplier(10000);
                }}
                name="band-4"
                className="w-4 h-4 text-yellow-300 bg-gray-100 border-gray-300 focus:ring-yellow-300 focus:ring-2"
              ></input>
              <label
                htmlFor="red-radio"
                className="ms-2 text-sm font-medium text-gray-50 bg-yellow-300 w-full pl-1"
              >
                Yellow
              </label>
            </div>
            <div className="flex items-center mb-1">
              <input
                id="red-radio"
                type="radio"
                value=""
                onClick={() => {
                  setMultiplier(100000);
                }}
                name="band-4"
                className="w-4 h-4 text-green-600 bg-gray-100 border-gray-300 focus:ring-green-500 focus:ring-2"
              ></input>
              <label
                htmlFor="red-radio"
                className="ms-2 text-sm font-medium text-gray-50 bg-green-600 w-full pl-1"
              >
                Green
              </label>
            </div>
            <div className="flex items-center mb-1">
              <input
                id="red-radio"
                type="radio"
                value=""
                onClick={() => {
                  setMultiplier(1000000);
                }}
                name="band-4"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-20"
              ></input>
              <label
                htmlFor="red-radio"
                className="ms-2 text-sm font-medium text-gray-50 bg-blue-600 w-full pl-1"
              >
                Blue
              </label>
            </div>
            <div className="flex items-center mb-1">
              <input
                id="red-radio"
                type="radio"
                value=""
                onClick={() => {
                  setMultiplier(10000000);
                }}
                name="band-4"
                className="w-4 h-4 text-fuchsia-600 bg-gray-100 border-gray-300 focus:ring-fuchsia-600 focus:ring-2"
              ></input>
              <label
                htmlFor="red-radio"
                className="ms-2 text-sm font-medium text-gray-50 bg-fuchsia-600 w-full pl-1"
              >
                Violet
              </label>
            </div>
            <div className="flex items-center mb-1">
              <input
                id="red-radio"
                type="radio"
                value=""
                onClick={() => {
                  setMultiplier(100000000);
                }}
                name="band-4"
                className="w-4 h-4 text-gray-600 bg-gray-100 border-gray-300 focus:ring-gray-500 focus:ring-2"
              ></input>
              <label
                htmlFor="red-radio"
                className="ms-2 text-sm font-medium text-gray-50 bg-gray-600 w-full pl-1"
              >
                Gray
              </label>
            </div>
            <div className="flex items-center mb-1">
              <input
                id="red-radio"
                type="radio"
                value=""
                onClick={() => {
                  setMultiplier(1000000000);
                }}
                name="band-4"
                className="w-4 h-4 text-neutral-500 bg-gray-100 border-gray-300 focus:ring-neutral-500  focus:ring-2"
              ></input>
              <label
                htmlFor="red-radio"
                className="ms-2 text-sm font-medium text-gray-900 bg-neutral-50 w-full pl-1"
              >
                White
              </label>
            </div>
            <div className="flex items-center mb-1">
              <input
                id="red-radio"
                type="radio"
                value=""
                onClick={() => {
                  setMultiplier(0.1);
                }}
                name="band-4"
                className="w-4 h-4 text-[#cfb53b] bg-gray-100 border-gray-300 focus:ring-[#cfb53b]  focus:ring-2"
              ></input>
              <label
                htmlFor="red-radio"
                className="ms-2 text-sm font-medium text-gray-900 bg-[#cfb53b] w-full pl-1"
              >
                Gold
              </label>
            </div>
            <div className="flex items-center mb-1">
              <input
                id="red-radio"
                type="radio"
                value=""
                onClick={() => {
                  setMultiplier(0.01);
                }}
                name="band-4"
                className="w-4 h-4 text-neutral-500 bg-gray-100 border-gray-300 focus:ring-neutral-500  focus:ring-2"
              ></input>
              <label
                htmlFor="red-radio"
                className="ms-2 text-sm font-medium text-gray-900 bg-[#c0c0c0] w-full pl-1"
              >
                Silver
              </label>
            </div>
          </div>

          <div className="bg-slate-300 p-2 w-[100px]">
            <p className="font-bold text-center pl-4 pb-2">Band 5</p>
            <div className="flex items-center mb-1">
              <input
                id="red-radio"
                type="radio"
                value=""
                onClick={() => {
                  setTolerance("± 1%");
                }}
                name="band-5"
                className="w-4 h-4 text-yellow-900 bg-gray-100 border-gray-300 focus:ring-yellow-900  focus:ring-2"
              ></input>
              <label
                htmlFor="red-radio"
                className="ms-2 text-sm font-medium text-gray-50 bg-yellow-900 w-full pl-1"
              >
                Brown
              </label>
            </div>
            <div className="flex items-center mb-1">
              <input
                id="red-radio"
                type="radio"
                value=""
                onClick={() => {
                  setTolerance("± 2%");
                }}
                name="band-5"
                className="w-4 h-4 text-red-600 bg-gray-100 border-gray-300 focus:ring-red-600 focus:ring-2"
              ></input>
              <label
                htmlFor="red-radio"
                className="ms-2 text-sm font-medium text-gray-50 bg-red-600 w-full pl-1"
              >
                Red
              </label>
            </div>
            <div className="flex items-center mb-1">
              <input
                id="red-radio"
                type="radio"
                value=""
                onClick={() => {
                  setTolerance("± 0.05%");
                }}
                name="band-5"
                className="w-4 h-4 text-orange-500 bg-gray-100 border-gray-300 focus:ring-orange-500 focus:ring-2"
              ></input>
              <label
                htmlFor="red-radio"
                className="ms-2 text-sm font-medium text-gray-50 bg-orange-500 w-full pl-1"
              >
                Orange
              </label>
            </div>
            <div className="flex items-center mb-1">
              <input
                id="red-radio"
                type="radio"
                value=""
                onClick={() => {
                  setTolerance("± 0.02%");
                }}
                name="band-5"
                className="w-4 h-4 text-yellow-300 bg-gray-100 border-gray-300 focus:ring-yellow-300 focus:ring-2"
              ></input>
              <label
                htmlFor="red-radio"
                className="ms-2 text-sm font-medium text-gray-50 bg-yellow-300 w-full pl-1"
              >
                Yellow
              </label>
            </div>
            <div className="flex items-center mb-1">
              <input
                id="red-radio"
                type="radio"
                value=""
                onClick={() => {
                  setTolerance("± 0.5%");
                }}
                name="band-5"
                className="w-4 h-4 text-green-600 bg-gray-100 border-gray-300 focus:ring-green-500 focus:ring-2"
              ></input>
              <label
                htmlFor="red-radio"
                className="ms-2 text-sm font-medium text-gray-50 bg-green-600 w-full pl-1"
              >
                Green
              </label>
            </div>
            <div className="flex items-center mb-1">
              <input
                id="red-radio"
                type="radio"
                value=""
                onClick={() => {
                  setTolerance("± 0.25%");
                }}
                name="band-5"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-20"
              ></input>
              <label
                htmlFor="red-radio"
                className="ms-2 text-sm font-medium text-gray-50 bg-blue-600 w-full pl-1"
              >
                Blue
              </label>
            </div>
            <div className="flex items-center mb-1">
              <input
                id="red-radio"
                type="radio"
                value=""
                onClick={() => {
                  setTolerance("± 0.1%");
                }}
                name="band-5"
                className="w-4 h-4 text-fuchsia-600 bg-gray-100 border-gray-300 focus:ring-fuchsia-600 focus:ring-2"
              ></input>
              <label
                htmlFor="red-radio"
                className="ms-2 text-sm font-medium text-gray-50 bg-fuchsia-600 w-full pl-1"
              >
                Violet
              </label>
            </div>
            <div className="flex items-center mb-1">
              <input
                id="red-radio"
                type="radio"
                value=""
                onClick={() => {
                  setTolerance("± 0.01%");
                }}
                name="band-5"
                className="w-4 h-4 text-gray-600 bg-gray-100 border-gray-300 focus:ring-gray-500 focus:ring-2"
              ></input>
              <label
                htmlFor="red-radio"
                className="ms-2 text-sm font-medium text-gray-50 bg-gray-600 w-full pl-1"
              >
                Gray
              </label>
            </div>
            <div className="flex items-center mb-1">
              <input
                id="red-radio"
                type="radio"
                value=""
                onClick={() => {
                  setTolerance("± 5%");
                }}
                name="band-5"
                className="w-4 h-4 text-[#cfb53b] bg-gray-100 border-gray-300 focus:ring-[#cfb53b]  focus:ring-2"
              ></input>
              <label
                htmlFor="red-radio"
                className="ms-2 text-sm font-medium text-gray-900 bg-[#cfb53b] w-full pl-1"
              >
                Gold
              </label>
            </div>
            <div className="flex items-center mb-1">
              <input
                id="red-radio"
                type="radio"
                value=""
                onClick={() => {
                  setTolerance("± 10%");
                }}
                name="band-5"
                className="w-4 h-4 text-neutral-500 bg-gray-100 border-gray-300 focus:ring-neutral-500  focus:ring-2"
              ></input>
              <label
                htmlFor="red-radio"
                className="ms-2 text-sm font-medium text-gray-900 bg-[#c0c0c0] w-full pl-1"
              >
                Silver
              </label>
            </div>
          </div>
        </div>
      </div>

  );
};

export default Resistor;
