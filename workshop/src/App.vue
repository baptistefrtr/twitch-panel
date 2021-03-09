<template>
  <div id="app">
    <b-row>
      <b-col>
        <b-navbar toggleable="sm" type="light" variant="light">
          <b-navbar-toggle target="nav-text-collapse"></b-navbar-toggle>
          <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

          <b-navbar-brand><a href="/"> Twitch Panel</a></b-navbar-brand>

          <b-navbar-nav class="ml-auto" v-if="user != null">
            <b-nav-form>
              <router-link to="/contact" style="padding-right: 10px"
                >Contact</router-link
              >
              <router-link to="/profile" style="padding-right: 10px"
                >
                <b-button variant="outline-primary"
                  ><svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-person"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"
                    /></svg></b-button
              ></router-link>
              <button type="button" class="btn btn-danger" @click="logOut()">
            <svg
              width="1em"
              height="1em"
              viewBox="0 0 16 16"
              class="bi bi-person-dash-fill"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm5-.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5z"
              />
            </svg>
          </button>
            </b-nav-form>
          </b-navbar-nav>



          <b-navbar-nav class="ml-auto" v-if="user == null">
            <b-nav-form>
              <router-link to="/register" style="padding-right: 10px">Register</router-link>
              <router-link to="/login" style="padding-right: 10px"
                >Login</router-link
              >
              <router-link to="/profile" style="padding-right: 10px"
                >
                <b-button variant="outline-primary"
                  ><svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-person"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"
                    /></svg></b-button
              ></router-link>
            </b-nav-form>
          </b-navbar-nav>
        </b-navbar>
      </b-col>
    </b-row>
    <router-view />
  </div>
</template>

<script>
import firebase from "firebase";

export default {
  data() {
    return {
      user: null,
      testDocument: [],
    };
  },
  created() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.user = user;
        console.log(user.uid);
      } else {
        this.user = null;
      }
    });
  },
  methods: {
    logOut() {
      firebase
        .auth()
        .signOut()
    },
  },
}
</script>

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
