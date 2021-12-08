import "./ToDo.css";

function ToDo({ deleteToDo, tasks }) {
  return (
    <div className="todo-container">
      {tasks.map((t) => (
        <div className="todo-template" key={t.id}>
          <p className="content">My Task: {t.task}</p>
          <p className="content">Date: {t.date}</p>
          <button onClick={() => deleteToDo(t.id)} className="btn btn--delete">
            Delete Todo
          </button>
        </div>
      ))}
    </div>
  );
}

export default ToDo;
