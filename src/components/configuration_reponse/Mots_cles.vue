<template>
    <div class="card">
        <div class="card-header rounded-bottom rounded-4 d-flex justify-content-between">
            <h3 class="py-2">Mots clés de la page actuelle</h3>
            <div class="a">
                <button class="btn m-2"><i class="bi bi-pen-fill"></i></button>
                <button class="btn"><i class="bi bi-file-earmark-x-fill"></i></button>
            </div>
        </div>
        <div class="card-body">
            <blockquote class="blockquote mb-0">
                <p>A well-known quote, contained in a blockquote element.</p>
            </blockquote>
        </div>
    </div>
</template>
<script>
export default {
    name:'Mots_cles'
}
</script>
<style scoped>
.card{
    border-radius: 15px;
}
.card-header{
    background-color: #022D7E;
    color:white;
}
button{
    background-color: #28aabb;
    color:white;
}
</style>