import DarkVeil from "./components/DarkVeil";
import ParticlesBackground from "./components/ParticlesBackground";

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
          position: "absolute",
          zIndex: 2,
          color: "#fff",
          textAlign: "center",
          width: "100%",
          top: "40%",
          transform: "translateY(-50%)",
        }}
      >
        <h1 style={{ fontSize: "3rem", marginBottom: "1rem" }}>🔥 My Portfolio 🔥</h1>
        <p style={{ fontSize: "1.2rem", opacity: 0.8 }}>React + DarkVeil + Particles</p>
      </div>
    </div>
  );
}

export default App;
