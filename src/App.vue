<template>
  <div class="background">
    <HeaderObject text="Documentation Project"/>
    <router-view></router-view>
  </div>
</template>

<script>
import HeaderObject from './components/HeaderObject'


export default {
  name: 'App',
  components: {
    HeaderObject
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400&display=swap');

:root {
  --darkgray: rgb(100,100,100);
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: 'Poppins', 'sans-serif';
}

#app, body, html {
  height: 100%;
}

.background {
  background-color: gray;

  height: 100%;
}

.container {
  background-color: lightgray;

  border-right: 2px outset;
  border-bottom: 3px outset;

  border-radius: 5px;

  margin: 10px;
  padding: 10px;
}
</style>
