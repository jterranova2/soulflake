(() => {
  const canvas = document.getElementById('snowfall');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let w = 0, h = 0, flakes = [], raf = 0, reduce = false;

  const prefersReduce = () =>
    window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function resize() {
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;
    const count = Math.min(90, Math.floor((w * h) / 18000));
    flakes = Array.from({ length: count }, () => spawn(true));
  }

  function spawn(randomY) {
    return {
      x: Math.random() * w,
      y: randomY ? Math.random() * h : -8,
      r: 0.6 + Math.random() * 1.8,
      vy: 0.15 + Math.random() * 0.55,
      vx: -0.15 + Math.random() * 0.3,
      a: 0.15 + Math.random() * 0.45,
      tw: Math.random() * Math.PI * 2,
      tws: 0.01 + Math.random() * 0.02,
      hue: Math.random() > 0.82 ? 'cyan' : 'frost',
    };
  }

  function frame() {
    if (reduce) return;
    ctx.clearRect(0, 0, w, h);
    for (const f of flakes) {
      f.tw += f.tws;
      f.x += f.vx + Math.sin(f.tw) * 0.15;
      f.y += f.vy;
      if (f.y > h + 6 || f.x < -10 || f.x > w + 10) Object.assign(f, spawn(false));
      const alpha = f.a * (0.65 + 0.35 * Math.sin(f.tw));
      ctx.beginPath();
      ctx.fillStyle =
        f.hue === 'cyan'
          ? `rgba(103, 232, 249, ${alpha * 0.55})`
          : `rgba(248, 250, 252, ${alpha})`;
      ctx.arc(f.x, f.y, f.r, 0, Math.PI * 2);
      ctx.fill();
      // tiny tech glint
      if (f.r > 1.4) {
        ctx.fillStyle = `rgba(167, 139, 250, ${alpha * 0.35})`;
        ctx.fillRect(f.x - 0.4, f.y - f.r - 1.5, 0.8, f.r * 0.9);
      }
    }
    raf = requestAnimationFrame(frame);
  }

  function start() {
    reduce = prefersReduce();
    cancelAnimationFrame(raf);
    if (reduce) {
      ctx.clearRect(0, 0, w, h);
      return;
    }
    frame();
  }

  resize();
  start();
  window.addEventListener('resize', () => {
    resize();
  });
  if (window.matchMedia) {
    window.matchMedia('(prefers-reduced-motion: reduce)').addEventListener('change', start);
  }

  // Ambient music — user gesture required for autoplay in most browsers
  const audio = document.getElementById('ambient-audio');
  const btn = document.getElementById('ambient-toggle');
  if (!audio || !btn) return;

  const KEY = 'soulflake-ambient';
  let wantOn = localStorage.getItem(KEY) !== 'off';

  function syncBtn() {
    const on = !audio.paused;
    btn.setAttribute('aria-pressed', on ? 'true' : 'false');
    btn.title = on ? 'Mute ambient music' : 'Play ambient music';
    btn.querySelector('[data-label]').textContent = on ? 'Sound on' : 'Sound off';
  }

  async function play() {
    try {
      audio.volume = 0.28;
      await audio.play();
      wantOn = true;
      localStorage.setItem(KEY, 'on');
    } catch (_) {
      /* autoplay blocked until click */
    }
    syncBtn();
  }

  function pause() {
    audio.pause();
    wantOn = false;
    localStorage.setItem(KEY, 'off');
    syncBtn();
  }

  btn.addEventListener('click', () => {
    if (audio.paused) play();
    else pause();
  });

  // Soft start after first interaction anywhere (enchant, don't assault)
  const unlock = () => {
    if (wantOn && audio.paused) play();
    window.removeEventListener('pointerdown', unlock);
    window.removeEventListener('keydown', unlock);
  };
  window.addEventListener('pointerdown', unlock, { once: true });
  window.addEventListener('keydown', unlock, { once: true });
  syncBtn();
})();
