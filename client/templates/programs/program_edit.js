Template.programEdit.events({
  'submit form': function(e) {
    e.preventDefault();

    var currentProgramId = this._id;

    var programProperties = {
      title: $(e.target).find('[name=title]').val(),
      description: $(e.target).find('[name=description]').val(),
      start: $(e.target).find('[name=start]').val(),
      end: $(e.target).find('[name=end]').val(),
      contact: $(e.target).find('[name=contact]').val(),
    };

    Programs.update(currentProgramId, {$set: programProperties}, function(error) {
      if (error) {
        alert(error.reason);
      } else {
        Router.go('programPage', {_id: currentProgramId});
      }
    });
  },

  'click .delete': function(e) {
    e.preventDefault();

    if (confirm("Delete this Program?")) {
      var currentProgramId = this._id;
      Programs.remove(currentProgramId);
      Router.go('programsList');
    }
  }
});