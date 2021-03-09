<template>
  <b-row style="margin-top: 10%; text-align: center">
    <b-col cols="3"></b-col>
    <b-col cols="6">
      <b-card>
        <b-card-title style="margin-bottom: 5%"> Contact form </b-card-title>
        <b-input-group prepend="Email" class="mt-3">
          <b-form-input v-model="email"></b-form-input>
        </b-input-group>
        <b-input-group prepend="Username" class="mt-3">
          <b-form-input v-model="username"></b-form-input>
        </b-input-group>
        <b-input-group prepend="Message" class="mt-3">
          <b-form-input v-model="message"></b-form-input>
        </b-input-group>
        <br />
        <b-button @click="sendMail()" pill variant="outline-primary">Submit</b-button>
      </b-card>
    </b-col>
    <b-col cols="3"></b-col>
  </b-row>
</template>

<script>
import emailjs from "emailjs-com";

export default {
  data() {
    return {
      username: "",
      email: "",
      message: "",
    };
  },
  methods: {
    sendMail() {
      emailjs
        .send(
          "service_ranl2il",
          "template_7mrerg7",
          {
            name: this.username,
            email: this.email,
            message: this.message,
          },
          "user_YI9458H3GSgaBYynbKmaC"
        )
        .then(
          function (response) {
            console.log("SUCCESS!", response.status, response.text);
          },
          function (error) {
            console.log("FAILED...", error);
          }
        );
    },
  },
};
</script>

<style>
</style>