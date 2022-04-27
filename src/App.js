import logo from './logo.svg';
import './App.css';
import liff from '@line/liff';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button onClick={onCheckedInClick}>Check-in</button>
      </header>
    </div>
  );
}

function onCheckedInClick() {
  // Call API check-in to send the request.
  if (liff.isLoggedIn() && liff.ready) {
    alert('Checked in')
  }
}

export default App;
