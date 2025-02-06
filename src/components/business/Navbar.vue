<style lang="scss" scoped>
.navbar {
  &__menu {
    list-style: none;

    &__item {
      color: var(--accent-color);
    }
  }
}

.activeLink {
}
</style>

<script setup>
import { RouterLink, useRoute } from "vue-router";
import logo from "@/assets/images/logo.png";

const isActiveLink = (routePath) => {
  const route = useRoute();
  return route.path === routePath;
};
</script>

<template>
  <nav class="navbar">
    <v-img :width="86" aspect-ratio="1/1" cover :src="logo"></v-img>
    <ul class="d-none d-md-flex navbar__menu">
      <li class="navbar__menu__item">
        <RouterLink
          to="/"
          :class="`navbar__menu__item__link ${
            isActiveLink('/') ? 'activeLink' : ''
          }`"
          >Home</RouterLink
        >
      </li>
      <li>
        <RouterLink
          to="/categories"
          :class="`${isActiveLink('/categories') ? '' : ''}`"
          >All Category</RouterLink
        >
      </li>
      <li>
        <RouterLink to="/about" :class="`${isActiveLink('/about') ? '' : ''}`"
          >About</RouterLink
        >
      </li>
      <li>
        <RouterLink
          to="/contact"
          :class="`${isActiveLink('/contact') ? '' : ''}`"
          >Contact</RouterLink
        >
      </li>
    </ul>
  </nav>
</template>
