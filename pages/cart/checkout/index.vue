<template>
  <mdb-container>
    <mdb-row>
      <mdb-col md="6" class="mt-4">
        <h4 class="text-center mt-1">Checkout</h4>
        <form>
          <div class="grey-text">
            <mdb-input
              label="First Name"
              icon="user"
              group
              type="text"
              validate
              error="wrong"
              success="right"
              required
            />
            <mdb-input
              label="Last Name"
              icon="user"
              group
              type="text"
              validate
              error="wrong"
              success="right"
              required
            />
            <mdb-input
              label="Email"
              icon="envelope"
              group
              type="email"
              validate
              error="wrong"
              success="right"
              required
            />
            <mdb-input
              label="Shipping Address"
              icon="tag"
              group
              type="text"
              validate
              error="wrong"
              success="right"
              required
            />
          </div>
        </form>
      </mdb-col>

      <mdb-col md="6">
        <h4 class="text-center mt-4">Your Order Summary</h4>
        <mdb-card-body>
          <mdb-tbl responsive>
            <mdb-tbl-head color="mdb-color" class="lighten-5">
              <tr>
                <th>
                  <strong>Product</strong>
                </th>
                <th>
                  <strong>QTY</strong>
                </th>
                <th>
                  <strong>Amount</strong>
                </th>
              </tr>
            </mdb-tbl-head>

            <mdb-tbl-body v-for="item in $store.state.cart" :key="item.id">
              <tr>
                <td>
                  <h5>
                    <strong>{{item.name}}</strong>
                  </h5>
                </td>
                <td>{{item.quantity}}</td>
                <td>
                  <strong>₦{{(item.quantity * item.price).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}}</strong>
                </td>
              </tr>
            </mdb-tbl-body>
          </mdb-tbl>

          <div class="d-flex">
            <p class="my-4 pr-4">
              <strong>Total: ₦{{ total }}</strong>
            </p>
            <div>
              <mdb-btn class="btn-sm" type="submit" color="success">
                <a class="text-reset" href="/cart/pay">Confirm Order</a>
              </mdb-btn>
            </div>
          </div>
        </mdb-card-body>
      </mdb-col>
    </mdb-row>
  </mdb-container>
</template>

<script>
import {
  mdbContainer,
  mdbRow,
  mdbCol,
  mdbInput,
  mdbCardBody,
  mdbBtn,
  mdbTbl,
  mdbTblHead,
  mdbTblBody,
} from 'mdbvue';
export default {
  components: {
    mdbContainer,
    mdbRow,
    mdbCol,
    mdbInput,
    mdbCardBody,
    mdbBtn,
    mdbTbl,
    mdbTblHead,
    mdbTblBody,
  },
  computed: {
    total() {
      let total = 0;

      for (let item of this.$store.state.cart) {
        total += item.total;
      }

      return total.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
    },
    auth() {
      return this.$store.getters.isAuthenticated;
    },
  },
};
</script>

<style scoped>
.row {
  margin: 0 auto;
}
</style>
