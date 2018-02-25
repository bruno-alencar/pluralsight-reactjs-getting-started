const Starts = (props) => {
    const numberOfStars = 1+ Math.floor(Math.random()*9);
    
    return (
    <div className="col=5">
      {_.range(numberOfStars).map(i => <i key={i} className="fa fa-star"></i>)}
      </div>
      );
    }
    
    const Button = (props) => {
    return (
    <div className="col-2">
        <button> = </button>
    </div>
    );
    }
    
    const Answer = (props) => {
    return (
    <div className="col-5">
    <span>5</span>
    <span>6</span>
    
    </div>
    );
    }
    
    const Numbers = (props) => {
    // const arrayOfNumbers = _.range(1,10);
    
    return (
        <div className="card text-center">
        <div>
        {Numbers.list.map((number, i) => <span key={i}>{number}</span>)}
        </div>
      </div>
    );
    }
    Numbers.list = _.range(1,10);
    
    class Game extends React.Component {
        render(){
        return (
          <div>
          <h3>Play Nine</h3>
          </div>
        );
        }
    }
    
    class App extends React.Component {
        render(){
        return (
          <div className="container">
          <Game />
               <hr />
    
         <div className>
            <Starts />
          <Button />
          <Answer />
          <Numbers />
         </div>
         <br />
          </div>
        );
        }
    }
    
    ReactDOM.render(<App />, mountNode);