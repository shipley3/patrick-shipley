// Function to load HTML components
async function loadComponent(elementId, componentPath) {
    try {
        const response = await fetch(componentPath);
        let html = await response.text();
        
        // Special handling for footer on index page
        if (elementId === 'footer-component' && window.location.pathname.endsWith('index.html')) {
            const tempDiv = document.createElement('div');
            tempDiv.innerHTML = html;
            const homeLink = tempDiv.querySelector('a[href="index.html"]').parentElement;
            if (homeLink) {
                homeLink.remove();
            }
            html = tempDiv.innerHTML;
        }
        
        document.getElementById(elementId).innerHTML = html;
    } catch (error) {
        console.error('Error loading component:', error);
    }
}

// Load components when the page loads
document.addEventListener('DOMContentLoaded', () => {
    loadComponent('header-component', '/components/header.html');
    loadComponent('footer-component', '/components/footer.html');
}); 