const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true
  },
  password: {
    type: String,
    required: true
  },
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  startWeight: {
    type: Number,
    required: true
  },
  targetWeight: {
    type: Number,
    required: true
  },
  currentWeight: {
    type: Number,
    required: true
  },
  weightHistory: [{
    weight: Number,
    date: {
      type: Date,
      default: Date.now
    }
  }],
  medication: {
    type: {
      type: String,
      required: true
    },
    dosage: {
      type: String,
      required: true
    }
  },
  nextShipment: {
    date: Date,
    status: String,
    trackingNumber: String
  }
}, {
  timestamps: true
});

// Hash password before saving
userSchema.pre('save', async function(next) {
  if (!this.isModified('password')) return next();
  
  try {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
  } catch (error) {
    next(error);
  }
});

// Method to compare password
userSchema.methods.comparePassword = async function(candidatePassword) {
  return bcrypt.compare(candidatePassword, this.password);
};

const User = mongoose.model('User', userSchema);

module.exports = User; 