<template>
  <navbar-component></navbar-component>
  <router-view />
  <footer-component></footer-component>
</template>
<script setup>
import NavbarComponent from "./pages/components/Navbar.vue"
import FooterComponent from "./pages/components/Footer.vue"
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');

body {
  font-family: "Poppins", sans-serif;
}
</style>