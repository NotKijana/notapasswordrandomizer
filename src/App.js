import './App.scss';
import { useState, React } from 'react';
import Header from "./Header/Header";
import Footer from './Footer/Footer';
import Output from "./Output/Output";
import Form from "./Form/Form";

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
    let maxLength = 14;
    setPassword(e);
    if(password.length <= maxLength && password.length >= minLength) {
      if(passwordRegex.test(password)) {
        setValidation('correct');
      } else {
        setValidation('wrong');
      }
    }
    if(password.includes(' ')) {
      setValidation('wrong');
    }
  }

  return (
    <div className="App">
      <Header />
      <main className='main'>
        <Form password={password} submitOutput={submitOutput}
          validate={validate} validateForm={validateForm}
        />
        <Output validate={validate} setValidation={setValidation} 
        output={output} password={password}/>
      </main>
      <Footer />
    </div>
  );
}

export default App;
