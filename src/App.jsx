

import { NavbarComp } from './components';
import { MainRoute } from './config';
import './style/App.scss';

function App() {
  return (
    <div className="App min-h-screen bg-white ">
      <NavbarComp />
      <div className='pt-[60px] lg:pt-16'>

        <MainRoute />
      </div>

    </div>
  );
}

export default App;
