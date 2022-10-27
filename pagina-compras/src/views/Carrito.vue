<template>
  <h1 class="h1"> Carrito</h1>
  <div class="menu">
    <div class="carrito">
      <Block class="block" placeholder="Email">
        <div class="producto">
          <img src="../assets/img/lysol.webp" class="foto">
          <p> Item 1 </p>
          <p> 9.99 </p>
        </div>
      </Block>
    </div>
  <div>
    <button class="boton"> Comprar </button>
  </div>
  </div>
</template>

<script>
  export default {
      name: "login"
  }
</script>

<style scoped>
  .menu {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }
  .carrito {
      display: flex;
      flex-direction: column;
      padding: 10px;
      justify-content: center;
      align-items: center;
  }
  h1 {
      font-weight: 500px;
      text-align: center;
      margin-top: 20px;
  }
  .block {
      display: flex;
      flex-direction: column;
      width: 800px;
      color: black;
      padding: 50px;
      background-color: #eeeeee;
      margin-top: 30px;
      border-radius: 10px;
  }
  .producto {
    display: flex;
    flex-direction: row;
    background-color: white;
    border-radius: 10px;
  }
  .boton {
      width: 250px;
      color: white;
      background-color: #2d69ca;
      border-radius: 5px;
      font-size: 25px;
      border: none;
      font-family: sans-serif;
  }.foto {
      width: 150px;
      height: 150px;
      color: white;
      background-color: #2d69ca;
      border-radius: 5px;
      font-size: 25px;
      border: none;
      font-family: sans-serif;
  }
</style>
