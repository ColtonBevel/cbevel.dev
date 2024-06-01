document.addEventListener('DOMContentLoaded', function() {
    checkCookies();
});

function checkCookies() {
    var cookiesAccepted = localStorage.getItem('consentGranted');
    if (cookiesAccepted) {
        document.getElementById('cookies-container').style.display = 'none';
        return true;
    } else {
        document.getElementById('cookies-container').style.display = 'block';
        return false;
    }
}

function acceptCookies() {
    localStorage.setItem("consentGranted", true);
    checkCookies();
    function gtag() { dataLayer.push(arguments); }
  
    gtag('consent', 'update', {
      ad_user_data: 'granted',
      ad_personalization: 'granted',
      ad_storage: 'granted',
      analytics_storage: 'granted'
    });
    
    // Load gtag.js script.
    var gtagScript = document.createElement('script');
    gtagScript.async = true;
    gtagScript.src = 'https://www.googletagmanager.com/gtag/js?id=G-RTMX8ED1T4';
  
    var firstScript = document.getElementsByTagName('script')[0];
    firstScript.parentNode.insertBefore(gtagScript,firstScript);
}