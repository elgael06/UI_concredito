//librerias
import React from 'react';
//componentes
import AppCavecera from './Components/Header/AppCavecera';

function App({children}) {
  return ( <div className = "App" style={{background:"#f5f5f5"}}  >
  <AppCavecera />
    <div  className="container">
        {children}
      </div>
    </div>
  );
}

export default App;