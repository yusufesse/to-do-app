import { useState } from "react";
import "./Form.css";

function Form({ addTasks }) {
  const [task, setTask] = useState("");
  const [date, setDate] = useState("");

  const resetFormInput = () => {
    setTask("");
    setDate("");
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const taskInput = {
      task,
      date,
      id: Math.floor(Math.random() * 1000),
    };
    addTasks(taskInput);
    resetFormInput();
  };

  return (
    <form onSubmit={submitHandler} className="form">
      <label className="label">
        <span className="label-title">Task:</span>
        <input
          onChange={(e) => setTask(e.target.value)}
          value={task}
          className="input"
          type="text"
        />
      </label>
      <label className="label">
        <span className="label-title">Date:</span>
        <input
          onChange={(e) => setDate(e.target.value)}
          value={date}
          className="input"
          type="date"
        />
      </label>
      <button className="btn btn--add">Add Todo</button>
    </form>
  );
}

export default Form;
