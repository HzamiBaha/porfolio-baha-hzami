import React from 'react'
import "./footer.css"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">.Baha</h1>
        <ul className="footer__list">

          <li>
            <a href="#about" className="footer__link">About</a>
          </li>

          <li>
            <a href="#portfolio" className="footer__link">Projects</a>
          </li>

          <li>
            <a href="#contact" className="footer__link">Contact</a>
          </li>

        </ul>
        <div className="footer__social">

          <a href="https://github.com/HzamiBaha" className="footer__social-link" target="_blank">
            <i class="uil uil-github"></i>
          </a>

          <a href="https://www.linkedin.com/in/baha-eddine-hzami/" className="footer__social-link" target="_blank">
            <i class="ui uil-linkedin"></i>
          </a>

          <a href="" className="footer__social-link" target="_blank">
            <i class="ui uil-medium-m"></i>
          </a>

        </div>

      </div>
    </footer>
  )
}

export default Footer