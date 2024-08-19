function updateClock(){

    const now= new Date();
   let hours=now.getHours();
   const meriduiem = hours >= 12 ? "PM":"AM"
   hours=hours%12 || 12;
   hours= hours.toString().padStart(2, 0)
    const minutes=now.getMinutes().toString().padStart(2, 0);
    const second=now.getSeconds().toString().padStart(2,0);
    const timesTRING=`${hours}:${minutes}:${second}  ${meriduiem}`
    document.getElementById("clock").textContent=timesTRING
}



updateClock()

setInterval(updateClock, 1000)