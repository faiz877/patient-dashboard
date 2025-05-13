import { FC } from 'react';
import './Dashboard.css';
import Navbar from './Navbar';
import WeightCard from './WeightCard';
import WeightProgress from './WeightProgress';

const Dashboard: FC = () => {
  const dummyData = {
    userName: 'Jane Smith',
    currentWeight: 157,
    weightLoss: 25,
    weightLossPercentage: 13.7,
    targetWeight: 145,
    nextShipment: {
      date: '2023-11-05',
      weight: '1.0mg',
      status: 'In Transit'
    }
  };

  return (
    <div className="dashboard">
      <Navbar />
      <main className="dashboard-content">
        <div className="dashboard-header">
          <h1>Dashboard Overview</h1>
          <p>Welcome back, {dummyData.userName}!</p>
          <p className="subtitle">Here's a summary of your weight loss journey and upcoming shipments.</p>
        </div>

        <div className="dashboard-cards">
          <WeightCard
            title="Current Weight"
            weight={dummyData.currentWeight}
            weightLoss={dummyData.weightLoss}
            weightLossPercentage={dummyData.weightLossPercentage}
          />
          <WeightCard
            title="Target Weight"
            weight={dummyData.targetWeight}
            showProgress
          />
          <WeightCard
            title="Next Shipment"
            shipment={dummyData.nextShipment}
          />
        </div>

        <WeightProgress />
      </main>
    </div>
  );
};

export default Dashboard; 