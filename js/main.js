/* ==========================================================================
   main.js —— 页面交互：导航高亮、锚点滚动、内容进场淡入
   ========================================================================== */

(function () {
  'use strict';

  var MOBILE_QUERY = '(max-width: 860px)';

  /* 导航高亮：滚动时标注当前所在区块 */
  function initScrollSpy() {
    var links = Array.prototype.slice.call(document.querySelectorAll('.nav__link'));
    if (!links.length) {
      return;
    }

    var sections = links
      .map(function (link) {
        return document.querySelector(link.getAttribute('href'));
      })
      .filter(Boolean);

    // 移动端导航为横向滚动，把激活项滚动到可见位置
    // 注意：不能使用 scrollIntoView，它会连同文档一起滚动导致页面跳到顶部
    function keepLinkVisible(link) {
      var nav = link.parentElement;
      if (!nav || nav.scrollWidth <= nav.clientWidth) {
        return;
      }

      var navRect = nav.getBoundingClientRect();
      var linkRect = link.getBoundingClientRect();
      var offset = linkRect.left - navRect.left - (nav.clientWidth - linkRect.width) / 2;

      nav.scrollTo({ left: Math.max(0, nav.scrollLeft + offset), behavior: 'smooth' });
    }

    function setActive(id) {
      links.forEach(function (link) {
        var isActive = link.getAttribute('href') === '#' + id;
        link.classList.toggle('is-active', isActive);

        if (isActive && window.matchMedia(MOBILE_QUERY).matches) {
          keepLinkVisible(link);
        }
      });
    }

    if (!('IntersectionObserver' in window)) {
      return;
    }

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      // 只把视口中部的一条横带作为判定区域
      { rootMargin: '-45% 0px -50% 0px', threshold: 0 }
    );

    sections.forEach(function (section) {
      observer.observe(section);
    });

    // 滚动到页面底部时，固定高亮最后一项
    var lastLink = links[links.length - 1];
    window.addEventListener(
      'scroll',
      function () {
        var reachedBottom =
          window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 8;
        if (reachedBottom) {
          setActive(lastLink.getAttribute('href').slice(1));
        }
      },
      { passive: true }
    );
  }

  /* 内容进场淡入 */
  function initReveal() {
    var targets = Array.prototype.slice.call(document.querySelectorAll('.reveal'));
    if (!targets.length) {
      return;
    }

    if (!('IntersectionObserver' in window)) {
      targets.forEach(function (target) {
        target.classList.add('is-visible');
      });
      return;
    }

    var observer = new IntersectionObserver(
      function (entries, obs) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -60px 0px' }
    );

    targets.forEach(function (target) {
      observer.observe(target);
    });
  }

  function init() {
    initScrollSpy();
    initReveal();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
