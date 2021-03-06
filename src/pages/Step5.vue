<template>
  <div>
    <main class="licenseRevoked">
      <form id="signIn" class="form">
        <div class="wrap active" id="step5">
          <div class="content">
            <h2 class="title">
              Personal data
            </h2>

            <div class="form_label">
              <label :class="firstNameChange">
                <span class="form_span">First name</span>
                <b-col xl="12" style="padding: 0">
                  <b-form-input class="form_label_input" id="input-large"
                                v-model="changeFirst"
                                size="xl"
                                :value="changeFirst"
                                type="text" name="firstName" placeholder="Max" maxlength="30" required></b-form-input>
                </b-col>
              </label>
            </div>

            <div class="form_label">
              <label :class="lastNameChange">
                <span class="form_span">Last name</span>
                <b-col xl="12" style="padding: 0">
                  <b-form-input class="form_label_input" id="input-large"
                                v-model="changeLast"
                                size="xl"
                                :value="changeLast"
                                type="text" name="lastName" placeholder="Muster" maxlength="30" required></b-form-input>
                </b-col>
              </label>
            </div>

            <div class="form_label">
              <div class="form_label_head">
                <span class="form_span">Gender</span>
                <span class="form_span form_span_error">
                                    Error description some text and one more
                                </span>
              </div>
              <div class="form_label_input">
                <label class="form_label_radio">
                  Female
                  <input v-model="form.Gender" type="radio" :value=1 name="gender"/>
                  <span class="checkmark"></span>
                  <div class="form_label_alert_error">
                    <img class="form_label_icon" src="../static/images/icons/error.svg" alt="">
                  </div>
                </label>
                <label class="form_label_radio">
                  Male
                  <input type="radio" v-model="form.Gender" name="gender" :value=2 checked/>
                  <span class="checkmark"></span>
                  <div class="form_label_alert_error">
                    <img class="form_label_icon" src="../static/images/icons/error.svg" alt="">
                  </div>
                </label>
              </div>


            </div>

            <div class="form_label">
              <div class="form_label_head">
                <span class="form_span">Swiss citizenship</span>
                <span class="form_span form_span_error">
                                    Error description some text and one more
                                </span>
              </div>
              <div class="form_label_input">
                <label class="form_label_radio">
                  Yes
                  <input type="radio" v-model="form.Swisscitizenship" name="Swisscitizenship" :value=true checked/>
                  <span class="checkmark"></span>
                  <div class="form_label_alert_error">
                    <img class="form_label_icon" src="../static/images/icons/error.svg" alt="">
                  </div>
                </label>

                <label class="form_label_radio">
                  No
                  <input v-model="form.Swisscitizenship" type="radio" :value=false name="Swisscitizenship"/>
                  <span class="checkmark"></span>
                  <div class="form_label_alert_error">
                    <img class="form_label_icon" src="../static/images/icons/error.svg" alt="">
                  </div>
                </label>
              </div>


            </div>

            <label :class="postcodeValid">

              <div class="form_label_head">
                <span class="form_span">Postal code</span>
                <span class="form_span form_span_error">
                                    Incorrect data
                                </span>
              </div>
              <div class="form_label_input">
                <input class="form_input" type="text" name="postalCode"
                       @keyup="postcodeChange(true)" minlength="4" placeholder="3445" required
                       v-model="changePostcode"
                />
                <div class="form_label_alert_error">
                  <img class="form_label_icon" src="../static/images/icons/error.svg" alt="">
                </div>
              </div>
            </label>


            <div class="form_label">
              <span class="form_span">City</span>
              <b-form-select v-model="form.PlaceObj"
                             @change="PlaceChange" name="Place"
                             placeholder="Select required"
                             label="name" :disabled="!placeList.length"
              >
                <b-form-select-option v-for="(place,index) in placeList" :key="index" :value="place">
                  {{ place.name }}
                </b-form-select-option>
              </b-form-select>
            </div>


            <div class="form_label">
              <div class="form_label_head">
                <span class="form_span">Street</span>
                <span class="form_span form_span_error">
                                    Incorrect data
                                </span>
              </div>
              <div class="form_label_input">
                <input class="form_input" type="text" name="Street"
                       :clearable="false" :searchable="true"
                       @input="streetSelect(true)" minlength="4" placeholder="" required
                       :disabled="!form.Place" :filter="filter"
                       v-model="form.street"
                />
                <div class="form_label_alert_error">
                  <img class="form_label_icon" src="../static/images/icons/error.svg" alt="">
                </div>
              </div>
            </div>


            <div class="form_label">
              <div class="form_label_head">
                <span class="form_span">House Number</span>
                <span class="form_span form_span_error">
                                    Incorrect data
                                </span>
              </div>
              <div class="form_label_input">
                <input class="form_input" type="text" name="houseNum"
                       @keyup="houseChange()" minlength="4" placeholder="40" required
                       v-model="changeHouse"
                />
                <div class="form_label_alert_error">
                  <img class="form_label_icon" src="../static/images/icons/error.svg" alt="">
                </div>
              </div>
            </div>


            <div class="form_action">
              <router-link to="/step4" class="link" name="prev">
                <img src="../static/images/icons/arrow-left.svg" alt="">
                Back
              </router-link>
              <div @click="windowonload">
                <router-link to="/step6">
                  <button class="button" name="next" type="reset" :disabled="changeFirst && form.street && changeHouse
                 && form.PlaceObj && changePostcode && changeFirst && cntBtnStatus" @click="submitHandler">
                    Continue
                  </button>
                </router-link>
              </div>
            </div>
          </div>

        </div>
      </form>
      <template>
        <div :class="showLoader">
          <div class="preloader"></div>
        </div>
      </template>
    </main>
  </div>

</template>

<script>
import axios from "axios";

export default {
  name: "Step5",
  data() {
    return {
      form: {
        Gender: 1,
        FirstName: '',
        LastName: '',
        Postcode: '',
        Place: '',
        House: '',
        street: '',
        Swisscitizenship: true
      },
      valid: {
        FirstName: false,
        LastName: false,
        Postcode: false,
        Street: false,
        House: false,
      },
      endPoint: 'https://platform.kasko2go.com',
      placeList: [],
      countriesDict: [],
      changePostcode: '',
      changeStreet: '',
      suggestsStreet: [],
      changeHouse: '',
      vehicleHP: 0,
      changeFirst: '',
      changeLast: '',
      errorMsg: '',
      loader: false,
      cntBtnStatus: false
    };
  },
  created() {
    const dataStep5 = this.$store.getters.sendStep5
    console.log(dataStep5)
    if (dataStep5) {
      this.form.Gender = dataStep5.Gender
      this.changeFirst = dataStep5.FirstName
      this.changeLast = dataStep5.LastName
      this.changeHouse = dataStep5.House
      this.form.Place = dataStep5.Place
      this.changePostcode = dataStep5.Postcode
      this.form.street = dataStep5.Street
      this.form.Swisscitizenship = dataStep5.Swisscitizenship
    }
    this.loader = true;
    axios.get(this.endPoint + '/api/dextra/Dictionary/Countries?v=4.0', {headers: {'Accept-Language': 'en'}}).then(response => {
      if (response.status === 200) {
        if (response.data.success && response.data.success.length > 0) {
          this.countriesDict = response.data.success.sort((a, b) => {
            return (a.order !== 0 && a.order <= b.order && b.order !== 0) ? -1 : 0;
          });
          if (this.countriesDict && this.form.CitizenshipObj && this.countriesDict.length > 0) {
            let cd = this.countriesDict.find((fItem) => {
              return fItem.iso2Key === this.form.CitizenshipObj.iso2Key
            });
            if (cd && cd !== 'undefined') {
              this.form.CitizenshipObj = cd;
              this.form.Citizenship = cd.iso2Key
            }
          }
        }
        this.loader = false;

      } else {
        this.loader = false;
        this.errorMsg = this.httpError(0);
      }
    }).catch(() => {
      this.loader = false;
      this.errorMsg = this.httpError(1);
    });
    if (this.form.Place !== '') this.postcodeChange(false);

  },
  computed: {
    postcodeValid() {
      return this.styleBoolValue(this.valid.Postcode, this.changePostcode)
    },

    showLoader() {
      return this.loader ? 'loader_wrap active' : 'loader_wrap'
    },
  },
  methods: {
    windowonload() {
      if (!localStorage.justOnce5) {
        localStorage.setItem("justOnce5", "true");
        window.location.reload();
      }
    },
    streetValid() {
      let regex = RegExp(/^[a-zA-Z0-9 ,.+-\u00E4\u00F6\u00FC\u00C4\u00D6\u00DC\u00df]{2,30}$/);
      if (regex.test(this.changeStreet)) {
        this.valid.Street = true;
      } else {
        this.valid.Street = false;
      }
      return this.styleBoolValue(this.valid.Street, this.changeStreet);
    },
    houseChange() { //<<
      let regex = RegExp(/^[a-zA-Z0-9 ,.\u00E4\u00F6\u00FC\u00C4\u00D6\u00DC\u00df]{1,30}$/);
      if (regex.test(this.changeHouse)) {
        this.valid.House = true;
        this.form.House = this.changeHouse;
      } else {
        this.valid.House = false;
        this.form.House = '';
      }
      return this.styleBoolValue(this.valid.House, this.changeHouse);
    },

    filter(opt, srh) {
      if (this.changeStreet !== srh) {
        this.changeStreet = srh;
        let regex = RegExp(/^[a-zA-Z0-9 ,.+-\u00E4\u00F6\u00FC\u00C4\u00D6\u00DC\u00df]{2,30}$/);
        if (regex.test(this.changeStreet)) {
          axios.get(this.endPoint + '//api/dextra/suggests/street?street=' + srh + '&city=' + this.form.Place + '&v=4.0', {headers: {'Accept-Language': 'en'}}).then(response => {
            if (response.status === 200) {
              if (response.data.success.suggests && response.data.success.suggests.length > 0) {
                this.suggestsStreet = response.data.success.suggests;
              }
            } else {
              this.errorMsg = this.httpError(0);
            }
          }).catch(() => {
            this.errorMsg = this.httpError(1);
          });
        }
      }
      if (srh === '') {
        this.StreetObj = null;
      }
      return opt
    },

    streetSelect() {
      this.form.Street = this.form.StreetObj.addr ? this.form.StreetObj.addr : this.changeStreet;
      this.suggestsStreet = [];
    },
    PlaceChange() {
      if (this.form.PlaceObj && this.form.PlaceObj.name) {
        this.form.Place = this.form.PlaceObj.name;
        this.form.Street = '';
        this.form.StreetObj = {};
        this.suggestsStreet = [];
        // this.form.CitizenshipObj = null;
      }
    },

    postcodeChange(nodelete) { //<<
      if (this.changePostcode !== this.form.Postcode) {
        let regex = RegExp(/^([1-9]\d{3})$/);
        this.form.Postcode = '';
        this.suggestsStreet = [];
        if (nodelete) {
          this.form.Place = '';
          this.form.PlaceObj = null;
          this.form.Street = '';
          this.form.StreetObj = {};
        }
        this.valid.Postcode = false;
        if (regex.test(this.changePostcode)) {
          this.loader = true;
          axios.get(this.endPoint + '/api/dextra/Dictionary/Cities?zipCode=' + this.changePostcode + '&v=4.0', {headers: {'Accept-Language': 'en'}}).then(response => {
            if (response.status === 200) {

              this.placeList = response.data.success;
              if (this.placeList && this.placeList.length > 0) {
                this.form.Postcode = this.changePostcode;
                // this.form.PlaceObj = null;
                // this.form.CitizenshipObj = null;
                if (this.placeList.length === 1) {
                  this.form.PlaceObj = this.placeList[0];
                  this.form.Place = this.placeList[0].name;
                }
                this.valid.Postcode = true;
                this.loader = false;
                return;
              }
            } else {
              this.loader = false;
              this.errorMsg = this.httpError(0);
            }
            this.loader = false;
            this.placeList = [];
            this.valid.Postcode = false;
          }).catch(() => {
            this.loader = false;
            this.errorMsg = this.httpError(1);
          });
        }
      } else {
        this.valid.Postcode = true;
      }
    },
    styleBoolValue(v, cv) {
      return v || !cv ? 'form_label' : 'form_label form_label_error'
    },
    firstNameChange() {
      let regex = RegExp(/^[a-zA-Z- \u00E4\u00F6\u00FC\u00C4\u00D6\u00DC\u00df]{2,30}$/);
      if (regex.test(this.changeFirst)) {
        this.valid.FirstName = true;
        this.form.FirstName = this.changeFirst;
      } else {
        this.valid.FirstName = false;
        this.form.FirstName = '';
      }
      return this.styleBoolValue(this.valid.FirstName, this.changeFirst);
    },
    lastNameChange() {
      let regex = RegExp(/^[a-zA-Z\u00E4\u00F6\u00FC\u00C4\u00D6\u00DC\u00df]{2,30}$/);
      if (regex.test(this.changeLast)) {
        this.valid.LastName = true;
        this.form.LastName = this.changeLast;
      } else {
        this.valid.LastName = false;
        this.form.LastName = '';
      }
      return this.styleBoolValue(this.valid.LastName, this.changeLast);
    },

    submitHandler() {
      const step5 = {
        Place: this.form.Place,
        Postcode: this.form.Postcode,
        Street: this.form.street,
        House: this.form.House,
        Gender: this.form.Gender,
        FirstName: this.changeFirst,
        LastName: this.changeLast,
        Swisscitizenship: this.form.Swisscitizenship
      }
      this.$store.dispatch('addFormStep5', step5)
    },
    httpError(type) {
      switch (type) {
        case 0:
          return 'Remote Server Error. Please, try again later. If the problem persists, please contact us.';
        case 1:
          return 'No connection to the remote server. Please, try again later. If the problem persists, please contact us.';
        case 2:
          return 'Insurance is not allowed for male customer under 21 years if engine power >300HP.';
      }
    }
  }
}

</script>

<style scoped>

</style>