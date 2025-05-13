import { type FC } from 'react';
import './WeightCard.css';

interface WeightCardProps {
  title: string;
  weight?: number;
  weightLoss?: number;
  weightLossPercentage?: number;
  showProgress?: boolean;
  shipment?: {
    date: string;
    weight: string;
    status: string;
  };
}

const WeightCard: FC<WeightCardProps> = ({
  title,
  weight,
  weightLoss,
  weightLossPercentage,
  showProgress,
  shipment
}) => {
  const renderContent = () => {
    if (shipment) {
      return (
        <div className="shipment-info">
          <div className="shipment-date">
            <i className="icon-calendar"></i>
            Arriving by {shipment.date}
          </div>
          <div className="shipment-weight">{shipment.weight}</div>
          <div className="shipment-status">Status: {shipment.status}</div>
        </div>
      );
    }

    return (
      <>
        <div className="weight-value">
          {weight}
          <span className="weight-unit">lbs</span>
        </div>
        {weightLoss && (
          <div className="weight-loss">
            <span className="loss-value">↓ {weightLoss} lbs ({weightLossPercentage}%)</span>
            <span className="loss-label">since start</span>
          </div>
        )}
        {showProgress && (
          <div className="weight-progress">
            <div className="progress-bar">
              <div 
                className="progress-fill"
                style={{ width: '75%' }}
              ></div>
            </div>
            <div className="progress-labels">
              <span>Start: 182 lbs</span>
              <span>Target: 145 lbs</span>
            </div>
          </div>
        )}
      </>
    );
  };

  return (
    <div className="weight-card">
      <h3 className="card-title">{title}</h3>
      {renderContent()}
    </div>
  );
};

export default WeightCard; 