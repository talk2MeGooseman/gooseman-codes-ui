import React, { PureComponent } from 'react';
import {
  FREE_PRICING,
  FREEMIUM_PRICING,
  PAID_PRICING,
} from '../../services/Constants';
import { Title } from "../shared/StyledComponents";
import Card from '../Card';
import LearningResourcesList from '../../services/LearningResourcesList';

class LearningResouces extends PureComponent {
  _pricingColor(priceModel) {
    let color;
    switch (priceModel) {
      case FREE_PRICING:
        color = '#64B5F6 ';
        break;
      case FREEMIUM_PRICING:
        color = '#FFB74D';
        break;
      case PAID_PRICING:
        color = '#EF5350';
        break;
      default:
        break;
    }

    return color;
  }

  _renderLearningResources() {
    let resources = LearningResourcesList.map(r => {
      let pillColor = this._pricingColor(r.pricingModel)
      return (
        <Card pillColor={pillColor} pills={[r.pricingModel]} title={r.title} description={r.description} link={r.link} />
      )
    });

    return <div className="card-grid-container">{resources}</div>;
  }

  render() {
    return (
      <section id="learning" className="site-section">
        <Title className="header" content="Learning Resources" />
        {this._renderLearningResources()}
      </section>
    );
  }
}

export default LearningResouces;
