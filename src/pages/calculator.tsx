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

  const latest_number = (num: string) => {
    if (display === "0") {
      set_display(num);
    } else {
      set_display(display + num);
    }
  };

  const latest_operator = (op: string) => {
    set_latest(Number(display));
    set_operator(op);
    set_display("0");
  };

  const calculate = () => {
    if (latest === null || operator === null)
      return;

    const display_number = Number(display);
    let result = 0;

    if (operator === "+") {
      result = latest + display_number;
    }
    if (operator === "-") {
      result = latest - display_number;
    }
    if (operator === "*") {
      result = latest * display_number;
    }
    if (operator === "/") {
      result = latest / display_number;
    }

    set_display(String(result));
    set_latest(null);
    set_operator(null);
  };

  return (
      <div className="m-10 p-4 w-2/3 mx-auto shadow-lg border-2 rounded-2xl">
        // <div className="mx-auto">
          <div className="p-3 mb-3 border-2 rounded h-full w-full text-right">
            <span className="text-gray-700 select-none">{display}</span>
          </div>
          
          <div className="grid grid-cols-3 gap-2">
            <Button
              className="py-2 bg-cyan-600 text-white rounded border border-gray-200 cursor-pointer"
              onClick={() => {
                latest_number("1"); //1の入力
              }}
            >
              <span className="select-none text-xl">1</span>
            </Button>
            <Button
              className="py-2 bg-cyan-600 text-white rounded border border-gray-200 cursor-pointer"
              onClick={() => {
                latest_number("2"); //2の入力
              }}
            >
              <span className="select-none text-xl">2</span>
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
                latest_operator("+"); //+演算子
              }}
            >
              <span className="select-none text-xl">+</span>
            </Button>
            <Button
              className="py-2 bg-cyan-600 text-white rounded border border-gray-200 cursor-pointer"
              onClick={calculate}
            >
              <span className="select-none text-xl">=</span>
            </Button>
          </div>
        </div>
      </div>
  );
};

export default IndexPage;
