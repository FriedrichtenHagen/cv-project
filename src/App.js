import './App.css';
import LeftPanel from './components/LeftPanel';
import RightPanel from './components/RightPanel';
import { useState } from 'react';

function App() {
  const [cvData, setCvData] = useState({
    image: "/images/dude.jpeg", 
    firstName:  "Friedrich",
    lastName: "ten Hagen", 
    title: "Web developer", 
    contacts: {
      phoneNumber: "015734758073",
      email: `fried@test.de`,
      address: `Bebstreet, Munich`,
    },
    skills: [`running`, `walking`, `eating`, `sleeping`, `studying javascript and react`],
    profile: ``, 
    workExperience: [
      {
        years: `2011-2013`,
        position: `SEA Manager`,
        company: `Google`,
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
      },
      {
        years: `2013-2015`,
        position: `Artist`,
        company: `Facebook`,
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
      }
    ],
    education: [
      {
        year: `2004`, 
        certificate: `Diploma of Science Stuff`, 
        institution: `School of hard socks`
      }
    ]
  })







  return (
    <div className="App">
      <LeftPanel cvData={cvData}/>
      <RightPanel cvData={cvData}/>
    </div>
  );
}

export default App;
