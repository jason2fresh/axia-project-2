export default function Landingpage() {
  return (
    <div>
      {/* Hero Section */}
      <header className="landingpage-header">
        <nav>
          <a href="#home">Home</a>
          <a href="#features">Features</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
          <a href="/login" className="landing-page-login-button">
            Login
          </a>
          <a href="/signup" className="landing-page-signup-button">
            Signup
          </a>
        </nav>
        <div className="captiontitle">
          <h2>Welcome to crazy academy</h2>
          <p>
            Where learing meets excitement, turn your wildest ideas into reality
          </p>
        </div>
      </header>

      {/* Hero Content*/}
      <section id="home" className="herosection">
        <h1>Creativity meets Learning</h1>
        <p>One bus stop for all fun learning</p>
        <a href="/login">
          {" "}
          <button>Get Started</button>{" "}
        </a>
      </section>
     
    </div>
  );
}
