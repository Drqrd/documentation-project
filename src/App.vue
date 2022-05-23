<template>
  <div class="container">
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
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

.container {
  background-color:gray;

  border-right: 2px outset;
  border-bottom: 4px outset;
  border-radius: 5px;

  margin: 10px;
  padding: 10px;
}
</style>
