import "./Footer.css"
import { FaInstagram, FaWhatsapp, FaEnvelope, FaFileAlt } from "react-icons/fa"

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-icons">
        <a href="https://instagram.com/flor_bellas.artes" target="_blank">
          <FaInstagram />
        </a>

        <a href="mailto:florenciacampos460@gmail.com?subject=Consulta%20sobre%20tu%20obra&body=Hola%20Florencia,%20vi%20tu%20portfolio%20y%20me%20gustaría%20consultarte" target="_blank" rel="noreferrer">
        <FaEnvelope />
        </a>

        <a href="https://wa.me/5491123999674?text=Hola%20Florencia,%20vi%20tu%20portfolio%20y%20me%20interesa%20tu%20obra" target="_blank" rel="noreferrer">
        <FaWhatsapp />
        </a>

        <a href="#">
          <FaFileAlt />
        </a>
      </div>

      <p className="footer-copy">© 2026 Florencia Campos</p>

    </footer>
  )
}

export default Footer