import { Container } from './styles'

import reactIcon from '../../assets/react-icon.svg'
import linkedinIcon from '../../assets/linkedin.png'
import githubIcon from '../../assets/github.png'
import instagramIcon from '../../assets/instagram.png'
import discordIcon from '../../assets/discord.png'

export function Footer() {
  return (
    <Container className="footer">
      <a href="/" className="logo">
        <span>H</span>
        <span>itesh</span>
      </a>
      <div>
        <p>
          This site was made with<img src={reactIcon} alt="React" /> and with 
          <span>❤️</span>
        </p>
      </div>

      <div className="social-media">
        <a
          href="https://www.linkedin.com/in/hitesh6025/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={linkedinIcon} alt="Linkedin" />
        </a>

        <a
          href="https://github.com/hitesh6025"
          target="_blank"
          rel="noreferrer"
        >
          <img src={githubIcon} alt="GitHub" />
        </a>

        <a
          href="https://www.instagram.com/hiteshsharma2743/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={instagramIcon} alt="Instagram" />
        </a>

        <a
          href="https://discord.gg/7eDRrYe8"
          target="_blank"
          rel="noreferrer"
        >
          <img src={discordIcon} alt="Discord" />
        </a>
      </div>
    </Container>
  )
}
