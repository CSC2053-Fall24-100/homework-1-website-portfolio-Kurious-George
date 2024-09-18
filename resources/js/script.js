const scheduleButton=document.getElementById("toggle-schedule");
const scheduleTable=document.getElementById("schedule-container");
scheduleButton.addEventListener('click',function(){
    if (scheduleTable.style.display==='none') {
        document.getElementById("toggle-schedule").textContent = 'Hide Schedule';
        scheduleTable.style.display='block';
    } else {
        document.getElementById("toggle-schedule").textContent = 'Show Schedule';
        scheduleTable.style.display='none';
    }
});