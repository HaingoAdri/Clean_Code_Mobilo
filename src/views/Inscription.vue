<template>
<div class="main">
        <h1>Mobilosoft API DOCS Configuration</h1>
        <h3>Inscrivez vous en tant qu'admin.</h3>
        <form action="/dashboard">
                <label for="first">
                    Nom complet:
                </label>
                <input type="text" 
                        id="first" 
                        name="nom" 
                        placeholder="Entrer votre Nom complet" required>
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

                <div class="wrap">
                    <button type="submit">
                            Créer mon compte
                    </button>
                </div>
        </form>
        <p>Déjà inscris?
                <router-link :to="{name : 'LoginConnexion'}"
                    style="text-decoration: none;">
                    Se connecter.
                </router-link>
        </p>
    </div>
</template>
<script>
export default {
    name:'InscriptionRegister'
}
</script>
<style scoped src="../assets/login_form_back/Style.css"></style>