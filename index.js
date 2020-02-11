import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';

var path = require('path')
var tree = require('tree-view')

// for treeview 
// See: https://github.com/maxogden/tree-view
var browser = tree() // or tree({style: false}) to disable styling




class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {



//// Treeview code (BEGIN)
browser.on('directory', function(p, entry) {
  console.log('You clicked on a directory (%s)', p)
  browser.directory(p, [{
    path: path.join(p, '/foo'),
    type: 'directory'
  }, {
    path: path.join(p, '/bar'),
    type: 'directory'
  }, {
    path: path.join(p, '/baz'),
    type: 'file'
  }])
})

browser.on('file', function(p, entry) {
  console.log('You clicked on a file (%s)', p)
})

browser.directory('/', [{
  path: '/foo',
  type: 'directory'
}, {
  path: '/bar',
  type: 'directory'
}, {
  path: '/baz',
  type: 'file'
}])

browser.appendTo(document.body)

//// Treeview code (END)



    return (
      <div>
        <Hello name={this.state.name} />
        <p>
          Start editing to see some magic happen :)
        </p>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
