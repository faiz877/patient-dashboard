require('dotenv').config({ path: '../../.env' });
const mongoose = require('mongoose');
const User = require('../models/User');

const users = [
  {
    email: 'john.doe@example.com',
    password: 'password123',
    firstName: 'John',
    lastName: 'Doe',
    startWeight: 200,
    targetWeight: 160,
    currentWeight: 185,
    weightHistory: [
      { weight: 200, date: '2023-09-01' },
      { weight: 195, date: '2023-09-15' },
      { weight: 190, date: '2023-10-01' },
      { weight: 185, date: '2023-10-15' }
    ],
    medication: {
      type: 'Semaglutide',
      dosage: '1.0mg'
    },
    nextShipment: {
      date: '2023-11-05',
      status: 'Processing',
      trackingNumber: 'TN123456789'
    }
  },
  {
    email: 'jane.smith@example.com',
    password: 'password123',
    firstName: 'Jane',
    lastName: 'Smith',
    startWeight: 180,
    targetWeight: 140,
    currentWeight: 157,
    weightHistory: [
      { weight: 180, date: '2023-09-01' },
      { weight: 172, date: '2023-09-15' },
      { weight: 165, date: '2023-10-01' },
      { weight: 157, date: '2023-10-15' }
    ],
    medication: {
      type: 'Semaglutide',
      dosage: '0.5mg'
    },
    nextShipment: {
      date: '2023-11-10',
      status: 'Shipped',
      trackingNumber: 'TN987654321'
    }
  },
  {
    email: 'sarah.wilson@example.com',
    password: 'password123',
    firstName: 'Sarah',
    lastName: 'Wilson',
    startWeight: 190,
    targetWeight: 150,
    currentWeight: 175,
    weightHistory: [
      { weight: 190, date: '2023-09-01' },
      { weight: 185, date: '2023-09-15' },
      { weight: 180, date: '2023-10-01' },
      { weight: 175, date: '2023-10-15' }
    ],
    medication: {
      type: 'Semaglutide',
      dosage: '1.0mg'
    },
    nextShipment: {
      date: '2023-11-15',
      status: 'Processing',
      trackingNumber: null
    }
  },
  {
    email: 'michael.brown@example.com',
    password: 'password123',
    firstName: 'Michael',
    lastName: 'Brown',
    startWeight: 220,
    targetWeight: 180,
    currentWeight: 205,
    weightHistory: [
      { weight: 220, date: '2023-09-01' },
      { weight: 215, date: '2023-09-15' },
      { weight: 210, date: '2023-10-01' },
      { weight: 205, date: '2023-10-15' }
    ],
    medication: {
      type: 'Semaglutide',
      dosage: '1.5mg'
    },
    nextShipment: {
      date: '2023-11-08',
      status: 'In Transit',
      trackingNumber: 'TN456789123'
    }
  },
  {
    email: 'emily.davis@example.com',
    password: 'password123',
    firstName: 'Emily',
    lastName: 'Davis',
    startWeight: 170,
    targetWeight: 135,
    currentWeight: 152,
    weightHistory: [
      { weight: 170, date: '2023-09-01' },
      { weight: 165, date: '2023-09-15' },
      { weight: 158, date: '2023-10-01' },
      { weight: 152, date: '2023-10-15' }
    ],
    medication: {
      type: 'Semaglutide',
      dosage: '0.5mg'
    },
    nextShipment: {
      date: '2023-11-20',
      status: 'Scheduled',
      trackingNumber: null
    }
  },
  {
    email: 'david.miller@example.com',
    password: 'password123',
    firstName: 'David',
    lastName: 'Miller',
    startWeight: 210,
    targetWeight: 170,
    currentWeight: 190,
    weightHistory: [
      { weight: 210, date: '2023-09-01' },
      { weight: 205, date: '2023-09-15' },
      { weight: 195, date: '2023-10-01' },
      { weight: 190, date: '2023-10-15' }
    ],
    medication: {
      type: 'Semaglutide',
      dosage: '1.0mg'
    },
    nextShipment: {
      date: '2023-11-12',
      status: 'Processing',
      trackingNumber: 'TN789123456'
    }
  },
  {
    email: 'lisa.taylor@example.com',
    password: 'password123',
    firstName: 'Lisa',
    lastName: 'Taylor',
    startWeight: 165,
    targetWeight: 130,
    currentWeight: 145,
    weightHistory: [
      { weight: 165, date: '2023-09-01' },
      { weight: 160, date: '2023-09-15' },
      { weight: 152, date: '2023-10-01' },
      { weight: 145, date: '2023-10-15' }
    ],
    medication: {
      type: 'Semaglutide',
      dosage: '0.5mg'
    },
    nextShipment: {
      date: '2023-11-18',
      status: 'Scheduled',
      trackingNumber: null
    }
  },
  {
    email: 'robert.anderson@example.com',
    password: 'password123',
    firstName: 'Robert',
    lastName: 'Anderson',
    startWeight: 230,
    targetWeight: 185,
    currentWeight: 210,
    weightHistory: [
      { weight: 230, date: '2023-09-01' },
      { weight: 225, date: '2023-09-15' },
      { weight: 218, date: '2023-10-01' },
      { weight: 210, date: '2023-10-15' }
    ],
    medication: {
      type: 'Semaglutide',
      dosage: '1.5mg'
    },
    nextShipment: {
      date: '2023-11-07',
      status: 'Shipped',
      trackingNumber: 'TN321654987'
    }
  },
  {
    email: 'jennifer.white@example.com',
    password: 'password123',
    firstName: 'Jennifer',
    lastName: 'White',
    startWeight: 175,
    targetWeight: 140,
    currentWeight: 160,
    weightHistory: [
      { weight: 175, date: '2023-09-01' },
      { weight: 170, date: '2023-09-15' },
      { weight: 165, date: '2023-10-01' },
      { weight: 160, date: '2023-10-15' }
    ],
    medication: {
      type: 'Semaglutide',
      dosage: '1.0mg'
    },
    nextShipment: {
      date: '2023-11-14',
      status: 'Processing',
      trackingNumber: 'TN147258369'
    }
  },
  {
    email: 'william.jackson@example.com',
    password: 'password123',
    firstName: 'William',
    lastName: 'Jackson',
    startWeight: 195,
    targetWeight: 160,
    currentWeight: 180,
    weightHistory: [
      { weight: 195, date: '2023-09-01' },
      { weight: 190, date: '2023-09-15' },
      { weight: 185, date: '2023-10-01' },
      { weight: 180, date: '2023-10-15' }
    ],
    medication: {
      type: 'Semaglutide',
      dosage: '1.0mg'
    },
    nextShipment: {
      date: '2023-11-16',
      status: 'Scheduled',
      trackingNumber: null
    }
  }
];

const seedDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Connected to MongoDB');

    // Clear existing users
    await User.deleteMany({});
    console.log('Cleared existing users');

    // Insert new users
    await User.create(users);
    console.log('Added test users to database');

    mongoose.connection.close();
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
};

seedDatabase(); 