import { NextPage } from 'next';
import React, { ReactElement, useState } from 'react';
import { Button } from '../components/Button';

const IndexPage: NextPage = (): ReactElement => {

  // 電卓に表示される文字
  const [display, set_display] = useState<string>("0");

  // 最新の値
  const [latest, set_latest] = useState<number | null>(null);

  // 最新の値
  const [operator, set_operator] = useState<string | null>(null);

  const input_number = (num: string) => {
    if (display === "0") {
      set_display(num);
    } else {
      set_display(display + num);
    }
  };

  const input_operator = (op: string) => {
    set_latest(Number(display));
    set_operator(op);
    set_display("0");
  };

  cosnt calculate = () => {
    if (latest === null || operator === null) return;

    const current_number = Number(display);
    let result = 0;

    if (operator === "+") {
      result = latest + current_number;
    }

    if (oprator === "-") {
      result = latest - current_number;
    }
    if (oprator === "*") {
      result = latest * current_number;
    }
    if (oprator === "/") {
      result = latest / current_number;
    }

    set_display(String(result));
    set_latest(null);
    set_operator(null);
  };

  return (
      <div className="m-10 p-4 w-2/3 mx-auto shadow-lg border-2 rounded-2xl">
        <div className="mx-auto">
          <div className="p-3 mb-3 border-2 rounded h-full w-full text-right">
            <span className="text-gray-700 select-none">{display}</span>
          </div>
          
          <div className="grid grid-cols-3 gap-2">
            <Button
              className="py-2 bg-cyan-600 text-white rounded border border-gray-200 cursor-pointer"
              onClick={() => {
                console.log(display);

                set_display(NUmber(display) + 1); //カウントアップ
              }}
            >
              <span className="select-none text-xl">+</span>
            </Button>
            <Button
              className="py-2 bg-cyan-600 text-white rounded border border-gray-200 cursor-pointer"
              onClick={() => {
                console.log(display);

                set_display(Number(display) - 1); //カウントダウン
              }}
            >
              <span className="select-none text-xl">-</span>
            </Button>
            <Button
              className="py-2 bg-cyan-600 text-white rounded border border-gray-200 cursor-pointer"
              onClick={() => {
                set_display("0"); //クリア
              }}
            >
              <span className="select-none text-xl">C</span>
            </Button>
            <Button
              className="py-2 bg-cyan-600 text-white rounded border border-gray-200 cursor-pointer"
              onClick={() => {
                let num = 0;
                  num = num + 2;
                  set_display(num);
              }}
            >
              <span className="select-none text-xl">1</span>
            </Button>
            <Button
              className="py-2 bg-cyan-600 text-white rounded border border-gray-200 cursor-pointer"
              onClick={() => {
                let num = 0;
                if(num == 0){
                  set_display(2); //2
                }
              }}
            >
              <span className="select-none text-xl">2</span>
            </Button>
            <Button
              className="py-2 bg-cyan-600 text-white rounded border border-gray-200 cursor-pointer"
              onClick={() => {
                let num = 0;
                if(num == 0){
                  setCount(3); //3
                }
              }}
            >
              <span className="select-none text-xl">3</span>
            </Button>

          </div>
        </div>
      </div>
  );
};

export default IndexPage;
