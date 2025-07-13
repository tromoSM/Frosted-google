// ==UserScript==
// @name        frosted google logo
// @namespace    http://tromoSM.com/
// @version      1.3
// @description  tromoSM - Frosted google logo
// @match        https://www.google.com/*
// @grant        none
// ==/UserScript==

(function () {
  'use strict';

  const imageURL = 'https://github.com/tromoSM/Frosted-google/blob/main/tromoSM-Google-logo-better-custom-spaced.png?raw=true';

  const observer = new MutationObserver(() => {
    const logoLink = document.getElementById('logo');
    if (!logoLink) return;

    const existingImg = logoLink.querySelector('img');
    const existingSVG = logoLink.querySelector('svg');

    if (existingImg?.src.includes('tromoSM-Google-logo.png')) {
      return;
    }

    if (existingSVG) existingSVG.remove();

    const img = document.createElement('img');
    img.src = imageURL;
    img.alt = 'tromoSM Google Logo';
    img.style.height = '24px';
    img.style.objectFit = 'contain';
    img.style.display = 'block';
    img.style.filter = 'none';
    img.style.webkitFilter = 'none'; 
    img.style.imageRendering = 'auto'; 

    logoLink.appendChild(img);

    observer.disconnect();
  });

  observer.observe(document.body, {
    childList: true,
    subtree: true
  });
})();
