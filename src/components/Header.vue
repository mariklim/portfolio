<template>
  <header>
    <nav class="nav-main">
      <button class="menu-mobile" @click="showMenu()">
        <img src="../assets/images/menu_open.svg" />
        <img src="../assets/images/menu.svg" />
      </button>
      <ul class="desktop">
        <li>
          <router-link class="spacing" to="/">Home</router-link>
        </li>
        <li>
          <router-link class="spacing" to="/about">Chi sono</router-link>
        </li>
        <li>
          <router-link class="spacing" to="/portfolio">Portfolio</router-link>
        </li>
        <li>
          <router-link class="spacing" to="/contacts">Contatti</router-link>
        </li>
      </ul>
    </nav>
    <nav class="nav-mobile">
      <ul class="mobile" :class="{ 'show-element': displayElement }">
        <li>
          <router-link class="spacing" to="/">Home</router-link>
        </li>
        <li>
          <router-link class="spacing" to="/about">Chi sono</router-link>
        </li>
        <li>
          <router-link class="spacing" to="/portfolio">Portfolio</router-link>
        </li>
        <li>
          <router-link class="spacing" to="/contacts">Contatti</router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      displayElement: false,
    };
  },
  methods: {
    showMenu() {
      this.displayElement = !this.displayElement;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/style/common";
header {
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 10;
  .nav-main {
    display: flex;
    color: $mainColorLight;
    width: 100%;
    height: 5rem;
    justify-content: center;
    align-items: center;
    ul.desktop {
      display: flex;
      list-style: none;
      li {
        list-style: none;
        a {
          text-decoration: none;
          color: $mainColorLight;
          display: inline-block;
          margin: 0 2.5rem;
          font-family: "Lato", sans-serif;
          font-size: 1.5625rem;
        }
      }
    }
  }

  .mobile {
    position: absolute;
    top: 0;
    visibility: hidden;
    background-color: transparent;
    height: 100vh;
    width: 25%;
    transition: all 0.4s ease;
    padding: 6.25rem 1.875rem;
    a {
      color: transparent;
      padding: 0.9375rem 0;
      display: inline-block;
      font-size: 1.25rem;
    }
  }
  .show-element {
    visibility: visible;
    position: absolute;
    top: 0;
    width: 50%;
    height: 100vh;
    padding: 6.25rem 1.875rem;
    background-color: #6667abde;
    -webkit-box-shadow: 8px 7px 10px -12px #000000;
   
    
    a {
      color: $mainColorLight;
      padding: 0.9375rem 0;
    }
  }
}

.menu-mobile {
  z-index: 20;
  border: 0;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  background-color: $mainColorBlu200;
  display: none;
  cursor: pointer;
  img:first-child {
    display: none;
  }
}
.menu-mobile:hover {
  background-color: $mainColorBlu;
}
.menu-mobile:hover img:first-child {
  display: inline-block;
}
.menu-mobile:hover img:last-child {
  display: none;
}
@media screen and (min-width: 811px) {
  header .show-element {
    visibility: hidden;
  }
}

@media screen and (max-width: 810px) {
  header {
    .nav-main {
      justify-content: start;
      padding: 1.875rem;
      ul.desktop {
        display: none;
      }
    }
  }
  .menu-mobile {
    display: inline-block;
  }
}
</style>