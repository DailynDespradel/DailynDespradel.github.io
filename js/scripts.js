/*!
* Start Bootstrap - Freelancer v7.0.7 (https://startbootstrap.com/theme/freelancer)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-freelancer/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    const themeToggle = document.body.querySelector('#themeToggle');
    const getStoredTheme = function () {
        try {
            return window.localStorage.getItem('site-theme');
        } catch (error) {
            return null;
        }
    };
    const storeTheme = function (theme) {
        try {
            window.localStorage.setItem('site-theme', theme);
        } catch (error) {
            return;
        }
    };
    const applyTheme = function (theme) {
        const isDark = theme === 'dark';
        document.documentElement.dataset.theme = isDark ? 'dark' : 'light';
        storeTheme(isDark ? 'dark' : 'light');

        document.querySelectorAll('.theme-toggle').forEach(function (toggle) {
            const toggleText = toggle.querySelector('.theme-toggle-text');
            toggle.setAttribute('aria-pressed', isDark.toString());
            toggle.setAttribute('aria-label', isDark ? 'Switch to light mode' : 'Switch to dark mode');

            if (toggleText) {
                toggleText.textContent = isDark ? 'Switch to light mode' : 'Switch to dark mode';
            }
        });

        document.querySelectorAll('.theme-aware-img').forEach(function (image) {
            const nextSource = isDark ? image.dataset.darkSrc : image.dataset.lightSrc;
            if (nextSource && image.getAttribute('src') !== nextSource) {
                image.setAttribute('src', nextSource);
            }
        });
    };
    const bindThemeToggle = function (toggle) {
        if (!toggle || toggle.dataset.themeBound === 'true') {
            return;
        }

        toggle.dataset.themeBound = 'true';
        toggle.addEventListener('click', function () {
            const nextTheme = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
            applyTheme(nextTheme);
        });
    };
    const createFloatingThemeToggle = function () {
        if (!themeToggle || document.body.querySelector('.floating-theme-toggle')) {
            return null;
        }

        const floatingToggle = themeToggle.cloneNode(true);
        floatingToggle.removeAttribute('id');
        floatingToggle.classList.add('floating-theme-toggle');
        document.body.appendChild(floatingToggle);
        bindThemeToggle(floatingToggle);
        return floatingToggle;
    };

    createFloatingThemeToggle();
    applyTheme(getStoredTheme() || document.documentElement.dataset.theme || 'light');
    bindThemeToggle(themeToggle);

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});
