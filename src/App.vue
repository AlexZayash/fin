<template>
  <div id="app" >


        <router-view/>

  </div>
</template>

<script>
export default {
  name: 'App',
  components:{

  }

}
</script>

<style >

@font-face {
  font-family: 'sharp';
  src: url("/fonts/SharpSans-Book.otf") format("truetype");
  font-weight: normal; }

@font-face {
  font-family: 'sharp-medium';
  src: url("/fonts/SharpSans-Medium.otf") format("truetype");
  font-weight: normal; }

@font-face {
  font-family: 'sharp-bold';
  src: url("/fonts/SharpSans-Semibold.otf") format("truetype");
  font-weight: normal; }

*,
*:before,
*:after {
  box-sizing: border-box;
}

body {
  padding: 0;
  margin: 0;
  overflow-x: hidden;
  /*font-family: 'sharp'; */
}

body::-webkit-scrollbar {
  width: 10px;
  background-color: #fff;
}

body::-webkit-scrollbar-thumb {
  width: 10px;
  background: #32B1F4;
  border-radius: 2px;
}

body.overflow {
  overflow: hidden;
}

.wrapper {
  width: 100%;
  position: relative;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  overflow-x: hidden;
}

ul {
  padding: 0;
  margin: 0;
  list-style: none;
  color: #fff;
}

span,
p {
  margin: 0;
}

a {
  text-decoration: none;
}

a:hover {
  color: #3fabff;
}

h1, h2, h3, h4, h5 {
  margin: 0;
}

input {
  outline: none;
}

input[type=radio] {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  width: 16px;
  min-width: 16px;
  max-width: 16px;
  height: 16px;
  max-height: 16px;
  min-height: 16px;
  border: 1px solid #E0E0E0;
  position: relative;
  border-radius: 50%;
  margin: 0 10px 0 0;
  cursor: pointer;
  box-sizing: inherit;
}

input[type=radio]:before {
  position: absolute;
  content: '';
  width: 8px;
  height: 8px;
  background: #00B6DE;
  border-radius: 50%;
  left: 3px;
  top: 3px;
  opacity: 0;
  transition: all 0.5s;
}

input[type=radio]:checked {
  border: 1px solid #32B1F4;
}

input[type=radio]:checked:before {
  opacity: 1;
}

input[type="range"] {
  -webkit-appearance: none;
  -moz-apperance: none;
  width: 99%;
  height: 3px;
  padding: 0;
  border-left: 1px solid #00B6DE;
  border-right: 1px solid white;
  border-radius: 2px;
  margin-top: 34px;
  background-image: -webkit-gradient(linear, 0% 0%, 100% 0%, color-stop(0.4962, #00B6DE), color-stop(0.4962, white));
  outline: none;
  position: absolute;
}

input[type="range"]::-webkit-slider-thumb {
  -webkit-appearance: none;
  -moz-apperance: none;
  width: 20px;
  height: 20px;
  -webkit-border-radius: 20px;
  -moz-border-radius: 20px;
  -ms-border-radius: 20px;
  -o-border-radius: 20px;
  border-radius: 20px;
  background-image: url("/images/icons/range.svg");
  background-size: 100% 100%;
  background-repeat: no-repeat;
  cursor: pointer;
  border: none;
}

input[type=number]::-webkit-inner-spin-button,
input[type=number]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  display: none;
}

input[type="date"] {
  -webkit-appearance: none;
  font-family: 'sharp-medium', sans-serif;
}

input[type="date"]::-webkit-clear-button {
  display: none;
}

input[type="date"]::-webkit-inner-spin-button {
  display: none;
}

input[type="date"]::-webkit-calendar-picker-indicator {
  display: none;
}

select,
.selectize-input > input {
  font-family: 'sharp-medium';
}

.link {
  font-size: 10px;
  color: #00B6DE;
  font-family: 'sharp-medium';
}

.button {
  width: 130px;
  padding: 13px 0px;
  color: #fff;
  border: none;
  border-radius: 4px;
  background-image: linear-gradient(to right, #1BB3C9, #2CB2E9);
  font-weight: bold;
  cursor: pointer !important;
  font-size: 12px;
  text-align: center;
  font-family: 'sharp';
}

.button:hover {
  color: #fff;
}

.button:disabled {
  color: #808080;
  background-image: initial;
  background-color: #FCB01F;
}

.button-phone {
  width: 150px;
  padding: 13px 0;
  color: #fff;
  border: none;
  border-radius: 4px;
  background-image: linear-gradient(to right, #1BB3C9, #2CB2E9);
  font-weight: bold;
  cursor: pointer !important;
  font-size: 12px;
  text-align: center;
  font-family: 'sharp';
}

.button-phone:hover {
  color: #fff;
}

.button-phone:disabled {
  color: #808080;
  background-image: initial;
  background-color: #E0E0E0;
}

.description {
  font-size: 12px;
  line-height: 1.5em;
  align-items: center;
}

aside {
  flex: 0 27.5%;
  width: 27.5%;
  background: #32B1F4;
  position: fixed;
  padding: 40px 48px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: opacity 0.4s;
  min-height: 100vh;
}

aside:before {
  position: absolute;
  content: '';
  top: 0;
  left: 0;
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  height: 400px;
  background-image: linear-gradient(transparent, transparent, #32B1F4), url("/images/aside_fon.png");
}

.sidebar_head {
  display: flex;
  justify-content: space-between;
  position: relative;
  z-index: 10;
}

.sidebar_buttons {
  display: none;
}

.sidebar_burger {
  background-color: rgba(0, 0, 0, 0);
  border: none;
  width: 50px;
  height: 50px;
  outline: none;
}

.burger_line,
.burger_line:nth-child(2)::after {
  height: 3px;
  background-color: #fff;
  transition: transform 0.3s, opacity 0.2s;
  border-radius: 5px;
}

.burger_line:nth-child(2)::after {
  content: "";
  display: block;
  width: 100%;
}

.burger_line + .burger_line {
  margin-top: 0.5rem;
}

.sidebar_burger.active .burger_line:nth-child(1) {
  opacity: 0;
  transform: translateX(-100%);
}

.sidebar_burger.active .burger_line:nth-child(3) {
  opacity: 0;
  transform: translateX(100%);
}

.sidebar_burger.active .burger_line:nth-child(2) {
  transform: rotate(45deg);
}

.sidebar_burger.active .burger_line:nth-child(2)::after {
  transform: rotate(-90deg);
}

.sidebar_logo {
  display: block;
}

.sidebar_logo img {
  width: 140px;
}

.sidebar_list {
  margin-top: 25%;
  padding-left: 14%;
  position: absolute;
  width: 100%;
  left: 0;
}

.sidebar_list li {
  padding-left: 23px;
  height: 9vh;
  padding-top: 5px;
  position: relative;
  border-left: 1.5px solid rgba(255, 255, 255, 0.3);
  color: rgba(255, 255, 255, 0.8);
}

.sidebar_list li a {
  color: rgba(255, 255, 255, 0.8);
  display: block;
}

.sidebar_list li:last-child {
  border: none;
}

.sidebar_list li:last-child:before {
  left: -7px;
}

.sidebar_list li:before {
  position: absolute;
  content: '';
  width: 16px;
  height: 16px;
  left: -9px;
  top: 0;
  border-radius: 50%;
  background: #ADE0FB;
  z-index: 1;
}

.sidebar_list li.active {
  color: white;
}

.sidebar_list li.active:before {
  background: #00B6DE;
  border: 3px solid #fff;
}

.sidebar_list li.active:after {
  position: absolute;
  content: '';
  right: -1px;
  top: 20%;
  border: 11px solid transparent;
  border-right: 11px solid #F8F8F8;
}

.sidebar_list li.active a {
  color: white;
}

.sidebar_list li.complete {
  color: #fff;
  border-color: #fff;
}

.sidebar_list li.complete:before {
  background: #fff;
  background-image: url("/images/icons/check.svg");
  background-repeat: no-repeat;
  background-position: 40% 50%;
  background-size: 70%;
}

.sidebar_list li.complete a {
  color: white;
}

.sidebar_step {
  font-size: 9px;
  margin-bottom: 7px;
  display: block;
  line-height: 1em;
  /*letter-spacing: -0.5; */
}

.sidebar_title {
  font-size: 13px;
  font-weight: bold;
  line-height: 1em;
}

.sidebar_action_help {
  padding-left: 16px;
  position: relative;
  cursor: pointer;
  height: 50px;
  display: flex;
  align-items: flex-end;
}

.sidebar_action_help p {
  display: flex;
  align-items: center;
}

.sidebar_action_help img {
  width: 19px;
  height: 19px;
}

.sidebar_action_help span {
  color: #fff;
  font-size: 12px;
  margin-left: 10px;
  font-weight: bold;
}

.sidebar_action {
  margin-top: 78px;
}


.sidebar_action_list {
  position: absolute;
  background: #fff;
  bottom: 0;
  right: 0;
  width: 70%;
  border-radius: 5px;
  padding: 3px;
  display: none;
}

.sidebar_action_list span,
.sidebar_language_list span {
  color: #000;
  font-weight: bold;
  font-size: 10px;
}

.sidebar_action_list li,
.sidebar_language_list li {
  display: flex;
  align-items: center;
  border-radius: 3px;
  transition: all 0.5s;
}

.sidebar_action_list li:hover,
.sidebar_language_list li:hover {
  background: #F6F6F6;
}

.sidebar_action_list a,
.sidebar_language_list a {
  display: flex;
  align-items: center;
  padding: 5% 6%;
  width: 100%;
}

.sidebar_action_list.active {
  display: flex;
}

.sidebar_action_help:hover .sidebar_action_list {
  display: block;
}

.sidebar_language:hover .sidebar_language_list {
  display: block;
}

.sidebar_action_info,
.sidebar_language_info {
  display: flex;
  flex-direction: column;
}

.sidebar_action_info span:nth-child(2) {
  display: none;
}


.sidebar_language {
  position: relative;
}

.sidebar_language_title {
  color: #fff;
  font-size: 13px;
  padding: 5px 7px;
  background: rgba(88, 192, 246, 0.9);
  margin-top: 0;
  border-radius: 3px;
  font-weight: bold;
  cursor: pointer;
  display: flex;
  align-items: center;
  margin-right: 0;
}

.language_arrow {
  display: block;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 5px 4px 0 4px;
  border-color: #fff transparent transparent transparent;
  margin-left: 3px;
}

.sidebar_language_list {
  position: absolute;
  background: #fff;
  top: 100%;
  right: 0;
  width: 230px;
  border-radius: 5px;
  padding: 3px;
  display: none;
}

.sidebar_language_list li {
  padding: 4px 3px;
}


.sidebar_language_list span {
  font-size: 12px;
}

.sidebar_language_list img {
  width: 22px;
  height: 22px;
  margin-right: 13px
}

.sidebar_language_list a {
  padding: 4% 6%
}


.sidebar_action_portfolio {
  width: 100%;
  display: flex;
  align-items: flex-start;
  margin-top: 23px;
  padding: 18px 17px 12px;
  color: #fff;
  background: #5BC1F6;
  border-radius: 5px;
  position: relative;
}

.sidebar_action_portfolio img {
  width: 18px;
  height: 18px;
}

.sidebar_portfolio_info {
  padding-left: 12px;
}

.sidebar_portfolio_info p {
  font-size: 12px;
  font-weight: bold;
  letter-spacing: 0.5px;
}

.sidebar_portfolio_info span {
  font-size: 9px;
}

.sidebar_portfolio_exit {
  position: absolute;
  right: 15px;
  top: 38%;
}

.sidebar_portfolio_exit img {
  width: 16px;
  height: 14px;
}

main {
  flex: 0 72.5%;
  background: #F8F8F8;
  display: flex;
  justify-content: center;
  min-height: 100vh;
  margin-left: 27.5%;
}

.content {
  width: 61%;
  background: #fff;
  margin-left: 10px;
  margin-top: 68px;
  padding: 7% 8%;
  height: auto;
  height: max-content;
  margin-bottom: 18px;
}

.content .caption {
  text-align: center;
  font-size: 10px;
  color: #808080;
  margin-top: 8px;
}

.title {
  display: block;
  width: 100%;
  text-align: center;
  font-weight: bold;
  font-family: 'sharp-medium';
  font-size: 24px;
}

form {
  margin-top: 35px;
}

.form_label_head {
  display: flex;
  justify-content: space-between;
  margin-bottom: 5px;
  width: 100%;
}

.form_label_head_right {
  justify-content: flex-end;
}

.form_span {
  font-size: 11px;
  color: #808080;
  letter-spacing: 0.5px;
}

.form_span.from_blue {
  color: #00B6DE;
  font-weight: bold;
}

.form_span.form_span_error {
  color: #FF0F0F;
  display: none;
}

.form_label_alert_error {
  display: none;
  position: absolute;
  right: 0%;
  top: 0%;
  width: 50px;
  height: 50px;
  z-index: 1;
}

.form_label {
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  caret-color: #32B1F4;
  position: relative;
}

.form_label_error .selectize-control.single .selectize-input:after {
  display: none;
}

.form_label.form_label_error .form_span_error {
  display: block;
}

.form_label.form_label_error .form_label_alert_error {
  display: block;
}

.form_label.form_label_error .form_input {
  border-color: #FF0F0F;
}

.form_label.form_label_error .form_label_radio {
  border-color: #FF0F0F;
}

.form_label.form_label_error .selectize-control.single .selectize-input {
  border-color: #FF0F0F;
}

.form_label.form_label_disabled .form_input,
.form_label.form_label_disabled .form_label_radio {
  background: #F5F5F5;
}

.form_label.form_label_disabled input:checked ~ .checkmark {
  border-color: #E0E0E0;
}

.form_label.form_label_disabled .checkmark {
  border-color: #E0E0E0;
}

.form_label.form_label_disabled .checkmark:after {
  background: #E0E0E0;
}

.form_label_input {
  width: 100%;
  display: flex;
  justify-content: space-between;
  position: relative;
}

.form_label_radios_3 .form_label_radio {
  flex: 0 32%;
}

.form_input {
  width: 100%;
  padding: 10px;
  border: 1px solid #E0E0E0;
  border-radius: 4px;
  font-family: 'sharp-medium';
  font-size: 12px;
  color: #000;
}

.form_input:disabled {
  background: #F5F5F5;
  color: #808080;
}

.form_input:focus {
  border-color: #32B1F4;
}

.form_label_radio {
  padding: 11px 0 9px 35px;
  border: 1px solid #E0E0E0;
  border-radius: 4px;
  font-family: 'sharp-medium';
  font-size: 12px;
  width: 100%;
  display: flex;
  cursor: pointer;
  position: relative;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  flex: 0 48%;
}

.form_label_radio_disabled {
  background: #F5F5F5;
}

.form_label_radio .form_label_icon {
  top: 8px;
}

.form_label_radio input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
}

.form_label_radio input:checked ~ .checkmark {
  border-color: #2196F3;
}

.form_label_radio input:checked ~ .checkmark:after {
  display: block;
}

.form_range_caption {
  position: absolute;
  right: 15px;
  top: 12px;
  font-size: 12px;
  color: #808080;
}

.checkmark {
  position: absolute;
  top: 9px;
  left: 10px;
  height: 18px;
  min-height: 18px;
  max-height: 18px;
  width: 18px;
  max-width: 18px;
  border: 1px solid #eee;
  border-radius: 100%;
  display: block;
  box-sizing: border-box;
}

.checkmark:after {
  content: "";
  position: absolute;
  display: none;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 9px;
  min-width: 9px;
  max-width: 9px;
  height: 9px;
  min-height: 9px;
  border-radius: 50%;
  background: #2196F3;
}

.form_label_alert {
  position: absolute;
  right: 0;
  top: 0;
}

.form_label_icon {
  position: absolute;
  top: 8px;
  right: 15px;
  cursor: pointer;
  width: 20px;
}

.form_label_info {
  background-color: #fff;
  font-size: 12px;
  padding: 10px;
  border-radius: 4px;
  border: 1px solid #E0E0E0;
  z-index: 1;
  margin-top: 55px;
  /* margin-right: -160px; */
  width: 150px;
  max-width: 150px;
  display: none;
  color: #444;
}

.form_label_icon:hover ~ .form_label_info {
  display: block;
}

.form_action {
  margin-top: 28px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.form_action img {
  margin-right: 8px;
}

.wrap {
  width: 100%;
  flex-direction: column;
  align-items: center;
  display: none;
}

.wrap.active {
  display: flex;
}

.wrap .description {
  width: 75%;
  text-align: center;
  font-size: 11px;
  line-height: 1.6em;
  margin-bottom: 15px;
}

.wrap .link {
  display: flex;
  align-items: center;
  justify-content: center;
}

.wrap .link img {
  margin-right: 10px;
  margin-top: -3px;
}

.summary {
  margin-top: 50px;
}

.summary .title {
  text-align: left;
  font-size: 18px;
  padding-left: 20px;
}

.summary_content {
  padding: 7% 5%;
}

.summary_content .form_action {
  margin-top: 40px;
}

.summary_wrap {
  padding: 20px 0px 10px;
  position: relative;
}

.summary_wrap .title {
  font-size: 12px;
  padding-left: 20px;
}

.summary_link {
  display: block;
  position: absolute;
  top: 25px;
  right: 25px;
  transform: scale(0);
  transition: all 0.3s;
}

.summary_body .summary_wrap:hover {
  background: rgba(196, 196, 196, 0.08);
}

.summary_body .summary_wrap:hover .summary_link {
  transform: scale(0.9);
}

.summary_title {
  font-size: 10px;
  color: #808080;
  line-height: 1.3em;
  font-family: 'sharp-medium';
  display: block;
}

.summary_description {
  font-size: 12px;
  font-family: 'sharp-medium';
}

.summary_list {
  display: flex;
  flex-wrap: wrap;
  color: #000;
  margin-top: 17px;
  justify-content: space-between;
  padding: 0px 20px;
}

.summary_item {
  flex: 0 47%;
  margin-bottom: 9px;
}

.summary_item.summary_default .summary_description {
  color: #808080;
}

.summary_total {
  display: flex;
  justify-content: space-between;
  border-top: 1px solid rgba(196, 196, 196, 0.4);
  border-bottom: 1px solid rgba(196, 196, 196, 0.4);
  padding: 30px 0px 5px;
  margin: 20px 30px 20px;
}

.summary_total .title {
  flex: 0 50%;
  font-size: 12px;
  padding-left: 0;
}

.summary_total .summary_tariff {
  flex: 0 50%;
}

.summary_tariff {
  display: flex;
  flex-direction: column;
  padding-left: 10px;
}

.summary_tariff .title {
  color: #00B6DE;
  font-size: 14px;
  margin-bottom: 5px;
  padding-left: 0;
}

.summary_tariff .description {
  width: 100%;
  text-align: left;
  line-height: 1.1em;
}

.wrap.fancybox-content {
  width: 44vw;
  height: auto;
  padding: 3% 3%;
  background: #fff;
  transform: translate(13.5vw, -4vw);
  margin-top: 100px;
}

.wrap.fancybox-content .content {
  width: 100%;
  margin: 0;
}

.wrap.fancybox-content .description {
  display: none;
}

.fancybox-container {
  font-family: 'sharp';
}

.popup {
  width: 44vw;
  height: auto;
  padding: 3% 10%;
  background: #fff;
  transform: translate(13.5vw, -4vw);
  display: none;
}

.popup .description {
  width: 90%;
  text-align: center;
  font-size: 12px;
  margin-top: -20px;
}

.popup .title {
  margin-top: -20px;
}

.popup .button {
  font-size: 10px;
  letter-spacing: 0.5px;
  font-family: 'sharp-medium';
}

.popup .link {
  font-family: 'sharp-medium';
}

.popup_container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  min-height: 275px;
}

.popup_logo {
  width: 60px;
  margin: 15px 0 10px;
}

.result_content {
  width: 93%;
  margin-top: 50px;
}

.result_content .title {
  font-size: 28px;
  margin-top: 8px;
}

.result_wrap {
  display: flex;
  justify-content: space-between;
}

.result_wrap form {
  flex: 0 59%;
  margin-top: 60px;
}

.wrap_cards {
  flex: 0 32%;
  margin-top: 50px;
}

.wrap_cards::-webkit-scrollbar {
  height: 0px;
}

.wrap_cards::-webkit-scrollbar-thumb {
  height: 0px;
}


.card {
  display: flex;
  width: 98%;
  height: 135px;
  border: 4px solid #000;
  border-radius: 10px;
  flex-direction: column;
  position: relative;
  margin-bottom: 25px;
  transition: all 0.3s;
}

.card:before {
  position: absolute;
  content: '';
  right: -20px;
  top: 40%;
  border: 10px solid transparent;
  border-left: 10px solid #000;
}

.card_classic {
  border-color: #1ED6FF;
}

.card_classic:before {
  border-left: 10px solid #1ED6FF;
}

.card_classic .card_head_title {
  color: #1ED6FF;
}

.card_classic.active .card_head, .card_classic:hover .card_head {
  background: #fff;
}

.card_classic.active .card_content, .card_classic:hover .card_content {
  background-image: linear-gradient(to right, #0CBFE2, #43E7F2);
  color: #fff;
}

.card_classic.active .card_description span, .card_classic:hover .card_description span {
  color: #fff;
}

.card_basic {
  border-color: #EB920C;
}

.card_basic:before {
  border-left: 10px solid #EB920C;
}

.card_basic .card_head_title {
  color: #FF9A00;
}

.card_basic.active .card_head, .card_basic:hover .card_head {
  background: #fff;
}

.card_basic.active .card_content, .card_basic:hover .card_content {
  background-image: linear-gradient(to right, #FFB13A, #FF9C06);
  color: #fff;
}

.card_basic.active .card_description span, .card_basic:hover .card_description span {
  color: #fff;
}

.card_plus {
  border-color: #000;
}

.card_plus:before {
  border-left: 10px solid #000;
}

.card_plus .card_head_title {
  color: #000;
}

.card_plus.active .card_head, .card_plus:hover .card_head {
  background: #fff;
}

.card_plus.active .card_content, .card_plus:hover .card_content {
  background-image: linear-gradient(to right, #333333, #565656);
  color: #fff;
}

.card_plus.active .card_description span, .card_plus:hover .card_description span {
  color: #fff;
}

.card_head {
  width: 100%;
  height: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: rgba(0, 0, 0, 0.03);
  border-radius: 5px 5px 0px 0px;
}

.card_content {
  display: flex;
  flex-direction: column;
  height: 100%;
  align-items: center;
  padding-top: 20px;
  border-radius: 0px 0px 4px 4px;
}

.card_title {
  font-size: 20px;
  font-family: 'sharp';
}

.card_title b {
  font-size: 30px;
  font-family: 'sharp-bold';
}

.card_logo {
  margin-left: 5px;
}

.card_logo img {
  width: 55px;
  margin-top: 5px;
}

.card_head_title {
  font-size: 12px;
  margin-right: 5px;
  font-weight: bold;
}

.card_caption {
  font-size: 8px;
  margin-top: -5px;
}

.card_description {
  font-size: 10px;
  margin-top: 5px;
}

.card_description span {
  color: #60D1EA;
}

.form {
  width: 61%;
  margin-left: -18px;
  margin-top: 68px;
}

.form .title {
  margin-bottom: 30px;
}

.form .content {
  width: 100%;
  margin-top: 0px;
  padding: 10% 14%;
}

main.loader {
  opacity: 0.5;
}

.content {
  -webkit-box-shadow: 0px 50px 47px -46px rgba(0, 0, 0, 0.2);
  -moz-box-shadow: 0px 50px 47px -46px rgba(0, 0, 0, 0.2);
  box-shadow: 0px 50px 47px -46px rgba(0, 0, 0, 0.2);
}

input[type=number] {
  -moz-appearance: textfield;
}

input[type=number]::-webkit-inner-spin-button,
input[type=number]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  -webkit-appearance-margin: 0;
}

.hidden {
  display: none;
}

.popup_summary {
  margin-top: 100px;
  padding: 3%;
}

.popup_summary .content {
  width: 100%;
  margin-left: 0px;
  margin-top: 0px;
}

.popup_summary .title {
  margin-bottom: 50px;
  margin-top: 0px;
}

.popup_summary .content {
  box-shadow: none;
  margin-bottom: 0px;
}

.popup_summary .button {
  font-size: 14px;
}

.fancybox-slide::-webkit-scrollbar {
  width: 10px;
  background-color: #fff;
}

.fancybox-slide::-webkit-scrollbar-thumb {
  width: 10px;
  background: #32B1F4;
  border-radius: 2px;
}

.result_content .checkmark {
  height: 18px;
  min-height: 18px;
  max-height: 18px;
}

.form_label_deductible {
  margin-top: -10px;
}

.loader_wrap {
  top: 0%;
  width: 73%;
  left: 27.5%;
  height: 100vh;
  background-color: rgba(255, 255, 255, 0.6);
  display: none;
  position: fixed;
  z-index: 5;
}

.loader_wrap.active {
  display: block;
}

.preloader:before {
  position: absolute;
  content: '';
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background: #fff;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -79%);
}

.preloader::after {
  position: absolute;
  top: 0;
  bottom: 4%;
  right: 0;
  left: 0;

  content: " ";
  display: block;

  margin: auto;
  height: 50px;
  width: 50px;

  box-sizing: border-box;
  border: solid;
  border-width: 4px;
  border-radius: 50%;
  border-top-color: #DA8C05;
  border-bottom-color: #fff;
  border-right-color: #fff;
  border-left-color: #fff;

  animation: rotating 0.9s linear infinite;
}

@keyframes rotating {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.selectize-input.items.not-full.disabled.locked input[type=select-one] {
  width: 100% !important;
}

.form_label_alert .form_label_info {
  margin-top: 35px;
}

.button_disabled {
  background: #e0e0e0;
  color: #808080;
  pointer-events: none;
}

.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgb(255, 255, 255);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  vertical-align: middle;
  position: fixed;
  bottom: 0;
  width: 100%;
}

.modal-container {
  display: inline-block;
  vertical-align: middle;
  height: auto;
  width: 100%;
  margin: 0px auto;
  padding: 5px 15px;
  background-color: rgb(0, 0, 0);
  -webkit-box-shadow: 0 10px 30px 0 rgba(179, 179, 179, 0.1);
  -moz-box-shadow: 0 10px 30px 0 rgba(179, 179, 179, 0.1);
  box-shadow: 0 10px 30px 0 rgba(179, 179, 179, 0.1);
  transition: all 0.3s ease;
}

.modal-header {
  padding: 5px;
  color: #34BCB1;
  font-size: 26px !important;
  text-align: center;
}

.modal-body {
  float: left;
  padding: 15px;
  color: #c7c7c7;
  font-size: 12px !important;
  text-align: left;
}

.modal-button {
  width: 130px;
  padding: 13px 0px;
  color: #fff;
  border: none;
  border-radius: 4px;
  background-image: linear-gradient(to right, #1BB3C9, #2CB2E9);
  font-weight: bold;
  cursor: pointer !important;
  font-size: 12px;
  text-align: center;
  font-family: 'sharp';
}

.modal-button:hover {
  color: #fff;
}

.modal-link {
  font-size: 12px;
  color: #00B6DE;
  font-family: 'sharp-medium';
}

.modal-enter {
  opacity: 0;
}

.modal-leave {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}

/*.summary_list_details{
    columns: 2;
    -webkit-columns: 2;
    -moz-columns: 2;
    display: block;
}*/

</style>
