<template>
    <div class="card">
        <div class="card-body">
            <ul class="list-group list-group-flush">
                <li class="list-group-item list-group-item-primary border-top-0 border-end-0 border-start-0 border-3"><router-link class="nav-link" to="/metaConfiguration">Gestion des meta descriptions</router-link></li>
                <li class="list-group-item list-group-item-primary border-top-0 border-end-0 border-start-0 border-3"><router-link class="nav-link" to="/metaMotsCles">Gestion des mots clés</router-link></li>
                <li class="list-group-item list-group-item-primary border-top-0 border-end-0 border-start-0 border-3"><router-link class="nav-link" to="/footerConfiguration">Gestion des footers</router-link></li>
                <!-- <li class="list-group-item list-group-item-primary border-top-0 border-end-0 border-start-0 border-3"><router-link class="nav-link" to="/langueConfiguration">Gestion des langues</router-link></li> -->
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ConfigurationMenu'
}
</script>

<style scoped>
.card {
    border: 1px solid #ddd;
    border-radius: 15px;
    height:300px;
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
