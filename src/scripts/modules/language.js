export const initLanguage = () => {
  const currentLang = document.documentElement.lang;
  const savedLang = window.localStorage.getItem('siteLang');

  // 1. Автоматичний редирект (щоб не блимало при редиректі, використовуємо replace)
  if (savedLang && savedLang !== currentLang) {
    const isUkPage = window.location.href.includes('index-uk.html');

    if (savedLang === 'uk' && !isUkPage) {
      window.location.replace('index-uk.html');
    } else if (savedLang === 'en' && isUkPage) {
      window.location.replace('index.html');
    }
  }

  // 2. Логіка кліку з плавною анімацією
  const langLinks = document.querySelectorAll('.navbar__item--language a');

  langLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
      e.preventDefault(); // Зупиняємо миттєвий перехід

      const targetHref = link.getAttribute('href');
      const selectedLang = targetHref.includes('index-uk.html') ? 'uk' : 'en';

      window.localStorage.setItem('siteLang', selectedLang);

      // Запускаємо анімацію згасання
      document.body.classList.add('page__body--fade-out');

      // Чекаємо 300мс (час анімації в CSS) і переходимо
      setTimeout(() => {
        window.location.href = targetHref;
      }, 300);
    });
  });
};
