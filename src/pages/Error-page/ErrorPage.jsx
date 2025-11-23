import React from "react";
import "./ErrorPage.css";

const ErrorPage = () => {
    return (
        <div className="pg-error">
            <h1>Desculpe ocorreu um erro. A página não foi encontrada.</h1>
            <img src="./publica/imagem-error.png" alt="" />
        </div>
    );
};

export default ErrorPage;
