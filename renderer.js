function loadView(viewName) {
    fetch(`pages/${viewName}.html`)
        .then(res => res.text())
        .then(html => {
            document.getElementById('view-container').innerHTML = html;
        })
        .catch(err => {
            document.getElementById('view-container').innerHTML = `<p class="text-red-600">View not found.</p>`;
            console.error(err);
        });
}

// Optional: support preload message
window.addEventListener("load-view", (e) => loadView(e.detail));

// Load default view on startup
window.addEventListener("DOMContentLoaded", () => {
    loadView('home');
});
