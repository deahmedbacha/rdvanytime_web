const mongoose = require('mongoose');

const NotificationSchema = new mongoose.Schema({
  doctorId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Doctor' // Reference to the Doctor model
  },
  patientId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'  // Reference to the Patient model (optional)
  },
  dateTime: {
    type: Date,
    required: true
  },
  title:{
    type: String,
  },
  reason: {
    type: String,
    trim: true,  // Remove leading/trailing whitespace
    maxlength: 255 // Optional: Limit reason length
  },
  vue:{
    type:Boolean,
    default:false
  },
  who:{
    type:String,
    required:true
  }
});
module.exports = mongoose.model('Notification', NotificationSchema);