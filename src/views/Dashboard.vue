<template>
  <div id="dash-bg">
    <section id="dash" v-if="currentUser">
      <h1>Bonjour {{ currentUser.prenom }}</h1>
      <hr />
      <!-- <button class="btn">
        <router-link to="/commande" class="commande">Mes commandes</router-link>
      </button> -->
      <h2 class="title">Mon profil</h2>
      <article class="info-user">
        <p><strong> Nom :</strong> {{ currentUser.nom }}</p>
        <p><strong> Prénom : </strong> {{ currentUser.prenom }}</p>
        <p><strong> Email : </strong> {{ currentUser.email }}</p>
        <p>
          <strong> Adresse :</strong> {{ currentUser.coordonnees.adresse }}
          <br />
          {{ currentUser.coordonnees.codePostal }}
          {{ currentUser.coordonnees.ville }}
        </p>
      </article>

      <article class="profil-edit">
        <form method="post" action="" class="form">
          <h2 class="title">
            <i class="fas fa-user-cog"></i> Mettre à jour votre profil
          </h2>
          <div class="flex-label">
            <label for="email" class="label">Email</label>
            <input
              id="email"
              type="email"
              class="input"
              v-model="currentUser.email"
              name="email"
            />
          </div>

          <div class="flex-label">
            <label for="input-ville" class="label">Ville</label>
            <input
              id="input-ville"
              type="text"
              class="input"
              v-model="currentUser.coordonnees.ville"
              name="ville"
            />
          </div>
          <div class="flex-label">
            <label for="input-codePostale" class="label">Code postal</label>
            <input
              id="input-codePostale"
              type="text"
              class="input"
              v-model="currentUser.coordonnees.codePostal"
              name="codePostale"
            />
          </div>
          <button class="btn">ok</button>
        </form>

        <form method="post" action="" class="form">
          <h2 class="title">Mettre à jour votre mdp</h2>
          <div class="flex-label">
            <label for="input-old-password" class="label"
              >ancien mot de passe</label
            >
            <div class="flex-label">
              <input
                id="input-old-password"
                type="password"
                class="input"
                name="oldPassword"
              />
            </div>
            <div class="flex-label">
              <label for="input-password" class="label"
                >nouveau mot de passe</label
              >
            </div>

            <input
              id="input-password"
              type="password"
              class="input"
              name="password"
            />
          </div>

          <button class="btn">ok</button>
        </form>
      </article>
    </section>
  </div>
</template>

<script>
export default {
  computed: {
    created() {
      console.log(this.$store.getters["user/current"]);
    },
    currentUser() {
      const userInfos = this.$store.getters["user/current"]; // récupère l'user connecté depuis le store/user
      return userInfos; // retourne les infos, desormais accessible dans le component sous le nom currentUser
    },
    // methode: {

    // }
  },
};
</script>

<style scoped>
#dash-bg {
  background: url("../assets/img/flower.jpg");
  height: auto;
  width: 100%;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  padding: 70px;
}
#dash {
  width: 80%;
  background: white;
  margin: auto;
}

h1 {
  color: black;
  text-align: center;
  padding: 40px;
}

article.info-user {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 18px;
}

form {
  padding: 50px 0;
  width: 70%;
  min-height: 300px;
  height: auto;
  margin: auto;
  margin-top: 70px;
  margin-bottom: 70px;
  background: white;
  font-family: "Bellota", cursive;
  /* display: flex;
     justify-content: center;
     align-items: center;
     flex-direction: column; */
}

article.profil-edit {
  width: 100%;
}
input {
  width: 100%;
  border: 0;
  border-bottom: 2px solid rgb(200, 156, 98);
  margin-bottom: 15px;
  outline: 0;
  font-size: 18px;
  color: black;
  padding: 7px 0;
  background: transparent;
  transition: border-color 0.2s;
}

.btn {
  width: 200px;
  height: 30px;
  border-radius: 5px;
  color: white;
  background: rgb(155, 111, 46);
  border: 1px solid rgb(136, 101, 48);
  margin: auto;
  outline: 0;
  display: block;
}
hr {
  margin-top: 50px;
}

h2 {
  margin-bottom: 20px;
}

@media screen and (max-width: 768px) {
#dash-bg{
  padding: 30px 0;

}
#dash{
  width: 100%;
  min-width: 300px;
}

.info-user{
  width: 100%;
}
.profil-edit{
  width: 100%;
}


}
</style>
