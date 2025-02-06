<script setup>
import logo from "@/assets/images/logo.png";
</script>

<template>
  <nav class="navbar">
    <v-img :width="86" aspect-ratio="1/1" cover :src="logo"></v-img>
    <ul class="d-flex">
      <li>Home</li>
      <li>All Category</li>
      <li>About</li>
      <li>Contact</li>
    </ul>
  </nav>
</template>
