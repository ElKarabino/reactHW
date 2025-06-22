import logo from './logo.svg';
import './App.css';
import { Button } from './components/Button';
import { Card } from './components/Card';
import { Input } from './components/Input';
import { Alert } from './components/Alert';
import { AlertList } from './components/AlertList';

function App() {
  return (
    <div>
      <Button buttonText="Find Out More"/>
      <div style={{display:"flex", gap:"20px"}}>
        <Card price="15.000 ₽" school="УМК по робототетхнике "/ >
        <Card price="15.000 ₽" school="УМК по программированию "/ >
      </div>
      <div>
        <Input />
        <Input isDisabled={true} />
        <Input isError={true} />
      </div>
      <div>
        <AlertList />
      </div>
    </div>
  );
}

export default App;
