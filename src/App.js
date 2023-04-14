import Pages from './pages/Pages'
import React from 'react';
import { Provider } from './reducer/store/store';
function App() {  
  return (
   <Provider>
      <Pages />      
   </Provider>
  );
}

export default App;
