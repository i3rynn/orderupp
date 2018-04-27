import React from "react";

var chooser = React.createClass({
  render: function() {
    return (
      <div>
        <div className="button-menu" style={{float: 'right', margin: 10, marginLeft: '50%'}}>
          <button className="btn btn-primary" type="submit">Appetizers</button>
          <button className="btn btn-primary" type="submit">Entrees</button>
          <button className="btn btn-primary" type="submit">Kids</button>
          <button className="btn btn-primary" type="submit">Desserts</button>
          <button className="btn btn-primary" type="submit">Specials</button>
          <button className="btn btn-primary" type="submit">Drinks</button>
        </div>
        <div className="food-thumbnails" style={{float: 'right', marginLeft: '40%'}}>
          <img src="http://via.placeholder.com/300x300" style={{width: 100, borderRadius: '50%', margin: 5}} alt="Avatar" />  
          <img src="http://via.placeholder.com/300x300" style={{width: 100, borderRadius: '50%', margin: 5}} alt="Avatar" />  
          <img src="http://via.placeholder.com/300x300" style={{width: 100, borderRadius: '50%', margin: 5}} alt="Avatar" />  
          <img src="http://via.placeholder.com/300x300" style={{width: 100, borderRadius: '50%', margin: 5}} alt="Avatar" />  
          <img src="http://via.placeholder.com/300x300" style={{width: 100, borderRadius: '50%', margin: 5}} alt="Avatar" />  
          <img src="http://via.placeholder.com/300x300" style={{width: 100, borderRadius: '50%', margin: 5}} alt="Avatar" />  
        </div>
      </div>
    );
  }
});