<template>
  <div class="container">
    <form @submit.prevent="sendEmail">
      <label>Name</label>
      <input
          type="text"
          v-model="name"
          name="name"
          placeholder="Your Name"
      >
      <label>Email</label>
      <input
          type="email"
          v-model="email"
          name="email"
          placeholder="Your Email"
      >
      <router-link to="/step10">
        <button  style="height: 48px; width: 100%;"
                 class="button"
                 name="next" type="submit"  :disabled="!this.email ||!this.name" >
          CONTINUE
        </button>
      </router-link>
    </form>
  </div>
</template>
<script>

import emailjs from 'emailjs-com';

export default {
  name: 'Step9',

  data() {
    return {
      name: '',
      email: '',
      message: 'qqqqqqqqqqqqqqqqqqqqqqqqqqqq'
    }
  },

  methods: {
    sendEmail(e) {
      try {
        emailjs.sendForm('service_4vlc0dh', 'template_rzw419o', e.target, 'user_RJkbmNr8UMMt8jSd1hh4l', {
          name: this.name,
          email: this.email,
          message: this.message
        })
        console.log('it works!!!')
      } catch (error) {
        console.log({error})
      }
      // Reset form field
      this.name = ''
      this.email = ''

    },
  }
}
</script>

<style scoped>
* {
  box-sizing: border-box;
}

label {
  float: left;
}

input[type=text], [type=email], textarea {
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  margin-top: 6px;
  margin-bottom: 16px;
  resize: vertical;
}

input[type=submit] {
  background-color: #4CAF50;
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

input[type=submit]:hover {
  background-color: #b8c7b9;
}

.container {
  display: block;
  margin: auto;
  text-align: center;
  border-radius: 5px;
  background-color: #f2f2f2;
  padding: 20px;
  width: 50%;
}
</style>