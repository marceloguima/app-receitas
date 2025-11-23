import React from "react";
import { NavLink } from "react-router-dom";
import "./styles.css";

// ICONES
import { FaSearch } from "react-icons/fa";

const Header = () => {
    return (
        <header>
            <nav>
                <div className="logo" >
                  um logo aqui  
                  </div>
                <ul className="nav-links">
                    <li>
                        <NavLink to="/" className={({isActive}) => isActive ? "link-ativo" :""}>Home</NavLink>
                    </li>
                    <li><a href="sobremesas"className={({isActive}) => isActive ? "link-ativo" :""}>Sobremesas</a></li>
                    <li><a href="entradas">Entradas</a></li>
                    <li><a href="Prato-principal">Prato principal</a></li>

                    <li>
                        <NavLink to="/ia" className={({isActive}) => isActive ? "link-ativo" :""}>Crie com a IA</NavLink>
                    </li>
                </ul>

                <form className="form-buscar">
                    <input type="text" placeholder="Buscar receitas..." className="barra-busca"/>
                    <button type="submit" className="btn-buscar"><FaSearch />
</button>
                </form>
            </nav>
        </header>
    );
};

export default Header;
