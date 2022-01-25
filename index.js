
let button=document.querySelector('#btn');
button.addEventListener('click',function(){
    button.style.display="none";
    let div=document.createElement('div');
    div.className="container";
    let p=document.createElement('p');
    setTimeout(()=>{p.innerHTML="10"},1000);
    setTimeout(()=>{p.innerHTML="9"},2000);
    setTimeout(()=>{p.innerHTML="8"},3000);
    setTimeout(()=>{p.innerHTML="7"},4000);
    setTimeout(()=>{p.innerHTML="6"},5000);
    setTimeout(()=>{p.innerHTML="5"},6000);
    setTimeout(()=>{p.innerHTML="4"},7000);
    setTimeout(()=>{p.innerHTML="3"},8000);
    setTimeout(()=>{p.innerHTML="2"},9000);
    setTimeout(()=>{p.innerHTML="1"},10000);
    setTimeout(()=>{p.innerHTML="HAPPY INDEPENDENCE DAY ✨🎊🎉"},11000);
    div.append(p);
    document.body.append(div);
   });



