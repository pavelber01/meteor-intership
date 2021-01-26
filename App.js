import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';


class App extends React.Component {
  render() {
      const itemsR = [];
      const itemsI = [];
      const itemsRI = [];
      const items = [];

      for (var i = 5; i <= 95; i++) {
          if ((i % 3) === 0 && (i % 5) === 0) itemsRI.push(<div className='alert alert-message'>RobotICT<b>{i}</b></div>);
          else if((i % 5) === 0) itemsI.push(<div className='alert alert-message'>ICT<b>{i}</b></div>);
          else if((i % 3) === 0) itemsR.push(<div className='alert alert-message'>Robot<b>{i}</b></div>);
          else items.push(<div className='alert alert-message'>{i}</div>);
      }
    return (
        <div className='set'>
            <div className='alert alert-title '>
                <h1>Robot</h1>
            </div>
            <div className='alert alert-title '>
                <h1>ICT</h1>
            </div>
            <div className='alert alert-title '>
                <h1>RobotICT</h1>
            </div>
            <div className='alert alert-title '>
                <h1>Other</h1>
            </div>
            <div className='container'>
                <div className='col'>
                    {itemsR}
                </div>
                <div className='col'>
                    {itemsI}
                </div>
                <div className='col'>
                    {itemsRI}
                </div>
                <div className='col'>
                    {items}
                </div>
            </div>
        </div>
    );
  }
}

if (Meteor.isClient) {
    Meteor.startup(function() {
        render(<App />, document.getElementById('render'));
    });
}