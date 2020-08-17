<template>
  <mdb-container class="mt-3 text-center">
    <mdb-row>
      <mdb-col>
        <mdb-jumbotron>
          <h2 class="display-4">Wismart products</h2>
          <hr />
          <p class="lead" v-if="auth">
            <nuxt-link to="products/new">
              <mdb-btn color="primary">Add Product</mdb-btn>
            </nuxt-link>
          </p>
        </mdb-jumbotron>
      </mdb-col>
    </mdb-row>

    <mdb-container>
      <mdb-row class="justify-content-center pb-3">
        <mdb-card
          id="dark"
          class="col-sm-12 col-lg-3 col-md-6 mx-2 mb-2"
          v-for="product in loadedProducts"
          :key="product.id"
        >
          <mdb-card-image
            :src="product.image"
            alt="Product Image"
            cascade
            wave
          ></mdb-card-image>
          <hr />
          <mdb-card-body class="text-center">
            <mdb-card-title>
              <p>
                <strong>{{ product.name }}</strong>
              </p>
            </mdb-card-title>

            <nuxt-link :to="'/products/' + product.id">
              <a class="btn btn-primary mb-4">More Info</a>
            </nuxt-link>
            <mdb-col>
              <span class="float-left">
                ₦
                {{
                  product.price.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,")
                }}
              </span>

              <span class="float-right">
                <mdb-btn
                  @click="addToCart(product)"
                  tag="a"
                  size="lg"
                  class="p-1 m-0 mr-2 z-depth-0"
                >
                  <mdb-icon title="Add to cart" icon="shopping-cart" />
                </mdb-btn>
              </span>
            </mdb-col>
          </mdb-card-body>
        </mdb-card>
      </mdb-row>
    </mdb-container>
  </mdb-container>
</template>

<script>
import axios from "axios";
import {
  mdbJumbotron,
  mdbBtn,
  mdbCol,
  mdbRow,
  mdbContainer,
  mdbCard,
  mdbCardBody,
  mdbCardImage,
  mdbCardTitle,
  mdbIcon
} from "mdbvue";
export default {
  data() {
    return {
      products: null
    };
  },
  name: "ProductsList",
  components: {
    mdbJumbotron,
    mdbBtn,
    mdbCol,
    mdbRow,
    mdbContainer,
    mdbCard,
    mdbCardBody,
    mdbCardImage,
    mdbCardTitle,
    mdbIcon
  },
  computed: {
    loadedProducts() {
      return this.$store.getters.loadedProducts;
    },
    auth() {
      return this.$store.getters.isAuthenticated;
    }
  },
  methods: {
    addToCart(product) {
      this.$store.commit("addToCart", product);
      alert("item added to cart");
    }
  }
};
</script>

<style scoped>
.top {
  margin-bottom: 10px;
}
.camp {
  padding: 0;
}
.image {
  width: 100%;
  padding-top: 10px;
}
.card {
  max-width: 16em;
}
</style>
