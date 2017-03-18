(function(angular) {
  'use strict';

  function TextureDetailController() {
    this.colors = [{
      name: 'Hard/Pebble',
      detail: "Hard pebble like poop usually hurts and means that it has sat in the large intenstine and colon for too long.",
      class: "consistency"
    }, {
      name: 'Firm/Lumpy/Sausage',
      detail: "This is a sign of constipation. The poop has spent too much time drying in the intestines, but not long enough for it to break into small pieces.",
      class: "consistency"
    }, {
      name: 'Cracked/Round',
      detail: "Even, round sausage shaped poop with cracks is indication of a poor diet or sedentary lifestyle. This typically requires strain to pass but it is not painful.",
      class: "consistency"
    }, {
      name: 'Smooth',
      detail: "Smooth sausage like poop that has a diameter of a banana is healthy! Optimal healthy poop will remian intact when it is flushed. This indicates that it had the desired amount of water and nutrients inside when passed. This poop will be soft and resemble soft-serve ice cream. Congrats!",
      class: "consistency"
    }, {
      name: 'Soft/Blob',
      detail: "When stool passes in the form of soft blobs with defined edges, it is a slightly loose stool. It is common for individuals who have bowel movements two to three times a day. This form of bowel movement usually follows major meals of the day.",
      class: "consistency"
    }, {
      name: 'Mushy',
      detail: "Mushy stool with fluffy pieces that run together into a pudding-shaped consistency is an early stage of diarrhea. When mushy stool occurs, it is often hard to control the urger or timing of the bowel movement. This form of stool has passed through the colon quickly, due to stress or a dramatic change in diet or activity level.",
      class: "consistency"
    }, {
      name: 'Liquid',
      detail: "Liquid poop is the most advanced stage of diarrhea. It has no solid form and passes without control. Diarrhea occurs when the small intestine is irritated, forcing the liquid into the small intestine to flush out of the body without being absorbed by the large intestine,but most pools in the rectume, casuing explosive diarrhea that is not controllable. Sorry.",
      class: "consistency"
    }];
  }

  angular.module('myApp').component('textureDetail', {
    templateUrl: 'options.html',
    controller: TextureDetailController
  });
})(window.angular);

var texArr = document.getElementsByClassName("consistency");