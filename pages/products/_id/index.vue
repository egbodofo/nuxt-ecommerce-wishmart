<template>
  <mdb-container>
    <mdb-row>
      <mdb-col class="single-product text-center mt-4" md="6">
        <div>
          <img class="my-image" :src="loadedProduct.image" />
        </div>

        <mdb-btn
          @click="addToCart(loadedProduct)"
          class="btn btn-sm btn-success"
        >
          Add to cart
          <span>
            <mdb-icon title="Add to cart" icon="shopping-cart" />
          </span>
        </mdb-btn>
      </mdb-col>

      <mdb-col class="single-product text-center mt-4" md="6">
        <p>
          Name:
          <strong>{{ loadedProduct.name }}</strong>
        </p>
        <hr />

        <p>Brand: {{ loadedProduct.brand }}</p>
        <hr />

        <p>
          Price: ₦
          {{
            loadedProduct.price.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,")
          }}
        </p>

        <hr />

        <p>Description: {{ loadedProduct.description }}</p>
        <hr />

        <div class="top" v-if="ownerId === loadedProduct.owner_id">
          <p>
            <nuxt-link :to="'/products/edit/' + loadedProduct.id">
              <a class="btn btn-sm btn-info">Edit</a>
            </nuxt-link>
          </p>

          <button @click="deleted(loadedProduct)" class="btn btn-sm btn-danger">
            Delete
          </button>
        </div>

        <nuxt-link to="/products" class="btn btn-sm btn-success"
          >Back to product</nuxt-link
        >
      </mdb-col>
    </mdb-row>
  </mdb-container>
</template>

<script>
import axios from "axios";
import cookie from "js-cookie";
import { mdbContainer, mdbCol, mdbRow, mdbIcon, mdbBtn } from "mdbvue";

export default {
  name: "Product",
  components: {
    mdbContainer,
    mdbCol,
    mdbRow,
    mdbIcon,
    mdbBtn
  },

  data() {
    return {
      ownerId: ""
    };
  },
  asyncData(context) {
    return context.app.$axios
      .$get("/products/" + context.params.id)
      .then(data => {
        return {
          loadedProduct: data.product
        };
      })
      .catch(e => context.error(e));
  },
  computed: {
    user() {
      return this.$store.getters.user;
    }
  },
  mounted() {
    if (this.user) {
      const authUser = JSON.parse(this.user);
      this.ownerId = authUser.id;
    }
  },
  methods: {
    deleted(removedProduct) {
      this.$store.dispatch("deleteProduct", removedProduct).then(() => {
        this.$router.push("/products");
      });
    },
    addToCart(product) {
      this.$store.commit("addToCart", product);
      alert("item added to cart");
    }
  }
};
</script>

<style scoped>
.top {
  margin-bottom: 0.8px;
}
.top {
  width: 100%;
  justify-content: space-between;
}
.my-image {
  max-width: 280px !important;
  max-height: auto !important;
  min-width: 220px !important;
  min-height: 220px !important;
  border-radius: 3% !important;
  -webkit-box-shadow: 0px 3px 38px -8px rgba(3, 23, 247, 0.88) !important;
  -moz-box-shadow: 0px 3px 38px -8px rgba(3, 23, 247, 0.88) !important;
  box-shadow: 0px 3px 38px -8px rgba(3, 23, 247, 0.88) !important;
}
.single-product {
  width: 100%;
  margin: 0 auto;
  justify-content: center;
}
</style>
