document.addEventListener('DOMContentLoaded', function() {
    document.addEventListener('mousemove', function(e) {
        let mouse_elem = document.querySelector('#cursor-follow');
        mouse_elem.style.left = e.clientX + 'px';
        mouse_elem.style.top = e.clientY + 'px';
    });
});