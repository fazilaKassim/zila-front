<template>
  <div id="app">
    <Header />
    <button class="reserve">
      <router-link to="/rendezVous"
        ><i class="fas fa-calendar-check"></i>
        <p class="hide">Prendre RDV</p>
      </router-link>
    </button>
    <main id="main-content">
      <router-view />

      <a href="#app"><i class="fas fa-chevron-up"></i></a>
    </main>
    <Footer />

    <notification-list />
  </div>
</template>

<script>
import Footer from "../src/components/Footer";
import Header from "../src/components/Header";
import NotificationList from "../src/components/NotificationList";
import auth from "@/auth";
export default {
  beforeCreate() {
    const currentUser = this.$store.getters["user/current"];
    const token = auth.getLocalAuthToken();
    console.log(token, currentUser);
    if (token && !currentUser) {
      // console.log("TOKEN OF LOCAL STORAGE : ", token)
      this.$store.dispatch("user/getUserByToken");
    }
  },
  components: {
    Footer,
    Header,
    NotificationList,
  },
};
</script>

<style lang="scss">
i.fa-chevron-up {
  color: var(--gld);
  width: 30px;
  height: 30px;
  position: fixed;
  // margin: 40px;
  // margin-bottom: 150px;
  bottom: 100px;
  right: 40px;
  z-index: 15;
}
.reserve a {
  color: white;
  font-size: 18px;
}
p.hide {
  display: none;
}
.reserve {
  position: fixed;

  left: 0px;
  bottom: 0;
  margin: 10px;
  width: 30px;
  height: 35px;
  border-radius: 10px;
  background: black;
  font-family: "Times New Roman";
  border: none;
  font-size: 18px;
  outline: 0;
  cursor: pointer;
}
.reserve:hover {
  background: white;
  transform: rotate(90deg);
  width: 157px;
  left: -60px;
  content: "PRendre RDV";
  height: 37px;
  bottom: 65px;
  border: 2px solid var(--gld);
}
.reserve:hover a {
  color: var(--gld);
}
.reserve:hover p.hide {
  display: inherit;
}
</style>
