import React, { Component } from "react";
import PhotoWall from "./PhotoWall";
import AddPhoto from "./AddPhoto";
import Single from "./Single";
import { Route, Link } from "react-router-dom";

class Main extends Component {
  constructor() {
    super()

    
  }
  state = {
    loading: true
  }

  componentDidMount() {
    this.props.startLoadingPost().then(() => {
      this.setState({loading: false})
    });
    this.props.startLoadingComments();
  }
  
  render() {
      console.log(this.props);
      
    return (
      <div>
        <h1> 
          <Link to="/"> PhotoBook! </Link>
        </h1>
        <Route
          exact
          path="/"
          render={() => (
            <div>
              <PhotoWall {...this.props}/>
              {/* <PhotoWall posts={this.state.posts} onRemovePhoto={this.removePhoto} onNavigate={this.navigate} /> */}
            </div>
          )}
        />
        <Route
          path="/AddPhoto"
          render={({ history }) => (
            <AddPhoto {...this.props} onHistory={history}/>
          )}
        />
        <Route
          path ="/single/:id"
          render = {(params) => (
            <Single loading = {this.state.loading} {...this.props} {...params}/>
          )} 
        />
      </div>
    );
  }
}
export default Main;
