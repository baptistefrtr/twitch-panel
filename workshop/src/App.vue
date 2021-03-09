<template>
  <div id="app">
    <b-row>
      <b-col>
        <b-navbar toggleable="sm" type="light" variant="light">
          <b-navbar-toggle target="nav-text-collapse"></b-navbar-toggle>
          <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

          <b-navbar-brand><a href="/">
          Twitch Panel</a></b-navbar-brand>

          <b-navbar-nav class="ml-auto">
            <b-nav-form>
              <router-link to="/" style="padding-right: 10px">Home</router-link>
              <router-link to="/about" style="padding-right: 10px">Settings</router-link>
              <router-link to="/contact">Contact</router-link>
            </b-nav-form>
          </b-navbar-nav>
        </b-navbar>
      </b-col>
    </b-row>
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
