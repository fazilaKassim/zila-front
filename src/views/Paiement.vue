<template>
  <div id="paiement-bg">
    <section id="paiement">
      <h1>Paiement</h1>

      <div id="paie" v-if="!paidFor">
        <div ref="paypal"></div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      loaded: false,
      paidFor: false,
    };
  },
  mounted: function() {
    const script = document.createElement("script");
    script.src =
      "https://www.paypal.com/sdk/js?client-id=AefQwPCA5kdS1ElenavePfGm9LmA4NR7UmGOKq1efjBjIifyEpmqFE_6F-GgmJZIDUrcprM_kicLsO1v";
    script.addEventListener("load", this.setLoaded);
    document.body.appendChild(script);
  },
  methods: {
    setLoaded: function() {
      this.loaded = true;
      window.paypal
        .Buttons({
          createOrder: (data, actions) => {
            return actions.order.create({
              purchase_units: [
                {
                  description: this.produit.description,
                  amount: {
                    currency_code: "USD",
                    value: this.produit.prix,
                  },
                },
              ],
            });
          },
          onApprove: async (data, actions) => {
            const order = await actions.order.capture();
            this.data;
            this.paidFor = true;
            console.log(order);
          },
          onError: (err) => {
            console.log(err);
          },
        })
        .render(this.$refs.paypal);
    },
  },
};
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
#paiement {
  width: 70%;
  background: white;
  margin: auto;
  height: 60vh;
}

#paie {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}
h1 {
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
