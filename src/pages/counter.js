import React from "react";
import Link from "gatsby-link";
import Iframe from 'react-iframe'

class Counter extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0,
      diarrhea: false
    }
  }


  render() {
    let diarrheaTime = null;
    if (this.state.diarrhea) {
      diarrheaTime = <div><div>
        <Iframe 
          url="https://www.youtube.com/embed/CKjaFG4YN6g" 
          width="560px" 
          height="315px" 
          frameBorder="0" 
          allow="autoplay; encrypted-media"
          position="relative"
          allowFullScreen>
        </Iframe>
        </div>
        <button onClick={ () => this.setState({ diarrhea: false }) }>No More Di Di</button>
      </div>;
    } else {
      diarrheaTime = <div>
        <button onClick={ () => this.setState({ diarrhea: true }) }>I have a bad case of diarrhea</button>
      </div>;
    }

    return (
      <div>
        <h1>Counter</h1>
        <p>Current Count: {this.state.count}</p>
        <div>
          <button onClick={() => this.setState({ count: this.state.count +
          1 })}>Plus</button>
          <button onClick={() => this.setState({ count: this.state.count -
          1 })}>Minus</button>
        </div>

        {diarrheaTime}

        <div>
          <Link to="/"><button>home</button></Link>
          <Link to="/russell/"><button>rs</button></Link>
        </div>
      </div>
    )
  }
}

export default Counter;