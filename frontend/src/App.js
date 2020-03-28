import React/*, {useState}*/ from 'react';
import './global.css'
import Routes from './routes'

function App() {
  // const [counter, setCounter] = useState(0);  //Não deve alterar diretamento o valor da variável
  
  // function incremet(){
  //   setCounter(counter+1);
  // }

  return (
    <Routes/>
    // <div>
    //   <Header> Contador: {counter} </Header>
    //   <button onClick={incremet}>Incrementar</button>
    // </div>
  );
}

export default App;
