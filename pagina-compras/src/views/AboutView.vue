<template>
  <div class="carrito">
      <h1 class="h1"> Carrito</h1>
      <Block class="block" placeholder="Email"> 
        <button class="boton"> Comprar </button>
      </Block>
  </div>
</template>

<script>
  export default {
      name: "login"
  }
</script>

<style scoped>
  .carrito {
      display: flex;
      flex-direction: column;
      padding: 50px;
      justify-content: center;
      align-items: center;
  }
  h1 {
      font-weight: 500px;
  }
  .block {
      display: flex;
      flex-direction: column;
      width: 1400px;
      color: black;
      padding: 100px;
      background-color: #eeeeee;
      margin-top: 30px;
      border-radius: 5px;
  }
  .boton {
      width: 250px;
      color: white;
      background-color: #2d69ca;
      border-radius: 5px;
      font-size: 25px;
      border: none;
      font-family: sans-serif;
  }
</style>
