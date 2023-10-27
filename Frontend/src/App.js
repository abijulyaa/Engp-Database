import React, { } from 'react';
import Login from './Login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Signup from './Signup';
import Dashboard from './Components/Dashboard/Dashboard'
import Team from "./Components/Team/team";
import Invoices from "./Components/Invoices/invoices";
import Contacts from "./Components/Contacts/contacts";
import Bar from "./Components/Bar/bar";
import Line from "./Components/Line/line";
import Pie from "./Components/Pie/pie";
import FAQ from "./Components/Faq/faq";
import Geography from "./Components/Geography/geography";
import Form from "./Components/Form/form";

function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path="/team" element={<Team />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/invoices" element={<Invoices />} />
        <Route path="/form" element={<Form />} />
        <Route path="/bar" element={<Bar />} />
        <Route path="/pie" element={<Pie />} />
        <Route path="/line" element={<Line />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/geography" element={<Geography />} />
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
