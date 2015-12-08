Programs = new Mongo.Collection('programs');

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