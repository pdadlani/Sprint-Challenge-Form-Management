import React from 'react';
import './App.css';
import RegistrationForm from './components/RegistrationForm.js';
import axios from 'axios';
import Recipes from './components/Recipes.js';

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

  fetchRecipeData = () => {
    axios
      .get(`http://localhost:5000/api/restricted/data`)
      .then(response => {
        // console.log('response in axios.get', response);
        this.setState({ recipeData: response.data})
      })
      .catch(error => {
        console.log("Error in app axios.get call", error);
      })
  }

  onClick = () => {
    console.log('onclick called')
    this.setState({ showRecipeData: true });
  }

  render() {
    return (
      <div className="App">
        <RegistrationForm />
        <Recipes 
          showRecipeData={this.showRecipeData} 
          dataBtn={this.onClick} 
          recipeData={this.state.recipeData} 
        />
      </div>
    );
  }

}

export default App;
