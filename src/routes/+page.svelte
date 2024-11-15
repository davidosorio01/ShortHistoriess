
<script>
	import Logo from './Logo_sin_fondo.png';
	import Principal from './principal.png';
	import {goto} from '$app/navigation';
</script>

<svelte:head>
	<title>Short Histories</title>

	<style>
		*{
		margin: 0;
		padding: 0;
		text-decoration: none;
		border: none;
		outline: none;
		font-family: 'Poppins', sans-serif;
		}

		body{
			width: 100%;
			height: 100vh;
			overflow-x: hidden;
			background-color: black;
			color: white;
		}
	</style>
</svelte:head>

<div class="all">
	<div class="header">
		<p  class="logo"> <img src={Logo} height="60px" width="60" alt="" /> </p>
			
		<nav>
			<a href="#inicio">Inicio</a>
			<a href="#nuestros-programas">Nuestros contenidos</a>
			<a href="#final">Redes sociales</a>
			<a href="/InicioSesion">Inicia Sesion</a>
			<a href=""> </a>
			<a href="#">Servicios</a>
		</nav>
	</div>

	<section id="inicio" class="home">
		<div class="home-img">
			<img src={Principal} alt="" />
		</div>
		<div class="home-content">
				
			<h3 class="typing-text">Somos <span></span></h3>
			<p>
				Nuestro objetivo al crear esta pagina es que personas puedan escribir historias cortas y
				leerlas. Esto con el fin de mejorar la comprension lectora de personas.	
			</p>
			<br>
			<button class="btn" onclick={()=>goto('/InicioSesion')}>Registrate</button>
				
		</div>
	</section>

	<section id="nuestros-programas">
		<div class="container">
			<h2>Nuestros contenidos</h2>
			<div class="programas">
				<div class="carta">
					<h3>
						<span>Generos variados </span><br> <br>
						Tendremos amplia variedad de generos ya que personas subiran sus historias y pondran mas
						generos.
					</h3>
						
				</div>
				<div class="carta">
					<h3>
						<span>Actividades dinamimcas </span><br> <br>
						Al finalizar de leer las historias habran unas actividades con el fin de mejorar la
						comprension lectora. <span>(Proximamente)</span>
					</h3>
						
				</div>
				<div class="carta">
					<h3>
						<span>Escribe y lee contenido</span>
						<br> <br>
						Las personas tendran acceso a subir historias y/o leerlas, podran demostrar su creatividad
						y tambien ganaran seguidores.
					</h3>
				</div>
			</div>
		</div>
	</section>

	<section id="final">
		<h2>Si gustas puedes seguirnos en nuestras redes sociales </h2>
		<div class="social-icons">
			<a href="https://x.com/ShortHistoriess"><i class="fa-brands fa-x-twitter"></i></a>
			<a href="https://www.instagram.com/short_historiess/"><i class="fa-brands fa-instagram"></i></a>
		</div>
	</section>
</div>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600&display=swap');

	.html {
		font-size: 100%;
	}

	.body {
		width: 100%;
		height: 100vh;
		overflow-x: hidden;
		background-color: black;
		color: white;
	}

	.header {
		margin-top: 20px;
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		padding: 1rem 9%;
		background-color: transparent;
		filter: drop-shadow(10px);
		display: flex;
		justify-content: space-between;
		align-items: center;
		z-index: 100;
	}

	#somos-proya .container {
		text-align: center;
		padding: 200px 12px;
	}

	
	#caracteristicas .container {
		text-align: center;
		padding: 250px 12px;
	}

	#caracteristicas li {
		margin: 16px 0px;
		font-weight: bold;
	}

	@media (min-width: 850px) {
		#somos-proya .container {
			display: flex;
			justify-content: space-evenly;
		}

		#somos-proya .texto {
			font-size: 20px;
			width: 50%;
			max-width: 600px;
			text-align: initial;
			padding-left: 30px;
			display: flex;
			flex-direction: column;
			justify-content: center;
		}


		#somos-proya h2 {
			margin-top: 0px;
			font-size: 30px;
		}

		#somos-proya .img-container {
			background-image: url('e.jpg');
			background-size: cover;
			background-position: center center;
			height: 500px;
			width: 400px;
		}

		
	#nuestros-programas {
		background-color: rgb(30, 30, 30);
		color: white;
		text-align: center;
	}

	#nuestros-programas .container {
		padding: 150px 12px;
		
		background-repeat: no-repeat;
		background-size: 1520px;
		background-repeat: no-repeat;
		background-size: cover;
		background-position: center center;
	}

	#nuestros-programas h2 {
		margin-top: 0;
		font-size: 3.2em;
	}

	#nuestros-programas p {
		display: none;
		font-size: 5px;
	}

	#nuestros-programas .carta {
		flex: 1 1 30%;
		background-position: center center;
		background-size: cover;
		padding: 50px 0px;
		margin: 30px;
		border-radius: 15px;
		text-align: center;
	}

	.carta:first-child {
		background-image: linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('');
	}

	.carta:nth-child(2) {
		background-image: linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
			url('media/full-stack.jpg');
	}

	.carta:nth-child(3) {
		background-image: linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
			url('media/python.jpg');
	}

	#final {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		text-align: center;
		background-color: rgb(30, 30, 30);
		background-image: linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('a.jpg');
		background-repeat: no-repeat;
		background-size: 1500px;
		color: white;
		height: 90vh;
	}

	#final h2 {
		font-size: 45px;
	}

	#final button {
		font-size: 20px;
	}

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

	nav a {
		font-size: 20px;
		color: white;
		margin-left: 4rem;
		font-weight: 500;
		transition: 0.3s ease;
		border-bottom: 3px solid transparent;
	}

	nav a:hover,
	nav a.active {
		color: #b74b4b;
		border-bottom: 3px solid #b74b4b;
	}

	@media (max-width: 995px) {
		nav {
			position: absolute;
			display: none;
			top: 0;
			right: 5%;
			width: 40%;
			border-left: 3px solid #b74b4b;
			border-bottom: 3px solid #b74b4b;
			border-bottom-left-radius: 2rem;
			padding: 1rem solid;
			background-color: #161616;
			border-top: 0.1rem solid rgba(0, 0, 0, 0.1);
		}

		nav.active {
			display: block;
		}

		nav a {
			display: block;
			font-size: 15px;
			margin: 3rem 0;
		}

		nav a:hover,
		nav a.active {
			padding: 1rem;
			border-radius: 0.5rem;
			border-bottom: 0.5rem solid #b74b4b;
		}

		
		#nuestros-programas .programas {
			display: flex;
			justify-content: center;
		}

		#nuestros-programas p {
			color:white;
			font-size: 20px;
			display: block;
			margin-bottom: 30px;
		}

		#nuestros-programas h2 {
			font-size: 4em;
		}

		#nuestros-programas h3 {
			margin-top: 0;
		}

		#nuestros-programas .carta {
			padding: 50px;
			background-size: 100% 150px;
			background-repeat: no-repeat;
			background-position-y: 0;

			box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.5);
		}

		.carta:first-child {
			background-image: linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
				url('media/front-end-cropped.jpg');
		}

		.carta:nth-child(2) {
			background-image: linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
				url('media/full-stack-cropped.jpg');
		}

		.carta:nth-child(3) {
			background-image: linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
				url('media/python-cropped.jpg');
		}
	}

	section {
		min-height: 100vh;
		padding: 5rem 9% 5rem;
	}

	.home {
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 8rem;
		background-color: black;
	}


	span {
		color: #b74b4b;
	}

	.home-content h3 {
		font-size: 75px;
		margin-bottom: 1rem;
		font-weight: 700;
	}

	.home-content p {
		font-size: 20px;
	}

	.home-img {
		border-radius: 50%;
	}

	.home-img img {
		position: relative;
		width: 32vw;
		border-radius: 50%;
		box-shadow: 0 0 25px solid #b74b4b;
		cursor: pointer;
		transition: 0.2s linear;
	}

	.home-img img:hover {
		font-size: 1.8rem;
		font-weight: 500;
	}

	.social-icons a {
		display: inline-flex;
		justify-content: center;
		align-items: center;
		width: 6rem;
		height: 6rem;
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
		display: inline-block;
		padding: 1rem 2.8rem;
		background-color: black;
		border-radius: 4rem;
		font-size: 1.6rem;
		color: #b74b4b;
		letter-spacing: 0.3rem;
		font-weight: 600;
		border: 2px solid #b74b4b;
		transition: 0.3s ease;
		cursor: pointer;
	}

	.btn:hover {
		transform: scale3d(1.03);
		background-color: #b74b4b;
		color: black;
		box-shadow: 0 0 25px #b74b4b;
	}

	.typing-text {
		font-size: 34px;
		font-weight: 600;
		min-width: 280px;
	}

	.typing-text span {
		position: relative;
	}

	.typing-text span::before {
		content: 'Short Histories';
		color: #b74b4b;
		animation: words 20s infinite;
	}


	@keyframes cursor {
		to {
			border-left: 3px solid #b74b4b;
		}
	}

	

	@media (max-width: 1000px) {
		.home {
			gap: 4rem;
		}
	}

	@media (max-width: 995px) {
		.home {
			flex-direction: column;
			margin: 5rem 4rem;
		}

		.home .home-content h3 {
			font-size: 2.5rem;
		}

		.home-content h1 {
			font-size: 5rem;
		}

		.home-img img {
			width: 70vw;
			margin-top: 4rem;
		}
	}

	.all {
		margin: 0;
		padding: 0;
		text-decoration: none;
		border: none;
		outline: none;
		font-family: 'Poppins', sans-serif;
		font-size: 10px;
		width: 100%;
		height: 100vh;
		overflow-x: hidden;
		background-color: black;
		color: white;
	}
</style>
