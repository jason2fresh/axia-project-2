import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Assignments() {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchTodos() {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/todos?_limit=10"
        );
        const data = await response.json();
        setTodos(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching assignments:", error);
        setLoading(false);
      }
    }
    fetchTodos();
  }, []);

  if (loading) return <p className="p-6">Loading assignments...</p>;

  return (
    <div>
      {/* Sidebar */}
      <aside className="aside">
        <h2>Dashboard</h2>
        <nav className="dashboard-nav">
          <Link to="/dashboard" className="link">
            Home
          </Link>
          <Link to="/dashboard/courses" className="link">
            Courses
          </Link>
          <Link to="/dashboard/assignment" className="link">
            Assignments
          </Link>
          <Link to="/dashboard/profile" className="link">
            Profile
          </Link>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="main">
        <div className="assignments-container">
          <h2 className="assignments-heading">Assignments</h2>
          <ul className="assignments-list">
            {todos.map((todo) => (
              <li key={todo.id} className="assignment-item">
                <span>{todo.title}</span>
                <span
                  className={`status-badge ${
                    todo.completed ? "completed" : "pending"
                  }`}
                >
                  {todo.completed ? "Completed" : "Pending"}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </main>
    </div>
  );
}
