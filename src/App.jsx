import "./App.css"
import obra from "./assets/obra.jpg"
import firma from "./assets/firma.png"
import Footer from "./footer/Footer"

function App() {
  return (
    <main className="home">
      <header className="home-header">
        <nav className="home-nav">
          <a href="#">Obras</a>
          <a href="#">Sobre mí</a>
          <a href="#">Exposiciones</a>
          <a href="#">Contacto</a>
        </nav>
      </header>

      <section className="hero">
        <img src={obra} alt="Obra de Florencia Campos" className="hero-image" />
        <img src={firma} alt="Firma Florencia Campos" className="hero-signature" />
      </section>

      <Footer />
    </main>
  )
}



export default App