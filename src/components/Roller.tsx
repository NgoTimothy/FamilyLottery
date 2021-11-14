import React from 'react';

export interface RollerProps { }

export interface RollerState {
  num: number;
}

export class Roller extends React.Component<RollerProps, RollerState> {
  constructor(props: RollerProps) {
    super(props);
    this.state = {num: 0};
  }

  render() {
    return (
      <>
        <button onClick={this.roll.bind(this)}>Click Me</button>
        {this.state.num !== 0 ? 
          <h1> {this.state.num} </h1> :
          <h1>No number yet</h1>
        }
        {/* <div>
          {this.state.num}
        </div> */}
      </>
    );
  }

  roll(): void {
    this.setState({ num: this.state.num + 1 });
  }
}
