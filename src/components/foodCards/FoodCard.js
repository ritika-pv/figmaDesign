import React from "react";

const FoodCard = () => {
  return (
    <>
      <div className="card-row">
        <div className="card-body">
          <div className="card-img">
            <img
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
              alt="someimg"
            />
          </div>
          <div className="card-title">
            <h3>Apple</h3>
          </div>
          <div className="card-text">
            <p>lorem ipsum dolor
            </p>
          </div>
          <div className="card-footer">
            <button className="btn btn-primary">Read More</button>
        </div>
      </div>

      <div className="card-body">
          <div className="card-img">
            <img
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
              alt="someimg"
            />
          </div>
          <div className="card-title">
            <h3>Bananna</h3>
          </div>
          <div className="card-text">
            <p>lorem ipsum dolor
            </p>
          </div>
          <div className="card-footer">
            <button className="btn btn-primary">Read More</button>
        </div>
      </div>


      <div className="card-body">
          <div className="card-img">
            <img
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
              alt="someimg"
            />
          </div>
          <div className="card-title">
            <h3>Cherry</h3>
          </div>
          <div className="card-text">
            <p>lorem ipsum dolor
            </p>
          </div>
          <div className="card-footer">
            <button className="btn btn-primary">Read More</button>
        </div>
      </div>
      </div>
    </>
  );
};

export default FoodCard;
