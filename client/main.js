// Libs
import { Meteor } from 'meteor/meteor';
import Vue from 'vue';
import VueMeteorTracker from 'vue-meteor-tracker'

Vue.use(VueMeteorTracker)

import { Accounts } from 'meteor/accounts-base'

Accounts.ui.config({
  passwordSignupFields: 'USERNAME_AND_EMAIL',
})

// Main app
import App from '/imports/ui/App.vue';

Meteor.startup(() => {
  new Vue({
    render: h => h(App),
  }).$mount('app');
});
