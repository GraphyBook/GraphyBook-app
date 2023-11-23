import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import { Landing } from './Components/Landing.jsx';
import Login from './Components/Login.jsx';
import Signup from './Components/Signup.jsx';





function App (){
  return (


<RecoilRoot>
    <Router>
      <Routes>
        <Route path = {'/'} element={<Landing/>}></Route>
        <Route path = {"/signup"} element={<Signup/>}></Route>
        <Route path = {"/login"} element={<Login/>}></Route>
        <Route path = {'/home'}> element = </Route>
         
        

      </Routes>

    </Router>

</RecoilRoot>    

  )
}
export default App;
