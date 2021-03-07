<template>
  <div>
    <main class="licenseRevoked">
      <form id="signIn" class="form">
        <div class="wrap active" id="step7">
          <div class="content">
            <h2 class="title">
              Phone number
            </h2>

            <div class="step-wrap">
              <div class="form_label">
                <div class="form_label_head">
                  <div>
                    Enter your phone number
                  </div>
                </div>
              </div>
            </div>
            <div class="form_label">
              <span class="form_span">Phone</span>
              <b-col xl="12" style="padding: 0">
                <masked-input v-model="changePhone" mask="\+972 (11) 111-1111" placeholder="Phone number"
                              type="tel"
                              @input="changeInput"
                              size="xl"
                              minlength="11"
                />
              </b-col>
            </div>
            <router-link to="/step8">
              <button style="height: 48px; width: 100%;"
                      class="button"
                      name="next" type="submit" @click="submitPhone" :disabled="!this.submitEnabled">
                CONTINUE
              </button>
            </router-link>
          </div>
        </div>
      </form>
    </main>
  </div>
</template>

<script>

import MaskedInput from "vue-masked-input/dist/maskedInput";

export default {
  name: "Step7",
  data() {
    return {
      randomnumber:'',
      changePhone: '',
      telTrue: false,
      submitEnabled:false
    };
  },
  components: {
    MaskedInput
  },
  methods: {
    changeInput(a,b) {

      console.log(b[b.length-1])

      this.submitEnabled = ( b && b[b.length-1] !== "_" )
    },
    submitPhone() {
      this.randomnumber = (Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000);
      const step7 = {
        randomnumber: this.randomnumber,
      }
      console.log(step7)
      this.$store.dispatch('addFormStep7', step7)

      var axios = require('axios');
      var qs = require('qs');
      var data = qs.stringify({
        'To': '+972538478501',
        'Body': `${this.randomnumber}`,
        'From': '+12029027242'
      });
      var config = {
        method: 'post',
        url: 'https://api.twilio.com/2010-04-01/Accounts/AC6581a79063f2d32cd04faa64ced3440f/Messages.json',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Authorization': 'Basic QUM2NTgxYTc5MDYzZjJkMzJjZDA0ZmFhNjRjZWQzNDQwZjo3NDAwMzlmMTYyYTAxODhmMTAwNjAwM2EzZjNmZTQ4Mw=='
        },
        data: data
      };
      axios(config)
          .then(function (response) {
            console.log(JSON.stringify(response.data));
          })
          .catch(function (error) {
            console.log(error);
          });

      // const Nexmo = require('nexmo');
      //
      // const nexmo = new Nexmo({
      //   apiKey: '00f7983b',
      //   apiSecret: '2W26jzbF65DiufIO',
      // });
      //
      // const from = 'Vonage APIs';
      // const to = '972538478501';
      // const text = '8888';
      //
      // nexmo.message.sendSms(from, to, text);
    }
  }
}
</script>

<style scoped>
</style>