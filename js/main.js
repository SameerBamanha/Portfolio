(function () {
  var root = document.documentElement;
  var toggle = document.getElementById('theme-toggle');
  var label = toggle.querySelector('[data-theme-label]');
  var stored = localStorage.getItem('theme');

  function systemPrefersDark() {
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  }

  function apply(theme) {
    root.setAttribute('data-theme', theme);
    label.textContent = theme === 'dark' ? 'light' : 'dark';
  }

  var current = stored || (systemPrefersDark() ? 'dark' : 'light');
  apply(current);

  toggle.addEventListener('click', function () {
    var next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    localStorage.setItem('theme', next);
    apply(next);
  });
})();
