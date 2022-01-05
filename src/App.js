export default function App() {
  return (
    <>
      <MyComponent />
    </>
  );
}

function MyComponent() {
  let username = "rohit";
  let email = "rohit@gmail.com";
  let id = 100;
  let list = ["delhi", "culcutta", "chennai"];

  let obj = { id: 1, name: "rahul" };

  return (
    <div>
      <h1>Learning Interpolation {"delhi".toUpperCase()}</h1>
      <h1>
        {username}
        {email}
        {id}
      </h1>
      <h1>{list}</h1>
      <h1>
        {obj.id}
        {obj.name}
        {`I am also JS ${obj.id} and ${obj.name}`}
      </h1>
      <p>Ashish is a brilliant guy.</p>
    </div>
  );
}
