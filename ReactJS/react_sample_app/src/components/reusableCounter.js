import React from 'react';

const reusableCounter = (OriginalComponent) => {

      class NewComponent extends React.Component {

            constructor(props) {
                  super(props)
                  this.state = {
                        counter: 0
                  }
            }

            incrementCounter = () => {
                  this.setState({
                        counter: this.state.counter + 1
                  })
            }

            decrementCounter = () => {
                  this.setState({
                        counter: this.state.counter - 1
                  })
            }

            resetCounter = () => {
                  this.setState({
                        counter: 0
                  })
            }

            render() {
                  return <OriginalComponent {...this.props} counter={this.state.counter} incrementCounter={this.incrementCounter} decrementCounter={this.decrementCounter} resetCounter={this.resetCounter} />
            }
      }
      return NewComponent;
}
export default reusableCounter;