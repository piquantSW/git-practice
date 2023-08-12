
import PhoneForm from './components/PhoneForm';
import React from 'react';
import PhoneInfoList from './components/PhoneInfoList';

function App() {

  const [state, setState] = React.useState({ information : []});



  const handleCreate = (data) =>{

    let idvalue = state.information[state.information.length-1]?.id;

    setState({
      information: state.information.concat({...data, id:idvalue?idvalue+1:1})
    })
  }


  
  const handleRemove = (id) =>{
    
    setState({
      information: state.information.filter(info => info.id !== id)
    })
  }

  
  const handleUpdate = (id, data) =>{
    setState({
      information: state.information.map(
        info =>{
           if(info.id === id){
             return {
               id,
                ...data};
              }
             return info;
            })
    })
  }

  return (
    <div className="App">
      <PhoneForm onCreate = {handleCreate}/>
      <PhoneInfoList
      onUpdate = {handleUpdate}
      onRemove = {handleRemove}
      data ={state.information}/>
    </div>
  );
}

export default App;
