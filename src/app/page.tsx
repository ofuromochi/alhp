"use client"

import './globals.css';
import { useState } from 'react';

export default function Home() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const categories = [
    {
      name: "アート",
      image: "/alhpくん.png",
      questions: [
        {
          img: "/alhpくん.png",
          answer: "ルーヴル美術館",
          title: "ルーヴル美術館",
          hint: "パリのアートはパリのアート館にある。",
        },
        {
          img: "/alhpくん.png",
          answer: "ルーヴル美術館",
          title: "ルーヴル美術館",
          hint: "パリのアートはパリのアート館にある。",
        },
        {
          img: "/alhpくん.png",
          answer: "ルーヴル美術館",
          title: "ルーヴル美術館",
          hint: "パリのアートはパリのアート館にある。",
        },
        {
          img: "/alhpくん.png",
          answer: "ルーヴル美術館",
          title: "ルーヴル美術館",
          hint: "パリのアートはパリのアート館にある。",
        },
      ]
    },
    {
      name: "お友達",
      image: "/alhpくん.png",
      questions: [
        {
          img: "/alhpくん.png",
          answer: "空港のキャラクター",
          title: "空港のキャラクター",
          hint: "空港のキャラクターは空港にある。",
        },
      ]
    },
    {
      name: "お食事",
      image: "/alhpくん.png",
      questions: [
        {
          img: "/alhpくん.png",
          answer: "パリのお食事",
          title: "パリのお食事",
          hint: "パリのお食事はパリのお食事館にある。",
        },
      ]
    },
    {
      name: "お出かけ",
      image: "/alhpくん.png",
      questions: [
        {
          img: "/alhpくん.png",
          answer: "パリのお出かけ",
          title: "パリのお出かけ",
          hint: "パリのお出かけはパリのお出かけ館にある。",
        },
      ]
    },
    {
      name: "お買い物",
      image: "/alhpくん.png",
      questions: [
        {
          img: "/alhpくん.png",
          answer: "パリのお買い物",
          title: "パリのお買い物",
          hint: "パリのお買い物はパリのお買い物館にある。",
        },
      ]
    },
    {
      name: "お遊び",
      image: "/alhpくん.png",
      questions: [
        {
          img: "/alhpくん.png",
          answer: "パリのお遊び",
          title: "パリのお遊び",
          hint: "パリのお遊びはパリのお遊び館にある。",
        },
      ]
    },
  ];
  return (
    <div>
      <div>
        {/* ロゴセクション */}
        {/* <div className="flex justify-center w-full">
          <img src="/alhpくん.png" alt="logo" className="w-1/2 mb-8" />
        </div> */}

        {/* カテゴリーセクション */}
        <section>
          {/* カテゴリーボタンエリア */}
          <div className="sticky top-0 p-4">
            <div className="grid grid-cols-3">
            {categories.map((v, index) => (
              <button
                key={index}
                onClick={() => setSelectedIndex(selectedIndex === index ? null : index)}
                className="border border-black rounded p-2"
              >
                {v.name}
              </button>
            ))}
          </div>
          </div>

          {/* 質問表示エリア */}
          <div className="p-4">

            {selectedIndex !== null ? (
              <div>
                <ul>
                  {categories[selectedIndex].questions.map((q, qIndex) => (
                    <li key={qIndex}>{q.title}</li>
                  ))}
                </ul>
              </div>
            ) : (
              <div className="text-center ">
                <p>カテゴリーを選択してください</p>
              </div>
            )}
          </div>
        </section>
      </div>
    </div>
  );
}
