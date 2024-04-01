// components/CustomerReview.jsx
import React from 'react';

const CustomerReview = ({ name, comment, rating }) => {
  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(<span key={i} className="text-yellow-500">&#9733;</span>);
      } else {
        stars.push(<span key={i} className="text-gray-300">&#9733;</span>);
      }
    }
    return stars;
  };

  return (
    <div className="p-8 mb-4">
      <div className="flex items-center mb-2">
        <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center mr-2">
          <span className="text-gray-700">{name.charAt(0)}</span>
        </div>
        <div>
          <p className="font-bold">{name}</p>
          <div className="flex items-center">
            <div className="mr-1">{renderStars()}</div>
            <span className="text-gray-500">({rating}/5)</span>
          </div>
        </div>
      </div>
      <p className="text-gray-800">{comment}</p>
    </div>
  );
};

export default CustomerReview;
