<template>
  <div>
    <main class="licenseRevoked">
      <form id="signIn" class="form" @submit.prevent="submitHandler">
        <div class="wrap active" id="step4">
          <div class="content">
            <h2 class="title">
              Almost done!
            </h2>

            <div class="step-wrap">
              <div class="form_label">
                <div class="form_label_head">
                 <div >
                  Please make sure that everything is
                              correct.
                </div>
                </div>
              </div>
              <div class="form_label">
                <div class="form_label_head">
                  <div >
                    After pressing “Get offer” your request will be submitted directly to the insurance companies:
                   <template style="display: inline-block" v-for="(name, index) in this.company"  >
                     <span :key="index">{{ name }}</span>{{ ' ' }}
                   </template>
                     , so that they could contact you.
                  </div>
                </div>
              </div>

              <div class="form_label">
                <div class="form_label_head">
                  <span class="form_span">Vehicle details</span></div>
                  <span>
                    {{vehiclesDetail}}
                  </span>

              </div>

              <div class="form_label">
                <div class="form_label_head">
                  <span class="form_span">Insurance details</span></div>
                  <span >
                    Insurance start: {{InsuranceDetail.dataInsurance  }}. Leasing: {{InsuranceDetail.Leasing  }}
                  </span>

              </div>

              <div class="form_label">
                <div class="form_label_head">
                  <span class="form_span">Insurance coverage</span> </div>
                  <span >
                    Annual mileage:{{InsuranceCoverage.distance}} km, Comprehensive:{{InsuranceCoverage.ComprehensiveBooleane}}/CHF {{InsuranceCoverage.comprehensive}}, Items carried in the car: CHF {{InsuranceCoverage.item}},
                    Accessories: CHF {{InsuranceCoverage.accessories}}, Collision cover: {{ InsuranceCoverage.Collisioncover }}/CHF {{InsuranceCoverage.CollisionDeductible}},
                    Parking damage cover: {{InsuranceCoverage.Parkingdamagecover}}
                </span>

              </div>

              <div class="form_label">
                <div class="form_label_head">
                  <span class="form_span">Personal data</span></div>
                <span >
                    {{ address.FirstName}} , {{address.LastName}}, {{ sex }}, Swiss citizenship: {{address.Swisscitizenship}}
                  </span>
              </div>

              <div class="form_label">
                <div class="form_label_head">
                  <span class="form_span">Address</span></div>
                  <span >
                    {{ address.Postcode }}, {{address.Place}}, {{address.Street}}, {{address.House}}
                  </span>
              </div>
              <div class="form_action">
                <router-link to="/step5" class="link" name="prev">
                  <img src="../static/images/icons/arrow-left.svg" alt="">
                EDIT
                </router-link>
                <router-link to="/step7">
                  <button class="button" name="next" type="submit" >
                    GET OFFER
                  </button>
                </router-link>
              </div>
            </div>

          </div>
        </div>
      </form>
    </main>
  </div>
</template>

<script>


export default {
  name: "Step6",
  data() {
    return {
      company:[],
      vehiclesDetail:'',
      InsuranceDetail:'',
      InsuranceCoverage:'',
      address:'',
      sex:''
    }
  },
  created() {
    const dataStep6 = this.$store.getters.sendStep6
    console.log(dataStep6)
    if (dataStep6) {
      Object.keys(dataStep6.step1).forEach(key => {
        if(dataStep6.step1[key] === true){
          this.company.push(key)
          console.log(key)
        }
      })
      this.vehiclesDetail = dataStep6.step2.ModelStruc.full
      this.InsuranceDetail = dataStep6.step3
      this.InsuranceCoverage = dataStep6.step4
      this.address = dataStep6.step5
      this.address.Gender === 1? this.sex = "Female" : "Male"
    }
  },
  computed: {},
  methods: {},
}
</script>

<style scoped>
.text{
  position: absolute;
  width: 311px;
  height: 180px;
  left: 32px;
  top: 116px;

  /* Primary text – Regular 16 */

  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 20px;
  /* or 125% */

  text-align: center;
  letter-spacing: 0.12px;

  color: #868584;
}
</style>