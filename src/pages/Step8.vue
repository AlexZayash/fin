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
                             @input="changeValid"
                             v-model="Code"
                             minlength="4"
                             placeholder="8888" required></b-form-input>
            </b-col>
          </div>
          <router-link to="/step9">
            <button  style="height: 48px; width: 100%;"
                     class="button"
                     name="next" type="submit"  :disabled="!this.validCode" >
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
      tel:'',
      validCode:false,
      trueCode:''
    };
  },
  created() {
    const dataStep7 = this.$store.getters.sendStep7
    console.log(dataStep7)
    if (dataStep7) {
      this.trueCode = dataStep7.randomnumber
    }
    console.log('this.trueCode',this.trueCode)
  },
  methods:{
    changeValid(){
      console.log('this.Code',this.Code)
  this.validCode = (this.Code == this.trueCode)
      console.log( this.validCode)
    },

  }
}
</script>

<style scoped>

</style>