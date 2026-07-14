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
    const themeToggleText = themeToggle ? themeToggle.querySelector('.theme-toggle-text') : null;
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

        if (!themeToggle) {
            return;
        }

        themeToggle.setAttribute('aria-pressed', isDark.toString());
        themeToggle.setAttribute('aria-label', isDark ? 'Switch to light mode' : 'Switch to dark mode');

        if (themeToggleText) {
            themeToggleText.textContent = isDark ? 'Switch to light mode' : 'Switch to dark mode';
        }
    };

    applyTheme(getStoredTheme() || document.documentElement.dataset.theme || 'light');

    if (themeToggle) {
        themeToggle.addEventListener('click', function () {
            const nextTheme = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
            applyTheme(nextTheme);
        });
    }

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
