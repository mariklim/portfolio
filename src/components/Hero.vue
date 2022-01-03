<template>
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
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@import "../assets/style/common";

section {
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  // margin-bottom: 6.25rem;
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
  background: linear-gradient(to top, #6667AB, transparent);
  z-index: 9;
}

#text {
  position: relative;
  font-size: 3.125rem;
  z-index: 1;
 color: #fffff9;
  font-family: "Pushster", cursive;
}

#m4 {
  z-index: 2;
}
#m6 {
  z-index: 3;
}

@media screen and (max-width: 810px) {
section{
  height: 50vh;
  #text{
    font-size: 3.125rem;
  }
}
}
@media screen and (max-width: 414px) {
 section{
  height: 30vh;
   #text{
    font-size: 2.8125rem;
  }
}
}
</style>