
import './App.css';

import General from './Component/General/General';
import Header from './Component/Header/Header';
import Profile from './Component/Profile/Profile';
import School from './Component/School/School';
import Work from './Component/Wrkexp/Work';

function App() {
  return (
    <div className='page'>
      <Header/>
      <div className = 'container'>
        <div className = 'row'> 
        <div className = 'col1'>
          <Profile/>
        </div>
         <div className = 'col2'>
          <General/>
          <School/>
          <Work/>
        </div>
        </div>
        
      </div >
      
    </div>
  );
}

export default App;
