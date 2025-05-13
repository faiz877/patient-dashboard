import Navbar from './Navbar';
import './Dashboard.css';

const ProfilePage = () => (
  <div className="dashboard">
    <Navbar />
    <main className="dashboard-content">
      <div className="dashboard-header">
        <h1>Profile</h1>
        <p className="subtitle">Manage your account details and preferences.</p>
      </div>
      <div style={{background: 'white', borderRadius: 12, boxShadow: '0 1px 3px rgba(0,0,0,0.1)', padding: 32, maxWidth: 600, margin: '0 auto'}}>
        <h2 style={{marginBottom: 24}}>Account Information</h2>
        <div style={{display: 'flex', flexDirection: 'column', gap: 20}}>
          <div>
            <label style={{color: '#6b7280', fontWeight: 500}}>Name</label>
            <div style={{fontSize: 18, color: '#111827', marginTop: 4}}>Jane Smith</div>
          </div>
          <div>
            <label style={{color: '#6b7280', fontWeight: 500}}>Email</label>
            <div style={{fontSize: 18, color: '#111827', marginTop: 4}}>jane.smith@example.com</div>
          </div>
          <div>
            <label style={{color: '#6b7280', fontWeight: 500}}>Password</label>
            <div style={{fontSize: 18, color: '#111827', marginTop: 4}}>••••••••</div>
          </div>
        </div>
        <div style={{marginTop: 32, textAlign: 'center', color: '#6b7280'}}>
          <em>Feature coming soon: Edit your profile and change your password!</em>
        </div>
      </div>
    </main>
  </div>
);

export default ProfilePage; 