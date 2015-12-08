Router.configure({
  layoutTemplate: 'layout',
  waitOn: function() { return Meteor.subscribe('programs'); }
});

Router.route('/', {name: 'programsList'});
Router.route('/programs/:_id', {
  name: 'programPage',
  data: function() { return Programs.findOne(this.params._id); }
});

Router.route('/programs/:_id/edit', {
  name: 'programEdit',
  data: function() { return Programs.findOne(this.params._id); }
});

Router.route('/submit', {name: 'programSubmit'});

Router.onBeforeAction('dataNotFound', {only: 'programPage'});