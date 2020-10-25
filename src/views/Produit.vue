<template>
  <div id="produit-bg">
    <section class="produit-detail">
      <section class="detail">
        <article class="img">
          <figure>
            <img src="../assets/img/cadre.jpg" alt="" class="img-product" />
          </figure>
        </article>

        <article class="info">
          <h1>{{produit.Nom }}</h1>
          <p>{{produit.Description }}</p>
          <h3>Prix : {{produit.Prix }} €</h3>
          <router-link></router-link>
          <button class="btn-produit" @click="ajouterProduitPanier(produit)">
            Ajouter le produit au panier <i class="fas fa-cart-plus"></i>
          </button>
          <div class="social">
            <whats-app :url="url" title="Hello" scale="3"></whats-app>
            <facebook :url="url" scale="3"></facebook>
            <pinterest :url="url" scale="3"></pinterest>
            <google :url="url" scale="3"></google>
            <email :url="url" subject="Hello" scale="3"></email>
          </div>
        </article>
      </section>
    </section>
  </div>
</template>

<script>
import { Facebook } from "vue-socialmedia-share";
import { WhatsApp } from "vue-socialmedia-share";
import { Pinterest } from "vue-socialmedia-share";
import { Google } from "vue-socialmedia-share";
import { apiHandler } from "../api/handler"

import { Email } from "vue-socialmedia-share";
// usage in local component
const handler = apiHandler();
export default {
  components: {
    Facebook,
    WhatsApp,
    Pinterest,
    Google,
    Email,
  },

  data(){
    return {
      produit : {}
    }
  },

  methods : {
    ajouterProduitPanier(produit) {
      const produitPanier = {
        idProduit: produit._id,
        produit: produit,
        prix: produit.Prix,
        quantite: 1,
      };
      console.log("before adding panier ", produitPanier);

      this.$store.dispatch("produit/ajouterProduit", produitPanier);
    },
  },

  async created(){
    console.log("IDDDDDDDD", this.$route.params.id)
    const produit = await handler.get("/produit/" + this.$route.params.id);
    this.produit = produit.data
  }
};
</script>

<style lang="scss" scoped>
#produit-bg {
  background: url("../assets/img/flower.jpg");
  height: auto;
  width: 100%;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  padding: 70px;
}
.produit-detail {
  width: 70%;
  background: white;
  margin: auto;
  height: 80vh;
  // display: flex;
}
h1 {
  color: black;
  text-align: center;
  padding: 40px;
}

section.detail {
  width: 90%;
  height: auto;
  display: flex;

  justify-content: center;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
}

.img figure {
  width: 90%;
}

article.img {
  max-width: 60%;
  // margin: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: auto;
}

img.img-product {
  width: 100%;
  margin: auto;
  // margin: 20px
}

article.info {
  width: 40%;
  padding: 30px;
}
.btn-produit {
  padding: 10px;
  margin: 30px;
  color: white;
  border: none;
  cursor: pointer;
  outline: none;
  background: var(--gld);
  border-radius: 10px;
}

div.social {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
}
@media screen and (max-width: 768px) {
  #produit-detail {
    width: 100%;
  }
}
</style>
