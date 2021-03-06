<template>
<div>
  <main class="licenseRevoked">
    <form id="signIn" class="form" >
      <div class="wrap active" id="step7">
        <div class="content">
          <h2 class="title">
            Phone number
          </h2>

          <div class="step-wrap">
            <div class="form_label">
              <div class="form_label_head">
                <div >
                  Enter your phone number
                </div>
              </div>
            </div>
          </div>
          <div class="form_label">
            <span class="form_span">Phone</span>
            <b-col xl="12" style="padding: 0">
              <b-form-input  class="form_label_input" id="input-large"
                             v-model="changePhone"
                             size="xl"
                             :value="changePhone"
                             minlength="12" maxlength="12"
                             placeholder="+41 79 300 30 30" required></b-form-input>
            </b-col>
          </div>
          <router-link to="/step8">
            <button  style="height: 48px; width: 100%;"
                     class="button"
                     name="next" type="submit" @click="submitPhone" >
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
export default {
  name: "Step7",
  data() {
    return {
      changePhone: ''
    };
  },
  methods:{
    submitPhone(){
      const step7 = {
       Phone:this.changePhone
      }
      this.$store.dispatch('addFormStep7', step7)
    }
  }
}
</script>

<style scoped>
</style>