var userAgent = navigator.userAgent.toLowerCase();
var mobile = (/iphone|ipad|ipod|android/i.test(userAgent));

if (mobile) {
    window.location.href = "m.qsubs.html";
}