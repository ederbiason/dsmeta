import logo from '../assets/images/logo.svg'

export const Header = () => {
  return (
    <header>
        <div className="dsmeta-logo-container">
            <img src={logo} alt="Logo Image" />
            <h1>DSMeta</h1>

            <p>
                Desenvolvido por <a href="https://www.linkedin.com/in/eder-biason-b0a7b920b/">Eder Biason</a>
            </p>
        </div>
    </header>
  )
}