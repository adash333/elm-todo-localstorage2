import './main.css';
import { Elm } from './Main.elm';
import registerServiceWorker from './registerServiceWorker';

var storedState = localStorage.getItem('elm-todo-save');
var startingState = storedState ? JSON.parse(storedState) : null;

var app = Elm.Main.init({
  node: document.getElementById('root'),
  flags: startingState
});

app.ports.setStorage.subscribe(function(state) {
  localStorage.setItem('elm-todo-save', JSON.stringify(state));
});

registerServiceWorker();
