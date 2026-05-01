import '../landing/Landing.css'
import { use, useState } from "react";
import { useNavigate } from "react-router-dom";
import Fundo from "../../assets/fundo.png"


function Home() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const navigate = useNavigate();

    function Login(){
      navigate("/home");
    }
  return(
  
  <>  
<header>
  <div className="container">
    <div className="landing">
      <div className="objetos">
        <div className="card">
          <div className="login">
            <h2>Login</h2>
            <input
                type="email"
                placeholder="Digite seu email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
          </div>

          <div className="senha">
            <h2>Senha</h2>
            <input type="password" 
            placeholder='Digite sua senha'
            value={senha}
            onChange={(e)=> setSenha(e.target.value)}/>
            <br />
            <br />
            <a href="/">Esqueci minha senha</a>
            <button type='submit' onClick={Login}>Entrar</button>
          </div>
          <a href="/account" className='account'>Criar conta</a>

        </div>
      </div>    
    </div>
  </div>
  
</header>
  </>
)
}

export default Home