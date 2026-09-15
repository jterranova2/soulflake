(function(){
  var audio=document.getElementById("ambient");
  var btn=document.getElementById("sound");
  if(!audio || !btn) return;
  var SOUND_KEY="soulflake.sound";
  var wantOn=localStorage.getItem(SOUND_KEY)!=="off";
  var fadeTimer=null, TARGET=1, FADE_IN=3000, FADE_OUT=2000, live=false;
  function setBtn(on){ btn.classList.toggle("on",on); btn.classList.toggle("off",!on); btn.textContent="\u266A"; }
  function clearFade(){ if(fadeTimer){ clearInterval(fadeTimer); fadeTimer=null; } }
  function fadeTo(goal, done){
    clearFade();
    var start=audio.volume, t0=Date.now();
    var ms=goal>start?FADE_IN:FADE_OUT;
    fadeTimer=setInterval(function(){
      var p=Math.min(1,(Date.now()-t0)/ms);
      audio.volume=Math.max(0,Math.min(1,start+(goal-start)*p));
      if(p>=1){ clearFade(); audio.volume=goal; if(done) done(); }
    }, 40);
  }
  function startPlay(){
    wantOn=true;
    live=true;
    localStorage.removeItem(SOUND_KEY);
    audio.muted=false;
    try{ audio.currentTime=0; }catch(e){}
    audio.volume=0;
    var p=audio.play();
    if(p && p.catch) p.catch(function(){});
    fadeTo(TARGET);
    setBtn(true);
  }
  function stopPlay(){
    wantOn=false;
    live=false;
    localStorage.setItem(SOUND_KEY,"off");
    setBtn(false);
    fadeTo(0, function(){ audio.pause(); try{ audio.currentTime=0; }catch(e){} audio.muted=true; });
  }
  btn.addEventListener("pointerdown", function(e){
    e.preventDefault();
    if(live && !audio.paused) stopPlay();
    else startPlay();
  });
  audio.pause();
  audio.muted=true;
  audio.volume=0;
  try{ audio.currentTime=0; }catch(e){}
  setBtn(false);
})();
