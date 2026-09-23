/* ==========================================================================
   theme.js —— 深浅色主题切换
   本文件在 <head> 中同步加载：先于页面渲染设置主题，避免刷新时闪白。
   ========================================================================== */

(function () {
  'use strict';

  var STORAGE_KEY = 'portfolio-theme';
  var LIGHT = 'light';
  var DARK = 'dark';

  var root = document.documentElement;

  /* 读取上一次选择；localStorage 不可用时（如隐私模式）回退到浅色 */
  function getStoredTheme() {
    try {
      var value = localStorage.getItem(STORAGE_KEY);
      return value === DARK || value === LIGHT ? value : LIGHT;
    } catch (error) {
      return LIGHT;
    }
  }

  function applyTheme(theme) {
    root.setAttribute('data-theme', theme);
  }

  function rememberTheme(theme) {
    try {
      localStorage.setItem(STORAGE_KEY, theme);
    } catch (error) {
      /* 存储失败时仅本次生效，不影响切换功能 */
    }
  }

  var current = getStoredTheme();
  applyTheme(current);

  /* 同步按钮的无障碍状态与提示文案 */
  function syncButton(button) {
    var isDark = current === DARK;
    var label = isDark ? '切换到浅色主题' : '切换到深色主题';
    button.setAttribute('aria-pressed', String(isDark));
    button.setAttribute('aria-label', label);
    button.setAttribute('title', label);
  }

  function initToggle() {
    var button = document.getElementById('theme-toggle');
    if (!button) {
      return;
    }

    syncButton(button);

    button.addEventListener('click', function () {
      current = current === DARK ? LIGHT : DARK;
      applyTheme(current);
      rememberTheme(current);
      syncButton(button);
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initToggle);
  } else {
    initToggle();
  }
})();
