import DarkVeil from "./components/DarkVeil";
import ParticlesBackground from "./components/ParticlesBackground";
import TextType from "./components/TypeText";
import BlurText from "./components/BlurText";
import TrueFocus from './components/TrueFocus';


{/*blur text animation*/}
const handleAnimationComplete = () => {

  console.log('Animation completed!');

};

  
function App() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        position: "relative",
        overflow: "hidden",
        background: "#000",
      }}
      >
      {/* Layer 1: DarkVeil */}
      <div style={{ position: "absolute", width: "100%", height: "100%", zIndex: 0 }}>
        <DarkVeil />
      </div>

      {/* Layer 2: Particles */}
      <div style={{ position: "absolute", width: "100%", height: "100%", zIndex: 1 }}>
        <ParticlesBackground />
      </div>

      {/* Layer 3: UI */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
        }}>
        {/* TrueFocus Component */}
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

      {/* typewriter effect */}
      <div
        style={{
          position: "relavtive",
          zIndex: 2,
        }}
        >
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

            {/* blur text animation */}
      <div style={{ position: "absolute", top: "300px", left: "40px", zIndex: 2 }}>
        <BlurText
          text="Transforming complex data into intelligent solutions"
          delay={150}
          animateBy="words"
          direction="top"
          className="text-2xl mb-2"
        />
        <BlurText
          text="Specializing in machine learning + deep neural networks,"
          delay={300}
          animateBy="words"
          direction="top"
          className="text-2xl mb-2"
        />
        <BlurText
          text="and artificial intelligence applications that drive innovation."
          delay={450}
          animateBy="words"
          direction="top"
          className="text-2xl"
        />
      </div>
            
    </div>
  );
}

export default App;
