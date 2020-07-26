import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import Card from './Card';
// import CardList from './CardList';
import register, * as registerServiceWorker from './registerServiceWorker';
import 'tachyons';
// import {robots} from './robots';
import App from './containers/App';

ReactDOM.render(
    <App />,
  document.getElementById('root')
);
// ReactDOM.render(
//   <div>
//     <CardList robots={robots} />
//     </div>,
//   document.getElementById('root')
// );


// ReactDOM.render(
//   <div>
//     <Card id={robots[0].id} name={robots[0].name} email={robots[0].email} />,
//     <Card />,
//     <Card />
//     </div>,
//   document.getElementById('root')
// );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
register();
