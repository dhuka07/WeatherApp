import './SeasonDisplay.css';
import React from 'react';


const getSeason = (lat, month) =>{
    if (month > 2 && month < 9 ){
           return lat > 0 ? 'Summer' : 'Winter';
        } 
        else{
            return lat > 0 ? 'winter' : 'summer';
        }
    }

const SeasonDisplay = props =>{
    const season = getSeason(props.lat, new Date().getMonth());
    const text =  season === 'winter' ? 'Burr, it Chilled' : 'Lets hit to Beach'
    const icon = season === 'Winter' ? 'snowflake' : 'sun';
    return(
        <div className={`season-display ${season}`}> 
         <i className={`icon-left massive ${icon} icon`}/>   
         <h1> {text} </h1>
         <i className={`icon-right massive ${icon} icon`}/>
        </div>    
    ); 

};

export default SeasonDisplay;