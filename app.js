const toggle=document.querySelector('.menu-toggle');const nav=document.querySelector('#nav');
function closeMenu(){nav.classList.remove('open');toggle.setAttribute('aria-expanded','false')}
toggle.addEventListener('click',()=>{const isOpen=toggle.getAttribute('aria-expanded')==='true';nav.classList.toggle('open',!isOpen);toggle.setAttribute('aria-expanded',String(!isOpen))});
nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',closeMenu));document.addEventListener('keydown',e=>{if(e.key==='Escape'){closeMenu();if(document.activeElement.closest('#nav'))toggle.focus()}});
if('IntersectionObserver' in window&&!matchMedia('(prefers-reduced-motion: reduce)').matches){document.documentElement.classList.add('js');const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target)}}),{threshold:.08});document.querySelectorAll('.reveal').forEach(el=>observer.observe(el))}
