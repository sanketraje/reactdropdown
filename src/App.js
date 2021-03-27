import React,{ useState } from 'react';

import './App.css';
import moniter from "./moniter.jpg";
import keyboard from "./keyboard.jpg";
import mouse from "./mouse.jpg";
import printer from "./printer.jpg";
import speaker from "./speaker.jpg";


function App() {
  const [items , setitems]=useState([{},
    { id: 1 ,name :"Moniter" ,    unitprice :"12000"  , img:moniter  },
    { id: 2 ,name :"Keyboard" ,   unitprice :"299"  , img:keyboard},
    { id: 3 ,name :"Mouse" ,    unitprice :"210"  , img:mouse},
    { id: 4 ,name :"Printer" , unitprice :"7000"  , img:printer},
    { id: 5 ,name :"Speaker" ,  unitprice :"3500", img:speaker },
   

  ])
  const [singleitem , setsingleitem]=useState([])
  const [qty , setqty]=useState(1)


  function onoption(e){
    
    setsingleitem(items[+e.target.value])
  }
  return (
    <div className="App" >
  <form>
    <b>Select Item : </b>
    <select className="qty" name="items"  onChange={onoption}>
     {items.map((item)=>(
         <option key={item.id}  value={item.id}>{item.name}</option>
       ))}

    </select>
  </form>
  <h3>NAME OF ITEM : {singleitem.name}</h3>
  <img className='imgbx' src={singleitem.img} alt=""/>
  <h3>UNIT PRICE OF ITEM : {singleitem.unitprice}/-</h3>
  <label htmlFor="text"><b>ENTER Quantity :</b> </label>
  <input className="qty" type="text" value={qty} onChange={(e)=>setqty(+e.target.value)} />
  <h3> TOTAL Price : {singleitem.unitprice * qty}</h3>
  <h3> Congratulations you got discount of  5% : {(singleitem.unitprice * qty)*.05}/-</h3>
  <h3>NET Price is : {singleitem.unitprice * qty-(singleitem.unitprice * qty)*.05}/-</h3>

  
    </div>
  );
}

export default App;
