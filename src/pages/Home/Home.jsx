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
                        <Card />
                        <Card />
                        <Card />
                    </div>
                </section>
                <section className="pratos-entrada">
                    <h2>Pratos principais</h2>
                    <div className="cards_card">
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                    </div>
                </section>
                <section className="pratos-entrada">
                    <h2>Sobremesas</h2>
                    <div className="cards_card">
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                    </div>
                </section>
                <section className="pratos-entrada">
                    <h2>Bebidas</h2>
                    <div className="cards_card">
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                    </div>
                </section>

              
            <footer>
                <p>Footer</p>
            </footer>
            </div>
        </>
    );
}
