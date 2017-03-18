  function ColorDetailController() {
    this.colors = [{
      name: 'brown',
      detail: "Healthy!",
      class: "color"
    }, {
      name: 'green',
      detail: "It moved through your intenstines too fast to complete the process of turning brown.",
      class: "color"
    }, {
      name: 'black',
      detail: "Usually this means there is an excess of dried blood present. Not a good sign. If this persists you may want to call a doctor.",
      class: "color"
    }, {
      name: 'yellow',
      detail: "This can occur when fat is not being absorbed from the poop. This is a sign you should talk to your doctor soon.",
      class: "color"
    }, {
      name: 'red',
      detail: "This is a sign of potential bleeding in the lower intestine which can be caused by hemmorhoids. That or you ate way too much red velvet.",
      class: "color"
    }, {
      name: "white",
      detail: "This can happen when the liver does not release enough bile salts into the stool of your intestines. Definitely talk to your doctor about this.",
      class: "color"
    }, {
      name: "blue",
      detail: "Some forms of edible blue dye, when consumed in large amounts, are known to cause poop to turn blue, especially if they pass quickly through the digestive tract.",
      class: "color"
    }];
  }

  angular.module('myApp').component('colorDetail', {
    templateUrl: 'options.html',
    controller: ColorDetailController
  });
