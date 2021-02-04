<template>
  <div id="app">
    <div id="nav">
      <b-navbar toggleable="lg" type="dark" class="navbar">
        <b-navbar-brand href="/">Home</b-navbar-brand>
        <b-navbar-brand href="/recent-search">Recent search</b-navbar-brand>
        <div class="header">
          <h1>
            <img src="/img/icons/weather.png" width="40px" />
            WeatherNow
          </h1>
        </div>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav></b-navbar-nav>

          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto"></b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
    <router-view />
  </div>
</template>
 <script>
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

.navbar {
  background-color: rgba(58, 113, 214, 0.678);
}

#nav a {
  font-weight: bold;
  color: #274c70;
  font-size: 20px;
}

.home {
  background-image: url("/sky.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  color: black;
  font-size: 20px;
}

.maindiv {
  margin-top: 150px;
  padding: 20px;
}
.dateday {
  padding: 20px;
  background-color: rgba(82, 169, 228, 0.3);
  width: 200px;
  margin-top: 0px;
  color: white;
}
.cloudicon {
  background-size: 50px;
}
.header {
  text-align: center;
}
.Recent-search {
  margin-top: 0px;
  font-style: italic;
  padding: 20px;
  background-color: rgba(191, 225, 253, 0.719);
  border: solid 1px black;
  height: 100vh;
}
.cursorPointer {
  cursor: pointer;
}
</style>
