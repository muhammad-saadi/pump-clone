import React from 'react';
import '../RandomCard.css';

const RandomCard = ({ createdAt, createdBy, replies, name }) => {
  return (
    <div className="random-card">
      <img src={`${process.env.PUBLIC_URL}/image.png`} alt="Post Image" className="random-card-image" />
      <div className="random-card-content">
        <div className="random-card-created-by">
          <span>created by</span>
          <span>
            <img className="" />
            <span>{createdBy}</span>
          </span>
          <span>{createdAt}</span>
        </div>
        <p>replies: {replies}</p>
        <p className="random-card-name">{name}</p>
      </div>
    </div>
  );
};

export default RandomCard;
