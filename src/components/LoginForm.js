import React from 'react';
import '../styles/login.css';
import Img1 from '../images/iniciar-sesion.svg';
import Img2 from '../images/user.svg';
import Img3 from '../images/pass.svg';

function LoginForm() {
  return (
    <div>
      <div class="aling">
	
      <img class="logo" src={Img1}/>
      <div class="card"></div>
      <div class="head"></div>
      <div></div>
      <a id="login" class="selected" href="#login">Ingreso</a>
      <a id="register" href="#register">Nuevo usuario</a>
      <div></div>
      </div> 
      <div class="tabs">
      <form>
        <div class = "inputs">
          <div class ="input">
            <input placeholder = "Usuario" type="text"/>
            <img src ={Img2}/>
          </div>
          <div class="input">					
            <input placeholder = "Contraseña" type="password"/>
            <img src ={Img3}/>
          </div>

          <label class="checkbox">
            <input type="checkbox"/>
            <span>Recordarme</span>
          </label>
        </div>
        <button>Ingresar</button>
      </form>

      <form action="insert.php" method="POST">
        <div class = "inputs">
          <div class ="input">
            <input placeholder = "Correo" type="email" name="email" required/>
            <img src ="img/mail.svg"/>
          </div>
          <div class="input">					
            <input placeholder = "Usuario" type="text" name="usuario" required/>
            <img src ="img/user.svg"/>
          </div>
          <div class="input">					
            <input placeholder = "Contraseña" type="password" name="contraseña" required/>
            <img src ="img/pass.svg"/>
          </div>
        </div>
        <button type="submit">Registrarse</button>
      </form>
      </div>	
    </div>
  );
}

export default LoginForm;
