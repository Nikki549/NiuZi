/* ==========================================================================
   render.js —— 根据 data.js 中的数据渲染左侧信息与右侧项目列表
   ========================================================================== */

(function () {
  'use strict';

  /* 创建元素的小工具：tagName(标签, 类名, 文本) */
  function create(tagName, className, text) {
    var node = document.createElement(tagName);
    if (className) {
      node.className = className;
    }
    if (text !== undefined && text !== null) {
      node.textContent = text;
    }
    return node;
  }

  /* 编号补零：1 -> 01 */
  function padIndex(index) {
    return String(index + 1).padStart(2, '0');
  }

  /* 生成一组标签 */
  function createTagList(items, accent) {
    var list = create('ul', 'tag-list');
    items.forEach(function (item) {
      list.appendChild(create('li', accent ? 'tag tag--accent' : 'tag', item));
    });
    return list;
  }

  /* 左侧：个人基本信息 */
  function renderProfile() {
    var avatar = document.getElementById('avatar');
    avatar.src = PROFILE.avatar;
    avatar.alt = PROFILE.name + ' 的头像';

    document.getElementById('profile-name').textContent = PROFILE.name;
    document.getElementById('profile-role').textContent = PROFILE.role;
    document.getElementById('profile-bio').textContent = PROFILE.bio;
    document.getElementById('profile-status').textContent = PROFILE.status;

    var email = document.getElementById('sidebar-email');
    email.textContent = PROFILE.email;
    email.href = 'mailto:' + PROFILE.email;
  }

  /* 左侧：技能方向（按分组展示） */
  function renderSkills() {
    var container = document.getElementById('skill-groups');

    PROFILE.skills.forEach(function (group) {
      var wrapper = create('div', 'skill-group');
      wrapper.appendChild(create('h3', 'skill-group__name', group.name));
      wrapper.appendChild(createTagList(group.items, false));
      container.appendChild(wrapper);
    });
  }

  /* 右侧：单个项目条目 */
  function createProjectItem(project, index) {
    var article = create('article', 'project reveal');

    // 封面图
    var media = create('div', 'project__media');
    var image = create('img');
    image.src = project.image;
    image.alt = project.title + ' 项目封面';
    image.loading = 'lazy';
    media.appendChild(image);

    // 文字内容
    var body = create('div', 'project__body');

    var meta = create('div', 'project__meta');
    meta.appendChild(create('span', 'project__no', padIndex(index)));
    meta.appendChild(create('span', 'tag tag--accent', project.category));
    meta.appendChild(create('time', 'project__date', project.date));
    body.appendChild(meta);

    body.appendChild(create('h3', 'project__title', project.title));
    body.appendChild(create('p', 'project__summary', project.summary));

    // 项目亮点
    if (project.points && project.points.length) {
      var points = create('ul', 'project__points');
      project.points.forEach(function (point) {
        points.appendChild(create('li', null, point));
      });
      body.appendChild(points);
    }

    // 技术栈
    var stack = create('div', 'project__stack');
    stack.appendChild(createTagList(project.stack, false));
    body.appendChild(stack);

    // 项目链接
    if (project.link) {
      var link = create('a', 'project__link', '查看项目');
      link.href = project.link;
      link.target = '_blank';
      link.rel = 'noopener';
      body.appendChild(link);
    }

    article.appendChild(media);
    article.appendChild(body);
    return article;
  }

  /* 右侧：项目列表 */
  function renderProjects() {
    var container = document.getElementById('project-list');
    var fragment = document.createDocumentFragment();

    PROJECTS.forEach(function (project, index) {
      fragment.appendChild(createProjectItem(project, index));
    });

    container.appendChild(fragment);
  }

  /* 右侧：联系方式 */
  function renderContacts() {
    var container = document.getElementById('contact-list');

    CONTACTS.forEach(function (contact) {
      var item = contact.href
        ? create('a', 'contact__item')
        : create('div', 'contact__item');

      if (contact.href) {
        item.href = contact.href;
        if (contact.href.indexOf('http') === 0) {
          item.target = '_blank';
          item.rel = 'noopener';
        }
      }

      item.appendChild(create('p', 'contact__label', contact.label));
      item.appendChild(create('p', 'contact__value', contact.value));
      container.appendChild(item);
    });
  }

  function init() {
    renderProfile();
    renderSkills();
    renderProjects();
    renderContacts();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
