<template>
  <div>
    <div id="app">
      <main class="licenseRevoked">
        <form id="signIn" class="form" >
          <div class="wrap active" id="step4">
            <div class="content result_content">
              <h2 class="title">
                Insurance coverage
              </h2>

              <div class="step-wrap">
                <div class="form_label">
                  <div class="form_label_head">
                                <span class="form_span">Annual route (from {{ this.minValue }} to
                                    {{ this.maxValue }} km )</span>
                    <span class="form_span form_span_error">
                                    Error description some text and one more
                                </span>
                  </div>
                  <div class="form_label_input form_label_range">
                    <input class="form_input" id="range2" type="range" name="rangeInput"
                           :min="this.minValue" :max="this.maxValue"
                           step="100" v-model="distance"
                           :style="'background-image: -webkit-gradient(linear, 0% 0%, 100% 0%, color-stop(' + (distance - this.minValue)/(this.maxValue - this.minValue) +', #00B6DE), color-stop(' + (distance - this.minValue)/(this.maxValue - this.minValue) + ', white));'"/>
                    <input class="form_input" type="text" id="textInput" :value="distance"/>
                    <span class="form_range_caption">km/year</span>
                    <div class="form_label_alert_error">
                      <img class="form_label_icon" src="../static/images/icons/error.svg" alt="">
                    </div>
                  </div>
                </div>

                <div class="form_label">
                  <div class="form_label_head">
                    <span class="form_span">Third party liability</span>
                    <span class="form_span form_span_error">
                                    Error description some text and one more
                                </span>
                  </div>
                  <div class="form_label_input">

                    <b-form-select v-model="form.liability"
                                   placeholder="Select required"
                                   label="name"
                    >
                      <b-form-select-option v-for="(liability,index) in this.liabilityList" :key="index"
                                            :value="liability">{{ liability }} CHF
                      </b-form-select-option>
                    </b-form-select>

                    <div class="form_label_alert_error">
                      <img class="form_label_icon" src="../static/images/icons/error.svg" alt="">
                    </div>
                  </div>
                </div>

                <div class="form_label">
                  <div class="form_label_head">
                  <span class="form_span">
                    Comprehensive
                  </span>
                  </div>
                  <div class="form_label_input">

                    <label class="form_label_radio">
                      Yes
                      <input type="radio" name="insClaimsComprehensive" :value="true"
                             v-model="form.ComprehensiveBooleane"/>
                      <span class="checkmark"></span>
                      <div class="form_label_alert_error">
                        <img class="form_label_icon" src="../static/images/icons/error.svg" alt="">
                      </div>
                    </label>
                    <label class="form_label_radio">
                      No
                      <input type="radio" name="insClaimsComprehensive" checked :value="false"
                             v-model="form.ComprehensiveBooleane"
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
                  </div>
                  <div class="form_label_input">

                    <b-form-select v-model="form.comprehensive"
                                   placeholder="Select required"
                                   label="name"
                    >
                      <b-form-select-option v-for="(comprehensive,index) in this.comprehensiveList" :key="index"
                                            :value="comprehensive">{{ comprehensive }} CHF
                      </b-form-select-option>
                    </b-form-select>

                    <div class="form_label_alert_error">
                      <img class="form_label_icon" src="../static/images/icons/error.svg" alt="">
                    </div>
                  </div>
                </div>


                <div class="form_label">
                  <div class="form_label_head">
                    <span class="form_span">Items carried in the car</span>
                    <span class="form_span form_span_error">
                                    Error description some text and one more
                                </span>
                  </div>
                  <div class="form_label_input">

                    <b-form-select v-model="form.item"
                                   placeholder="Select required"
                                   label="name"
                    >
                      <b-form-select-option v-for="(liability,index) in this.itemList" :key="index"
                                            :value="liability">{{ liability }} CHF
                      </b-form-select-option>
                    </b-form-select>

                    <div class="form_label_alert_error">
                      <img class="form_label_icon" src="../static/images/icons/error.svg" alt="">
                    </div>
                  </div>
                </div>

                <div class="form_label">
                  <span class="form_span">Accessories</span>
                  <b-col xl="12" style="padding: 0">
                    <b-form-input class="form_label_input" id="input-large"
                                  v-model="form.accessories"
                                  size="xl"
                                  type="text" required></b-form-input>
                  </b-col>
                </div>


                <div class="form_label">
                  <div class="form_label_head">
                    <span class="form_span">Collision cover</span>
                    <span class="form_span form_span_error">
                                    Error description some text and one more
                                </span>
                  </div>
                  <div class="form_label_input">

                    <label class="form_label_radio">
                      Yes
                      <input type="radio" name="Collision" :value="true"
                             v-model="form.Collisioncover"/>
                      <span class="checkmark"></span>
                      <div class="form_label_alert_error">
                        <img class="form_label_icon" src="../static/images/icons/error.svg" alt="">
                      </div>
                    </label>
                    <label class="form_label_radio">
                      No
                      <input type="radio" name="Collision" checked :value="false"
                             v-model="form.Collisioncover"
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
                    <span class="form_span"></span>
                    <span class="form_span form_span_error">
                                    Error description some text and one more
                                </span>
                  </div>
                  <div class="form_label_input">

                    <b-form-select v-model="form.CollisionDeductible"
                                   placeholder="Select required"
                                   label="name"
                    >
                      <b-form-select-option v-for="(CollisionDeductible,index) in this.CollisionDeductibleList"
                                            :key="index"
                                            :value="CollisionDeductible">{{ CollisionDeductible }} CHF
                      </b-form-select-option>
                    </b-form-select>

                    <div class="form_label_alert_error">
                      <img class="form_label_icon" src="../static/images/icons/error.svg" alt="">
                    </div>
                  </div>
                </div>

                <div class="form_label">
                  <div class="form_label_head">
                    <span class="form_span">Parking damage cover</span>
                    <span class="form_span form_span_error">
                                    Error description some text and one more
                                </span>
                  </div>
                  <div class="form_label_input">

                    <label class="form_label_radio">
                      Yes
                      <input type="radio" name="Parkingdamagecover" :value="true"
                             v-model="form.Parkingdamagecover"/>
                      <span class="checkmark"></span>
                      <div class="form_label_alert_error">
                        <img class="form_label_icon" src="../static/images/icons/error.svg" alt="">
                      </div>
                    </label>
                    <label class="form_label_radio">
                      No
                      <input type="radio" name="Parkingdamagecover" checked :value="false"
                             v-model="form.Parkingdamagecover"
                      />
                      <span class="checkmark"></span>
                      <div class="form_label_alert_error">
                        <img class="form_label_icon" src="../static/images/icons/error.svg" alt="">
                      </div>
                    </label>

                  </div>
                </div>

                <div class="form_action">
                  <router-link to="/step3" class="link">
                    <img src="../static/images/icons/arrow-left.svg" alt="">
                    Back
                  </router-link>
                  <div @click="windowonload">
                    <router-link to="/step5" class="link">
                      <button class="button" name="next" type="reset" :disabled="cntBtnStatus" @click="submitHandler">
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
  name: "Step4",
  data() {
    return {
      d: {},
      form: {
        ComprehensiveBooleane: true,
        liability: 200,
        comprehensive: 1000,
        Collisioncover: true,
        CollisionDeductible: 1000,
        Parkingdamagecover: true,
        item: 2000,
        accessories: 200,
      },
      CollisionDeductibleList: [0, 500, 1000, 2000, 5000],
      liabilityList: [200, 400, 600, 800, 1000],
      comprehensiveList: [0, 300, 500, 1000, 2000],
      itemList: [0, 2000, 3000, 4000, 5000],
      distance: 6000,
      minValue: 1000,
      maxValue: 12000,
      errorMsg: '',
      errorShow: false,
      actionShow: false,
      loader: false,
      cntBtnStatus: false,

    };
  },
  created() {
    const dataStep4 = this.$store.getters.sendStep4
    console.log(dataStep4)
    if (dataStep4) {
      this.form.ComprehensiveBooleane = dataStep4.ComprehensiveBooleane
          this.form.liability = dataStep4.liability
          this.form.comprehensive = dataStep4.comprehensive
          this.form.Collisioncover = dataStep4.Collisioncover
          this.form.CollisionDeductible = dataStep4.CollisionDeductible
          this.form.Parkingdamagecover = dataStep4.Parkingdamagecover
          this.form.item = dataStep4.item
          this.form.accessories = dataStep4.accessories
      this.distance = dataStep4.distance
    }
  },
  computed: {
  },
  methods: {
    windowonload() {
      if (!localStorage.justOnce4) {
        localStorage.setItem("justOnce4", "true");
        window.location.reload();
      }
    },
    submitHandler() {
      const step4 = {
        ComprehensiveBooleane: this.form.ComprehensiveBooleane,
        liability: this.form.liability,
        comprehensive: this.form.comprehensive,
        Collisioncover: this.form.Collisioncover,
        CollisionDeductible: this.form.CollisionDeductible,
        Parkingdamagecover: this.form.Parkingdamagecover,
        item: this.form.item,
        accessories: this.form.accessories,
        distance: this.distance
      }
      console.log(step4)
      this.$store.dispatch('addFormStep4', step4)
    },

  }
}
</script>

<style>
</style>