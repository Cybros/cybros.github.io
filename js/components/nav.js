// Handling navbars collapse

$('.s-header__nav-menu-item').click(function() {
    console.log('clicked');
    $('.s-header-bg-overlay').removeClass('-is-open');
    $('.navbar-fixed-top').removeClass('-is-open');
    $('.s-header__trigger').removeClass('-is-active');
});
