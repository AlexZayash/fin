<template>
  <div class="sidebar">

    <div class="sidebar_head">
      <!-- sidebar_logo -->
      <a href="https://kasko2go.com/en/" class="sidebar_logo">
        <img src="../static/images/logo.svg" alt="">
      </a>

<!--      { v-if Data.Language }-->
<!--      {{ else }}-->
      <div class="sidebar_language">
        <div class="sidebar_language_title">
          <span>En</span>
          <i class="language_arrow"></i>
        </div>
        <ul class="sidebar_language_list">
<!--          <li>-->
<!--            <a :href="langChange('de')">-->
<!--              <img src="../static/images/language/germany.svg" alt="">-->
<!--              <div class="sidebar_language_info">-->
<!--                <span>German</span>-->
<!--              </div>-->
<!--            </a>-->
<!--          </li>-->
          <li>
<!--            <a :href="langChange('en')">-->

              <img src="../static/images/language/united-kingdom.svg" alt="">
              <div class="sidebar_language_info">
                <span>English</span>
              </div>
<!--            </a>-->
          </li>
<!--          <li>-->
<!--              <a :href="langChange('fr')">-->
<!--                  <img src="../static/images/language/france.svg" alt="">-->
<!--                  <div class="sidebar_language_info">-->
<!--                      <span>French</span>-->
<!--                  </div>-->
<!--              </a>-->
<!--          </li>-->
        </ul>
      </div>
<!--      {{ end }}-->

      <div class="sidebar_buttons">
        <button class="sidebar_burger">
          <div class="burger_line"></div>
          <div class="burger_line"></div>
          <div class="burger_line"></div>
        </button>
      </div>

    </div>

    <ul class="sidebar_list" id="progressBar">
      <!-- <li class="complete"> -->
      <!-- <li class="active"> -->
      <li :class="styleIndicatorValue(2)">
        <!-- <a class="sidebar_link" href="#step1"> -->
        <span class="sidebar_step">Step 1</span>
        <p class="sidebar_title">Vehicle details</p>
        <!-- </a> -->
      </li>
      <li :class="styleIndicatorValue(3)">
        <!-- <a class="sidebar_link" href="#step2"> -->
        <span class="sidebar_step">Step 2</span>
        <p class="sidebar_title">Insurance</p>
        <!-- </a> -->
      </li>
      <li :class="styleIndicatorValue(4)">
        <!-- <a class="sidebar_link" href="#step3"> -->
        <span class="sidebar_step">Step 3</span>
        <p class="sidebar_title">Personal details</p>
        <!-- </a> -->
      </li>
      <li :class="styleIndicatorValue(5)">
        <!-- <a class="sidebar_link" href="#step4"> -->
        <span class="sidebar_step">Step 4</span>
        <p class="sidebar_title">Other details</p>
        <!-- </a> -->
      </li>
      <li :class="styleIndicatorValue(6)">
        <!-- <a class="sidebar_link" href="#step5"> -->
        <span class="sidebar_step">Step 5</span>
        <p class="sidebar_title">Final details</p>
        <!-- </a> -->
      </li>
    </ul>
    <div class="sidebar_action">
      <div class="sidebar_action_help">
        <p class="sidebar_action_title">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M12 0C5.3835 0 0 5.3835 0 12C0 18.6165 5.3835 24 12 24C18.6165 24 24 18.6165 24 12C24 5.3835 18.6165 0 12 0ZM13.5 5.25C14.3287 5.25 15 5.92125 15 6.75C15 7.57875 14.3287 8.25 13.5 8.25C12.6713 8.25 12 7.57875 12 6.75C12 5.92125 12.6713 5.25 13.5 5.25ZM14.8223 18.0345C13.458 18.5715 13.0598 18.75 12.1838 18.75C11.4683 18.75 10.9118 18.5753 10.515 18.2265C9.73125 17.5365 9.86325 16.5405 10.1085 15.5205L10.8465 12.9083C10.989 12.3705 11.2778 11.2718 10.8735 10.8863C10.4692 10.5008 9.528 10.7445 8.9805 10.9485L9.17775 10.1437C9.96825 9.822 10.9672 9.42825 11.82 9.42825C13.1025 9.42825 14.0408 10.0695 14.0408 11.28C14.0408 11.3932 14.0272 11.5927 14.001 11.8792C13.9515 12.405 13.9365 12.3705 13.1175 15.27C13.026 15.5888 12.8843 16.266 12.8843 16.5938C12.8843 17.856 14.352 17.544 15.0195 17.229L14.8223 18.0345Z"
                fill="white" />
          </svg>

          <span>Help</span>
        </p>
        <ul class="sidebar_action_list">
          <li>
            <a href="tel:+41 41 510 23 23">
              <img src="../static/images/icons/phone.svg" alt="">
              <div class="sidebar_action_info">
                <span>Phone</span>
                <span>+41 41 510 23 23</span>
              </div>
            </a>
          </li>
          <li>
            <a href="mailto:support@kasko2go.com">
              <img src="../static/images/icons/email.svg" alt="">
              <div class="sidebar_action_info">
                <span>E-mail</span>
                <span>support@kasko2go.com</span>
              </div>
            </a>
          </li>
          <li>
            <a href="https://wa.me/41791339657">
              <img src="../static/images/icons/whatsapp.svg" alt="">
              <div class="sidebar_action_info">
                <span>WhatsApp</span>
                <span>+41 79 133 96 57</span>
              </div>
            </a>
          </li>
        </ul>
      </div>

      <div class="sidebar_action_help">
        <p class="sidebar_action_title">
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M12.2197 3.96967C12.5126 3.67678 12.9874 3.67678 13.2803 3.96967L17.7803 8.46967C18.0732 8.76256 18.0732 9.23744 17.7803 9.53033L13.2803 14.0303C12.9874 14.3232 12.5126 14.3232 12.2197 14.0303C11.9268 13.7374 11.9268 13.2626 12.2197 12.9697L16.1893 9L12.2197 5.03033C11.9268 4.73744 11.9268 4.26256 12.2197 3.96967Z"
                  fill="white" />
            <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M4.5 9C4.5 8.58579 4.83579 8.25 5.25 8.25H17.25C17.6642 8.25 18 8.58579 18 9C18 9.41421 17.6642 9.75 17.25 9.75H5.25C4.83579 9.75 4.5 9.41421 4.5 9Z"
                  fill="white" />
            <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M2.25 1.5C2.05109 1.5 1.86032 1.57902 1.71967 1.71967C1.57902 1.86032 1.5 2.05109 1.5 2.25V15.75C1.5 15.9489 1.57902 16.1397 1.71967 16.2803C1.86032 16.421 2.05109 16.5 2.25 16.5H8.25C8.66421 16.5 9 16.8358 9 17.25C9 17.6642 8.66421 18 8.25 18H2.25C1.65326 18 1.08097 17.7629 0.65901 17.341C0.237053 16.919 0 16.3467 0 15.75V2.25C0 1.65326 0.237053 1.08097 0.65901 0.65901C1.08097 0.237053 1.65326 0 2.25 0H8.25C8.66421 0 9 0.335786 9 0.75C9 1.16421 8.66421 1.5 8.25 1.5H2.25Z"
                  fill="white" />
          </svg>
        </p>
            <div class="sidebar_action_info">
              <a href="https://kasko2go.com/en/">
                <span>"To the kasko2go Homepage"</span>
              </a>
            </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>

</style>