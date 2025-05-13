import Navbar from './Navbar';
import './Dashboard.css';
import './WeightProgress.css';

const WeightProgressPage = () => (
  <div className="dashboard">
    <Navbar />
    <main className="dashboard-content">
      <div className="dashboard-header">
        <h1>Weight Progress</h1>
        <p className="subtitle">Track your weight changes over time. More features coming soon!</p>
      </div>
      <div className="weight-progress-section">
        <h2>Weight History</h2>
        <div className="chart-container">
          {/* Dummy chart, similar to dashboard */}
          <svg viewBox="0 0 800 300" className="weight-chart" preserveAspectRatio="none">
            <g className="grid-lines">
              <line x1="0" y1="0" x2="800" y2="0" />
              <line x1="0" y1="75" x2="800" y2="75" />
              <line x1="0" y1="150" x2="800" y2="150" />
              <line x1="0" y1="225" x2="800" y2="225" />
              <line x1="0" y1="300" x2="800" y2="300" />
            </g>
            <path d="M0,50 C100,70 200,90 300,110 C400,130 500,150 600,170 C700,190 800,210 800,230" className="chart-line" fill="none" />
            <g className="x-labels">
              <text x="0" y="290">9/1</text>
              <text x="100" y="290">9/8</text>
              <text x="200" y="290">9/15</text>
              <text x="300" y="290">9/22</text>
              <text x="400" y="290">9/29</text>
              <text x="500" y="290">10/6</text>
              <text x="600" y="290">10/13</text>
              <text x="700" y="290">10/20</text>
            </g>
            <g className="y-labels">
              <text x="20" y="20">180</text>
              <text x="20" y="80">170</text>
              <text x="20" y="140">160</text>
              <text x="20" y="200">150</text>
              <text x="20" y="260">140</text>
            </g>
          </svg>
        </div>
        <div style={{marginTop: 32, textAlign: 'center', color: '#6b7280'}}>
          <em>Feature coming soon: Add, edit, and view detailed weight entries!</em>
        </div>
      </div>
    </main>
  </div>
);

export default WeightProgressPage; 