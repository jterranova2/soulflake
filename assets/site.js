(function(){
  var START_KEY="soulflake.started", SEAT_KEY="soulflake.seat";
  var KEYS=["soulflake.name","soulflake.gender","soulflake.age","soulflake.place"];
  var view=document.getElementById("view");
  var current="";

  function seatLevel(){ var n=parseInt(localStorage.getItem(SEAT_KEY)||"0",10); return isNaN(n)?0:Math.max(0,Math.min(4,n)); }
  function setSeat(n){
    localStorage.setItem(SEAT_KEY,String(n));
    document.body.classList.toggle("seated", n>=4);
    var you=document.getElementById("you");
    var name=localStorage.getItem(KEYS[0])||"";
    if(you) you.textContent=n>=4?(name?name+" \u00b7 seat lit":"Seat lit"):name;
  }
  function applyTitle(){
    var name=localStorage.getItem(KEYS[0])||"";
    var h=document.querySelector(".hero h1");
    if(!document.body.classList.contains("me")){ if(h) h.textContent="Meet your Soulflake"; return; }
    if(h) h.textContent=name?("Hello "+name):"My flake";
  }
  function applyNucleus(){
    var img=document.querySelector(".hero-seed");
    if(!img) return;
    var n=seatLevel();
    var file=["nucleus-beat-1","nucleus-beat-2","nucleus-beat-5","nucleus-beat-8","nucleus-beat-8"][n];
    img.style.visibility="visible";
    img.src="assets/"+file+".svg";
  }

  var STEPS=[
    {q:"What should we call you?",hint:"Name the flake.",ph:"Your name",kind:"text",ok:"That’s me"},
    {q:"How do you show up?",hint:"Skip if you want.",kind:"picks",picks:["Woman","Man","Another way"]},
    {q:"How old are you?",hint:"Skip is fine.",ph:"Age",kind:"age"},
    {q:"Where are you these days?",hint:"City and country. Skip is fine.",ph:"City, country",kind:"text"}
  ];
  function renderAsk(){
    var step=seatLevel(), box=document.getElementById("ask");
    if(!box) return;
    if(step>=4){ box.style.display="none"; return; }
    box.style.display="";
    var spec=STEPS[step];
    var skip=document.getElementById("ask-skip");
    if(skip) skip.style.display="";
    document.getElementById("ask-q").textContent=spec.q;
    document.getElementById("ask-hint").textContent=spec.hint;
    var fields=document.getElementById("ask-fields"), ok=document.getElementById("ask-ok");
    fields.innerHTML="";
    if(spec.kind==="picks"){
      var wrap=document.createElement("div"); wrap.className="picks";
      spec.picks.forEach(function(label){ var b=document.createElement("button"); b.type="button"; b.textContent=label; b.onclick=function(){ commit(label); }; wrap.appendChild(b); });
      fields.appendChild(wrap); if(ok) ok.style.display="none";
    }else{
      var inp=document.createElement("input"); inp.id="ask-in"; inp.type=spec.kind==="age"?"number":"text";
      if(spec.kind==="age"){ inp.min="13"; inp.max="120"; } else inp.maxLength=32;
      inp.placeholder=spec.ph||""; fields.appendChild(inp); if(ok){ ok.style.display=""; ok.textContent=spec.ok||"Save"; }
      inp.onkeydown=function(e){ if(e.key==="Enter"){ e.preventDefault(); takeInput(spec); } };
    }
  }
  function takeInput(spec){
    var inp=document.getElementById("ask-in");
    var v=(inp && inp.value || "").replace(/^\s+|\s+$/g,"");
    if(spec.kind==="age"){ if(!v){ commit("skipped"); return; } var n=parseInt(v,10); if(isNaN(n)||n<13||n>120) return; commit(String(n)); return; }
    if(!v) return;
    commit(v);
  }
  function commit(val){ var step=seatLevel(); if(step>=4) return; localStorage.setItem(KEYS[step], val); setSeat(step+1); applyTitle(); applyNucleus(); renderAsk(); }

  function bindWelcome(){
    var a=document.getElementById("build"); if(a) a.onclick=showMe;
    var b=document.getElementById("build-2"); if(b) b.onclick=showMe;
    fetch("assets/welcome-flake.svg").then(function(r){return r.text();}).then(function(t){
      var box=document.getElementById("hero-stage"); if(box) box.innerHTML=t;
    }).catch(function(){});
    fetch("assets/welcome-vision.html").then(function(r){return r.text();}).then(function(t){
      var box=document.querySelector(".vision"); if(box) box.innerHTML=t;
    }).catch(function(){});
    var cards=document.querySelectorAll(".slides .block"), dotsBox=document.getElementById("slide-dots");
    if(cards.length && dotsBox){
      dotsBox.innerHTML="";
      var i=0;
      for(var d=0;d<cards.length;d++){ var btn=document.createElement("button"); btn.type="button"; (function(n){ btn.onclick=function(){ go(n); }; })(d); dotsBox.appendChild(btn); }
      var dots=dotsBox.querySelectorAll("button");
      function go(n){ i=(n+cards.length)%cards.length; for(var k=0;k<cards.length;k++){ cards[k].classList.toggle("on",k===i); dots[k].classList.toggle("on",k===i); } }
      var prev=document.getElementById("slide-prev"); if(prev) prev.onclick=function(){ go(i-1); };
      var next=document.getElementById("slide-next"); if(next) next.onclick=function(){ go(i+1); };
      go(0);
    }
    var LINES=["Know thyself, then be known.","The unexamined life is not worth living.","Become who you truly are. -- Jung","If I am not for myself, who will be? -- Hillel"];
    var el=document.getElementById("line"), li=0, FADE=1800, HOLD=7000, GAP=1400;
    if(el){
      function showLine(){ el.style.opacity="1"; } function hideLine(){ el.style.opacity="0"; }
      setTimeout(showLine, 1600);
      function nextLine(){ hideLine(); setTimeout(function(){ li=(li+1)%LINES.length; el.textContent=LINES[li]; setTimeout(showLine, GAP); }, FADE); setTimeout(nextLine, HOLD+FADE+GAP+FADE); }
      setTimeout(nextLine, 1600+FADE+HOLD);
    }
  }
  function bindMe(){
    applyTitle(); applyNucleus(); setSeat(seatLevel()); renderAsk();
    var ok=document.getElementById("ask-ok"); if(ok) ok.onclick=function(){ takeInput(STEPS[seatLevel()]||{}); };
    var skip=document.getElementById("ask-skip"); if(skip) skip.onclick=function(){ var spec=STEPS[seatLevel()]; if(spec) commit("skipped"); };
  }

  function loadView(name){
    if(current===name && view.innerHTML) {
      if(name==="me") bindMe();
      return Promise.resolve();
    }
    current=name;
    return fetch("assets/view-"+name+".html").then(function(r){return r.text();}).then(function(html){
      view.innerHTML=html;
      if(name==="welcome") bindWelcome();
      else bindMe();
    });
  }
  function showWelcome(){
    document.body.classList.remove("me");
    loadView("welcome").then(applyTitle);
    if(location.hash!=="#about") location.hash="about";
  }
  function showMe(){
    document.body.classList.add("me");
    localStorage.setItem(START_KEY,"1");
    loadView("me");
    if(location.hash!=="#me") location.hash="me";
  }
  function doReset(){
    document.getElementById("menu").classList.remove("open");
    [START_KEY,SEAT_KEY].concat(KEYS).forEach(function(k){ localStorage.removeItem(k); });
    document.body.classList.remove("seated");
    showWelcome();
  }

  document.getElementById("go-welcome").onclick=showWelcome;
  document.querySelectorAll("[data-go]").forEach(function(b){ b.onclick=function(){ document.getElementById("menu").classList.remove("open"); this.getAttribute("data-go")==="me"?showMe():showWelcome(); }; });
  document.getElementById("more").onclick=function(e){ e.stopPropagation(); document.getElementById("menu").classList.toggle("open"); };
  document.addEventListener("click", function(){ document.getElementById("menu").classList.remove("open"); });
  window.addEventListener("hashchange", function(){ if(location.hash==="#me") showMe(); else if(location.hash==="#about"||location.hash==="#welcome") showWelcome(); });
  var mr=document.getElementById("menu-reset"); if(mr) mr.onclick=doReset;

  if(location.hash==="#about"||location.hash==="#welcome") showWelcome();
  else if(location.hash==="#me" || localStorage.getItem(START_KEY)==="1") showMe();
  else showWelcome();

  var c=document.getElementById("snow"); if(c){
    var g=c.getContext("2d");
    if(g && !matchMedia("(prefers-reduced-motion: reduce)").matches){
      var w=0,h=0,flakes=[];
      function spawn(y){ return {x:Math.random()*w,y:y?Math.random()*h:-12,r:.7+Math.random()*2.1,vy:.9+Math.random()*1.8,vx:-.35+Math.random()*.7,a:.22+Math.random()*.5,tw:Math.random()*6.28,tws:.02+Math.random()*.04,cyan:Math.random()>.82}; }
      function resize(){ w=c.width=innerWidth; h=c.height=innerHeight; flakes=Array.from({length:Math.min(70,Math.floor(w*h/18000))},function(){return spawn(true);}); }
      function frame(){ g.clearRect(0,0,w,h); for(var i=0;i<flakes.length;i++){ var f=flakes[i]; f.tw+=f.tws; f.x+=f.vx+Math.sin(f.tw)*.15; f.y+=f.vy; if(f.y>h+6||f.x<-10||f.x>w+10) Object.assign(f,spawn(false)); var a=f.a*(.65+.35*Math.sin(f.tw)); g.beginPath(); g.fillStyle=f.cyan?"rgba(103,232,249,"+(a*.55)+")":"rgba(248,250,252,"+a+")"; g.arc(f.x,f.y,f.r,0,Math.PI*2); g.fill(); } requestAnimationFrame(frame); }
      resize(); frame(); addEventListener("resize",resize);
    }
  }
})();
