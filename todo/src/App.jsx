import React, { useState } from "react";

const App = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  // for maintask wher i store all task
  const [mainTask, setMainTask] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(title, desc);

    setMainTask([...mainTask, { title, desc }]);
    setTitle("");
    setDesc("");
    console.log(mainTask);
  };

  let showtask = <h2>No task now</h2>;
  if (mainTask > 0) {
    showtask = mainTask.map((t, i) => {
      return (
        <li>
          <div key={i} className="flex justify-between mb-5">
            <h5 className="text-2xl font-semibold">{t.title}</h5>
            <h6 className="text-xl font-semibold">{t.desc}</h6>
          </div>
        </li>
      );
    });
  }

  return (
    <>
      <h1 className="bg-black text-white text-3xl p-5 text-center font-bold">
        Rohan Todo list
      </h1>

      <form onSubmit={submitHandler}>
        <input
          className="text-2xl border-zinc-800 border-2 m-8 px-4 py-2 rounded"
          type="text"
          placeholder="Enter your title here"
          value={title}
          onChange={(e) => {
            // console.log(e.target.value);
            // value maine title ko store kiya and setTitle se change hoga
            setTitle(e.target.value);
          }}
        />

        <input
          className="text-2xl border-zinc-800 border-2 m-8 px-4 py-2 rounded"
          type="text"
          placeholder="Enter your description here"
          value={desc}
          onChange={(e) => {
            // console.log(e.target.value);
            // value maine title ko store kiya and setTitle se change hoga
            setDesc(e.target.value);
          }}
        />

        <button className="px-2 py-2 bg-black text-white font-bold text-xl rounded cursor-pointer">
          Add Task
        </button>
      </form>

      <hr />

      <div className="p-8 bg-slate-300">{showtask}</div>
    </>
  );
};

export default App;
