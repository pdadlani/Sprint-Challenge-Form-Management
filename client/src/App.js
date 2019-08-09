import React from 'react';
import './App.css';
import axios from 'axios';
import RegistrationForm from './components/RegistrationForm.js';
import Recipes from './components/Recipes.js';
import { Switch, Route } from 'react-router-dom';


const display = () => true;


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      recipeData: [],
      showRecipeData: false
    };
  }


  componentDidMount() {
    this.fetchRecipeData();
  }

  // componentDidUpdate(prevProps, prevState) {
  //   console.log('prevState', prevState.showRecipeData)
  //   console.log('state', this.state.showRecipeData)
  //   if (prevState.showRecipeData !== this.state.showRecipeData) {
  //     this.setState({ showRecipeData: true })
  //     this.fetchRecipeData();
  //   }
  // }

  fetchRecipeData = () => {
    axios
      .get(`http://localhost:5000/api/restricted/data`)
      .then(response => {
        // console.log('response in axios.get', response);
        this.setState({ ...this.state, recipeData: response.data})
      })
      .catch(error => {
        console.log("Error in app axios.get call", error);
      })
  }

  onClick = () => {
    console.log('onclick called')
    this.setState({ ...this.state, showRecipeData: !this.state.showRecipeData });
  }

  render() {
    return (
      <div className="App">
        {/* <RegistrationForm /> */}
        {/* <Recipes 
          showRecipeData={this.showRecipeData} 
          dataBtn={this.onClick} 
          recipeData={this.state.recipeData} 
        /> */}
        <Switch>
          <Route 
            exact path='/'
            render={(props) => (
              <RegistrationForm />
            )}
          />
          <Route
            exact path='/login'
            render={(props) => (
              <Recipes
                {...props}
                showRecipeData={this.state.showRecipeData}
                dataBtn={this.onClick}
                recipeData={this.state.recipeData}
              />
            )}
          />
          <Route 
            exact path ='/recipes'
            render={(props) => (
              <Recipes
                {...props}
                showRecipeData={this.state.showRecipeData}
                dataBtn={this.onClick}
                recipeData={this.state.recipeData}  
              />
            )}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
