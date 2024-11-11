import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import ListAdding from './ListAdding';
import List from './List';
import { Container } from 'react-bootstrap';
import { useState } from 'react';
import Navbarsample from './Navbarsample';
function App() {

  const [items, addItems] = useState([]);

  let getItems = (val) => {
    if(val === ''){
      return;
    }else{
      addItems([...items, val])
    }
  }

  let itemDelete = (val) => {
    const temp = [...items];
    temp.splice(items.indexOf(val),1);
    addItems(temp)
  }


  return (
    <>
      <Navbarsample/>
      <Container className='mt-2'>
        <ListAdding getItems={getItems} />
        <List items={items} itemDelete={itemDelete}/>
      </Container>
    </>
  );
}

export default App;
