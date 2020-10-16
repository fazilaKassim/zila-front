<template>
  <div id="page-produit">
    <section class="produit-detail">
      <article
        v-bind="produitDetail"
        @click="selectCategorie('lettre')"
        class="menu"
      >
        <router-link to="/boutique/lettre"
          ><figure class="menu">
            <img class="img-menu" src="../assets/img/cadre.jpg" alt="" />
            <figcaption class="menu">Lettre fleurie</figcaption>
          </figure></router-link
        >
      </article>
    </section>
  </div>
</template>

<script>

export default {
     data(){
          return {
               produits: [],
               produitsParCateg : {
                   categorie : "",
                   produits : []
               },
          }
     },
  components : {
       
  },
  async created(){
    await this.$store.dispatch("produit/getProduits");
    const produits = this.$store.getters["produit/produits"];
    this.produits = produits;
    this.selectCategorie("henne");

  },

  methods : {
      selectCategorie(categ){
          this.produitsParCateg = {
              categorie : categ,
              produits : this.produits.filter(produit => produit.Categorie === categ)
          }
      }
  }
}
</script>

<style lang="scss" scoped>
//boutique menu
#boutique-bg {
  background: url("../assets/img/flower.jpg");
  height: auto;
  width: 100%;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  padding: 70px;
}

.boutique {
  width: 90%;
  background: white;
  margin: auto;
}
@media screen and (max-width: 768px) {
   .produit-detail{
    width: 100%;

  }
  
}
</style>
