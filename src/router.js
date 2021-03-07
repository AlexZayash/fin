import Vue from 'vue'
import Router from "vue-router";
import Step1 from "@/pages/Step1";
import Step2 from "@/pages/Step2";
import Step3 from "@/pages/Step3";
import Step4 from "@/pages/Step4";
import Step5 from "@/pages/Step5";
import Step6 from "@/pages/Step6";
import Step7 from "@/pages/Step7";
import Step8 from "@/pages/Step8";
import Step9 from "@/pages/Step9";
import Step10 from "@/pages/Step10";

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/step1',
            component: Step1
        },
        {
            path: '/step2',
            component: Step2
        },
        {
            path: '/step3',
            component: Step3
        },
        {
            path: '/step4',
            component: Step4
        },
        {
            path: '/step5',
            component: Step5
        },
        {
            path: '/step6',
            component: Step6
        },
        {
            path: '/step7',
            component: Step7
        },
        {
            path: '/step8',
            component: Step8
        },
        {
            path: '/step9',
            component: Step9
        },
        {
            path: '/step10',
            component: Step10
        },
    ]
})