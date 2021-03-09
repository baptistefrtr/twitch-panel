<template>
      <b-row>
    <b-col cols="4"></b-col>
    <b-col cols="4" style="margin-top: 13%">
      <b-card
        title="Login"
      >
        <b-input v-model="email" placeholder="Email"></b-input><br>
        <b-input v-model="password" placeholder="Password" type="password"></b-input>
        <br>
        <b-row>
            <b-col cols="4">
                <b-button @click="userLogin()" variant="outline-primary" href="#" block>Log in</b-button>
            </b-col>
            <b-col>
                <b-button @click="googleLogin()" variant="info" block>Log in with Google</b-button>
            </b-col>
        </b-row>
      </b-card>
    </b-col>
    <b-col cols="4"></b-col>
  </b-row>
</template>

<script>
import firebase from "firebase";

export default {
    data() {
    return {
      name: null,
      email: null,
      password: null,
      user: {
        name: "",
        email: "",
        password: "",
      },
    };
  },
  methods: {
    userLogin() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(() => {
          firebase.auth().onAuthStateChanged(() => {
            this.$router.push("/");
          });
        });
    },
    googleLogin() {
        const provider = new firebase.auth.GoogleAuthProvider();

        firebase.auth().signInWithRedirect(provider).then(result => {
            this.$router.replace("/");
            console.log(result);
        });
    }
  },
}
</script>

<style>

</style>