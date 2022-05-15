import React,{useState, useEffect} from 'react'


const Weather = () => {
    const [searchvalue, setsearchvalue] =useState('Dhaka')
    const [weatherdata, setweatherdata] =useState('')

    const getseachvalue=async()=>{


        try {
        const data =await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${searchvalue}&units=metric&appid=400e8a56a1c308f57a49e8391698bf20`)
        const data1 = await data.json()
        

        const {temp, pressure, humidity} =data1.main;
       
        const {name:cityname} =data1;
        
        const {country, sunrise,sunset} = data1.sys;
        const sec= sunrise;
        const time= new Date(sec*1000)
        const timestr=`${time.getHours()}:${time.getMinutes()}:${time.getSeconds()} am`

        const sec2 = sunset;
        const time2= new Date(sec2*1000);
        const timestr2 =`${time2.getHours()}:${time2.getMinutes()}:${time2.getSeconds()} pm `
        
        const {main: weather}=data1.weather[0]
       
        const allweather={
            country, cityname, temp,weather, pressure,humidity, timestr, timestr2
        }
       
       setweatherdata(allweather)
       


        } catch (error) {
            console.log(error)
            
        }

        

    }


    console.log(weatherdata) 
  const newtime= new Date().toLocaleDateString()
  console.log(newtime)
    useEffect(()=>{
        getseachvalue()

    },[])
  return (
    <div className=' weather'>
        <div className="container weather1">
            <div className="searchinpbtn">
            <input className='search' type="search" placeholder='search...' onChange={(e)=>setsearchvalue(e.target.value)} value={searchvalue} autoFocus  />
           <button onClick={getseachvalue} className='searchbtn'>search</button>

            </div>
           

        <div className="row">
            <div className="col-md-7 temp">
               <div className="row">
                   <div className="col-md-6 ">
                       <h1>{weatherdata.temp}</h1><br />
                       <span>deg celsius</span>

                   </div>
                   <div className="col-md-6">
                      <h1>{weatherdata.weather}</h1> <br />
                    
                      <span className='cityname'>{weatherdata.cityname}</span><br />
                      <span>{weatherdata.country}</span>
                       
                   </div>
               </div>
            </div>
            <div className="col-md-5 time"><h1>{ new Date().toLocaleDateString()}</h1></div>
        </div>


<div className="row row2">
    <div className="col-md-3 ">
 
        {weatherdata.timestr} <br />
        <span>sunrise</span>
    </div>
    <div className="col-md-3">
        {weatherdata.timestr2} <br />
        <span>sunset</span>
    </div>
    <div className="col-md-3">
        {weatherdata.pressure} MM <br />
        <span>pressure</span>
    </div>
    <div className="col-md-3">
        
        {weatherdata.humidity} <br />
        <span>humidity</span> 
       
    </div>
</div>
      
        </div>
       
      
    </div>
  )
}

export default Weather
