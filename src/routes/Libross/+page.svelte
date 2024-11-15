
<script>
    import Logo from './Logo_sin_fondo.png';

</script>

<svelte:head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
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
  

<div class="all">
    <div class="header">
        <p  class="logo"> <img src={Logo} height="60px" width="60" alt="" /> </p>
        <div class="search-container">
    
            <button class="btnb">Buscar</button>
        </div>
        <nav class="active">
            <a href="/">Inicio</a>
            <a href="#final">Redes sociales</a>
            <a href=""> aa</a>
        </nav>
    </div>

    <section>
        <div class="container">
            <div class="card">
                <div class="image-container">
                    <img src="https://www.booktopia.com.au/covers/big/9781413517118/0000/meter-el-diablo-en-el-infierno.jpg"  width="100%" height="100%" alt="">
                </div>
                <div class="card-content">
                    <h1 class="card-title"><span>Meter el diablo en el infierno </span></h1>
                    <p class="card-description">
                        Giovanni Boccaccio
                    </p>
                    <a href="/meter_el_diablo_en_el_infierno.pdf" target="_blank">
                        <button class="btn">Leer más</button>
                    </a>
                </div>
            </div>
			
            <div class="card">
                <div class="image-container">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRF9TPWlnMe24ZMpUSzhkDN6_vmlngGrILMIQ&s.jpg"width="100%" height="100%" alt="">
                </div>
                <div class="card-content">
                    <h1 class="card-title"><span>El cocinero chichibio</span></h1>
                    <p class="card-description">
                        Giovanni Boccaccio
                    </p>
                    <a href="/El-cocinero-Chichibio.pdf" target="_blank">
                        <button class="btn">Leer más</button>
                    </a>
                </div>
            </div>
        
            
			<div class="card">
                <div class="image-container">
                    <img src="https://www.planetadelibros.com.co/usuaris/libros/fotos/55/m_libros/54157_historias-de-la-historia_9788408101864.jpg"width="100%" height="100%" alt="">
                </div>
                <div class="card-content">
                    <h1 class="card-title"><span>Historias de las Historias </span></h1>
                    <p class="card-description">
                        Carlos fisas 
                    </p>
                    <a href="/Historias-de-a-Historia.pdf" target="_blank">
                        <button class="btn">Leer más</button>
                    </a>
                </div>
            </div>
			<div class="card">
                <div class="image-container">
                    <img src="https://images.cdn2.buscalibre.com/fit-in/360x360/b9/4d/b94d245d5ee98477b44f09cfd7e58c13.jpg"width="100%" height="100%" alt="">
                </div>
                <div class="card-content">
                    <h1 class="card-title"><span>Las mil y una noche </span></h1>
                    <p class="card-description">
                        Carlos fisas 
                    </p>
                    <a href="/Las-mil-y-una-noches.pdf" target="_blank">
                        <button class="btn">Leer más</button>
                    </a>
					
    
                </div>
            </div>
			<div class="card">
                <div class="image-container">
                    <img src="https://http2.mlstatic.com/D_NQ_NP_972412-MLA50115243457_052022-O.webp.jpg"width="100%" height="100%" alt="">
                </div>
                <div class="card-content">
                    <h1 class="card-title"><span>Historias de noche </span></h1>
                    <p class="card-description">
                        J.A WHITE 
                    </p>
                    <a href="/47796_Historia_de_noche.pdf" target="_blank">
                        <button class="btn">Leer más</button>
                    </a>
                </div>
            </div>
			<div class="card">
                <div class="image-container">
                    <img src="https://images.cdn1.buscalibre.com/fit-in/360x360/fe/5d/fe5df6fbd58f6af99788645240e381d4.jpg"width="100%" height="100%" alt="">
                </div>
                <div class="card-content">
                    <h1 class="card-title"><span>La luz del faro </span></h1>
                    <p class="card-description">
                        Vicente Muñoz Puelles
                    </p>
                    <a href="/Luz-de-faro.pdf" target="_blank">
                        <button class="btn">Leer más</button>
                    </a>
                </div>
            </div>
            <div class="card">
                <div class="image-container">
                    <img src="https://covers.libro.fm/9798882264764_1120.jpg"width="100%" height="100%" alt="">
                    
                </div>
                
                <div class="card-content">
                    <h1 class="card-title"><span>El retrato oval</span></h1>
                    <p class="card-description">Edgar Allan Poe</p>
                    <a href="/El-RETRATO-OVAL.pdf" target="_blank">
                        <button class="btn">Leer más</button>
                    </a>
                </div>
            </div>

			<div class="card">
                <div class="image-container">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-Uh6-6BjzBTxXxSO-zaUVeEpit6Hk6kiyOw&s.jpg"width="100%" height="100%" alt="">
                </div>
                <div class="card-content">
                    <h1 class="card-title"><span>La niña perdida espera a Peter Pan</span></h1>
                    <p class="card-description">
                        Anonimo
                    </p>
                    <a href="/17-la-nina-perdida-espera-a-peter.pan.pdf" target="_blank">
                        <button class="btn">Leer más</button>
                    </a>
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

    .search-container {
        display: flex;
        justify-content: center;
        
    }
    .search-box {
        width: 300px;
        padding: 10px;
        border: 1px solid #ccc;
        border-radius: 4rem;
    }

    .btnb {
		display: inline-block;
		padding: 0.7rem 2rem;
		background-color: black;
		border-radius: 4rem;
		font-size: 15px;
		color: #b74b4b;
		font-weight: 600;
		border: 2px solid #b74b4b;
		transition: 0.3s ease;
		cursor: pointer;
	}

	.btnb:hover {
		transform: scale3d(1.03);
		background-color: #b74b4b;
		color: black;
		box-shadow: 0 0 25px #b74b4b;
	}

    

	span {
		color: #b74b4b;
	}

    .container {
        display: grid;
        grid-template-columns: repeat(3, 1fr); /* Dos columnas */
        gap: 20px; /* Espacio entre tarjetas */
        justify-content: center;
        margin-top: 100px;
        padding: 20px;
    }

    .card {
        background-color: #000000;
        color: #ffffff;
        padding: 20px;
        border-radius: 5px;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
        display: flex;
        align-items: center;
        gap: 20px;
    }

    .image-container img{
        width: 150px;
        height: 200px;
        background-color: #ddd;
        border: 2px solid #ffffff;
        border-radius: 5px;
        border-color: #b74b4b;
        border-width: 2%;
    }

    .card-content {
        display: flex;
        flex-direction: column;
    }

    .card-title {
        font-size: 24px;
        font-weight: bold;
        margin-bottom: 10px;
    }

    .card-description {
        font-size: 16px;
        line-height: 1.5;
        margin-bottom: 20px;
    }

    
	.btn {
		display: inline-block;
		padding: 1rem 2.8rem;
		background-color: black;
		border-radius: 4rem;
		font-size: 1rem;
		color: #b74b4b;
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

    .header {
		margin-top: 20px;
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		padding: 1rem 4%;
		background-color: rgba(0, 0, 0, 0);
		filter: drop-shadow(10px);
		display: flex;
		justify-content: space-between;
		align-items: center;
		z-index: 100;
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
			right: 0;
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

    }
	
    #final {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		text-align: center;
        padding: 50px;
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

    
	.social-icons a {
		display: inline-flex;
		justify-content: center;
		align-items: center;
		width: 4rem;
		height: 4rem;
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
	
</style>