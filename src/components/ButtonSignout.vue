<template>
        <li>
              <router-link to="/connexion">
                <!-- v-if="!isSignedIn" -->
                <img  @click="signout" 
                  src="../assets/img/deconnexion.png"
                  alt=""
                  class="icon flex-vertical"
              /></router-link>
            </li>

</template>

<script>
import auth from "@/auth/";

export default {
  name: "Signout",
 
};
</script>

<style scoped>
.icon:hover {
  color: firebrick !important;
}
</style>

