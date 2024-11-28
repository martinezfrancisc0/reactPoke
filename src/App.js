import React, { useEffect, useState } from 'react';



import AppRouter from './routes/appRouter';
import { PagesContext } from './pages/PagesContext';

function App() {
  
  const [poke, setPoke] = useState();
  




return(
  <>
    <PagesContext.Provider value={{poke, setPoke}}>
      <AppRouter />
    </PagesContext.Provider >

  </>
)


 
};
export default App;
