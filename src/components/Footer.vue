<template>
  <footer>
    <div class="row">
      <p>
        <small> Powered By Maria Klimenko with <span>&#10084;</span> </small>
      </p>
      <div>
          <ul>
              <li>
                  <a href="https://www.linkedin.com/in/klimenkomaria/">
                      <img src="../assets/images/linkedin.png" target="_blank" alt="linkedin" />    
                  </a>
              </li>
               <li>
                  <a href="https://github.com/mariklim">
                       <img src="../assets/images/github.png" target="_blank" alt="github"/>
                  </a>
              </li>
          </ul>

      </div>
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
footer {
   background-color: #331444;
  .row{
  padding: 0.9375rem 0 0 0;
  text-align: center;
  color: #fff8e9;
  ul{
      list-style: none;
      display: flex;
      justify-content: center;
      li{
          margin: .625rem .3125rem;
      }
  }
  }
}
  
</style>