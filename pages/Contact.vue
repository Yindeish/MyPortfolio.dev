<template>
  <b-row class="contact">
  <video src="../assets/videos/WhatsApp Video 2023-03-25 at 2.43.05 PM.mp4" autoplay loop></video>
  <b-container class="page animate__animated animate__fadeIn">
    <b-row class="justify-content-center">
      <b-col cols="md-6">
        <h2>Get in touch 💌</h2>

        <p class="text-left">
          If you have any question or just want to say hi, i'll try my best to
          get back to you.
        </p>

        <b-alert v-html="alertMsg" show variant="success" v-if="showAlert">
        </b-alert>

        <b-form class="mb-5" @submit.prevent="sendMessage">
          <b-form-group id="input-group-1" label="Your Name:">
            <b-form-input
              placeholder="John Doe"
              v-model="formData.name"
              @input="validateForm"
              required
            ></b-form-input>
          </b-form-group>

          <b-form-group id="input-group-2" label="Your Email:">
            <b-form-input
              v-model="formData.email"
              type="email"
              placeholder="john@doe.com"
              @input="validateForm"
              required
            ></b-form-input>
          </b-form-group>

          <b-form-group id="input-group-3" label="Your Message">
            <b-form-textarea
              v-model="formData.message"
              no-resize
              rows="3"
              placeholder="Watsup Yindeish, are you available for.."
              required
            ></b-form-textarea>
          </b-form-group>

          <b-button 
          :style="style"
          :disabled="!requiredFieldsAreFilled" type="submit">Submit</b-button>
        </b-form>
      </b-col>
    </b-row>
  </b-container>
</b-row>
</template>
<script>

export default {

  data() {
    return {
      showAlert: false,
      encription: '',
      alertMsg: '',
      formData: {
        name: "",
        email: "",
        message: ""
      },
      style: {
        backgroundcolor: '#6c757d',
        color: 'white',
        curosr: 'pointer'
      }
    };
  },
  computed: {
    requiredFieldsAreFilled() {
      return this.formData.name !== "" && this.formData.email !== "";
    }
  },
  methods: {
    validateForm() {
      if( !this.requiredFieldsAreFilled ) {
        this.style = {
          backgroundColor: 'red',
          color: 'white',
          curosr: 'not-allowed'
        }
      } else {
        this.style = {
        backgroundColor: '#6c757d',
        color: 'white',
        curosr: 'pointer'
      }
      }
    },
    async sendMessage(e) {
     this.validateForm();
      const self = this;
      var data = new FormData();

      data.append("Name", self.formData.name);
      data.append("Email", self.formData.email);
      data.append("Message", self.formData.message);

      return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open("POST", 'https://myportfoliomessages-b01c5-default-rtdb.firebaseio.com/messages.json');
        // xhr.withCredentials = true;
        xhr.responseType = 'json';
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.onload = () => {
          if( xhr.status >= 200 || xhr.status < 300) {
            resolve(xhr.response);
            this.showAlert = true;
            this.alertMsg = 
            /*html*/ 
            `
            <strong>All done 🎉</strong><br />
            Thanks. I'll reply as soon
            as i can.<br>
            Encripted with ${ this.encription }
            `;
            // form.reset();
            this.formData.name = '';
            this.formData.email = '';
            this.formData.message = '';
            setTimeout(() => {
              this.showAlert = false;
            }, 3000)
          } else {
            reject(xhr.response);
            this.showAlert = true;
            this.alertMsg = xhr.response;
            setTimeout(() => {
              this.showAlert = false;
            }, 3000)
          }
        }

        xhr.onerror = () => {
          resolve("You are offline");
          this.showAlert = true;
          this.alertMsg = "You are offline";
          setTimeout(() => {
              this.showAlert = false;
            }, 3000)
        }

        xhr.send(JSON.stringify(data));
      })
      .then(res => {
        this.encription = res.name;
      })
      .catch(err => {
        this.alertMsg = err;
      })
    }
  },
  head: {
    title: "Contact 📧 - Adeshina Adam",
    meta: [
      {
        hid: "description",
        name: "description",
        content: "Do you have any enquires? Send a message now to Adam"
      },
      {
        hid: "og:title",
        name: "og:title",
        content: "Contact 📧 - Adeshina Adam"
      },
      {
        property: "og:description",
        content: "Do you have any enquires? Send a message now to Adam"
      },
      {
        hid: "og:image",
        name: "og:image",
        content: require("@/assets/contact.jpg")
      }
    ]
  }
};
</script>
<style scoped>
.container > .row:first-child {
  margin-top: 0px;
}
.contact {
  margin-top: 0px;
  gap: 2em;
}
video {
  width: 100%;
}
form {
  margin-top: 40px;
  text-align: left;
}
</style>
