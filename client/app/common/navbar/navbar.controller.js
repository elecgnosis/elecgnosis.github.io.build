class NavbarController {
  constructor() {
    this.name = 'navbar';
    this.toggleMenu = function() {
      console.log('Calling toggleMenu function.');
      try {
        var menuic = angular.element(document.getElementsByClassName('menu-item-container')[0]);
        var expicon = angular.element(document.getElementsByClassName('expand-icon')[0]);
        var colicon = angular.element(document.getElementsByClassName('collapse-icon')[0]);
        if (!menuic.hasClass('noshow')) {
          menuic.addClass('noshow');
          expicon.removeClass('noshow');
          colicon.addClass('noshow');
        } else {
          menuic.removeClass('noshow');
          expicon.addClass('noshow');
          colicon.removeClass('noshow');
        }
        console.log('Function call successful.');
      } catch(e) {
        console.log('Function call unsuccessful. Exception follows:');
        console.log(e);
      }
    }
  }
}

export default NavbarController;
