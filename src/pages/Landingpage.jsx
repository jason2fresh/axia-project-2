import image from "../assets/image.png";
import image2 from "../assets/image2.jpg";
import crazyproject from "../assets/crazyproject.jpg";
import instagram from "../assets/instagram.png";
import linkedin from "../assets/linkedin.png";
import youtube from "../assets/youtube.png";

export default function Landingpage() {
  return (
    <div className="landingpage-container">
      {/* Hero Section */}
      <header className="landingpage-header">
        <nav className="landingpage-nav">
          <a href="#home" className="a">Home</a>
          <a href="#features" className="a">Features</a>
          <a href="#about" className="a">About</a>
          <a href="#contact" className="a">Contact</a>
          <a href="/login" className="landpage-login-button">
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

      {/*Features Section */}
      <section id="features" className="featuresSection">
        <h2>Features</h2>
        <div>
          <div>
            <img
              className="features1"
              src={image}
              alt="bite-size learning"
            ></img>
            <h3>Bite-size Learning</h3>
            <p>Break down large complex code into baby steps </p>
          </div>
          <div>
            <img
              className="features1"
              src={image2}
              alt="expert instructors"
            ></img>
            <h3>Expert Instructors</h3>
            <p>Courses are taught in the most practical ways</p>
          </div>
          <div>
            <img
              className="features1"
              src={crazyproject}
              alt="crazy project"
            ></img>
            <h3>Crazy Projects</h3>
            <p>Hands-on project to apply what you've learned in real life</p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="aboutsection">
        <h2>About Us</h2>

        <p>
          Crazy Academy is designed to simplify your workflow. Whether you're
          managing projects or personal tasks,{" "}
          <span> our platform helps you stay organized and productive.</span>
        </p>
      </section>

      {/* Footer */}
      <footer id="contact">
        <div className="footer1">
          <img src={instagram} alt="instagram"></img>
          <img src={linkedin} alt="linkedin"></img>
          <img src={youtube} alt="youtube"></img>
        </div>
      </footer>
    </div>
  );
}
