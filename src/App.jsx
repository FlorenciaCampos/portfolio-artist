import "./App.css"
import obra from "./assets/obra.jpg"

function App() {
  return (
    <main className="home">
      <header className="home-header">
        <h1>Florencia Campos</h1>

        <nav className="home-nav">
          <a href="#">Obras</a>
          <a href="#">Sobre mí</a>
          <a href="#">Exposiciones</a>
          <a href="#">Contacto</a>
        </nav>
      </header>

      <section className="home-intro">
  <img src={obra} alt="Obra" className="home-image" />
  <p>Artista visual</p>
</section>
    </main>
  )
}

export default App