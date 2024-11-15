<script lang="ts">
	import Logo from './Logo_sin_fondo.png';

	let correo = '';
	let password = '';
	let showPasswordModal = false;

	function openPasswordModal() {
		showPasswordModal = true;
	}

	function closePasswordModal() {
		showPasswordModal = false;
	}

	async function handleSubmit(event) {
		event.preventDefault();

		const formData = new FormData(event.target);

		// Asegúrate de que ambos campos estén en el FormData
		formData.append("correo", correo);
		formData.append("password", password);

		const response = await fetch('/Verificacion?/recuperar', {
			method: 'POST',
			body: formData
		});

		const result = await response.json();

		if (result.success) {
			alert(result.message);
		} else {
			alert('¡Contraseña actualizada! Ya puedes iniciar sesión de nuevo.');
			window.location.href = '/inicioSesion';
		}
	}
</script>

<svelte:head>
	<link
		href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap"
		rel="stylesheet"
	/>
	<title>Inicio de Sesión</title>
</svelte:head>

<div class="body">
	<div class="header">
		<p class="logo"><img src={Logo} height="60px" width="60px" alt="Logo" /></p>
	</div>

	<div class="container">
		<div class="forms-container">
			<div class="signin-signup">
				<!-- Formulario para recuperar cuenta -->
				<form method="POST" class="sign-in-form" on:submit|preventDefault={openPasswordModal}>
					<h2 class="title">Recuperar cuenta</h2>
					<div class="input-field">
						<i class="fas fa-envelope"></i>
						<input name="correo" type="email" placeholder="Correo" bind:value={correo} required />
					</div>
					<button type="submit" class="btn">Recuperar contraseña</button>
				</form>

				{#if showPasswordModal}
					<!-- Modal para cambiar la contraseña -->
					<div class="modal-background" on:click={closePasswordModal}>
						<div class="modal-content" on:click|stopPropagation>
							<form method="POST" on:submit|preventDefault={handleSubmit}>
								<h3>Cambiar Contraseña</h3>
								<p>Por favor, ingresa tu nueva contraseña.</p>
								
								<!-- Campo oculto para enviar el correo previamente ingresado -->
								<input type="hidden" name="correo" value={correo} />

								<div class="input-field">
									<i class="fas fa-lock"></i>
									<input
										name="password"
										type="password"
										placeholder="Nueva Contraseña"
										bind:value={password}
										required
									/>
								</div>
								<button type="submit">Guardar</button>
							</form>
						</div>
					</div>
				{/if}
			</div>
		</div>
	</div>
</div>

<style>
	/* Estilos generales */
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
		font-family: 'Poppins', sans-serif;
	}

	.body {
		font-size: 62.5%;
		width: 100%;
		height: 100vh;
		overflow-x: hidden;
		background-color: black;
		color: white;
	}

	.header {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		padding: 1rem 4%;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.logo img {
		transition: transform 0.5s;
	}

	.logo img:hover {
		transform: scale(1.1);
	}

	.container {
		position: relative;
		width: 100%;
		background-color: #fff;
		min-height: 100vh;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.forms-container {
		position: relative;
		width: 100%;
		max-width: 400px;
		padding: 2rem;
		background-color: #f3f4f6;
		border-radius: 10px;
		box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
	}

	.title {
		font-size: 2.2rem;
		color: #b74b4b;
		margin-bottom: 1.5rem;
	}

	.input-field {
		width: 100%;
		background-color: #f0f0f0;
		margin: 10px 0;
		height: 55px;
		border-radius: 8px;
		display: flex;
		align-items: center;
		padding: 0 1rem;
		border: 2px solid #b74b4b;
	}

	.input-field i {
		color: #b74b4b;
		margin-right: 10px;
	}

	.input-field input {
		background: none;
		outline: none;
		border: none;
		font-weight: 600;
		font-size: 1rem;
		color: #333;
		width: 100%;
	}

	.btn {
		width: 100%;
		background-color: #b74b4b;
		border: none;
		outline: none;
		height: 49px;
		border-radius: 8px;
		color: #ffffff;
		font-weight: 600;
		font-size: 1rem;
		cursor: pointer;
		transition: background-color 0.3s ease;
	}

	.btn:hover {
		background-color: #000000;
	}

	.modal-background {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: rgba(255, 255, 255, 0.5);
		display: flex;
		justify-content: center;
		align-items: center;
		z-index: 1000;
	}

	.modal-content {
		background-color: white;
		padding: 2rem;
		width: 80%;
		max-width: 500px;
		border-radius: 8px;
		text-align: center;
		box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
	}

	.modal-content h3 {
		color: #b74b4b;
		margin-bottom: 1rem;
	}

	.modal-content button {
		background-color: #b74b4b;
		color: #ffffff;
		border: none;
		padding: 0.8rem 1.2rem;
		border-radius: 8px;
		cursor: pointer;
		margin-top: 1rem;
	}

	.modal-content button:hover {
		background-color: #000000;
	}
</style>
