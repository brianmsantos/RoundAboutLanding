import React from 'react';
import Header from '../Header';
import Download from '../Download';
import Footer from '../Footer'
import styles from './landing.css'

export default class LandingPage extends React.Component{
    render (){

        return(
        <div className={
          styles.landing 
        }>
          <Header />
          Hi, Welcome to Round-About!
          <div>
            <Download />
            <Footer />
          </div>
        
        </div>
        )
    }
}