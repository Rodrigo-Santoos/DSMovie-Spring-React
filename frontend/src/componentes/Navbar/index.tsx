/*importando imagem*/
import { ReactComponent as GithubIcon } from 'assets/img/git.svg'
import './styles.css'

function Navbar() {
    return (
        <header>
            <nav className="container">
                <div className="dsmovie-nav-conteudo">
                    <h1 >DSMovie</h1>
                    <a href="https://github.com/Rodrigo-Santoos"></a>
                    <div className="dsmovie-container-contato">
                        <GithubIcon />
                        <p className="dsmovie-link-contato">/Rodrigo-Santoos</p>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Navbar;