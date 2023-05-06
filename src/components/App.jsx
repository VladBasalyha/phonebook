import Header from 'pages/Header';
import Home from 'pages/Home';

import { Routes, Route } from 'react-router-dom';
import Contacts from 'pages/Contacts';
export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Header></Header>}>
          <Route path="home" index element={<Home />} />
          <Route path="*" element={<div>чєл ти...</div>}></Route>
          <Route path="contacts" element={<Contacts></Contacts>}></Route>
        </Route>
      </Routes>
    </>
  );
};
