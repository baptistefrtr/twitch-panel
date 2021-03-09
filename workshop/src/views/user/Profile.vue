<template>
  <b-row style="margin-top: 2%">
    <b-col cols="1"></b-col>
    <b-col cols="5">
      <b-card>
        <b-card-title>
          Profile info
        </b-card-title>
      </b-card>
    </b-col>
    <b-col cols="5">
      <b-card>
        <b-card-title>
          Profile settings
        </b-card-title>
      </b-card>
    </b-col>
    <b-col cols="1"></b-col>
  </b-row>
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
}
</script>