<template>
  <!-- Material form login -->
  <mdb-container>
    <mdb-row class="d-flex justify-content-center mb-5 py-3 px-5">
      <mdb-col class="mt-3" sm="12" md="8" lg="6">
        <mdb-card>
          <mdb-card-body>
            <form @submit.prevent="onSubmit">
              <p class="h4 text-center py-2">Sign up</p>
              <div class="grey-text">
                <mdb-input
                  required
                  placeholder="Firstname"
                  v-model="firstname"
                  type="text"
                />
                <mdb-input
                  required
                  placeholder="Lastname"
                  v-model="lastname"
                  type="text"
                />
                <mdb-input
                  required
                  placeholder="Telephone"
                  v-model="phoneNumber"
                  type="number"
                />
                <mdb-input
                  required
                  placeholder="Email"
                  v-model="email"
                  type="email"
                />
                <mdb-input
                  required
                  placeholder="Password"
                  v-model="password"
                  type="password"
                />
              </div>
              <div class="text-center py-2 mt-2">
                <mdb-btn color="cyan" type="submit">
                  Register
                </mdb-btn>
              </div>
            </form>
          </mdb-card-body>
        </mdb-card>
      </mdb-col>
    </mdb-row>
  </mdb-container>
  <!-- Material form login -->
</template>

<script>
import axios from "axios";
import {
  mdbInput,
  mdbCard,
  mdbCol,
  mdbRow,
  mdbContainer,
  mdbCardBody,
  mdbBtn
} from "mdbvue";

export default {
  name: "Basic",
  components: {
    mdbInput,
    mdbCard,
    mdbCol,
    mdbRow,
    mdbContainer,
    mdbCardBody,
    mdbBtn
  },
  data() {
    return {
      firstname: "",
      lastname: "",
      email: "",
      phoneNumber: "",
      password: ""
    };
  },
  methods: {
    onSubmit() {
      this.$store
        .dispatch("register", {
          firstname: this.firstname,
          lastname: this.lastname,
          email: this.email,
          phoneNumber: this.phoneNumber,
          password: this.password
        })
        .then(() => {
          this.$router.push("/products");
        });
    }
  }
};
</script>

<style scoped>
.top {
  text-align: center;
}
.log {
  width: 35%;
  margin: 25px auto;
}
p {
  padding-top: 10px;
}
/* .formclass {
  width: 50em;
  justify-items: center;
} */
</style>
