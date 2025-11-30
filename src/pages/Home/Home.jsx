import React from "react";
import Header from "../../components/Header";
import Card from "../../components/card";
import { useEffect, useState } from "react";
import apiBuscaReceitas from "../../conetaAxios/apiBuscaReceitas";

import "./home.css";

export default function Home() {
    const [receitas, setReceitas] = useState([]);
    const [busca, setBusca] = useState("");
    const [loading, setLoading] = useState("");
    // useEffect(() => {
    //     async function carregarReceitas() {
    //         try {
    //             const dados = await apiBuscaReceitas(); //traz todas sem buscar
    //             setReceitas(dados);
    //             console.log("deu certo");
    //             console.log(dados);
    //         } catch (erro) {
    //             console.error("erro ao carregar receitas", erro);
    //             console.log("deu erro");
    //         }
    //     }
    //     carregarReceitas();
    // }, []);

    // buscar
    async function handleBuscar(evento) {
        evento.preventDefault();
        setLoading("buscando...")
        try {
            const dados = await apiBuscaReceitas(busca);
            console.log(dados.titulo)


            if(dados == ""){
                setLoading("Não encontrei receitas com " + busca)
            }else{
                setLoading("")
            }
        
            setReceitas(dados);
        } catch (erro) {
            console.error("erro ao buscar receitas", erro);
            console.log("erro ao buscar")
            setLoading("erro ao buscar")
        }
    }

    return (
        <>
            <Header value={busca} onChange={setBusca} onSubmit={handleBuscar} />
            <div className="sections">
                <section className="hero">
                    <div className="content-left">
                    <h2>{loading}</h2>
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
                        {receitas.map((receita) => {
                            return (
                                <Card
                                    key={receita.id}
                                    src={receita.imagem}
                                    alt={
                                        "imagem da receita de " + receita.titulo
                                    }
                                    titulo={receita.titulo}
                                    tempoPreparo={`${receita.tempoPreparo} min`}
                                    quantPorcoes={`${receita.porcoes} porções`}
                                />
                            );
                        })}
                    </div>
                </section>
                <footer>
                    <p>Footer</p>
                </footer>
            </div>
        </>
    );
}
