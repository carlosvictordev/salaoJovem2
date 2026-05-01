import '../landing/Landing.css'
import { useState } from "react";
import Fundo from "../../assets/fundo.png";
import { useNavigate } from "react-router-dom";

function Account(){
    const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const navigate = useNavigate();


    function Voltar() {
        navigate("/");
    }


    return(
        <>
        <header>
  <div className="landing">
    <div className="objetos">
      <div className="card">
        <form class="form">

    <label>Nome completo</label>
    <input type="text" placeholder="Digite seu nome completo" />

    <label>CPF</label>
    <input type="text" placeholder="Digite seu CPF" />

    <label>Email</label>
    <input type="email" placeholder="Digite seu email" />

    <label>Celular</label>
    <div class="phone">
      <select>
        <option>+55</option>
      </select>
      <input type="text" placeholder="(99) 99999-9999" />
    </div>

    <label>Senha</label>
    <input type="password" placeholder="Digite sua senha" />

    <label>Sexo (Opcional)</label>
    <select>
      <option>Escolha o sexo</option>
      <option>Masculino</option>
      <option>Feminino</option>
    </select>

    <label>Data de Nascimento (Opcional)</label>
    <input type="date" />

    <div class="buttons">
      <button type="submit" class="btn-submit">Cadastrar</button>
      <button type="button" class="btn-back" onClick={Voltar}>Voltar</button>
    </div>

  </form>

      </div>
    </div>    
  </div>
  
</header>
        </>
    )
}

export default Account