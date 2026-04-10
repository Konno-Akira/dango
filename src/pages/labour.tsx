import { NextPage } from 'next';
import React, { ReactElement, useState } from 'react';
import { Button } from '../components/Button';

const IndexPage: NextPage = (): ReactElement => {

  // 電卓に表示される文字
  const [display, set_display] = useState<string>("0");
  // 最新の値(数値)
  const [latest, set_latest] = useState<number | null>(null);
  // 最新の値(文字列)
  const [operator, set_operator] = useState<string | null>(null);
  // 小数点入力
  const add_dot = () => {
    if (!display.includes(".")) { // まだ小数点を含まないならば
      set_display(display + "."); // 表示される文字に小数点を加える
    }
  };
  // test

  // 入力が新しい数値かを判定
  const [check, set_check] = useState<boolean>(false);
  const latest_number = (num: string) => {

    if (check) {
      set_display(num);
      set_check(false); // 新しい入力でない
    }
    else if (display === "0") {
      set_display(num);
    } else {
      set_display(display + num);
    }
    // ERROR後に数値入力すると上書き
    if (display === "ERROR") {
      set_display(num);
      return;
    }
  };

  const latest_operator = (op: string) => {
    // ERROR後に演算子入力するとERROR解除
    if (display === "ERROR") {
      return;
    }
    set_latest(Number(display));
    set_operator(op);
    set_check(true); // 新しい入力 // 旧: set_display("0");
  };

  // 二項演算
  const calculate = () => {

    // ERROR後に計算すると計算操作無視
    if (display === "ERROR") {
      return;
    }
    if (latest === null || operator === null) {
      return;
    }
    const num = Number(display);
    let result = 0;

    if (operator === "+") {
      result = latest + num;
    }
    if (operator === "-") {
      result = latest - num;
    }
    if (operator === "*") {
      result = latest * num;
    }
    if (operator === "/") {
      if (num === 0) {
        set_display("ERROR");
        set_latest(null);
        set_operator(null);
        return;
      }
      result = latest / num;
    }
    // 小数点以下を丸める(2.1 * 3 =  6.300000000000001 -> 6.3)
    result = Number(result.toFixed(15));
    set_display(String(result));
    set_latest(null);
    set_operator(null);
    set_check(true); // 新しい入力
  };

  // 単項演算
　// 平方根
  const sqrt = () => {
  // ERROR後に計算すると平方根操作無視
  if (display === "ERROR") {
    return;
  }
  const num = Number(display);
  // 負の値の平方根にはERRORを表示 -> 数値計算
  if (num < 0) {
    set_display("ERROR");
    return;
  }
  let result = Math.sqrt(num);
  result = Number(result.toFixed(15)); // 
  set_display(String(result));
  }
  // 百分率
  const percent = () => {
    // ERROR後に計算すると百分率操作無視
    if (display === "ERROR") {
      return;
    }
    const num = Number(display);
    let result = num / 100;
    result = Number(result.toFixed(15)); // 
    set_display(String(result));
  }
  // 符号変換
  const sgn = () => {
    // ERROR後に計算すると百分率操作無視
    if (display === "ERROR") {
      return;
    }
    const num = Number(display);
    let result = - num;
    result = Number(result.toFixed(15)); // 
    set_display(String(result));
  }

  return (
    // 電卓の外枠 // ディスプレイ画面 //  // 列数
    <div className="m-10 p-4 w-2/3 mx-auto shadow-lg border-2 rounded-2xl">
      <div className="p-3 mb-3 border-2 rounded h-full w-full text-right">
        <span className="text-gray-700 select-none">{display}</span>
      </div>    
      <div className="grid grid-cols-5 gap-2">
        
        <Button
          className="py-2 bg-purple-500 text-white rounded border border-gray-200 cursor-pointer"
          onClick={sqrt}
        >
          <span className="select-none text-xl">√</span>
        </Button>
        <Button
          className="py-2 bg-cyan-600 text-white rounded border border-gray-200 cursor-pointer"
          onClick={() => {
            latest_number("7");
          }}
        >
          <span className="select-none text-xl">7</span>
        </Button>
        <Button
          className="py-2 bg-cyan-600 text-white rounded border border-gray-200 cursor-pointer"
          onClick={() => {
            latest_number("8");
          }}
        >
          <span className="select-none text-xl">8</span>
        </Button>
        <Button
          className="py-2 bg-cyan-600 text-white rounded border border-gray-200 cursor-pointer"
          onClick={() => {
            latest_number("9");
          }}
        >
          <span className="select-none text-xl">9</span>
        </Button>
        <Button
          className="py-2 bg-orange-500 text-white rounded border border-gray-200 cursor-pointer"
          onClick={() => {
            latest_operator("/");
          }}
        >
          <span className="select-none text-xl">÷</span>
        </Button>

        <Button
          className="py-2 bg-purple-500 text-white rounded border border-gray-200 cursor-pointer"
          onClick={percent}
        >
          <span className="select-none text-xl">%</span>
        </Button>
        <Button
          className="py-2 bg-cyan-600 text-white rounded border border-gray-200 cursor-pointer"
          onClick={() => {
            latest_number("4");
          }}
        >
          <span className="select-none text-xl">4</span>
        </Button>
        <Button
          className="py-2 bg-cyan-600 text-white rounded border border-gray-200 cursor-pointer"
          onClick={() => {
            latest_number("5");
          }}
        >
          <span className="select-none text-xl">5</span>
        </Button>
        <Button
          className="py-2 bg-cyan-600 text-white rounded border border-gray-200 cursor-pointer"
          onClick={() => {
            latest_number("6");
          }}
        >
          <span className="select-none text-xl">6</span>
        </Button>
        <Button
          className="py-2 bg-orange-500 text-white rounded border border-gray-200 cursor-pointer"
          onClick={() => {
            latest_operator("*");
          }}
        >
          <span className="select-none text-xl">×</span>
        </Button>

        <Button
          className="py-2 bg-purple-500 text-white rounded border border-gray-200 cursor-pointer"
          onClick={sgn}
        >
          <span className="select-none text-xl">±</span>
        </Button>
        <Button
          className="py-2 bg-cyan-600 text-white rounded border border-gray-200 cursor-pointer"
          onClick={() => {
            latest_number("1");
          }}
        >
          <span className="select-none text-xl">1</span>
        </Button>
        <Button
          className="py-2 bg-cyan-600 text-white rounded border border-gray-200 cursor-pointer"
          onClick={() => {
            latest_number("2");
          }}
        >
          <span className="select-none text-xl">2</span>
        </Button>
        <Button
          className="py-2 bg-cyan-600 text-white rounded border border-gray-200 cursor-pointer"
          onClick={() => {
            latest_number("3");
          }}
        >
          <span className="select-none text-xl">3</span>
        </Button>
        <Button
          className="py-2 bg-orange-500 text-white rounded border border-gray-200 cursor-pointer"
          onClick={() => {
            latest_operator("-");
          }}
        >
          <span className="select-none text-xl">-</span>
        </Button>

        <Button
          className="py-2 bg-red-500 text-white rounded border border-gray-200 cursor-pointer"
          onClick={() => {
            set_display("0");
          }}
        >
          <span className="select-none text-xl">C</span>
        </Button>
        <Button
          className="py-2 bg-cyan-600 text-white rounded border border-gray-200 cursor-pointer"
          onClick={() => {
            latest_number("0");
          }}
        >
          <span className="select-none text-xl">0</span>
        </Button>
        <Button
          className="py-2 bg-cyan-600 text-white rounded border border-gray-200 cursor-pointer"
          onClick={() => {
            add_dot(".");
          }}
        >
          <span className="select-none text-xl">.</span>
        </Button>
        <Button
           className="py-2 bg-green-600 text-white rounded border border-gray-200 cursor-pointer"
          onClick={calculate}
        >
          <span className="select-none text-xl">=</span>
        </Button>
        <Button
          className="py-2 bg-orange-500 text-white rounded border border-gray-200 cursor-pointer"
          onClick={() => {
            latest_operator("+");
          }}
        >
          <span className="select-none text-xl">+</span>
        </Button>

      </div>
    </div>
  );
};  


export default IndexPage;