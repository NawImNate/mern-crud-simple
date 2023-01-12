import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function App() {
  const navigate = useNavigate();
  return (
    <div className="App">
      <h1>Welcome To My Todo App</h1>
      <Button variant="outlined" onClick={() => navigate("create")}>
        Next
      </Button>
    </div>
  );
}
