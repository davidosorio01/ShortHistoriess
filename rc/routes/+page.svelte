<svelte:head>
	<meta charset="UTF-8">
    <title>Short Histories!</title>

</svelte:head>


<script>
	import { goto } from '$app/navigation';
	import Logo from './Logo sin fondo.png.png';

	let contenedor = $state(false);
	let muestra = $state(false);
	let muestra1 = $state(false);
	let muestra2 = $state(false);

</script>

<header>
	<div class="container">
		<p class="logo"><img src={Logo} height="50px" width="350" alt="" /></p>

		<nav>
			<a href="#somos-proya">¿Que hacemos?</a>
			<a href="#nuestros-programas">Nuestros contenidos</a>
			<a href="#caracteristicas">Informacion</a>
			<a href="#final">Iniciar Sesion</a>
		</nav>
	</div>
</header>

<section id="hero">
	<h1>¿Quieres empezar a leer <br />nuestras historias cortas?</h1>
	<button onclick={()=>goto('/InicioSesion')}>Empieza aquí </button>
</section>

<section id="somos-proya">
	<div class="container">
		<div class="img-container"></div>
		<div class="texto">
			<h2>Somos <span class="color-acento">Short Histories</span></h2>
			<p>
				Nuestro objetivo al crear esta pagina es que personas puedan escribir historias cortas y
				leerlas. Esto con el fin de mejorar la comprension lectora de personas.
			</p>
		</div>
	</div>
</section>

<section id="nuestros-programas">
	<div class="container">
		<h2>Nuestros contenidos</h2>
		<div class="programas">
			<div class="carta">
				<h3>Generos variados</h3>
				<br />
				<p>
					Tendremos amplia variedad de generos ya que personas subiran sus historias y pondran mas
					generos.
				</p>
				<button onclick={() => (muestra = !muestra)}> + Info </button>
				{#if muestra}
					<div>
						<p id="miParrafo" style="float: left;">
							Generos: <br />
							-Fantansia.
							<br />
							-Terror.
							<br />
							-Aventura
						</p>
					</div>
				{/if}
			</div>
			<div class="carta">
				<h3>Actividades dinamimcas</h3>
				<p>
					Al finalizar de leer las historias habran unas actividades con el fin de mejorar la
					comprension lectora.
				</p>
				<button onclick={() => (muestra1 = !muestra1)} id="miBoto"> + Info </button>
				{#if muestra1}
					<div>
						<p id="miParrafo" style="float: left;">Lorem</p>
					</div>
				{/if}
			</div>
			<div class="carta">
				<h3>Escribe y lee contenido</h3>
				<p>
					Las personas tendran acceso a subir historias y/o leerlas, podran demostrar su creatividad
					y tambien ganaran seguidores.
				</p>
				<button onclick={() => (muestra2 = !muestra2)}> + Info </button>
				{#if muestra2}
					<div>
						<p id="miParrafo" style="float: left;">
							Puedes tener acceso a algunas historias entrando a:
							<br />
							<button onclick={()=>goto("/InicioSesion")}>Entra aquí</button>
						</p>
					</div>
				{/if}
			</div>
		</div>
	</div>
</section>

<br />
<br />
<br />
<br />

<section id="final">
	<h2>Si quieres empezar a leer, empieza <br /> por registrarte aquí</h2>
	<button onclick={()=> goto("/InicioDeSesion")}>Regristrate</button>
</section>

<section id="caracteristicas">
	<div class="container">
		<ul>
			<li>✔️ Correos: njdsanf@gmail.com</li>
			<li>✔️ WhatsApp: +57 301 2813321</li>
		</ul>
	</div>
</section>

<footer>
	<div class="container">
		<p>&copy; Short Histories 2024</p>
	</div>
</footer>


<style>
	* {
		box-sizing: border-box;
	}

	h1 {
		font-size: 3.5em;
	}
	h2 {
		font-size: 2.7em;
	}
	h3 {
		font-size: 2em;
	}
	p {
		font-size: 1.25em;
	}
	ul {
		list-style: none;
	}
	li {
		font-size: 1.25em;
	}

	button {
		font-size: 1.25em;
		font-weight: bold;
		padding: 10px 30px;
		border-radius: 5px;
		border: 2px solid rgba(0, 0, 0, 0.3);
		box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.5);
		color: white;
		background-color: #04f1d8;
	}

	button:hover {
		background-color: #04f1d8;
	}

	.container {
		max-width: 1400px;
		margin: auto;
	}

	.color-acento {
		color: #04f1d8;
	}

	header {
		background-color: rgb(255, 255, 255);
	}

	header .logo {
		margin: 0;
		padding: 25px 30px;
		font-weight: bold;
		color: #04f1d8;
		font-size: 1.6em;
	}

	header .container {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	header nav {
		display: flex;
		flex-direction: column;
		text-align: center;
		padding-bottom: 25px;
	}

	header a {
		padding: 8px 18px;
		text-decoration: double;
		font-weight: bold;
		color: rgb(0, 0, 0);
		font-size: 20px;
	}

	header a:hover {
		color: #04f1d8;
	}

	#hero {
		display: flex;
		align-items: center;
		justify-content: center;
		text-align: center;
		flex-direction: column;
		height: 100vh;
		background-image: linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('a.jpg');
		background-repeat: no-repeat;
		background-size: cover;
		background-position: center center;
	}

	#hero h1 {
		color: white;
	}

	#hero button {
		font-size: 1.75em;
	}

	#somos-proya .container {
		text-align: center;
		padding: 200px 12px;
	}

	#nuestros-programas {
		background-color: rgb(30, 30, 30);
		color: white;
		text-align: center;
	}

	#nuestros-programas .container {
		padding: 150px 12px;
		background-image: linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('e.jpg');
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
	}

	#nuestros-programas .carta {
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

	#caracteristicas .container {
		text-align: center;
		padding: 250px 12px;
	}

	#caracteristicas li {
		margin: 16px 0px;
		font-weight: bold;
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
		font-size: 9vw;
	}

	#final button {
		font-size: 5vw;
	}

	footer {
		background-color: rgb(230, 230, 230);
	}

	footer p {
		margin: 0;
		padding: 12px;
		color: rgb(100, 100, 100);
	}

	footer .container {
		height: 1px;
		display: flex;
		justify-content: center;
		align-items: flex-end;
	}

	@media (min-width: 850px) {
		header {
			position: fixed;
			width: 100%;
		}

		header .container {
			flex-direction: row;
			justify-content: space-between;
		}

		header nav {
			flex-direction: row;
			padding-bottom: 0;
			padding-right: 20px;
		}

		#hero h1 {
			font-size: 5em;
		}

		#somos-proya .container {
			display: flex;
			justify-content: space-evenly;
		}

		#somos-proya .texto {
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
		}

		#somos-proya .img-container {
			background-image: url('e.jpg');
			background-size: cover;
			background-position: center center;
			height: 500px;
			width: 400px;
		}

		#nuestros-programas .programas {
			display: flex;
			justify-content: center;
		}

		#nuestros-programas p {
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

		#caracteristicas {
			background-repeat: no-repeat;
			background-size: 500px 400px;
			background-position: calc(100px - 20px) 120px;
		}

		#caracteristicas .container {
			text-align: initial;
		}

		#caracteristicas ul {
			margin-left: 100px;
		}

		#final h2 {
			font-size: 5em;
		}

		#final button {
			font-size: 2em;
		}

		footer .container {
			justify-content: flex-end;
		}
	}

	@media (min-width: 1200px) {
		#caracteristicas {
			background-position-x: calc(100vw - 800px);
		}
	}
</style>
