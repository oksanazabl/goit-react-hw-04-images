import Searchbar from "components/Searchbar/Searchbar";
import { Component } from "react";


export default class App extends Component {
  processSubmit = q => {
    this.setState({ q });
  };
  render(){
    return(
      <>
      <Searchbar onSubmit={this.handleSubmit} />
      </>
    )
  }
}
