<template>
  <div>
    <div id="app" class="wrapper">
      <main class="licenseRevoked">
        <form id="signIn" class="form">
          <div class="wrap active" id="step3">
            <div class="content">
              <h2 class="title">
                Insurance details
              </h2>
              <div class="step-wrap">
                <div :class="startDateInsuranceChange">
                  <div class="form_label_head">
                    <span class="form_span">"Insurance start date"</span>
                  </div>
                  <div class="form_label_input">
                    <input class="form_input" type="date" v-model="changeDate" placeholder="dd.mm.yyyy" required/>
                    <div class="form_label_alert_error">
                      <img class="form_label_icon" src="../static/images/icons/error.svg" alt="">
                    </div>
                  </div>
                </div>
                <div class="form_label ">
                  <div class="form_label_head">
                    <span class="form_span">Leasing</span>
                    <span class="form_span form_span_error">
                                    Error description some text and one more
                                </span>
                  </div>
                  <div class="form_label_input">
                    <label class="form_label_radio">
                      Yes
                      <input type="radio" name="leasing" :value="true" v-model="form.Leasing"/>
                      <span class="checkmark"></span>
                      <div class="form_label_alert_error">
                        <img class="form_label_icon" src="../static/images/icons/error.svg" alt="">
                      </div>
                    </label>
                    <label class="form_label_radio">
                      No
                      <input type="radio" name="leasing"
                             checked :value="false"
                             v-model="form.Leasing"
                      />
                      <span class="checkmark"></span>
                      <div class="form_label_alert_error">
                        <img class="form_label_icon" src="../static/images/icons/error.svg" alt="">
                      </div>
                    </label>
                  </div>
                </div>
                <div class="form_label ">
                  <div class="form_label_head">
                    <span class="form_span">Other drivers under 25 years?</span>
                    <span class="form_span form_span_error">
                      Error description some text and one more
                    </span>
                  </div>
                  <div class="form_label_input">
                    <label class="form_label_radio">
                      Yes
                      <input type="radio" name="driverOld" :value="true" v-model="form.Under25"/>
                      <span class="checkmark"></span>
                      <div class="form_label_alert_error">
                        <img class="form_label_icon" src="../static/images/icons/error.svg" alt="">
                      </div>
                    </label>
                    <label class="form_label_radio">
                      No
                      <input type="radio" name="driverOld" checked :value="false" v-model="form.Under25"/>
                      <span class="checkmark"></span>
                      <div class="form_label_alert_error">
                        <img class="form_label_icon" src="../static/images/icons/error.svg" alt="">
                      </div>
                    </label>
                  </div>
                </div>

                <div class="form_label">
                  <div class="form_label_head">
                                                <span class="form_span">
                                                    Have you had your driving license revoked, insurance terminated or refused for more
                                                    than 3 months in the last 5 years?
                                                </span>
                    <span class="form_span form_span_error">
                                                    Error description some text and one more
                                                </span>
                  </div>
                  <div class="form_label_input">
                    <label class="form_label_radio">
                      Yes
                      <input type="radio" name="licenseRevoked" :value="true"
                             v-model="form.ViolationsDuringLastYears"
                      />
                      <span class="checkmark"></span>
                      <div class="form_label_alert_error">
                        <img class="form_label_icon" src="../static/images/icons/error.svg" alt="">
                      </div>
                    </label>
                    <label class="form_label_radio">
                      No
                      <input type="radio" name="licenseRevoked" v-model="form.ViolationsDuringLastYears" checked
                             :value="false"/>
                      <!--                          />-->
                      <span class="checkmark"></span>
                      <div class="form_label_alert_error">
                        <img class="form_label_icon" src="../static/images/icons/error.svg" alt="">
                      </div>
                    </label>
                  </div>
                </div>

                <div class="form_label">
                  <div class="form_label_head">
                    <span class="form_span">
                      Did you have three or more insurance claims in the last 3 years?
                    </span>
                    <span class="form_span form_span_error">
                      Error description some text and one more
                    </span>
                  </div>
                  <div class="form_label_input">
                    <label class="form_label_radio">
                      Yes
                      <input type="radio" name="insClaims" :value="true"
                             v-model="form.ClaimsDuringLastYears"/>
                      <span class="checkmark"></span>
                      <div class="form_label_alert_error">
                        <img class="form_label_icon" src="../static/images/icons/error.svg" alt="">
                      </div>
                    </label>
                    <label class="form_label_radio">
                      No
                      <input type="radio" name="insClaims" checked :value="false"
                             v-model="form.ClaimsDuringLastYears"
                      />
                      <span class="checkmark"></span>
                      <div class="form_label_alert_error">
                        <img class="form_label_icon" src="../static/images/icons/error.svg" alt="">
                      </div>
                    </label>

                  </div>
                </div>

                <div class="form_label">
                  <div class="form_label_head">
                    <span class="form_span">Previous insurance</span>
                    <span class="form_span form_span_error">
                                    Error description some text and one more
                                </span>
                  </div>
                  <div class="form_label_input">

                    <b-form-select :clearable="false" :searchable="false"
                                   v-model="form.Previousinsurance"
                                   placeholder="Select required" label="name"
                    >
                      <b-form-select-option v-for="(Previousinsurance,index) in PreviousinsuranceList" :key="index"
                                            :value="Previousinsurance">{{ Previousinsurance }}
                      </b-form-select-option>
                    </b-form-select>

                    <div class="form_label_alert_error">
                      <img class="form_label_icon" src="../static/images/icons/error.svg" alt="">
                    </div>
                  </div>
                </div>

                <div class="form_action">
                  <router-link to="/step2">
                    <img src="../static/images/icons/arrow-left.svg" alt="">
                    Back
                  </router-link>
                  <div @click="windowonload">
                    <router-link to="/step4">
                      <button class="button" name="next" type="reset" :disabled=" emptyForm || cntBtnStatus"
                              @click="submitHandler">
                        Continue
                      </button>
                    </router-link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </main>
    </div>
  </div>
</template>

<script>

export default {
  name: "Step3",
  components: {},
  data() {
    return {
      form: {
        StartDateInsurance: 0,
        StartDateInsuranceS: '',
        Leasing: false,
        Under25: false,
        ViolationsDuringLastYears: false,
        ClaimsDuringLastYears: false,
        Previousinsurance: 'Dextra'
      },
      PreviousinsuranceList: ['Dextra', 'Company1', 'Company2'],
      changeDate: '',
      validDate: false,
      errorMsg: '',
      loader: false,
      cntBtnStatus: false
    };
  },
  created() {
    const dataStep3 = this.$store.getters.sendStep3
    console.log(dataStep3)
    if (dataStep3) {
      this.changeDate = dataStep3.dataInsurance
      this.form.Leasing = dataStep3.Leasing
      this.form.Under25 = dataStep3.Under25
      this.form.ViolationsDuringLastYears = dataStep3.ViolationsDuringLastYears
      this.form.ClaimsDuringLastYears = dataStep3.ClaimsDuringLastYears
      this.form.Previousinsurance = dataStep3.Previousinsurance
    }
  },
  mounted() {

  },
  computed: {
    emptyForm() {
      let chk = 0;
      for (let key in this.form) {
        switch (key) {
          case 'StartDateInsurance':
            if (this.validDate && this.form[key] !== 0) {
              chk++
            }
            break;
          case 'Leasing':
            if (this.form[key] != null) {
              chk++
            }
            break;
          case 'Under25':
            if (this.form[key] != null) {
              chk++
            }
            break;
          case 'ViolationsDuringLastYears':
            if (this.form[key] != null) {
              chk++
            }
            break;
          case 'ClaimsDuringLastYears':
            if (this.form[key] != null) {
              chk++
            }
            break;
          default:
            break
        }
      }
      return (chk !== 5);
    },
    startDateInsuranceChange() {

      let nowDate = new Date();
      nowDate.setHours(0, 0, 0, 0);
      nowDate.setDate(nowDate.getDate() + 1);
      let futureDate = new Date();
      futureDate.setDate(futureDate.getDate() + 365);
      let dateF = this.changeDate.split('/');
      dateF = [dateF[1], dateF[0], dateF[2]].join('/');
      let userDate = new Date(dateF);
      // let userDate = new Date(this.changeDate);
      if ((nowDate <= userDate) && (userDate <= futureDate)) {
        // eslint-disable-next-line vue/no-side-effects-in-computed-properties
        this.validDate = true;
        // userDate.setHours(userDate.getHours() + 1);
        // eslint-disable-next-line vue/no-side-effects-in-computed-properties
        this.form.StartDateInsurance = userDate.valueOf();
        // eslint-disable-next-line vue/no-side-effects-in-computed-properties
        this.form.StartDateInsuranceS = this.changeDate;
      } else {
        // eslint-disable-next-line vue/no-side-effects-in-computed-properties
        this.validDate = false;
        // eslint-disable-next-line vue/no-side-effects-in-computed-properties
        this.form.StartDateInsurance = 0;
        // eslint-disable-next-line vue/no-side-effects-in-computed-properties
        this.form.StartDateInsuranceS = '';
      }
      return this.validDate || !this.changeDate ? 'form_label' : 'form_label form_label_error';
    },
  },
  methods: {
    windowonload() {
      if (!localStorage.justOnce3) {
        localStorage.setItem("justOnce3", "true");
        window.location.reload();
      }
    },

    submitHandler() {
      const step3 = {
        dataInsurance: this.changeDate,
        Under25: this.form.Under25,
        Leasing: this.form.Leasing,
        ViolationsDuringLastYears: this.form.ViolationsDuringLastYears,
        ClaimsDuringLastYears: this.form.ClaimsDuringLastYears,
        Previousinsurance: this.form.Previousinsurance
      }
      console.log(step3)
      this.$store.dispatch('addFormStep3', step3)
    },
  },

}
</script>
