<template>
  <section id="accueil">
    <div id="slide">
      <agile
        :nav-buttons="false"
        :autoplay-speed="5000"
        :speed="2500"
        fade="fade"
        pause-on-hover="pause-on-hover"
        pause-on-dots-hover="pause-on-dots-hover"
        autoplay="autoplay"
        ><img class="slide" src="../assets/img/slide1.png"/><img
          class="slide"
          src="../assets/img/slide3.jpg"/><img
          class="slide"
          src="../assets/img/slide4.jpg"
      /></agile>
    </div>
    <div id="accueil-baground">
      <div id="content-accueil">
        <section id="boutique">
          <h2>Menu Boutique</h2>
          <ul class="menu">
            <li class="menu">
              <a href="/boutique/henne" target="blank">
                <figure>
                  <img src="../assets/img/cone.jpeg" alt="" class="menu" />
                  <figcaption>Henné</figcaption>
                </figure>
              </a>
            </li>
            <li class="menu">
              <a href="/boutique/objets"  target="blank">
                <figure>
                  <img src="../assets/img/cadre.jpg" alt="" class="menu" />
                  <figcaption>Objets personnalisé</figcaption>
                </figure>
              </a>
            </li>
            <li class="menu">
              <a href="/boutique/lettre"  target="blank">
                <figure>
                  <img src="../assets/img/bougie.jpeg" alt="" class="menu" />
                  <figcaption>Lettre Fleurie</figcaption>
                </figure>
              </a>
            </li>
            <li class="menu">
              <a href="/boutique/bouquet"  target="blank">
                <figure>
                  <img src="../assets/img/bouquet.jpg" alt="" class="menu" />
                  <figcaption>Bouquet</figcaption>
                </figure>
              </a>
            </li>
          </ul>
        </section>
        <!-- <div id="fb-root"></div> -->

        <section id="avis"></section>

        <section id="propos">
          <article id="henne">
            <ul class="propos">
              <li>Déplacement possible en Ile-de-France</li>
              <li>Nous utilisons des produit de haute qualité 100% naturel</li>
              <li>
                <button class="reserver">
                  <router-link to="/rendezVous">Reservez</router-link>
                </button>
              </li>
            </ul>
          </article>
          <article class="video">
            <video controls muted>
              <source src="assets/video/zila Henné.mp4" type="video/mp4" />
            </video>
          </article>
        </section>

        <section id="carousel">
          <carousel-3d>
            <slide :index="0">
              <img src="../assets/img/henne/1.jpg" alt="" />
            </slide>
            <slide :index="1">
              <img src="../assets/img/henne/6.jpg" alt="" />
            </slide>
            <slide :index="2">
              <img src="../assets/img/henne/1.jpg" alt="" />
            </slide>
            <slide :index="3">
              <img src="../assets/img/henne/6.jpg" alt="" />
            </slide>
            <slide :index="4">
              <img src="../assets/img/henne/1.jpg" alt="" />
            </slide>
            <slide :index="5">
              <img src="../assets/img/henne/6.jpg" alt="" />
            </slide>
            <slide :index="6">
              <img src="../assets/img/henne/1.jpg" alt="" />
            </slide>
            <slide :index="7">
              <img src="../assets/img/henne/6.jpg" alt="" />
            </slide>
            <slide :index="8">
              <img src="../assets/img/henne/1.jpg" alt="" />
            </slide>
            <slide :index="9">
              <img src="../assets/img/henne/6.jpg" alt="" />
            </slide>
          </carousel-3d>
        </section>

        <section id="description">
          <article>
            <p>
              Zila henne vous propose des tatouages éphémère au henné naturel.
              Les produits utilisé sont 100% naturel et certifié.
              <br><br> Vous pouvez faire appel à nous pour toute vos occasions, seule ou en petit
              groupe, nous assurerons votre prise en charge. 
              <br><br>
               Les déplacements sont possible sur paris et en Ile-de-France.
               <br>
               ​
            </p>
          </article>
          <article>     <p>
    Nous vous proposons aussi la vente de produit personnalisables.
              <br><br> 
              Toutes nos créations sont faite à la main.<br><br>
          Vouos avez egalement la possibilité dachter du henné en poudre ou des cones de henné pret à l'emploi.
               ​
            </p> </article>
        </section>
        <section id="livraison">
          <ul class="livraisons">
            <li>
              <figure>
                <img src="../assets/img/smiley.png" alt="" />
                <figcaption>
                  Produit fais à la main <br /><span> Design unique </span>
                </figcaption>
              </figure>
            </li>
            <li>
              <figure>
                <img src="../assets/img/box.png" alt="" />
                <figcaption>
                  livraison offerte <br /><span>des 50€ d'achat</span>
                </figcaption>
              </figure>
            </li>
            <li>
              <figure>
                <img src="../assets/img/time.png" alt="" />
                <figcaption>Livraison rapide</figcaption>
              </figure>
            </li>
            <li>
              <figure>
                <img src="../assets/img/card.png" alt="" />
                <figcaption>Paiement sécurisé</figcaption>
              </figure>
            </li>
          </ul>
        </section>

        <section id="newsletter">
          <article class="newsletter">
            <h3>
              S'inscrire à notre Newsletter <br />

              Soyez le premier à découvrir nos dernières tendances et bénéficiez
              d'offres exclusives
            </h3>
          </article>
          <article class="subscribe">
            <label for="email"></label>
            <input
              type="email"
              id="email"
              placeholder="E-mail"
              class="newsletter"
            />
            <div class="subcribe"><button class="news">Souscrire</button></div>
          </article>
        </section>
      </div>
    </div>
  </section>
</template>

<script>
import { VueAgile } from "vue-agile";
import { Carousel3d, Slide } from "vue-carousel-3d";

export default {
  components: {
    agile: VueAgile,
    Carousel3d,
    Slide,
  },
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
::-webkit-scrollbar{
  width: 13px;
}
::-webkit-scrollbar-thumb {

border:1px solid var(--gld);
border-radius: 10px;
background: linear-gradient(90deg,rgba(200,156,98,1)  0%,  rgb(221, 183, 132)30%, rgba(176,126,58,1) 67%, rgba(131,94,44,1) 100%);}
::-webkit-scrollbar-track {background: black}
:root {
  --gld: rgb(200, 156, 98);
}
::selection {
  color: var(--gld);
  background-color: black;
} 
body {
  overflow-x: hidden;
  width: 100%;
  min-width: 480px;
  max-width: 100%;
}


.row {
  margin: 0;
  padding: 0;
}
h2 {
  text-align: center;
  font-size: 23px;
  padding: 40px 0 0 0;
}
#accueil-baground {
  background: url("../assets/img/flower.jpg");

  background-attachment: fixed;
  background-position: center;

  /* background-repeat: no-repeat; */
}
#content-accueil {
  // background: black;
  color: white;
  width: 100%;
  margin: auto;
}
/* #slide */
.agile__dots {
  bottom: 10px;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  flex-direction: column;
  right: 30px;
  position: absolute;
}
.agile__dot {
  margin: 5px 0;
}
.agile__dot button {
  background-color: transparent;
  border: 1px solid #fff;
  cursor: pointer;
  display: block;
  height: 10px;
  font-size: 0;
  line-height: 0;
  margin: 0;
  padding: 0;
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s;
  width: 10px;
}
.agile__dot--current button,
.agile__dot:hover button {
  background-color: #fff;
}

.slide {
  display: block;
  height: 500px;
  -o-object-fit: cover;
  object-fit: cover;
  width: 100%;
}

/* a propos */
#propos {
  width: 100%;
  // background: url("../assets/img/flower.jpg");
  background: rgba(0, 0, 0, 0.411);
  background-attachment: fixed;
  background-position: center;
  height: auto;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  background-repeat: no-repeat;
  background-size: cover;
}
#propos article {
  // width: 50%;
  display: flex;
  margin: 50px;
}
#henne {
  display: flex;
  justify-content: center;
  align-items: center;
}
ul.propos {
  list-style: none;
}
ul.propos li {
  text-align: center;
  font-size: 22px;
}
video {
  width: 500px;
  height: auto;
  margin: 50px;
  border: none;
}
/* boutique */
#boutique {
  background: black;
  width: 100%;
}
ul.menu {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  width: 100%;
  justify-content: center;
  align-items: center;
}
li.menu {
  list-style: none;

  // width: 20%;
  /* margin-top: 0px; */
  height: auto;
  // border-radius: 50%;
  margin: 50px 20px 20px 20px;
}
.menu a {
  text-decoration: none;
  color: white;
  font-size: 22px;
}
.menu a figure {
  cursor: pointer;
  display: flex;
  flex-direction: column;

  align-items: center;
}
figcaption {
  text-align: center;
  padding: 30px;
}
img.menu {
  width: 200px;
  height: 200px;
  border-radius: 50%;
}


/* newsletter */
#newsletter {
  width: 100%;
  padding: 100px 0;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
  height: auto;
  background: rgba(0, 0, 0, 0.411);
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

#newsletter article {
  height: auto;
}

.newsletter h3 {
  text-align: center;
  margin: 35px;
}

button.news,
button.reserver {
  width: 120px;
  height: 35px;
  border-radius: 10px;
  background: rgb(200, 156, 98);
  font-family: "Bellota", cursive;
  margin: auto;
  color: white;
  font-size: 16px;
  margin: 20px;
  border: none;
  outline: 0;
}
button.news a,
button.reserver a {
  color: white;
  margin: auto;
}
input.newsletter {
  color: rgb(200, 156, 98);
  font-family: "Bellota", cursive;
  background-color: transparent;
  border-bottom: 3px solid rgb(200, 156, 98);
  border-top: inherit;
  border-left: inherit;
  border-right: inherit;
  width: 350px;
  font-weight: 800;
}

#email::placeholder {
  font-family: "Bellota", cursive;
  color: rgb(200, 156, 98);
  padding-bottom: 10px;
}

.subcribe {
  display: flex;
  justify-content: center;
  align-items: center;
}
//carousel
#carousel {
  padding: 60px;
  background: black;
}
.carousel-3d-slide {
  border-radius: 20px;
  height: 300px;
}
.carousel-3d-slide img {
  border-radius: 20px;
  height: 300px;
}
.carousel-3d-container {
  margin: 40px auto;
}

//info
section#description{
    background: rgba(0, 0, 0, 0.486);
    // height: 300px;
    padding: 50px;
    font-size: 20px;
    
    color: white;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    text-shadow: 1px 1px 2px var(--gld);

}
section#description article{
  width: 40%;
  margin: auto;
  min-width: 400px;
}

/* livraison  */

.livraisons {
  display: flex;
  // justify-content: space-around;
  justify-content: center;
  align-items: center;
  align-items: center;
  background: black;
  padding-top: 50px;
}

ul.livraisons {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
.livraisons li {
  list-style: none;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
}

.livraisons li figcaption {
  text-align: center;
}

ul.livraisons li figure {
  display: flex;
  flex-direction: column;
  width: 200px;
  justify-content: center;
  align-items: center;
}

@media screen and( max-width: 679px ) {
}
</style>
