const welcomeButton=document.getElementById('welcome-form');
const heading=document.getElementById('heading');
welcomeButton.addEventListener('click',function(){
    const head=prompt("Please enter your name:");
    heading.textContent='Welcome, '+head+'!';
});