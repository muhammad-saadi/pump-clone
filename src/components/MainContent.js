import React from 'react';
import '../MainContent.css';

const MainContent = ({ createdAt, createdBy, replies, name, description, marketCap }) => {
  return (
    <div className="card">
      <img src={`${process.env.PUBLIC_URL}/image.png`} alt="Post Image" className="image" />
      <div className="card-content">
        <div className="created-by">
          <span>created by</span>
          <span>
            <img className="image" />
            <span>{createdBy}</span>
          </span>
          <span>{createdAt}</span>
        </div>
        <p className="market-cap">market cap: {marketCap}</p>
        <p>replies: {replies}</p>
        <p><span className="name">{name}: </span>{description}</p>
      </div>
    </div>
  );
};

export default MainContent;
