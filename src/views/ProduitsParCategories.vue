<template>
  <div id="boutique-bg">
    <section class="products">
      <h1>Produits de la catégorie : {{ listeProduits.categorie }}</h1>
      <!-- <h1 v-bind="titre">{{titre}}</h1> -->
      <article class="list-produit">
        <div
          v-for="(produit, i) in listeProduits.produits"
          :key="i"
          class="produit"
        >
          <figure class="produit">
            <img src="../assets/img/cadre.jpg" alt="" class="img-produit" />
            <figcaption>{{ produit.Nom }}</figcaption>
            <p>{{ produit.Prix }} €</p>
            <button class="btn" @click="ajouterProduitPanier(produit)">
              Acheter <i class="fas fa-cart-plus"></i>
            </button>
            <router-link :to="'/produit/' + produit._id">
              <button class="btn btn2">
                Decouvrir <i class="fas fa-feather-alt"></i>
              </button>
            </router-link>
          </figure>
        </div>
      </article>
    </section>
  </div>
</template>

<script>
export default {
  props: ["produitsParCateg"],
  data() {
    return {
      categories: this.produitsParCateg.categorie,
      produitss: this.produitsParCateg.produits,
      // lala : Vue.util.extend({}, this.initialCounter)
    };
  },

  created() {
    this.categorie = this.produitsParCateg.categorie;
    this.produits = this.produitsParCateg.produits;
  },

  methods: {
    getProducts() {
      // console.log("PROPSSSSSS >>>>>>>>>>>>>>>>>><", categorie1);
      const produits = this.$store.getters["produit/produits"]; // je récupère les produit du store
      let categorie = this.$route.params.categorie; // je récupère le nom de la categ depuis l'url
      const produitsFiltered = produits.filter(
        (produit) => produit.Categorie === categorie
      ); // je filtre les produit pour sortir uniquement ceux ayant la même categ que celle de l'url
      console.log("Produits FILTRñ >>>>>> ", produitsFiltered);
      return produitsFiltered;
    },

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
  computed: {
    listeProduits() {
      return { ...this.produitsParCateg };
    },
  },
  //   computed: {
  //     cone() {
  //       return this.$store.state.produit.filter((produit) => categorie.cone);
  //     },

  //   },
};
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
  // padding: 50px 0 0px 0;
}

.products {
  // height: 100vh;
  background: white;
  margin: auto;
  width: 100%;
  margin-bottom: 100px;
  // height: 100vh;
  background: white;
  // margin: auto;
  padding: 20px 10px 0 10px;
  margin-top: 20px;
}
section.sous-menu {
  width: 80%;
  height: auto;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin: auto;
}
article.menu {
  height: auto;
  padding: 20px;
}

article.menu a {
  display: flex;
  flex-direction: column;
}

figure.menu img {
  width: 200px;
  height: 200px;
  border-radius: 80px 0 80px 0;
  cursor: pointer;
  filter: brightness(65%);
  border: double thick rgb(247, 192, 120);
}
figcaption.menu {
  color: white;
  font-size: 14px;
  width: 100%;
  text-align: center;
  position: relative;
  font-weight: 800;
  z-index: 10;
  bottom: 129px;
  height: 0;
  font-family: "Bellota", cursive;
  font-size: 18px;
  text-shadow: #fc0 2px 0 10px;
}

//contenue boutique

.boutique-content {
  margin-top: 20px;
}

article.list-produit {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}
div.produit {
  width: 250px;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: auto;
  border-radius: 20px;
  margin: 20px;
}
figure.produit p {
  text-align: center;
}
figure.produit {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 250px;
  height: 300px;
  border-radius: 20px;
  margin: 20px;
}
img.img-produit {
  width: 250px;
  border-radius: 20px 20px 0 0;
  height: 250px;
}

.produit figcaption {
  font-size: 18px;
  padding: 10px;
}

.produit button {
  position: absolute;
  z-index: -50;
}
.produit:hover button {
  cursor: pointer;
  position: relative;
  bottom: 250px;
  z-index: 10;
  background: var(--gld);
  border: none;
  color: white;
  outline: 0;
  width: 80%;
  height: 40px;
  border-radius: 20px;
  margin: 30px 0 0 0;
  padding: 10px;
}
div.produit:hover figure {
  box-shadow: 0px 10px 3px grey;
}

.produit:hover img {
  height: 250px;
  filter: brightness(65%);
}
@media screen and (max-width: 768px) {
  .products {
    width: 100%;
  }
}
</style>
