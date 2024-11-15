<script>

    let email = "";
    let password = "";

    async function handleSubmit(event) {
        event.preventDefault();

        const formData = new FormData();
        formData.append('email', email);
        formData.append('new_password', password);

        const response = await fetch('/Verificacion?/recuperar', {
            method: 'POST',
            body: formData
        });

        const result = await response.json();

        if (result.success) {
            alert(result.message);
        } else {
            alert('¡Contraseña actualizada! Ya puedes iniciar sesión de nuevo.');
            window.location.href = '/IniciarSesion';
        }
    }
</script>

<style>
    .form-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        background: #f3f4f6;
        border-radius: 10px;
        padding: 2rem;
        box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
        max-width: 400px;
        margin: 2rem auto;
    }

    .form-container h2 {
        color: #4a4e69;
        margin-bottom: 1.5rem;
    }

    .input-group {
        width: 100%;
        margin-bottom: 1.2rem;
    }

    .input-group label {
        display: block;
        margin-bottom: 0.5rem;
        font-weight: bold;
        color: #4a4e69;
    }

    .input-group input {
        width: 100%;
        padding: 0.8rem;
        border-radius: 8px;
        border: 1px solid #d1d5db;
        font-size: 1rem;
        color: #333;
        transition: border-color 0.3s ease;
    }

    .input-group input:focus {
        outline: none;
        border-color: #4a4e69;
    }

    .submit-button {
        width: 100%;
        padding: 0.8rem;
        background-color: #4a4e69;
        color: #ffffff;
        border: none;
        border-radius: 8px;
        font-size: 1rem;
        font-weight: bold;
        cursor: pointer;
        transition: background-color 0.3s ease;
    }

    .submit-button:hover {
        background-color: #303540;
    }
</style>

<div class="form-container">
    <h2>Recuperar cuenta</h2>
    <form on:submit={handleSubmit}>
        <div class="input-group">
            <label for="email">Correo electrónico</label>
            <input
                name="correo"
                type="email"
                id="email"
                bind:value={email}
                placeholder="Ingresa tu correo"
                required
            />
        </div>

        <div class="input-group">
            <label for="password">Nueva contraseña</label>
            <input
                name="password"
                type="password"
                id="password"
                bind:value={password}
                placeholder="Ingresa tu nueva contraseña"
                required
            />
        </div>

        <button type="submit" class="submit-button">Guardar</button>
    </form>
</div>
