import Vue from "vue";
import VueRouter from "vue-router";
import Accueil from "../views/Accueil.vue";
import Boutique from "../views/Boutique.vue";
import Galerie from "../views/Galerie.vue";
import Tarifs from "../views/Tarifs.vue";
import RendezVous from "../views/RendezVous.vue";
import Connexion from "../views/Connexion.vue";
import Inscription from "../views/Inscription.vue";
import MentionLegal from "../views/MentionLegal.vue";
import Condition from "../views/Condition.vue";
import NotFound from "../views/NotFound.vue";
// import Cone from "../views/Cone.vue";
// import Objets from "../views/Objets.vue";
// import Lettre from "../views/Lettre.vue";
// import Bouquet from "../views/Bouquet.vue";
import Dashboard from "../views/Dashboard.vue";
import Commande from "../views/Commande.vue";
import ProduitsParCategories from "../views/ProduitsParCategories.vue";
import ProduitDetail from "../views/ProduitDetail.vue";
import Produit from "../views/Produit.vue";
import Panier from "../views/Panier.vue";
import Paiement from "../views/Paiement.vue";
import Admin from "../views/Admin.vue";
// import ValidationRdv from "../views/ValidationRdv.vue";
import auth from "@/auth/";
import OkValide from "../views/OkValide.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Accueil",
    component: Accueil,
  },

  {
    path: "/boutique",
    name: "Boutique",
    component: Boutique,
    children: [
      {
        // props: route => ({lolo : route.params.categoriess}),
        path: ":categoriess",
        name: "ProduitsParCategories",
        component: ProduitsParCategories,
      },
      // {
      //   path: ":idProduit/produitDetail",
      //   name: "ProduitDetail",
      //   component: ProduitDetail,
      // },
    ],
  },

  // {
  //   path: "/produitDetail",
  //   name: "ProduitDetail",
  //   component: ProduitDetail,
  // },
  {
    path: "/galerie",
    name: "Galerie",
    component: Galerie,
    props: true,
  },

  {
    path: "/tarifs",
    name: "Tarifs",
    component: Tarifs,
  },

  {
    path: "/rendezVous",
    name: "RendezVous",
    component: RendezVous,
  },
  // {
  //   path: "/ValidationRdv",
  //   name: "ValidationRdv",
  //   component: ValidationRdv,
  // },
  {
    path: "/connexion",
    name: "Connexion",
    beforeEnter: (to, from, next) => {
      // on vérifie l'état de connexion
      if (auth.getLocalAuthToken()) next("/dashboard");
      // un utilisateur déjà connecté sera redirigé vers le dashboard...
      else next();
    },
    component: Connexion,
  },

  {
    path: "/inscription",
    name: "Inscription",
    beforeEnter: (to, from, next) => {
      // on vérifie l'état de connexion:
      if (auth.getLocalAuthToken()) next("/dashboard");
      // un utilisateur déjà connecté sera redirigé vers le dashboard...
      else next();
    },

    component: Inscription,
  },
  {
    path: "/mentionlegal",
    name: "MentionLegal",
    component: MentionLegal,
  },
  {
    path: "/condition",
    name: "Condition",
    component: Condition,
  },
  {
    path: "*",
    name: "404",
    component: NotFound,
  },

  {
    path: "/dashboard",
    name: "Dashboard",
    beforeEnter: (to, from, next) => {
      // on vérifie l'état de connexion:
      if (!auth.getLocalAuthToken()) next("/signin");
      // un utilisateur non connecté sera redirigé vers le signin...
      else next();
    },
    component: Dashboard,
  },
  {
    path: "/commande",
    name: "Commande",
    component: Commande,
  },
  {
    path: "/produit",
    name: "Produit",
    component: Produit,
  },
  {
    path: "/panier",
    name: "Panier",
    component: Panier,
  },
  {
    path: "/paiement",
    name: "Paiement",
    component: Paiement,
  },
  {
    path: "/admin",
    name: "Admin",
    component: Admin,
  },
  {
    path: "/okValide",
    name: "OkValide",
    component: OkValide,
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});
export default router;
