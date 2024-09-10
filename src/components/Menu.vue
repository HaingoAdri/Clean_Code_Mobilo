<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-blue py-3">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">
                <img src="../assets/mobilosoft_logo.svg" class="m-2" width="35"><span class="fw-bold">Mobilosoft API Docs</span>
            </a>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                </ul>
                <div class="d-flex">
                    <ul class="navbar-nav">
                        <li class="nav-item dropdown">
                            <router-link class="nav-link" to="/metaConfiguration">Configuration</router-link>
                        </li>
                        <li class="nav-item dropdown">
                            <router-link class="nav-link" to="/information_managment">Information documents</router-link>
                        </li>
                        <li class="nav-item dropdown">
                            <router-link class="nav-link me-2" to="/endpoints_introduction">Endpoints</router-link>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle mb-2 fw-bold" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Haingo
                            </a>
                            <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <li><a class="dropdown-item" href="#">Mon compte</a></li>
                                <li><a class="dropdown-item" href="#">Deconnexion</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </nav>
</template>
<script>
export default {
    name:'MenuNavigation'
}
</script>
<style scoped>
nav{
    border-radius: 15px;
}
.bg-blue{
    background-color: #022D7E;
}
.bg-blue a{
    color: #fff;
}
.dropdown-menu a{
    color: black;
}
</style>