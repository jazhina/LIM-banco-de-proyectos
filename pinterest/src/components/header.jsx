import React from 'react';

const Header = () => {
    return (
        <header >
            <nav className="navbar navbar-expand-lg navbar-light ">
                <img src="https://i.imgur.com/ESXUlFL.png" alt="imagen" />
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse flex-row-reverse " id="navbarNavAltMarkup">
                    <div className="navbar-nav font">
                    <a className="nav-item nav-link active m-3 text-center font" href="https://omairapalacios.github.io/red-social-juntas/src/ ">Red de <br /> Emprendedoras</a>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header;