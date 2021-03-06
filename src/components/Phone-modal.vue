<template>
<div>
  <transition name="modal-phn">
    <div class="fancybox-container fancybox-is-open" role="dialog" tabindex="-1" id="fancybox-container-1" style="transition-duration: 366ms;">
      <div class="fancybox-bg"></div>
      <div class="fancybox-inner">
        <div class="fancybox-stage">
          <div class="fancybox-slide fancybox-slide--html fancybox-slide--current fancybox-slide--complete" style="">
            <div id="popup_summary" class="popup popup_summary fancybox-content" style="display: inline-block;">
              <button data-fancybox-close="" class="fancybox-close-small" title="Close" @click="$emit('close')">
                <svg viewBox="0 0 32 32">
                  <path d="M10,10 L22,22 M22,10 L10,22"></path>
                </svg>
              </button>
              <div class="popup_container">
                <div class="content">
                  <h2 class="title">
                    Phone number confirmation
                  </h2>
                  <div class="step-wrap">
                    <label class="form_label require-field">
                      <div class="form_label_head">
                        <span class="form_span">Phone number</span>
                        <span class="form_span form_span_error">
                                                    Error description some text and one more
                                                </span>
                      </div>
                      <div class="form_label_input">
                        <input class="form_input" type="text" :value="phone"
                               disabled/>
                        <div class="form_label_alert_error">
                          <img class="form_label_icon" src="../static/images/icons/error.svg" alt="">
                        </div>
                      </div>
                    </label>

                    <label class="form_label">
                      <div class="form_label_head">
                        <span class="form_span">SMS Code</span>

                        <span class="form_span from_blue" :style="showCntdown">A code can be resent in (( cnt )) sec</span>
                      </div>
                      <div class="form_label_input">
                        <input class="form_input" v-model:value="codeValue" v-mask="'####'" name="otpCode"
                               :disabled="!smssent"/>
                        <div class="form_label_alert_error">
                          <img class="form_label_icon" src="../static/images/icons/error.svg" alt="">
                        </div>
                      </div>
                    </label>

                    <template v-if="smssent">
                      <div class="form_action">
                        <a href="" class="link">
                        </a>
                        <button class="button button_error" @click="next" :disabled="smsCode || continuebutton">
                          Continue
                        </button>
                      </div>
                    </template>
                    <template v-else>
                      <div class="form_action">
                        <a href="" class="link">
                        </a>
                        <button class="button button_error" @click="sms" :disabled="smsbutton">
                          Get SMS Code
                        </button>
                      </div>
                    </template>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</div>
</template>

<script>
export default {
  name: "phone-modal",
  data() {
  return {
    codeValue: '',
    cnt: 0
  }
},
  props: ['phone', 'continuebutton', 'smsbutton', 'smssent'],
      computed: {
  showCntdown() {
    return this.smssent ? 'display: block;' : 'display: none;'
  },
  smsCode() {
    let regex = RegExp(/^[0-9]{4}$/);
    return !regex.test(this.codeValue);
  }
},
  methods: {
    countDown() {
      if (this.cnt > 0) {
        setTimeout(() => {
          this.cnt -= 1;
          this.countDown();
        }, 1000)
      } else {
        this.timeOut();
      }
    },
    sms() {
      this.$emit('sms');
      this.cnt = 60;
      this.countDown();
    },
    next() {
      this.$emit('next', this.codeValue);
    },
    timeOut() {
      this.codeValue = '';
      this.$emit('timeout');
    }
  },
  delimiters: ['((', '))'],
}
</script>

<style scoped>

</style>