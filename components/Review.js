import React from 'react';
import Stars from './Stars';

export default ({ data }) => (
      <div className="ui-grid-container">
        <div className="ui-grid">
          <div className="ui-grid-col is-quarter">
            <h4>{data.name}</h4>
            <span>Overall rating: {data.rating}</span><br />
            <span>{data.date}</span><br />
            <span>Member Since: {data.joinDate}</span>
          </div>
          <div className="ui-grid-col is-half">
            <h3>{data.title}</h3>
            <p>{data.description}</p>
          </div>
          <div className="text-right ui-grid-col is-quarter">
            <span>Quality: {data.quality}</span><br />
            <span>Value: {data.value}</span>
          </div>
        </div>
      </div>
)
