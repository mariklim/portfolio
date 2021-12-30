<template>
  <div>
    <section>
      <Hero />
    </section>
    <section class="container">
      <div class="col-left">
        <h1>Ciao!</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
          tenetur in consectetur voluptatum vero! Eius reiciendis quas enim,
          quae aliquid porro. Et quis autem temporibus est minus nihil maxime
          quas. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque
          nostrum iure tenetur aliquid. Eum, corrupti. Molestias, blanditiis
          quaerat.
        </p>
      </div>
      <div class="col-right"></div>
    </section>
  </div>
</template>

<script>
import Hero from "../components/Hero.vue";
export default {
  name: "Home",
  components: {
    Hero,
  },
};
</script>

<style lang="scss" scoped>
.container{
  display: flex;
  padding: 6.25rem 0;
  width: 70%;
  margin: auto;

  .col-left {
    padding-right: 2.5rem;
    width: 60%;
    color: #fee9bc;
    font-family: "Lato", sans-serif;
    h1 {
      font-size: 3.75rem;
    }
    p {
      font-size: 1.25rem;
      line-height: 1.875rem;
    }
  }
  .col-right {
    width: 40%;
    height: 25rem;
    background-image: url("../assets/images/girl1.png");
    background-size: contain;
    background-repeat: no-repeat;
  }
}

// .girl-img{
// min-width: 25rem;

//   img{
//     width: 100%;
//   }
// }
</style>