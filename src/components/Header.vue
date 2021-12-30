<template>
  <div>
    <header>
      <nav class="nav-main">
        <ul>
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
    ul {
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


</style>