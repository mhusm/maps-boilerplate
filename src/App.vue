<template>
  <div id="app">
     <h1>Bike Spotting</h1>
      <p>
         <!-- use router-link component for navigation. -->
         <!-- specify the link by passing the `to` prop. -->
         <!-- `<router-link>` will be rendered as an `<a>` tag by default -->
         <router-link to="/map/default">Default</router-link>
         <router-link to="/map/silver">Silver</router-link>
         <router-link to="/map/night">Night</router-link>
         <router-link to="/map/retro">Retro</router-link>
         <router-link to="/map/hiding">Hiding</router-link>
     </p>
     <!-- route outlet -->
     <!-- component matched by the route will render here -->
     <router-view></router-view>
     <a href="https://www.contentful.com/" rel="nofollow" target=“_blank” id="contentful"><img src="https://images.contentful.com/fo9twyrwpveg/44baP9Gtm8qE2Umm8CQwQk/c43325463d1cb5db2ef97fca0788ea55/PoweredByContentful_LightBackground.svg" alt="Powered by Contentful" width="100px" /></a>

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


#contentful {
    position: absolute;
    bottom: 0;
    left: 0;
}

.router-link-exact-active {
    font-weight: bold;
}

</style>
