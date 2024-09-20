import { useState } from 'react';
import SearchBox from './SearchBox';
import INFO from './Temp';
import "./weatherweb.css"

export default function WeatherWeb(){
    const[weatherInfo,setweatherInfo] = useState({
        city:"Delhi",
        humidity: 70,
        temp: 34.05,
        tempMAx:34.05,
        tempMin:34.05
    });

    let updateInfo = (NewInfo)=>{
        setweatherInfo(NewInfo);

    };

    return(
        <div className='weatherweb'>
            <h1 style={{textAlign:"center"}}>Search for the Weather</h1>
            <SearchBox updateInfo={updateInfo}></SearchBox>
            <INFO  info={weatherInfo}></INFO>
        </div>
    )
}