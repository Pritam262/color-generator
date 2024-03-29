import './App.css';
import SingleColor from './SingleColor'
import Values from 'values.js'
import { useState } from 'react';
function App() {
  const [color, setColor] = useState('');
  const [error, setError] = useState(false);
  const [list, setList] = useState([]);

  const handleSubmit = (e)=>{
    e.preventDefault();
    try {
      let colors = new Values(color).all(10);
      setList(colors)
      // console.log(colors)
      
    } catch (error) {
      setError(true)
      console.log(error);
    }
  }
  return (
    <>
    <section className="container">
      color generator
      <form onSubmit={handleSubmit} >
        <input type="text" name="" id="" value={color} onChange={(e)=>setColor(e.target.value)} placeholder='#f15025' className={`${error?'error':'nul'}`}/>
        <button className="btn" type='submit'>Submit</button>
        
      </form>
    </section>
    <section className="colors">
      {list.map((color,index)=>{
        // console.log(color)
        return <SingleColor key={index} {...color} index={index} hexColor = {`${color.hex}`}/>
      })}

    </section>
    </>
  );
}

export default App;
