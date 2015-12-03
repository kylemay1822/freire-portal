Router.configure({
  layoutTemplate: 'layout',
  waitOn: function() { return Meteor.subscribe('programs'); }
});

Router.route('/', {name: 'programsList'});
Router.route('/programs/:_id', {
  name: 'programPage',
  data: function() { return Posts.findOne(this.params._id); }
});

Router.route('/submit', {name: 'programSubmit'});
Router.route('/footer', {name: 'footer'});


Router.onBeforeAction('dataNotFound', {only: 'programPage'});