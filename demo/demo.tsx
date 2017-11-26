import * as React from "react";

export interface ILunchTimeProps {
  restaurant: any;
}

class LunchTime extends React.Component<ILunchTimeProps> {
  renderRestaurant(restaurant) {
    return (<div>{restaurant}</div>)
  }

  render() {
    return (
      <div>
        {this.renderRestaurant(this.props.restaurant)}
      </div>
    );
  }
}
