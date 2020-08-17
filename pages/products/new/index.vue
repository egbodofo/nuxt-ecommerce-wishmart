<template>
    <PostForm :header="header" @submit="onSubmitted" />
</template>

<script>
import PostForm from '@/components/UI/PostForm';

export default {
  components: {
    PostForm
  },
  computed: {
    header() {
      return "Create New Product"
    }
  },
  methods: {
    onSubmitted(postData) {
      this.$store.dispatch("addProduct", postData).then(() => {
        this.$router.push("/");
      });
    }
  }
}
</script>
