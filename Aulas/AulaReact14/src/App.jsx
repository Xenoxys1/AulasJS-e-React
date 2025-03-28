import { useState } from "react";
import logoImg from "/assets/logo.svg";
export function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({ email: "", password: "" });

  function handleSubmit(event) {
    event.preventDefault();

    let formIsValid = true;
    let newErrors = { email: "", password: "" };

    if (!email) {
      newErrors.email = "O e-mail é obrigatório!";
      formIsValid = false;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Digite um email válido!";
      formIsValid = false;
    }

    if (!password) {
      newErrors.password = "A senha é obrigatória!";
      formIsValid = false;
    }

    if (password.length > 6) {
      newErrors.password = "A senha deve conter ao menos 6 caracteres!";
      formIsValid = false;
    }

    if (!formIsValid) {
      setErrors(newErrors);
      return;
    }
  }

  return (
    <>
      <section>
        <div className="s-form">
          <img src={logoImg} alt="logo vertigo" />
          <div className="content">
            <h1 className="title">Acesse a Plataforma</h1>
            <p className="desc">
              Faça login ou registre-se para começar a construir seus projetos
              ainda hoje
            </p>

            <form obSubmit={handleSubmit}>
              <label htmlFor="email">E-mail</label>
              <input
                type="email"
                placeholder="Digite seu e-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={errors.email ? "error" : ""}
              />
              {errors.email && <span className="error">{errors.email}</span>}

              <div className="iForgor">
                <label htmlFor="password">Senha</label>
                <a href="">Esqueceu a senha?</a>
              </div>
              <input
                type="password"
                placeholder="Digite sua senha"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={errors.password ? "error" : ""}
              />
              {errors.password && (
                <span className="error">{errors.password}</span>
              )}

              <button type="submit" className="signIn">
                Entrar
              </button>
            </form>
            <p className="signUp">
              Ainda não tem uma conta? <a href="">Inscreva-se</a>
            </p>
          </div>
        </div>
        <div className="s-img"></div>
      </section>
    </>
  );
}
