import React from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css';
import './index.css';
import App from './app/layout/App';
import registerServiceWorker from './registerServiceWorker';
let render = () => ReactDOM.render(<App />, document.getElementById('root'));
/// hot refresh the application
if(module.hot){
    module.hot.accept('./app/layout/App', () => setTimeout(render));
}
/// make a call to render that renders the application
render();
registerServiceWorker();
