var activityContainer=document.getElementById("activity-container");
var button=document.getElementById("button");


button.addEventListener('click',()=>{
  fetch("http://www.boredapi.com/api/activity/").then((res)=>{
   //console.log(data);
   return res.json();
   }).then((data)=>{

   for(let i=0; i<data.activity.length; i++){
   activityContainer.innerHTML='';
   var act=document.createElement("h4");
   act.textContent=data.activity;
   activityContainer.append(act);
 }
})

})