import Greeting from './components/Greeting';
import Message from './components/Message';
import Button from './components/Button';
import './App.css';

function event() {
  console.log(123);
}

function App() {
  return (
    <>
      <Greeting name="Григорій"></Greeting>
      <Message text="Description"></Message>
      <Button onClick={ event }></Button>
    </>
  );
}

export default App;
