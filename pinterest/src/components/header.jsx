import React from 'react';
import '../sass/styles.css';

const Header = () => {
    return (
        <header >
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                {/*  <a class="navbar-brand" href="#">Navbar</a> */}
                <input type="image" className="navbar-brand pintImg" src="https://1000marcas.net/wp-content/uploads/2019/12/Pinterest-Logo.png" alt="pinterest" />
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Inicio<span class="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Siguiendo</a>
                        </li>

                        <li>
                            <form className="form-inline">
                                <input className="form-control mr-sm-2" type="search" placeholder="Buscar" aria-label="Search"></input>
                                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                            </form>
                        </li>
                        <li className="nav-item">
                            <input type="image" className="navbar-brand pintImg" src="https://img.icons8.com/material/48/000000/bell.png" alt="campana" />
                        </li>
                        <li className="nav-item">
                            <input type="image" className="navbar-brand pintImg" src="https://img.icons8.com/ios-filled/50/000000/chat-message.png" alt="chat" />
                            {/*  <a class="nav-link" href="#">Pricing</a> */}
                        </li>
                        <li className="nav-item">
                            <input type="image" className="navbar-brand pintImg" src="https://img.icons8.com/material-rounded/48/000000/user-male-circle.png" alt="usuario" />
                            {/*  <a class="nav-link" href="#">Pricing</a> */}
                        </li>
                        <li className="nav-item dropdown">
                            {/*   <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Dropdown link
                                </a> */}
                            <input type="image" className="navbar-brand pintImg" src="https://img.icons8.com/metro/52/000000/expand-arrow.png" alt="flecha"  id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"/>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <a className="dropdown-item" href="#">Action</a>
                                <a className="dropdown-item" href="#">Another action</a>
                                <a className="dropdown-item" href="#">Something else here</a>
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}

export default Header;