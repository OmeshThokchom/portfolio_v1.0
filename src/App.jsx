import DarkVeil from "./components/DarkVeil";
import ParticlesBackground from "./components/Particles";

function App() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background 1 - DarkVeil */}
      <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
        <DarkVeil />
      </div>

      {/* Background 2 - Particles (in front of DarkVeil) */}
      <div style={{ position: "absolute", inset: 0, zIndex: 1 }}>
        <ParticlesBackground />
      </div>

      {/* Foreground Content */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          color: "#fff",
          textAlign: "center",
          paddingTop: "40vh",
        }}
      >
        <h1>🔥 My Portfolio 🔥</h1>
        <p>React + DarkVeil + Particles</p>
      </div>
    </div>
  );
}

export default App;
