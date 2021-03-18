import React from "react";
import Welcome from './components/Welcome';
import TabbedSections from './components/TabbedSections';
import * as S from './styles/Styles';
import { useSelector } from "react-redux";



const Home = () => {

  const token = useSelector(state => state.token);

    let whichHomePage;

    if(token === ""){
        whichHomePage = <Welcome/>
    }
    else{
        whichHomePage = <TabbedSections/>
    }


  return <>
    {whichHomePage}
      
  </>;
};

export default Home;
