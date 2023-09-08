import React, { FC, useState } from "react";
import Todo from "./todo.tsx";

interface type {
  id: Number;
  content: String;
}

function App() {
  const [state, setState] = useState<type[]>([]);

  const add = (e: any) => {
    e.preventDefault();
    setState((states: any) => [
      ...states,
      { id: Date.now(), content: e.target.content.value },
    ]);
  };

  return (
    <div className="text-center mt-5">
      <form action="" onSubmit={add} >
        <input type="text" id="content" />
        <input type="submit" value="add" className="ms-2" />
      </form>

      {state.map((v, i) => (
        <h1>
          <Todo state={state} setState={setState} i={i} v={v} />
        </h1>
      ))}
    </div>
  );
}

export default App;
