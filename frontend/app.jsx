import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [message, setMessage] = useState("Loading...");

  useEffect(() => {
    fetch("http://localhost:5000/api/message")
      .then((res) => res.json())
      .then((data) => setMessage(data.message))
      .catch(() => setMessage("Backend not connected"));
  }, []);

  return (
    <div className="app">
      <h1>React + Flask App</h1>
      <p>{message}</p>

      <button onClick={() => alert("Button Clicked!")}>
        Click Me
      </button>
    </div>
  );
}

export default App;
