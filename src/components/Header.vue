<template>
  <div>
    <header>
      <nav class="nav-main">
        <button class="menu-mobile">
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
    </header>
  </div>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style lang="scss" scoped>
header {
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 10;
  .nav-main {
    background: linear-gradient(to bottom, #30103fb4, transparent);
    display: flex;
    color: rgb(255, 255, 255);
    position: absolute;
    width: 100%;
    top: 0;
    left: 0;
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
          color: #fff8e9;
          display: inline-block;
          margin: 0 2.5rem;
          font-family: "Lato", sans-serif;
          font-size: 1.5625rem;
        }
      }
    }
  }
}

.menu-mobile {
  border: 0;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  background-color: #3920709f;
  display: none;
  cursor: pointer;
  img:first-child {
    display: none;
  }
}
.menu-mobile:hover{
  background-color: #392070ec;
}
.menu-mobile:hover img:first-child {
  display: inline-block;
}
.menu-mobile:hover img:last-child {
  display: none;
}

@media screen and (max-width: 810px) {
  header {
    .nav-main {
      justify-content: end;
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