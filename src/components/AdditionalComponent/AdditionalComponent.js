import React from 'react';

class AdditionalComponent extends React.PureComponent {
  
  constructor(props) {
  super(props);
    this.state = {
      count: 0,
      countChange: false
    }
  }   

  tick = () => {
    this.setState((prevState) => ({ count: prevState.count + 1 }));
  }

  render() {
    console.log('render Counter');
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={this.tick}>Press</button>
      </div>
    );
  }
}
  
export default AdditionalComponent;