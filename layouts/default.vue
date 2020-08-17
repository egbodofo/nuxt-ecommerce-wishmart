<template>
  <div>
    <TheMainNavigation />
    <Nuxt />
  </div>
</template>

<script>
import TheMainNavigation from '@/components/Navigation/TheMainNavigation'

export default {
  components: {
    TheMainNavigation,
  },
  created() {
    this.$store.dispatch('initAuth');
  },
}
</script>
