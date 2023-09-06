import React, { FC, useState } from "react";

interface type {
  id: Number;
  content: String;
  edit: boolean;
}
function App() {
  const [state, setState] = useState<type[]>([]);

  const add= (e:any) => {
    e.preventDefault();
    setState((states: any) => [
      ...states,
      { id: Math.random(), content: e.target.content.value, edit: false },
    ]);
    e.target.reset()
  };
  const deletetodo = (i: Number) => {
    const filtprod: any = state.filter((a: Object, index: Number) => {
      return index != i;
    });
    setState(filtprod);
  };
  return (
    <>
      <form action="" onSubmit={add}>
        <input type="text" id="content" />
        <input type="submit" value="add" />
      </form>
      {state.map((v, i) => (
        <h1>
          {v.content} <button onClick={() => deletetodo(i)}>delete</button>
        </h1>
      ))}
    </>
  );
}

export default App;
