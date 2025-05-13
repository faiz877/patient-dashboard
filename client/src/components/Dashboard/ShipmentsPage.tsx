import Navbar from './Navbar';
import './Dashboard.css';

const ShipmentsPage = () => (
  <div className="dashboard">
    <Navbar />
    <main className="dashboard-content">
      <div className="dashboard-header">
        <h1>Shipments</h1>
        <p className="subtitle">View your medication shipment history and upcoming deliveries.</p>
      </div>
      <div style={{background: 'white', borderRadius: 12, boxShadow: '0 1px 3px rgba(0,0,0,0.1)', padding: 32, marginBottom: 32}}>
        <h2 style={{marginBottom: 24}}>Upcoming Shipment</h2>
        <div style={{display: 'flex', alignItems: 'center', gap: 32, marginBottom: 24}}>
          <div style={{fontSize: 18, fontWeight: 500}}>Arriving by <b>2023-11-20</b></div>
          <div style={{fontSize: 16}}>Dosage: <b>1.0mg</b></div>
          <div style={{fontSize: 16}}>Status: <span style={{color: '#3b82f6'}}>In Transit</span></div>
        </div>
        <div style={{color: '#6b7280'}}>Tracking Number: <span style={{color: '#111827'}}>TN123456789</span></div>
      </div>
      <div style={{background: 'white', borderRadius: 12, boxShadow: '0 1px 3px rgba(0,0,0,0.1)', padding: 32}}>
        <h2 style={{marginBottom: 24}}>Shipment History</h2>
        <table style={{width: '100%', borderCollapse: 'collapse'}}>
          <thead>
            <tr style={{background: '#f3f4f6'}}>
              <th style={{padding: 12, textAlign: 'left', color: '#6b7280'}}>Date</th>
              <th style={{padding: 12, textAlign: 'left', color: '#6b7280'}}>Dosage</th>
              <th style={{padding: 12, textAlign: 'left', color: '#6b7280'}}>Status</th>
              <th style={{padding: 12, textAlign: 'left', color: '#6b7280'}}>Tracking #</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{padding: 12}}>2023-10-15</td>
              <td style={{padding: 12}}>1.0mg</td>
              <td style={{padding: 12}}><span style={{color: '#10b981'}}>Delivered</span></td>
              <td style={{padding: 12}}>TN987654321</td>
            </tr>
            <tr>
              <td style={{padding: 12}}>2023-09-10</td>
              <td style={{padding: 12}}>0.5mg</td>
              <td style={{padding: 12}}><span style={{color: '#10b981'}}>Delivered</span></td>
              <td style={{padding: 12}}>TN456789123</td>
            </tr>
          </tbody>
        </table>
        <div style={{marginTop: 32, textAlign: 'center', color: '#6b7280'}}>
          <em>Feature coming soon: Track shipments and view more details!</em>
        </div>
      </div>
    </main>
  </div>
);

export default ShipmentsPage; 