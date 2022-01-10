import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Greet } from './components/Greet';
import { Person } from './components/Assignment-component/Person';
import { PersonList } from './components/PersonList';
import { Status } from './components/Status';
import { Heading } from './components/Heading';
import { Oscar } from './components/Oscar';
import { Book } from './components/Assignment-Child-Parent-Components/Book';
import { BookImage } from './components/Assignment-Child-Parent-Components/BookImage';

function App() {

  const personName = {
    first: 'Bruce',
    last: 'Wayne',
  }

  const nameList = [
    {
      first: 'Bruce',
      last: 'Wayne',
    },
    {
      first: 'Clark',
      last: 'Kent',
    },
    {
      first: 'Princess',
      last: 'Diana',
    }

  ]
  return (
    <div className="App" style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center', 
  }}>

      {/* <Greet name = 'Neel' messageCount={20} isLoggedIn={true}/>

      <Person name={personName}/>

      <PersonList names = {nameList} />

      <Heading>The Oscar goes to Leo Dicaprio!</Heading>

      <Oscar>
      <Heading>The Oscar goes to Leo Dicaprio!</Heading>
      </Oscar>
      
      <Status status='loading' /> */}
      <Book title='Book'>
       <BookImage>  
         <img className="card-img-top" src="https://is5-ssl.mzstatic.com/image/thumb/Purple124/v4/dd/28/c4/dd28c45b-cc7c-735c-cf08-6ae2b1814f81/source/256x256bb.jpg" alt="Card image cap"/>
      </BookImage>
      <h4>
      ‘A supremely practical and useful book. James Clear distils the most fundamental information about habit formation, so you can accomplish more by focusing on less.’ Mark Manson, author of The Subtle Art of Not Giving A F*ck
________________________________

People say when you want to change your life, you need to set big goals. But they’re wrong.'
      </h4>
      </Book>
    </div>
  )
}

export default App;
