<template>
  <div>
    <section>
      <Hero />
    </section>
    <section class="container">
      <div class="col-left">
        <h3>Ciao!</h3>
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
@import "../assets/style/common";
.container {
  display: flex;
  padding: 3.125rem 0 5rem 0;
  width: 70%;
  margin: auto;
  color: $mainColorLight;

  .col-left {
    padding-right: 2.5rem;
    width: 60%;

    font-family: "Lato", sans-serif;
    h3 {
      font-size: 2.5rem;
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

@media screen and (max-width: 810px) {
  .container {
    flex-direction: column;
    .col-left,
    .col-right {
      width: 100%;
    }
  .col-left {
    padding-right: 0;
    margin-bottom: 2.5rem;
    h1 {
      font-size: 2.5rem;
    }
    p {
      font-size: 1rem;
    }
  }
  .col-right{
    height: 18.75rem
  }
  }
}
</style>