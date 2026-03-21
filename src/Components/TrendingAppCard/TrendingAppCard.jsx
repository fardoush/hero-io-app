import React from "react";

const TrendingAppCard = ({ data }) => {
    const {image,title,downloads,ratingAvg} = data;
  return (
    <div className="card bg-base-100 w-96 shadow-sm">
      <figure>
        <img
          src={image}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        
        <div className="flex justify-between items-center">
          <button className="btn btn-primary">{downloads}</button>
          <button className="btn btn-primary">{ratingAvg}</button>
        </div>
      </div>
    </div>
  );
};

export default TrendingAppCard;
