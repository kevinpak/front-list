import React from 'react';
import "react-bootstrap"
import Cartes from './Components/Cartes/Cartes';
import Header from './Components/Header/Header';

function App() {
  return (
    <>
    <Header/>
    <main className="mt-5">
      <div className="">
        <div className="mb-4">
        <div className="container">
          <div className="row">
            <Cartes/>
          </div>
        </div>
      </div>
      </div>
    </main>
    </>
  );
}

export default App;
