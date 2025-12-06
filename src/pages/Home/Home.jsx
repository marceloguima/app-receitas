import React from "react";
import Header from "../../components/Header";
import Card from "../../components/card";
import { useEffect, useState } from "react";
import apiBuscaReceitas from "../../conetaAxios/apiBuscaReceitas";
import LoadingCard from "../../components/Loader";
import Modal from "../../components/Modal";
import MensagemTemporaria from "../../components/MensagemTemporaria";

import "./home.css";

export default function Home() {
    const [receitas, setReceitas] = useState([]);
    const [busca, setBusca] = useState("");
    const [loading, setLoading] = useState(false);
    const [alerta, setAlerta] = useState(false);
    const [tituloSecao, setatituloSecao] = useState("Receitas do dia");

    useEffect(() => {
        async function carregarReceitas() {
            setLoading(true);
            try {
                const dados = await apiBuscaReceitas();
                setReceitas(dados);
                setLoading(false);
                console.log(dados);
            } catch (erro) {
                console.error("erro ao carregar receitas", erro);
                console.log("deu erro");
            }
        }
        carregarReceitas();
    }, []);

    // buscar
    async function handleBuscar(evento) {
        evento.preventDefault();
        setLoading(true);
        try {
            const dados = await apiBuscaReceitas(busca);
            console.log(dados);
            setatituloSecao(`Receita de ${busca} encontrada.`);

            setLoading(false);
            if (dados == "") {
                //    alert("Não encontrei nenhuma receita com " + busca)
                setAlerta(true);
                setatituloSecao(tituloSecao)
                setTimeout(() => {
                    setAlerta(false);
                }, 7000);

                carregarReceitas();
            } else {
                setAlerta(false);
            }
            setLoading(false);

            setReceitas(dados);
        } catch (erro) {
            console.error("erro ao buscar receitas", erro);
            console.log("erro ao buscar");
            setLoading(false);
        }
    }

   
    return (
        <>
            <Header value={busca} onChange={setBusca} onSubmit={handleBuscar} />
            <div className="sections">
                <section className="hero">
                    <div className="content-left">
                        <h1>As melhores receitas você encontra aqui!</h1>
                        {/* <img src="./publica/manjericao.png" alt="" /> */}
                    </div>
                    <div className="circulo">
                        <img src="./publica/prato1-hero.png" alt="" />
                       <MensagemTemporaria texto="Oie! Eu sou o chefinho, sou uma IA treinada para criar receitas para você!" duracao={12000} intervalo={20000}/>
                    </div>
                </section>

                <section className="pratos-entrada">
                    {alerta && <Modal ingrediente={busca} />}
                    <h2 className="titulo-secao">{tituloSecao}</h2>
                    <div className="cards_card">
                        {loading
                            ? Array.from({ length: 8 }).map((_, i) => (
                                  <LoadingCard key={i} />
                              ))
                            : receitas.map((receita) => (
                                  <Card
                                      key={receita.id}
                                      src={receita.imagem}
                                      alt={
                                          "imagem da receita de " +
                                          receita.titulo
                                      }
                                      titulo={receita.titulo}
                                      //   tempoPreparo={`${receita.tempoPreparo} min`}
                                      //   quantPorcoes={`${receita.porcoes} porções`}
                                  />
                              ))}
                    </div>
                </section>
                <footer>
                    <p>Footer</p>
                </footer>
            </div>
        </>
    );
}
