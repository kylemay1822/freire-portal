Template.programSubmit.events({
  'submit form': function(e) {
    e.preventDefault();

    var program = {
      title: $(e.target).find('[name=title]').val(),
      description: $(e.target).find('[name=description]').val(),
      start: $(e.target).find('[name=start]').val(),
      end: $(e.target).find('[name=end]').val(),
      contact: $(e.target).find('[name=contact]').val(),
    };

    Meteor.call('programInsert', program, function(error, result) {
      if (error)
        return alert(error.reason);
      Router.go('programPage', {_id: result._id});  
    });
  }
});