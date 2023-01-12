import { Button, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

export default function CreateTodo() {
  const [todo, setTodo] = useState({ title: "", description: "" });
  const navigate = useNavigate();
  const handleChange = (e) => {
    const { id, value } = e.target;

    setTodo((prev) => {
      return {
        ...prev,
        [id]: value,
      };
    });
  };
  useEffect(() => {
    console.log(todo);
  }, [todo]);

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <h1>Create Todo</h1>
      <TextField
        id="title"
        className="input"
        label="Title"
        variant="outlined"
        onChange={handleChange}
      />
      <TextField
        id="description"
        className="input"
        label="Description"
        variant="outlined"
        style={{ marginTop: "1rem" }}
        onChange={handleChange}
      />
      <Button
        variant="outlined"
        style={{ marginTop: "1rem" }}
        onClick={() => navigate(-1)}
      >
        Back
      </Button>
    </div>
  );
}
