<script lang="ts">
  let signUpMode = false;
  function toggleSignUp() {
    signUpMode = !signUpMode;
    console.log(signUpMode);
  }
  import Logo from './Logo_sin_fondo.png';

</script>
  <svelte:head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'>
    <title>Inicio de Sesion</title>

    <style>
      *{
      margin: 0;
      padding: 0;
      text-decoration: none;
      border: none;
      outline: none;
      font-family: 'Poppins', sans-serif;
      }


      .body{
        font-size: 62.5%;
          width: 100%;
          height: 100vh;
          overflow-x: hidden;
          background-color: black;
          color: white;
      }
    </style>
  </svelte:head>

  <div class="header">
    <p  class="logo"> <img src={Logo} height="60px" width="60" alt="" /> </p>
  </div>
  
  <div class="body">
    <div class="container" class:sign-up-mode={signUpMode}>
      <div class="forms-container">
        <div class="signin-signup">
          <form action='?/login' method="post" class="sign-in-form">
            <h2 class="title">Iniciar Sesion</h2>
            <div class="input-field">
              <i class="fas fa-user"></i>
              <input type="text" placeholder="Email" name="correo"/>
            </div>
            <div class="input-field">
              <i class="fas fa-lock"></i>
              <input type="password" placeholder="Contraseña" name="password"/>
            </div>
            
            <input type="submit" value="Iniciar sesion" class="btn solid" />

            <div class="r">
              <p>¿Olvidaste tu contraseña o usuario?<br></p> <br>
            </div>

            <div class="a">
              <a href="/Verificacion">Recuperar cuenta </a>
            </div>

            <p class="social-text">O Inicia con estas plataformas:</p>

            <div class="social-icons">
              <a href="https://github.com/login" class="social-icon">
                <i class="bx bxl-github"></i>
              </a>
              <a href="https://accounts.google.com/InteractiveLogin/identifier?continue=http%3A%2F%2Fsupport.google.com%2Fmail%2Fanswer%2F8494%3Fhl%3Des-419%26co%3DGENIE.Platform%253DDesktop&ec=GAZAdQ&hl=es-419&passive=true&sjid=3953280471630082413-NA&ifkv=AcMMx-c0DUvxqxgAZlwFbKsyntonqDisg91kXdlrKS7D4j3iOv5kjXY09R7XBDrsi_q-9CKFRS9Glg&ddm=1&flowName=GlifWebSignIn&flowEntry=ServiceLogin" class="social-icon">
                <i class="bx bxl-google"></i>
              </a>
              <a href="https://www.linkedin.com/login/es" class="social-icon">
                <i class="bx bxl-linkedin"></i>
              </a>
            </div>
          </form>
  
          <form action='?/register' method="post" class="sign-up-form">
            <h2 class="title">Registro</h2>
            <div class="input-field">
              <i class="fas fa-user"></i>
              <input type="text" placeholder="Usuario" name="usuario" />
            </div>
            <div class="input-field">
              <i class="fas fa-envelope"></i>
              <input type="email" placeholder="Email" name="correo" />
            </div>
            <div class="input-field">
              <i class="fas fa-lock"></i>
              <input type="password" placeholder="Contraseña" name="password" />
            </div>
            <input type="submit" class="btn" value="Registrarse" />
            <p class="social-text">O Registrate con estas plataformas</p>
            <div class="social-icons">
              <a href="https://github.com/login" class="social-icon">
                <i class="bx bxl-github"></i>
              </a>
              <a href="https://accounts.google.com/InteractiveLogin/identifier?continue=http%3A%2F%2Fsupport.google.com%2Fmail%2Fanswer%2F8494%3Fhl%3Des-419%26co%3DGENIE.Platform%253DDesktop&ec=GAZAdQ&hl=es-419&passive=true&sjid=3953280471630082413-NA&ifkv=AcMMx-c0DUvxqxgAZlwFbKsyntonqDisg91kXdlrKS7D4j3iOv5kjXY09R7XBDrsi_q-9CKFRS9Glg&ddm=1&flowName=GlifWebSignIn&flowEntry=ServiceLogin" class="social-icon">
                <i class="bx bxl-google"></i>
              </a>
              <a href="https://www.linkedin.com/login/es" class="social-icon">
                <i class="bx bxl-linkedin"></i>
              </a>
            </div>
          </form>
        </div>
      </div>
  
      <div class="panels-container">
        <div class="panel left-panel">
          <div class="content">
            <h3>¿Eres nuevo?</h3>
            <p>Si eres nuevo dale click al boton para registrarte</p>
            <button class="btn transparent" id="sign-up-btn" on:click={toggleSignUp}>Registro</button>
          </div>
        </div>
        <div class="panel right-panel">
          <div class="content">
            <h3>¿Ya estas registrado?</h3>
            <p>Si ya estas registrado dale click al boton para iniciar sesion</p>
            <button class="btn transparent" id="sign-in-btn" on:click={toggleSignUp}>Iniciar Sesion</button>
          </div>
        </div>
      </div>
    </div>
  </div>

  <style>  
    @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700;800&display=swap");

    * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    }

    .header {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      padding: 0.5% ;
      background-color: transparent;
      filter: drop-shadow(10px);
      display: flex;
      justify-content: space-between;
      align-items: center;
      z-index: 100;
    }

    .logo {
      font-size: 25px;
      color: #b74b4b;
      font-weight: 800;
      cursor: pointer;
      transition: 0.5s ease;
    }

    .logo:hover {
      transform: scale(1.1);
    }

    .a{
      color: #000000;
      font-size: 15px;
    }
    .r{
      color: #000000;
      align-items:center ;
      justify-content:center;
      display: flex;
      font-size: 15px;
    }
    .container {
      position: relative;
      width: 100%;
      background-color: #fff;
      min-height: 100vh;
      overflow: hidden;
    }

    .forms-container {
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
    }

    .signin-signup {
      position: absolute;
      top: 50%;
      transform: translate(-50%, -50%);
      left: 75%;
      width: 50%;
      transition: 1s 0.7s ease-in-out;
      display: grid;
      grid-template-columns: 1fr;
      z-index: 5;
    }

    .image-container {
      display: flex;
      justify-content: center;
      margin-top: 20px;
    }

    .floating-image {
      max-width: 300px;
      display: block;
      margin: 10px auto;
    }

    .panel .content {
      color: #b74b4b;
    }

    .panel h3 {
      font-weight: 600;
      line-height: 1;
      font-size: 1.5rem;
    }

    .btn.transparent {
      background: none;
      border: 2px solid #b74b4b;
      width: 130px;
      height: 41px;
      font-weight: 600;
      font-size: 0.8rem;
      margin-top: 15px;
    }

    .container.sign-up-mode .signin-signup {
      left: 25%;
    }

    .container.sign-up-mode form.sign-up-form {
      opacity: 1;
      z-index: 2;
    }

    .container.sign-up-mode form.sign-in-form {
      opacity: 0;
      z-index: 1;
    }

    .body,
    input {
      font-family: "Poppins", sans-serif;
    }

    .container {
      position: relative;
      width: 100%;
      background-color: #fff;
      min-height: 100vh;
      overflow: hidden;
    }

    .forms-container {
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
    }

    .signin-signup {
      position: absolute;
      top: 50%;
      transform: translate(-50%, -50%);
      left: 75%;
      width: 50%;
      transition: 1s 0.7s ease-in-out;
      display: grid;
      grid-template-columns: 1fr;
      z-index: 5;
    }

    form {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      padding: 0rem 5rem;
      transition: all 0.2s 0.7s;
      overflow: hidden;
      grid-column: 1 / 2;
      grid-row: 1 / 2;
    }

    form.sign-up-form {
      opacity: 0;
      z-index: 1;
    }

    form.sign-in-form {
      z-index: 2;
    }

    .title {
      font-size: 2.2rem;
      color: #b74b4b;
      margin-bottom: 10px;
    }

    .input-field {
      max-width: 380px;
      width: 100%;
      background-color: #f0f0f0;
      margin: 10px 0;
      height: 55px;
      border-radius: 55px;
      display: grid;
      grid-template-columns: 15% 85%;
      padding: 0 0.4rem;
      position: relative;
      border: 2px solid #b74b4b;
    }

    .input-field i {
      text-align: center;
      line-height: 55px;
      color: #acacac;
      transition: 0.5s;
      font-size: 1.1rem;
    }

    .input-field input {
      background: none;
      outline: none;
      border: none;
      line-height: 1;
      font-weight: 600;
      font-size: 1.1rem;
      color: #333;
    }

    .input-field input::placeholder {
      color: #aaa;
      font-weight: 500;
    }

    .social-text {
      padding: 0.7rem 0;
      color: #000000;
      font-size: 1rem;
    }


    .social-icons a {
      display: inline-flex;
      justify-content: center;
      align-items: center;
      width: 3rem;
      height: 3rem;
      background-color: transparent;
      border: 0.2rem solid #b74b4b;
      font-size: 2rem;
      border-radius: 50%;
      margin: 3rem 1.5rem 3rem 0;
      transition: 0.3s ease;
      color: #b74b4b;  
    }

    .social-icons a:hover {
      color: black;
      transform: scale(1.3) translateY(-5px);
      background-color: #b74b4b;
      box-shadow: 0 0 25px #b74b4b;
    }


    .btn {
      width: 150px;
      background-color: #b74b4b;
      border: none;
      outline: none;
      height: 49px;
      border-radius: 49px;
      color: #ffffff;
      text-transform: uppercase;
      font-weight: 600;
      margin: 10px 0;
      cursor: pointer;
      transition: 0.5s;
    }

    .btn:hover {
      background-color: #000000;
    }

    .panels-container {
      position: absolute;
      height: 100%;
      width: 100%;
      top: 0;
      left: 0;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
    }

    .container:before {
      content: "";
      position: absolute;
      height: 2000px;
      width: 2000px;
      top: -10%;
      right: 48%;
      transform: translateY(-50%);
      background-image: linear-gradient(-45deg, #000000 0%, #000000 100%);
      transition: 1.8s ease-in-out;
      border-radius: 50%;
      z-index: 6;
    }

    .image {
      width: 100%;
      transition: transform 1.1s ease-in-out;
      transition-delay: 0.4s;
    }

    .panel {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      justify-content: space-around;
      text-align: center;
      z-index: 6;
    }

    .left-panel {
      pointer-events: all;
      padding: 3rem 17% 2rem 12%;
    }

    .right-panel {
      pointer-events: none;
      padding: 3rem 12% 2rem 17%;
    }

    .panel .content {
      color: #fff;
      transition: transform 0.9s ease-in-out;
      transition-delay: 0.6s;
    }

    .panel h3 {
      font-weight: 600;
      line-height: 1;
      font-size: 1.5rem;
    }

    .panel p {
      font-size: 0.95rem;
      padding: 0.7rem 0;
    }

    .btn.transparent {
      margin: 0;
      background: none;
      border: 2px solid #fff;
      width: 130px;
      height: 41px;
      font-weight: 600;
      font-size: 0.8rem;
    }

    .right-panel .image,
    .right-panel .content {
      transform: translateX(800px);
    }

  /* ANIMATION */

    .container.sign-up-mode:before {
      transform: translate(100%, -50%);
      right: 52%;
    }

    .container.sign-up-mode .left-panel .image,
    .container.sign-up-mode .left-panel .content {
      transform: translateX(-800px);
    }

    .container.sign-up-mode .signin-signup {
      left: 25%;
    }

    .container.sign-up-mode form.sign-up-form {
      opacity: 1;
      z-index: 2;
    }

    .container.sign-up-mode form.sign-in-form {
      opacity: 0;
      z-index: 1;
    }

    .container.sign-up-mode .right-panel .image,
    .container.sign-up-mode .right-panel .content {
      transform: translateX(0%);
    }

    .container.sign-up-mode .left-panel {
      pointer-events: none;
    }

    .container.sign-up-mode .right-panel {
      pointer-events: all;
    }

    @media (max-width: 870px) {
      .container {
        min-height: 800px;
        height: 100vh;
      }
      .signin-signup {
        width: 100%;
        top: 95%;
        transform: translate(-50%, -100%);
        transition: 1s 0.8s ease-in-out;
      }

      .signin-signup,
      .container.sign-up-mode .signin-signup {
        left: 50%;
      }

      .panels-container {
        grid-template-columns: 1fr;
        grid-template-rows: 1fr 2fr 1fr;
      }

      .panel {
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
        padding: 2.5rem 8%;
        grid-column: 1 / 2;
      }

      .right-panel {
        grid-row: 3 / 4;
      }

      .left-panel {
        grid-row: 1 / 2;
      }

      .image {
        width: 200px;
        transition: transform 0.9s ease-in-out;
        transition-delay: 0.6s;
      }

      .panel .content {
        padding-right: 15%;
        transition: transform 0.9s ease-in-out;
        transition-delay: 0.8s;
      }

      .panel h3 {
        font-size: 1.2rem;
      }

      .panel p {
        font-size: 0.7rem;
        padding: 0.5rem 0;
      }

      .btn.transparent {
        width: 110px;
        height: 35px;
        font-size: 0.7rem;
      }

      .container:before {
        width: 1500px;
        height: 1500px;
        transform: translateX(-50%);
        left: 30%;
        bottom: 68%;
        right: initial;
        top: initial;
        transition: 2s ease-in-out;
      }

      .container.sign-up-mode:before {
        transform: translate(-50%, 100%);
        bottom: 32%;
        right: initial;
      }

      .container.sign-up-mode .left-panel .image,
      .container.sign-up-mode .left-panel .content {
        transform: translateY(-300px);
      }

      .container.sign-up-mode .right-panel .image,
      .container.sign-up-mode .right-panel .content {
        transform: translateY(0px);
      }

      .right-panel .image,
      .right-panel .content {
        transform: translateY(300px);
      }

      .container.sign-up-mode .signin-signup {
        top: 5%;
        transform: translate(-50%, 0);
      }
    }

    @media (max-width: 570px) {
      form {
        padding: 0 1.5rem;
      }

      .image {
        display: none;
      }
      .panel .content {
        padding: 0.5rem 1rem;
      }
      .container {
        padding: 1.5rem;
      }

      .container:before {
        bottom: 72%;
        left: 50%;
      }

      .container.sign-up-mode:before {
        bottom: 28%;
        left: 50%;
      }
    }
</style>
  
  