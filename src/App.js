import './App.css';
import Form from './form.js';
import Header from './header';
import Select from './select.js';

function App() {
  return (
    <div>
      <Header />
      <div className='main'>
        <div className="App">
          <div className='selectionOptions'>
            <Select />
            <Select />
          </div>
          <Form />
        </div>
      </div>
    </div>
  );
}

export default App;
