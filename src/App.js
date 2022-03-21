import './styles/App.scss';
import { useState, React } from 'react';
import Footer from './components/Footer';
import Output from "./components/Output";
import Form from "./components/Form";

function App() {
  const [password, setPassword] = useState('');
  const [validate, setValidation] = useState('');
  const [output, setOutput] = useState('');
  
  function submitOutput(e) {
    e.preventDefault();
    if(validate === 'correct') {
      setOutput(password);
      setPassword('');
      setValidation('');
    } else {
      setValidation('wrong');
    }
  }

  function validateForm(e) {
    let passwordRegex = new RegExp('[A-Za-z0-9._:$!%]+$');
    let minLength = 8;
    let maxLength = 16;
    setPassword(e);
    setOutput('');
    if(e.length <= maxLength && e.length >= minLength) {
      if(password.includes(' ')) {
        setValidation('wrong');
      }
      if(passwordRegex.test(password)) {
        setValidation('correct');
      }
    } else {
      setValidation('wrong');
    }
  }

  return (
    <div className="App">
        <header className="Header">
          <h1 className='Header_text'>Password Randomizer</h1>
        </header>
      <main className='main'>
        <Form password={password} submitOutput={submitOutput}
          validate={validate} validateForm={validateForm}
        />
        {output &&
          <Output validate={validate} setValidation={setValidation} 
          output={output} password={password}/> 
        }
      </main>
      <Footer />
    </div>
  );
}

export default App;
