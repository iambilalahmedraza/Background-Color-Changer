import { useState } from "react";
import "./App.css";

function App() {
  const [color, setcolor] = useState("gray");

  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap bottom-12 justify-center inset-x-0 px-2 ">
        <div className="flex flex-wrap justify-center gap-4 shadow-lg bg-white px-3 py-2 rounded-xl">
          <button
            onClick={() => setcolor("red")}
            className="outline-none px-3 py-1 rounded-lg bg-red-600 text-white shadow-sm"
          >
            Red
          </button>
          <button
            onClick={() => setcolor("blue")}
            className="outline-none px-3 py-1 rounded-lg bg-blue-800 text-white shadow-sm"
          >
            Blue
          </button>
          <button
            onClick={() => setcolor("green")}
            className="outline-none px-3 py-1 rounded-lg bg-green-600 text-white shadow-sm"
          >
            Green
          </button>
          <button
            onClick={() => setcolor("gray")}
            className="outline-none px-3 py-1 rounded-lg bg-gray-600 text-white shadow-sm"
          >
            Gray
          </button>
          <button
            onClick={() => setcolor("yellow")}
            className="outline-none px-3 py-1 rounded-lg bg-yellow-600 text-white shadow-sm"
          >
            Yellow
          </button>
          <button
            onClick={() => setcolor("pink")}
            className="outline-none px-3 py-1 rounded-lg bg-pink-600 text-white shadow-sm"
          >
            Pink
          </button>
          <button
            onClick={() => setcolor("white")}
            className="outline-none px-3 py-1 rounded-lg bg-black text-yellow-50 shadow-sm"
          >
            White
          </button>
          <button
            onClick={() => setcolor("black")}
            className="outline-none px-3 py-1 rounded-lg bg-black text-white shadow-sm"
          >
            Black
          </button>
          <button
            onClick={() => setcolor("orange")}
            className="outline-none px-3 py-1 rounded-lg bg-orange-600 text-white shadow-sm"
          >
            Orange
          </button>
          <button
            onClick={() => setcolor("	#7F00FF")}
            className="outline-none px-3 py-1 rounded-lg bg-violet-600 text-white shadow-sm"
          >
            Violet
          </button>
          <button
            onClick={() => setcolor("#708090")}
            className="outline-none px-3 py-1 rounded-lg bg-slate-600 text-white shadow-sm"
          >
            Slate
          </button>
          <button
            onClick={() => setcolor("#ADD8E6")}
            className="outline-none px-3 py-1 rounded-lg bg-blue-400 text-white shadow-sm"
          >
            Light Blue
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
