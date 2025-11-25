import React from "react";
import { NavLink } from "react-router-dom";
import { useState } from "react";
// icones
import { MdOutlineAddCircleOutline } from "react-icons/md";
import { MdClose } from "react-icons/md";
import { RiMenuUnfoldFill } from "react-icons/ri";
import { RiFileList3Line } from "react-icons/ri";
import { IoHome } from "react-icons/io5";


import "./styles.css";

const AISidebar = () => {
    const [sidBarOpen, setSidBarClose] = useState(false);

 function togleSideBar () {
        setSidBarClose(!sidBarOpen);
    };

    return (
        <aside className={sidBarOpen ? "sid-bar-open" :  "sid-bar-close"}>
            <h1 className="logo">log</h1>
            <button onClick={togleSideBar} className="btn-open-sid-bar">
                {sidBarOpen ? <MdClose /> : <RiMenuUnfoldFill />}
            </button>

            <ul className="list-sid-bar">
                <li>
                    <NavLink to="/" className="links">
                    <IoHome className="icon-home"/>
                     {sidBarOpen ? "Home" : ""}
                    </NavLink>
                </li>

                <li>
                    <button className="btn-nova-receita">
                        <MdOutlineAddCircleOutline className="icon-nova-receita"/>
                    {sidBarOpen ? " Nova conversa" : ""} 
                    </button>
                </li>
                <li>
                    <button className="btn-historico">
                        <RiFileList3Line className="icon-historico"/>
                    {sidBarOpen ? " Histórico de receitas" : ""}
                    </button>
                </li>
            </ul>
             {sidBarOpen ?   <ul className="lista-historico">
                <li>Receita de bife acebolado</li>
                <li>Receita de bife acebolado</li>
                <li>Receita de bife acebolado</li>
                <li>Receita de bife acebolado</li>
                <li>Receita de bife acebolado</li>
            </ul> : ""}
          
        </aside>
    );
};

export default AISidebar;

