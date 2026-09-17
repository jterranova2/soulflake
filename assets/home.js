(function(){
  var stage=document.getElementById("hero-stage");
  if(stage){
    fetch("assets/welcome-flake.svg").then(function(r){return r.text();}).then(function(svg){stage.innerHTML=svg;}).catch(function(){});
  }

  var c=document.getElementById("snow");
  if(!c) return;
  var g=c.getContext("2d");
  if(!g || matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  var w=0,h=0,flakes=[];
  function spawn(fill){return{x:Math.random()*w,y:fill?Math.random()*h:-12,r:.7+Math.random()*2.1,vy:.9+Math.random()*1.8,vx:-.35+Math.random()*.7,a:.22+Math.random()*.5,tw:Math.random()*6.28,tws:.02+Math.random()*.04,cyan:Math.random()>.82};}
  function resize(){w=c.width=innerWidth;h=c.height=innerHeight;flakes=Array.from({length:Math.min(70,Math.floor(w*h/18000))},function(){return spawn(true);});}
  function frame(){
    g.clearRect(0,0,w,h);
    for(var i=0;i<flakes.length;i++){
      var f=flakes[i];f.tw+=f.tws;f.x+=f.vx+Math.sin(f.tw)*.15;f.y+=f.vy;
      if(f.y>h+6||f.x<-10||f.x>w+10)Object.assign(f,spawn(false));
      var a=f.a*(.65+.35*Math.sin(f.tw));g.beginPath();g.fillStyle=f.cyan?"rgba(103,232,249,"+(a*.55)+")":"rgba(248,250,252,"+a+")";g.arc(f.x,f.y,f.r,0,Math.PI*2);g.fill();
    }
    requestAnimationFrame(frame);
  }
  resize();frame();addEventListener("resize",resize);
})();
