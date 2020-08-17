<template>
  <mdb-navbar expand="large" dark color="indigo">
    <mdb-navbar-brand to="#">Wishmart</mdb-navbar-brand>
    <mdb-navbar-toggler>
      <mdb-navbar-nav right>
        <mdb-nav-item to="/" active>Home</mdb-nav-item>
        <mdb-nav-item to="/products">Products</mdb-nav-item>
        <mdb-nav-item to="/cart">Cart</mdb-nav-item>
        <mdb-nav-item to="/login" v-if="!auth">Login</mdb-nav-item>
        <mdb-nav-item to="/register" v-if="!auth">Signup</mdb-nav-item>
        <mdb-nav-item v-if="auth" @click="onSignout">Logout</mdb-nav-item>

        <mdb-dropdown tag="li" class="nav-item">
          <mdb-dropdown-toggle
            v-if="auth"
            tag="a"
            navLink
            color="indigo"
            slot="toggle"
            waves-fixed
            >Profile</mdb-dropdown-toggle
          >
          <mdb-dropdown-menu>
            <mdb-dropdown-item>My profile</mdb-dropdown-item>
            <mdb-dropdown-item>My products</mdb-dropdown-item>
          </mdb-dropdown-menu>
        </mdb-dropdown>
      </mdb-navbar-nav>
    </mdb-navbar-toggler>
  </mdb-navbar>
</template>

<script>
import {
  mdbNavbar,
  mdbNavbarBrand,
  mdbNavbarToggler,
  mdbNavbarNav,
  mdbNavItem,
  mdbContainer,
  mdbDropdown,
  mdbDropdownToggle,
  mdbDropdownMenu,
  mdbDropdownItem
} from "mdbvue";

export default {
  name: "Navigation",
  computed: {
    auth() {
      return this.$store.getters.isAuthenticated;
    }
  },
  components: {
    mdbNavbar,
    mdbNavbarBrand,
    mdbNavbarToggler,
    mdbNavbarNav,
    mdbNavItem,
    mdbDropdown,
    mdbDropdownToggle,
    mdbDropdownMenu,
    mdbDropdownItem
  },
  computed: {
    auth() {
      return this.$store.getters.isAuthenticated;
    }
  },
  methods: {
    onSignout() {
      this.$store.dispatch("logout");
      this.$router.push("/");
    }
  }
};
</script>

<style scoped>
.log {
  padding-top: 15px;
  padding-right: 15px;
  padding-left: 15px;
  cursor: pointer;
}
</style>
