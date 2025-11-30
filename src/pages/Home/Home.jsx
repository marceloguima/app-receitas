import React from "react";
import Header from "../../components/Header";
import Card from "../../components/card";
import "./home.css";

export default function Home() {
    return (
        <>
            <Header />
            <div className="sections">
                <section className="hero">
                    <div className="content-left">
                        <h1>As melhores receitas você encontra aqui!</h1>
                        <img src="./publica/manjericao.png" alt="" />
                    </div>
                    <div className="circulo">
                        <img src="./publica/prato1-hero.png" alt="" />
                    </div>
                </section>

                <section className="pratos-entrada">
                    <h2>Entradas</h2>
                    <div className="cards_card">
                        <Card />
                    </div>

                    {/* abaixo é o componente card */}
                    {/*  <div className="card">
                                <img src={props.src} className="img-card" alt={props.alt} />
                                <div className="info-card">
                                    <h3>{props.titulo}</h3>
                                    <div className="temp-rend">
                                        <p>
                                            <FaRegClock />
                                            {props.tempoPreparo}
                                        </p>
                                        <p>
                                            <FiUsers />{props.quntPorcoes}
                                        </p>
                                    </div>
                                </div>
                                <div className="div-btn-link">
                                    <NavLink to="/detalhes">Ver receita</NavLink>
                                </div>
                            </div> */}
                </section>
            <footer>
                <p>Footer</p>
            </footer>
            </div>
        </>
    );
}
