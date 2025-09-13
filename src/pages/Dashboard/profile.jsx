import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Profile() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchUser() {
      try {
        const response = await fetch("https://randomuser.me/api/");
        const data = await response.json();
        setUser(data.results[0]);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching user:", error);
        setLoading(false);
      }
    }
    fetchUser();
  }, []);

  if (loading) return <p className="p-6">Loading profile...</p>;

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
        <div className="profile-card">
          <img
            src={user.picture.large}
            alt={user.name.first}
            className="profile-image"
          />
          <h2 className="profile-name">
            {user.name.first} {user.name.last}
          </h2>
          <p className="profile-email">{user.email}</p>

          <button className="edit-button">Edit Profile</button>
        </div>
      </main>
    </div>
  );
}
