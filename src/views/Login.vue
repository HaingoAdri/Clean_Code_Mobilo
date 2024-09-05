<template>
<div class="main">
        <h1>Mobilosoft API DOCS Configuration</h1>
        <h3>Connectez vous en tant qu'admin.</h3>
        <form action="">
                <label for="first">
                    Email:
                </label>
                <input type="text" 
                        id="first" 
                        name="email" 
                        placeholder="Entrer votre Email" required>

                <label for="password">
                    Mot de passe:
                </label>
                <input type="password"
                        id="password"
                        name="password"
                        placeholder="Entrer votre Mot de passe" required>
                <p></p>
                <div class="wrap">
                    <button type="submit"
                            onclick="solve()">
                            Se connecter
                    </button>
                </div>
        </form>
        <br>
        <p>Pas encore inscris?
                <router-link to="/s-inscrire"
                    style="text-decoration: none;">
                    Créer votre compte
                </router-link>
        </p>
    </div>
</template>
<script>
export default {
    name:'LoginConnexion'
}
</script>
<style scoped src="../assets/login_form_back/Style.css"></style>