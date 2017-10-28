import React, {Component} from 'react';
import Link from 'react-router-dom/Link';

class Topbar extends Component {
  constructor(props) {
    super(props);
    this.state = {options: [
      {to: '/', string: 'Main'},
      {to: '/alphabet', string: 'Alphabet'},
      {to: '/encryption', string: 'Encryption'}
    ]};
  }
  
  render() {
    return (
      <ul>
        {this.state.options.map(
          (option, index) => {
            return <li key={index}><Link to={option.to}>{option.string}</Link></li>;
          }
        )}
      </ul>
    );
  }
}

export default Topbar;
