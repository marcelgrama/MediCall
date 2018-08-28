const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

const { Schema } = mongoose;

const userSchema = new Schema({
  Nume: String,
  Prenume: String,
  Email: String,
  Telefon: String,
  Clinica: String,
  Parola: String,
  'Cod special': String,
  Specializare: String
});

userSchema.index({ employeeID: 1 });

userSchema.statics.findOne = function findOne(dataUsername, dataPassword) {
  return this.find({ Email: dataUsername, Parola: dataPassword }).exec();
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
