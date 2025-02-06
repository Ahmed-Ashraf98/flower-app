<script setup>
import { RouterLink } from "vue-router";
const props = defineProps({
  linkTitle: String,
  navigateTo: String,
  isActive: Boolean,
  activeClass: String,
  classes: String,
});
</script>

<template>
  <RouterLink
    :to="navigateTo"
    :class="`${classes} ${isActive ? activeClass : ''}`"
    >{{ linkTitle }}</RouterLink
  >
</template>
