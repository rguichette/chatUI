import './App.css';
import store from '../store'

import Sidebar from '../components/Sidebar'
import Main from '../Main'

import _ from "lodash"

function App() {
  const {contacts} = store.getState()
  return (
    <div className="App" >
<Sidebar contacts={_.values(contacts)}/>
<Main/>
    </div>
  );
}

export default App;
