

document.addEventListener("DOMContentLoaded", function () {
    // Select all navigation links within the <nav> element
    const navLinks = document.querySelectorAll('nav a');

    function updateActiveLink() {
        // Get the current URL path and convert it to lowercase
        const currentPath = window.location.pathname.toLowerCase();

        navLinks.forEach(link => {
            // Only apply the active class to links that are not dropdown toggles
            if (!link.classList.contains('dropdown-toggle')) {
                // Remove the active class from all links
                link.classList.remove('active');

                // Get the href attribute of the link, remove leading slashes, and convert to lowercase
                const linkHref = link.getAttribute('href').toLowerCase().replace(/^\/+/, '');

                // Get the current path, remove leading slashes, and convert to lowercase
                const normalizedPath = currentPath.replace(/^\/+/, '').toLowerCase();

                // Check if the normalized link href matches the normalized current path
                if (linkHref === normalizedPath) {
                    link.classList.add('active');
                }
            }
        });
    }

    // Update the active link on page load
    updateActiveLink();

    // Add click event listener to each navigation link
    navLinks.forEach(link => {
        link.addEventListener('click', function (event) {
            // Check if the link is a dropdown toggle
            if (link.classList.contains('dropdown-toggle')) {
                // Allow the default behavior (dropdown toggle)
                return;
            }

            // Prevent default link behavior for regular navigation links
            event.preventDefault();

            // Update the URL path
            window.location.href = link.getAttribute('href');

            // Update the active link classes
            updateActiveLink();
        });
    });

    // Listen for popstate events to handle browser navigation (back/forward buttons)
    window.addEventListener('popstate', updateActiveLink);
});








// Makes footer links reload page

const navLinks = document.querySelectorAll('a.nav-link:not(.dropdown-toggle)'); // "navLinks" equals each HTML element that is an <a> with the "nav-link" class.

navLinks.forEach(link => { // For each "navLinks," have "link" equal them and do the below.
    // The below says that for "link," listen for when it is clicked on, and when clicked, on execute the function that makes the window's URL equal to the link's URL.
    link.addEventListener('click', function (event) {
        event.preventDefault();
        window.location.href = link.href;
    });
});
