import React, { Component } from "react";
import "./chooser.css";

class Chooser extends Component {
  state = {
    categories: ["Specials", "Entrees", "Appetizers", "Desserts", "Drinks", "Kids"],
    shownCategory: "Specials"
  }

  // ==============================================================
  // Category Interactions

  renderCategoryButton = category => (
    <button 
    className="btn btn-primary"
    onClick={() => this.switchCategory(category)} 
    key={category}
    >
    {category}
    </button>
    )

  shownCategory = () =>{
    return this.props.menuOptions
      .filter(item => item.category === this.state.shownCategory)
      .map(item => (
        <div className="thumbnail-wrapper" key={item._id}>
        <img 
        src={item.image} 
        onClick={() => this.props.setCurrent(item._id)}
        alt={item.name} />
        </div>
        ))
  }

  switchCategory = category =>{
    console.log(this.props.menuOptions);
    console.log(category);

    this.setState({shownCategory: category});
  }

  // ==============================================================
  // Render function 

  render() {
    return (
      <React.Fragment>
        <div className="button-menu" style={{float: 'right', margin: 10, marginLeft: '50%'}}>
          {this.state.categories.map(this.renderCategoryButton)}
        </div>
        <div className="food-thumbnails" style={{float: 'right', marginLeft: '40%'}}>
          {this.props.menuOptions.length > 0 ? this.shownCategory() : null}
        </div>
      </React.Fragment>
    );
  }
}

export default Chooser;