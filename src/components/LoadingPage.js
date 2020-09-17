import React from 'react'
import './LoadingPage.css'
import Header from './header/Header'
import MainComponent from './homepage/main-component/MainComponent'

export default function LoadingPage(){
  return (
		<div className="bg-image">
        <Header />
        <MainComponent />

    </div>  );
}
