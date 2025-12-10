import { useState } from "react";
import "./App.css";

function TaskCard({ task }) {
  return (
    <article className="task-card">
      <div className="task-card-header">
        <h3 className="task-title">{task.title}</h3>
        <div className="task-actions">
          <button className="btn small">Edit</button>
          <button className="btn small danger">Delete</button>
        </div>
      </div>
      <p className="task-desc">{task.description}</p>
    </article>
  );
}

function App() {
  const [tasks] = useState([
    {
      id: 1,
      title: "Sample task",
      description: "This is an example task card.",
    },
    {
      id: 2,
      title: "Another task",
      description: "Tasks will appear here as cards.",
    },
  ]);

  return (
    <div className="app-root">
      <header className="app-header">
        <h1>Task Manager CRUD</h1>
      </header>

      <main className="app-main">
        <section className="task-form">
          <div className="form-row">
            <label className="label">Task Title</label>
            <input
              className="input"
              type="text"
              placeholder="Enter task title"
            />
          </div>

          <div className="form-row">
            <label className="label">Task Description</label>
            <textarea
              className="textarea"
              placeholder="Enter task description"
              rows={4}
            ></textarea>
          </div>

          <div className="form-row actions-row">
            <button className="btn primary">Add Task</button>
          </div>
        </section>

        <section className="task-list">
          {tasks.map((t) => (
            <TaskCard key={t.id} task={t} />
          ))}
        </section>
      </main>
    </div>
  );
}

export default App;
