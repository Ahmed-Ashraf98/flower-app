<style lang="scss" scoped>
.navbar {
  padding: 16px 80px;

  // Org logo

  &__org-logo-container {
    max-width: 86px;
    width: 86px;
    &__img {
      width: 100%;
    }
  }

  // Menue Items

  &__menu {
    list-style: none;
    &__item {
      padding-right: 10px;
      &__link {
        text-decoration: none;
        color: var(--accent-color);
        &.activeLink {
          color: var(--primary-color);
        }
      }
    }
    &__item:last-child {
      padding: 0;
    }
  }

  &__options__icon {
    position: relative;
    &__count {
      position: absolute;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 0.8rem;
      width: 18px;
      height: 18px;
      bottom: 20px;
      left: 12px;
      background-color: var(--primary-color);
      color: #fff;
      padding: 0 5px;
      border-radius: 50px;
    }
  }

  // Collapsed Items

  &__collapsed-menu.v-btn {
    height: auto;
    padding: 0;
    box-shadow: none;
    min-width: unset;
  }
}
</style>

<script lang="ts" setup>
//  ============ [ Imports ] ==========
import { useRoute } from "vue-router";
import logo from "@/assets/images/logo.png";
import heartIcon from "@/assets/icons/heart.png";
import bagIcon from "@/assets/icons/bag.png";
import menuIcon from "@/assets/icons/menu-icon.png";
import NavbarMenuItem from "../ui/NavbarMenuItem.vue";
import type { NavbarItem } from "@/interfaces/navbar.interface";
import { useCartStore } from "@/stores/cart";
import { useFavouriteStore } from "@/stores/favourite";

// ============= [ Call State ] ================
const cartStore = useCartStore();
const favStore = useFavouriteStore();
//  ============ [ Logic ] ==========
const menuItemsList: NavbarItem[] = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "All Category",
    path: "/categories",
  },
  {
    title: "About",
    path: "/about",
  },
  {
    title: "Contact",
    path: "/contact",
  },
];

const isActiveLink = (routePath: string) => {
  const route = useRoute();
  return route.path === routePath;
};
</script>

<template>
  <nav class="navbar d-flex justify-space-between align-center">
    <figure class="navbar__org-logo-container">
      <v-img
        class="navbar__org-logo-container__img"
        aspect-ratio="1/1"
        cover
        :src="logo"
      ></v-img>
    </figure>
    <ul class="d-none d-md-flex navbar__menu">
      <li v-for="item in menuItemsList" class="navbar__menu__item">
        <NavbarMenuItem
          :navigateTo="item.path"
          classes="navbar__menu__item__link"
          activeClass="activeLink"
          :isActive="isActiveLink(item.path)"
          :linkTitle="item.title"
        />
      </li>
    </ul>
    <ul class="navbar__options d-flex justify-space-center align-center">
      <figure class="navbar__options__icon pr-5">
        <v-img :width="20" aspect-ratio="1/1" cover :src="heartIcon"></v-img>
        <figcaption class="navbar__options__icon__count">
          <span>{{ favStore.getFavItemsCount }}</span>
        </figcaption>
      </figure>
      <figure class="navbar__options__icon">
        <v-img :width="20" aspect-ratio="1/1" cover :src="bagIcon"></v-img>
        <figcaption class="navbar__options__icon__count">
          <span>{{ cartStore.getCartItemsCount }}</span>
        </figcaption>
      </figure>
    </ul>

    <v-btn class="navbar__collapsed-menu d-flex d-md-none" color="">
      <figure class="collapsed-menu__icon-box">
        <v-img
          class="collapsed-menu__icon-box__img"
          :width="20"
          aspect-ratio="1/1"
          cover
          :src="menuIcon"
        ></v-img>
      </figure>
      <v-menu activator="parent">
        <v-list>
          <v-list-item>
            <v-list-item-title v-for="item in menuItemsList">
              <NavbarMenuItem
                :navigateTo="item.path"
                classes="navbar__menu__item__link"
                activeClass="activeLink"
                :isActive="isActiveLink(item.path)"
                :linkTitle="item.title"
              />
            </v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-btn>
  </nav>
</template>
