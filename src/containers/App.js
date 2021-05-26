import './App.css';
import store from '../store'

import Sidebar from '../components/Sidebar'
import Main from '../Main'

import _ from "lodash"


function App() {
  const {contacts, user, activeUserId} = store.getState()

  
  return (
    <div className="App" >
      {console.log("change to arr",_.values(contacts))}
<Sidebar contacts={_.values(contacts)}/>
<Main user={user} activeUserId={activeUserId}/>
    </div>
  );
}

export default App;
