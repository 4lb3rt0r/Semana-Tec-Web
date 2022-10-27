<template>
    <nav class="navbar navbar-expand-lg">
        <div class="container-fluid m-1">
            <RouterLink to="/" class="navbar-brand">
                <img class="logo" src="@/assets/img/logo.svg" alt="Walmart">
            </RouterLink>
            <div class="row">
                <div class="col">
                    <RouterLink to="/" class="nav-link active" aria-current="page" >
                        <span class="material-icons">
                            home
                        </span>
                    </RouterLink>
                </div>
                <div class="col">
                    <RouterLink to="/shopping-cart" class="nav-link">
                        <span class="material-icons">
                            shopping_cart
                        </span>
                    </RouterLink>
                </div>
                <div class="col">
                    <RouterLink to="/login" class="nav-link">
                        <span class="material-icons">
                            person
                        </span>
                    </RouterLink>
                </div>
            </div>
        </div>
    </nav>
</template>

<script>
    export default {
        name: "NavComp"
    }
</script>

<style scoped>
    .material-icons {
        color: white;
        background-color: rgba(218, 218, 218, 0.158);
        padding: 0.3em;
        border-radius: 50%;
        margin: 0.1em;
    }
</style>