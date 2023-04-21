import firebase from 'firebase/compat/app';
import app from "./firebaseConfig";
import * as firebaseui from 'firebaseui';
import 'firebaseui/dist/firebaseui.css';
import './App.css';

const ui = new firebaseui.auth.AuthUI(app.auth());


function App() {

  ui.start('#firebaseui-auth-container', {
    signInOptions: [
      firebase.auth.EmailAuthProvider.PROVIDER_ID
    ]
  });

  return (
    <div>
      <h1>Sign in</h1>
      <div id="firebaseui-auth-container"></div>
    </div>
  );
}

export default App;
