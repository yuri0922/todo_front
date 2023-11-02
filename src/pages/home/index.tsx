import { useTodoList } from '@/hooks/api/get/useTodoList';
import React, { useState } from 'react';

const Index = () => {
  const { data } = useTodoList();
  const [newTodo, setNewTodo] = useState('');

  return (
    <div className="h-screen w-full bg-orange-100">
      <div className="mx-auto w-96">
        <p className="border-b pt-11 text-lg font-bold text-blue-500">ToDo</p>
        {data &&
          data.map((d) => {
            return (
              <div key={d.id} className="flex items-center justify-start">
                {/* 左揃えに変更 */}
                {/* チェックボックスを追加 */}
                <input type="checkbox" />
                <p className="text-center text-black">
                  {d.text}
                  <div className="w-full border-t border-dotted border-black"></div>
                  {/* 下線を追加 */}
                </p>
              </div>
            );
          })}
        <div className="mt-4 flex">
          <input
            type="text"
            placeholder="新しいTodoを追加"
            className="mr-2 w-full border-b border-dotted border-gray-200 text-black"
          />
          <button className="whitespace-nowrap rounded bg-blue-500 px-4 py-2 text-white">
            追加
          </button>
        </div>
      </div>
    </div>
  );
};

export default Index;
