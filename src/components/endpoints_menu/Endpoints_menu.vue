<template>
    <div class="card">
        <div class="card-body">
            <ul class="list-group list-group-flush">
                <li class="list-group-item list-group-item-primary border-top-0 border-end-0 border-start-0 border-3"><router-link class="nav-link" to="/endpoints_introduction">Introduction sur les endpoints</router-link></li>
                <li class="list-group-item list-group-item-primary border-top-0 border-end-0 border-start-0 border-3"><router-link class="nav-link" to="/endpoints_Categorie">Les categories d'endpoints</router-link></li>
                <li class="list-group-item list-group-item-primary border-top-0 border-end-0 border-start-0 border-3"><router-link class="nav-link" to="/Sous_Categorie">Les sous categories d'endpoints</router-link></li>
                <li class="list-group-item list-group-item-primary border-top-0 border-end-0 border-start-0 border-3"><router-link class="nav-link" to="/Header_vue">Les paramètres d'un endpoint</router-link></li>
                <li class="list-group-item list-group-item-primary border-top-0 border-end-0 border-start-0 border-3"><router-link class="nav-link" to="/Body_vue">Les corps d'un endpoint</router-link></li>
                <li class="list-group-item list-group-item-primary border-top-0 border-end-0 border-start-0 border-3"><router-link class="nav-link" to="/Error_codes">Les erreurs d'un endpoint</router-link></li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Endpoints_menu'
}
</script>

<style scoped>
.card {
    border: 1px solid #ddd;
    border-radius: 15px;
    height:350px;
    background-color: #022D7E;
    box-shadow: 0 0.125rem 0.25rem rgba(0,0,0,.075);
}
.card-body {
    padding: 1.25rem;
}
.list-group-item-primary {
    background-color: #022D7E;
    color: #fff;
}
</style>
