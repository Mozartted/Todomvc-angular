import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './App';
import registerServiceWorker from './registerServiceWorker';
import app from './services/service.js';

var models = new app.TodoModel('todos');

function render(){
  ReactDOM.render(<App models = {models} />, document.getElementById('root'));
  registerServiceWorker();
}

models.subscribe(render);
render();
