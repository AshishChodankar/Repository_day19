import { useState } from "react";
export default function App() {
  return (
    <>
      <MyComponent />
    </>
  );
}

function MyComponent() {
  const [list, setList] = useState(["Hello World"]);
  const tweetHere = () => {
    const newList = [...list, "Hello Universe"];
    setList(newList);
  };

  const deleteFirstTweet = () => {};
}
