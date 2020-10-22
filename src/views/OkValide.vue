<template>
  <div id="validation-bg">
    <section id="validation">
      <h1>Merci de nous avoir contacter</h1>

      <p>Votre demande à bien été pris en compte !<br /></p>
      <p>
        Nous reviendrons vers très vite. A bientôt :)
      </p>
      <button class="btn">
        <router-link to="/"> Page d'accueil</router-link>
      </button>
    </section>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
#validation-bg {
  background: url("../assets/img/flower.jpg");
  height: auto;
  width: 100%;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  padding: 70px;
}
#validation {
  width: 70%;
  background: white;
  margin: auto;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding-bottom: 70px;
}
h1 {
  color: black;
  text-align: center;
  padding: 40px;
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
  margin: 30px;
}

a {
  color: white;
}
@media screen and (max-width: 768px) {
  #content-found {
    width: 100%;
  }
}
</style>
