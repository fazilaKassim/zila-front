<template>
  <div id="panier-bg">
    <section id="panier">
      <h1>Mon Panier</h1>
      <section class="prod-panier">
        <article class="produit">
          <table class="table">
            <thead>
              <tr>
                <th>Vos produits</th>
                <th>Quantité</th>
                <th>Prix</th>
                <th></th>
              </tr>
            </thead>
            <tbody id="content-table"> 
              <tr v-for="(produitPanier, i) in getPanier" :key="i"> <!-- Vfor <<<<<< -->
                <td class="prod-img">
                  <img src="../assets/img/cadre.jpg" alt="" class="cart-prod" />
                </td>
                <td class="prod-quantité">
                  <input type="number" min="1" max="99"  :value="produitPanier.quantite"/> <!--  v-on:change="lolo" -->
                </td>
                <td class="prod-prix">{{produitPanier.prix}}</td>
                
                <td> <button  @click="supprimerProduitPanier(produitPanier.idProduit)" >supprimer </button></td>
                <!-- <td> <a ><i  class="fas fa-trash-alt"></i></a></td> -->
              </tr>
            </tbody>
          </table>
        </article>
        <article class="total">
          <h3>Récapitulatif de la commande</h3>
          <!-- <p>Sous total <span class="subtotal">  {{ total +=  produitPanier.quantite * produitPanier.prix}}</span></p> -->
          <p>Livraison <span class="subtotal">25€</span></p>
          <hr />
          <p class="total">
            TOTAL <span class="subtotal"><strong>25€</strong> </span>
          </p>


          <button id="confirm-command" class="btn">Passer la commande</button>
        </article>
      </section>
    </section>
  </div>
</template>

<script>
export default {

  created(){
    console.log("LULULULULULUL")
  },

  methods : {
    supprimerProduitPanier(idProduit){
      console.log("SUPPRESSION product")
      this.$store.dispatch('produit/supprimerProduit', idProduit)
    }
  },

  computed : {
    getPanier(){
      return this.$store.getters["produit/getPanier"]
    }
  }
};
</script>

<style lang="scss" scoped>
::selection {
  color:white ;
  background-color: var(--gld);
} 
#panier-bg {
  background: url("../assets/img/flower.jpg");
  height: auto;
  width: 100%;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  padding: 70px;
}
#panier {
  width: 80%;
  background: white;
  margin: auto;

}
h1 {
  color: black;
  text-align: center;
  padding: 40px;
}
.prod-panier {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  flex: 1;
  // align-items: center;
}

// table
article.produit {
  width: 60%;
  padding: 20px;
  min-width: 200px;

}
table {
  width: 100%;

  border-collapse: collapse;
}
th {
  padding: 10px;
  font-size: 16px;
  border-bottom: 1px solid var(--gld);
}
tr {
  border-bottom: 1px solid #c89c625e;
  border-radius: 10px;
}
td input {
  width: 50px;
  text-emphasis: center;
  outline: none;
  border: 1px solid var(--gld);
  border-radius: 5px;
  padding: 10px;
}
td {
  text-align: center;
  padding: 30px;
  font-size: 16px;
}

.cart-prod {
  width: 100px;
}
.fa-trash-alt {
  color: var(--gld);
}
//total

article.total {
  width: 40%;
  font-family: "georgia", cursive;
  padding: 0 50px 50px;
  min-width: 100px;
  flex:1
}
h3 {
  padding: 10px;
  font-size: 20px;
  border-bottom: 1px solid var(--gld);
  text-transform: uppercase;
  text-align: center;
}
p {
  padding: 25px 30px;
}
p span {
  float: right;
}
article.total hr {
  height: 2px;
}

button#confirm-command {
  width: 80%;
  height: 40px;
  border-radius: 10px;
  margin: auto;
  text-align: center;
  border: none;
  background: var(--gld);
  color: white;
}

hr {
  width: 100%;
  height: 1px;
  color: var(--gld);
  background: var(--gld);
}
@media screen and (max-width: 768px) {
  #panier-bg {
    padding: 30px 0;
  }
  #panier {
    width: 100%;

  }
  section.prod-panier{
    width: 100%;
  }
  article.produit{
    width: 100%;
  }
  article.total{
    width: 70%;
  }
}
</style>
