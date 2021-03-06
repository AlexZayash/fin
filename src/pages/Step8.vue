<template>
  <main class="licenseRevoked">
    <form id="signIn" class="form" >
      <div class="wrap active" id="step7">
        <div class="content">
          <h2 class="title">
            Confirmation
          </h2>

          <div class="step-wrap">
            <div class="form_label">
              <div class="form_label_head">
                <div >
                  We have sent a SMS code to {{ tel }}
                </div>
              </div>
            </div>
          </div>
          <div class="form_label">
            <span class="form_span">Phone</span>
            <b-col xl="12" style="padding: 0">
              <b-form-input  class="form_label_input" id="input-large"
                             size="xl"
                             v-model="Code"
                             minlength="4"
                             placeholder="8888" required></b-form-input>
            </b-col>
          </div>
          <router-link to="/step9">
            <button  style="height: 48px; width: 100%;"
                     class="button" :disabled="!Code"
                     name="next" type="submit" @click="submitCode" >
              CONTINUE
            </button>
          </router-link>
        </div>
      </div>
    </form>
  </main>
</template>

<script>
export default {
  name: "Step8",
  data() {
    return {
      Code: '',
      tel:''
    };
  },
  created() {
    const dataStep7 = this.$store.getters.sendStep7
    this.tel = dataStep7.Phone
  },
  methods:{
    submitCode(){
    }
  }
}
</script>

<style scoped>

</style>