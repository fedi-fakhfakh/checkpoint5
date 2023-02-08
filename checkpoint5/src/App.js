import './App.css';
import Adress from './component/profile/Adress';
import FullName from './component/profile/FullName';
import ProfilPhoto from './component/profile/ProfilePhoto';

const App=()=>(
  <div className='container'>
    <ProfilPhoto/>FullName:<FullName/>,Adress:<Adress/>
  </div>
)
export default App;


