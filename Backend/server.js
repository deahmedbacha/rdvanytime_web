const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const bodyParser = require('body-parser');
const User = require('./models/user');
const Doctor = require('./models/Doctor');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 4000;
const authmiddleware = require("./middlewares/auth")
const Appointment = require('./models/Appointment'); 
const Notification = require('./models/notification');
// Middleware
app.use(bodyParser.json());
app.use(cors({
    origin: 'http://localhost:5173', 
    methods: ['GET', 'POST', 'PUT', 'DELETE']
  }));
// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/rdvanytime', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log(err));

// Routes
app.post('/register', async (req, res) => {
    const { firstName, lastName, phoneNumber, email, password } = req.body;

    try {
        let user = await User.findOne({ email });
        if (user) {
            return res.status(400).json({ msg: 'User already exists' });
        }

        // Create new user
        user = new User({firstName, lastName, phoneNumber, email, password });

        // Hash password
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(password, salt);

        // Save user to database
        await user.save();

        res.status(201).json({ msg: 'User registered successfully' });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

app.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
      // Check if user exists
      const user = await User.findOne({ email });
      if (!user) {
          return res.status(400).json({ msg: 'Invalid credentials' });
      }

      // Validate password
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
          return res.status(400).json({ msg: 'Invalid credentials' });
      }

      // User authenticated, generate token
      const payload = {
          user: {
              id: user._id,
              firstName: user.firstName,
              lastName: user.lastName,
              email: user.email // Include email in token payload if needed
          }
      };
      
      jwt.sign(payload, "Blitz", { expiresIn: '1h' }, (err, token) => {
          if (err) {
              console.error(err.message);
              res.status(500).send('Server Error');
          } else {
              res.json({ token });
          }
      });
  } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
  }
});

app.post("/get-user", authmiddleware, async (req, res) => {
  try {
    // Access user information from req.user
    const user = await User.findOne({
      firstName: req.user.user.firstName, // Access firstName from req.user.user
      lastName: req.user.user.lastName, // Access lastName from req.user.user
       // Assuming phoneNumber is not nested in the user object
    });
    console.log("User Model Query:", User.findOne({
      firstName: req.user.user.firstName,
      lastName: req.user.user.lastName,
    }).toString());

    if (!user) {
      return res.status(404).json({ message: "User not found", success: false });
    } else {
      res.status(200).json({
        data: {
          firstName: user.firstName,
          lastName: user.lastName,
          phoneNumber: user.phoneNumber,
          email: user.email,
          taille: user.taille,
          poids: user.poids,
          blood_type: user.blood_type,
          Fumeur: user.Fumeur,
          Alcool: user.Alcool,
          Marie: user.Marie,
          maladieCronique: user.maladieCronique,
          chirurgie: user.chirurgie,
          allergie: user.allergie,
          medicament: user.medicament,
          rue: user.rue,
          rueNumero: user.rueNumero,
          ville: user.ville,
          codePostale: user.codePostale,
          dateNaissance: user.dateNaissance,
          sexe: user.sexe,
          pays: user.pays,
        },
      });
    }
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ message: "Internal Server Error", success: false });
  }
});
app.put('/update-user', authmiddleware, async (req, res) => {
  try {
    // Access user information from req.user
    const userId = req.user.user.id;

    // Update user data
    const updatedUserData = req.body;

    // Find and update the user document in the database
    const user = await User.findByIdAndUpdate(userId, updatedUserData, { new: true });

    if (!user) {
      return res.status(404).json({ message: 'User not found', success: false });
    }

    res.status(200).json({ message: 'User data updated successfully', success: true, data: user });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ message: 'Internal Server Error', success: false });
  }
});

app.post('/search-doctors', (req, res) => {
  const ville = req.body.ville;
  const type = req.body.type;

  // Search for doctors in the database matching the criteria
  if (ville != "" && type != ""){
    Doctor.find({ type, ville }).then((doctor,err) => {
      if (err) {
          console.error('Error finding doctors:', err);
          res.status(500).json({ error: 'Internal Server Error' });
          return;
      }

      res.json(doctor);
  });
  }else if(ville != "" && type==""){
    Doctor.find({ ville }).then((doctor,err) => {
      if (err) {
          console.error('Error finding doctors:', err);
          res.status(500).json({ error: 'Internal Server Error' });
          return;
      }

      res.json(doctor);
  });
  }else if(ville == "" && type!=""){
    Doctor.find({ type }).then((doctor,err) => {
      if (err) {
          console.error('Error finding doctors:', err);
          res.status(500).json({ error: 'Internal Server Error' });
          return;
      }

      res.json(doctor);
  });
  }else if (ville=="" && type==""){
    Doctor.find().then((doctors, err) => {
      if (err) {
          console.error('Error finding doctors:', err);
          res.status(500).json({ error: 'Internal Server Error' });
          return;
      }
  
      res.json(doctors);
  });
  }
    
});
app.post('/doc-calender', (req, res) => {
    const doctorId = new mongoose.Types.ObjectId(req.body.doc_id);
  
    Appointment.find({ doctorId })
      .then((appointments) => {
        console.log('Found appointments:', appointments);
        const dateTimeArray = appointments.map(appointment => appointment.dateTime);
        res.send({dateTime: dateTimeArray});
      })
      .catch((err) => {
        console.error('Error finding appointments:', err);
        res.status(500).json({ error: 'Internal Server Error' });
      });
  });



  app.post('/add-appointment', (req, res) => {
    const { doctorId, patientId, dateTime, notes } = req.body;
  
    // Check if the appointment already exists
    Appointment.find({ doctorId, patientId, dateTime })
      .then((existingAppointments) => {
        if (existingAppointments.length > 0) {
          return res.json({ msg: 'Appointment already exists' });
        }
  
        // Create a new appointment
        const appointment = new Appointment({ doctorId, patientId, dateTime, notes });
        res.json({ msg: 'Appointment added successfully' });
        return appointment.save();
        
      })
      .catch((err) => {
        console.error('Error adding appointment:', err);
        res.status(500).json({ error: 'Internal Server Error' });
      });
  });
  app.post('/doctorbyid', (req, res) => {
    const docId = req.body.docId;
  
    // Find the doctor in the database by doc_id
    Doctor.findOne({ _id: docId })
      .then((doctor) => {
        if (!doctor) {
          return res.status(404).json({ error: 'Doctor not found' });
        }
  
        res.json(doctor);
      })
      .catch((err) => {
        console.error('Error finding doctor:', err);
        res.status(500).json({ error: 'Internal Server Error' });
      });
  });


app.post('/cancel-appointment', (req, res) => {
    const appointmentId = new mongoose.Types.ObjectId(req.body.appointmentId);
    const id = req.body.id;
    Appointment.findByIdAndUpdate(
      appointmentId,
      { status: 'cancelled' },
      { new: true }
    )
      .then((appointment) => {
        if (!appointment) {
          return res.status(404).json({ error: 'Appointment not found' });
        }
        console.log(id);
        if (id==appointment.doctorId){
          notification = new Notification({
            doctorId:appointment.doctorId, 
            patientId:appointment.patientId, 
            dateTime: appointment.dateTime, 
            reason: 'Appointment cancelled',
            who:'Doctor'
          });
          notification.save();
        }
        else if(id==appointment.patientId){
          notification = new Notification({
            doctorId:appointment.doctorId, 
            patientId:appointment.patientId, 
            dateTime: appointment.dateTime, 
            reason: 'Appointment cancelled',
            who:'Patient'
          });
          notification.save();
        }
        res.json({ msg: 'Appointment cancelled successfully' });
      })
      .catch((err) => {
        console.error('Error cancelling appointment:', err);
        res.status(500).json({ error: 'Internal Server Error' });
      });
  });







// in case nzidou  remove the appointment
app.post('/remove-appointment', (req, res) => {
    const appointmentId = new mongoose.Types.ObjectId(req.body.appointmentId);
  
    Appointment.findByIdAndDelete(appointmentId)
      .then((appointment) => {
        if (!appointment) {
          return res.status(404).json({ error: 'Appointment not found' });
        }

        res.json({ msg: 'Appointment removed successfully' });
      })
      .catch((err) => {
        console.error('Error removing appointment:', err);
        res.status(500).json({ error: 'Internal Server Error' });
      });
  });



  app.put('/users-parametre', async (req, res) => {
    const {
      userId,
      taille,
      poids,
      blood_type,
      Fumeur,
      Alcool,
      Marie,
      maladieCronique,
      chirurgie,
      allergie,
      medicament,
    } = req.body;
    const use = new mongoose.Types.ObjectId(userId)
    console.log(userId);
    try {
      const user = await User.findOne(use);
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }
  
      user.taille = taille;
      user.poids = poids;
      user.blood_type = blood_type;
      user.Fumeur = Fumeur;
      user.Alcool = Alcool;
      user.Marie = Marie;
      user.maladieCronique = maladieCronique;
      user.chirurgie = chirurgie;
      user.allergie = allergie;
      user.medicament = medicament;
  
      await user.save();
      res.json(user);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });




  app.post('/notifications/doctor', async (req, res) => {
    const doctorId = req.body.doctorId; // Assuming the doctor ID is provided as "id" in the request body

    try {
        // Search for data related to the doctor ID and where 'who' is "doctor"
        const doctorInfo = await Notification.find({ $and: [{ doctorId: doctorId }, { who: 'Doctor' }] });

        if (!doctorInfo) {
            return res.status(404).json({ error: 'Doctor not found' });
        }

        // Return the doctor data if found and verified
        return res.json(doctorInfo);
    } catch (err) {
        console.error("Error:", err);
        return res.status(500).json({ error: 'Internal server error' });
    }
});










app.post('/notifications/client', async (req, res) => {
  const patientId = req.body.patientId; // Assuming the doctor ID is provided as "id" in the request body

  try {
      // Search for data related to the doctor ID and where 'who' is "doctor"
      const doctorInfo = await Notification.find({ $and: [{ patientId: patientId }, { who: 'Patient' }] });

      if (!doctorInfo) {
          return res.status(404).json({ error: 'Patient not found' });
      }

      return res.json(doctorInfo);
  } catch (err) {
      console.error("Error:", err);
      return res.status(500).json({ error: 'Internal server error' });
  }
});















app.listen(PORT, () => console.log(`Server running on port ${PORT}`));