import DarkVeil from './components/Darkveil'

function App() {
  return (
    <div style={{ 
      width: '100vw',       // full width of viewport
      height: '100vh',      // full height of viewport
      position: 'relative', // so DarkVeil layers properly
      overflow: 'hidden'    // avoids scrollbars on small screens
    }}>
      <DarkVeil />
    </div>
  )
}

export default App
