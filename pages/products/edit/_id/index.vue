<template>
    <PostForm :header="header" @submit="onSubmitted" :product="loadedProduct" />
</template>

<script>
import PostForm from '@/components/UI/PostForm';

export default {
  components: {
    PostForm
  },
  asyncData(context) {
    return context.app.$axios.$get('/products/' + context.params.id)
    .then(data => {
      return {
        loadedProduct: data.product
      }
    })
    .catch(e => context.error(e))
  },
  computed: {
    header() {
      return "Edit Product"
    }
  },
  methods: {
    onSubmitted(editedProduct) {
      this.$store.dispatch("editProduct", editedProduct).then(() => {
        this.$router.push("/products");
      });
    }
  }
}
</script>
