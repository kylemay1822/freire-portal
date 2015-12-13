Programs = new Mongo.Collection('programs');

Programs.allow({
  update: function(userId, programs) {
    return programs.createdBy !== userId
  },
  remove: function(userId, programs) {
    return programs.createdBy !== userId
  }
});

Meteor.methods({
  programInsert: function(programAttributes) {

    var program = _.extend(programAttributes, { 
      submitted: new Date()
    });
    var programId = Programs.insert(program);
    return {
      _id: programId
    };
  }
});