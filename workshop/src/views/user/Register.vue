<template>
  <b-row>
    <b-col cols="4"></b-col>
    <b-col cols="4" style="margin-top: 13%">
      <b-card
        title="Register"
      >
        <b-input v-model="name" placeholder="Username"></b-input><br>
        <b-input v-model="email" placeholder="Email"></b-input><br>
        <b-input v-model="password" placeholder="Password" type="password"></b-input>
        <br>
        <b-row>
            <b-col cols="4">
                <b-button @click="userRegistration()" variant="outline-primary" href="#" block>Register</b-button>
            </b-col>
            <b-col>
                <b-button @click="googleLogin()" variant="info" block>Register with Google</b-button>
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
  created() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.user = user;
        this.initBdd();
      } else {
        this.user = null;
      }
    });
  },
  methods: {
    initBdd() {
      const db = this.$firebase.firestore();
      db.collection("users").doc(this.user.uid);
      db.collection("users")
        .doc(this.user.uid)
        .set({
          createdID: this.user.uid,
          userVerified: 0,
          twitchUser: null,
        })
        .then(() => {
          this.$router.push("/");
          location.reload();
        });
    },
    userRegistration() {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.email, this.password)
        .then((res) => {
          const user = firebase.auth().currentUser;
          user.sendEmailVerification().then(() => {
            console.log("Mail envoyé !");
          });
          res.user
            .updateProfile({
              displayName: this.name,
            })
            .then(() => {
              this.$router.push("/register");
            });
        });
    },
    googleLogin() {
      const provider = new firebase.auth.GoogleAuthProvider();

      firebase
        .auth()
        .signInWithRedirect(provider)
        .then((result) => {
          this.$router.replace("/register");
          console.log(result);
        });
    },
  },
};
</script>

<style>
</style>