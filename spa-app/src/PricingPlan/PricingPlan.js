import React from 'react';
import './PricingPlan.css';

const PricingPlan = (props) =>{
    return(
          <div className='plan'>
            <h4>{props.heading}</h4>
            <h1>{props.subHeading}</h1>
            <h1>{props.subHeadingFirst}</h1>
            <h6>{props.planInfo}</h6>
          </div>
    )
}
export default PricingPlan;