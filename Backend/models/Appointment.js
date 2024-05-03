const mongoose = require('mongoose');

const AppointmentSchema = new mongoose.Schema({
  doctorId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'Doctor' 
  },
  patientId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'  
  },
  dateTime: {
    type: Date,
    required: true
  },
  reason: {
    type: String,
    trim: true,  
    maxlength: 255 
  },
  notes: {
    type: String,
    trim: true  
  },
  status:{
    type: String,
    default: 'Approved'
  }
});


module.exports = mongoose.model('Appointment', AppointmentSchema);