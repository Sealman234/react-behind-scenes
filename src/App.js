import React, { useCallback, useMemo, useState } from "react";

import Button from "./components/UI/Button/Button";
import DemoOutput from "./components/Demo/DemoOutput";

import "./App.css";

function App() {
  const [listTitle, setListTitle] = useState("My List");

  console.log("APP RUNNING");

  const changeTitleHandler = useCallback(() => {
    console.log("setListTitle");
    // A little weird thing: if my render function returns the same thing 2 times in a row, the real DOM doesn't get changed at all
    // 第二次還是會因為 setState 重新渲染元件，但如果連續兩次都設定一樣的 state 後，下次再一樣時DOM 不會改變
    setListTitle("New Title");
  }, []);

  const items = useMemo(() => {
    return [5, 3, 1, 10, 9];
  }, []); // empty dependency => never change

  return (
    <div className="app">
      <DemoOutput title={listTitle} items={items} />
      <Button onClick={changeTitleHandler}>Change List Title</Button>
    </div>
  );
}

export default App;
