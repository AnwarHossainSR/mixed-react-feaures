import "boxicons/css/boxicons.min.css";
import { useState } from "react";
import "./App.scss";
import Button from "./components/button/Button";

function App() {
  const [loading, setLoading] = useState(false);

  return (
    <div>
      <Button loading={loading} onClick={() => setLoading(!loading)}>
        Loading
      </Button>
    </div>
  );
}

export default App;
