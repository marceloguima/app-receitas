import React from "react";
import { Link, NavLink } from "react-router-dom";
// icones
import { FaRegClock } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";


import "./style.css";

const Card = () => {
    return (
        <div className="card">
            <img src="./publica/img-card2.png" className="img-card" alt="" />
            <div className="info-card">
                <h3>Lorem, ipsum dolor.</h3>
                <div className="temp-rend">
                    <p>
                        <FaRegClock />
                        30 min.
                    </p>
                    <p>
                        <FiUsers />4 porções
                    </p>
                </div>
            </div>
            <div className="div-btn-link">
                <NavLink to="/detalhes">Ver receita</NavLink>
            </div>
        </div>
    );
};

export default Card;
