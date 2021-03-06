<template>
  <main class="licenseRevoked" >
    <form id="sign1" class="form"  >
      <div class="wrap active" id="step1">
        <div class="content">
          <h2 class="title">
            Offers
          </h2>

          <div class="step-wrap">

            <span>On top of the insurers discount, we will give you an additional CHF 85. Choose the insurers you wish to receive an offer from:</span>
            <div class="s1">
              <b-form-checkbox
                  id="checkbox-1"
                  v-model="company1"
                  name="checkbox-2"
                  :value=true
                  :unchecked-value=false
              >
                Simpego
              </b-form-checkbox>
            </div>
            <div class="s1" >
              <b-form-checkbox
                  id="checkbox-2"
                  v-model="company2"
                  name="checkbox-2"
                  :value=true
                  :unchecked-value=false
              >
                Company 2
              </b-form-checkbox>
            </div>
            <div class="s1">
              <b-form-checkbox
                  id="checkbox-3"
                  v-model="company3"
                  name="checkbox-3"
                  :value=true
                  :unchecked-value=false
              >
                Company 3
              </b-form-checkbox>
            </div>
            <div class="s1">
              <b-form-checkbox
                  id="checkbox-4"
                  v-model="company4"
                  name="checkbox-4"
                  :value=true
                  :unchecked-value=false
              >
                Company 4
              </b-form-checkbox>
            </div>
            <span>Or keep driving, improve your driving score and save more!</span>

             <div @click="windowonload">
               <router-link  to="/step2">
                 <button  style="height: 48px; width: 90%;" :disabled="this.company1===false && company2===false && company3===false && company4===false"
                          class="button" name="next" type="reset"  @click="submitHandler" >
                   Next
                 </button>
               </router-link>
             </div>
          </div>
        </div>
      </div>
    </form>
  </main>
</template>

<script>
export default {
  name: "Step1",
  data() {
    return {
      company1: false,
      company2: false,
      company3: false,
      company4: false,
    }
  },
  created() {

     const dataStep1 = this.$store.getters.sendStep1
    if(dataStep1){
      this.company1 = dataStep1.company1
      this.company2 = dataStep1.company2
      this.company3 = dataStep1.company3
      this.company4 = dataStep1.company4
    }

  },
  methods: {
    windowonload  () {
      if (! localStorage.justOnce1) {
        localStorage.setItem("justOnce1", "true");
        window.location.reload();
      }
    },
    submitHandler(){
      const step1 = {
        company1: this.company1,
        company2: this.company2,
        company3: this.company3,
        company4: this.company4,
      }
      console.log(step1)
      // await this.windowonload()
      this.$store.dispatch('addFormStep1', step1)
    }

  }
}
</script>

<style scoped>
.s1 {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 16px;
  position: static;
  width: 90%;
  height: 72px;
  left: 0;
  top: 0;
  background: #FFFFFF;
  box-shadow: 0 4px 12px rgba(43, 42, 41, 0.12);
  border-radius: 8px;
  flex: none;
  order: 0;
  flex-grow: 0;
  margin: 16px 0;
}
</style>