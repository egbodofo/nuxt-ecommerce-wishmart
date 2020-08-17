<template>
  <mdb-container>
    <mdb-row class="d-flex justify-content-center px-2">
      <mdb-col class="card mt-3" sm="12" md="8" lg="6">
        <img
          top
          alt="Payment recieved"
          class="my-image"
          waves
          src="https://i.stack.imgur.com/YbIni.png"
        />

        <hr />

        <h3 class="text-center">
          Your payment has been recieved and your order is on its way!!!
        </h3>

        <mdb-btn class="btn btn-success">
          <a href="/products">
            Continue shopping
          </a>
        </mdb-btn>
      </mdb-col>
    </mdb-row>
  </mdb-container>
</template>

<script>
import { mdbInput, mdbCol, mdbRow, mdbContainer, mdbBtn } from 'mdbvue';
export default {
  name: 'Basic',
  components: {
    mdbContainer,
    mdbCol,
    mdbRow,
    mdbBtn,
  },
};
</script>

<style></style>
