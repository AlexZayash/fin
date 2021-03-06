<template>
  <main class="licenseRevoked">
    <form id="signIn" class="form">
      <div class="wrap active" id="step7">
        <div class="content">
          <h2 class="title">
            Email
          </h2>

          <div class="step-wrap">
            <div class="form_label">
              <div class="form_label_head">
                <div>
                  The insurance company will send you the offer to this mail
                </div>
              </div>
            </div>
          </div>
          <div class="step-wrap">
            <div class="form_label">
              <div class="form_label_head">
                <div>
                  Enter your email
                </div>
              </div>
            </div>
          </div>

          <div class="form_label">
            <span class="form_span">Phone</span>
            <b-col xl="12" style="padding: 0">
              <b-form-input  class="form_label_input" id="input-large"
                             v-model="Email"
                             size="xl"
                             :value="Email"
                             placeholder="max.muster@mustermail.ch" type="email" required></b-form-input>
            </b-col>
          </div>
          <router-link to="/step9">
            <button style="height: 48px; width: 100%;"
                    class="button" :disabled="!Email"
                    name="next" type="submit" @click="submitEmail">
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
  name: "Step9",
  data() {
    return {
      Email: ''
    };
  },
  methods: {
    submitEmail() {

    }
  }
}
</script>

<style scoped>

</style>