import { useState } from "react";

const BoardContainer = () => {
  const [board, setBoard] = useState<string[][]>([
    Array(5).fill("a"),
    Array(5).fill("b"),
    Array(5).fill("c"),
    Array(5).fill("d"),
    Array(5).fill("e"),
    Array(5).fill("f"),
  ]);

  return (
    <section className="w-[350px] h-[420px] outline-2 flex flex-col gap-2">
      {board.map((row, rowIndex) => (
        //------------------------BOARD ROW
        <div className="w-full flex flex-row grow-1 gap-2" key={rowIndex}>
          {row.map((letter, letterIndex) => (
            //------------------------ROW LETTERS
            <div
              className="grow-1 flex justify-center items-center outline-2 outline-[#3A3A3C]"
              key={letterIndex}
            >
              <p className="text-white text-3xl font-bold">
                {letter.toUpperCase()}
              </p>
            </div>
          ))}
        </div>
      ))}
    </section>
  );
};

export default BoardContainer;
