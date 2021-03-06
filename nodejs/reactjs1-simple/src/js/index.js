import React from 'react';
import { render } from 'react-dom';
import Loading from './Loading';
import Main from './Main';

const renderApp = Component => {
  render( <Component/>, document.getElementById( 'root' ) )
};

renderApp( Loading );

setTimeout( () => {
  renderApp( Main );
}, 500 );
