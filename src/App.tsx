import { useState } from "react";

function App() {
  const [board, setBoard] = useState<string[][]>([
    Array(5).fill(""),
    Array(5).fill(""),
    Array(5).fill(""),
    Array(5).fill(""),
    Array(5).fill(""),
    Array(5).fill(""),
  ]);

  console.log(board);

  return (
    <div className="app">
      <main>
        <h1 className="text-white text-4xl font-bold flex justify-center items-center gap-2">
          Le Word
          <img
            src="./leword-logo.webp"
            alt=""
            aria-hidden="true"
            className="rounded-lg size-10"
          />
        </h1>

        <div></div>
      </main>
    </div>
  );
}

export default App;
