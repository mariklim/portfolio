<template>
  <div>
    <header>
      <nav class="nav-main">
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Chi sono</a>
          </li>
          <li>
            <a href="#">Portfolio</a>
          </li>
          <li>
            <a href="#">Contatti</a>
          </li>
        </ul>
      </nav>
    </header>
    <section>
      <img src="../assets/images/bg.jpg" id="bg" alt="" />
      <img src="../assets/images/sun.png" id="sun" alt="" />
      <img src="../assets/images/m1.png" id="m1" alt="" />
      <img src="../assets/images/m2.png" id="m2" alt="" />
      <img src="../assets/images/m3.png" id="m3" alt="" />
      <img src="../assets/images/m4.png" id="m4" alt="" />
      <img src="../assets/images/m5.png" id="m5" alt="" />
      <img src="../assets/images/m6.png" id="m6" alt="" />
      <h2 id="text">Hello World!</h2>
      <img src="../assets/images/light.png" id="light" alt="" />
    </section>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
body {
  background: #30103f;
  min-height: 93.75rem;
}

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
          color: #ffffff;
          display: inline-block;
          margin: 0 2.5rem;
          font-family: "Lato", sans-serif;
          font-size: 1.5625rem;
        }
      }
    }
  }
}

section {
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    pointer-events: none;
  }
}

section::before {
  content: "";
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 50%;
  background: linear-gradient(to top, #30103f, transparent);
  z-index: 9;
}

#text {
  position: relative;
  font-size: 4.375rem;
  z-index: 1;
  background: -webkit-linear-gradient(bottom, #30103fd8 20%, #fb7719d7 77.84%);
  -webkit-background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-family: "Pushster", cursive;
}

#m4 {
  z-index: 2;
}
#m6 {
  z-index: 3;
}
</style>