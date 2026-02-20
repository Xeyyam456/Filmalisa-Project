// js/client/checkAuth.js

function checkAuth() {
    const token = localStorage.getItem("user_token");
    const isAuthPage = window.location.pathname.includes("login.html") || 
                       window.location.pathname.includes("register.html");

    // Əgər token yoxdursa və login/register səhifəsində deyilsə -> Logine at
    if (!token && !isAuthPage) {
        window.location.href = "login.html";
    }
}

checkAuth();

// Token silinən kimi (məsələn logout və ya əllə silmə) dərhal reaksiya vermək üçün
window.addEventListener('storage', (event) => {
    if (event.key === 'user_token' && !event.newValue) {
        window.location.href = "login.html";
    }
});

// Ən qəti həll: Hər saniyə gizli yoxlama
setInterval(() => {
    const token = localStorage.getItem("user_token");
    const isAuthPage = window.location.pathname.includes("login.html") || 
                       window.location.pathname.includes("register.html");
                       
    if (!token && !isAuthPage) {
        window.location.href = "login.html";
    }
}, 500); // Daha sürətli reaksiya üçün 500ms