
### This project is about introduction of dynamic import before the code splitting

Suppose you have a page that renders different components depending on user input. At the moment, managed to solve the issue I was having and have shown my code below which shows how I solved it.  

#### ComponentList.js 

```JSX
import React from "react"; 
import ComponentOne from "./ComponentOne"; 
import ComponentTwo from "./ComponentTwo"; 
import ComponentThree from "./ComponentThree"; 
  
export default function ComponentList({ name }) { 
  switch (name) { 
    case "ComponentOne": 
      return <ComponentOne />; 
    case "ComponentTwo": 
      return <ComponentTwo />; 
    case "ComponentThree": 
      return <ComponentThree />; 
    default: 
      return null; 
  } 
} 
```

#### Main.js 

```JSX
import React, { Component } from "react"; 
import ErrorBoundary from "./ErrorBoundary"; 
import ComponentList from "./ComponentList"; 
import "./styles.css"; 
  
export default class Main extends Component { 
  constructor(props) { 
    super(props); 
    this.state = {name: ""}; 
    this.handleChange = this.handleChange.bind(this); 
  } 
  handleChange(event) { 
    const {value: name} = event.target; 
    this.setState({ name }); 
  } 
  render() { 
    const {name} = this.state; 
    return ( 
      <ErrorBoundary> 
        <select value={name} onChange={this.handleChange}> 
          <option value="">None</option> 
          <option value="ComponentOne">Component One</option> 
          <option value="ComponentTwo">Component Two</option> 
          <option value="ComponentThree">Component Three</option> 
        </select> 
        <ComponentList name={name} /> 
      </ErrorBoundary> 
    ); 
  } 
} 
```
 

 

This method allows me to add/remove components very quickly, as I only need to change one import line at a time. 

#### Project 

This project is using [Create React App](https://github.com/facebook/create-react-app).

##### Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!
