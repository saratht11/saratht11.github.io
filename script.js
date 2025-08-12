(function(){
  const root = document.documentElement;
  const key = 'prefers-theme';
  const toggle = document.getElementById('themeToggle');
  const year = document.getElementById('year');
  if(year) year.textContent = new Date().getFullYear();

  function applyTheme(t){
    if(t === 'light') root.classList.add('light');
    else root.classList.remove('light');
  }

  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const saved = localStorage.getItem(key);
  const theme = saved || (prefersDark ? 'dark' : 'light');
  applyTheme(theme);

  if(toggle){
    toggle.addEventListener('click', () => {
      const isLight = root.classList.toggle('light');
      localStorage.setItem(key, isLight ? 'light' : 'dark');
    });
  }
})();
