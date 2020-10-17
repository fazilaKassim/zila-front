import Vue from "vue";
import Vuex from "vuex";
import axios from "axios"
Vue.use(Vuex);

export default ({
  namespaced: true,
  state: {
   produits: [],
   panier : [],
},

mutations : {
  setProduits(state, produits){
    state.produits = produits;
  },

  addProduitPanier(state, produit){
    const panierClone = [...state.panier];
    console.log(produit.idProduit)
    console.log(produit._id)
    
    const isProduitAlreadyExist = panierClone.find(panierProduit => panierProduit.idProduit == produit.idProduit)
    console.log(panierProduit)
    console.log(isProduitAlreadyExist)
    if (isProduitAlreadyExist == undefined)
      panierClone.push(produit)
    else{
      isProduitAlreadyExist.quantite += 1;
      panierClone.push(isProduitAlreadyExist);
    }
     
    
    state.panier = panierClone;
    console.log(state.panier)
  },

  deleteProduitPanier(state, idProduit){
    console.log(idProduit)
    const panierClone = [...state.panier];
    const produitASupprimer = panierClone.find(produit => idProduit === produit.idProduit)

    const newPanier = panierClone.filter(produitPanier => produitASupprimer.idProduit != produitPanier.idProduit)
    // panierClone.remove(produitASupprimer)
    state.panier = newPanier;
  }
},

getters : {
  produits(state){
    return state.produits;
  },

  getPanier(state){
    return state.panier;
  }
},

actions : {
  exemple(context){
    return "lala";
  },

  getProduits(context){
    //appel back must async . async tj avec await . await tj avant axios
    // const produits = await axios.get(process.env.VUE_APP_BACKEND_URL + "/produit");
    // context.commit("getAll",produits.data);
    // // console.log(produits);
    // return produits;

    return new Promise((resolve, reject) => {
      axios
        .get(process.env.VUE_APP_BACKEND_URL + "/produit")
        .then(res => {
          context.commit("setProduits", res.data);
          resolve(res);
        })
        .catch(err => {
          // auth.deleteLocalAuthToken();
          context.commit("setProduits",null);
          reject(err);
        });
    });

  },

  // signin(context, userInfos) {
  //   return new Promise((resolve, reject) => {
  //     handler
  //       .post("/users/connexion", userInfos)
  //       .then(res => {
  //         auth.setLocalAuthToken(res.data.token);
  //         context.commit("setCurrent", res.data.user);
  //         resolve(res);
  //       })
  //       .catch(err => {
  //         auth.deleteLocalAuthToken();
  //         context.commit("setCurrent", null);
  //         reject(err);
  //       });
  //   });
  // },

  ajouterProduit(context, produit){

    console.log("sote  :", produit)
    context.commit("addProduitPanier", produit);
  },

  supprimerProduit(context, idProduit){

    // console.log("sote  :", produit)
    context.commit("deleteProduitPanier", idProduit);
  }
}

  

});
