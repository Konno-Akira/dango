import { NextPage } from 'next';
import React, { ReactElement, useState } from 'react';
import { Button } from '../components/Button';

type Props = Readonly<{
  countries: Array<Country>;
}>;

// 国名つづり
const IndexPage: NextPage<Props> = ({ countries }: Props): ReactElement => {
  const [count, setCount] = useState<number>(0);

  return (
      <div className="m-10 p-4 w-2/3 mx-auto shadow-lg border-2 rounded-2xl">
        <div className="mx-auto">
          <div className="p-3 mb-3 border-2 rounded h-full w-full text-right">
            <span className="text-gray-700 select-none">{count}</span>
          </div>
          
          <div className="grid grid-cols-3 gap-2">
            <Button
              className="py-2 bg-cyan-600 text-white rounded border border-gray-200 cursor-pointer"
              onClick={() => {
                console.log(count);

                setCount(count + 1); //カウントアップ
              }}
            >
              <span className="select-none text-xl">+</span>
            </Button>
            <Button
              className="py-2 bg-cyan-600 text-white rounded border border-gray-200 cursor-pointer"
              onClick={() => {
                console.log(count);

                setCount(count - 1); //カウントダウン
              }}
            >
              <span className="select-none text-xl">-</span>
            </Button>
            <Button
              className="py-2 bg-cyan-600 text-white rounded border border-gray-200 cursor-pointer"
              onClick={() => {
                setCount(0); //クリア
              }}
            >
              <span className="select-none text-xl">C</span>
            </Button>
            <Button
              className="py-2 bg-cyan-600 text-white rounded border border-gray-200 cursor-pointer"
              onClick={() => {
                let num = 0;
                //if(num == 0){
                  num = num + 2;
                  //console.log(count)
                  setCount(num)
                  //setCount(Number('${count} ${num}')); //1
                //}
              }}
            >
              <span className="select-none text-xl">1</span>
            </Button>
            <Button
              className="py-2 bg-cyan-600 text-white rounded border border-gray-200 cursor-pointer"
              onClick={() => {
                let num = 0;
                if(num == 0){
                  setCount(2); //2
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
  return {
    props: {
      countries: JSON.parse(str) as Array<Country>
    }
  };
};

// eslint-disable-next-line import/no-default-export
export default IndexPage;
