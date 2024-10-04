
 async function getData(city){
  const {districts:{0:{adcode:code}}} =await cityToCode(city)
return fetch(`https://restapi.amap.com/v3/weather/weatherInfo?key=2e5bc4800e16e69b16dd02033f956735&city=${code}&extensions=all`)
.then((res)=>{
  localStorage.setItem('_myWeather_report',JSON.stringify(city))
  return res.json()
}).catch(()=>{console.error('天气信息获取失败')})
}
function cityToCode(city){
return fetch(`https://restapi.amap.com/v3/config/district?keywords=${city}&key=2e5bc4800e16e69b16dd02033f956735`)
.then((res)=>res.json()).catch(()=>{console.error('城市编码获取失败')})
}