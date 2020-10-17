<template>
   <div id="paiement-bg">
       <section id="paiement">
<h1>Paiement</h1>
       </section>
   </div>
</template>

<script>
export default {

}
</script>

<style scoped>
#paiement-bg {
  background: url("../assets/img/flower.jpg");
  height: auto;
  width: 100%;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  padding: 70px;
}
#paiement{
    width: 70%;
    background: white;
    margin: auto;
    height: 80vh;
}
h1{
    color: black;
    text-align: center;
    padding: 40px;

}
@media screen and (max-width: 768px) {
  #paiement {
    width: 100%;

  }
  
}
</style>