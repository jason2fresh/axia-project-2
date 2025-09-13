import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Courses() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch(
          "https://fakestoreapi.com/products?limit=5"
        );
        const data = await response.json();
        setProducts(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching courses:", error);
        setLoading(false);
      }
    }
    fetchProducts();
  }, []);

  if (loading) return <p className="p-6">Loading courses...</p>;

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
        <h2 className="product-heading">courses</h2>
        <div className="product-grid">
          {products.map((product) => (
            <div key={product.id} className="product-card">
              <img
                src={product.image}
                alt={product.title}
                className="product-image"
              />
              <h3 className="product-title">{product.title}</h3>
              <p className="product-description">
                {product.description.substring(0, 80)}...
              </p>
              <button className="enroll-button">Enroll</button>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
