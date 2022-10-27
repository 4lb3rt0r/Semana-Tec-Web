<template>
    <div class="login">
        <h1 class="h1"> Haz Sign in</h1> 
        <input class="email" placeholder="Email"/> 
        <input class="password" placeholder="Password"/> 
        <button class="boton"> Log in </button>
    </div>
</template>

<script>
    export default {
        name: "login"
    }
</script>
  
<style scoped>
    .login {
        display: flex;
        flex-direction: column;
        padding: 200px;
        justify-content: center;
        align-items: center;
    }
    h1 {
        font-weight: 500px;
    }
    .email {
        width: 500px;
        color: black;
        padding: 10px;
        background-color: #eeeeee;
        margin-top: 30px;
        margin-bottom: 30px;
        border-radius: 5px;
    }
    .password {
        width: 500px;
        color: black;
        padding: 10px;
        background-color: #eeeeee;
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
    }
</style>