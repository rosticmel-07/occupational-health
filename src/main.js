/* ---------------- ICONS ---------------- */
const ICONS = {
  license:'<svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M12 2l8 3v6c0 5.2-3.4 9.9-8 11-4.6-1.1-8-5.8-8-11V5l8-3z" stroke="#0F4C81" stroke-width="1.8"/><path d="M9 12l2 2 4-4" stroke="#0F4C81" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  team:'<svg width="24" height="24" viewBox="0 0 24 24" fill="none"><circle cx="9" cy="8" r="3.2" stroke="#0F4C81" stroke-width="1.8"/><path d="M2.5 20c0-3.6 3-5.6 6.5-5.6s6.5 2 6.5 5.6" stroke="#0F4C81" stroke-width="1.8"/><path d="M16 8.4a3 3 0 1 1 3.6 3M18 14.6c2.4.4 3.9 2 3.9 5" stroke="#0F4C81" stroke-width="1.8" stroke-linecap="round"/></svg>',
  clock:'<svg width="24" height="24" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="9" stroke="#0F4C81" stroke-width="1.8"/><path d="M12 7v5l3.5 2" stroke="#0F4C81" stroke-width="1.8" stroke-linecap="round"/></svg>',
  doc:'<svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M6 2h9l5 5v15H6z" stroke="#0F4C81" stroke-width="1.8" stroke-linejoin="round"/><path d="M9 12h6M9 16h6M9 9h2" stroke="#0F4C81" stroke-width="1.8" stroke-linecap="round"/></svg>',
  shield:'<svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M12 3l7 3v5c0 5-3 8.5-7 10-4-1.5-7-5-7-10V6l7-3z" stroke="#0F4C81" stroke-width="1.8"/></svg>',
  refresh:'<svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M4 12a8 8 0 0 1 14-5.3M20 12a8 8 0 0 1-14 5.3" stroke="#0F4C81" stroke-width="1.8" stroke-linecap="round"/><path d="M18 4v4h-4M6 20v-4h4" stroke="#0F4C81" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  hardhat:'<svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M4 15a8 8 0 0 1 16 0" stroke="#fff" stroke-width="1.8"/><path d="M2 15h20v3H2z" stroke="#fff" stroke-width="1.8" stroke-linejoin="round"/><path d="M12 7V4" stroke="#fff" stroke-width="1.8" stroke-linecap="round"/></svg>',
  gauge:'<svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M4 17a8 8 0 1 1 16 0" stroke="#fff" stroke-width="1.8"/><path d="M12 17l4-5" stroke="#fff" stroke-width="1.8" stroke-linecap="round"/></svg>',
  scan:'<svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M4 8V5a1 1 0 0 1 1-1h3M20 8V5a1 1 0 0 0-1-1h-3M4 16v3a1 1 0 0 0 1 1h3M20 16v3a1 1 0 0 1-1 1h-3" stroke="#fff" stroke-width="1.8" stroke-linecap="round"/><rect x="7" y="9" width="10" height="6" stroke="#fff" stroke-width="1.8"/></svg>',
  cert:'<svg width="22" height="22" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="9" r="5" stroke="#fff" stroke-width="1.8"/><path d="M9 13l-2 8 5-3 5 3-2-8" stroke="#fff" stroke-width="1.8" stroke-linejoin="round"/></svg>',
  audit:'<svg width="22" height="22" viewBox="0 0 24 24" fill="none"><circle cx="11" cy="11" r="6" stroke="#fff" stroke-width="1.8"/><path d="M20 20l-4.3-4.3" stroke="#fff" stroke-width="1.8" stroke-linecap="round"/></svg>',
  train:'<svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M4 19V8l8-4 8 4v11" stroke="#fff" stroke-width="1.8" stroke-linejoin="round"/><path d="M9 19v-5h6v5" stroke="#fff" stroke-width="1.8"/></svg>',
  paper:'<svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M6 2h9l5 5v15H6z" stroke="#fff" stroke-width="1.8" stroke-linejoin="round"/><path d="M9 12h6M9 16h6" stroke="#fff" stroke-width="1.8" stroke-linecap="round"/></svg>',
  risk:'<svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M12 3l9 16H3L12 3z" stroke="#fff" stroke-width="1.8" stroke-linejoin="round"/><path d="M12 10v4M12 17h.01" stroke="#fff" stroke-width="1.8" stroke-linecap="round"/></svg>',
  fire:'<svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M12 3c1 3-3 4-3 7.5a3 3 0 0 0 6 0c0-1.5-1-2-1-3.2 1.8 1 3 3 3 5.2a5 5 0 0 1-10 0C7 8.5 10.5 6.5 12 3z" stroke="#fff" stroke-width="1.8" stroke-linejoin="round"/></svg>',
  medical:'<svg width="22" height="22" viewBox="0 0 24 24" fill="none"><rect x="3" y="4" width="18" height="16" rx="2" stroke="#fff" stroke-width="1.8"/><path d="M12 8v8M8 12h8" stroke="#fff" stroke-width="1.8" stroke-linecap="round"/></svg>',
  measure:'<svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M3 16l5-5 3 3 6-6M17 8h4v4" stroke="#fff" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>',
};

/* ---------------- WHY US DATA ---------------- */
const why = [
  {ic:'license',t:"Ліцензія та акредитація",d:"Повний пакет дозвільних документів, визнаних Держпраці України."},
  {ic:'team',t:"Досвідчена команда",d:"Понад 27 атестованих інженерів з профільною технічною освітою."},
  {ic:'clock',t:"Швидкі терміни",d:"Виїзд на об'єкт протягом 48 годин після отримання заявки."},
  {ic:'doc',t:"Прозора звітність",d:"Кожен висновок підкріплений фото- та відеофіксацією обстеження."},
  {ic:'shield',t:"Супровід під час перевірок",d:"Представляємо інтереси клієнта під час візитів контролюючих органів."},
  {ic:'refresh',t:"Гарантія відповідності",d:"Повторний огляд без оплати, якщо в акті виявлено розбіжності."},
];
document.getElementById('whyGrid').innerHTML = why.map((w,i)=>`
  <div class="why-card reveal">
    <span class="why-num">0${i+1}</span>
    <div class="why-ic">${ICONS[w.ic]}</div>
    <h3>${w.t}</h3>
    <p>${w.d}</p>
  </div>`).join('');

/* ---------------- SERVICES DATA ---------------- */
const services = [
  {ic:'cert',t:"Експертне обстеження підприємства",d:"Висновок експертизи для отримання Дозволу Держпраці на роботи та експлуатацію обладнання підвищеної небезпеки."},
  {ic:'paper',t:"Декларація відповідності",d:"Підготовка Декларації Держпраці про відповідність матеріально-технічної бази вимогам охорони праці."},
  {ic:'scan',t:"Технічний огляд обладнання",d:"Огляд, випробування та експертне обстеження кранів, ліфтів, посудин під тиском та іншого обладнання підвищеної небезпеки."},
  {ic:'train',t:"Лекції зі спецправил безпеки",d:"Короткі лекційні заняття (від 1 години) за спеціальними правилами безпеки для персоналу."},
  {ic:'fire',t:"Навчання з охорони праці",d:"Навчання за всіма чинними НПАОП: охорона праці, пожежна та електробезпека, робітничі професії. Іспит — за бажанням по Zoom."},
  {ic:'audit',t:"Розслідування нещасних випадків",d:"Консультації та супровід розслідування нещасних випадків на виробництві."},
  {ic:'gauge',t:"Аудит охорони праці",d:"Комплексна оцінка стану охорони праці на підприємстві."},
  {ic:'hardhat',t:"Атестація робочих місць",d:"Атестація робочих місць за умовами праці згідно з чинним законодавством."},
  {ic:'medical',t:"Психофізіологічна експертиза",d:"Психофізіологічна експертиза працівників (ПФЕ) за напрямами підвищеної небезпеки."},
  {ic:'risk',t:"Плани та ідентифікація ОПН",d:"Розроблення плану управління відходами, плану ЛЛА та ідентифікації об'єктів підвищеної небезпеки."},
  {ic:'cert',t:"Документація та сертифікати ISO",d:"Розроблення документації та супровід сертифікації за стандартами ISO."},
  {ic:'paper',t:"Експертиза проектної документації",d:"Будівництво і облаштування свердловин, проекти промислової розробки."},
  {ic:'audit',t:"Експертиза проектів будівництва",d:"Проектування та технічна інвентаризація об'єктів будівництва."},
  {ic:'measure',t:"Заміри опору ізоляції",d:"Заміри опору ізоляції та заземлення електроустановок."},
  {ic:'medical',t:"Супровід медичних оглядів",d:"Організація та інформаційний супровід медичних оглядів працівників."},
  {ic:'fire',t:"Пожежна та техногенна безпека",d:"Проєктування, монтаж та обслуговування охоронних і протипожежних систем."},
  {ic:'fire',t:"Обслуговування вогнегасників",d:"Технічне обслуговування та перезарядка вогнегасників."},
];
document.getElementById('svcGrid').innerHTML = services.map(s=>`
  <div class="svc-card reveal">
    <div class="svc-ic">${ICONS[s.ic]}</div>
    <h3>${s.t}</h3>
    <p>${s.d}</p>
    <a href="#contact" class="svc-link">Детальніше <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></a>
  </div>`).join('');

/* ---------------- PRICES DATA ---------------- */
const prices = [
  {t:"Навчання посадових осіб та працівників з охорони праці",v:"900 грн / особа"},
  {t:"Навчання на присвоєння групи з електробезпеки",v:"1100 грн / особа"},
  {t:"Спеціальне навчання для робіт підвищеної небезпеки",v:"1000 грн / особа"},
  {t:"Технічний огляд навантажувача",v:"від 2000 грн"},
  {t:"Експертне обстеження навантажувача",v:"від 3500 грн"},
  {t:"Виготовлення паспорта навантажувача",v:"від 2500 грн"},
  {t:"Експертне обстеження та технічний огляд посудин під тиском",v:"1733–20330 грн"},
  {t:"Виготовлення паспорта посудини під тиском",v:"4500–5000 грн"},
  {t:"Експертне обстеження вантажопідіймальних механізмів",v:"800–30000 грн"},
  {t:"Атестація робочих місць",v:"від 2100 грн / професію"},
  {t:"Психофізіологічна експертиза працівників (ПФЕ)",v:"до 1000 грн"},
  {t:"Експертиза проектної документації",v:"від 15000 грн"},
];
document.getElementById('priceTable').innerHTML = prices.map(p=>`
  <div class="price-row reveal"><span class="price-name">${p.t}</span><span class="price-value">${p.v}</span></div>`).join('');

/* ---------------- PROCESS DATA ---------------- */
const steps = [
  {t:"Заявка",d:"Залишаєте заявку на сайті або телефонуєте нашому менеджеру."},
  {t:"Консультація",d:"Аналізуємо об'єкт і формуємо перелік необхідних робіт."},
  {t:"Обстеження",d:"Виїзд експертів на об'єкт для технічного огляду."},
  {t:"Документація",d:"Готуємо повний пакет висновків та дозвільних документів."},
  {t:"Фінальний звіт",d:"Передаємо звіт і супроводжуємо до здачі перевірки."},
];
document.getElementById('processTrack').innerHTML = steps.map((s,i)=>`
  <div class="step reveal"><div class="step-num">0${i+1}</div><h4>${s.t}</h4><p>${s.d}</p></div>`).join('');

/* ---------------- STATS DATA ---------------- */
const stats = [
  {n:15,suffix:"+",l:"Років досвіду"},
  {n:1200,suffix:"+",l:"Виконаних проєктів"},
  {n:500,suffix:"+",l:"Клієнтів"},
  {n:98,suffix:"%",l:"Задоволених клієнтів"},
];
document.getElementById('statsGrid').innerHTML = stats.map(s=>`
  <div class="stat reveal"><b data-target="${s.n}" data-suffix="${s.suffix}">0${s.suffix}</b><span>${s.l}</span></div>`).join('');

/* ---------------- CERTIFICATES DATA ---------------- */
const DOC_PLACEHOLDER = "data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%20400%20520%22%3E%0A%20%20%3Crect%20width%3D%22400%22%20height%3D%22520%22%20fill%3D%22%23F5F9FC%22/%3E%0A%20%20%3Crect%20x%3D%2224%22%20y%3D%2224%22%20width%3D%22352%22%20height%3D%22472%22%20fill%3D%22%23FFFFFF%22%20stroke%3D%22%23E1E6ED%22%20stroke-width%3D%222%22/%3E%0A%20%20%3Crect%20x%3D%2256%22%20y%3D%2264%22%20width%3D%22288%22%20height%3D%2214%22%20rx%3D%224%22%20fill%3D%22%230A3860%22/%3E%0A%20%20%3Crect%20x%3D%2256%22%20y%3D%2292%22%20width%3D%22220%22%20height%3D%228%22%20rx%3D%223%22%20fill%3D%22%239AA7B5%22/%3E%0A%20%20%3Crect%20x%3D%2256%22%20y%3D%22112%22%20width%3D%22180%22%20height%3D%228%22%20rx%3D%223%22%20fill%3D%22%239AA7B5%22/%3E%0A%20%20%3Cline%20x1%3D%2256%22%20y1%3D%22150%22%20x2%3D%22344%22%20y2%3D%22150%22%20stroke%3D%22%23E1E6ED%22%20stroke-width%3D%222%22/%3E%0A%20%20%3Crect%20x%3D%2256%22%20y%3D%22176%22%20width%3D%22288%22%20height%3D%226%22%20rx%3D%223%22%20fill%3D%22%23E1E6ED%22/%3E%0A%20%20%3Crect%20x%3D%2256%22%20y%3D%22196%22%20width%3D%22288%22%20height%3D%226%22%20rx%3D%223%22%20fill%3D%22%23E1E6ED%22/%3E%0A%20%20%3Crect%20x%3D%2256%22%20y%3D%22216%22%20width%3D%22220%22%20height%3D%226%22%20rx%3D%223%22%20fill%3D%22%23E1E6ED%22/%3E%0A%20%20%3Crect%20x%3D%2256%22%20y%3D%22246%22%20width%3D%22288%22%20height%3D%226%22%20rx%3D%223%22%20fill%3D%22%23E1E6ED%22/%3E%0A%20%20%3Crect%20x%3D%2256%22%20y%3D%22266%22%20width%3D%22288%22%20height%3D%226%22%20rx%3D%223%22%20fill%3D%22%23E1E6ED%22/%3E%0A%20%20%3Crect%20x%3D%2256%22%20y%3D%22286%22%20width%3D%22150%22%20height%3D%226%22%20rx%3D%223%22%20fill%3D%22%23E1E6ED%22/%3E%0A%20%20%3Ccircle%20cx%3D%22272%22%20cy%3D%22410%22%20r%3D%2264%22%20fill%3D%22none%22%20stroke%3D%22%230F4C81%22%20stroke-width%3D%223%22%20opacity%3D%220.55%22/%3E%0A%20%20%3Ccircle%20cx%3D%22272%22%20cy%3D%22410%22%20r%3D%2250%22%20fill%3D%22none%22%20stroke%3D%22%230F4C81%22%20stroke-width%3D%221.5%22%20opacity%3D%220.4%22/%3E%0A%20%20%3Ctext%20x%3D%22272%22%20y%3D%22404%22%20text-anchor%3D%22middle%22%20font-family%3D%22Arial%2C%20sans-serif%22%20font-size%3D%2213%22%20font-weight%3D%22700%22%20fill%3D%22%230F4C81%22%20opacity%3D%220.7%22%3E%D0%94%D0%95%D0%A0%D0%96%D0%9F%D0%A0%D0%90%D0%A6%D0%86%3C/text%3E%0A%20%20%3Ctext%20x%3D%22272%22%20y%3D%22420%22%20text-anchor%3D%22middle%22%20font-family%3D%22Arial%2C%20sans-serif%22%20font-size%3D%2210%22%20fill%3D%22%230F4C81%22%20opacity%3D%220.55%22%3E%D0%A3%D0%9A%D0%A0%D0%90%D0%87%D0%9D%D0%90%3C/text%3E%0A%20%20%3Crect%20x%3D%2256%22%20y%3D%22380%22%20width%3D%22120%22%20height%3D%2270%22%20fill%3D%22none%22%20stroke%3D%22%23D1D9E2%22%20stroke-width%3D%221.5%22%20stroke-dasharray%3D%224%203%22/%3E%0A%20%20%3Ctext%20x%3D%22116%22%20y%3D%22420%22%20text-anchor%3D%22middle%22%20font-family%3D%22Arial%2C%20sans-serif%22%20font-size%3D%2210%22%20fill%3D%22%239AA7B5%22%3E%D0%BF%D1%96%D0%B4%D0%BF%D0%B8%D1%81%3C/text%3E%0A%3C/svg%3E";
// TODO: замінити DOC_PLACEHOLDER на реальні скани дозволів (фото/PDF-обкладинку),
// коли вони будуть надані — просто підстав шлях до файлу в img.
const certs = [
  {img:DOC_PLACEHOLDER,t:"Дозвіл на виконання робіт підвищеної небезпеки",s:"№ДЗ-2480/ПЗ/1-23 від 19.06.2023р."},
  {img:DOC_PLACEHOLDER,t:"Дозвіл на експлуатацію обладнання підвищеної небезпеки",s:"№ДЗ-2481/ПЗ/1-23 від 19.06.2023р."},
  {img:DOC_PLACEHOLDER,t:"Дозвіл на виконання робіт підвищеної небезпеки",s:"№ДЗ-3577/ПЗ/1-23 від 17.08.2023р."},
];
document.getElementById('certGrid').innerHTML = certs.map(c=>`
  <div class="cert-card reveal">
    <img src="${c.img}" alt="${c.t}">
    <div class="cert-overlay">
      <b>${c.t}</b><span>${c.s}</span>
      <span class="cert-dl">Завантажити ⭳</span>
    </div>
  </div>`).join('');

/* ---------------- TESTIMONIALS DATA ---------------- */
const testis = [
  {q:"SAFEPRO провели повний аудит нашого цеху за тиждень і склали чіткий план усунення зауважень. Перевірку Держпраці пройшли без жодного зауваження.",n:"Олена Ковальчук",r:"Директорка з виробництва, МеталПром",img:"https://picsum.photos/id/1027/100/100"},
  {q:"Оформили дозвіл на експлуатацію кранового обладнання швидше, ніж обіцяли. Комунікація прозора на кожному етапі.",n:"Ігор Петренко",r:"Головний інженер, БудТехСервіс",img:"https://picsum.photos/id/1005/100/100"},
  {q:"Навчання персоналу пройшло структуровано, а документи підготували з урахуванням специфіки нашого виробництва.",n:"Марія Гнатюк",r:"HR-директорка, АгроМех",img:"https://picsum.photos/id/1011/100/100"},
];
document.getElementById('testiTrack').innerHTML = testis.map(t=>`
  <div class="testi-slide">
    <div class="testi-card">
      <div class="stars">★★★★★</div>
      <p class="quote">"${t.q}"</p>
      <div class="testi-person">
        <img src="${t.img}" alt="${t.n}">
        <div class="testi-info"><b>${t.n}</b><span>${t.r}</span></div>
      </div>
    </div>
  </div>`).join('');
document.getElementById('testiDots').innerHTML = testis.map((_,i)=>`<button data-i="${i}" class="${i===0?'active':''}"></button>`).join('');

/* ---------------- FAQ DATA ---------------- */
const faqs = [
  {q:"Скільки триває стандартна перевірка об'єкта?",a:"Залежно від масштабу підприємства — від 1 до 5 робочих днів, включно з виїздом інженера, оглядом та первинним звітом."},
  {q:"Які документи потрібні для сертифікації обладнання?",a:"Технічний паспорт обладнання, акти попередніх оглядів (за наявності) та реєстраційні документи підприємства. Повний перелік надамо після консультації."},
  {q:"Чи виїжджаєте ви в регіони?",a:"Так, працюємо по всій території України. Виїзд бригади погоджується індивідуально під ваш графік."},
  {q:"Що входить у вартість аудиту безпеки?",a:"Обстеження об'єкта, аналіз документації, письмовий звіт із переліком зауважень та рекомендацій щодо усунення."},
  {q:"Чи надаєте супровід під час перевірки Держпраці?",a:"Так, представник SAFEPRO присутній під час перевірки та представляє інтереси клієнта у спілкуванні з контролюючим органом."},
];
document.getElementById('faqList').innerHTML = faqs.map((f,i)=>`
  <div class="faq-item reveal ${i===0?'open':''}">
    <button class="faq-q">${f.q}<span class="faq-plus"></span></button>
    <div class="faq-a"><p>${f.a}</p></div>
  </div>`).join('');

/* ================= INTERACTIONS ================= */
// nav scroll state + mobile menu
const navEl=document.getElementById('nav');
window.addEventListener('scroll',()=>navEl.classList.toggle('scrolled',window.scrollY>10));
const burger=document.getElementById('burger'),mobileMenu=document.getElementById('mobileMenu');
burger.addEventListener('click',()=>{burger.classList.toggle('open');mobileMenu.classList.toggle('open');});
mobileMenu.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{burger.classList.remove('open');mobileMenu.classList.remove('open');}));

// scroll reveal
const io=new IntersectionObserver((entries)=>{entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target);}});},{threshold:.15});
document.querySelectorAll('.reveal').forEach(el=>io.observe(el));

// animated counters
const statObserver=new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      const el=entry.target, target=+el.dataset.target, suffix=el.dataset.suffix;
      let cur=0; const step=Math.max(1,Math.ceil(target/60));
      const t=setInterval(()=>{cur+=step; if(cur>=target){cur=target;clearInterval(t);} el.textContent=cur+suffix;},20);
      statObserver.unobserve(el);
    }
  });
},{threshold:.5});
document.querySelectorAll('.stat b').forEach(el=>statObserver.observe(el));

// FAQ accordion
document.getElementById('faqList').addEventListener('click',(e)=>{
  const btn=e.target.closest('.faq-q'); if(!btn) return;
  const item=btn.parentElement; const answer=item.querySelector('.faq-a');
  const wasOpen=item.classList.contains('open');
  document.querySelectorAll('.faq-item.open').forEach(o=>{o.classList.remove('open');o.querySelector('.faq-a').style.maxHeight=null;});
  if(!wasOpen){item.classList.add('open'); answer.style.maxHeight=answer.scrollHeight+'px';}
});
window.addEventListener('load',()=>{
  const first=document.querySelector('.faq-item.open .faq-a');
  if(first) first.style.maxHeight=first.scrollHeight+'px';
});

// testimonial carousel
let testiIdx=0;
const testiTrack=document.getElementById('testiTrack'), testiDots=document.getElementById('testiDots');
function goTesti(i){
  testiIdx=(i+testis.length)%testis.length;
  testiTrack.style.transform=`translateX(-${testiIdx*100}%)`;
  testiDots.querySelectorAll('button').forEach((b,bi)=>b.classList.toggle('active',bi===testiIdx));
}
document.getElementById('testiPrev').addEventListener('click',()=>goTesti(testiIdx-1));
document.getElementById('testiNext').addEventListener('click',()=>goTesti(testiIdx+1));
testiDots.addEventListener('click',(e)=>{const b=e.target.closest('button'); if(b) goTesti(+b.dataset.i);});
setInterval(()=>goTesti(testiIdx+1),6000);

// lightbox
const lightbox=document.getElementById('lightbox'), lightboxImg=document.getElementById('lightboxImg');
document.getElementById('certGrid').addEventListener('click',(e)=>{
  const card=e.target.closest('.cert-card'); if(!card) return;
  lightboxImg.src=card.querySelector('img').src.replace(/\/\d+\/\d+$/,'/900/1200');
  lightbox.classList.add('open');
});
document.getElementById('lightboxClose').addEventListener('click',()=>lightbox.classList.remove('open'));
lightbox.addEventListener('click',(e)=>{if(e.target===lightbox) lightbox.classList.remove('open');});

// contact form (demo submit)
document.getElementById('contactForm').addEventListener('submit',(e)=>{
  e.preventDefault();
  const btn=e.target.querySelector('button[type=submit]');
  const original=btn.textContent;
  btn.textContent='Дякуємо! Заявку надіслано ✓';
  btn.style.background='#22C55E';
  setTimeout(()=>{btn.textContent=original;btn.style.background='';e.target.reset();},2600);
});