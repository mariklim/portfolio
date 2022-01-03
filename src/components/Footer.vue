<template>
  <footer>
    <div class="row">
      <small> Powered By Maria Klimenko with </small>
      <img src="../assets/images/heart.svg" alt="heart" />
      <!-- <div>
        <ul>
          <li>
            <a href="https://www.linkedin.com/in/klimenkomaria/">
              <img
                src="../assets/images/linkedin.png"
                target="_blank"
                alt="linkedin"
              />
            </a>
          </li>
          <li>
            <a href="https://github.com/mariklim">
              <img
                src="../assets/images/github.png"
                target="_blank"
                alt="github"
              />
            </a>
          </li>
        </ul>
      </div> -->
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "../assets/style/common";
footer {
  background-color: $mainColorBlu;
  position: fixed;
  width: 100%;
  bottom:0;
  .row {
    padding: 0.9375rem 0 ;
    text-align: center;
    color: $mainColorLight;
    ul {
      list-style: none;
      display: flex;
      justify-content: center;
      li {
        margin: 0.625rem 0.3125rem;
      }
    }
    img {
      display: inline-block;
      width: .9375rem;
      vertical-align: middle;
    }
  }
}
</style>