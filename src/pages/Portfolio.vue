<template>
  <div class="container">
    <section class="portfolio">
      <h2>Portfolio</h2>
    </section>
    <section class="cards">
      <div class="card">
        <div class="box">
          <img src="../assets/images/deliveboo.jpg" alt="deliveboo web app" />
        </div>
        <h4>Lorem</h4>
        <p>Testo</p>
      </div>
       <div class="card">
        <div class="box">
          <img src="../assets/images/deliveboo.jpg" alt="deliveboo web app" />
        </div>
        <h4>Lorem</h4>
        <p>Testo</p>
      </div>
       <div class="card">
        <div class="box">
          <img src="../assets/images/deliveboo.jpg" alt="deliveboo web app" />
        </div>
        <h4>Lorem</h4>
        <p>Testo</p>
      </div>
       <div class="card">
        <div class="box">
          <img src="../assets/images/deliveboo.jpg" alt="deliveboo web app" />
        </div>
        <h4>Lorem</h4>
        <p>Testo</p>
      </div>
       <div class="card">
        <div class="box">
          <img src="../assets/images/deliveboo.jpg" alt="deliveboo web app" />
        </div>
        <h4>Lorem</h4>
        <p>Testo</p>
      </div>
        <div class="card">
        <div class="box">
          <img src="../assets/images/deliveboo.jpg" alt="deliveboo web app" />
        </div>
        <h4>Lorem</h4>
        <p>Testo</p>
      </div>
        <div class="card">
        <div class="box">
          <img src="../assets/images/deliveboo.jpg" alt="deliveboo web app" />
        </div>
        <h4>Lorem</h4>
        <p>Testo</p>
      </div>
        <div class="card">
        <div class="box">
          <img src="../assets/images/deliveboo.jpg" alt="deliveboo web app" />
        </div>
        <h4>Lorem</h4>
        <p>Testo</p>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "Portfolio",
};
</script>

<style lang="scss" scoped>
.container{

}
section.portfolio {

  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url("../assets/images/hero-small.jpg");
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 25rem;
  h2 {
    z-index: 2;
    font-size: 3.125rem;
    color: white;
    font-family: "Pushster", cursive;
  }
}
section.portfolio::before {
  content: "";
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 40%;
  background: linear-gradient(to top, #6667ab, transparent);
  z-index: 1;
}
.cards {
  width: 70%;
  margin: auto;
  margin-top:3.125rem ;
   margin-bottom:3.125rem ;
  display: grid;
  grid-template-columns: repeat(4, 1fr);

  grid-gap: 1.25rem;
}
.card {
  width: 18.75rem;
  border-radius: 0.9375rem;
  overflow: hidden;
  background-color: white;
  text-align: center;
  padding: 1.25rem;
  .box {
    width: 100%;
    img {
      width: 100%;
      object-fit: cover;
    }
  }
}
</style>