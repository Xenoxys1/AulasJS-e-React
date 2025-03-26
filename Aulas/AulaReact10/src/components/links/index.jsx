import "./styles.css";
import { Youtube, Github, Instagram, Linkedin } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";
import { api } from '../../services/api';
import { useEffect } from "react";
import { useState } from "react";

export function Links() {
  const { toggleTheme } = useTheme();

  const [user, setUser] = useState([]);

  useEffect(() => {
    async function getUserData() {
      try {
        const response = await api.get('/users/Xenoxys1');
  
        setUser(response.data);
        console.log(response);
      }catch(error){
        console.log("Erro ao buscar dados do usuário ", error);
      }
    }

    getUserData();
  
  }, []); 

  console.log(user);

  return (
    <section>
      <div id="avatar">
        <img src={user.avatar_url} alt="avatar" width="112px" height="112px" />
        <h1>@{user.login}</h1>
      </div>
      <label class="switch">
        <input type="checkbox" onClick={() => toggleTheme()} />
        <span class="slider round"></span>
      </label>
      <div id="linkButtons">
        <button type="button">Inscreva-se no NLW</button>
        <button type="button">Baixe meu e-book</button>
        <button type="button">Veja meu portfólio</button>
        <button type="button">Conheça o Explorer</button>
      </div>
      <div id="socials">
        <a href="https://www.youtube.com/" target="_blank">
          <Youtube size={24} />
        </a>
        <a href="https://github.com/Xenoxys1" target="_blank">
          <Github size={24} />
        </a>
        <a href="https://www.instagram.com/" target="_blank">
          <Instagram size={24} />
        </a>
        <a href="https://www.linkedin.com/" target="_blank">
          <Linkedin size={24} />
        </a>
      </div>
    </section>
  );
}
