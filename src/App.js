import { useState } from "react";
export default function App() {
  return (
    <>
      <MyComponent />
    </>
  );
}

function MyComponent() {
  const [list] = useState(["Hello World"]);
  return (
    <div>
      <h1>Working with Input Elements</h1>
      <input type="button" value="Tweet to Everyone" />
      <div id="parent">
        {list.map((item) => (
          <div>{item} </div>
        ))}
      </div>
    </div>
  );
}
