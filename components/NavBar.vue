<template>
  <b-navbar toggleable="lg" fixed="top" type="light" variant="light">
    <b-navbar-brand tag="h1" to="/" style="font-weight: bolder;"
      ><span> Umar Designer <svg class="logo" style="width: 20px; height: 20px;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M443.9 128v256L218 512 0 384V169.7l87.6 45.1v117l133.5 75.5 135.8-75.5v-151l-101.1-57.6 87.6-53.1L443.9 128zM308.6 49.1L223.8 0l-88.6 54.8 86 47.3 87.4-53z"/></svg> </span></b-navbar-brand
    >
    <b-navbar-toggle
      target="nav-collapse"
      style="border-radius: 0;"
    ></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav class="animate__animated animate__fadeInDown">
      <b-navbar-nav>
        <b-nav-item to="/">Home</b-nav-item>
        <b-nav-item to="/about">About</b-nav-item>
        <b-nav-item to="/projects">Projects</b-nav-item>
        <b-nav-item
          href="#"
          v-if="themeMode == 'dark'"
          @click="toggleDarkMode"
          class="moon-icon"
          title="Toggle Darkmode"
        >
          <SunnyIcon style="color: #000;font-size: 20px;" />
        </b-nav-item>
        <b-nav-item
          href="#"
          v-else
          @click="toggleDarkMode"
          class="moon-icon"
          title="Toggle Darkmode"
        >
          <MoonIcon style="color: #eee;font-size: 20px;" />
        </b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
require("vue-ionicons/ionicons.css");
import SunnyIcon from "vue-ionicons/dist/md-sunny.vue";
import MoonIcon from "vue-ionicons/dist/md-moon.vue";
export default {
  name: "NavBar",
  components: {
    SunnyIcon,
    MoonIcon
  },
  data() {
    return {
      themeMode: ""
    };
  },
  methods: {
    toggleDarkMode() {
      if (
        localStorage.themeMode !== undefined &&
        localStorage.themeMode != "dark"
      ) {
        localStorage.themeMode = "dark";
        document.body.classList.toggle("dark");
        document.querySelector("nav").classList.toggle("navbar-light");
        document.querySelector("nav").classList.toggle("bg-light");
        document.querySelector("nav").classList.toggle("navbar-dark");
        document.querySelector("nav").classList.toggle("bg-dark");
        this.themeMode = "dark";
        document.body.style.backgroundImage = "url(/_nuxt/assets/bg.svg)";
        document.body.style.backgroundColor = "unset";
        document.querySelector('.logo').style.fill = "#000";

      } else {
        localStorage.themeMode = "light";
        document.body.classList.toggle("dark");
        this.themeMode = "light";
        document.querySelector("nav").classList.toggle("navbar-dark");
        document.querySelector("nav").classList.toggle("bg-dark");
        document.querySelector("nav").classList.toggle("navbar-light");
        document.querySelector("nav").classList.toggle("bg-light");
        document.body.style.backgroundImage = "unset";
        document.body.style.backgroundColor = "#0A192F";
        document.querySelector('.logo').style.fill = "#fff";
      }
    }
  },
  mounted(){
    this.themeMode = localStorage.themeMode;
  }
};
</script>
<style scoped>
.dark-theme {
  background-image: unset;
  background-color: #0A192F;
}
.navbar-nav {
  margin-left: 100px;
}
@media screen and (max-width: 420px) {
  .navbar-nav {
    margin-left: 0px;
  }
}
.nav-item {
  font-size: 14px;
  margin: 15px;
  border-radius: 2px;
}
.nav-link {
  color: #000 !important;
  text-decoration: none;
}

.navbar-dark .nav-link {
  color: #fff !important;
}

.nav-link:hover,
.nav-link:active {
  color: dodgerblue !important;
}

.navbar-nav .nuxt-link-exact-active
{
  color: dodgerblue !important;
}
.moon-icon {
  color: #000;
}
.moon-icon:hover {
  background: transparent !important;
}
.bg-light {
  background-color: #ffffff !important;
}
</style>
