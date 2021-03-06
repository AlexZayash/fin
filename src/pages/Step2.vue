<template>
  <div>
    <main class="licenseRevoked">
      <form id="signIn" class="form" >
        <div class="wrap active" id="step2">
          <div class="content">
            <h2 class="title">
              Vehicle details
            </h2>
            <div class="form_label">
              <span class="form_span">Vehicle year</span>
              <b-form-select v-model="form.ModelYear" name="ModelYear"
                             @change="modelYearChange"
                             placeholder="Select required"
              >
                <b-form-select-option v-for="year in years" :key="year" :value="year">{{ year }}</b-form-select-option>
              </b-form-select>
            </div>

            <div class="form_label">
            <span class="form_span">Car model code (optional)</span>
            <b-col xl="12" style="padding: 0">
              <b-form-input class="form_label_input" id="input-large" @keyup="carModelChange"
                            size="xl"
                            :value="changeCar"
                            maxlength="6"
                            :disabled="!form.ModelYear || !reqCar" :disable-search="true"
                            placeholder="1AB234"></b-form-input>
            </b-col></div>

            <div class="form_label">
            <span class="form_span">Brand</span>
            <b-form-select v-model="form.Brand"
                           @change="brandChange"
                           :disabled="!brandList.length"
            >
              <option v-for="brand in this.brandList" :key="brand.key" :value="brand">{{ brand.name }}</option>
            </b-form-select>
            </div>

            <div class="form_label">
            <span class="form_span">Model line</span>
            <b-form-select v-model="form.ModelLine"
                           :placeholder="!modelLineList.length ? 'No respond to the request. Please, try another option' : 'Select required'"
                           @change="modelLineChange"

                           :disabled="!modelLineList.length || !form.Brand"
            >
              <option v-for="model in  this.modelLineList" :key="model.nameShort" :value="model.nameShort">
                {{ model.nameShort }}
              </option>
            </b-form-select>
            </div>

            <div class="form_label">
            <span class="form_span">Fuel type</span>
            <b-form-select v-model="form.FuelType"
                           placeholder="Select required"
                           @change="fuelTypeChange"
                           :disabled="!fuelTypeList.length || !form.ModelLine"
            >
              <option v-for="(fuelType,index) in  this.fuelTypeList" :key="index" :value="fuelType">{{ fuelType.name }}
              </option>
            </b-form-select>
            </div>

            <span class="form_span">Model</span>
            <b-form-select v-model="form.ModelStruc"
                           @change="modelStrucChange"
                           :disabled="!(form.FuelType && form.FuelType.name!=='') || !modelList.length"
                           placeholder="Select required"
            >
              <option v-for="(model,index) in this.modelList" :key="index" :value="model">{{ model.full }}</option>
            </b-form-select>


            <div class="form_action">
              <router-link to="/step1" class="link">
                <img src="../static/images/icons/arrow-left.svg" alt="">
                Back
              </router-link>
              <router-link to="/step3">
                <button class="button" name="next2" type="submit" @click="submitHandler"
                        :disabled="emptyForm || cntBtnStatus || maximumCar">
                  Continue
                </button>
              </router-link>
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
  name: "Step2",
  components: {},
  data() {
    return {
      options: [
        {
          value: null,
          text: 'Please select an option'
        },
      ],
      form: {
        ModelYear: 0,
        ModelCode: '',
        Brand: {
          name: '',
          key: 0
        },
        ModelLine: {
          nameShort: ''
        },
        FuelType: [],
        Model: 0,
        ModelStruc: {
          price: 0,
          fuel: '',
          bodyType: '',
          doors: '',
          fuelName: '',
          ps: '',
          gearboxType: ''
        },
        VehicleHP: 0,
      },
      endPoint: 'https://platform.kasko2go.com',
      carModel: '',
      brandList: [],
      modelLineList: [],
      fuelTypeList: [],
      fuelTypeDict: [],
      modelList: [],
      modelListDict: [],
      changeCar: '',
      validCar: true,
      maximumCar: false,
      getCar: true,
      reqCar: true,
      changes: false,
      loader: false,
      errorMsg: '',
      cookieMsg: false,
      cntBtnStatus: false,
      px:false
    };
  },
  mounted() {

  },
  created() {

    this.loader = true;
    axios.get(this.endPoint + '/api/dextra/Dictionary/Fuel?v=4.0', {headers: {'Accept-Language': 'en'}}).then(response => {
      if (response.status === 200) {
        this.fuelTypeDict = response.data.success;
        this.loader = false;
      }
    }).catch(() => {
      this.loader = false;
      this.errorMsg = this.httpError(1);
    });
    const dataStep2 = this.$store.getters.sendStep2
    console.log(dataStep2)
    if(dataStep2){
      this.form.ModelYear = dataStep2.ModelYear
      this.modelYearChangeStore()
      this.Model = dataStep2.ModelCode
      this.form.Brand = dataStep2.Brand
      this.brandChangeStore()
      this.form.ModelLine = dataStep2.ModelLine
      this.modelLineChangeStore()
      this.form.FuelType = dataStep2.FuelType
      this.form.ModelStruc = dataStep2.ModelStruc
    }
  },
  computed: {
    showLoader() {
      return this.loader ? 'loader_wrap active' : 'loader_wrap'
    },
    emptyForm() {
      let chk = 0;
      for (let key in this.form) {
        switch (key) {
          case 'ModelYear':
            if (this.form[key] !== 0) {
              chk++
            }
            break;
          case 'Brand':
            if (this.form[key] != null) {
              chk++
            }
            break;
          case 'ModelLine':
            if (this.form[key] != null) {
              chk++
            }
            break;
          case 'FuelType':
            if (this.form[key] != null) {
              chk++
            }
            break;
          case 'Model':
            if (this.form[key] !== 0) {
              chk++
            }
            break;
          default:
            break;
        }
      }
      return (chk !== 5);
    },
    years() {
      const year = new Date().getFullYear()
      return Array.from({length: 15}, (value, index) => year - index)
    },
  },
  methods: {
    submitHandler() {
      const step2 = {
        ModelYear: this.form.ModelYear,
        ModelCode: this.form.ModelCode,
        Brand: this.form.Brand,
        ModelLine: this.form.ModelLine,
        FuelType: this.form.FuelType,
        ModelStruc: this.form.ModelStruc,
      }
      console.log(step2)
      this.$store.dispatch('addFormStep2', step2)
    },
    httpError(type) {
      switch (type) {
        case 0:
          return 'Remote Server Error. Please, try again later. If the problem persists, please contact us.';
        case 1:
          return 'No connection to the remote server. Please, try again later. If the problem persists, please contact us.';
        case 2:
          return 'Unfortunately we cannot insure your vehicle. The value of your vehicle is higher than the maximum allowed.';

          // case 0: this.httpErrorShow('API Server request error!'); return;
          // case 1: this.httpErrorShow('Network API connection error!'); return;
          // case 2: this.httpErrorShow('Car Model short error!'); return;
      }
    },
    //=====================================
    resetVehicle() {
      this.modelLineList = [];
      this.form.ModelLine = {};
      this.modelListDict = {};
      this.fuelTypeList = [];
      this.form.FuelType = {};
      this.modelList = [];
      this.form.Model = 0;
      this.form.ModelStruc = {};
    },
    modelYearChangeStore() {
      this.changes = true;
      if (this.form.ModelYear && this.form.ModelYear !== 0) {
        this.carModelChange();
        let self = this;
        self.resetVehicle();
        this.loader = true;
        axios.get(this.endPoint + '/api/dextra/Autobase/Carmake?year=' + this.form.ModelYear + '&v=4.0', {headers: {'Accept-Language': 'en'}}).then(response => {
          console.log('modelYearChange',response.status)
          if (response.status === 200) {
            this.brandList = response.data.success;
            this.loader = false;
          } else {
            this.loader = false;
            this.errorMsg = this.httpError(0);
          }
        }).catch(() => {
          this.form.Brand = {};
          this.form.ModelYear = 0;
          this.loader = false;
          this.errorMsg = this.httpError(1);
        });
      }
    },
    modelYearChange() {
      this.changes = true;
      if (this.form.ModelYear && this.form.ModelYear !== 0) {
        this.carModelChange();
        let self = this;
        this.brandList = [];
        self.resetVehicle();
        this.loader = true;
        axios.get(this.endPoint + '/api/dextra/Autobase/Carmake?year=' + this.form.ModelYear + '&v=4.0', {headers: {'Accept-Language': 'en'}}).then(response => {
          console.log('modelYearChange',response.status)
          if (response.status === 200) {
            this.form.Brand = null;
            this.brandList = response.data.success;
            this.loader = false;
          } else {
            this.form.Brand = {};
            this.loader = false;
            this.errorMsg = this.httpError(0);
          }
        }).catch(() => {
          this.form.Brand = {};
          this.form.ModelYear = 0;
          this.loader = false;
          this.errorMsg = this.httpError(1);
        });
      }
    },
    brandChangeStore() {
      console.log(this.form.Brand)
      if (this.form.ModelYear && this.form.ModelYear !== 0 && this.form.Brand && this.form.Brand.key !== '') {
        let self = this;
        self.resetVehicle();
        // this.form.ModelLine = {};
        // this.form.ModelCode = '';
        // this.changeCar = '';
        this.loader = true;
        axios.get(this.endPoint + '/api/dextra/Autobase/carmodelshort?year=' + this.form.ModelYear + '&carmake=' + this.form.Brand.key + '&v=4.0', {headers: {'Accept-Language': 'en'}}).then(response => {
          if (response.status === 200) {
            this.modelLineList = response.data.success;
            // this.form.ModelLine = null;
            this.loader = false;
          } else {
            this.loader = false;
            this.errorMsg = this.httpError(0);
          }
        }).catch(() => {
          this.loader = false;
          this.errorMsg = this.httpError(1);
        });
      }
    },
    brandChange() {
      console.log(this.form.Brand)
      if (this.form.ModelYear && this.form.ModelYear !== 0 && this.form.Brand && this.form.Brand.key !== '') {
        let self = this;
        self.resetVehicle();
        this.form.ModelLine = {};
        this.form.ModelCode = '';
        this.changeCar = '';
        this.loader = true;
        axios.get(this.endPoint + '/api/dextra/Autobase/carmodelshort?year=' + this.form.ModelYear + '&carmake=' + this.form.Brand.key + '&v=4.0', {headers: {'Accept-Language': 'en'}}).then(response => {
          if (response.status === 200) {
            this.modelLineList = response.data.success;
            this.form.ModelLine = null;
            this.loader = false;
          } else {
            this.loader = false;
            this.errorMsg = this.httpError(0);
          }
        }).catch(() => {
          this.loader = false;
          this.errorMsg = this.httpError(1);
        });
      }
    },
    modelLineChangeStore() {
      if (this.form.Brand && this.form.Brand.key !== '' && this.form.ModelLine && this.form.ModelYear !== 0)
        this.loader = true;
      axios.get(this.endPoint + '/api/dextra/Autobase/carmodification?carMake=' + this.form.Brand.key + '&shortModelName=' + this.form.ModelLine + '&year=' + this.form.ModelYear + '&v=4.0', {headers: {'Accept-Language': 'en'}}).then(response => {
        console.log('modelLineChangeStore',response.data.success)
        if (response.status === 200) {
          this.form.ModelStruc = [];
          response.data.success.forEach(item => {
            if (this.modelListDict[item.fuel]) {
              let oldItems = this.modelListDict[item.fuel];
              oldItems.push(item);
              this.modelListDict[item.fuel] = oldItems;
            } else {
              let old = [];
              old.push(item);
              this.modelListDict[item.fuel] = old;
              let op = this.fuelTypeDict.find((fItem) => {
                return fItem.key === item.fuel
              });
              if (op && op !== 'undefined') {
                this.fuelTypeList.push(op);
              }
            }
          });
          if (this.fuelTypeList.length === 1) {
            this.form.FuelType = this.fuelTypeList[0];
            this.fuelTypeChangeStore(0);
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
    },
    modelLineChange() {
      if (this.form.Brand && this.form.Brand.key !== '' && this.form.ModelLine && this.form.ModelYear !== 0)
        this.loader = true;
      axios.get(this.endPoint + '/api/dextra/Autobase/carmodification?carMake=' + this.form.Brand.key + '&shortModelName=' + this.form.ModelLine + '&year=' + this.form.ModelYear + '&v=4.0', {headers: {'Accept-Language': 'en'}}).then(response => {
        if (response.status === 200) {
          this.modelListDict = [];
          this.modelList = [];
          this.form.Model = 0;
          this.form.ModelStruc = [];
          this.form.FuelType = null;
          this.fuelTypeList = [];
          response.data.success.forEach(item => {
            if (this.modelListDict[item.fuel]) {
              let oldItems = this.modelListDict[item.fuel];
              oldItems.push(item);
              this.modelListDict[item.fuel] = oldItems;
            } else {
              let old = [];
              old.push(item);
              this.modelListDict[item.fuel] = old;
              let op = this.fuelTypeDict.find((fItem) => {
                return fItem.key === item.fuel
              });
              if (op && op !== 'undefined') {
                this.fuelTypeList.push(op);
              }
            }
          });
          this.form.FuelType = null;
          if (this.fuelTypeList.length === 1) {
            this.form.FuelType = this.fuelTypeList[0];
            this.fuelTypeChange(0);
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
    },
    fuelTypeChange() {
      this.modelList = [];
      this.form.Model = [];
      this.form.ModelStruc = null;
      this.modelList = this.modelListDict[this.form.FuelType.key];
      this.changeModelList();
    },
    modelStrucChange() {
      if (this.form.ModelStruc) {
        if ((this.form.ModelStruc.price / 100).toFixed(2) > 200000) {
          this.maximumCar = true;
          this.errorMsg = this.httpError(2)
        } else {
          this.maximumCar = false;
        }
        this.form.Model = this.form.ModelStruc.fzKey;
      }
    },
    changeModelList() {
      let modelListNew = [];
      if (this.modelList.length > 0) {
        this.modelList.forEach(item => {
          if ((item.price / 100).toFixed(2) < 200000) {
            const itemNew = item;
            itemNew['full'] = item.model + ', ' + item.name + ', ' + item.bodyType + ', ' + item.doors + ' Doors, ' + item.fuelName + ', ' + item.ps + ' hp, ' + item.gearboxType + ', CHF: ' + (item.price / 100).toFixed(2);
            modelListNew.push(itemNew);
          }
        });
        this.modelList = modelListNew;
        if (modelListNew.length === 1) {
          this.form.ModelStruc = modelListNew[0];
          this.form.Model = modelListNew[0].fzKey;
        }
        if (modelListNew.length > 1) {
          this.form.ModelStruc = null
        }
      }
    },
    carModelChange() {
      if (this.changeCar && this.changeCar !== '') {
        let self = this;
        this.getCar = false;
        self.resetVehicle();
        let regex = RegExp(/^[a-zA-Z0-9]{6}$/);
        if (regex.test(this.changeCar)) {
          this.reqCar = false;
          this.loader = true;
          axios.get(this.endPoint + '/api/dextra/autobase/carmodification?number=' + this.changeCar + '&year=' + this.form.ModelYear + '&v=4.0', {headers: {'Accept-Language': 'en'}}).then(response => {
            if (response.status === 200 && (response.data.success).length) {
              this.fuelTypeList = [];
              this.form.FuelType = {};

              response.data.success.forEach(item => {
                if (this.modelListDict[item.fuel]) {
                  let oldItems = this.modelListDict[item.fuel];
                  oldItems.push(item);
                  this.modelListDict[item.fuel] = oldItems;
                } else {
                  let newItems = [];
                  newItems.push(item);
                  this.modelListDict[item.fuel] = newItems;

                  let op = this.fuelTypeDict.find((fItem) => {
                    return fItem.key === item.fuel
                  });
                  if (op && op !== 'undefined') {
                    this.fuelTypeList.push(op);
                  }
                }
              });

              if (this.fuelTypeList && this.fuelTypeList.length > 0) {
                this.form.FuelType = this.fuelTypeList[0];
                this.modelList = this.modelListDict[this.form.FuelType.key];

                const ma = {};
                const ml = {};
                this.changeModelList();
                if (this.modelList.length > 0) {
                  this.modelList.forEach(item => {
                    ma[item.makeKey] = item.make;
                    ml[item.modelKey] = item.modelShortName;
                  });
                  const tmpBrandList = [];
                  Object.keys(ma).forEach(key => {
                    tmpBrandList.push({name: ma[key], key: key});
                  });
                  if (tmpBrandList.length === 1) {
                    this.form.Brand = tmpBrandList[0];
                  }
                }
                axios.get(this.endPoint + '/api/dextra/Autobase/carmodelshort?year=' + this.form.ModelYear + '&carmake=' + this.form.Brand.key + '&v=4.0', {headers: {'Accept-Language': 'en'}}).then(response => {
                  if (response.status === 200 && (response.data.success).length) {
                    const mLList = response.data.success;
                    this.validCar = true;
                    this.form.ModelLine = null;

                    this.modelLineList = [];

                    Object.keys(ml).forEach(key => {
                      let mll = mLList.find((item) => {
                        return item.nameShort.toLowerCase() === ml[key].toLowerCase()
                      });
                      if (mll && mll !== 'undefined') {
                        this.modelLineList.push(mll);
                      }
                    });
                    if (this.modelLineList.length === 1) {
                      this.form.ModelLine = this.modelLineList[0];
                    }
                  } else {
                    if (response.status !== 200) {
                      this.loader = false;
                      this.errorMsg = this.httpError(0);
                    }
                  }
                  this.loader = false;
                  this.form.ModelCode = this.changeCar;
                  this.getCar = true;
                  this.reqCar = true;
                }).catch(() => {
                  this.loader = false;
                  this.errorMsg = this.httpError(1);
                });
              }
            } else {
              if (response.status !== 200) {
                this.errorMsg = this.httpError(0);
              }
              this.reqCar = true;
            }
            this.loader = false;
          }).catch(() => {
            this.loader = false;
            this.errorMsg = this.httpError(1);
          });
        } else {
          this.getCar = false;
          this.form.ModelCode = '';
        }
      } else {
        this.validCar = true;
        this.getCar = true;
        this.reqCar = true;
      }
    },
  },

}
</script>
<style>

</style>
