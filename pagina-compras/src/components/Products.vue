<template>
        <div class="container">
            <div class="row mx-1 justify-content-center">
                <div class="col px-1 mb-3" v-for="product in products" :key="product.id">
                    <div class="card" style="width: 14rem;">
                        <img src={{product.urlImg}} class="card-img-top" alt="...">
                        <div class="card-body">
                        <h5 class="card-title">{{product.nombre}}</h5>
                        <p class="card-text">$ {{product.precio}}</p>
                        <a href="#" class="btn btn-primary">Añadir al carrito</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
</template>

<script>
    import productsCollection from '../firebase';
    import { getDocs } from 'firebase/firestore';

    export default {
        name: "Products",
        components: {},
        data() {
            return {
                products: [],
            };
        },
        methods: {
            async fetchProducts() {
                let productsSnapShot  = await getDocs(productsCollection);
                let products = [];
                productsSnapShot.forEach(product =>{
                    products.push(product.data());
                });
                this.products = products;
                console.log(products);
            },
        },
        created() {
            this.fetchProducts();
        },
    };
</script>

<style>
</style>