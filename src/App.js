import './App.css';
import Chat from './components/Chat'
import SignIn from './components/SignIn';
import { authentication } from './Firebase.js'
import { useAuthState } from 'react-firebase-hooks/auth'

function App() {
  const [user] = useAuthState(authentication)
  return (
    <>
    {user ?  <Chat /> : <SignIn />}
    </>
  );
}

export default App;
