import { useState } from "react";

interface type {
  id: Number;
  content: String;
}
interface props {
  state: type[];
  setState: any;
  i: any;
  v: any;
}
const todolist = (params: props) => {
  const { state, setState, i, v } = params;
  const [edit, setEdit] = useState<boolean>(true);
  const edittodo = (e: any, i: any) => {
    e.preventDefault();
    const content = e.target.val.value;
    const copy = state.map((a, index) => {
      if (i == index) {
        a.content = content;
      }
      return a;
    });
    setState(copy);
    setEdit(s=>!s)
  };
  const deletetodo = (i: Number) => {
    const filtprod: any = state.filter((a: Object, index: Number) => {
      return index != i;
    });

    setState(filtprod);
  };
  return (
    <>
      <form className="mb-4" onSubmit={(e) => edittodo(e, i)}>
        {edit ? v.content : <input type="text" id="val" />}{" "}
      </form >
      <button onClick={() => setEdit(s=>!s)} className="me-4">edit</button>
      <button onClick={() => deletetodo(i)}>delete</button>
    </>
  );
};
export default todolist;
