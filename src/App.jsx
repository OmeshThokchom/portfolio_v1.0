import DarkVeil from "./components/DarkVeil";
import ParticlesBackground from "./components/ParticlesBackground";
import TextType from "./components/TypeText";
import TrueFocus from './components/TrueFocus';
import CardNav from './components/CardNav';



  
function App() {
  return (
    <div className="app-wrapper">
      {/* Navigation Bar - Fixed at the top */}
      <nav className="nav-wrapper">
        <CardNav />
      </nav>

      {/* Background Layers */}
      <div className="background-layers">
        <div className="background-layer">
          <DarkVeil />
        </div>
        <div className="background-layer">
          <ParticlesBackground />
        </div>
      </div>

      {/* Main Content */}
      <main className="main-content">
        {/* Hero Section */}
        <section className="hero-section">
          <div className="container">
            <div className="hero-content">
              {/* Typewriter effect */}
              <div className="hero-typewriter">
                <TextType
                  text={["Welcome! to My Portfolio", "I'm Dayananda Thokchom", "software developer"]}
                  typingSpeed={75}
                  pauseDuration={1500}
                  showCursor={true}
                  cursorCharacter="_"
                  CursorBlinkDuration={75}
                  DeletingSpeed={50}
                  initialDelay={500}
                  loop={true}
                  className="top-left-typewriter"
                />
              </div>

              {/* TrueFocus Component */}
              <div className="hero-focus">
                <TrueFocus
                  sentence="This is Dayananda Thokchom"
                  manualMode={true}
                  blurAmount={5}
                  borderColor="rgba(23, 10, 136, 1)"
                  animationDuration={0.3}
                  pauseBetweenAnimations={1}
                  className="bottom-left"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
