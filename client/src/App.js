
import { BrowserRouter, Routes, Route} from "react-router-dom";
import { SignUp } from './ components/SignUp/SignUp';
import { Account } from "./ components/Account/Account";
import { SignIn } from "./ components/SignIn/SignIn";





const App = () =>{


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignUp/>}/>
        <Route path="/sign_in" element={<SignIn/>}/>
        <Route path="/me" element={<Account/>}/>
      </Routes>
    </BrowserRouter>
  );



}

export default App;