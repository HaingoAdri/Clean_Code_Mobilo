<template>
  <div class="container wrapper p-5">
    <div class="wrapper card py-5" style="width:600px;">
      <div class="card-body">
        <h1>Mobilosoft API DOCS Configuration</h1>
        <h3>Inscrivez-vous en tant qu'admin.</h3>
        <form @submit.prevent="handleSubmit">
          <label for="nom">Nom complet:</label>
          <input type="text" 
                 id="nom" 
                 v-model="form.nom" 
                 placeholder="Entrer votre Nom complet" 
                 required>
          
          <label for="email">Email:</label>
          <input type="email" 
                 id="email" 
                 v-model="form.email" 
                 placeholder="Entrer votre Email" 
                 required>

          <label for="password">Mot de passe:</label>
          <input type="password"
                 id="password"
                 v-model="form.mot_de_passe"
                 placeholder="Entrer votre Mot de passe" 
                 required>

          <div class="wrap">
            <button type="submit">
              Créer mon compte
            </button>
          </div>
        </form>
        <p>Déjà inscrit?
          <router-link :to="{ name: 'LoginConnexion' }" style="text-decoration: none;">
            Se connecter.
          </router-link>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { postData } from '../service/apiService';

export default {
  name: 'InscriptionRegister',
  data() {
    return {
      form: {
        nom: '',
        email: '',
        mot_de_passe: ''
      }
    };
  },
  methods: {
    async handleSubmit() {
      try {
        await postData('/inscription_utilisateur', this.form);
        this.$router.push('/dashboard');
      } catch (error) {
        console.error('Erreur lors de l\'inscription:', error);
      }
    }
  }
};
</script>
<style scoped>

.wrapper {
  display: flex;
  align-items: center;
  flex-direction: column; 
  justify-content: center;
  width: 100%;
  min-height: 100%;
  padding: 20px;
}

.card {
    box-shadow: 0px 0px 20px 2px #cacaca;
    border-radius: 15px;
}


h1 {
  color: #022D7E;
  font-size: 30px;
}

label {
  display: block;
  width: 100%;
  margin-top: 10px;
  margin-bottom: 5px;
  text-align: left;
  color: #555;
  font-weight: bold;
}

input {
  display: block;
  width: 100%;
  margin-bottom: 15px;
  padding: 10px;
  box-sizing: border-box;
  border: 1px solid #ddd;
  border-radius: 5px;
}


button {
  padding: 15px;
  border-radius: 10px;
  margin-top: 20px;
  margin-bottom: 15px;
  border: none;
  color: white;
  cursor: pointer;
  background-color: #022D7E;
  width: 100%;
  font-size: 16px;
}
</style>
