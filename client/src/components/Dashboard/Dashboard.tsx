import { useEffect, useState, type FC } from 'react';
import './Dashboard.css';
import Navbar from './Navbar';
import WeightCard from './WeightCard';
import WeightProgress from './WeightProgress';

const Dashboard: FC = () => {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchUser = async () => {
      setLoading(true);
      setError('');
      try {
        const token = localStorage.getItem('token');
        const res = await fetch('https://patient-dashboard-6cac.onrender.com/api/auth/me', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        if (!res.ok) throw new Error('Failed to fetch user data');
        const data = await res.json();
        setUser(data);
      } catch (err: any) {
        setError(err.message || 'Error fetching user data');
      } finally {
        setLoading(false);
      }
    };
    fetchUser();
  }, []);

  if (loading) return <div className="dashboard"><Navbar /><main className="dashboard-content"><p>Loading...</p></main></div>;
  if (error) return <div className="dashboard"><Navbar /><main className="dashboard-content"><p style={{color: 'red'}}>{error}</p></main></div>;
  if (!user) return null;

  // Calculate weight loss and percentage
  const startWeight = user.weightHistory?.[0]?.weight || user.startWeight;
  const weightLoss = startWeight - user.currentWeight;
  const weightLossPercentage = startWeight ? (weightLoss / startWeight) * 100 : 0;

  return (
    <div className="dashboard">
      <Navbar />
      <main className="dashboard-content">
        <div className="dashboard-header">
          <h1>Dashboard Overview</h1>
          <p>Welcome back, {user.firstName} {user.lastName}!</p>
          <p className="subtitle">Here's a summary of your weight loss journey and upcoming shipments.</p>
        </div>

        <div className="dashboard-cards">
          <WeightCard
            title="Current Weight"
            weight={user.currentWeight}
            weightLoss={weightLoss}
            weightLossPercentage={Number(weightLossPercentage)}
          />
          <WeightCard
            title="Target Weight"
            weight={user.targetWeight}
            showProgress
          />
          <WeightCard
            title="Next Shipment"
            shipment={user.nextShipment}
          />
        </div>

        <WeightProgress />
      </main>
    </div>
  );
};

export default Dashboard; 