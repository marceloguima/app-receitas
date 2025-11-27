import React from "react";
import Header from "../../components/Header";
import Card from "../../components/card";
import "./home.css";

export default function Home() {
    return (
        <>
            <Header />
            <section className="hero">
                <div className="circulo">
                    <img src="./publica/prato1-hero.png" alt="" />
                </div>
                <div className="content-left">
                    <h1>As melhores receitas você encontra aqui!</h1>
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
        </>
    );
}
