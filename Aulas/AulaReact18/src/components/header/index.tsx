import logoImg from "/logo.svg";
import "./header.css";
import { Form } from "../form";

export function Header(){
    return(
        <header>
            <img src ={logoImg} alt="todo logo"/>
            <Form/>
        </header>
    );
}