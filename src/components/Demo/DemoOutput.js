import React, { useMemo } from "react";

const DemoOutput = (props) => {
  console.log("DemoOutput RUNNING");

  // const sortedList = props.items.sort((a, b) => a - b);

  // 當重新評估時，不想重新運行排序功能，目前問題有二：
  // 1. 即使 Button 元件加上 React.memo，也會因為元件內的其他 state 改變 (e.g. title) 而重新執行元件。
  // 2. 此外，傳入的 items 陣列也是 Object，因參考不同，所以當父組件改變時，進來的 items 都不一樣。

  // 第一點，可以使用 useMemo 來記憶陣列
  const { items } = props; // more elegant way
  const sortedList = useMemo(() => {
    console.log("Items sorted");
    // Return what you want to store
    return items.sort((a, b) => a - b);
  }, [items]);

  return (
    <div>
      <h2>{props.title}</h2>
      <ul>
        {sortedList.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default React.memo(DemoOutput);
