import { Component, useState } from "react";

export default function App() {
  return (
    <>
      <HiComponent />
    </>
  );
}

function HiComponent() {
  const id1 = 100;
  const list = [1, 1, 1, 1, 1];
  const [cardCss, setCardcss] = useState("bg-primary text-light fs-3 p-4 mb-1");

  const primaryTheme = () => setCardcss("bg-primary text-light fs-3 p-4 mb-1");
  const darkTheme = () => setCardcss("bg-dark text-light fs-3 p-4 mb-1");
  const dangerTheme = () => setCardcss("bg-danger text-light fs-3 p-4 mb-1");
  return (
    <div>
      <input
        type="button"
        value="Primary Theme"
        className="btn btn-primary btn-sm"
        onClick={primaryTheme}
      />
      <input
        type="button"
        value="PrimaryTheme"
        className="btn btn-dark btn-sm"
        onClick={darkTheme}
      />
      <input
        type="button"
        value="PrimaryTheme"
        className="btn btn-dark btn-sm"
        onClick={dangerTheme}
      />
      {list.map(() => (
        <div className={cardCss}>Ashish is a smart,brilliant guy.{cardCss}</div>
      ))}
    </div>
  );
}
