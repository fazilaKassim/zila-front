<template>
  <footer>
    <section id="footer">
      <article class="footer footer-logo">
        <img src="../assets/img/logo.png" alt="" class="footer-logo" />
      </article>
      <article class="footer footer-info">
        <h2 class="footer-titre">INFORMATION</h2>

        <router-link to="/condition">Condition général de vente</router-link>
        <router-link to="/mentionlegal">Mention légales</router-link>
        <a
          href="https://zilahenneabout.wordpress.com/nos-produits/"
          target="_blank"
          >Nos produits</a
        >
        <a href="https://zilahenneabout.wordpress.com/about/" target="_blank"
          >L'histoire du henné</a
        >
        >
      </article>
      <article class="footer footer-menu">
        <h2 class="footer-titre" target="_blank">PLAN DU SITE</h2>
        <router-link to="/boutique" target="_blank">Boutique</router-link>
        <router-link to="/galerie" target="_blank">Galerie</router-link>
        <router-link to="/tarifs" target="_blank"> Tarifs</router-link>
        <router-link to="/rendezVous" target="_blank">Rendez-vous</router-link>
      </article>
      <article class="footer footer-rs">
        <a href="https://www.instagram.com/zilahenne/" target="_blank"
          ><img src="../assets/img/insta.png" alt="" class="rs-logo"
        /></a>
        <a href="https://www.facebook.com/ZilaHenne/" target="_blank"
          ><img src="../assets/img/fb.png" alt="" class="rs-logo"
        /></a>
        <a href="https://www.facebook.com/ZilaHenne/" target="_blank">
          <img src="../assets/img/snap.png" alt="" class="rs-logo"
        /></a>
      </article>
    </section>
  </footer>
</template>

<script>
export default {};
</script>

<style>
footer {
  width: 100%;
  min-height: 200px;
}
#footer {
  width: 100%;
  height: auto;
  /* display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 50px;
  grid-row-gap: 0px; */
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 100%;
}
h2 {
  color: rgb(200, 156, 98);
  font-size: 18px;
  font-family: "Bellota", cursive;
  margin: 15px;
}
article.footer {
  flex: 1;
  min-width: 350px;
  height: auto;
}

/* logo */
article.footer-logo {
  /* grid-area: 1 / 1 / 2 / 2; */
  margin: auto;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}

.footer-logo {
  width: 150px;
  margin: auto;
}

/* section information*/
article.footer-info,
.footer-menu {
  /* grid-area: 1 / 2 / 2 / 3; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

/* section menu
article.footer-menu {
  grid-area: 1 / 3 / 2 / 4;
} */

/* section reseau sociaux */
article.footer-rs {
  /* grid-area: 1 / 4 / 2 / 5; */
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
article.footer a {
  color: white;
}
.rs-logo {
  width: 60px;
  margin: 10px;
}

@media screen and (max-width: 600px) {
  .footer-logo {
    display: none;
  }
  .form {
    width: 95%;
    margin: 0;
    min-width: 400px;
  }
}
</style>
