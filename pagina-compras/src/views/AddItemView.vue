<template>
    <div>
        <div class = "container">
            <div class = "row">
                <div class="col-md-6 offset-md 3">
                    <h2>Añadir un producto</h2>
                    <form @submit.prevent="createItem">
                        <div class="form-group">
                        <input 
                        type="text" 
                        class="form-control" 
                        placeholder="Nombre"
                        v-model="nombre">
                    </div>
                    <div class="form-group">
                        <input 
                        type="number" 
                        step="any"
                        class="form-control"
                        placeholder="Precio"
                        v-model="precio">
                    </div>
                    <div class="form-group">
                        <input 
                        type="url" 
                        class="form-control"
                        placeholder="Url de la imagen"
                        v-model="urlImg">
                    </div>
                    <button class="btn btn-primary"> Agregar Objeto </button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import productsCollection from '../firebase';
import { addDoc } from '@firebase/firestore';
export default {
    data(){
        return {
            nombre:null,
            precio:null,
            uid:null,
            urlImg:null
        }
    },
    methods:{
        async createItem(){
            console.log("Creating Document");
            const addedDoc = await addDoc(productsCollection,this.$data)
            alert('El producto se ha agregado correctamente');
            console.log(addDoc);
            this.$router.push("/admin");
        }
    }
}

</script>

<style>

</style>