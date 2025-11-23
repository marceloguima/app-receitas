import React from "react";
import Header from "../../components/Header";
import "./AIGenerator.css";

// icones
import { FaLocationArrow } from "react-icons/fa";

export default function AIRecipeGenerator() {
    return (
        <>
            <Header />
            <main className="chat">
                <div className="chat-user">
                    <div className="caixa-chat-user">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Eveniet non voluptas nam et vitae assumenda
                            odit. Eligendi amet nihil suscipit.
                        </p>
                    </div>
                    <img src="./publica/avatar-user.png" alt="imagem avatar usuario" className="avatar-user"/>
                </div>
                <div className="resposta-ia">
                        <img src="./publica/mascote.png" alt="imagem do robô mascote" className="mascote" />
                    <div className="caixa-chat-ia">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Tempora quam voluptatibus animi natus,
                            pariatur eligendi tenetur voluptate quibusdam
                            voluptas. Doloribus dolores, dolorem tempore
                            quisquam eaque a libero quis architecto hic?
                        </p>
                    </div>
                </div>

                <div className="area-entrada-chat">
                    <input
                        type="text"
                        placeholder="Me diga quais ingredientes você tem aí."
                    />
                    <div className="area-buttons">
                        <button>
                            <FaLocationArrow />
                        </button>
                    </div>
                </div>
            </main>
        </>
    );
}
