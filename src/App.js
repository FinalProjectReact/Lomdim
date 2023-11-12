import React from 'react';
import "./App.css";
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Body from './components/body/body';
import LessonHistory from './components/accountPupil/lessonHistory';
import CreateLesson from './components/accountPupil/createLesson';
import AccountPupil from './components/accountPupil/accountPupil';
import ListCities from './components/accountPupil/listCities';


function App() {
  return (

    <div className="App"> 
      <Header />
      {/* <LessonHistory/> */}
      {/* <AccountPupil /> */}
      {/* <ListCities/> */}
       <Body/>
       <Footer /> 
    </div>
  
  );
}

export default App;
