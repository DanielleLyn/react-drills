import React, {Component} from 'react';

class NewTask extends Component {
  constructor(){
    super();

    this.state ={
      input: ''
    };

    this.handleAdd = this.handleAdd.bind(this);
  }

  handleInputChange(value){
      this.setState({input:value});
  }

  handleAdd(){
      this.props.add(this.state.input);
      this.setState({input:''});
  }

  render(){
      return(
          <div>
              <input value={this.state.input}
              placeholder="New Task"
              onChange={(element)=>this.handleInputChange(element.target.value)}
              />
        <button onClick={this.handleAdd}>Add</button>
        </div>
      )
    }
}
export default NewTask;