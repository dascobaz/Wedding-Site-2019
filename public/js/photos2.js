// if (screen.width <= 699) {
// document.location = "/html/photos1.html";
// }
//
// if ((navigator.userAgent.match(/iPhone/i)) || (navigator.userAgent.match(/iPod/i))) {
//    location.replace("/html/photos1.html");
// }


// function openModal(idx) {
//   var isModalOpen = $("body").hasClass("modal-open");
//
//   if (!isModalOpen) {
//     document.getElementById("sliderModal").style.height = "100%"
//         $("body").addClass("modal-open");
//   }
//
//   var $carousel = $(".gallery").flickity("resize");
//
//   if (parseInt(idx)) {
//     $carousel = $(".js-flickity").flickity("select", parseInt(idx) - 1);
//   }
//
//   var $caption = $('.caption');
//   // Flickity instance
//   var flkty = $carousel.data('flickity');
//
//   $carousel.on( 'select.flickity', function() {
//     // set image caption using img's alt
//     $caption.text( flkty.selectedElement.children.item(0).alt );
//   });
// }
//
// function closeModal() {
//   document.getElementById("sliderModal").style.height = "0%";
//   $("body").removeClass("modal-open");
// }
//
// function openGallery() {
//   if (!$("body").hasClass("modal-open")) {
//     document.getElementById("galleryModal").style.height = "100%";
//
//     // for (var i = 0; i < children.length; i++){
//     // console.log(children[i]);
//     // }
//     [].forEach.call(document.querySelectorAll("img[data-src]"), function(img) {
//       img.setAttribute("src", img.getAttribute("data-src"));
//       img.onload = function() {
//         img.removeAttribute("data-src");
//       };
//     });
//     $("body").addClass("modal-open");
//   }
// }
//
// function closeGallery(idx) {
//   document.getElementById("galleryModal").style.height = "0%";
//   $("body").removeClass("modal-open");
//
//   if (parseInt(idx)) {
//     openModal(idx);
//   }
// }
