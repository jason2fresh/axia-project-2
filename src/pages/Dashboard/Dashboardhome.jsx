import { Link } from "react-router-dom";

export default function DashboardHome() {
  return (
    <div >
      {/* Sidebar */}
      <aside className="aside">
        <h2 >Dashboard</h2>
        <nav className="dashboard-nav">
          <Link to="/dashboard" className="link">Home</Link>
          <Link to="/dashboard/courses" className="link">Courses</Link>
          <Link to="/dashboard/assignments"className="link">Assignments</Link>
          <Link to="/dashboard/profile" className="link">Profile</Link>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="main" >
         
        <header >
          <h1 >Welcome Back!</h1>
         <a href="/login"> <button >Logout</button></a>
        </header>

        
        <div className="dashboard-parent-div">
  <div className="dashboard-card">
    <h3 className="dashboard-card-title">Enrolled Courses</h3>
    <p>5 Courses</p>
  </div>
  <div className="dashboard-card">
    <h3 className="dashboard-card-title">Upcoming Deadlines</h3>
    <p>2 this week</p>
  </div>
  <div className="dashboard-card">
    <h3 className="dashboard-card-title">Progress</h3>
    <p>60% Complete</p>
  </div>
</div>

      </main>
      
    </div>
  );
}
