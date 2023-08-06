import logo from './logo.svg';
import {BsClipboard2Plus} from 'react-icons/bs'
import {AiTwotoneDelete} from 'react-icons/ai'
import { useState ,useRef} from 'react';
import './App.css';

function App() {
  
  let [task , Settask] = useState([
    {
      tasks:"Push todo repo in GitHub",
      staus:false
    },
    {
      tasks:"Meeting with gods",
      staus:false
    }
  ])
  let [newtask , setnewtask] = useState("")
  let handlechange = (e) => {
    setnewtask({tasks:e.target.value,staus:false});
  }
  let tasklist = [...task,newtask]
  let handlesubmit = (e) => {
    e.preventDefault()
    Settask(tasklist)
    

  }
 
  let handledelete = (item) => {

    alert("Task removed successfully")
    let inde = task.filter((ele)=>(ele.tasks !== item.tasks)?task:null)
    Settask(inde)
  }
  
  
  return (
    <>
    <header className="heading">
    <h1>My ToDO List <span>🙂</span></h1>
    </header>
    <main>
      <div className="Form-input">
       <form name="form-in" onSubmit={handlesubmit}>
        <input type="text" value={newtask.tasks} placeholder="Add Task" onChange={handlechange}></input>
        <button className="SumbitBut"><BsClipboard2Plus/></button>
        </form>        
      </div>
      {(task.length)?<>
        <div className='content'>
        <table className='table-content'>
          <thead>
            <tr>
            <th>Task</th>
            <th>Status</th>
            <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {task.map((item)=>{
              return(
                <>
                  <tr>
                    <td>
                     <label> {item.tasks}</label>
                    </td>
                    <td>
                      <input type='checkbox'  onChange={() =>{item.staus =  (item.staus)?false:true
                    console.log(task)}}></input>
                    </td>
                    <td><button className='delbutton' onClick={()=>handledelete(item)}><AiTwotoneDelete/></button></td>
                  </tr>
                </>
              )
            })}
          </tbody>
          <tbody>
            
          </tbody>

        </table>
      </div>
      </>:<>
      <h1>No lists</h1>
      </>}
    </main>
    </>
  );
}

export default App;