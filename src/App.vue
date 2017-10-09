<template>
  <div id="app">
     <h1>Bike Spotting V1.2</h1>
      <p>
         <!-- use router-link component for navigation. -->
         <!-- specify the link by passing the `to` prop. -->
         <!-- `<router-link>` will be rendered as an `<a>` tag by default -->
         <router-link to="/map">Map</router-link>
         <router-link to="/about">About</router-link>
     </p>
     <!-- route outlet -->
     <!-- component matched by the route will render here -->
     <router-view></router-view>

    <div class="row">
      <div class="small-2 large-4 columns"><span>CONTENT</span></div>
      <div class="small-4 large-4 columns"><span>CONTENT</span></div>
      <div class="small-6 large-4 columns"><span>CONTENT</span></div>
    </div>
    <div class="row">
      <div class="large-3 columns"><span>CONTENT</span></div>
      <div class="large-6 columns"><span>CONTENT</span></div>
      <div class="large-3 columns"><span>CONTENT</span></div>
    </div>
    <div class="row">
      <div class="small-6 large-2 columns"><span>CONTENT</span></div>
      <div class="small-6 large-8 columns"><span>CONTENT</span></div>
      <div class="small-12 large-2 columns"><span>CONTENT</span></div>
    </div>
    <div class="row">
      <div class="small-3 columns"><span>CONTENT</span></div>
      <div class="small-9 columns"><span>CONTENT</span></div>
    </div>
    <div class="row">
      <div class="large-4 columns"><span>CONTENT</span></div>
      <div class="large-8 columns"><span>CONTENT</span></div>
    </div>
    <div class="row">
      <div class="small-6 large-5 columns"><span>CONTENT</span></div>
      <div class="small-6 large-7 columns"><span>CONTENT</span></div>
    </div>
    <div class="row">
      <div class="large-6 columns"><span>CONTENT</span></div>
      <div class="large-6 columns"><span>CONTENT</span></div>
    </div>

     <div >
       <a href="https://www.contentful.com/" rel="nofollow" target=“_blank” ><img src="https://images.contentful.com/fo9twyrwpveg/44baP9Gtm8qE2Umm8CQwQk/c43325463d1cb5db2ef97fca0788ea55/PoweredByContentful_LightBackground.svg" alt="Powered by Contentful" width="100px" /></a>
     </div>

  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

.router-link-exact-active {
    font-weight: bold;
}


</style>
