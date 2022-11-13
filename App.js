import logo from './logo.svg';
import React,{useState} from "react";
import './App.css';
import { BrowserRouter, Link,Route ,Routes} from "react-router-dom";
import Navbar from "./components/Navbar";
import News from "./components/News";
import Newsitem from "./components/Newsitem";

function App() {
  const apikey='4d1aed6e10b74e62979780c561cc6093'//todo process.env.REACT_APP_NEWS_API
  const[progress,setprogress]=useState(0);
  const[mode,setMode]=useState('dark');
  
  const toggleMode=()=>{
   
    if(mode=='dark'){
     document.body.style.backgroundColor="black"
     setMode("light")  
     document.body.style.backgroundColor="white"
    }else{
     setMode('dark');
     document.body.style.backgroundColor="black"
    }
  
    }
   
  return (
    <>
    
    <div className="App">
    <BrowserRouter>
         
         <Routes>
         <Route path="/" exact element={<Navbar  toggleMode={toggleMode} mode={mode}/>} />
         <Route exact path='/N' element={<News setprogress={setprogress} toggleMode={toggleMode} mode={mode}  apikey={apikey} key={"general"} pageno={5} country='in' category='general' />}/>
                 
            
                 <Route exact path='/entertainment' element={ <News setprogress={setprogress} toggleMode={toggleMode} mode={mode} apikey={apikey} key={"entertainment"} pageno={5} country='in' category='entertainment' />}/>
                  
            
                 <Route exact path='/sports' element={ <News setprogress={setprogress} toggleMode={toggleMode} mode={mode} apikey={apikey}key={"sports"} pageno={5} country='in' category='sports' />}/>
                
                 
                 <Route exact path='/technology' element={<News setprogress={setprogress}  toggleMode={toggleMode} mode={mode}apikey={apikey}key={"technology" }pageno={5} country='in' category='technology' />}/>
                 
            
                 <Route exact path='science' element={ <News setprogress={setprogress} toggleMode={toggleMode} mode={mode}  apikey={apikey}key={"science"} pageno={5} country='in' category='science' />}/>
                
               
                 <Route exact path='/business' element={<News setprogress={setprogress} toggleMode={toggleMode} mode={mode}  apikey={apikey}key={"business"} pageno={5} country='in' category='business' />}/>
                 
                 
       
         <Route  path="/signin" exact element={<Newsitem/>} />
      {/* <PrivateRoute path="/user/Dashboard" exact element={<UserDashBoard/>} />
      <AdminRoute path="/admin/Dashboard" exact element={<AdminDash />} /> */}
       </Routes>
         </BrowserRouter>
    </div>


    </>
    
  );
}

export default App;
