import React, { useEffect } from "react";
import Menu from "../Menu";

// ICONES

import { FaSearch } from "react-icons/fa";

import "./styles.css";

const Header = () => {


    return (
        <header>
            <nav>
                <div className="logo">um logo aqui</div>
                <form className="form-buscar">
                    <input
                        type="text"
                        placeholder="Buscar receitas..."
                        className="barra-busca"
                        />
                    <button type="submit" className="btn-buscar">
                        <FaSearch />
                    </button>
                </form>

             <Menu />
            </nav>
        </header>
    );
};

export default Header;
