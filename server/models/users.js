const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

const { Schema } = mongoose;

const userSchema = new Schema({
  username: String,
  email: String,
  password: String
});

userSchema.index({ employeeID: 1 });

userSchema.statics.findOne = function findOne(dataUsername, dataPassword) {
  return this.find({ username: dataUsername, password: dataPassword }).exec();
};

userSchema.statics.upsertByEmployeeID = function upsertByEmployeeID(
  employeeID,
  payload
) {
  return this.findOneAndUpdate({ employeeID }, payload, {
    upsert: true,
    new: true
  })
    .lean()
    .exec();
};

export default mongoose.model('User', userSchema);
