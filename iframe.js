(function(){

if(document.getElementById("iguMiniBrowser")) return;

const win=document.createElement("div");
win.id="iguMiniBrowser";

Object.assign(win.style,{
position:"fixed",
top:"120px",
left:"120px",
width:"600px",
height:"420px",
background:"#111",
border:"2px solid #4a8cff",
borderRadius:"8px",
zIndex:999999,
display:"flex",
flexDirection:"column",
resize:"both",
overflow:"hidden"
});

const bar=document.createElement("div");

Object.assign(bar.style,{
height:"26px",
background:"#1b1b1b",
display:"flex",
alignItems:"center",
justifyContent:"center",
cursor:"move"
});

const logo=document.createElement("img");
logo.src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_light_color_92x30dp.png";
logo.style.height="18px";
logo.style.cursor="pointer";

const iframe=document.createElement("iframe");
iframe.src="https://www.google.com/?igu=1";

Object.assign(iframe.style,{
flex:"1",
border:"none",
background:"white"
});

logo.onclick=()=>{
iframe.src="https://www.google.com/?igu=1";
};

bar.appendChild(logo);
win.appendChild(bar);
win.appendChild(iframe);
document.body.appendChild(win);

let drag=false,ox=0,oy=0;

bar.onmousedown=e=>{
drag=true;
ox=e.clientX-win.offsetLeft;
oy=e.clientY-win.offsetTop;
};

document.addEventListener("mousemove",e=>{
if(!drag)return;
win.style.left=(e.clientX-ox)+"px";
win.style.top=(e.clientY-oy)+"px";
});

document.addEventListener("mouseup",()=>drag=false);

})();
