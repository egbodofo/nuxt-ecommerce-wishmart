<template>
  <!-- Material form login -->
  <mdb-container>
    <mdb-row class="d-flex justify-content-center mb-5 py-3 px-5">
      <mdb-col class="mt-3" sm="12" md="8" lg="6">
        <mdb-card>
          <mdb-card-body>
            <form @submit.prevent="onSubmit">
              <div class="grey-text">
                <mdb-input
                  required
                  label="Name"
                  icon="user"
                  v-model="editedProduct.name"
                  type="text"
                />
                <mdb-input
                  required
                  label="Price"
                  icon="coins"
                  v-model="editedProduct.price"
                  type="number"
                />
                <mdb-input
                  required
                  label="Image"
                  icon="image"
                  v-model="editedProduct.image"
                  type="text"
                />
                <mdb-input
                  required
                  label="Brand"
                  icon="clone"
                  v-model="editedProduct.brand"
                  type="text"
                />
                <mdb-input
                  required
                  label="Description"
                  icon="info"
                  v-model="editedProduct.description"
                  type="text"
                />
              </div>
              <div class="text-center py-2 mt-2">
                <mdb-btn color="cyan" type="submit">
                  Submit
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
export default {
  props: {
    product: {
      type: Object,
      required: false,
    },
    header: {
      type: String,
      required: true,
    },
  },

  data() {
    return {
      heading: this.header,
      editedProduct: this.product
        ? { ...this.product }
        : {
            name: "",
            price: "",
            brand: "",
            image: "",
            description: "",
          },
    };
  },

  methods: {
    onSubmit() {
      // save the product
      this.$emit("submit", this.editedProduct);
    },
  },
};
</script>
