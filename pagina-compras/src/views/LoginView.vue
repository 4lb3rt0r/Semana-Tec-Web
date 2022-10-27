<template>
    <div class="container p-5 login align-items-center">
        <h1 class="h1 p-4 text-center">Iniciar Sesión</h1>
        <div class="form">
            <div class="form-floating mb-3">
                <input type="email" class="form-control" placeholder="Escriba su correo electrónico" required/>
                <label class="form-label text-form">Correo Electrónico</label>
            </div>
            <div class="form-floating mb-3">
                <input type="password" class="form-control" placeholder="Escriba su contraseña" required/>
                <label class="form-label text-form">Contraseña</label>
            </div>
            <button type="submit" class="btn btn-primary btn-lg w-100 mb-2 text-form">Iniciar Sesión</button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "login"
    }
</script>
  
<style scoped>

    h1 {
        font-weight: 500px;
    }
    .login {
        margin-top: 85px;
    }
    /* .password {
        width: 500px;
        padding: 10px;
        margin-bottom: 30px;
        border-radius: 5px;
    }
    .boton {
        width: 250px;
        color: white;
        background-color: #2d69ca;
        margin-bottom: 30px;
        border-radius: 5px;
        font-size: 25px;
        border: none;
        padding: 5px;
        font-family: sans-serif;
    } */
</style>