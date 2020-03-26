
// PHOTO-1

var gallery = document.querySelector(".gallery");
var photoLink1 = document.querySelector(".photo__link--1");
var photoPopup1 = document.querySelector(".modal__1");
var photoAfter1 = document.querySelector(".modal__1 .modal__photo-a");
var photoBefore1 = document.querySelector(".modal__1 .modal__photo-b");
var photoPrev1 = document.querySelector(".modal__1 .modal__button-prev");
var photoNext1 = document.querySelector(".modal__1 .modal__button-next");
var photoClose1 = document.querySelector(".modal__1 .modal__button-close");


photoLink1.addEventListener("click", function (evt) {
  evt.preventDefault();
  photoPopup1.classList.add("modal__show");
});

photoAfter1.addEventListener("mouseenter", function () {
  photoAfter1.classList.toggle("modal__photo-a");
  photoAfter1.classList.toggle("modal__photo-b");
  photoBefore1.classList.toggle("modal__photo-b");
  photoBefore1.classList.toggle("modal__photo-a");
});

photoBefore1.addEventListener("mouseout", function () {
  photoBefore1.classList.toggle("modal__photo-a");
  photoBefore1.classList.toggle("modal__photo-b");
  photoAfter1.classList.toggle("modal__photo-b");
  photoAfter1.classList.toggle("modal__photo-a");
});

photoAfter1.addEventListener("click", function () {
  photoAfter1.classList.toggle("modal__photo-a");
  photoAfter1.classList.toggle("modal__photo-b");
  photoBefore1.classList.toggle("modal__photo-b");
  photoBefore1.classList.toggle("modal__photo-a");
});

photoBefore1.addEventListener("click", function () {
  photoBefore1.classList.toggle("modal__photo-a");
  photoBefore1.classList.toggle("modal__photo-b");
  photoAfter1.classList.toggle("modal__photo-b");
  photoAfter1.classList.toggle("modal__photo-a");
});

photoPrev1.addEventListener("click", function(evt) {
  evt.preventDefault();
  photoPopup1.classList.remove("modal__show");
  photoPopup69.classList.add("modal__show");
})

window.addEventListener("keyup", function (evt) {
  if (evt.keyCode === 37) {
    evt.preventDefault();
    
    if (photoPopup1.classList.contains("modal__show")) {
      setTimeout(function() {
        photoPopup1.classList.remove("modal__show");
        photoPopup69.classList.add("modal__show");
      }, 10);
    }
  }
});

photoNext1.addEventListener("click", function(evt) {
  evt.preventDefault();
  photoPopup1.classList.remove("modal__show");
  photoPopup2.classList.add("modal__show");
})

window.addEventListener("keyup", function (evt) {
  if (evt.keyCode === 39) {
    evt.preventDefault();

    if (photoPopup1.classList.contains("modal__show")) {
      setTimeout(function() {
        photoPopup1.classList.remove("modal__show");
        photoPopup2.classList.add("modal__show");
      }, 10);
    }
  }
});

photoClose1.addEventListener("click", function (evt) {
  evt.preventDefault();
  photoPopup1.classList.remove("modal__show");
});

window.addEventListener("keyup", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    
    if (photoPopup1.classList.contains("modal__show")) {
      photoPopup1.classList.remove("modal__show");
    }
  }
});


// PHOTO-2

var photoLink2 = document.querySelector(".photo__link--2");
var photoPopup2 = document.querySelector(".modal__2");
var photoAfter2 = document.querySelector(".modal__2 .modal__photo-a");
var photoBefore2 = document.querySelector(".modal__2 .modal__photo-b");
var photoClose2 = document.querySelector(".modal__2 .modal__button-close");
var photoPrev2 = document.querySelector(".modal__2 .modal__button-prev");
var photoNext2 = document.querySelector(".modal__2 .modal__button-next");

photoLink2.addEventListener("click", function (evt) {
  evt.preventDefault();
  photoPopup2.classList.add("modal__show");
});

photoAfter2.addEventListener("mouseenter", function () {
  photoAfter2.classList.toggle("modal__photo-a");
  photoAfter2.classList.toggle("modal__photo-b");
  photoBefore2.classList.toggle("modal__photo-b");
  photoBefore2.classList.toggle("modal__photo-a");
});

photoBefore2.addEventListener("mouseout", function () {
  photoBefore2.classList.toggle("modal__photo-a");
  photoBefore2.classList.toggle("modal__photo-b");
  photoAfter2.classList.toggle("modal__photo-b");
  photoAfter2.classList.toggle("modal__photo-a");
});

photoAfter2.addEventListener("click", function () {
  photoAfter2.classList.toggle("modal__photo-a");
  photoAfter2.classList.toggle("modal__photo-b");
  photoBefore2.classList.toggle("modal__photo-b");
  photoBefore2.classList.toggle("modal__photo-a");
});

photoBefore2.addEventListener("click", function () {
  photoBefore2.classList.toggle("modal__photo-a");
  photoBefore2.classList.toggle("modal__photo-b");
  photoAfter2.classList.toggle("modal__photo-b");
  photoAfter2.classList.toggle("modal__photo-a");
});

photoPrev2.addEventListener("click", function(evt) {
  evt.preventDefault();
  photoPopup2.classList.remove("modal__show");
  photoPopup1.classList.add("modal__show");
})

window.addEventListener("keyup", function (evt) {
  if (evt.keyCode === 37) {
    evt.preventDefault();
    
    if (photoPopup2.classList.contains("modal__show")) {
      photoPopup2.classList.remove("modal__show");
      photoPopup1.classList.add("modal__show");
    }
  }
});

photoNext2.addEventListener("click", function(evt) {
  evt.preventDefault();
  photoPopup2.classList.remove("modal__show");
  photoPopup3.classList.add("modal__show");
})

window.addEventListener("keyup", function (evt) {
  if (evt.keyCode === 39) {
    evt.preventDefault();
    
    if (photoPopup2.classList.contains("modal__show")) {
      setTimeout(function() {
        photoPopup2.classList.remove("modal__show");
        photoPopup3.classList.add("modal__show");
      }, 10);
    }
  }
});

photoClose2.addEventListener("click", function (evt) {
  evt.preventDefault();
  photoPopup2.classList.remove("modal__show");
});

window.addEventListener("keyup", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    
    if (photoPopup2.classList.contains("modal__show")) {
      photoPopup2.classList.remove("modal__show");
    }
  }
});


// PHOTO-3

var photoLink3 = document.querySelector(".photo__link--3");
var photoPopup3 = document.querySelector(".modal__3");
var photoAfter3 = document.querySelector(".modal__3 .modal__photo-a");
var photoBefore3 = document.querySelector(".modal__3 .modal__photo-b");
var photoClose3 = document.querySelector(".modal__3 .modal__button-close");
var photoPrev3 = document.querySelector(".modal__3 .modal__button-prev");
var photoNext3 = document.querySelector(".modal__3 .modal__button-next");

photoLink3.addEventListener("click", function (evt) {
  evt.preventDefault();
  photoPopup3.classList.add("modal__show");
});

photoAfter3.addEventListener("mouseenter", function () {
  photoAfter3.classList.toggle("modal__photo-a");
  photoAfter3.classList.toggle("modal__photo-b");
  photoBefore3.classList.toggle("modal__photo-b");
  photoBefore3.classList.toggle("modal__photo-a");
});

photoBefore3.addEventListener("mouseout", function () {
  photoBefore3.classList.toggle("modal__photo-a");
  photoBefore3.classList.toggle("modal__photo-b");
  photoAfter3.classList.toggle("modal__photo-b");
  photoAfter3.classList.toggle("modal__photo-a");
});

photoAfter3.addEventListener("click", function () {
  photoAfter3.classList.toggle("modal__photo-a");
  photoAfter3.classList.toggle("modal__photo-b");
  photoBefore3.classList.toggle("modal__photo-b");
  photoBefore3.classList.toggle("modal__photo-a");
});

photoBefore3.addEventListener("click", function () {
  photoBefore3.classList.toggle("modal__photo-a");
  photoBefore3.classList.toggle("modal__photo-b");
  photoAfter3.classList.toggle("modal__photo-b");
  photoAfter3.classList.toggle("modal__photo-a");
});

photoPrev3.addEventListener("click", function(evt) {
  evt.preventDefault();
  photoPopup3.classList.remove("modal__show");
  photoPopup2.classList.add("modal__show");
})

window.addEventListener("keyup", function (evt) {
  if (evt.keyCode === 37) {
    evt.preventDefault();
    
    if (photoPopup3.classList.contains("modal__show")) {
      photoPopup3.classList.remove("modal__show");
      photoPopup2.classList.add("modal__show");
    }
  }
});

photoNext3.addEventListener("click", function(evt) {
  evt.preventDefault();
  photoPopup3.classList.remove("modal__show");
  photoPopup4.classList.add("modal__show");
})

window.addEventListener("keyup", function (evt) {
  if (evt.keyCode === 39) {
    evt.preventDefault();
    
    if (photoPopup3.classList.contains("modal__show")) {
      setTimeout(function() {
        photoPopup3.classList.remove("modal__show");
        photoPopup4.classList.add("modal__show");
      }, 10);
    }
  }
});

photoClose3.addEventListener("click", function (evt) {
  evt.preventDefault();
  photoPopup3.classList.remove("modal__show");
});

window.addEventListener("keyup", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    
    if (photoPopup3.classList.contains("modal__show")) {
      photoPopup3.classList.remove("modal__show");
    }
  }
});


// PHOTO-4

var photoLink4 = document.querySelector(".photo__link--4");
var photoPopup4 = document.querySelector(".modal__4");
var photoAfter4 = document.querySelector(".modal__4 .modal__photo-a");
var photoBefore4 = document.querySelector(".modal__4 .modal__photo-b");
var photoClose4 = document.querySelector(".modal__4 .modal__button-close");
var photoPrev4 = document.querySelector(".modal__4 .modal__button-prev");
var photoNext4 = document.querySelector(".modal__4 .modal__button-next");

photoLink4.addEventListener("click", function (evt) {
  evt.preventDefault();
  photoPopup4.classList.add("modal__show");
});

photoAfter4.addEventListener("mouseenter", function () {
  photoAfter4.classList.toggle("modal__photo-a");
  photoAfter4.classList.toggle("modal__photo-b");
  photoBefore4.classList.toggle("modal__photo-b");
  photoBefore4.classList.toggle("modal__photo-a");
});

photoBefore4.addEventListener("mouseout", function () {
  photoBefore4.classList.toggle("modal__photo-a");
  photoBefore4.classList.toggle("modal__photo-b");
  photoAfter4.classList.toggle("modal__photo-b");
  photoAfter4.classList.toggle("modal__photo-a");
});

photoAfter4.addEventListener("click", function () {
  photoAfter4.classList.toggle("modal__photo-a");
  photoAfter4.classList.toggle("modal__photo-b");
  photoBefore4.classList.toggle("modal__photo-b");
  photoBefore4.classList.toggle("modal__photo-a");
});

photoBefore4.addEventListener("click", function () {
  photoBefore4.classList.toggle("modal__photo-a");
  photoBefore4.classList.toggle("modal__photo-b");
  photoAfter4.classList.toggle("modal__photo-b");
  photoAfter4.classList.toggle("modal__photo-a");
});

photoPrev4.addEventListener("click", function(evt) {
  evt.preventDefault();
  photoPopup4.classList.remove("modal__show");
  photoPopup3.classList.add("modal__show");
})

window.addEventListener("keyup", function (evt) {
  if (evt.keyCode === 37) {
    evt.preventDefault();
    
    if (photoPopup4.classList.contains("modal__show")) {
      photoPopup4.classList.remove("modal__show");
      photoPopup3.classList.add("modal__show");
    }
  }
});

photoNext4.addEventListener("click", function(evt) {
  evt.preventDefault();
  photoPopup4.classList.remove("modal__show");
  photoPopup5.classList.add("modal__show");
})

window.addEventListener("keyup", function (evt) {
  if (evt.keyCode === 39) {
    evt.preventDefault();
    
    if (photoPopup4.classList.contains("modal__show")) {
      setTimeout(function() {
        photoPopup4.classList.remove("modal__show");
        photoPopup5.classList.add("modal__show");
      }, 10);
    }
  }
});

photoClose4.addEventListener("click", function (evt) {
  evt.preventDefault();
  photoPopup4.classList.remove("modal__show");
});

window.addEventListener("keyup", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    
    if (photoPopup4.classList.contains("modal__show")) {
      photoPopup4.classList.remove("modal__show");
    }
  }
});


// PHOTO-5

var photoLink5 = document.querySelector(".photo__link--5");
var photoPopup5 = document.querySelector(".modal__5");
var photoAfter5 = document.querySelector(".modal__5 .modal__photo-a");
var photoBefore5 = document.querySelector(".modal__5 .modal__photo-b");
var photoClose5 = document.querySelector(".modal__5 .modal__button-close");
var photoPrev5 = document.querySelector(".modal__5 .modal__button-prev");
var photoNext5 = document.querySelector(".modal__5 .modal__button-next");

photoLink5.addEventListener("click", function (evt) {
  evt.preventDefault();
  photoPopup5.classList.add("modal__show");
});

photoAfter5.addEventListener("mouseenter", function () {
  photoAfter5.classList.toggle("modal__photo-a");
  photoAfter5.classList.toggle("modal__photo-b");
  photoBefore5.classList.toggle("modal__photo-b");
  photoBefore5.classList.toggle("modal__photo-a");
});

photoBefore5.addEventListener("mouseout", function () {
  photoBefore5.classList.toggle("modal__photo-a");
  photoBefore5.classList.toggle("modal__photo-b");
  photoAfter5.classList.toggle("modal__photo-b");
  photoAfter5.classList.toggle("modal__photo-a");
});

photoAfter5.addEventListener("click", function () {
  photoAfter5.classList.toggle("modal__photo-a");
  photoAfter5.classList.toggle("modal__photo-b");
  photoBefore5.classList.toggle("modal__photo-b");
  photoBefore5.classList.toggle("modal__photo-a");
});

photoBefore5.addEventListener("click", function () {
  photoBefore5.classList.toggle("modal__photo-a");
  photoBefore5.classList.toggle("modal__photo-b");
  photoAfter5.classList.toggle("modal__photo-b");
  photoAfter5.classList.toggle("modal__photo-a");
});

photoPrev5.addEventListener("click", function(evt) {
  evt.preventDefault();
  photoPopup5.classList.remove("modal__show");
  photoPopup4.classList.add("modal__show");
})

window.addEventListener("keyup", function (evt) {
  if (evt.keyCode === 37) {
    evt.preventDefault();
    
    if (photoPopup5.classList.contains("modal__show")) {
      photoPopup5.classList.remove("modal__show");
      photoPopup4.classList.add("modal__show");
    }
  }
});

photoNext5.addEventListener("click", function(evt) {
  evt.preventDefault();
  photoPopup5.classList.remove("modal__show");
  photoPopup6.classList.add("modal__show");
})

window.addEventListener("keyup", function (evt) {
  if (evt.keyCode === 39) {
    evt.preventDefault();
    
    if (photoPopup5.classList.contains("modal__show")) {
      setTimeout(function() {
        photoPopup5.classList.remove("modal__show");
        photoPopup6.classList.add("modal__show");
      }, 10);
    }
  }
});

photoClose5.addEventListener("click", function (evt) {
  evt.preventDefault();
  photoPopup5.classList.remove("modal__show");
});

window.addEventListener("keyup", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    
    if (photoPopup5.classList.contains("modal__show")) {
      photoPopup5.classList.remove("modal__show");
    }
  }
});


// PHOTO-6

var photoLink6 = document.querySelector(".photo__link--6");
var photoPopup6 = document.querySelector(".modal__6");
var photoAfter6 = document.querySelector(".modal__6 .modal__photo-a");
var photoBefore6 = document.querySelector(".modal__6 .modal__photo-b");
var photoClose6 = document.querySelector(".modal__6 .modal__button-close");
var photoPrev6 = document.querySelector(".modal__6 .modal__button-prev");
var photoNext6 = document.querySelector(".modal__6 .modal__button-next");

photoLink6.addEventListener("click", function (evt) {
  evt.preventDefault();
  photoPopup6.classList.add("modal__show");
});

photoAfter6.addEventListener("mouseenter", function () {
  photoAfter6.classList.toggle("modal__photo-a");
  photoAfter6.classList.toggle("modal__photo-b");
  photoBefore6.classList.toggle("modal__photo-b");
  photoBefore6.classList.toggle("modal__photo-a");
});

photoBefore6.addEventListener("mouseout", function () {
  photoBefore6.classList.toggle("modal__photo-a");
  photoBefore6.classList.toggle("modal__photo-b");
  photoAfter6.classList.toggle("modal__photo-b");
  photoAfter6.classList.toggle("modal__photo-a");
});

photoAfter6.addEventListener("click", function () {
  photoAfter6.classList.toggle("modal__photo-a");
  photoAfter6.classList.toggle("modal__photo-b");
  photoBefore6.classList.toggle("modal__photo-b");
  photoBefore6.classList.toggle("modal__photo-a");
});

photoBefore6.addEventListener("click", function () {
  photoBefore6.classList.toggle("modal__photo-a");
  photoBefore6.classList.toggle("modal__photo-b");
  photoAfter6.classList.toggle("modal__photo-b");
  photoAfter6.classList.toggle("modal__photo-a");
});

photoPrev6.addEventListener("click", function(evt) {
  evt.preventDefault();
  photoPopup6.classList.remove("modal__show");
  photoPopup5.classList.add("modal__show");
})

window.addEventListener("keyup", function (evt) {
  if (evt.keyCode === 37) {
    evt.preventDefault();
    
    if (photoPopup6.classList.contains("modal__show")) {
      photoPopup6.classList.remove("modal__show");
      photoPopup5.classList.add("modal__show");
    }
  }
});

photoNext6.addEventListener("click", function(evt) {
  evt.preventDefault();
  photoPopup6.classList.remove("modal__show");
  photoPopup7.classList.add("modal__show");
})

window.addEventListener("keyup", function (evt) {
  if (evt.keyCode === 39) {
    evt.preventDefault();
    
    if (photoPopup6.classList.contains("modal__show")) {
      setTimeout(function() {
        photoPopup6.classList.remove("modal__show");
        photoPopup7.classList.add("modal__show");
      }, 10);
    }
  }
});

photoClose6.addEventListener("click", function (evt) {
  evt.preventDefault();
  photoPopup6.classList.remove("modal__show");
});

window.addEventListener("keyup", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    
    if (photoPopup6.classList.contains("modal__show")) {
      photoPopup6.classList.remove("modal__show");
    }
  }
});


// PHOTO-7

var photoLink7 = document.querySelector(".photo__link--7");
var photoPopup7 = document.querySelector(".modal__7");
var photoAfter7 = document.querySelector(".modal__7 .modal__photo-a");
var photoBefore7 = document.querySelector(".modal__7 .modal__photo-b");
var photoClose7 = document.querySelector(".modal__7 .modal__button-close");
var photoPrev7 = document.querySelector(".modal__7 .modal__button-prev");
var photoNext7 = document.querySelector(".modal__7 .modal__button-next");

photoLink7.addEventListener("click", function (evt) {
  evt.preventDefault();
  photoPopup7.classList.add("modal__show");
});

photoAfter7.addEventListener("mouseenter", function () {
  photoAfter7.classList.toggle("modal__photo-a");
  photoAfter7.classList.toggle("modal__photo-b");
  photoBefore7.classList.toggle("modal__photo-b");
  photoBefore7.classList.toggle("modal__photo-a");
});

photoBefore7.addEventListener("mouseout", function () {
  photoBefore7.classList.toggle("modal__photo-a");
  photoBefore7.classList.toggle("modal__photo-b");
  photoAfter7.classList.toggle("modal__photo-b");
  photoAfter7.classList.toggle("modal__photo-a");
});

photoAfter7.addEventListener("click", function () {
  photoAfter7.classList.toggle("modal__photo-a");
  photoAfter7.classList.toggle("modal__photo-b");
  photoBefore7.classList.toggle("modal__photo-b");
  photoBefore7.classList.toggle("modal__photo-a");
});

photoBefore7.addEventListener("click", function () {
  photoBefore7.classList.toggle("modal__photo-a");
  photoBefore7.classList.toggle("modal__photo-b");
  photoAfter7.classList.toggle("modal__photo-b");
  photoAfter7.classList.toggle("modal__photo-a");
});

photoPrev7.addEventListener("click", function(evt) {
  evt.preventDefault();
  photoPopup7.classList.remove("modal__show");
  photoPopup6.classList.add("modal__show");
})

window.addEventListener("keyup", function (evt) {
  if (evt.keyCode === 37) {
    evt.preventDefault();
    
    if (photoPopup7.classList.contains("modal__show")) {
      photoPopup7.classList.remove("modal__show");
      photoPopup6.classList.add("modal__show");
    }
  }
});

photoNext7.addEventListener("click", function(evt) {
  evt.preventDefault();
  photoPopup7.classList.remove("modal__show");
  photoPopup8.classList.add("modal__show");
})

window.addEventListener("keyup", function (evt) {
  if (evt.keyCode === 39) {
    evt.preventDefault();
    
    if (photoPopup7.classList.contains("modal__show")) {
      setTimeout(function() {
        photoPopup7.classList.remove("modal__show");
        photoPopup8.classList.add("modal__show");
      }, 10);
    }
  }
});

photoClose7.addEventListener("click", function (evt) {
  evt.preventDefault();
  photoPopup7.classList.remove("modal__show");
});

window.addEventListener("keyup", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    
    if (photoPopup7.classList.contains("modal__show")) {
      photoPopup7.classList.remove("modal__show");
    }
  }
});


// PHOTO-8

var photoLink8 = document.querySelector(".photo__link--8");
var photoPopup8 = document.querySelector(".modal__8");
var photoAfter8 = document.querySelector(".modal__8 .modal__photo-a");
var photoBefore8 = document.querySelector(".modal__8 .modal__photo-b");
var photoClose8 = document.querySelector(".modal__8 .modal__button-close");
var photoPrev8 = document.querySelector(".modal__8 .modal__button-prev");
var photoNext8 = document.querySelector(".modal__8 .modal__button-next");

photoLink8.addEventListener("click", function (evt) {
  evt.preventDefault();
  photoPopup8.classList.add("modal__show");
});

photoAfter8.addEventListener("mouseenter", function () {
  photoAfter8.classList.toggle("modal__photo-a");
  photoAfter8.classList.toggle("modal__photo-b");
  photoBefore8.classList.toggle("modal__photo-b");
  photoBefore8.classList.toggle("modal__photo-a");
});

photoBefore8.addEventListener("mouseout", function () {
  photoBefore8.classList.toggle("modal__photo-a");
  photoBefore8.classList.toggle("modal__photo-b");
  photoAfter8.classList.toggle("modal__photo-b");
  photoAfter8.classList.toggle("modal__photo-a");
});

photoAfter8.addEventListener("click", function () {
  photoAfter8.classList.toggle("modal__photo-a");
  photoAfter8.classList.toggle("modal__photo-b");
  photoBefore8.classList.toggle("modal__photo-b");
  photoBefore8.classList.toggle("modal__photo-a");
});

photoBefore8.addEventListener("click", function () {
  photoBefore8.classList.toggle("modal__photo-a");
  photoBefore8.classList.toggle("modal__photo-b");
  photoAfter8.classList.toggle("modal__photo-b");
  photoAfter8.classList.toggle("modal__photo-a");
});

photoPrev8.addEventListener("click", function(evt) {
  evt.preventDefault();
  photoPopup8.classList.remove("modal__show");
  photoPopup7.classList.add("modal__show");
})

window.addEventListener("keyup", function (evt) {
  if (evt.keyCode === 37) {
    evt.preventDefault();
    
    if (photoPopup8.classList.contains("modal__show")) {
      photoPopup8.classList.remove("modal__show");
      photoPopup7.classList.add("modal__show");
    }
  }
});

photoNext8.addEventListener("click", function(evt) {
  evt.preventDefault();
  photoPopup8.classList.remove("modal__show");
  photoPopup9.classList.add("modal__show");
})

window.addEventListener("keyup", function (evt) {
  if (evt.keyCode === 39) {
    evt.preventDefault();
    
    if (photoPopup8.classList.contains("modal__show")) {
      setTimeout(function() {
        photoPopup8.classList.remove("modal__show");
        photoPopup9.classList.add("modal__show");
      }, 10);
    }
  }
});

photoClose8.addEventListener("click", function (evt) {
  evt.preventDefault();
  photoPopup8.classList.remove("modal__show");
});

window.addEventListener("keyup", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    
    if (photoPopup8.classList.contains("modal__show")) {
      photoPopup8.classList.remove("modal__show");
    }
  }
});


// PHOTO-9

var photoLink9 = document.querySelector(".photo__link--9");
var photoPopup9 = document.querySelector(".modal__9");
var photoAfter9 = document.querySelector(".modal__9 .modal__photo-a");
var photoBefore9 = document.querySelector(".modal__9 .modal__photo-b");
var photoClose9 = document.querySelector(".modal__9 .modal__button-close");
var photoPrev9 = document.querySelector(".modal__9 .modal__button-prev");
var photoNext9 = document.querySelector(".modal__9 .modal__button-next");

photoLink9.addEventListener("click", function (evt) {
  evt.preventDefault();
  photoPopup9.classList.add("modal__show");
});

photoAfter9.addEventListener("mouseenter", function () {
  photoAfter9.classList.toggle("modal__photo-a");
  photoAfter9.classList.toggle("modal__photo-b");
  photoBefore9.classList.toggle("modal__photo-b");
  photoBefore9.classList.toggle("modal__photo-a");
});

photoBefore9.addEventListener("mouseout", function () {
  photoBefore9.classList.toggle("modal__photo-a");
  photoBefore9.classList.toggle("modal__photo-b");
  photoAfter9.classList.toggle("modal__photo-b");
  photoAfter9.classList.toggle("modal__photo-a");
});

photoAfter9.addEventListener("click", function () {
  photoAfter9.classList.toggle("modal__photo-a");
  photoAfter9.classList.toggle("modal__photo-b");
  photoBefore9.classList.toggle("modal__photo-b");
  photoBefore9.classList.toggle("modal__photo-a");
});

photoBefore9.addEventListener("click", function () {
  photoBefore9.classList.toggle("modal__photo-a");
  photoBefore9.classList.toggle("modal__photo-b");
  photoAfter9.classList.toggle("modal__photo-b");
  photoAfter9.classList.toggle("modal__photo-a");
});

photoPrev9.addEventListener("click", function(evt) {
  evt.preventDefault();
  photoPopup9.classList.remove("modal__show");
  photoPopup8.classList.add("modal__show");
})

window.addEventListener("keyup", function (evt) {
  if (evt.keyCode === 37) {
    evt.preventDefault();
    
    if (photoPopup9.classList.contains("modal__show")) {
      photoPopup9.classList.remove("modal__show");
      photoPopup8.classList.add("modal__show");
    }
  }
});

photoNext9.addEventListener("click", function(evt) {
  evt.preventDefault();
  photoPopup9.classList.remove("modal__show");
  photoPopup10.classList.add("modal__show");
})

window.addEventListener("keyup", function (evt) {
  if (evt.keyCode === 39) {
    evt.preventDefault();
    
    if (photoPopup9.classList.contains("modal__show")) {
      setTimeout(function() {
        photoPopup9.classList.remove("modal__show");
        photoPopup10.classList.add("modal__show");
      }, 10);
    }
  }
});

photoClose9.addEventListener("click", function (evt) {
  evt.preventDefault();
  photoPopup9.classList.remove("modal__show");
});

window.addEventListener("keyup", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    
    if (photoPopup9.classList.contains("modal__show")) {
      photoPopup9.classList.remove("modal__show");
    }
  }
});


// PHOTO-10

var photoLink10 = document.querySelector(".photo__link--10");
var photoPopup10 = document.querySelector(".modal__10");
var photoAfter10 = document.querySelector(".modal__10 .modal__photo-a");
var photoBefore10 = document.querySelector(".modal__10 .modal__photo-b");
var photoClose10 = document.querySelector(".modal__10 .modal__button-close");
var photoPrev10 = document.querySelector(".modal__10 .modal__button-prev");
var photoNext10 = document.querySelector(".modal__10 .modal__button-next");

photoLink10.addEventListener("click", function (evt) {
  evt.preventDefault();
  photoPopup10.classList.add("modal__show");
});

photoAfter10.addEventListener("mouseenter", function () {
  photoAfter10.classList.toggle("modal__photo-a");
  photoAfter10.classList.toggle("modal__photo-b");
  photoBefore10.classList.toggle("modal__photo-b");
  photoBefore10.classList.toggle("modal__photo-a");
});

photoBefore10.addEventListener("mouseout", function () {
  photoBefore10.classList.toggle("modal__photo-a");
  photoBefore10.classList.toggle("modal__photo-b");
  photoAfter10.classList.toggle("modal__photo-b");
  photoAfter10.classList.toggle("modal__photo-a");
});

photoAfter10.addEventListener("click", function () {
  photoAfter10.classList.toggle("modal__photo-a");
  photoAfter10.classList.toggle("modal__photo-b");
  photoBefore10.classList.toggle("modal__photo-b");
  photoBefore10.classList.toggle("modal__photo-a");
});

photoBefore10.addEventListener("click", function () {
  photoBefore10.classList.toggle("modal__photo-a");
  photoBefore10.classList.toggle("modal__photo-b");
  photoAfter10.classList.toggle("modal__photo-b");
  photoAfter10.classList.toggle("modal__photo-a");
});

photoPrev10.addEventListener("click", function(evt) {
  evt.preventDefault();
  photoPopup10.classList.remove("modal__show");
  photoPopup9.classList.add("modal__show");
})

window.addEventListener("keyup", function (evt) {
  if (evt.keyCode === 37) {
    evt.preventDefault();
    
    if (photoPopup10.classList.contains("modal__show")) {
      photoPopup10.classList.remove("modal__show");
      photoPopup9.classList.add("modal__show");
    }
  }
});

photoNext10.addEventListener("click", function(evt) {
  evt.preventDefault();
  photoPopup10.classList.remove("modal__show");
  photoPopup11.classList.add("modal__show");
})

window.addEventListener("keyup", function (evt) {
  if (evt.keyCode === 39) {
    evt.preventDefault();
    
    if (photoPopup10.classList.contains("modal__show")) {
      setTimeout(function() {
        photoPopup10.classList.remove("modal__show");
        photoPopup11.classList.add("modal__show");
      }, 10);
    }
  }
});

photoClose10.addEventListener("click", function (evt) {
  evt.preventDefault();
  photoPopup10.classList.remove("modal__show");
});

window.addEventListener("keyup", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    
    if (photoPopup10.classList.contains("modal__show")) {
      photoPopup10.classList.remove("modal__show");
    }
  }
});


// PHOTO-11

var photoLink11 = document.querySelector(".photo__link--11");
var photoPopup11 = document.querySelector(".modal__11");
var photoAfter11 = document.querySelector(".modal__11 .modal__photo-a");
var photoBefore11 = document.querySelector(".modal__11 .modal__photo-b");
var photoClose11 = document.querySelector(".modal__11 .modal__button-close");
var photoPrev11 = document.querySelector(".modal__11 .modal__button-prev");
var photoNext11 = document.querySelector(".modal__11 .modal__button-next");

photoLink11.addEventListener("click", function (evt) {
  evt.preventDefault();
  photoPopup11.classList.add("modal__show");
});

photoAfter11.addEventListener("mouseenter", function () {
  photoAfter11.classList.toggle("modal__photo-a");
  photoAfter11.classList.toggle("modal__photo-b");
  photoBefore11.classList.toggle("modal__photo-b");
  photoBefore11.classList.toggle("modal__photo-a");
});

photoBefore11.addEventListener("mouseout", function () {
  photoBefore11.classList.toggle("modal__photo-a");
  photoBefore11.classList.toggle("modal__photo-b");
  photoAfter11.classList.toggle("modal__photo-b");
  photoAfter11.classList.toggle("modal__photo-a");
});

photoAfter11.addEventListener("click", function () {
  photoAfter11.classList.toggle("modal__photo-a");
  photoAfter11.classList.toggle("modal__photo-b");
  photoBefore11.classList.toggle("modal__photo-b");
  photoBefore11.classList.toggle("modal__photo-a");
});

photoBefore11.addEventListener("click", function () {
  photoBefore11.classList.toggle("modal__photo-a");
  photoBefore11.classList.toggle("modal__photo-b");
  photoAfter11.classList.toggle("modal__photo-b");
  photoAfter11.classList.toggle("modal__photo-a");
});

photoPrev11.addEventListener("click", function(evt) {
  evt.preventDefault();
  photoPopup11.classList.remove("modal__show");
  photoPopup10.classList.add("modal__show");
})

window.addEventListener("keyup", function (evt) {
  if (evt.keyCode === 37) {
    evt.preventDefault();
    
    if (photoPopup11.classList.contains("modal__show")) {
      photoPopup11.classList.remove("modal__show");
      photoPopup10.classList.add("modal__show");
    }
  }
});

photoNext11.addEventListener("click", function(evt) {
  evt.preventDefault();
  photoPopup11.classList.remove("modal__show");
  photoPopup12.classList.add("modal__show");
})

window.addEventListener("keyup", function (evt) {
  if (evt.keyCode === 39) {
    evt.preventDefault();
    
    if (photoPopup11.classList.contains("modal__show")) {
      setTimeout(function() {
        photoPopup11.classList.remove("modal__show");
        photoPopup12.classList.add("modal__show");
      }, 10);
    }
  }
});

photoClose11.addEventListener("click", function (evt) {
  evt.preventDefault();
  photoPopup11.classList.remove("modal__show");
});

window.addEventListener("keyup", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    
    if (photoPopup11.classList.contains("modal__show")) {
      photoPopup11.classList.remove("modal__show");
    }
  }
});


// PHOTO-12

var photoLink12 = document.querySelector(".photo__link--12");
var photoPopup12 = document.querySelector(".modal__12");
var photoAfter12 = document.querySelector(".modal__12 .modal__photo-a");
var photoBefore12 = document.querySelector(".modal__12 .modal__photo-b");
var photoClose12 = document.querySelector(".modal__12 .modal__button-close");
var photoPrev12 = document.querySelector(".modal__12 .modal__button-prev");
var photoNext12 = document.querySelector(".modal__12 .modal__button-next");

photoLink12.addEventListener("click", function (evt) {
  evt.preventDefault();
  photoPopup12.classList.add("modal__show");
});

photoAfter12.addEventListener("mouseenter", function () {
  photoAfter12.classList.toggle("modal__photo-a");
  photoAfter12.classList.toggle("modal__photo-b");
  photoBefore12.classList.toggle("modal__photo-b");
  photoBefore12.classList.toggle("modal__photo-a");
});

photoBefore12.addEventListener("mouseout", function () {
  photoBefore12.classList.toggle("modal__photo-a");
  photoBefore12.classList.toggle("modal__photo-b");
  photoAfter12.classList.toggle("modal__photo-b");
  photoAfter12.classList.toggle("modal__photo-a");
});

photoAfter12.addEventListener("click", function () {
  photoAfter12.classList.toggle("modal__photo-a");
  photoAfter12.classList.toggle("modal__photo-b");
  photoBefore12.classList.toggle("modal__photo-b");
  photoBefore12.classList.toggle("modal__photo-a");
});

photoBefore12.addEventListener("click", function () {
  photoBefore12.classList.toggle("modal__photo-a");
  photoBefore12.classList.toggle("modal__photo-b");
  photoAfter12.classList.toggle("modal__photo-b");
  photoAfter12.classList.toggle("modal__photo-a");
});

photoPrev12.addEventListener("click", function(evt) {
  evt.preventDefault();
  photoPopup12.classList.remove("modal__show");
  photoPopup11.classList.add("modal__show");
})

window.addEventListener("keyup", function (evt) {
  if (evt.keyCode === 37) {
    evt.preventDefault();
    
    if (photoPopup12.classList.contains("modal__show")) {
      photoPopup12.classList.remove("modal__show");
      photoPopup11.classList.add("modal__show");
    }
  }
});

photoNext12.addEventListener("click", function(evt) {
  evt.preventDefault();
  photoPopup12.classList.remove("modal__show");
  photoPopup13.classList.add("modal__show");
})

window.addEventListener("keyup", function (evt) {
  if (evt.keyCode === 39) {
    evt.preventDefault();
    
    if (photoPopup12.classList.contains("modal__show")) {
      setTimeout(function() {
        photoPopup12.classList.remove("modal__show");
        photoPopup13.classList.add("modal__show");
      }, 10);
    }
  }
});

photoClose12.addEventListener("click", function (evt) {
  evt.preventDefault();
  photoPopup12.classList.remove("modal__show");
});

window.addEventListener("keyup", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    
    if (photoPopup12.classList.contains("modal__show")) {
      photoPopup12.classList.remove("modal__show");
    }
  }
});


// PHOTO-13

var photoLink13 = document.querySelector(".photo__link--13");
var photoPopup13 = document.querySelector(".modal__13");
var photoAfter13 = document.querySelector(".modal__13 .modal__photo-a");
var photoBefore13 = document.querySelector(".modal__13 .modal__photo-b");
var photoClose13 = document.querySelector(".modal__13 .modal__button-close");
var photoPrev13 = document.querySelector(".modal__13 .modal__button-prev");
var photoNext13 = document.querySelector(".modal__13 .modal__button-next");

photoLink13.addEventListener("click", function (evt) {
  evt.preventDefault();
  photoPopup13.classList.add("modal__show");
});

photoAfter13.addEventListener("mouseenter", function () {
  photoAfter13.classList.toggle("modal__photo-a");
  photoAfter13.classList.toggle("modal__photo-b");
  photoBefore13.classList.toggle("modal__photo-b");
  photoBefore13.classList.toggle("modal__photo-a");
});

photoBefore13.addEventListener("mouseout", function () {
  photoBefore13.classList.toggle("modal__photo-a");
  photoBefore13.classList.toggle("modal__photo-b");
  photoAfter13.classList.toggle("modal__photo-b");
  photoAfter13.classList.toggle("modal__photo-a");
});

photoAfter13.addEventListener("click", function () {
  photoAfter13.classList.toggle("modal__photo-a");
  photoAfter13.classList.toggle("modal__photo-b");
  photoBefore13.classList.toggle("modal__photo-b");
  photoBefore13.classList.toggle("modal__photo-a");
});

photoBefore13.addEventListener("click", function () {
  photoBefore13.classList.toggle("modal__photo-a");
  photoBefore13.classList.toggle("modal__photo-b");
  photoAfter13.classList.toggle("modal__photo-b");
  photoAfter13.classList.toggle("modal__photo-a");
});

photoPrev13.addEventListener("click", function(evt) {
  evt.preventDefault();
  photoPopup13.classList.remove("modal__show");
  photoPopup12.classList.add("modal__show");
})

window.addEventListener("keyup", function (evt) {
  if (evt.keyCode === 37) {
    evt.preventDefault();
    
    if (photoPopup13.classList.contains("modal__show")) {
      photoPopup13.classList.remove("modal__show");
      photoPopup12.classList.add("modal__show");
    }
  }
});

photoNext13.addEventListener("click", function(evt) {
  evt.preventDefault();
  photoPopup13.classList.remove("modal__show");
  photoPopup14.classList.add("modal__show");
})

window.addEventListener("keyup", function (evt) {
  if (evt.keyCode === 39) {
    evt.preventDefault();
    
    if (photoPopup13.classList.contains("modal__show")) {
      setTimeout(function() {
        photoPopup13.classList.remove("modal__show");
        photoPopup14.classList.add("modal__show");
      }, 10);
    }
  }
});

photoClose13.addEventListener("click", function (evt) {
  evt.preventDefault();
  photoPopup13.classList.remove("modal__show");
});

window.addEventListener("keyup", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    
    if (photoPopup13.classList.contains("modal__show")) {
      photoPopup13.classList.remove("modal__show");
    }
  }
});


// PHOTO-14

var photoLink14 = document.querySelector(".photo__link--14");
var photoPopup14 = document.querySelector(".modal__14");
var photoAfter14 = document.querySelector(".modal__14 .modal__photo-a");
var photoBefore14 = document.querySelector(".modal__14 .modal__photo-b");
var photoClose14 = document.querySelector(".modal__14 .modal__button-close");
var photoPrev14 = document.querySelector(".modal__14 .modal__button-prev");
var photoNext14 = document.querySelector(".modal__14 .modal__button-next");

photoLink14.addEventListener("click", function (evt) {
  evt.preventDefault();
  photoPopup14.classList.add("modal__show");
});

photoAfter14.addEventListener("mouseenter", function () {
  photoAfter14.classList.toggle("modal__photo-a");
  photoAfter14.classList.toggle("modal__photo-b");
  photoBefore14.classList.toggle("modal__photo-b");
  photoBefore14.classList.toggle("modal__photo-a");
});

photoBefore14.addEventListener("mouseout", function () {
  photoBefore14.classList.toggle("modal__photo-a");
  photoBefore14.classList.toggle("modal__photo-b");
  photoAfter14.classList.toggle("modal__photo-b");
  photoAfter14.classList.toggle("modal__photo-a");
});

photoAfter14.addEventListener("click", function () {
  photoAfter14.classList.toggle("modal__photo-a");
  photoAfter14.classList.toggle("modal__photo-b");
  photoBefore14.classList.toggle("modal__photo-b");
  photoBefore14.classList.toggle("modal__photo-a");
});

photoBefore14.addEventListener("click", function () {
  photoBefore14.classList.toggle("modal__photo-a");
  photoBefore14.classList.toggle("modal__photo-b");
  photoAfter14.classList.toggle("modal__photo-b");
  photoAfter14.classList.toggle("modal__photo-a");
});

photoPrev14.addEventListener("click", function(evt) {
  evt.preventDefault();
  photoPopup14.classList.remove("modal__show");
  photoPopup13.classList.add("modal__show");
})

window.addEventListener("keyup", function (evt) {
  if (evt.keyCode === 37) {
    evt.preventDefault();
    
    if (photoPopup14.classList.contains("modal__show")) {
      photoPopup14.classList.remove("modal__show");
      photoPopup13.classList.add("modal__show");
    }
  }
});

photoNext14.addEventListener("click", function(evt) {
  evt.preventDefault();
  photoPopup14.classList.remove("modal__show");
  photoPopup15.classList.add("modal__show");
})

window.addEventListener("keyup", function (evt) {
  if (evt.keyCode === 39) {
    evt.preventDefault();
    
    if (photoPopup14.classList.contains("modal__show")) {
      setTimeout(function() {
        photoPopup14.classList.remove("modal__show");
        photoPopup15.classList.add("modal__show");
      }, 10);
    }
  }
});

photoClose14.addEventListener("click", function (evt) {
  evt.preventDefault();
  photoPopup14.classList.remove("modal__show");
});

window.addEventListener("keyup", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    
    if (photoPopup14.classList.contains("modal__show")) {
      photoPopup14.classList.remove("modal__show");
    }
  }
});


// PHOTO-15

var photoLink15 = document.querySelector(".photo__link--15");
var photoPopup15 = document.querySelector(".modal__15");
var photoAfter15 = document.querySelector(".modal__15 .modal__photo-a");
var photoBefore15 = document.querySelector(".modal__15 .modal__photo-b");
var photoClose15 = document.querySelector(".modal__15 .modal__button-close");
var photoPrev15 = document.querySelector(".modal__15 .modal__button-prev");
var photoNext15 = document.querySelector(".modal__15 .modal__button-next");

photoLink15.addEventListener("click", function (evt) {
  evt.preventDefault();
  photoPopup15.classList.add("modal__show");
});

photoAfter15.addEventListener("mouseenter", function () {
  photoAfter15.classList.toggle("modal__photo-a");
  photoAfter15.classList.toggle("modal__photo-b");
  photoBefore15.classList.toggle("modal__photo-b");
  photoBefore15.classList.toggle("modal__photo-a");
});

photoBefore15.addEventListener("mouseout", function () {
  photoBefore15.classList.toggle("modal__photo-a");
  photoBefore15.classList.toggle("modal__photo-b");
  photoAfter15.classList.toggle("modal__photo-b");
  photoAfter15.classList.toggle("modal__photo-a");
});

photoAfter15.addEventListener("click", function () {
  photoAfter15.classList.toggle("modal__photo-a");
  photoAfter15.classList.toggle("modal__photo-b");
  photoBefore15.classList.toggle("modal__photo-b");
  photoBefore15.classList.toggle("modal__photo-a");
});

photoBefore15.addEventListener("click", function () {
  photoBefore15.classList.toggle("modal__photo-a");
  photoBefore15.classList.toggle("modal__photo-b");
  photoAfter15.classList.toggle("modal__photo-b");
  photoAfter15.classList.toggle("modal__photo-a");
});

photoPrev15.addEventListener("click", function(evt) {
  evt.preventDefault();
  photoPopup15.classList.remove("modal__show");
  photoPopup14.classList.add("modal__show");
})

window.addEventListener("keyup", function (evt) {
  if (evt.keyCode === 37) {
    evt.preventDefault();
    
    if (photoPopup15.classList.contains("modal__show")) {
      photoPopup15.classList.remove("modal__show");
      photoPopup14.classList.add("modal__show");
    }
  }
});

photoNext15.addEventListener("click", function(evt) {
  evt.preventDefault();
  photoPopup15.classList.remove("modal__show");
  photoPopup16.classList.add("modal__show");
})

window.addEventListener("keyup", function (evt) {
  if (evt.keyCode === 39) {
    evt.preventDefault();
    
    if (photoPopup15.classList.contains("modal__show")) {
      setTimeout(function() {
        photoPopup15.classList.remove("modal__show");
        photoPopup16.classList.add("modal__show");
      }, 10);
    }
  }
});

photoClose15.addEventListener("click", function (evt) {
  evt.preventDefault();
  photoPopup15.classList.remove("modal__show");
});

window.addEventListener("keyup", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    
    if (photoPopup15.classList.contains("modal__show")) {
      photoPopup15.classList.remove("modal__show");
    }
  }
});


// PHOTO-16

var photoLink16 = document.querySelector(".photo__link--16");
var photoPopup16 = document.querySelector(".modal__16");
var photoAfter16 = document.querySelector(".modal__16 .modal__photo-a");
var photoBefore16 = document.querySelector(".modal__16 .modal__photo-b");
var photoClose16 = document.querySelector(".modal__16 .modal__button-close");
var photoPrev16 = document.querySelector(".modal__16 .modal__button-prev");
var photoNext16 = document.querySelector(".modal__16 .modal__button-next");

photoLink16.addEventListener("click", function (evt) {
  evt.preventDefault();
  photoPopup16.classList.add("modal__show");
});

photoAfter16.addEventListener("mouseenter", function () {
  photoAfter16.classList.toggle("modal__photo-a");
  photoAfter16.classList.toggle("modal__photo-b");
  photoBefore16.classList.toggle("modal__photo-b");
  photoBefore16.classList.toggle("modal__photo-a");
});

photoBefore16.addEventListener("mouseout", function () {
  photoBefore16.classList.toggle("modal__photo-a");
  photoBefore16.classList.toggle("modal__photo-b");
  photoAfter16.classList.toggle("modal__photo-b");
  photoAfter16.classList.toggle("modal__photo-a");
});

photoAfter16.addEventListener("click", function () {
  photoAfter16.classList.toggle("modal__photo-a");
  photoAfter16.classList.toggle("modal__photo-b");
  photoBefore16.classList.toggle("modal__photo-b");
  photoBefore16.classList.toggle("modal__photo-a");
});

photoBefore16.addEventListener("click", function () {
  photoBefore16.classList.toggle("modal__photo-a");
  photoBefore16.classList.toggle("modal__photo-b");
  photoAfter16.classList.toggle("modal__photo-b");
  photoAfter16.classList.toggle("modal__photo-a");
});

photoPrev16.addEventListener("click", function(evt) {
  evt.preventDefault();
  photoPopup16.classList.remove("modal__show");
  photoPopup15.classList.add("modal__show");
})

window.addEventListener("keyup", function (evt) {
  if (evt.keyCode === 37) {
    evt.preventDefault();
    
    if (photoPopup16.classList.contains("modal__show")) {
      photoPopup16.classList.remove("modal__show");
      photoPopup15.classList.add("modal__show");
    }
  }
});

photoNext16.addEventListener("click", function(evt) {
  evt.preventDefault();
  photoPopup16.classList.remove("modal__show");
  photoPopup17.classList.add("modal__show");
})

window.addEventListener("keyup", function (evt) {
  if (evt.keyCode === 39) {
    evt.preventDefault();
    
    if (photoPopup16.classList.contains("modal__show")) {
      setTimeout(function() {
        photoPopup16.classList.remove("modal__show");
        photoPopup17.classList.add("modal__show");
      }, 10);
    }
  }
});

photoClose16.addEventListener("click", function (evt) {
  evt.preventDefault();
  photoPopup16.classList.remove("modal__show");
});

window.addEventListener("keyup", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    
    if (photoPopup16.classList.contains("modal__show")) {
      photoPopup16.classList.remove("modal__show");
    }
  }
});


// PHOTO-17

var photoLink17 = document.querySelector(".photo__link--17");
var photoPopup17 = document.querySelector(".modal__17");
var photoAfter17 = document.querySelector(".modal__17 .modal__photo-a");
var photoBefore17 = document.querySelector(".modal__17 .modal__photo-b");
var photoClose17 = document.querySelector(".modal__17 .modal__button-close");
var photoPrev17 = document.querySelector(".modal__17 .modal__button-prev");
var photoNext17 = document.querySelector(".modal__17 .modal__button-next");

photoLink17.addEventListener("click", function (evt) {
  evt.preventDefault();
  photoPopup17.classList.add("modal__show");
});

photoAfter17.addEventListener("mouseenter", function () {
  photoAfter17.classList.toggle("modal__photo-a");
  photoAfter17.classList.toggle("modal__photo-b");
  photoBefore17.classList.toggle("modal__photo-b");
  photoBefore17.classList.toggle("modal__photo-a");
});

photoBefore17.addEventListener("mouseout", function () {
  photoBefore17.classList.toggle("modal__photo-a");
  photoBefore17.classList.toggle("modal__photo-b");
  photoAfter17.classList.toggle("modal__photo-b");
  photoAfter17.classList.toggle("modal__photo-a");
});

photoAfter17.addEventListener("click", function () {
  photoAfter17.classList.toggle("modal__photo-a");
  photoAfter17.classList.toggle("modal__photo-b");
  photoBefore17.classList.toggle("modal__photo-b");
  photoBefore17.classList.toggle("modal__photo-a");
});

photoBefore17.addEventListener("click", function () {
  photoBefore17.classList.toggle("modal__photo-a");
  photoBefore17.classList.toggle("modal__photo-b");
  photoAfter17.classList.toggle("modal__photo-b");
  photoAfter17.classList.toggle("modal__photo-a");
});

photoPrev17.addEventListener("click", function(evt) {
  evt.preventDefault();
  photoPopup17.classList.remove("modal__show");
  photoPopup16.classList.add("modal__show");
})

window.addEventListener("keyup", function (evt) {
  if (evt.keyCode === 37) {
    evt.preventDefault();
    
    if (photoPopup17.classList.contains("modal__show")) {
      photoPopup17.classList.remove("modal__show");
      photoPopup16.classList.add("modal__show");
    }
  }
});

photoNext17.addEventListener("click", function(evt) {
  evt.preventDefault();
  photoPopup17.classList.remove("modal__show");
  photoPopup18.classList.add("modal__show");
})

window.addEventListener("keyup", function (evt) {
  if (evt.keyCode === 39) {
    evt.preventDefault();
    
    if (photoPopup17.classList.contains("modal__show")) {
      setTimeout(function() {
        photoPopup17.classList.remove("modal__show");
        photoPopup18.classList.add("modal__show");
      }, 10);
    }
  }
});

photoClose17.addEventListener("click", function (evt) {
  evt.preventDefault();
  photoPopup17.classList.remove("modal__show");
});

window.addEventListener("keyup", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    
    if (photoPopup17.classList.contains("modal__show")) {
      photoPopup17.classList.remove("modal__show");
    }
  }
});


// PHOTO-18

var photoLink18 = document.querySelector(".photo__link--18");
var photoPopup18 = document.querySelector(".modal__18");
var photoAfter18 = document.querySelector(".modal__18 .modal__photo-a");
var photoBefore18 = document.querySelector(".modal__18 .modal__photo-b");
var photoClose18 = document.querySelector(".modal__18 .modal__button-close");
var photoPrev18 = document.querySelector(".modal__18 .modal__button-prev");
var photoNext18 = document.querySelector(".modal__18 .modal__button-next");

photoLink18.addEventListener("click", function (evt) {
  evt.preventDefault();
  photoPopup18.classList.add("modal__show");
});

photoAfter18.addEventListener("mouseenter", function () {
  photoAfter18.classList.toggle("modal__photo-a");
  photoAfter18.classList.toggle("modal__photo-b");
  photoBefore18.classList.toggle("modal__photo-b");
  photoBefore18.classList.toggle("modal__photo-a");
});

photoBefore18.addEventListener("mouseout", function () {
  photoBefore18.classList.toggle("modal__photo-a");
  photoBefore18.classList.toggle("modal__photo-b");
  photoAfter18.classList.toggle("modal__photo-b");
  photoAfter18.classList.toggle("modal__photo-a");
});

photoAfter18.addEventListener("click", function () {
  photoAfter18.classList.toggle("modal__photo-a");
  photoAfter18.classList.toggle("modal__photo-b");
  photoBefore18.classList.toggle("modal__photo-b");
  photoBefore18.classList.toggle("modal__photo-a");
});

photoBefore18.addEventListener("click", function () {
  photoBefore18.classList.toggle("modal__photo-a");
  photoBefore18.classList.toggle("modal__photo-b");
  photoAfter18.classList.toggle("modal__photo-b");
  photoAfter18.classList.toggle("modal__photo-a");
});

photoPrev18.addEventListener("click", function(evt) {
  evt.preventDefault();
  photoPopup18.classList.remove("modal__show");
  photoPopup17.classList.add("modal__show");
})

window.addEventListener("keyup", function (evt) {
  if (evt.keyCode === 37) {
    evt.preventDefault();
    
    if (photoPopup18.classList.contains("modal__show")) {
      photoPopup18.classList.remove("modal__show");
      photoPopup17.classList.add("modal__show");
    }
  }
});

photoNext18.addEventListener("click", function(evt) {
  evt.preventDefault();
  photoPopup18.classList.remove("modal__show");
  photoPopup19.classList.add("modal__show");
})

window.addEventListener("keyup", function (evt) {
  if (evt.keyCode === 39) {
    evt.preventDefault();
    
    if (photoPopup18.classList.contains("modal__show")) {
      setTimeout(function() {
        photoPopup18.classList.remove("modal__show");
        photoPopup19.classList.add("modal__show");
      }, 10);
    }
  }
});

photoClose18.addEventListener("click", function (evt) {
  evt.preventDefault();
  photoPopup18.classList.remove("modal__show");
});

window.addEventListener("keyup", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    
    if (photoPopup18.classList.contains("modal__show")) {
      photoPopup18.classList.remove("modal__show");
    }
  }
});


// PHOTO-19

var photoLink19 = document.querySelector(".photo__link--19");
var photoPopup19 = document.querySelector(".modal__19");
var photoAfter19 = document.querySelector(".modal__19 .modal__photo-a");
var photoBefore19 = document.querySelector(".modal__19 .modal__photo-b");
var photoClose19 = document.querySelector(".modal__19 .modal__button-close");
var photoPrev19 = document.querySelector(".modal__19 .modal__button-prev");
var photoNext19 = document.querySelector(".modal__19 .modal__button-next");

photoLink19.addEventListener("click", function (evt) {
  evt.preventDefault();
  photoPopup19.classList.add("modal__show");
});

photoAfter19.addEventListener("mouseenter", function () {
  photoAfter19.classList.toggle("modal__photo-a");
  photoAfter19.classList.toggle("modal__photo-b");
  photoBefore19.classList.toggle("modal__photo-b");
  photoBefore19.classList.toggle("modal__photo-a");
});

photoBefore19.addEventListener("mouseout", function () {
  photoBefore19.classList.toggle("modal__photo-a");
  photoBefore19.classList.toggle("modal__photo-b");
  photoAfter19.classList.toggle("modal__photo-b");
  photoAfter19.classList.toggle("modal__photo-a");
});

photoAfter19.addEventListener("click", function () {
  photoAfter19.classList.toggle("modal__photo-a");
  photoAfter19.classList.toggle("modal__photo-b");
  photoBefore19.classList.toggle("modal__photo-b");
  photoBefore19.classList.toggle("modal__photo-a");
});

photoBefore19.addEventListener("click", function () {
  photoBefore19.classList.toggle("modal__photo-a");
  photoBefore19.classList.toggle("modal__photo-b");
  photoAfter19.classList.toggle("modal__photo-b");
  photoAfter19.classList.toggle("modal__photo-a");
});

photoPrev19.addEventListener("click", function(evt) {
  evt.preventDefault();
  photoPopup19.classList.remove("modal__show");
  photoPopup18.classList.add("modal__show");
})

window.addEventListener("keyup", function (evt) {
  if (evt.keyCode === 37) {
    evt.preventDefault();
    
    if (photoPopup19.classList.contains("modal__show")) {
      photoPopup19.classList.remove("modal__show");
      photoPopup18.classList.add("modal__show");
    }
  }
});

photoNext19.addEventListener("click", function(evt) {
  evt.preventDefault();
  photoPopup19.classList.remove("modal__show");
  photoPopup20.classList.add("modal__show");
})

window.addEventListener("keyup", function (evt) {
  if (evt.keyCode === 39) {
    evt.preventDefault();
    
    if (photoPopup19.classList.contains("modal__show")) {
      setTimeout(function() {
        photoPopup19.classList.remove("modal__show");
        photoPopup20.classList.add("modal__show");
      }, 10);
    }
  }
});

photoClose19.addEventListener("click", function (evt) {
  evt.preventDefault();
  photoPopup19.classList.remove("modal__show");
});

window.addEventListener("keyup", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    
    if (photoPopup19.classList.contains("modal__show")) {
      photoPopup19.classList.remove("modal__show");
    }
  }
});


// PHOTO-20

var photoLink20 = document.querySelector(".photo__link--20");
var photoPopup20 = document.querySelector(".modal__20");
var photoAfter20 = document.querySelector(".modal__20 .modal__photo-a");
var photoBefore20 = document.querySelector(".modal__20 .modal__photo-b");
var photoClose20 = document.querySelector(".modal__20 .modal__button-close");
var photoPrev20 = document.querySelector(".modal__20 .modal__button-prev");
var photoNext20 = document.querySelector(".modal__20 .modal__button-next");

photoLink20.addEventListener("click", function (evt) {
  evt.preventDefault();
  photoPopup20.classList.add("modal__show");
});

photoAfter20.addEventListener("mouseenter", function () {
  photoAfter20.classList.toggle("modal__photo-a");
  photoAfter20.classList.toggle("modal__photo-b");
  photoBefore20.classList.toggle("modal__photo-b");
  photoBefore20.classList.toggle("modal__photo-a");
});

photoBefore20.addEventListener("mouseout", function () {
  photoBefore20.classList.toggle("modal__photo-a");
  photoBefore20.classList.toggle("modal__photo-b");
  photoAfter20.classList.toggle("modal__photo-b");
  photoAfter20.classList.toggle("modal__photo-a");
});

photoAfter20.addEventListener("click", function () {
  photoAfter20.classList.toggle("modal__photo-a");
  photoAfter20.classList.toggle("modal__photo-b");
  photoBefore20.classList.toggle("modal__photo-b");
  photoBefore20.classList.toggle("modal__photo-a");
});

photoBefore20.addEventListener("click", function () {
  photoBefore20.classList.toggle("modal__photo-a");
  photoBefore20.classList.toggle("modal__photo-b");
  photoAfter20.classList.toggle("modal__photo-b");
  photoAfter20.classList.toggle("modal__photo-a");
});

photoPrev20.addEventListener("click", function(evt) {
  evt.preventDefault();
  photoPopup20.classList.remove("modal__show");
  photoPopup19.classList.add("modal__show");
})

window.addEventListener("keyup", function (evt) {
  if (evt.keyCode === 37) {
    evt.preventDefault();
    
    if (photoPopup20.classList.contains("modal__show")) {
      photoPopup20.classList.remove("modal__show");
      photoPopup19.classList.add("modal__show");
    }
  }
});

photoNext20.addEventListener("click", function(evt) {
  evt.preventDefault();
  photoPopup20.classList.remove("modal__show");
  photoPopup21.classList.add("modal__show");
})

window.addEventListener("keyup", function (evt) {
  if (evt.keyCode === 39) {
    evt.preventDefault();
    
    if (photoPopup20.classList.contains("modal__show")) {
      setTimeout(function() {
        photoPopup20.classList.remove("modal__show");
        photoPopup21.classList.add("modal__show");
      }, 10);
    }
  }
});

photoClose20.addEventListener("click", function (evt) {
  evt.preventDefault();
  photoPopup20.classList.remove("modal__show");
});

window.addEventListener("keyup", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    
    if (photoPopup20.classList.contains("modal__show")) {
      photoPopup20.classList.remove("modal__show");
    }
  }
});


// PHOTO-21

var photoLink21 = document.querySelector(".photo__link--21");
var photoPopup21 = document.querySelector(".modal__21");
var photoAfter21 = document.querySelector(".modal__21 .modal__photo-a");
var photoBefore21 = document.querySelector(".modal__21 .modal__photo-b");
var photoClose21 = document.querySelector(".modal__21 .modal__button-close");
var photoPrev21 = document.querySelector(".modal__21 .modal__button-prev");
var photoNext21 = document.querySelector(".modal__21 .modal__button-next");

photoLink21.addEventListener("click", function (evt) {
  evt.preventDefault();
  photoPopup21.classList.add("modal__show");
});

photoAfter21.addEventListener("mouseenter", function () {
  photoAfter21.classList.toggle("modal__photo-a");
  photoAfter21.classList.toggle("modal__photo-b");
  photoBefore21.classList.toggle("modal__photo-b");
  photoBefore21.classList.toggle("modal__photo-a");
});

photoBefore21.addEventListener("mouseout", function () {
  photoBefore21.classList.toggle("modal__photo-a");
  photoBefore21.classList.toggle("modal__photo-b");
  photoAfter21.classList.toggle("modal__photo-b");
  photoAfter21.classList.toggle("modal__photo-a");
});

photoAfter21.addEventListener("click", function () {
  photoAfter21.classList.toggle("modal__photo-a");
  photoAfter21.classList.toggle("modal__photo-b");
  photoBefore21.classList.toggle("modal__photo-b");
  photoBefore21.classList.toggle("modal__photo-a");
});

photoBefore21.addEventListener("click", function () {
  photoBefore21.classList.toggle("modal__photo-a");
  photoBefore21.classList.toggle("modal__photo-b");
  photoAfter21.classList.toggle("modal__photo-b");
  photoAfter21.classList.toggle("modal__photo-a");
});

photoPrev21.addEventListener("click", function(evt) {
  evt.preventDefault();
  photoPopup21.classList.remove("modal__show");
  photoPopup20.classList.add("modal__show");
})

window.addEventListener("keyup", function (evt) {
  if (evt.keyCode === 37) {
    evt.preventDefault();
    
    if (photoPopup21.classList.contains("modal__show")) {
      photoPopup21.classList.remove("modal__show");
      photoPopup20.classList.add("modal__show");
    }
  }
});

photoNext21.addEventListener("click", function(evt) {
  evt.preventDefault();
  photoPopup21.classList.remove("modal__show");
  photoPopup22.classList.add("modal__show");
})

window.addEventListener("keyup", function (evt) {
  if (evt.keyCode === 39) {
    evt.preventDefault();
    
    if (photoPopup21.classList.contains("modal__show")) {
      setTimeout(function() {
        photoPopup21.classList.remove("modal__show");
        photoPopup22.classList.add("modal__show");
      }, 10);
    }
  }
});

photoClose21.addEventListener("click", function (evt) {
  evt.preventDefault();
  photoPopup21.classList.remove("modal__show");
});

window.addEventListener("keyup", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    
    if (photoPopup21.classList.contains("modal__show")) {
      photoPopup21.classList.remove("modal__show");
    }
  }
});


// PHOTO-22

var photoLink22 = document.querySelector(".photo__link--22");
var photoPopup22 = document.querySelector(".modal__22");
var photoAfter22 = document.querySelector(".modal__22 .modal__photo-a");
var photoBefore22 = document.querySelector(".modal__22 .modal__photo-b");
var photoClose22 = document.querySelector(".modal__22 .modal__button-close");
var photoPrev22 = document.querySelector(".modal__22 .modal__button-prev");
var photoNext22 = document.querySelector(".modal__22 .modal__button-next");

photoLink22.addEventListener("click", function (evt) {
  evt.preventDefault();
  photoPopup22.classList.add("modal__show");
});

photoAfter22.addEventListener("mouseenter", function () {
  photoAfter22.classList.toggle("modal__photo-a");
  photoAfter22.classList.toggle("modal__photo-b");
  photoBefore22.classList.toggle("modal__photo-b");
  photoBefore22.classList.toggle("modal__photo-a");
});

photoBefore22.addEventListener("mouseout", function () {
  photoBefore22.classList.toggle("modal__photo-a");
  photoBefore22.classList.toggle("modal__photo-b");
  photoAfter22.classList.toggle("modal__photo-b");
  photoAfter22.classList.toggle("modal__photo-a");
});

photoAfter22.addEventListener("click", function () {
  photoAfter22.classList.toggle("modal__photo-a");
  photoAfter22.classList.toggle("modal__photo-b");
  photoBefore22.classList.toggle("modal__photo-b");
  photoBefore22.classList.toggle("modal__photo-a");
});

photoBefore22.addEventListener("click", function () {
  photoBefore22.classList.toggle("modal__photo-a");
  photoBefore22.classList.toggle("modal__photo-b");
  photoAfter22.classList.toggle("modal__photo-b");
  photoAfter22.classList.toggle("modal__photo-a");
});

photoPrev22.addEventListener("click", function(evt) {
  evt.preventDefault();
  photoPopup22.classList.remove("modal__show");
  photoPopup21.classList.add("modal__show");
})

window.addEventListener("keyup", function (evt) {
  if (evt.keyCode === 37) {
    evt.preventDefault();
    
    if (photoPopup22.classList.contains("modal__show")) {
      photoPopup22.classList.remove("modal__show");
      photoPopup21.classList.add("modal__show");
    }
  }
});

photoNext22.addEventListener("click", function(evt) {
  evt.preventDefault();
  photoPopup22.classList.remove("modal__show");
  photoPopup23.classList.add("modal__show");
})

window.addEventListener("keyup", function (evt) {
  if (evt.keyCode === 39) {
    evt.preventDefault();
    
    if (photoPopup22.classList.contains("modal__show")) {
      setTimeout(function() {
        photoPopup22.classList.remove("modal__show");
        photoPopup23.classList.add("modal__show");
      }, 10);
    }
  }
});

photoClose22.addEventListener("click", function (evt) {
  evt.preventDefault();
  photoPopup22.classList.remove("modal__show");
});

window.addEventListener("keyup", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    
    if (photoPopup22.classList.contains("modal__show")) {
      photoPopup22.classList.remove("modal__show");
    }
  }
});


// PHOTO-23

var photoLink23 = document.querySelector(".photo__link--23");
var photoPopup23 = document.querySelector(".modal__23");
var photoAfter23 = document.querySelector(".modal__23 .modal__photo-a");
var photoBefore23 = document.querySelector(".modal__23 .modal__photo-b");
var photoClose23 = document.querySelector(".modal__23 .modal__button-close");
var photoPrev23 = document.querySelector(".modal__23 .modal__button-prev");
var photoNext23 = document.querySelector(".modal__23 .modal__button-next");

photoLink23.addEventListener("click", function (evt) {
  evt.preventDefault();
  photoPopup23.classList.add("modal__show");
});

photoAfter23.addEventListener("mouseenter", function () {
  photoAfter23.classList.toggle("modal__photo-a");
  photoAfter23.classList.toggle("modal__photo-b");
  photoBefore23.classList.toggle("modal__photo-b");
  photoBefore23.classList.toggle("modal__photo-a");
});

photoBefore23.addEventListener("mouseout", function () {
  photoBefore23.classList.toggle("modal__photo-a");
  photoBefore23.classList.toggle("modal__photo-b");
  photoAfter23.classList.toggle("modal__photo-b");
  photoAfter23.classList.toggle("modal__photo-a");
});

photoAfter23.addEventListener("click", function () {
  photoAfter23.classList.toggle("modal__photo-a");
  photoAfter23.classList.toggle("modal__photo-b");
  photoBefore23.classList.toggle("modal__photo-b");
  photoBefore23.classList.toggle("modal__photo-a");
});

photoBefore23.addEventListener("click", function () {
  photoBefore23.classList.toggle("modal__photo-a");
  photoBefore23.classList.toggle("modal__photo-b");
  photoAfter23.classList.toggle("modal__photo-b");
  photoAfter23.classList.toggle("modal__photo-a");
});

photoPrev23.addEventListener("click", function(evt) {
  evt.preventDefault();
  photoPopup23.classList.remove("modal__show");
  photoPopup22.classList.add("modal__show");
})

window.addEventListener("keyup", function (evt) {
  if (evt.keyCode === 37) {
    evt.preventDefault();
    
    if (photoPopup23.classList.contains("modal__show")) {
      photoPopup23.classList.remove("modal__show");
      photoPopup22.classList.add("modal__show");
    }
  }
});

photoNext23.addEventListener("click", function(evt) {
  evt.preventDefault();
  photoPopup23.classList.remove("modal__show");
  photoPopup24.classList.add("modal__show");
})

window.addEventListener("keyup", function (evt) {
  if (evt.keyCode === 39) {
    evt.preventDefault();
    
    if (photoPopup23.classList.contains("modal__show")) {
      setTimeout(function() {
        photoPopup23.classList.remove("modal__show");
        photoPopup24.classList.add("modal__show");
      }, 10);
    }
  }
});

photoClose23.addEventListener("click", function (evt) {
  evt.preventDefault();
  photoPopup23.classList.remove("modal__show");
});

window.addEventListener("keyup", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    
    if (photoPopup23.classList.contains("modal__show")) {
      photoPopup23.classList.remove("modal__show");
    }
  }
});


// PHOTO-24

var photoLink24 = document.querySelector(".photo__link--24");
var photoPopup24 = document.querySelector(".modal__24");
var photoAfter24 = document.querySelector(".modal__24 .modal__photo-a");
var photoBefore24 = document.querySelector(".modal__24 .modal__photo-b");
var photoClose24 = document.querySelector(".modal__24 .modal__button-close");
var photoPrev24 = document.querySelector(".modal__24 .modal__button-prev");
var photoNext24 = document.querySelector(".modal__24 .modal__button-next");

photoLink24.addEventListener("click", function (evt) {
  evt.preventDefault();
  photoPopup24.classList.add("modal__show");
});

photoAfter24.addEventListener("mouseenter", function () {
  photoAfter24.classList.toggle("modal__photo-a");
  photoAfter24.classList.toggle("modal__photo-b");
  photoBefore24.classList.toggle("modal__photo-b");
  photoBefore24.classList.toggle("modal__photo-a");
});

photoBefore24.addEventListener("mouseout", function () {
  photoBefore24.classList.toggle("modal__photo-a");
  photoBefore24.classList.toggle("modal__photo-b");
  photoAfter24.classList.toggle("modal__photo-b");
  photoAfter24.classList.toggle("modal__photo-a");
});

photoAfter24.addEventListener("click", function () {
  photoAfter24.classList.toggle("modal__photo-a");
  photoAfter24.classList.toggle("modal__photo-b");
  photoBefore24.classList.toggle("modal__photo-b");
  photoBefore24.classList.toggle("modal__photo-a");
});

photoBefore24.addEventListener("click", function () {
  photoBefore24.classList.toggle("modal__photo-a");
  photoBefore24.classList.toggle("modal__photo-b");
  photoAfter24.classList.toggle("modal__photo-b");
  photoAfter24.classList.toggle("modal__photo-a");
});

photoPrev24.addEventListener("click", function(evt) {
  evt.preventDefault();
  photoPopup24.classList.remove("modal__show");
  photoPopup23.classList.add("modal__show");
})

window.addEventListener("keyup", function (evt) {
  if (evt.keyCode === 37) {
    evt.preventDefault();
    
    if (photoPopup24.classList.contains("modal__show")) {
      photoPopup24.classList.remove("modal__show");
      photoPopup23.classList.add("modal__show");
    }
  }
});

photoNext24.addEventListener("click", function(evt) {
  evt.preventDefault();
  photoPopup24.classList.remove("modal__show");
  photoPopup25.classList.add("modal__show");
})

window.addEventListener("keyup", function (evt) {
  if (evt.keyCode === 39) {
    evt.preventDefault();
    
    if (photoPopup24.classList.contains("modal__show")) {
      setTimeout(function() {
        photoPopup24.classList.remove("modal__show");
        photoPopup25.classList.add("modal__show");
      }, 10);
    }
  }
});

photoClose24.addEventListener("click", function (evt) {
  evt.preventDefault();
  photoPopup24.classList.remove("modal__show");
});

window.addEventListener("keyup", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    
    if (photoPopup24.classList.contains("modal__show")) {
      photoPopup24.classList.remove("modal__show");
    }
  }
});


// PHOTO-25

var photoLink25 = document.querySelector(".photo__link--25");
var photoPopup25 = document.querySelector(".modal__25");
var photoAfter25 = document.querySelector(".modal__25 .modal__photo-a");
var photoBefore25 = document.querySelector(".modal__25 .modal__photo-b");
var photoClose25 = document.querySelector(".modal__25 .modal__button-close");
var photoPrev25 = document.querySelector(".modal__25 .modal__button-prev");
var photoNext25 = document.querySelector(".modal__25 .modal__button-next");

photoLink25.addEventListener("click", function (evt) {
  evt.preventDefault();
  photoPopup25.classList.add("modal__show");
});

photoAfter25.addEventListener("mouseenter", function () {
  photoAfter25.classList.toggle("modal__photo-a");
  photoAfter25.classList.toggle("modal__photo-b");
  photoBefore25.classList.toggle("modal__photo-b");
  photoBefore25.classList.toggle("modal__photo-a");
});

photoBefore25.addEventListener("mouseout", function () {
  photoBefore25.classList.toggle("modal__photo-a");
  photoBefore25.classList.toggle("modal__photo-b");
  photoAfter25.classList.toggle("modal__photo-b");
  photoAfter25.classList.toggle("modal__photo-a");
});

photoAfter25.addEventListener("click", function () {
  photoAfter25.classList.toggle("modal__photo-a");
  photoAfter25.classList.toggle("modal__photo-b");
  photoBefore25.classList.toggle("modal__photo-b");
  photoBefore25.classList.toggle("modal__photo-a");
});

photoBefore25.addEventListener("click", function () {
  photoBefore25.classList.toggle("modal__photo-a");
  photoBefore25.classList.toggle("modal__photo-b");
  photoAfter25.classList.toggle("modal__photo-b");
  photoAfter25.classList.toggle("modal__photo-a");
});

photoPrev25.addEventListener("click", function(evt) {
  evt.preventDefault();
  photoPopup25.classList.remove("modal__show");
  photoPopup24.classList.add("modal__show");
})

window.addEventListener("keyup", function (evt) {
  if (evt.keyCode === 37) {
    evt.preventDefault();
    
    if (photoPopup25.classList.contains("modal__show")) {
      photoPopup25.classList.remove("modal__show");
      photoPopup24.classList.add("modal__show");
    }
  }
});

photoNext25.addEventListener("click", function(evt) {
  evt.preventDefault();
  photoPopup25.classList.remove("modal__show");
  photoPopup26.classList.add("modal__show");
})

window.addEventListener("keyup", function (evt) {
  if (evt.keyCode === 39) {
    evt.preventDefault();
    
    if (photoPopup25.classList.contains("modal__show")) {
      setTimeout(function() {
        photoPopup25.classList.remove("modal__show");
        photoPopup26.classList.add("modal__show");
      }, 10);
    }
  }
});

photoClose25.addEventListener("click", function (evt) {
  evt.preventDefault();
  photoPopup25.classList.remove("modal__show");
});

window.addEventListener("keyup", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    
    if (photoPopup25.classList.contains("modal__show")) {
      photoPopup25.classList.remove("modal__show");
    }
  }
});


// PHOTO-26

var photoLink26 = document.querySelector(".photo__link--26");
var photoPopup26 = document.querySelector(".modal__26");
var photoAfter26 = document.querySelector(".modal__26 .modal__photo-a");
var photoBefore26 = document.querySelector(".modal__26 .modal__photo-b");
var photoClose26 = document.querySelector(".modal__26 .modal__button-close");
var photoPrev26 = document.querySelector(".modal__26 .modal__button-prev");
var photoNext26 = document.querySelector(".modal__26 .modal__button-next");

photoLink26.addEventListener("click", function (evt) {
  evt.preventDefault();
  photoPopup26.classList.add("modal__show");
});

photoAfter26.addEventListener("mouseenter", function () {
  photoAfter26.classList.toggle("modal__photo-a");
  photoAfter26.classList.toggle("modal__photo-b");
  photoBefore26.classList.toggle("modal__photo-b");
  photoBefore26.classList.toggle("modal__photo-a");
});

photoBefore26.addEventListener("mouseout", function () {
  photoBefore26.classList.toggle("modal__photo-a");
  photoBefore26.classList.toggle("modal__photo-b");
  photoAfter26.classList.toggle("modal__photo-b");
  photoAfter26.classList.toggle("modal__photo-a");
});

photoAfter26.addEventListener("click", function () {
  photoAfter26.classList.toggle("modal__photo-a");
  photoAfter26.classList.toggle("modal__photo-b");
  photoBefore26.classList.toggle("modal__photo-b");
  photoBefore26.classList.toggle("modal__photo-a");
});

photoBefore26.addEventListener("click", function () {
  photoBefore26.classList.toggle("modal__photo-a");
  photoBefore26.classList.toggle("modal__photo-b");
  photoAfter26.classList.toggle("modal__photo-b");
  photoAfter26.classList.toggle("modal__photo-a");
});

photoPrev26.addEventListener("click", function(evt) {
  evt.preventDefault();
  photoPopup26.classList.remove("modal__show");
  photoPopup25.classList.add("modal__show");
})

window.addEventListener("keyup", function (evt) {
  if (evt.keyCode === 37) {
    evt.preventDefault();
    
    if (photoPopup26.classList.contains("modal__show")) {
      photoPopup26.classList.remove("modal__show");
      photoPopup25.classList.add("modal__show");
    }
  }
});

photoNext26.addEventListener("click", function(evt) {
  evt.preventDefault();
  photoPopup26.classList.remove("modal__show");
  photoPopup27.classList.add("modal__show");
})

window.addEventListener("keyup", function (evt) {
  if (evt.keyCode === 39) {
    evt.preventDefault();
    
    if (photoPopup26.classList.contains("modal__show")) {
      setTimeout(function() {
        photoPopup26.classList.remove("modal__show");
        photoPopup27.classList.add("modal__show");
      }, 10);
    }
  }
});

photoClose26.addEventListener("click", function (evt) {
  evt.preventDefault();
  photoPopup26.classList.remove("modal__show");
});

window.addEventListener("keyup", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    
    if (photoPopup26.classList.contains("modal__show")) {
      photoPopup26.classList.remove("modal__show");
    }
  }
});


// PHOTO-27

var photoLink27 = document.querySelector(".photo__link--27");
var photoPopup27 = document.querySelector(".modal__27");
var photoAfter27 = document.querySelector(".modal__27 .modal__photo-a");
var photoBefore27 = document.querySelector(".modal__27 .modal__photo-b");
var photoClose27 = document.querySelector(".modal__27 .modal__button-close");
var photoPrev27 = document.querySelector(".modal__27 .modal__button-prev");
var photoNext27 = document.querySelector(".modal__27 .modal__button-next");

photoLink27.addEventListener("click", function (evt) {
  evt.preventDefault();
  photoPopup27.classList.add("modal__show");
});

photoAfter27.addEventListener("mouseenter", function () {
  photoAfter27.classList.toggle("modal__photo-a");
  photoAfter27.classList.toggle("modal__photo-b");
  photoBefore27.classList.toggle("modal__photo-b");
  photoBefore27.classList.toggle("modal__photo-a");
});

photoBefore27.addEventListener("mouseout", function () {
  photoBefore27.classList.toggle("modal__photo-a");
  photoBefore27.classList.toggle("modal__photo-b");
  photoAfter27.classList.toggle("modal__photo-b");
  photoAfter27.classList.toggle("modal__photo-a");
});

photoAfter27.addEventListener("click", function () {
  photoAfter27.classList.toggle("modal__photo-a");
  photoAfter27.classList.toggle("modal__photo-b");
  photoBefore27.classList.toggle("modal__photo-b");
  photoBefore27.classList.toggle("modal__photo-a");
});

photoBefore27.addEventListener("click", function () {
  photoBefore27.classList.toggle("modal__photo-a");
  photoBefore27.classList.toggle("modal__photo-b");
  photoAfter27.classList.toggle("modal__photo-b");
  photoAfter27.classList.toggle("modal__photo-a");
});

photoPrev27.addEventListener("click", function(evt) {
  evt.preventDefault();
  photoPopup27.classList.remove("modal__show");
  photoPopup26.classList.add("modal__show");
})

window.addEventListener("keyup", function (evt) {
  if (evt.keyCode === 37) {
    evt.preventDefault();
    
    if (photoPopup27.classList.contains("modal__show")) {
      photoPopup27.classList.remove("modal__show");
      photoPopup26.classList.add("modal__show");
    }
  }
});

photoNext27.addEventListener("click", function(evt) {
  evt.preventDefault();
  photoPopup27.classList.remove("modal__show");
  photoPopup28.classList.add("modal__show");
})

window.addEventListener("keyup", function (evt) {
  if (evt.keyCode === 39) {
    evt.preventDefault();
    
    if (photoPopup27.classList.contains("modal__show")) {
      setTimeout(function() {
        photoPopup27.classList.remove("modal__show");
        photoPopup28.classList.add("modal__show");
      }, 10);
    }
  }
});

photoClose27.addEventListener("click", function (evt) {
  evt.preventDefault();
  photoPopup27.classList.remove("modal__show");
});

window.addEventListener("keyup", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    
    if (photoPopup27.classList.contains("modal__show")) {
      photoPopup27.classList.remove("modal__show");
    }
  }
});


// PHOTO-28

var photoLink28 = document.querySelector(".photo__link--28");
var photoPopup28 = document.querySelector(".modal__28");
var photoAfter28 = document.querySelector(".modal__28 .modal__photo-a");
var photoBefore28 = document.querySelector(".modal__28 .modal__photo-b");
var photoClose28 = document.querySelector(".modal__28 .modal__button-close");
var photoPrev28 = document.querySelector(".modal__28 .modal__button-prev");
var photoNext28 = document.querySelector(".modal__28 .modal__button-next");

photoLink28.addEventListener("click", function (evt) {
  evt.preventDefault();
  photoPopup28.classList.add("modal__show");
});

photoAfter28.addEventListener("mouseenter", function () {
  photoAfter28.classList.toggle("modal__photo-a");
  photoAfter28.classList.toggle("modal__photo-b");
  photoBefore28.classList.toggle("modal__photo-b");
  photoBefore28.classList.toggle("modal__photo-a");
});

photoBefore28.addEventListener("mouseout", function () {
  photoBefore28.classList.toggle("modal__photo-a");
  photoBefore28.classList.toggle("modal__photo-b");
  photoAfter28.classList.toggle("modal__photo-b");
  photoAfter28.classList.toggle("modal__photo-a");
});

photoAfter28.addEventListener("click", function () {
  photoAfter28.classList.toggle("modal__photo-a");
  photoAfter28.classList.toggle("modal__photo-b");
  photoBefore28.classList.toggle("modal__photo-b");
  photoBefore28.classList.toggle("modal__photo-a");
});

photoBefore28.addEventListener("click", function () {
  photoBefore28.classList.toggle("modal__photo-a");
  photoBefore28.classList.toggle("modal__photo-b");
  photoAfter28.classList.toggle("modal__photo-b");
  photoAfter28.classList.toggle("modal__photo-a");
});

photoPrev28.addEventListener("click", function(evt) {
  evt.preventDefault();
  photoPopup28.classList.remove("modal__show");
  photoPopup27.classList.add("modal__show");
})

window.addEventListener("keyup", function (evt) {
  if (evt.keyCode === 37) {
    evt.preventDefault();
    
    if (photoPopup28.classList.contains("modal__show")) {
      photoPopup28.classList.remove("modal__show");
      photoPopup27.classList.add("modal__show");
    }
  }
});

photoNext28.addEventListener("click", function(evt) {
  evt.preventDefault();
  photoPopup28.classList.remove("modal__show");
  photoPopup29.classList.add("modal__show");
})

window.addEventListener("keyup", function (evt) {
  if (evt.keyCode === 39) {
    evt.preventDefault();
    
    if (photoPopup28.classList.contains("modal__show")) {
      setTimeout(function() {
        photoPopup28.classList.remove("modal__show");
        photoPopup29.classList.add("modal__show");
      }, 10);
    }
  }
});

photoClose28.addEventListener("click", function (evt) {
  evt.preventDefault();
  photoPopup28.classList.remove("modal__show");
});

window.addEventListener("keyup", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    
    if (photoPopup28.classList.contains("modal__show")) {
      photoPopup28.classList.remove("modal__show");
    }
  }
});


// PHOTO-29

var photoLink29 = document.querySelector(".photo__link--29");
var photoPopup29 = document.querySelector(".modal__29");
var photoAfter29 = document.querySelector(".modal__29 .modal__photo-a");
var photoBefore29 = document.querySelector(".modal__29 .modal__photo-b");
var photoClose29 = document.querySelector(".modal__29 .modal__button-close");
var photoPrev29 = document.querySelector(".modal__29 .modal__button-prev");
var photoNext29 = document.querySelector(".modal__29 .modal__button-next");

photoLink29.addEventListener("click", function (evt) {
  evt.preventDefault();
  photoPopup29.classList.add("modal__show");
});

photoAfter29.addEventListener("mouseenter", function () {
  photoAfter29.classList.toggle("modal__photo-a");
  photoAfter29.classList.toggle("modal__photo-b");
  photoBefore29.classList.toggle("modal__photo-b");
  photoBefore29.classList.toggle("modal__photo-a");
});

photoBefore29.addEventListener("mouseout", function () {
  photoBefore29.classList.toggle("modal__photo-a");
  photoBefore29.classList.toggle("modal__photo-b");
  photoAfter29.classList.toggle("modal__photo-b");
  photoAfter29.classList.toggle("modal__photo-a");
});

photoAfter29.addEventListener("click", function () {
  photoAfter29.classList.toggle("modal__photo-a");
  photoAfter29.classList.toggle("modal__photo-b");
  photoBefore29.classList.toggle("modal__photo-b");
  photoBefore29.classList.toggle("modal__photo-a");
});

photoBefore29.addEventListener("click", function () {
  photoBefore29.classList.toggle("modal__photo-a");
  photoBefore29.classList.toggle("modal__photo-b");
  photoAfter29.classList.toggle("modal__photo-b");
  photoAfter29.classList.toggle("modal__photo-a");
});

photoPrev29.addEventListener("click", function(evt) {
  evt.preventDefault();
  photoPopup29.classList.remove("modal__show");
  photoPopup28.classList.add("modal__show");
})

window.addEventListener("keyup", function (evt) {
  if (evt.keyCode === 37) {
    evt.preventDefault();
    
    if (photoPopup29.classList.contains("modal__show")) {
      photoPopup29.classList.remove("modal__show");
      photoPopup28.classList.add("modal__show");
    }
  }
});

photoNext29.addEventListener("click", function(evt) {
  evt.preventDefault();
  photoPopup29.classList.remove("modal__show");
  photoPopup30.classList.add("modal__show");
})

window.addEventListener("keyup", function (evt) {
  if (evt.keyCode === 39) {
    evt.preventDefault();
    
    if (photoPopup29.classList.contains("modal__show")) {
      setTimeout(function() {
        photoPopup29.classList.remove("modal__show");
        photoPopup30.classList.add("modal__show");
      }, 10);
    }
  }
});

photoClose29.addEventListener("click", function (evt) {
  evt.preventDefault();
  photoPopup29.classList.remove("modal__show");
});

window.addEventListener("keyup", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    
    if (photoPopup29.classList.contains("modal__show")) {
      photoPopup29.classList.remove("modal__show");
    }
  }
});


// PHOTO-30

var photoLink30 = document.querySelector(".photo__link--30");
var photoPopup30 = document.querySelector(".modal__30");
var photoAfter30 = document.querySelector(".modal__30 .modal__photo-a");
var photoBefore30 = document.querySelector(".modal__30 .modal__photo-b");
var photoClose30 = document.querySelector(".modal__30 .modal__button-close");
var photoPrev30 = document.querySelector(".modal__30 .modal__button-prev");
var photoNext30 = document.querySelector(".modal__30 .modal__button-next");

photoLink30.addEventListener("click", function (evt) {
  evt.preventDefault();
  photoPopup30.classList.add("modal__show");
});

photoAfter30.addEventListener("mouseenter", function () {
  photoAfter30.classList.toggle("modal__photo-a");
  photoAfter30.classList.toggle("modal__photo-b");
  photoBefore30.classList.toggle("modal__photo-b");
  photoBefore30.classList.toggle("modal__photo-a");
});

photoBefore30.addEventListener("mouseout", function () {
  photoBefore30.classList.toggle("modal__photo-a");
  photoBefore30.classList.toggle("modal__photo-b");
  photoAfter30.classList.toggle("modal__photo-b");
  photoAfter30.classList.toggle("modal__photo-a");
});

photoAfter30.addEventListener("click", function () {
  photoAfter30.classList.toggle("modal__photo-a");
  photoAfter30.classList.toggle("modal__photo-b");
  photoBefore30.classList.toggle("modal__photo-b");
  photoBefore30.classList.toggle("modal__photo-a");
});

photoBefore30.addEventListener("click", function () {
  photoBefore30.classList.toggle("modal__photo-a");
  photoBefore30.classList.toggle("modal__photo-b");
  photoAfter30.classList.toggle("modal__photo-b");
  photoAfter30.classList.toggle("modal__photo-a");
});

photoPrev30.addEventListener("click", function(evt) {
  evt.preventDefault();
  photoPopup30.classList.remove("modal__show");
  photoPopup29.classList.add("modal__show");
})

window.addEventListener("keyup", function (evt) {
  if (evt.keyCode === 37) {
    evt.preventDefault();
    
    if (photoPopup30.classList.contains("modal__show")) {
      photoPopup30.classList.remove("modal__show");
      photoPopup29.classList.add("modal__show");
    }
  }
});

photoNext30.addEventListener("click", function(evt) {
  evt.preventDefault();
  photoPopup30.classList.remove("modal__show");
  photoPopup31.classList.add("modal__show");
})

window.addEventListener("keyup", function (evt) {
  if (evt.keyCode === 39) {
    evt.preventDefault();
    
    if (photoPopup30.classList.contains("modal__show")) {
      setTimeout(function() {
        photoPopup30.classList.remove("modal__show");
        photoPopup31.classList.add("modal__show");
      }, 10);
    }
  }
});

photoClose30.addEventListener("click", function (evt) {
  evt.preventDefault();
  photoPopup30.classList.remove("modal__show");
});

window.addEventListener("keyup", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    
    if (photoPopup30.classList.contains("modal__show")) {
      photoPopup30.classList.remove("modal__show");
    }
  }
});


// PHOTO-31

var photoLink31 = document.querySelector(".photo__link--31");
var photoPopup31 = document.querySelector(".modal__31");
var photoAfter31 = document.querySelector(".modal__31 .modal__photo-a");
var photoBefore31 = document.querySelector(".modal__31 .modal__photo-b");
var photoClose31 = document.querySelector(".modal__31 .modal__button-close");
var photoPrev31 = document.querySelector(".modal__31 .modal__button-prev");
var photoNext31 = document.querySelector(".modal__31 .modal__button-next");

photoLink31.addEventListener("click", function (evt) {
  evt.preventDefault();
  photoPopup31.classList.add("modal__show");
});

photoAfter31.addEventListener("mouseenter", function () {
  photoAfter31.classList.toggle("modal__photo-a");
  photoAfter31.classList.toggle("modal__photo-b");
  photoBefore31.classList.toggle("modal__photo-b");
  photoBefore31.classList.toggle("modal__photo-a");
});

photoBefore31.addEventListener("mouseout", function () {
  photoBefore31.classList.toggle("modal__photo-a");
  photoBefore31.classList.toggle("modal__photo-b");
  photoAfter31.classList.toggle("modal__photo-b");
  photoAfter31.classList.toggle("modal__photo-a");
});

photoAfter31.addEventListener("click", function () {
  photoAfter31.classList.toggle("modal__photo-a");
  photoAfter31.classList.toggle("modal__photo-b");
  photoBefore31.classList.toggle("modal__photo-b");
  photoBefore31.classList.toggle("modal__photo-a");
});

photoBefore31.addEventListener("click", function () {
  photoBefore31.classList.toggle("modal__photo-a");
  photoBefore31.classList.toggle("modal__photo-b");
  photoAfter31.classList.toggle("modal__photo-b");
  photoAfter31.classList.toggle("modal__photo-a");
});

photoPrev31.addEventListener("click", function(evt) {
  evt.preventDefault();
  photoPopup31.classList.remove("modal__show");
  photoPopup30.classList.add("modal__show");
})

window.addEventListener("keyup", function (evt) {
  if (evt.keyCode === 37) {
    evt.preventDefault();
    
    if (photoPopup31.classList.contains("modal__show")) {
      photoPopup31.classList.remove("modal__show");
      photoPopup30.classList.add("modal__show");
    }
  }
});

photoNext31.addEventListener("click", function(evt) {
  evt.preventDefault();
  photoPopup31.classList.remove("modal__show");
  photoPopup32.classList.add("modal__show");
})

window.addEventListener("keyup", function (evt) {
  if (evt.keyCode === 39) {
    evt.preventDefault();
    
    if (photoPopup31.classList.contains("modal__show")) {
      setTimeout(function() {
        photoPopup31.classList.remove("modal__show");
        photoPopup32.classList.add("modal__show");
      }, 10);
    }
  }
});

photoClose31.addEventListener("click", function (evt) {
  evt.preventDefault();
  photoPopup31.classList.remove("modal__show");
});

window.addEventListener("keyup", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    
    if (photoPopup31.classList.contains("modal__show")) {
      photoPopup31.classList.remove("modal__show");
    }
  }
});


// PHOTO-32

var photoLink32 = document.querySelector(".photo__link--32");
var photoPopup32 = document.querySelector(".modal__32");
var photoAfter32 = document.querySelector(".modal__32 .modal__photo-a");
var photoBefore32 = document.querySelector(".modal__32 .modal__photo-b");
var photoClose32 = document.querySelector(".modal__32 .modal__button-close");
var photoPrev32 = document.querySelector(".modal__32 .modal__button-prev");
var photoNext32 = document.querySelector(".modal__32 .modal__button-next");

photoLink32.addEventListener("click", function (evt) {
  evt.preventDefault();
  photoPopup32.classList.add("modal__show");
});

photoAfter32.addEventListener("mouseenter", function () {
  photoAfter32.classList.toggle("modal__photo-a");
  photoAfter32.classList.toggle("modal__photo-b");
  photoBefore32.classList.toggle("modal__photo-b");
  photoBefore32.classList.toggle("modal__photo-a");
});

photoBefore32.addEventListener("mouseout", function () {
  photoBefore32.classList.toggle("modal__photo-a");
  photoBefore32.classList.toggle("modal__photo-b");
  photoAfter32.classList.toggle("modal__photo-b");
  photoAfter32.classList.toggle("modal__photo-a");
});

photoAfter32.addEventListener("click", function () {
  photoAfter32.classList.toggle("modal__photo-a");
  photoAfter32.classList.toggle("modal__photo-b");
  photoBefore32.classList.toggle("modal__photo-b");
  photoBefore32.classList.toggle("modal__photo-a");
});

photoBefore32.addEventListener("click", function () {
  photoBefore32.classList.toggle("modal__photo-a");
  photoBefore32.classList.toggle("modal__photo-b");
  photoAfter32.classList.toggle("modal__photo-b");
  photoAfter32.classList.toggle("modal__photo-a");
});

photoPrev32.addEventListener("click", function(evt) {
  evt.preventDefault();
  photoPopup32.classList.remove("modal__show");
  photoPopup31.classList.add("modal__show");
})

window.addEventListener("keyup", function (evt) {
  if (evt.keyCode === 37) {
    evt.preventDefault();
    
    if (photoPopup32.classList.contains("modal__show")) {
      photoPopup32.classList.remove("modal__show");
      photoPopup31.classList.add("modal__show");
    }
  }
});

photoNext32.addEventListener("click", function(evt) {
  evt.preventDefault();
  photoPopup32.classList.remove("modal__show");
  photoPopup33.classList.add("modal__show");
})

window.addEventListener("keyup", function (evt) {
  if (evt.keyCode === 39) {
    evt.preventDefault();
    
    if (photoPopup32.classList.contains("modal__show")) {
      setTimeout(function() {
        photoPopup32.classList.remove("modal__show");
        photoPopup33.classList.add("modal__show");
      }, 10);
    }
  }
});

photoClose32.addEventListener("click", function (evt) {
  evt.preventDefault();
  photoPopup32.classList.remove("modal__show");
});

window.addEventListener("keyup", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    
    if (photoPopup32.classList.contains("modal__show")) {
      photoPopup32.classList.remove("modal__show");
    }
  }
});


// PHOTO-33

var photoLink33 = document.querySelector(".photo__link--33");
var photoPopup33 = document.querySelector(".modal__33");
var photoAfter33 = document.querySelector(".modal__33 .modal__photo-a");
var photoBefore33 = document.querySelector(".modal__33 .modal__photo-b");
var photoClose33 = document.querySelector(".modal__33 .modal__button-close");
var photoPrev33 = document.querySelector(".modal__33 .modal__button-prev");
var photoNext33 = document.querySelector(".modal__33 .modal__button-next");

photoLink33.addEventListener("click", function (evt) {
  evt.preventDefault();
  photoPopup33.classList.add("modal__show");
});

photoAfter33.addEventListener("mouseenter", function () {
  photoAfter33.classList.toggle("modal__photo-a");
  photoAfter33.classList.toggle("modal__photo-b");
  photoBefore33.classList.toggle("modal__photo-b");
  photoBefore33.classList.toggle("modal__photo-a");
});

photoBefore33.addEventListener("mouseout", function () {
  photoBefore33.classList.toggle("modal__photo-a");
  photoBefore33.classList.toggle("modal__photo-b");
  photoAfter33.classList.toggle("modal__photo-b");
  photoAfter33.classList.toggle("modal__photo-a");
});

photoAfter33.addEventListener("click", function () {
  photoAfter33.classList.toggle("modal__photo-a");
  photoAfter33.classList.toggle("modal__photo-b");
  photoBefore33.classList.toggle("modal__photo-b");
  photoBefore33.classList.toggle("modal__photo-a");
});

photoBefore33.addEventListener("click", function () {
  photoBefore33.classList.toggle("modal__photo-a");
  photoBefore33.classList.toggle("modal__photo-b");
  photoAfter33.classList.toggle("modal__photo-b");
  photoAfter33.classList.toggle("modal__photo-a");
});

photoPrev33.addEventListener("click", function(evt) {
  evt.preventDefault();
  photoPopup33.classList.remove("modal__show");
  photoPopup32.classList.add("modal__show");
})

window.addEventListener("keyup", function (evt) {
  if (evt.keyCode === 37) {
    evt.preventDefault();
    
    if (photoPopup33.classList.contains("modal__show")) {
      photoPopup33.classList.remove("modal__show");
      photoPopup32.classList.add("modal__show");
    }
  }
});

photoNext33.addEventListener("click", function(evt) {
  evt.preventDefault();
  photoPopup33.classList.remove("modal__show");
  photoPopup34.classList.add("modal__show");
})

window.addEventListener("keyup", function (evt) {
  if (evt.keyCode === 39) {
    evt.preventDefault();
    
    if (photoPopup33.classList.contains("modal__show")) {
      setTimeout(function() {
        photoPopup33.classList.remove("modal__show");
        photoPopup34.classList.add("modal__show");
      }, 10);
    }
  }
});

photoClose33.addEventListener("click", function (evt) {
  evt.preventDefault();
  photoPopup33.classList.remove("modal__show");
});

window.addEventListener("keyup", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    
    if (photoPopup33.classList.contains("modal__show")) {
      photoPopup33.classList.remove("modal__show");
    }
  }
});


// PHOTO-34

var photoLink34 = document.querySelector(".photo__link--34");
var photoPopup34 = document.querySelector(".modal__34");
var photoAfter34 = document.querySelector(".modal__34 .modal__photo-a");
var photoBefore34 = document.querySelector(".modal__34 .modal__photo-b");
var photoClose34 = document.querySelector(".modal__34 .modal__button-close");
var photoPrev34 = document.querySelector(".modal__34 .modal__button-prev");
var photoNext34 = document.querySelector(".modal__34 .modal__button-next");

photoLink34.addEventListener("click", function (evt) {
  evt.preventDefault();
  photoPopup34.classList.add("modal__show");
});

photoAfter34.addEventListener("mouseenter", function () {
  photoAfter34.classList.toggle("modal__photo-a");
  photoAfter34.classList.toggle("modal__photo-b");
  photoBefore34.classList.toggle("modal__photo-b");
  photoBefore34.classList.toggle("modal__photo-a");
});

photoBefore34.addEventListener("mouseout", function () {
  photoBefore34.classList.toggle("modal__photo-a");
  photoBefore34.classList.toggle("modal__photo-b");
  photoAfter34.classList.toggle("modal__photo-b");
  photoAfter34.classList.toggle("modal__photo-a");
});

photoAfter34.addEventListener("click", function () {
  photoAfter34.classList.toggle("modal__photo-a");
  photoAfter34.classList.toggle("modal__photo-b");
  photoBefore34.classList.toggle("modal__photo-b");
  photoBefore34.classList.toggle("modal__photo-a");
});

photoBefore34.addEventListener("click", function () {
  photoBefore34.classList.toggle("modal__photo-a");
  photoBefore34.classList.toggle("modal__photo-b");
  photoAfter34.classList.toggle("modal__photo-b");
  photoAfter34.classList.toggle("modal__photo-a");
});

photoPrev34.addEventListener("click", function(evt) {
  evt.preventDefault();
  photoPopup34.classList.remove("modal__show");
  photoPopup33.classList.add("modal__show");
})

window.addEventListener("keyup", function (evt) {
  if (evt.keyCode === 37) {
    evt.preventDefault();
    
    if (photoPopup34.classList.contains("modal__show")) {
      photoPopup34.classList.remove("modal__show");
      photoPopup33.classList.add("modal__show");
    }
  }
});

photoNext34.addEventListener("click", function(evt) {
  evt.preventDefault();
  photoPopup34.classList.remove("modal__show");
  photoPopup35.classList.add("modal__show");
})

window.addEventListener("keyup", function (evt) {
  if (evt.keyCode === 39) {
    evt.preventDefault();
    
    if (photoPopup34.classList.contains("modal__show")) {
      setTimeout(function() {
        photoPopup34.classList.remove("modal__show");
        photoPopup35.classList.add("modal__show");
      }, 10);
    }
  }
});

photoClose34.addEventListener("click", function (evt) {
  evt.preventDefault();
  photoPopup34.classList.remove("modal__show");
});

window.addEventListener("keyup", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    
    if (photoPopup34.classList.contains("modal__show")) {
      photoPopup34.classList.remove("modal__show");
    }
  }
});


// PHOTO-35

var photoLink35 = document.querySelector(".photo__link--35");
var photoPopup35 = document.querySelector(".modal__35");
var photoAfter35 = document.querySelector(".modal__35 .modal__photo-a");
var photoBefore35 = document.querySelector(".modal__35 .modal__photo-b");
var photoClose35 = document.querySelector(".modal__35 .modal__button-close");
var photoPrev35 = document.querySelector(".modal__35 .modal__button-prev");
var photoNext35 = document.querySelector(".modal__35 .modal__button-next");

photoLink35.addEventListener("click", function (evt) {
  evt.preventDefault();
  photoPopup35.classList.add("modal__show");
});

photoAfter35.addEventListener("mouseenter", function () {
  photoAfter35.classList.toggle("modal__photo-a");
  photoAfter35.classList.toggle("modal__photo-b");
  photoBefore35.classList.toggle("modal__photo-b");
  photoBefore35.classList.toggle("modal__photo-a");
});

photoBefore35.addEventListener("mouseout", function () {
  photoBefore35.classList.toggle("modal__photo-a");
  photoBefore35.classList.toggle("modal__photo-b");
  photoAfter35.classList.toggle("modal__photo-b");
  photoAfter35.classList.toggle("modal__photo-a");
});

photoAfter35.addEventListener("click", function () {
  photoAfter35.classList.toggle("modal__photo-a");
  photoAfter35.classList.toggle("modal__photo-b");
  photoBefore35.classList.toggle("modal__photo-b");
  photoBefore35.classList.toggle("modal__photo-a");
});

photoBefore35.addEventListener("click", function () {
  photoBefore35.classList.toggle("modal__photo-a");
  photoBefore35.classList.toggle("modal__photo-b");
  photoAfter35.classList.toggle("modal__photo-b");
  photoAfter35.classList.toggle("modal__photo-a");
});

photoPrev35.addEventListener("click", function(evt) {
  evt.preventDefault();
  photoPopup35.classList.remove("modal__show");
  photoPopup34.classList.add("modal__show");
})

window.addEventListener("keyup", function (evt) {
  if (evt.keyCode === 37) {
    evt.preventDefault();
    
    if (photoPopup35.classList.contains("modal__show")) {
      photoPopup35.classList.remove("modal__show");
      photoPopup34.classList.add("modal__show");
    }
  }
});

photoNext35.addEventListener("click", function(evt) {
  evt.preventDefault();
  photoPopup35.classList.remove("modal__show");
  photoPopup36.classList.add("modal__show");
})

window.addEventListener("keyup", function (evt) {
  if (evt.keyCode === 39) {
    evt.preventDefault();
    
    if (photoPopup35.classList.contains("modal__show")) {
      setTimeout(function() {
        photoPopup35.classList.remove("modal__show");
        photoPopup36.classList.add("modal__show");
      }, 10);
    }
  }
});

photoClose35.addEventListener("click", function (evt) {
  evt.preventDefault();
  photoPopup35.classList.remove("modal__show");
});

window.addEventListener("keyup", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    
    if (photoPopup35.classList.contains("modal__show")) {
      photoPopup35.classList.remove("modal__show");
    }
  }
});


// PHOTO-36

var photoLink36 = document.querySelector(".photo__link--36");
var photoPopup36 = document.querySelector(".modal__36");
var photoAfter36 = document.querySelector(".modal__36 .modal__photo-a");
var photoBefore36 = document.querySelector(".modal__36 .modal__photo-b");
var photoClose36 = document.querySelector(".modal__36 .modal__button-close");
var photoPrev36 = document.querySelector(".modal__36 .modal__button-prev");
var photoNext36 = document.querySelector(".modal__36 .modal__button-next");

photoLink36.addEventListener("click", function (evt) {
  evt.preventDefault();
  photoPopup36.classList.add("modal__show");
});

photoAfter36.addEventListener("mouseenter", function () {
  photoAfter36.classList.toggle("modal__photo-a");
  photoAfter36.classList.toggle("modal__photo-b");
  photoBefore36.classList.toggle("modal__photo-b");
  photoBefore36.classList.toggle("modal__photo-a");
});

photoBefore36.addEventListener("mouseout", function () {
  photoBefore36.classList.toggle("modal__photo-a");
  photoBefore36.classList.toggle("modal__photo-b");
  photoAfter36.classList.toggle("modal__photo-b");
  photoAfter36.classList.toggle("modal__photo-a");
});

photoAfter36.addEventListener("click", function () {
  photoAfter36.classList.toggle("modal__photo-a");
  photoAfter36.classList.toggle("modal__photo-b");
  photoBefore36.classList.toggle("modal__photo-b");
  photoBefore36.classList.toggle("modal__photo-a");
});

photoBefore36.addEventListener("click", function () {
  photoBefore36.classList.toggle("modal__photo-a");
  photoBefore36.classList.toggle("modal__photo-b");
  photoAfter36.classList.toggle("modal__photo-b");
  photoAfter36.classList.toggle("modal__photo-a");
});

photoPrev36.addEventListener("click", function(evt) {
  evt.preventDefault();
  photoPopup36.classList.remove("modal__show");
  photoPopup35.classList.add("modal__show");
})

window.addEventListener("keyup", function (evt) {
  if (evt.keyCode === 37) {
    evt.preventDefault();
    
    if (photoPopup36.classList.contains("modal__show")) {
      photoPopup36.classList.remove("modal__show");
      photoPopup35.classList.add("modal__show");
    }
  }
});

photoNext36.addEventListener("click", function(evt) {
  evt.preventDefault();
  photoPopup36.classList.remove("modal__show");
  photoPopup37.classList.add("modal__show");
})

window.addEventListener("keyup", function (evt) {
  if (evt.keyCode === 39) {
    evt.preventDefault();
    
    if (photoPopup36.classList.contains("modal__show")) {
      setTimeout(function() {
        photoPopup36.classList.remove("modal__show");
        photoPopup37.classList.add("modal__show");
      }, 10);
    }
  }
});

photoClose36.addEventListener("click", function (evt) {
  evt.preventDefault();
  photoPopup36.classList.remove("modal__show");
});

window.addEventListener("keyup", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    
    if (photoPopup36.classList.contains("modal__show")) {
      photoPopup36.classList.remove("modal__show");
    }
  }
});


// PHOTO-37

var photoLink37 = document.querySelector(".photo__link--37");
var photoPopup37 = document.querySelector(".modal__37");
var photoAfter37 = document.querySelector(".modal__37 .modal__photo-a");
var photoBefore37 = document.querySelector(".modal__37 .modal__photo-b");
var photoClose37 = document.querySelector(".modal__37 .modal__button-close");
var photoPrev37 = document.querySelector(".modal__37 .modal__button-prev");
var photoNext37 = document.querySelector(".modal__37 .modal__button-next");

photoLink37.addEventListener("click", function (evt) {
  evt.preventDefault();
  photoPopup37.classList.add("modal__show");
});

photoAfter37.addEventListener("mouseenter", function () {
  photoAfter37.classList.toggle("modal__photo-a");
  photoAfter37.classList.toggle("modal__photo-b");
  photoBefore37.classList.toggle("modal__photo-b");
  photoBefore37.classList.toggle("modal__photo-a");
});

photoBefore37.addEventListener("mouseout", function () {
  photoBefore37.classList.toggle("modal__photo-a");
  photoBefore37.classList.toggle("modal__photo-b");
  photoAfter37.classList.toggle("modal__photo-b");
  photoAfter37.classList.toggle("modal__photo-a");
});

photoAfter37.addEventListener("click", function () {
  photoAfter37.classList.toggle("modal__photo-a");
  photoAfter37.classList.toggle("modal__photo-b");
  photoBefore37.classList.toggle("modal__photo-b");
  photoBefore37.classList.toggle("modal__photo-a");
});

photoBefore37.addEventListener("click", function () {
  photoBefore37.classList.toggle("modal__photo-a");
  photoBefore37.classList.toggle("modal__photo-b");
  photoAfter37.classList.toggle("modal__photo-b");
  photoAfter37.classList.toggle("modal__photo-a");
});

photoPrev37.addEventListener("click", function(evt) {
  evt.preventDefault();
  photoPopup37.classList.remove("modal__show");
  photoPopup36.classList.add("modal__show");
})

window.addEventListener("keyup", function (evt) {
  if (evt.keyCode === 37) {
    evt.preventDefault();
    
    if (photoPopup37.classList.contains("modal__show")) {
      photoPopup37.classList.remove("modal__show");
      photoPopup36.classList.add("modal__show");
    }
  }
});

photoNext37.addEventListener("click", function(evt) {
  evt.preventDefault();
  photoPopup37.classList.remove("modal__show");
  photoPopup38.classList.add("modal__show");
})

window.addEventListener("keyup", function (evt) {
  if (evt.keyCode === 39) {
    evt.preventDefault();
    
    if (photoPopup37.classList.contains("modal__show")) {
      setTimeout(function() {
        photoPopup37.classList.remove("modal__show");
        photoPopup38.classList.add("modal__show");
      }, 10);
    }
  }
});

photoClose37.addEventListener("click", function (evt) {
  evt.preventDefault();
  photoPopup37.classList.remove("modal__show");
});

window.addEventListener("keyup", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    
    if (photoPopup37.classList.contains("modal__show")) {
      photoPopup37.classList.remove("modal__show");
    }
  }
});


// PHOTO-38

var photoLink38 = document.querySelector(".photo__link--38");
var photoPopup38 = document.querySelector(".modal__38");
var photoAfter38 = document.querySelector(".modal__38 .modal__photo-a");
var photoBefore38 = document.querySelector(".modal__38 .modal__photo-b");
var photoClose38 = document.querySelector(".modal__38 .modal__button-close");
var photoPrev38 = document.querySelector(".modal__38 .modal__button-prev");
var photoNext38 = document.querySelector(".modal__38 .modal__button-next");

photoLink38.addEventListener("click", function (evt) {
  evt.preventDefault();
  photoPopup38.classList.add("modal__show");
});

photoAfter38.addEventListener("mouseenter", function () {
  photoAfter38.classList.toggle("modal__photo-a");
  photoAfter38.classList.toggle("modal__photo-b");
  photoBefore38.classList.toggle("modal__photo-b");
  photoBefore38.classList.toggle("modal__photo-a");
});

photoBefore38.addEventListener("mouseout", function () {
  photoBefore38.classList.toggle("modal__photo-a");
  photoBefore38.classList.toggle("modal__photo-b");
  photoAfter38.classList.toggle("modal__photo-b");
  photoAfter38.classList.toggle("modal__photo-a");
});

photoAfter38.addEventListener("click", function () {
  photoAfter38.classList.toggle("modal__photo-a");
  photoAfter38.classList.toggle("modal__photo-b");
  photoBefore38.classList.toggle("modal__photo-b");
  photoBefore38.classList.toggle("modal__photo-a");
});

photoBefore38.addEventListener("click", function () {
  photoBefore38.classList.toggle("modal__photo-a");
  photoBefore38.classList.toggle("modal__photo-b");
  photoAfter38.classList.toggle("modal__photo-b");
  photoAfter38.classList.toggle("modal__photo-a");
});

photoPrev38.addEventListener("click", function(evt) {
  evt.preventDefault();
  photoPopup38.classList.remove("modal__show");
  photoPopup37.classList.add("modal__show");
})

window.addEventListener("keyup", function (evt) {
  if (evt.keyCode === 37) {
    evt.preventDefault();
    
    if (photoPopup38.classList.contains("modal__show")) {
      photoPopup38.classList.remove("modal__show");
      photoPopup37.classList.add("modal__show");
    }
  }
});

photoNext38.addEventListener("click", function(evt) {
  evt.preventDefault();
  photoPopup38.classList.remove("modal__show");
  photoPopup39.classList.add("modal__show");
})

window.addEventListener("keyup", function (evt) {
  if (evt.keyCode === 39) {
    evt.preventDefault();
    
    if (photoPopup38.classList.contains("modal__show")) {
      setTimeout(function() {
        photoPopup38.classList.remove("modal__show");
        photoPopup39.classList.add("modal__show");
      }, 10);
    }
  }
});

photoClose38.addEventListener("click", function (evt) {
  evt.preventDefault();
  photoPopup38.classList.remove("modal__show");
});

window.addEventListener("keyup", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    
    if (photoPopup38.classList.contains("modal__show")) {
      photoPopup38.classList.remove("modal__show");
    }
  }
});


// PHOTO-39

var photoLink39 = document.querySelector(".photo__link--39");
var photoPopup39 = document.querySelector(".modal__39");
var photoAfter39 = document.querySelector(".modal__39 .modal__photo-a");
var photoBefore39 = document.querySelector(".modal__39 .modal__photo-b");
var photoClose39 = document.querySelector(".modal__39 .modal__button-close");
var photoPrev39 = document.querySelector(".modal__39 .modal__button-prev");
var photoNext39 = document.querySelector(".modal__39 .modal__button-next");

photoLink39.addEventListener("click", function (evt) {
  evt.preventDefault();
  photoPopup39.classList.add("modal__show");
});

photoAfter39.addEventListener("mouseenter", function () {
  photoAfter39.classList.toggle("modal__photo-a");
  photoAfter39.classList.toggle("modal__photo-b");
  photoBefore39.classList.toggle("modal__photo-b");
  photoBefore39.classList.toggle("modal__photo-a");
});

photoBefore39.addEventListener("mouseout", function () {
  photoBefore39.classList.toggle("modal__photo-a");
  photoBefore39.classList.toggle("modal__photo-b");
  photoAfter39.classList.toggle("modal__photo-b");
  photoAfter39.classList.toggle("modal__photo-a");
});

photoAfter39.addEventListener("click", function () {
  photoAfter39.classList.toggle("modal__photo-a");
  photoAfter39.classList.toggle("modal__photo-b");
  photoBefore39.classList.toggle("modal__photo-b");
  photoBefore39.classList.toggle("modal__photo-a");
});

photoBefore39.addEventListener("click", function () {
  photoBefore39.classList.toggle("modal__photo-a");
  photoBefore39.classList.toggle("modal__photo-b");
  photoAfter39.classList.toggle("modal__photo-b");
  photoAfter39.classList.toggle("modal__photo-a");
});

photoPrev39.addEventListener("click", function(evt) {
  evt.preventDefault();
  photoPopup39.classList.remove("modal__show");
  photoPopup38.classList.add("modal__show");
})

window.addEventListener("keyup", function (evt) {
  if (evt.keyCode === 37) {
    evt.preventDefault();
    
    if (photoPopup39.classList.contains("modal__show")) {
      photoPopup39.classList.remove("modal__show");
      photoPopup38.classList.add("modal__show");
    }
  }
});

photoNext39.addEventListener("click", function(evt) {
  evt.preventDefault();
  photoPopup39.classList.remove("modal__show");
  photoPopup40.classList.add("modal__show");
})

window.addEventListener("keyup", function (evt) {
  if (evt.keyCode === 39) {
    evt.preventDefault();
    
    if (photoPopup39.classList.contains("modal__show")) {
      setTimeout(function() {
        photoPopup39.classList.remove("modal__show");
        photoPopup40.classList.add("modal__show");
      }, 10);
    }
  }
});

photoClose39.addEventListener("click", function (evt) {
  evt.preventDefault();
  photoPopup39.classList.remove("modal__show");
});

window.addEventListener("keyup", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    
    if (photoPopup39.classList.contains("modal__show")) {
      photoPopup39.classList.remove("modal__show");
    }
  }
});


// PHOTO-40

var photoLink40 = document.querySelector(".photo__link--40");
var photoPopup40 = document.querySelector(".modal__40");
var photoAfter40 = document.querySelector(".modal__40 .modal__photo-a");
var photoBefore40 = document.querySelector(".modal__40 .modal__photo-b");
var photoClose40 = document.querySelector(".modal__40 .modal__button-close");
var photoPrev40 = document.querySelector(".modal__40 .modal__button-prev");
var photoNext40 = document.querySelector(".modal__40 .modal__button-next");

photoLink40.addEventListener("click", function (evt) {
  evt.preventDefault();
  photoPopup40.classList.add("modal__show");
});

photoAfter40.addEventListener("mouseenter", function () {
  photoAfter40.classList.toggle("modal__photo-a");
  photoAfter40.classList.toggle("modal__photo-b");
  photoBefore40.classList.toggle("modal__photo-b");
  photoBefore40.classList.toggle("modal__photo-a");
});

photoBefore40.addEventListener("mouseout", function () {
  photoBefore40.classList.toggle("modal__photo-a");
  photoBefore40.classList.toggle("modal__photo-b");
  photoAfter40.classList.toggle("modal__photo-b");
  photoAfter40.classList.toggle("modal__photo-a");
});

photoAfter40.addEventListener("click", function () {
  photoAfter40.classList.toggle("modal__photo-a");
  photoAfter40.classList.toggle("modal__photo-b");
  photoBefore40.classList.toggle("modal__photo-b");
  photoBefore40.classList.toggle("modal__photo-a");
});

photoBefore40.addEventListener("click", function () {
  photoBefore40.classList.toggle("modal__photo-a");
  photoBefore40.classList.toggle("modal__photo-b");
  photoAfter40.classList.toggle("modal__photo-b");
  photoAfter40.classList.toggle("modal__photo-a");
});

photoPrev40.addEventListener("click", function(evt) {
  evt.preventDefault();
  photoPopup40.classList.remove("modal__show");
  photoPopup39.classList.add("modal__show");
})

window.addEventListener("keyup", function (evt) {
  if (evt.keyCode === 37) {
    evt.preventDefault();
    
    if (photoPopup40.classList.contains("modal__show")) {
      photoPopup40.classList.remove("modal__show");
      photoPopup39.classList.add("modal__show");
    }
  }
});

photoNext40.addEventListener("click", function(evt) {
  evt.preventDefault();
  photoPopup40.classList.remove("modal__show");
  photoPopup41.classList.add("modal__show");
})

window.addEventListener("keyup", function (evt) {
  if (evt.keyCode === 39) {
    evt.preventDefault();
    
    if (photoPopup40.classList.contains("modal__show")) {
      setTimeout(function() {
        photoPopup40.classList.remove("modal__show");
        photoPopup41.classList.add("modal__show");
      }, 10);
    }
  }
});

photoClose40.addEventListener("click", function (evt) {
  evt.preventDefault();
  photoPopup40.classList.remove("modal__show");
});

window.addEventListener("keyup", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    
    if (photoPopup40.classList.contains("modal__show")) {
      photoPopup40.classList.remove("modal__show");
    }
  }
});


// PHOTO-41

var photoLink41 = document.querySelector(".photo__link--41");
var photoPopup41 = document.querySelector(".modal__41");
var photoAfter41 = document.querySelector(".modal__41 .modal__photo-a");
var photoBefore41 = document.querySelector(".modal__41 .modal__photo-b");
var photoClose41 = document.querySelector(".modal__41 .modal__button-close");
var photoPrev41 = document.querySelector(".modal__41 .modal__button-prev");
var photoNext41 = document.querySelector(".modal__41 .modal__button-next");

photoLink41.addEventListener("click", function (evt) {
  evt.preventDefault();
  photoPopup41.classList.add("modal__show");
});

photoAfter41.addEventListener("mouseenter", function () {
  photoAfter41.classList.toggle("modal__photo-a");
  photoAfter41.classList.toggle("modal__photo-b");
  photoBefore41.classList.toggle("modal__photo-b");
  photoBefore41.classList.toggle("modal__photo-a");
});

photoBefore41.addEventListener("mouseout", function () {
  photoBefore41.classList.toggle("modal__photo-a");
  photoBefore41.classList.toggle("modal__photo-b");
  photoAfter41.classList.toggle("modal__photo-b");
  photoAfter41.classList.toggle("modal__photo-a");
});

photoAfter41.addEventListener("click", function () {
  photoAfter41.classList.toggle("modal__photo-a");
  photoAfter41.classList.toggle("modal__photo-b");
  photoBefore41.classList.toggle("modal__photo-b");
  photoBefore41.classList.toggle("modal__photo-a");
});

photoBefore41.addEventListener("click", function () {
  photoBefore41.classList.toggle("modal__photo-a");
  photoBefore41.classList.toggle("modal__photo-b");
  photoAfter41.classList.toggle("modal__photo-b");
  photoAfter41.classList.toggle("modal__photo-a");
});

photoPrev41.addEventListener("click", function(evt) {
  evt.preventDefault();
  photoPopup41.classList.remove("modal__show");
  photoPopup40.classList.add("modal__show");
})

window.addEventListener("keyup", function (evt) {
  if (evt.keyCode === 37) {
    evt.preventDefault();
    
    if (photoPopup41.classList.contains("modal__show")) {
      photoPopup41.classList.remove("modal__show");
      photoPopup40.classList.add("modal__show");
    }
  }
});

photoNext41.addEventListener("click", function(evt) {
  evt.preventDefault();
  photoPopup41.classList.remove("modal__show");
  photoPopup42.classList.add("modal__show");
})

window.addEventListener("keyup", function (evt) {
  if (evt.keyCode === 39) {
    evt.preventDefault();
    
    if (photoPopup41.classList.contains("modal__show")) {
      setTimeout(function() {
        photoPopup41.classList.remove("modal__show");
        photoPopup42.classList.add("modal__show");
      }, 10);
    }
  }
});

photoClose41.addEventListener("click", function (evt) {
  evt.preventDefault();
  photoPopup41.classList.remove("modal__show");
});

window.addEventListener("keyup", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    
    if (photoPopup41.classList.contains("modal__show")) {
      photoPopup41.classList.remove("modal__show");
    }
  }
});


// PHOTO-42

var photoLink42 = document.querySelector(".photo__link--42");
var photoPopup42 = document.querySelector(".modal__42");
var photoAfter42 = document.querySelector(".modal__42 .modal__photo-a");
var photoBefore42 = document.querySelector(".modal__42 .modal__photo-b");
var photoClose42 = document.querySelector(".modal__42 .modal__button-close");
var photoPrev42 = document.querySelector(".modal__42 .modal__button-prev");
var photoNext42 = document.querySelector(".modal__42 .modal__button-next");

photoLink42.addEventListener("click", function (evt) {
  evt.preventDefault();
  photoPopup42.classList.add("modal__show");
});

photoAfter42.addEventListener("mouseenter", function () {
  photoAfter42.classList.toggle("modal__photo-a");
  photoAfter42.classList.toggle("modal__photo-b");
  photoBefore42.classList.toggle("modal__photo-b");
  photoBefore42.classList.toggle("modal__photo-a");
});

photoBefore42.addEventListener("mouseout", function () {
  photoBefore42.classList.toggle("modal__photo-a");
  photoBefore42.classList.toggle("modal__photo-b");
  photoAfter42.classList.toggle("modal__photo-b");
  photoAfter42.classList.toggle("modal__photo-a");
});

photoAfter42.addEventListener("click", function () {
  photoAfter42.classList.toggle("modal__photo-a");
  photoAfter42.classList.toggle("modal__photo-b");
  photoBefore42.classList.toggle("modal__photo-b");
  photoBefore42.classList.toggle("modal__photo-a");
});

photoBefore42.addEventListener("click", function () {
  photoBefore42.classList.toggle("modal__photo-a");
  photoBefore42.classList.toggle("modal__photo-b");
  photoAfter42.classList.toggle("modal__photo-b");
  photoAfter42.classList.toggle("modal__photo-a");
});

photoPrev42.addEventListener("click", function(evt) {
  evt.preventDefault();
  photoPopup42.classList.remove("modal__show");
  photoPopup41.classList.add("modal__show");
})

window.addEventListener("keyup", function (evt) {
  if (evt.keyCode === 37) {
    evt.preventDefault();
    
    if (photoPopup42.classList.contains("modal__show")) {
      photoPopup42.classList.remove("modal__show");
      photoPopup41.classList.add("modal__show");
    }
  }
});

photoNext42.addEventListener("click", function(evt) {
  evt.preventDefault();
  photoPopup42.classList.remove("modal__show");
  photoPopup43.classList.add("modal__show");
})

window.addEventListener("keyup", function (evt) {
  if (evt.keyCode === 39) {
    evt.preventDefault();
    
    if (photoPopup42.classList.contains("modal__show")) {
      setTimeout(function() {
        photoPopup42.classList.remove("modal__show");
        photoPopup43.classList.add("modal__show");
      }, 10);
    }
  }
});

photoClose42.addEventListener("click", function (evt) {
  evt.preventDefault();
  photoPopup42.classList.remove("modal__show");
});

window.addEventListener("keyup", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    
    if (photoPopup42.classList.contains("modal__show")) {
      photoPopup42.classList.remove("modal__show");
    }
  }
});


// PHOTO-43
 
var photoLink43 = document.querySelector(".photo__link--43");
var photoPopup43 = document.querySelector(".modal__43");
var photoAfter43 = document.querySelector(".modal__43 .modal__photo-a");
var photoBefore43 = document.querySelector(".modal__43 .modal__photo-b");
var photoClose43 = document.querySelector(".modal__43 .modal__button-close");
var photoPrev43 = document.querySelector(".modal__43 .modal__button-prev");
var photoNext43 = document.querySelector(".modal__43 .modal__button-next");
 
photoLink43.addEventListener("click", function (evt) {
  evt.preventDefault();
  photoPopup43.classList.add("modal__show");
});
 
photoAfter43.addEventListener("mouseenter", function () {
  photoAfter43.classList.toggle("modal__photo-a");
  photoAfter43.classList.toggle("modal__photo-b");
  photoBefore43.classList.toggle("modal__photo-b");
  photoBefore43.classList.toggle("modal__photo-a");
});
 
photoBefore43.addEventListener("mouseout", function () {
  photoBefore43.classList.toggle("modal__photo-a");
  photoBefore43.classList.toggle("modal__photo-b");
  photoAfter43.classList.toggle("modal__photo-b");
  photoAfter43.classList.toggle("modal__photo-a");
});
 
photoAfter43.addEventListener("click", function () {
  photoAfter43.classList.toggle("modal__photo-a");
  photoAfter43.classList.toggle("modal__photo-b");
  photoBefore43.classList.toggle("modal__photo-b");
  photoBefore43.classList.toggle("modal__photo-a");
});
 
photoBefore43.addEventListener("click", function () {
  photoBefore43.classList.toggle("modal__photo-a");
  photoBefore43.classList.toggle("modal__photo-b");
  photoAfter43.classList.toggle("modal__photo-b");
  photoAfter43.classList.toggle("modal__photo-a");
});
 
photoPrev43.addEventListener("click", function(evt) {
  evt.preventDefault();
  photoPopup43.classList.remove("modal__show");
  photoPopup42.classList.add("modal__show");
})
 
window.addEventListener("keyup", function (evt) {
  if (evt.keyCode === 37) {
    evt.preventDefault();
    
    if (photoPopup43.classList.contains("modal__show")) {
      photoPopup43.classList.remove("modal__show");
      photoPopup42.classList.add("modal__show");
    }
  }
});
 
photoNext43.addEventListener("click", function(evt) {
  evt.preventDefault();
  photoPopup43.classList.remove("modal__show");
  photoPopup44.classList.add("modal__show");
})
 
window.addEventListener("keyup", function (evt) {
  if (evt.keyCode === 39) {
    evt.preventDefault();
    
    if (photoPopup43.classList.contains("modal__show")) {
      setTimeout(function() {
        photoPopup43.classList.remove("modal__show");
        photoPopup44.classList.add("modal__show");
      }, 10);
    }
  }
});
 
photoClose43.addEventListener("click", function (evt) {
  evt.preventDefault();
  photoPopup43.classList.remove("modal__show");
});
 
window.addEventListener("keyup", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    
    if (photoPopup43.classList.contains("modal__show")) {
      photoPopup43.classList.remove("modal__show");
    }
  }
});
 
 
// PHOTO-44
 
var photoLink44 = document.querySelector(".photo__link--44");
var photoPopup44 = document.querySelector(".modal__44");
var photoAfter44 = document.querySelector(".modal__44 .modal__photo-a");
var photoBefore44 = document.querySelector(".modal__44 .modal__photo-b");
var photoClose44 = document.querySelector(".modal__44 .modal__button-close");
var photoPrev44 = document.querySelector(".modal__44 .modal__button-prev");
var photoNext44 = document.querySelector(".modal__44 .modal__button-next");
 
photoLink44.addEventListener("click", function (evt) {
  evt.preventDefault();
  photoPopup44.classList.add("modal__show");
});
 
photoAfter44.addEventListener("mouseenter", function () {
  photoAfter44.classList.toggle("modal__photo-a");
  photoAfter44.classList.toggle("modal__photo-b");
  photoBefore44.classList.toggle("modal__photo-b");
  photoBefore44.classList.toggle("modal__photo-a");
});
 
photoBefore44.addEventListener("mouseout", function () {
  photoBefore44.classList.toggle("modal__photo-a");
  photoBefore44.classList.toggle("modal__photo-b");
  photoAfter44.classList.toggle("modal__photo-b");
  photoAfter44.classList.toggle("modal__photo-a");
});
 
photoAfter44.addEventListener("click", function () {
  photoAfter44.classList.toggle("modal__photo-a");
  photoAfter44.classList.toggle("modal__photo-b");
  photoBefore44.classList.toggle("modal__photo-b");
  photoBefore44.classList.toggle("modal__photo-a");
});
 
photoBefore44.addEventListener("click", function () {
  photoBefore44.classList.toggle("modal__photo-a");
  photoBefore44.classList.toggle("modal__photo-b");
  photoAfter44.classList.toggle("modal__photo-b");
  photoAfter44.classList.toggle("modal__photo-a");
});
 
photoPrev44.addEventListener("click", function(evt) {
  evt.preventDefault();
  photoPopup44.classList.remove("modal__show");
  photoPopup43.classList.add("modal__show");
})
 
window.addEventListener("keyup", function (evt) {
  if (evt.keyCode === 37) {
    evt.preventDefault();
    
    if (photoPopup44.classList.contains("modal__show")) {
      photoPopup44.classList.remove("modal__show");
      photoPopup43.classList.add("modal__show");
    }
  }
});
 
photoNext44.addEventListener("click", function(evt) {
  evt.preventDefault();
  photoPopup44.classList.remove("modal__show");
  photoPopup45.classList.add("modal__show");
})
 
window.addEventListener("keyup", function (evt) {
  if (evt.keyCode === 39) {
    evt.preventDefault();
    
    if (photoPopup44.classList.contains("modal__show")) {
      setTimeout(function() {
        photoPopup44.classList.remove("modal__show");
        photoPopup45.classList.add("modal__show");
      }, 10);
    }
  }
});
 
photoClose44.addEventListener("click", function (evt) {
  evt.preventDefault();
  photoPopup44.classList.remove("modal__show");
});
 
window.addEventListener("keyup", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    
    if (photoPopup44.classList.contains("modal__show")) {
      photoPopup44.classList.remove("modal__show");
    }
  }
});

 
// PHOTO-45
 
var photoLink45 = document.querySelector(".photo__link--45");
var photoPopup45 = document.querySelector(".modal__45");
var photoAfter45 = document.querySelector(".modal__45 .modal__photo-a");
var photoBefore45 = document.querySelector(".modal__45 .modal__photo-b");
var photoClose45 = document.querySelector(".modal__45 .modal__button-close");
var photoPrev45 = document.querySelector(".modal__45 .modal__button-prev");
var photoNext45 = document.querySelector(".modal__45 .modal__button-next");
 
photoLink45.addEventListener("click", function (evt) {
  evt.preventDefault();
  photoPopup45.classList.add("modal__show");
});
 
photoAfter45.addEventListener("mouseenter", function () {
  photoAfter45.classList.toggle("modal__photo-a");
  photoAfter45.classList.toggle("modal__photo-b");
  photoBefore45.classList.toggle("modal__photo-b");
  photoBefore45.classList.toggle("modal__photo-a");
});
 
photoBefore45.addEventListener("mouseout", function () {
  photoBefore45.classList.toggle("modal__photo-a");
  photoBefore45.classList.toggle("modal__photo-b");
  photoAfter45.classList.toggle("modal__photo-b");
  photoAfter45.classList.toggle("modal__photo-a");
});
 
photoAfter45.addEventListener("click", function () {
  photoAfter45.classList.toggle("modal__photo-a");
  photoAfter45.classList.toggle("modal__photo-b");
  photoBefore45.classList.toggle("modal__photo-b");
  photoBefore45.classList.toggle("modal__photo-a");
});
 
photoBefore45.addEventListener("click", function () {
  photoBefore45.classList.toggle("modal__photo-a");
  photoBefore45.classList.toggle("modal__photo-b");
  photoAfter45.classList.toggle("modal__photo-b");
  photoAfter45.classList.toggle("modal__photo-a");
});
 
photoPrev45.addEventListener("click", function(evt) {
  evt.preventDefault();
  photoPopup45.classList.remove("modal__show");
  photoPopup44.classList.add("modal__show");
})
 
window.addEventListener("keyup", function (evt) {
  if (evt.keyCode === 37) {
    evt.preventDefault();
    
    if (photoPopup45.classList.contains("modal__show")) {
      photoPopup45.classList.remove("modal__show");
      photoPopup44.classList.add("modal__show");
    }
  }
});
 
photoNext45.addEventListener("click", function(evt) {
  evt.preventDefault();
  photoPopup45.classList.remove("modal__show");
  photoPopup46.classList.add("modal__show");
})
 
window.addEventListener("keyup", function (evt) {
  if (evt.keyCode === 39) {
    evt.preventDefault();
    
    if (photoPopup45.classList.contains("modal__show")) {
      setTimeout(function() {
        photoPopup45.classList.remove("modal__show");
        photoPopup46.classList.add("modal__show");
      }, 10);
    }
  }
});
 
photoClose45.addEventListener("click", function (evt) {
  evt.preventDefault();
  photoPopup45.classList.remove("modal__show");
});
 
window.addEventListener("keyup", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    
    if (photoPopup45.classList.contains("modal__show")) {
      photoPopup45.classList.remove("modal__show");
    }
  }
});
 
 
// PHOTO-46
 
var photoLink46 = document.querySelector(".photo__link--46");
var photoPopup46 = document.querySelector(".modal__46");
var photoAfter46 = document.querySelector(".modal__46 .modal__photo-a");
var photoBefore46 = document.querySelector(".modal__46 .modal__photo-b");
var photoClose46 = document.querySelector(".modal__46 .modal__button-close");
var photoPrev46 = document.querySelector(".modal__46 .modal__button-prev");
var photoNext46 = document.querySelector(".modal__46 .modal__button-next");
 
photoLink46.addEventListener("click", function (evt) {
  evt.preventDefault();
  photoPopup46.classList.add("modal__show");
});
 
photoAfter46.addEventListener("mouseenter", function () {
  photoAfter46.classList.toggle("modal__photo-a");
  photoAfter46.classList.toggle("modal__photo-b");
  photoBefore46.classList.toggle("modal__photo-b");
  photoBefore46.classList.toggle("modal__photo-a");
});
 
photoBefore46.addEventListener("mouseout", function () {
  photoBefore46.classList.toggle("modal__photo-a");
  photoBefore46.classList.toggle("modal__photo-b");
  photoAfter46.classList.toggle("modal__photo-b");
  photoAfter46.classList.toggle("modal__photo-a");
});
 
photoAfter46.addEventListener("click", function () {
  photoAfter46.classList.toggle("modal__photo-a");
  photoAfter46.classList.toggle("modal__photo-b");
  photoBefore46.classList.toggle("modal__photo-b");
  photoBefore46.classList.toggle("modal__photo-a");
});
 
photoBefore46.addEventListener("click", function () {
  photoBefore46.classList.toggle("modal__photo-a");
  photoBefore46.classList.toggle("modal__photo-b");
  photoAfter46.classList.toggle("modal__photo-b");
  photoAfter46.classList.toggle("modal__photo-a");
});
 
photoPrev46.addEventListener("click", function(evt) {
  evt.preventDefault();
  photoPopup46.classList.remove("modal__show");
  photoPopup45.classList.add("modal__show");
})
 
window.addEventListener("keyup", function (evt) {
  if (evt.keyCode === 37) {
    evt.preventDefault();
    
    if (photoPopup46.classList.contains("modal__show")) {
      photoPopup46.classList.remove("modal__show");
      photoPopup45.classList.add("modal__show");
    }
  }
});
 
photoNext46.addEventListener("click", function(evt) {
  evt.preventDefault();
  photoPopup46.classList.remove("modal__show");
  photoPopup47.classList.add("modal__show");
})
 
window.addEventListener("keyup", function (evt) {
  if (evt.keyCode === 39) {
    evt.preventDefault();
    
    if (photoPopup46.classList.contains("modal__show")) {
      setTimeout(function() {
        photoPopup46.classList.remove("modal__show");
        photoPopup47.classList.add("modal__show");
      }, 10);
    }
  }
});
 
photoClose46.addEventListener("click", function (evt) {
  evt.preventDefault();
  photoPopup46.classList.remove("modal__show");
});
 
window.addEventListener("keyup", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    
    if (photoPopup46.classList.contains("modal__show")) {
      photoPopup46.classList.remove("modal__show");
    }
  }
});


// PHOTO-47
 
var photoLink47 = document.querySelector(".photo__link--47");
var photoPopup47 = document.querySelector(".modal__47");
var photoAfter47 = document.querySelector(".modal__47 .modal__photo-a");
var photoBefore47 = document.querySelector(".modal__47 .modal__photo-b");
var photoClose47 = document.querySelector(".modal__47 .modal__button-close");
var photoPrev47 = document.querySelector(".modal__47 .modal__button-prev");
var photoNext47 = document.querySelector(".modal__47 .modal__button-next");
 
photoLink47.addEventListener("click", function (evt) {
  evt.preventDefault();
  photoPopup47.classList.add("modal__show");
});
 
photoAfter47.addEventListener("mouseenter", function () {
  photoAfter47.classList.toggle("modal__photo-a");
  photoAfter47.classList.toggle("modal__photo-b");
  photoBefore47.classList.toggle("modal__photo-b");
  photoBefore47.classList.toggle("modal__photo-a");
});
 
photoBefore47.addEventListener("mouseout", function () {
  photoBefore47.classList.toggle("modal__photo-a");
  photoBefore47.classList.toggle("modal__photo-b");
  photoAfter47.classList.toggle("modal__photo-b");
  photoAfter47.classList.toggle("modal__photo-a");
});
 
photoAfter47.addEventListener("click", function () {
  photoAfter47.classList.toggle("modal__photo-a");
  photoAfter47.classList.toggle("modal__photo-b");
  photoBefore47.classList.toggle("modal__photo-b");
  photoBefore47.classList.toggle("modal__photo-a");
});
 
photoBefore47.addEventListener("click", function () {
  photoBefore47.classList.toggle("modal__photo-a");
  photoBefore47.classList.toggle("modal__photo-b");
  photoAfter47.classList.toggle("modal__photo-b");
  photoAfter47.classList.toggle("modal__photo-a");
});
 
photoPrev47.addEventListener("click", function(evt) {
  evt.preventDefault();
  photoPopup47.classList.remove("modal__show");
  photoPopup46.classList.add("modal__show");
})
 
window.addEventListener("keyup", function (evt) {
  if (evt.keyCode === 37) {
    evt.preventDefault();
    
    if (photoPopup47.classList.contains("modal__show")) {
      photoPopup47.classList.remove("modal__show");
      photoPopup46.classList.add("modal__show");
    }
  }
});
 
photoNext47.addEventListener("click", function(evt) {
  evt.preventDefault();
  photoPopup47.classList.remove("modal__show");
  photoPopup48.classList.add("modal__show");
})
 
window.addEventListener("keyup", function (evt) {
  if (evt.keyCode === 39) {
    evt.preventDefault();
    
    if (photoPopup47.classList.contains("modal__show")) {
      setTimeout(function() {
        photoPopup47.classList.remove("modal__show");
        photoPopup48.classList.add("modal__show");
      }, 10);
    }
  }
});
 
photoClose47.addEventListener("click", function (evt) {
  evt.preventDefault();
  photoPopup47.classList.remove("modal__show");
});
 
window.addEventListener("keyup", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    
    if (photoPopup47.classList.contains("modal__show")) {
      photoPopup47.classList.remove("modal__show");
    }
  }
});


// PHOTO-48
 
var photoLink48 = document.querySelector(".photo__link--48");
var photoPopup48 = document.querySelector(".modal__48");
var photoAfter48 = document.querySelector(".modal__48 .modal__photo-a");
var photoBefore48 = document.querySelector(".modal__48 .modal__photo-b");
var photoClose48 = document.querySelector(".modal__48 .modal__button-close");
var photoPrev48 = document.querySelector(".modal__48 .modal__button-prev");
var photoNext48 = document.querySelector(".modal__48 .modal__button-next");
 
photoLink48.addEventListener("click", function (evt) {
  evt.preventDefault();
  photoPopup48.classList.add("modal__show");
});
 
photoAfter48.addEventListener("mouseenter", function () {
  photoAfter48.classList.toggle("modal__photo-a");
  photoAfter48.classList.toggle("modal__photo-b");
  photoBefore48.classList.toggle("modal__photo-b");
  photoBefore48.classList.toggle("modal__photo-a");
});
 
photoBefore48.addEventListener("mouseout", function () {
  photoBefore48.classList.toggle("modal__photo-a");
  photoBefore48.classList.toggle("modal__photo-b");
  photoAfter48.classList.toggle("modal__photo-b");
  photoAfter48.classList.toggle("modal__photo-a");
});
 
photoAfter48.addEventListener("click", function () {
  photoAfter48.classList.toggle("modal__photo-a");
  photoAfter48.classList.toggle("modal__photo-b");
  photoBefore48.classList.toggle("modal__photo-b");
  photoBefore48.classList.toggle("modal__photo-a");
});
 
photoBefore48.addEventListener("click", function () {
  photoBefore48.classList.toggle("modal__photo-a");
  photoBefore48.classList.toggle("modal__photo-b");
  photoAfter48.classList.toggle("modal__photo-b");
  photoAfter48.classList.toggle("modal__photo-a");
});
 
photoPrev48.addEventListener("click", function(evt) {
  evt.preventDefault();
  photoPopup48.classList.remove("modal__show");
  photoPopup47.classList.add("modal__show");
})
 
window.addEventListener("keyup", function (evt) {
  if (evt.keyCode === 37) {
    evt.preventDefault();
    
    if (photoPopup48.classList.contains("modal__show")) {
      photoPopup48.classList.remove("modal__show");
      photoPopup47.classList.add("modal__show");
    }
  }
});
 
photoNext48.addEventListener("click", function(evt) {
  evt.preventDefault();
  photoPopup48.classList.remove("modal__show");
  photoPopup49.classList.add("modal__show");
})
 
window.addEventListener("keyup", function (evt) {
  if (evt.keyCode === 39) {
    evt.preventDefault();
    
    if (photoPopup48.classList.contains("modal__show")) {
      setTimeout(function() {
        photoPopup48.classList.remove("modal__show");
        photoPopup49.classList.add("modal__show");
      }, 10);
    }
  }
});
 
photoClose48.addEventListener("click", function (evt) {
  evt.preventDefault();
  photoPopup48.classList.remove("modal__show");
});
 
window.addEventListener("keyup", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    
    if (photoPopup48.classList.contains("modal__show")) {
      photoPopup48.classList.remove("modal__show");
    }
  }
});


// PHOTO-49
 
var photoLink49 = document.querySelector(".photo__link--49");
var photoPopup49 = document.querySelector(".modal__49");
var photoAfter49 = document.querySelector(".modal__49 .modal__photo-a");
var photoBefore49 = document.querySelector(".modal__49 .modal__photo-b");
var photoClose49 = document.querySelector(".modal__49 .modal__button-close");
var photoPrev49 = document.querySelector(".modal__49 .modal__button-prev");
var photoNext49 = document.querySelector(".modal__49 .modal__button-next");
 
photoLink49.addEventListener("click", function (evt) {
  evt.preventDefault();
  photoPopup49.classList.add("modal__show");
});
 
photoAfter49.addEventListener("mouseenter", function () {
  photoAfter49.classList.toggle("modal__photo-a");
  photoAfter49.classList.toggle("modal__photo-b");
  photoBefore49.classList.toggle("modal__photo-b");
  photoBefore49.classList.toggle("modal__photo-a");
});
 
photoBefore49.addEventListener("mouseout", function () {
  photoBefore49.classList.toggle("modal__photo-a");
  photoBefore49.classList.toggle("modal__photo-b");
  photoAfter49.classList.toggle("modal__photo-b");
  photoAfter49.classList.toggle("modal__photo-a");
});
 
photoAfter49.addEventListener("click", function () {
  photoAfter49.classList.toggle("modal__photo-a");
  photoAfter49.classList.toggle("modal__photo-b");
  photoBefore49.classList.toggle("modal__photo-b");
  photoBefore49.classList.toggle("modal__photo-a");
});
 
photoBefore49.addEventListener("click", function () {
  photoBefore49.classList.toggle("modal__photo-a");
  photoBefore49.classList.toggle("modal__photo-b");
  photoAfter49.classList.toggle("modal__photo-b");
  photoAfter49.classList.toggle("modal__photo-a");
});
 
photoPrev49.addEventListener("click", function(evt) {
  evt.preventDefault();
  photoPopup49.classList.remove("modal__show");
  photoPopup48.classList.add("modal__show");
})
 
window.addEventListener("keyup", function (evt) {
  if (evt.keyCode === 37) {
    evt.preventDefault();
    
    if (photoPopup49.classList.contains("modal__show")) {
      photoPopup49.classList.remove("modal__show");
      photoPopup48.classList.add("modal__show");
    }
  }
});
 
photoNext49.addEventListener("click", function(evt) {
  evt.preventDefault();
  photoPopup49.classList.remove("modal__show");
  photoPopup50.classList.add("modal__show");
})
 
window.addEventListener("keyup", function (evt) {
  if (evt.keyCode === 39) {
    evt.preventDefault();
    
    if (photoPopup49.classList.contains("modal__show")) {
      setTimeout(function() {
        photoPopup49.classList.remove("modal__show");
        photoPopup50.classList.add("modal__show");
      }, 10);
    }
  }
});
 
photoClose49.addEventListener("click", function (evt) {
  evt.preventDefault();
  photoPopup49.classList.remove("modal__show");
});
 
window.addEventListener("keyup", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    
    if (photoPopup49.classList.contains("modal__show")) {
      photoPopup49.classList.remove("modal__show");
    }
  }
});


// PHOTO-50
 
var photoLink50 = document.querySelector(".photo__link--50");
var photoPopup50 = document.querySelector(".modal__50");
var photoAfter50 = document.querySelector(".modal__50 .modal__photo-a");
var photoBefore50 = document.querySelector(".modal__50 .modal__photo-b");
var photoClose50 = document.querySelector(".modal__50 .modal__button-close");
var photoPrev50 = document.querySelector(".modal__50 .modal__button-prev");
var photoNext50 = document.querySelector(".modal__50 .modal__button-next");
 
photoLink50.addEventListener("click", function (evt) {
  evt.preventDefault();
  photoPopup50.classList.add("modal__show");
});
 
photoAfter50.addEventListener("mouseenter", function () {
  photoAfter50.classList.toggle("modal__photo-a");
  photoAfter50.classList.toggle("modal__photo-b");
  photoBefore50.classList.toggle("modal__photo-b");
  photoBefore50.classList.toggle("modal__photo-a");
});
 
photoBefore50.addEventListener("mouseout", function () {
  photoBefore50.classList.toggle("modal__photo-a");
  photoBefore50.classList.toggle("modal__photo-b");
  photoAfter50.classList.toggle("modal__photo-b");
  photoAfter50.classList.toggle("modal__photo-a");
});
 
photoAfter50.addEventListener("click", function () {
  photoAfter50.classList.toggle("modal__photo-a");
  photoAfter50.classList.toggle("modal__photo-b");
  photoBefore50.classList.toggle("modal__photo-b");
  photoBefore50.classList.toggle("modal__photo-a");
});
 
photoBefore50.addEventListener("click", function () {
  photoBefore50.classList.toggle("modal__photo-a");
  photoBefore50.classList.toggle("modal__photo-b");
  photoAfter50.classList.toggle("modal__photo-b");
  photoAfter50.classList.toggle("modal__photo-a");
});
 
photoPrev50.addEventListener("click", function(evt) {
  evt.preventDefault();
  photoPopup50.classList.remove("modal__show");
  photoPopup49.classList.add("modal__show");
})
 
window.addEventListener("keyup", function (evt) {
  if (evt.keyCode === 37) {
    evt.preventDefault();
    
    if (photoPopup50.classList.contains("modal__show")) {
      photoPopup50.classList.remove("modal__show");
      photoPopup49.classList.add("modal__show");
    }
  }
});
 
photoNext50.addEventListener("click", function(evt) {
  evt.preventDefault();
  photoPopup50.classList.remove("modal__show");
  photoPopup51.classList.add("modal__show");
})
 
window.addEventListener("keyup", function (evt) {
  if (evt.keyCode === 39) {
    evt.preventDefault();
    
    if (photoPopup50.classList.contains("modal__show")) {
      setTimeout(function() {
        photoPopup50.classList.remove("modal__show");
        photoPopup51.classList.add("modal__show");
      }, 10);
    }
  }
});
 
photoClose50.addEventListener("click", function (evt) {
  evt.preventDefault();
  photoPopup50.classList.remove("modal__show");
});
 
window.addEventListener("keyup", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    
    if (photoPopup50.classList.contains("modal__show")) {
      photoPopup50.classList.remove("modal__show");
    }
  }
});


// PHOTO-51
 
var photoLink51 = document.querySelector(".photo__link--51");
var photoPopup51 = document.querySelector(".modal__51");
var photoAfter51 = document.querySelector(".modal__51 .modal__photo-a");
var photoBefore51 = document.querySelector(".modal__51 .modal__photo-b");
var photoClose51 = document.querySelector(".modal__51 .modal__button-close");
var photoPrev51 = document.querySelector(".modal__51 .modal__button-prev");
var photoNext51 = document.querySelector(".modal__51 .modal__button-next");
 
photoLink51.addEventListener("click", function (evt) {
  evt.preventDefault();
  photoPopup51.classList.add("modal__show");
});
 
photoAfter51.addEventListener("mouseenter", function () {
  photoAfter51.classList.toggle("modal__photo-a");
  photoAfter51.classList.toggle("modal__photo-b");
  photoBefore51.classList.toggle("modal__photo-b");
  photoBefore51.classList.toggle("modal__photo-a");
});
 
photoBefore51.addEventListener("mouseout", function () {
  photoBefore51.classList.toggle("modal__photo-a");
  photoBefore51.classList.toggle("modal__photo-b");
  photoAfter51.classList.toggle("modal__photo-b");
  photoAfter51.classList.toggle("modal__photo-a");
});
 
photoAfter51.addEventListener("click", function () {
  photoAfter51.classList.toggle("modal__photo-a");
  photoAfter51.classList.toggle("modal__photo-b");
  photoBefore51.classList.toggle("modal__photo-b");
  photoBefore51.classList.toggle("modal__photo-a");
});
 
photoBefore51.addEventListener("click", function () {
  photoBefore51.classList.toggle("modal__photo-a");
  photoBefore51.classList.toggle("modal__photo-b");
  photoAfter51.classList.toggle("modal__photo-b");
  photoAfter51.classList.toggle("modal__photo-a");
});
 
photoPrev51.addEventListener("click", function(evt) {
  evt.preventDefault();
  photoPopup51.classList.remove("modal__show");
  photoPopup50.classList.add("modal__show");
})
 
window.addEventListener("keyup", function (evt) {
  if (evt.keyCode === 37) {
    evt.preventDefault();
    
    if (photoPopup51.classList.contains("modal__show")) {
      photoPopup51.classList.remove("modal__show");
      photoPopup50.classList.add("modal__show");
    }
  }
});
 
photoNext51.addEventListener("click", function(evt) {
  evt.preventDefault();
  photoPopup51.classList.remove("modal__show");
  photoPopup52.classList.add("modal__show");
})
 
window.addEventListener("keyup", function (evt) {
  if (evt.keyCode === 39) {
    evt.preventDefault();
    
    if (photoPopup51.classList.contains("modal__show")) {
      setTimeout(function() {
        photoPopup51.classList.remove("modal__show");
        photoPopup52.classList.add("modal__show");
      }, 10);
    }
  }
});
 
photoClose51.addEventListener("click", function (evt) {
  evt.preventDefault();
  photoPopup51.classList.remove("modal__show");
});
 
window.addEventListener("keyup", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    
    if (photoPopup51.classList.contains("modal__show")) {
      photoPopup51.classList.remove("modal__show");
    }
  }
});


// PHOTO-52
 
var photoLink52 = document.querySelector(".photo__link--52");
var photoPopup52 = document.querySelector(".modal__52");
var photoAfter52 = document.querySelector(".modal__52 .modal__photo-a");
var photoBefore52 = document.querySelector(".modal__52 .modal__photo-b");
var photoClose52 = document.querySelector(".modal__52 .modal__button-close");
var photoPrev52 = document.querySelector(".modal__52 .modal__button-prev");
var photoNext52 = document.querySelector(".modal__52 .modal__button-next");
 
photoLink52.addEventListener("click", function (evt) {
  evt.preventDefault();
  photoPopup52.classList.add("modal__show");
});
 
photoAfter52.addEventListener("mouseenter", function () {
  photoAfter52.classList.toggle("modal__photo-a");
  photoAfter52.classList.toggle("modal__photo-b");
  photoBefore52.classList.toggle("modal__photo-b");
  photoBefore52.classList.toggle("modal__photo-a");
});
 
photoBefore52.addEventListener("mouseout", function () {
  photoBefore52.classList.toggle("modal__photo-a");
  photoBefore52.classList.toggle("modal__photo-b");
  photoAfter52.classList.toggle("modal__photo-b");
  photoAfter52.classList.toggle("modal__photo-a");
});
 
photoAfter52.addEventListener("click", function () {
  photoAfter52.classList.toggle("modal__photo-a");
  photoAfter52.classList.toggle("modal__photo-b");
  photoBefore52.classList.toggle("modal__photo-b");
  photoBefore52.classList.toggle("modal__photo-a");
});
 
photoBefore52.addEventListener("click", function () {
  photoBefore52.classList.toggle("modal__photo-a");
  photoBefore52.classList.toggle("modal__photo-b");
  photoAfter52.classList.toggle("modal__photo-b");
  photoAfter52.classList.toggle("modal__photo-a");
});
 
photoPrev52.addEventListener("click", function(evt) {
  evt.preventDefault();
  photoPopup52.classList.remove("modal__show");
  photoPopup51.classList.add("modal__show");
})
 
window.addEventListener("keyup", function (evt) {
  if (evt.keyCode === 37) {
    evt.preventDefault();
    
    if (photoPopup52.classList.contains("modal__show")) {
      photoPopup52.classList.remove("modal__show");
      photoPopup51.classList.add("modal__show");
    }
  }
});
 
photoNext52.addEventListener("click", function(evt) {
  evt.preventDefault();
  photoPopup52.classList.remove("modal__show");
  photoPopup53.classList.add("modal__show");
})
 
window.addEventListener("keyup", function (evt) {
  if (evt.keyCode === 39) {
    evt.preventDefault();
    
    if (photoPopup52.classList.contains("modal__show")) {
      setTimeout(function() {
        photoPopup52.classList.remove("modal__show");
        photoPopup53.classList.add("modal__show");
      }, 10);
    }
  }
});
 
photoClose52.addEventListener("click", function (evt) {
  evt.preventDefault();
  photoPopup52.classList.remove("modal__show");
});
 
window.addEventListener("keyup", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    
    if (photoPopup52.classList.contains("modal__show")) {
      photoPopup52.classList.remove("modal__show");
    }
  }
});


// PHOTO-53
 
var photoLink53 = document.querySelector(".photo__link--53");
var photoPopup53 = document.querySelector(".modal__53");
var photoAfter53 = document.querySelector(".modal__53 .modal__photo-a");
var photoBefore53 = document.querySelector(".modal__53 .modal__photo-b");
var photoClose53 = document.querySelector(".modal__53 .modal__button-close");
var photoPrev53 = document.querySelector(".modal__53 .modal__button-prev");
var photoNext53 = document.querySelector(".modal__53 .modal__button-next");
 
photoLink53.addEventListener("click", function (evt) {
  evt.preventDefault();
  photoPopup53.classList.add("modal__show");
});
 
photoAfter53.addEventListener("mouseenter", function () {
  photoAfter53.classList.toggle("modal__photo-a");
  photoAfter53.classList.toggle("modal__photo-b");
  photoBefore53.classList.toggle("modal__photo-b");
  photoBefore53.classList.toggle("modal__photo-a");
});
 
photoBefore53.addEventListener("mouseout", function () {
  photoBefore53.classList.toggle("modal__photo-a");
  photoBefore53.classList.toggle("modal__photo-b");
  photoAfter53.classList.toggle("modal__photo-b");
  photoAfter53.classList.toggle("modal__photo-a");
});
 
photoAfter53.addEventListener("click", function () {
  photoAfter53.classList.toggle("modal__photo-a");
  photoAfter53.classList.toggle("modal__photo-b");
  photoBefore53.classList.toggle("modal__photo-b");
  photoBefore53.classList.toggle("modal__photo-a");
});
 
photoBefore53.addEventListener("click", function () {
  photoBefore53.classList.toggle("modal__photo-a");
  photoBefore53.classList.toggle("modal__photo-b");
  photoAfter53.classList.toggle("modal__photo-b");
  photoAfter53.classList.toggle("modal__photo-a");
});
 
photoPrev53.addEventListener("click", function(evt) {
  evt.preventDefault();
  photoPopup53.classList.remove("modal__show");
  photoPopup52.classList.add("modal__show");
})
 
window.addEventListener("keyup", function (evt) {
  if (evt.keyCode === 37) {
    evt.preventDefault();
    
    if (photoPopup53.classList.contains("modal__show")) {
      photoPopup53.classList.remove("modal__show");
      photoPopup52.classList.add("modal__show");
    }
  }
});
 
photoNext53.addEventListener("click", function(evt) {
  evt.preventDefault();
  photoPopup53.classList.remove("modal__show");
  photoPopup54.classList.add("modal__show");
})
 
window.addEventListener("keyup", function (evt) {
  if (evt.keyCode === 39) {
    evt.preventDefault();
    
    if (photoPopup53.classList.contains("modal__show")) {
      setTimeout(function() {
        photoPopup53.classList.remove("modal__show");
        photoPopup54.classList.add("modal__show");
      }, 10);
    }
  }
});
 
photoClose53.addEventListener("click", function (evt) {
  evt.preventDefault();
  photoPopup53.classList.remove("modal__show");
});
 
window.addEventListener("keyup", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    
    if (photoPopup53.classList.contains("modal__show")) {
      photoPopup53.classList.remove("modal__show");
    }
  }
});


// PHOTO-54
 
var photoLink54 = document.querySelector(".photo__link--54");
var photoPopup54 = document.querySelector(".modal__54");
var photoAfter54 = document.querySelector(".modal__54 .modal__photo-a");
var photoBefore54 = document.querySelector(".modal__54 .modal__photo-b");
var photoClose54 = document.querySelector(".modal__54 .modal__button-close");
var photoPrev54 = document.querySelector(".modal__54 .modal__button-prev");
var photoNext54 = document.querySelector(".modal__54 .modal__button-next");
 
photoLink54.addEventListener("click", function (evt) {
  evt.preventDefault();
  photoPopup54.classList.add("modal__show");
});
 
photoAfter54.addEventListener("mouseenter", function () {
  photoAfter54.classList.toggle("modal__photo-a");
  photoAfter54.classList.toggle("modal__photo-b");
  photoBefore54.classList.toggle("modal__photo-b");
  photoBefore54.classList.toggle("modal__photo-a");
});
 
photoBefore54.addEventListener("mouseout", function () {
  photoBefore54.classList.toggle("modal__photo-a");
  photoBefore54.classList.toggle("modal__photo-b");
  photoAfter54.classList.toggle("modal__photo-b");
  photoAfter54.classList.toggle("modal__photo-a");
});
 
photoAfter54.addEventListener("click", function () {
  photoAfter54.classList.toggle("modal__photo-a");
  photoAfter54.classList.toggle("modal__photo-b");
  photoBefore54.classList.toggle("modal__photo-b");
  photoBefore54.classList.toggle("modal__photo-a");
});
 
photoBefore54.addEventListener("click", function () {
  photoBefore54.classList.toggle("modal__photo-a");
  photoBefore54.classList.toggle("modal__photo-b");
  photoAfter54.classList.toggle("modal__photo-b");
  photoAfter54.classList.toggle("modal__photo-a");
});
 
photoPrev54.addEventListener("click", function(evt) {
  evt.preventDefault();
  photoPopup54.classList.remove("modal__show");
  photoPopup53.classList.add("modal__show");
})
 
window.addEventListener("keyup", function (evt) {
  if (evt.keyCode === 37) {
    evt.preventDefault();
    
    if (photoPopup54.classList.contains("modal__show")) {
      photoPopup54.classList.remove("modal__show");
      photoPopup53.classList.add("modal__show");
    }
  }
});
 
photoNext54.addEventListener("click", function(evt) {
  evt.preventDefault();
  photoPopup54.classList.remove("modal__show");
  photoPopup55.classList.add("modal__show");
})
 
window.addEventListener("keyup", function (evt) {
  if (evt.keyCode === 39) {
    evt.preventDefault();
    
    if (photoPopup54.classList.contains("modal__show")) {
      setTimeout(function() {
        photoPopup54.classList.remove("modal__show");
        photoPopup55.classList.add("modal__show");
      }, 10);
    }
  }
});
 
photoClose54.addEventListener("click", function (evt) {
  evt.preventDefault();
  photoPopup54.classList.remove("modal__show");
});
 
window.addEventListener("keyup", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    
    if (photoPopup54.classList.contains("modal__show")) {
      photoPopup54.classList.remove("modal__show");
    }
  }
});

 
// PHOTO-55
 
var photoLink55 = document.querySelector(".photo__link--55");
var photoPopup55 = document.querySelector(".modal__55");
var photoAfter55 = document.querySelector(".modal__55 .modal__photo-a");
var photoBefore55 = document.querySelector(".modal__55 .modal__photo-b");
var photoClose55 = document.querySelector(".modal__55 .modal__button-close");
var photoPrev55 = document.querySelector(".modal__55 .modal__button-prev");
var photoNext55 = document.querySelector(".modal__55 .modal__button-next");
 
photoLink55.addEventListener("click", function (evt) {
  evt.preventDefault();
  photoPopup55.classList.add("modal__show");
});
 
photoAfter55.addEventListener("mouseenter", function () {
  photoAfter55.classList.toggle("modal__photo-a");
  photoAfter55.classList.toggle("modal__photo-b");
  photoBefore55.classList.toggle("modal__photo-b");
  photoBefore55.classList.toggle("modal__photo-a");
});
 
photoBefore55.addEventListener("mouseout", function () {
  photoBefore55.classList.toggle("modal__photo-a");
  photoBefore55.classList.toggle("modal__photo-b");
  photoAfter55.classList.toggle("modal__photo-b");
  photoAfter55.classList.toggle("modal__photo-a");
});
 
photoAfter55.addEventListener("click", function () {
  photoAfter55.classList.toggle("modal__photo-a");
  photoAfter55.classList.toggle("modal__photo-b");
  photoBefore55.classList.toggle("modal__photo-b");
  photoBefore55.classList.toggle("modal__photo-a");
});
 
photoBefore55.addEventListener("click", function () {
  photoBefore55.classList.toggle("modal__photo-a");
  photoBefore55.classList.toggle("modal__photo-b");
  photoAfter55.classList.toggle("modal__photo-b");
  photoAfter55.classList.toggle("modal__photo-a");
});
 
photoPrev55.addEventListener("click", function(evt) {
  evt.preventDefault();
  photoPopup55.classList.remove("modal__show");
  photoPopup54.classList.add("modal__show");
})
 
window.addEventListener("keyup", function (evt) {
  if (evt.keyCode === 37) {
    evt.preventDefault();
    
    if (photoPopup55.classList.contains("modal__show")) {
      photoPopup55.classList.remove("modal__show");
      photoPopup54.classList.add("modal__show");
    }
  }
});
 
photoNext55.addEventListener("click", function(evt) {
  evt.preventDefault();
  photoPopup55.classList.remove("modal__show");
  photoPopup56.classList.add("modal__show");
})
 
window.addEventListener("keyup", function (evt) {
  if (evt.keyCode === 39) {
    evt.preventDefault();
    
    if (photoPopup55.classList.contains("modal__show")) {
      setTimeout(function() {
        photoPopup55.classList.remove("modal__show");
        photoPopup56.classList.add("modal__show");
      }, 10);
    }
  }
});
 
photoClose55.addEventListener("click", function (evt) {
  evt.preventDefault();
  photoPopup55.classList.remove("modal__show");
});
 
window.addEventListener("keyup", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    
    if (photoPopup55.classList.contains("modal__show")) {
      photoPopup55.classList.remove("modal__show");
    }
  }
});
 
 
// PHOTO-56
 
var photoLink56 = document.querySelector(".photo__link--56");
var photoPopup56 = document.querySelector(".modal__56");
var photoAfter56 = document.querySelector(".modal__56 .modal__photo-a");
var photoBefore56 = document.querySelector(".modal__56 .modal__photo-b");
var photoClose56 = document.querySelector(".modal__56 .modal__button-close");
var photoPrev56 = document.querySelector(".modal__56 .modal__button-prev");
var photoNext56 = document.querySelector(".modal__56 .modal__button-next");
 
photoLink56.addEventListener("click", function (evt) {
  evt.preventDefault();
  photoPopup56.classList.add("modal__show");
});
 
photoAfter56.addEventListener("mouseenter", function () {
  photoAfter56.classList.toggle("modal__photo-a");
  photoAfter56.classList.toggle("modal__photo-b");
  photoBefore56.classList.toggle("modal__photo-b");
  photoBefore56.classList.toggle("modal__photo-a");
});
 
photoBefore56.addEventListener("mouseout", function () {
  photoBefore56.classList.toggle("modal__photo-a");
  photoBefore56.classList.toggle("modal__photo-b");
  photoAfter56.classList.toggle("modal__photo-b");
  photoAfter56.classList.toggle("modal__photo-a");
});
 
photoAfter56.addEventListener("click", function () {
  photoAfter56.classList.toggle("modal__photo-a");
  photoAfter56.classList.toggle("modal__photo-b");
  photoBefore56.classList.toggle("modal__photo-b");
  photoBefore56.classList.toggle("modal__photo-a");
});
 
photoBefore56.addEventListener("click", function () {
  photoBefore56.classList.toggle("modal__photo-a");
  photoBefore56.classList.toggle("modal__photo-b");
  photoAfter56.classList.toggle("modal__photo-b");
  photoAfter56.classList.toggle("modal__photo-a");
});
 
photoPrev56.addEventListener("click", function(evt) {
  evt.preventDefault();
  photoPopup56.classList.remove("modal__show");
  photoPopup55.classList.add("modal__show");
})
 
window.addEventListener("keyup", function (evt) {
  if (evt.keyCode === 37) {
    evt.preventDefault();
    
    if (photoPopup56.classList.contains("modal__show")) {
      photoPopup56.classList.remove("modal__show");
      photoPopup55.classList.add("modal__show");
    }
  }
});
 
photoNext56.addEventListener("click", function(evt) {
  evt.preventDefault();
  photoPopup56.classList.remove("modal__show");
  photoPopup57.classList.add("modal__show");
})
 
window.addEventListener("keyup", function (evt) {
  if (evt.keyCode === 39) {
    evt.preventDefault();
    
    if (photoPopup56.classList.contains("modal__show")) {
      setTimeout(function() {
        photoPopup56.classList.remove("modal__show");
        photoPopup57.classList.add("modal__show");
      }, 10);
    }
  }
});
 
photoClose56.addEventListener("click", function (evt) {
  evt.preventDefault();
  photoPopup56.classList.remove("modal__show");
});
 
window.addEventListener("keyup", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    
    if (photoPopup56.classList.contains("modal__show")) {
      photoPopup56.classList.remove("modal__show");
    }
  }
});


// PHOTO-57
 
var photoLink57 = document.querySelector(".photo__link--57");
var photoPopup57 = document.querySelector(".modal__57");
var photoAfter57 = document.querySelector(".modal__57 .modal__photo-a");
var photoBefore57 = document.querySelector(".modal__57 .modal__photo-b");
var photoClose57 = document.querySelector(".modal__57 .modal__button-close");
var photoPrev57 = document.querySelector(".modal__57 .modal__button-prev");
var photoNext57 = document.querySelector(".modal__57 .modal__button-next");
 
photoLink57.addEventListener("click", function (evt) {
  evt.preventDefault();
  photoPopup57.classList.add("modal__show");
});
 
photoAfter57.addEventListener("mouseenter", function () {
  photoAfter57.classList.toggle("modal__photo-a");
  photoAfter57.classList.toggle("modal__photo-b");
  photoBefore57.classList.toggle("modal__photo-b");
  photoBefore57.classList.toggle("modal__photo-a");
});
 
photoBefore57.addEventListener("mouseout", function () {
  photoBefore57.classList.toggle("modal__photo-a");
  photoBefore57.classList.toggle("modal__photo-b");
  photoAfter57.classList.toggle("modal__photo-b");
  photoAfter57.classList.toggle("modal__photo-a");
});
 
photoAfter57.addEventListener("click", function () {
  photoAfter57.classList.toggle("modal__photo-a");
  photoAfter57.classList.toggle("modal__photo-b");
  photoBefore57.classList.toggle("modal__photo-b");
  photoBefore57.classList.toggle("modal__photo-a");
});
 
photoBefore57.addEventListener("click", function () {
  photoBefore57.classList.toggle("modal__photo-a");
  photoBefore57.classList.toggle("modal__photo-b");
  photoAfter57.classList.toggle("modal__photo-b");
  photoAfter57.classList.toggle("modal__photo-a");
});
 
photoPrev57.addEventListener("click", function(evt) {
  evt.preventDefault();
  photoPopup57.classList.remove("modal__show");
  photoPopup56.classList.add("modal__show");
})
 
window.addEventListener("keyup", function (evt) {
  if (evt.keyCode === 37) {
    evt.preventDefault();
    
    if (photoPopup57.classList.contains("modal__show")) {
      photoPopup57.classList.remove("modal__show");
      photoPopup56.classList.add("modal__show");
    }
  }
});
 
photoNext57.addEventListener("click", function(evt) {
  evt.preventDefault();
  photoPopup57.classList.remove("modal__show");
  photoPopup58.classList.add("modal__show");
})
 
window.addEventListener("keyup", function (evt) {
  if (evt.keyCode === 39) {
    evt.preventDefault();
    
    if (photoPopup57.classList.contains("modal__show")) {
      setTimeout(function() {
        photoPopup57.classList.remove("modal__show");
        photoPopup58.classList.add("modal__show");
      }, 10);
    }
  }
});
 
photoClose57.addEventListener("click", function (evt) {
  evt.preventDefault();
  photoPopup57.classList.remove("modal__show");
});
 
window.addEventListener("keyup", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    
    if (photoPopup57.classList.contains("modal__show")) {
      photoPopup57.classList.remove("modal__show");
    }
  }
});


// PHOTO-58
 
var photoLink58 = document.querySelector(".photo__link--58");
var photoPopup58 = document.querySelector(".modal__58");
var photoAfter58 = document.querySelector(".modal__58 .modal__photo-a");
var photoBefore58 = document.querySelector(".modal__58 .modal__photo-b");
var photoClose58 = document.querySelector(".modal__58 .modal__button-close");
var photoPrev58 = document.querySelector(".modal__58 .modal__button-prev");
var photoNext58 = document.querySelector(".modal__58 .modal__button-next");
 
photoLink58.addEventListener("click", function (evt) {
  evt.preventDefault();
  photoPopup58.classList.add("modal__show");
});
 
photoAfter58.addEventListener("mouseenter", function () {
  photoAfter58.classList.toggle("modal__photo-a");
  photoAfter58.classList.toggle("modal__photo-b");
  photoBefore58.classList.toggle("modal__photo-b");
  photoBefore58.classList.toggle("modal__photo-a");
});
 
photoBefore58.addEventListener("mouseout", function () {
  photoBefore58.classList.toggle("modal__photo-a");
  photoBefore58.classList.toggle("modal__photo-b");
  photoAfter58.classList.toggle("modal__photo-b");
  photoAfter58.classList.toggle("modal__photo-a");
});
 
photoAfter58.addEventListener("click", function () {
  photoAfter58.classList.toggle("modal__photo-a");
  photoAfter58.classList.toggle("modal__photo-b");
  photoBefore58.classList.toggle("modal__photo-b");
  photoBefore58.classList.toggle("modal__photo-a");
});
 
photoBefore58.addEventListener("click", function () {
  photoBefore58.classList.toggle("modal__photo-a");
  photoBefore58.classList.toggle("modal__photo-b");
  photoAfter58.classList.toggle("modal__photo-b");
  photoAfter58.classList.toggle("modal__photo-a");
});
 
photoPrev58.addEventListener("click", function(evt) {
  evt.preventDefault();
  photoPopup58.classList.remove("modal__show");
  photoPopup57.classList.add("modal__show");
})
 
window.addEventListener("keyup", function (evt) {
  if (evt.keyCode === 37) {
    evt.preventDefault();
    
    if (photoPopup58.classList.contains("modal__show")) {
      photoPopup58.classList.remove("modal__show");
      photoPopup57.classList.add("modal__show");
    }
  }
});
 
photoNext58.addEventListener("click", function(evt) {
  evt.preventDefault();
  photoPopup58.classList.remove("modal__show");
  photoPopup59.classList.add("modal__show");
})
 
window.addEventListener("keyup", function (evt) {
  if (evt.keyCode === 39) {
    evt.preventDefault();
    
    if (photoPopup58.classList.contains("modal__show")) {
      setTimeout(function() {
        photoPopup58.classList.remove("modal__show");
        photoPopup59.classList.add("modal__show");
      }, 10);
    }
  }
});
 
photoClose58.addEventListener("click", function (evt) {
  evt.preventDefault();
  photoPopup58.classList.remove("modal__show");
});
 
window.addEventListener("keyup", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    
    if (photoPopup58.classList.contains("modal__show")) {
      photoPopup58.classList.remove("modal__show");
    }
  }
});


// PHOTO-59
 
var photoLink59 = document.querySelector(".photo__link--59");
var photoPopup59 = document.querySelector(".modal__59");
var photoAfter59 = document.querySelector(".modal__59 .modal__photo-a");
var photoBefore59 = document.querySelector(".modal__59 .modal__photo-b");
var photoClose59 = document.querySelector(".modal__59 .modal__button-close");
var photoPrev59 = document.querySelector(".modal__59 .modal__button-prev");
var photoNext59 = document.querySelector(".modal__59 .modal__button-next");
 
photoLink59.addEventListener("click", function (evt) {
  evt.preventDefault();
  photoPopup59.classList.add("modal__show");
});
 
photoAfter59.addEventListener("mouseenter", function () {
  photoAfter59.classList.toggle("modal__photo-a");
  photoAfter59.classList.toggle("modal__photo-b");
  photoBefore59.classList.toggle("modal__photo-b");
  photoBefore59.classList.toggle("modal__photo-a");
});
 
photoBefore59.addEventListener("mouseout", function () {
  photoBefore59.classList.toggle("modal__photo-a");
  photoBefore59.classList.toggle("modal__photo-b");
  photoAfter59.classList.toggle("modal__photo-b");
  photoAfter59.classList.toggle("modal__photo-a");
});
 
photoAfter59.addEventListener("click", function () {
  photoAfter59.classList.toggle("modal__photo-a");
  photoAfter59.classList.toggle("modal__photo-b");
  photoBefore59.classList.toggle("modal__photo-b");
  photoBefore59.classList.toggle("modal__photo-a");
});
 
photoBefore59.addEventListener("click", function () {
  photoBefore59.classList.toggle("modal__photo-a");
  photoBefore59.classList.toggle("modal__photo-b");
  photoAfter59.classList.toggle("modal__photo-b");
  photoAfter59.classList.toggle("modal__photo-a");
});
 
photoPrev59.addEventListener("click", function(evt) {
  evt.preventDefault();
  photoPopup59.classList.remove("modal__show");
  photoPopup58.classList.add("modal__show");
})
 
window.addEventListener("keyup", function (evt) {
  if (evt.keyCode === 37) {
    evt.preventDefault();
    
    if (photoPopup59.classList.contains("modal__show")) {
      photoPopup59.classList.remove("modal__show");
      photoPopup58.classList.add("modal__show");
    }
  }
});
 
photoNext59.addEventListener("click", function(evt) {
  evt.preventDefault();
  photoPopup59.classList.remove("modal__show");
  photoPopup60.classList.add("modal__show");
})
 
window.addEventListener("keyup", function (evt) {
  if (evt.keyCode === 39) {
    evt.preventDefault();
    
    if (photoPopup59.classList.contains("modal__show")) {
      setTimeout(function() {
        photoPopup59.classList.remove("modal__show");
        photoPopup60.classList.add("modal__show");
      }, 10);
    }
  }
});
 
photoClose59.addEventListener("click", function (evt) {
  evt.preventDefault();
  photoPopup59.classList.remove("modal__show");
});
 
window.addEventListener("keyup", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    
    if (photoPopup59.classList.contains("modal__show")) {
      photoPopup59.classList.remove("modal__show");
    }
  }
});


// PHOTO-60
 
var photoLink60 = document.querySelector(".photo__link--60");
var photoPopup60 = document.querySelector(".modal__60");
var photoAfter60 = document.querySelector(".modal__60 .modal__photo-a");
var photoBefore60 = document.querySelector(".modal__60 .modal__photo-b");
var photoClose60 = document.querySelector(".modal__60 .modal__button-close");
var photoPrev60 = document.querySelector(".modal__60 .modal__button-prev");
var photoNext60 = document.querySelector(".modal__60 .modal__button-next");
 
photoLink60.addEventListener("click", function (evt) {
  evt.preventDefault();
  photoPopup60.classList.add("modal__show");
});
 
photoAfter60.addEventListener("mouseenter", function () {
  photoAfter60.classList.toggle("modal__photo-a");
  photoAfter60.classList.toggle("modal__photo-b");
  photoBefore60.classList.toggle("modal__photo-b");
  photoBefore60.classList.toggle("modal__photo-a");
});
 
photoBefore60.addEventListener("mouseout", function () {
  photoBefore60.classList.toggle("modal__photo-a");
  photoBefore60.classList.toggle("modal__photo-b");
  photoAfter60.classList.toggle("modal__photo-b");
  photoAfter60.classList.toggle("modal__photo-a");
});
 
photoAfter60.addEventListener("click", function () {
  photoAfter60.classList.toggle("modal__photo-a");
  photoAfter60.classList.toggle("modal__photo-b");
  photoBefore60.classList.toggle("modal__photo-b");
  photoBefore60.classList.toggle("modal__photo-a");
});
 
photoBefore60.addEventListener("click", function () {
  photoBefore60.classList.toggle("modal__photo-a");
  photoBefore60.classList.toggle("modal__photo-b");
  photoAfter60.classList.toggle("modal__photo-b");
  photoAfter60.classList.toggle("modal__photo-a");
});
 
photoPrev60.addEventListener("click", function(evt) {
  evt.preventDefault();
  photoPopup60.classList.remove("modal__show");
  photoPopup59.classList.add("modal__show");
})
 
window.addEventListener("keyup", function (evt) {
  if (evt.keyCode === 37) {
    evt.preventDefault();
    
    if (photoPopup60.classList.contains("modal__show")) {
      photoPopup60.classList.remove("modal__show");
      photoPopup59.classList.add("modal__show");
    }
  }
});
 
photoNext60.addEventListener("click", function(evt) {
  evt.preventDefault();
  photoPopup60.classList.remove("modal__show");
  photoPopup61.classList.add("modal__show");
})
 
window.addEventListener("keyup", function (evt) {
  if (evt.keyCode === 39) {
    evt.preventDefault();
    
    if (photoPopup60.classList.contains("modal__show")) {
      setTimeout(function() {
        photoPopup60.classList.remove("modal__show");
        photoPopup61.classList.add("modal__show");
      }, 10);
    }
  }
});
 
photoClose60.addEventListener("click", function (evt) {
  evt.preventDefault();
  photoPopup60.classList.remove("modal__show");
});
 
window.addEventListener("keyup", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    
    if (photoPopup60.classList.contains("modal__show")) {
      photoPopup60.classList.remove("modal__show");
    }
  }
});




// PHOTO-61
 
var photoLink61 = document.querySelector(".photo__link--61");
var photoPopup61 = document.querySelector(".modal__61");
var photoAfter61 = document.querySelector(".modal__61 .modal__photo-a");
var photoBefore61 = document.querySelector(".modal__61 .modal__photo-b");
var photoClose61 = document.querySelector(".modal__61 .modal__button-close");
var photoPrev61 = document.querySelector(".modal__61 .modal__button-prev");
var photoNext61 = document.querySelector(".modal__61 .modal__button-next");
 
photoLink61.addEventListener("click", function (evt) {
  evt.preventDefault();
  photoPopup61.classList.add("modal__show");
});
 
photoAfter61.addEventListener("mouseenter", function () {
  photoAfter61.classList.toggle("modal__photo-a");
  photoAfter61.classList.toggle("modal__photo-b");
  photoBefore61.classList.toggle("modal__photo-b");
  photoBefore61.classList.toggle("modal__photo-a");
});
 
photoBefore61.addEventListener("mouseout", function () {
  photoBefore61.classList.toggle("modal__photo-a");
  photoBefore61.classList.toggle("modal__photo-b");
  photoAfter61.classList.toggle("modal__photo-b");
  photoAfter61.classList.toggle("modal__photo-a");
});
 
photoAfter61.addEventListener("click", function () {
  photoAfter61.classList.toggle("modal__photo-a");
  photoAfter61.classList.toggle("modal__photo-b");
  photoBefore61.classList.toggle("modal__photo-b");
  photoBefore61.classList.toggle("modal__photo-a");
});
 
photoBefore61.addEventListener("click", function () {
  photoBefore61.classList.toggle("modal__photo-a");
  photoBefore61.classList.toggle("modal__photo-b");
  photoAfter61.classList.toggle("modal__photo-b");
  photoAfter61.classList.toggle("modal__photo-a");
});
 
photoPrev61.addEventListener("click", function(evt) {
  evt.preventDefault();
  photoPopup61.classList.remove("modal__show");
  photoPopup60.classList.add("modal__show");
})
 
window.addEventListener("keyup", function (evt) {
  if (evt.keyCode === 37) {
    evt.preventDefault();
    
    if (photoPopup61.classList.contains("modal__show")) {
      photoPopup61.classList.remove("modal__show");
      photoPopup60.classList.add("modal__show");
    }
  }
});
 
photoNext61.addEventListener("click", function(evt) {
  evt.preventDefault();
  photoPopup61.classList.remove("modal__show");
  photoPopup62.classList.add("modal__show");
})
 
window.addEventListener("keyup", function (evt) {
  if (evt.keyCode === 39) {
    evt.preventDefault();
    
    if (photoPopup61.classList.contains("modal__show")) {
      setTimeout(function() {
        photoPopup61.classList.remove("modal__show");
        photoPopup62.classList.add("modal__show");
      }, 10);
    }
  }
});
 
photoClose61.addEventListener("click", function (evt) {
  evt.preventDefault();
  photoPopup61.classList.remove("modal__show");
});
 
window.addEventListener("keyup", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    
    if (photoPopup61.classList.contains("modal__show")) {
      photoPopup61.classList.remove("modal__show");
    }
  }
});


// PHOTO-62
 
var photoLink62 = document.querySelector(".photo__link--62");
var photoPopup62 = document.querySelector(".modal__62");
var photoAfter62 = document.querySelector(".modal__62 .modal__photo-a");
var photoBefore62 = document.querySelector(".modal__62 .modal__photo-b");
var photoClose62 = document.querySelector(".modal__62 .modal__button-close");
var photoPrev62 = document.querySelector(".modal__62 .modal__button-prev");
var photoNext62 = document.querySelector(".modal__62 .modal__button-next");
 
photoLink62.addEventListener("click", function (evt) {
  evt.preventDefault();
  photoPopup62.classList.add("modal__show");
});
 
photoAfter62.addEventListener("mouseenter", function () {
  photoAfter62.classList.toggle("modal__photo-a");
  photoAfter62.classList.toggle("modal__photo-b");
  photoBefore62.classList.toggle("modal__photo-b");
  photoBefore62.classList.toggle("modal__photo-a");
});
 
photoBefore62.addEventListener("mouseout", function () {
  photoBefore62.classList.toggle("modal__photo-a");
  photoBefore62.classList.toggle("modal__photo-b");
  photoAfter62.classList.toggle("modal__photo-b");
  photoAfter62.classList.toggle("modal__photo-a");
});
 
photoAfter62.addEventListener("click", function () {
  photoAfter62.classList.toggle("modal__photo-a");
  photoAfter62.classList.toggle("modal__photo-b");
  photoBefore62.classList.toggle("modal__photo-b");
  photoBefore62.classList.toggle("modal__photo-a");
});
 
photoBefore62.addEventListener("click", function () {
  photoBefore62.classList.toggle("modal__photo-a");
  photoBefore62.classList.toggle("modal__photo-b");
  photoAfter62.classList.toggle("modal__photo-b");
  photoAfter62.classList.toggle("modal__photo-a");
});
 
photoPrev62.addEventListener("click", function(evt) {
  evt.preventDefault();
  photoPopup62.classList.remove("modal__show");
  photoPopup61.classList.add("modal__show");
})
 
window.addEventListener("keyup", function (evt) {
  if (evt.keyCode === 37) {
    evt.preventDefault();
    
    if (photoPopup62.classList.contains("modal__show")) {
      photoPopup62.classList.remove("modal__show");
      photoPopup61.classList.add("modal__show");
    }
  }
});
 
photoNext62.addEventListener("click", function(evt) {
  evt.preventDefault();
  photoPopup62.classList.remove("modal__show");
  photoPopup63.classList.add("modal__show");
})
 
window.addEventListener("keyup", function (evt) {
  if (evt.keyCode === 39) {
    evt.preventDefault();
    
    if (photoPopup62.classList.contains("modal__show")) {
      setTimeout(function() {
        photoPopup62.classList.remove("modal__show");
        photoPopup63.classList.add("modal__show");
      }, 10);
    }
  }
});
 
photoClose62.addEventListener("click", function (evt) {
  evt.preventDefault();
  photoPopup62.classList.remove("modal__show");
});
 
window.addEventListener("keyup", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    
    if (photoPopup62.classList.contains("modal__show")) {
      photoPopup62.classList.remove("modal__show");
    }
  }
});


// PHOTO-63
 
var photoLink63 = document.querySelector(".photo__link--63");
var photoPopup63 = document.querySelector(".modal__63");
var photoAfter63 = document.querySelector(".modal__63 .modal__photo-a");
var photoBefore63 = document.querySelector(".modal__63 .modal__photo-b");
var photoClose63 = document.querySelector(".modal__63 .modal__button-close");
var photoPrev63 = document.querySelector(".modal__63 .modal__button-prev");
var photoNext63 = document.querySelector(".modal__63 .modal__button-next");
 
photoLink63.addEventListener("click", function (evt) {
  evt.preventDefault();
  photoPopup63.classList.add("modal__show");
});
 
photoAfter63.addEventListener("mouseenter", function () {
  photoAfter63.classList.toggle("modal__photo-a");
  photoAfter63.classList.toggle("modal__photo-b");
  photoBefore63.classList.toggle("modal__photo-b");
  photoBefore63.classList.toggle("modal__photo-a");
});
 
photoBefore63.addEventListener("mouseout", function () {
  photoBefore63.classList.toggle("modal__photo-a");
  photoBefore63.classList.toggle("modal__photo-b");
  photoAfter63.classList.toggle("modal__photo-b");
  photoAfter63.classList.toggle("modal__photo-a");
});
 
photoAfter63.addEventListener("click", function () {
  photoAfter63.classList.toggle("modal__photo-a");
  photoAfter63.classList.toggle("modal__photo-b");
  photoBefore63.classList.toggle("modal__photo-b");
  photoBefore63.classList.toggle("modal__photo-a");
});
 
photoBefore63.addEventListener("click", function () {
  photoBefore63.classList.toggle("modal__photo-a");
  photoBefore63.classList.toggle("modal__photo-b");
  photoAfter63.classList.toggle("modal__photo-b");
  photoAfter63.classList.toggle("modal__photo-a");
});
 
photoPrev63.addEventListener("click", function(evt) {
  evt.preventDefault();
  photoPopup63.classList.remove("modal__show");
  photoPopup62.classList.add("modal__show");
})
 
window.addEventListener("keyup", function (evt) {
  if (evt.keyCode === 37) {
    evt.preventDefault();
    
    if (photoPopup63.classList.contains("modal__show")) {
      photoPopup63.classList.remove("modal__show");
      photoPopup62.classList.add("modal__show");
    }
  }
});
 
photoNext63.addEventListener("click", function(evt) {
  evt.preventDefault();
  photoPopup63.classList.remove("modal__show");
  photoPopup64.classList.add("modal__show");
})
 
window.addEventListener("keyup", function (evt) {
  if (evt.keyCode === 39) {
    evt.preventDefault();
    
    if (photoPopup63.classList.contains("modal__show")) {
      setTimeout(function() {
        photoPopup63.classList.remove("modal__show");
        photoPopup64.classList.add("modal__show");
      }, 10);
    }
  }
});
 
photoClose63.addEventListener("click", function (evt) {
  evt.preventDefault();
  photoPopup63.classList.remove("modal__show");
});
 
window.addEventListener("keyup", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    
    if (photoPopup63.classList.contains("modal__show")) {
      photoPopup63.classList.remove("modal__show");
    }
  }
});


// PHOTO-64
 
var photoLink64 = document.querySelector(".photo__link--64");
var photoPopup64 = document.querySelector(".modal__64");
var photoAfter64 = document.querySelector(".modal__64 .modal__photo-a");
var photoBefore64 = document.querySelector(".modal__64 .modal__photo-b");
var photoClose64 = document.querySelector(".modal__64 .modal__button-close");
var photoPrev64 = document.querySelector(".modal__64 .modal__button-prev");
var photoNext64 = document.querySelector(".modal__64 .modal__button-next");
 
photoLink64.addEventListener("click", function (evt) {
  evt.preventDefault();
  photoPopup64.classList.add("modal__show");
});
 
photoAfter64.addEventListener("mouseenter", function () {
  photoAfter64.classList.toggle("modal__photo-a");
  photoAfter64.classList.toggle("modal__photo-b");
  photoBefore64.classList.toggle("modal__photo-b");
  photoBefore64.classList.toggle("modal__photo-a");
});
 
photoBefore64.addEventListener("mouseout", function () {
  photoBefore64.classList.toggle("modal__photo-a");
  photoBefore64.classList.toggle("modal__photo-b");
  photoAfter64.classList.toggle("modal__photo-b");
  photoAfter64.classList.toggle("modal__photo-a");
});
 
photoAfter64.addEventListener("click", function () {
  photoAfter64.classList.toggle("modal__photo-a");
  photoAfter64.classList.toggle("modal__photo-b");
  photoBefore64.classList.toggle("modal__photo-b");
  photoBefore64.classList.toggle("modal__photo-a");
});
 
photoBefore64.addEventListener("click", function () {
  photoBefore64.classList.toggle("modal__photo-a");
  photoBefore64.classList.toggle("modal__photo-b");
  photoAfter64.classList.toggle("modal__photo-b");
  photoAfter64.classList.toggle("modal__photo-a");
});
 
photoPrev64.addEventListener("click", function(evt) {
  evt.preventDefault();
  photoPopup64.classList.remove("modal__show");
  photoPopup63.classList.add("modal__show");
})
 
window.addEventListener("keyup", function (evt) {
  if (evt.keyCode === 37) {
    evt.preventDefault();
    
    if (photoPopup64.classList.contains("modal__show")) {
      photoPopup64.classList.remove("modal__show");
      photoPopup63.classList.add("modal__show");
    }
  }
});
 
photoNext64.addEventListener("click", function(evt) {
  evt.preventDefault();
  photoPopup64.classList.remove("modal__show");
  photoPopup65.classList.add("modal__show");
})
 
window.addEventListener("keyup", function (evt) {
  if (evt.keyCode === 39) {
    evt.preventDefault();
    
    if (photoPopup64.classList.contains("modal__show")) {
      setTimeout(function() {
        photoPopup64.classList.remove("modal__show");
        photoPopup65.classList.add("modal__show");
      }, 10);
    }
  }
});
 
photoClose64.addEventListener("click", function (evt) {
  evt.preventDefault();
  photoPopup64.classList.remove("modal__show");
});
 
window.addEventListener("keyup", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    
    if (photoPopup64.classList.contains("modal__show")) {
      photoPopup64.classList.remove("modal__show");
    }
  }
});

 
// PHOTO-65
 
var photoLink65 = document.querySelector(".photo__link--65");
var photoPopup65 = document.querySelector(".modal__65");
var photoAfter65 = document.querySelector(".modal__65 .modal__photo-a");
var photoBefore65 = document.querySelector(".modal__65 .modal__photo-b");
var photoClose65 = document.querySelector(".modal__65 .modal__button-close");
var photoPrev65 = document.querySelector(".modal__65 .modal__button-prev");
var photoNext65 = document.querySelector(".modal__65 .modal__button-next");
 
photoLink65.addEventListener("click", function (evt) {
  evt.preventDefault();
  photoPopup65.classList.add("modal__show");
});
 
photoAfter65.addEventListener("mouseenter", function () {
  photoAfter65.classList.toggle("modal__photo-a");
  photoAfter65.classList.toggle("modal__photo-b");
  photoBefore65.classList.toggle("modal__photo-b");
  photoBefore65.classList.toggle("modal__photo-a");
});
 
photoBefore65.addEventListener("mouseout", function () {
  photoBefore65.classList.toggle("modal__photo-a");
  photoBefore65.classList.toggle("modal__photo-b");
  photoAfter65.classList.toggle("modal__photo-b");
  photoAfter65.classList.toggle("modal__photo-a");
});
 
photoAfter65.addEventListener("click", function () {
  photoAfter65.classList.toggle("modal__photo-a");
  photoAfter65.classList.toggle("modal__photo-b");
  photoBefore65.classList.toggle("modal__photo-b");
  photoBefore65.classList.toggle("modal__photo-a");
});
 
photoBefore65.addEventListener("click", function () {
  photoBefore65.classList.toggle("modal__photo-a");
  photoBefore65.classList.toggle("modal__photo-b");
  photoAfter65.classList.toggle("modal__photo-b");
  photoAfter65.classList.toggle("modal__photo-a");
});
 
photoPrev65.addEventListener("click", function(evt) {
  evt.preventDefault();
  photoPopup65.classList.remove("modal__show");
  photoPopup64.classList.add("modal__show");
})
 
window.addEventListener("keyup", function (evt) {
  if (evt.keyCode === 37) {
    evt.preventDefault();
    
    if (photoPopup65.classList.contains("modal__show")) {
      photoPopup65.classList.remove("modal__show");
      photoPopup64.classList.add("modal__show");
    }
  }
});
 
photoNext65.addEventListener("click", function(evt) {
  evt.preventDefault();
  photoPopup65.classList.remove("modal__show");
  photoPopup66.classList.add("modal__show");
})
 
window.addEventListener("keyup", function (evt) {
  if (evt.keyCode === 39) {
    evt.preventDefault();
    
    if (photoPopup65.classList.contains("modal__show")) {
      setTimeout(function() {
        photoPopup65.classList.remove("modal__show");
        photoPopup66.classList.add("modal__show");
      }, 10);
    }
  }
});
 
photoClose65.addEventListener("click", function (evt) {
  evt.preventDefault();
  photoPopup65.classList.remove("modal__show");
});
 
window.addEventListener("keyup", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    
    if (photoPopup65.classList.contains("modal__show")) {
      photoPopup65.classList.remove("modal__show");
    }
  }
});
 
 
// PHOTO-66
 
var photoLink66 = document.querySelector(".photo__link--66");
var photoPopup66 = document.querySelector(".modal__66");
var photoAfter66 = document.querySelector(".modal__66 .modal__photo-a");
var photoBefore66 = document.querySelector(".modal__66 .modal__photo-b");
var photoClose66 = document.querySelector(".modal__66 .modal__button-close");
var photoPrev66 = document.querySelector(".modal__66 .modal__button-prev");
var photoNext66 = document.querySelector(".modal__66 .modal__button-next");
 
photoLink66.addEventListener("click", function (evt) {
  evt.preventDefault();
  photoPopup66.classList.add("modal__show");
});
 
photoAfter66.addEventListener("mouseenter", function () {
  photoAfter66.classList.toggle("modal__photo-a");
  photoAfter66.classList.toggle("modal__photo-b");
  photoBefore66.classList.toggle("modal__photo-b");
  photoBefore66.classList.toggle("modal__photo-a");
});
 
photoBefore66.addEventListener("mouseout", function () {
  photoBefore66.classList.toggle("modal__photo-a");
  photoBefore66.classList.toggle("modal__photo-b");
  photoAfter66.classList.toggle("modal__photo-b");
  photoAfter66.classList.toggle("modal__photo-a");
});
 
photoAfter66.addEventListener("click", function () {
  photoAfter66.classList.toggle("modal__photo-a");
  photoAfter66.classList.toggle("modal__photo-b");
  photoBefore66.classList.toggle("modal__photo-b");
  photoBefore66.classList.toggle("modal__photo-a");
});
 
photoBefore66.addEventListener("click", function () {
  photoBefore66.classList.toggle("modal__photo-a");
  photoBefore66.classList.toggle("modal__photo-b");
  photoAfter66.classList.toggle("modal__photo-b");
  photoAfter66.classList.toggle("modal__photo-a");
});
 
photoPrev66.addEventListener("click", function(evt) {
  evt.preventDefault();
  photoPopup66.classList.remove("modal__show");
  photoPopup65.classList.add("modal__show");
})
 
window.addEventListener("keyup", function (evt) {
  if (evt.keyCode === 37) {
    evt.preventDefault();
    
    if (photoPopup66.classList.contains("modal__show")) {
      photoPopup66.classList.remove("modal__show");
      photoPopup65.classList.add("modal__show");
    }
  }
});
 
photoNext66.addEventListener("click", function(evt) {
  evt.preventDefault();
  photoPopup66.classList.remove("modal__show");
  photoPopup67.classList.add("modal__show");
})
 
window.addEventListener("keyup", function (evt) {
  if (evt.keyCode === 39) {
    evt.preventDefault();
    
    if (photoPopup66.classList.contains("modal__show")) {
      setTimeout(function() {
        photoPopup66.classList.remove("modal__show");
        photoPopup67.classList.add("modal__show");
      }, 10);
    }
  }
});
 
photoClose66.addEventListener("click", function (evt) {
  evt.preventDefault();
  photoPopup66.classList.remove("modal__show");
});
 
window.addEventListener("keyup", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    
    if (photoPopup66.classList.contains("modal__show")) {
      photoPopup66.classList.remove("modal__show");
    }
  }
});


// PHOTO-67
 
var photoLink67 = document.querySelector(".photo__link--67");
var photoPopup67 = document.querySelector(".modal__67");
var photoAfter67 = document.querySelector(".modal__67 .modal__photo-a");
var photoBefore67 = document.querySelector(".modal__67 .modal__photo-b");
var photoClose67 = document.querySelector(".modal__67 .modal__button-close");
var photoPrev67 = document.querySelector(".modal__67 .modal__button-prev");
var photoNext67 = document.querySelector(".modal__67 .modal__button-next");
 
photoLink67.addEventListener("click", function (evt) {
  evt.preventDefault();
  photoPopup67.classList.add("modal__show");
});
 
photoAfter67.addEventListener("mouseenter", function () {
  photoAfter67.classList.toggle("modal__photo-a");
  photoAfter67.classList.toggle("modal__photo-b");
  photoBefore67.classList.toggle("modal__photo-b");
  photoBefore67.classList.toggle("modal__photo-a");
});
 
photoBefore67.addEventListener("mouseout", function () {
  photoBefore67.classList.toggle("modal__photo-a");
  photoBefore67.classList.toggle("modal__photo-b");
  photoAfter67.classList.toggle("modal__photo-b");
  photoAfter67.classList.toggle("modal__photo-a");
});
 
photoAfter67.addEventListener("click", function () {
  photoAfter67.classList.toggle("modal__photo-a");
  photoAfter67.classList.toggle("modal__photo-b");
  photoBefore67.classList.toggle("modal__photo-b");
  photoBefore67.classList.toggle("modal__photo-a");
});
 
photoBefore67.addEventListener("click", function () {
  photoBefore67.classList.toggle("modal__photo-a");
  photoBefore67.classList.toggle("modal__photo-b");
  photoAfter67.classList.toggle("modal__photo-b");
  photoAfter67.classList.toggle("modal__photo-a");
});
 
photoPrev67.addEventListener("click", function(evt) {
  evt.preventDefault();
  photoPopup67.classList.remove("modal__show");
  photoPopup66.classList.add("modal__show");
})
 
window.addEventListener("keyup", function (evt) {
  if (evt.keyCode === 37) {
    evt.preventDefault();
    
    if (photoPopup67.classList.contains("modal__show")) {
      photoPopup67.classList.remove("modal__show");
      photoPopup66.classList.add("modal__show");
    }
  }
});
 
photoNext67.addEventListener("click", function(evt) {
  evt.preventDefault();
  photoPopup67.classList.remove("modal__show");
  photoPopup68.classList.add("modal__show");
})
 
window.addEventListener("keyup", function (evt) {
  if (evt.keyCode === 39) {
    evt.preventDefault();
    
    if (photoPopup67.classList.contains("modal__show")) {
      setTimeout(function() {
        photoPopup67.classList.remove("modal__show");
        photoPopup68.classList.add("modal__show");
      }, 10);
    }
  }
});
 
photoClose67.addEventListener("click", function (evt) {
  evt.preventDefault();
  photoPopup67.classList.remove("modal__show");
});
 
window.addEventListener("keyup", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    
    if (photoPopup67.classList.contains("modal__show")) {
      photoPopup67.classList.remove("modal__show");
    }
  }
});


// PHOTO-68
 
var photoLink68 = document.querySelector(".photo__link--68");
var photoPopup68 = document.querySelector(".modal__68");
var photoAfter68 = document.querySelector(".modal__68 .modal__photo-a");
var photoBefore68 = document.querySelector(".modal__68 .modal__photo-b");
var photoClose68 = document.querySelector(".modal__68 .modal__button-close");
var photoPrev68 = document.querySelector(".modal__68 .modal__button-prev");
var photoNext68 = document.querySelector(".modal__68 .modal__button-next");
 
photoLink68.addEventListener("click", function (evt) {
  evt.preventDefault();
  photoPopup68.classList.add("modal__show");
});
 
photoAfter68.addEventListener("mouseenter", function () {
  photoAfter68.classList.toggle("modal__photo-a");
  photoAfter68.classList.toggle("modal__photo-b");
  photoBefore68.classList.toggle("modal__photo-b");
  photoBefore68.classList.toggle("modal__photo-a");
});
 
photoBefore68.addEventListener("mouseout", function () {
  photoBefore68.classList.toggle("modal__photo-a");
  photoBefore68.classList.toggle("modal__photo-b");
  photoAfter68.classList.toggle("modal__photo-b");
  photoAfter68.classList.toggle("modal__photo-a");
});
 
photoAfter68.addEventListener("click", function () {
  photoAfter68.classList.toggle("modal__photo-a");
  photoAfter68.classList.toggle("modal__photo-b");
  photoBefore68.classList.toggle("modal__photo-b");
  photoBefore68.classList.toggle("modal__photo-a");
});
 
photoBefore68.addEventListener("click", function () {
  photoBefore68.classList.toggle("modal__photo-a");
  photoBefore68.classList.toggle("modal__photo-b");
  photoAfter68.classList.toggle("modal__photo-b");
  photoAfter68.classList.toggle("modal__photo-a");
});
 
photoPrev68.addEventListener("click", function(evt) {
  evt.preventDefault();
  photoPopup68.classList.remove("modal__show");
  photoPopup67.classList.add("modal__show");
})
 
window.addEventListener("keyup", function (evt) {
  if (evt.keyCode === 37) {
    evt.preventDefault();
    
    if (photoPopup68.classList.contains("modal__show")) {
      photoPopup68.classList.remove("modal__show");
      photoPopup67.classList.add("modal__show");
    }
  }
});
 
photoNext68.addEventListener("click", function(evt) {
  evt.preventDefault();
  photoPopup68.classList.remove("modal__show");
  photoPopup69.classList.add("modal__show");
})
 
window.addEventListener("keyup", function (evt) {
  if (evt.keyCode === 39) {
    evt.preventDefault();
    
    if (photoPopup68.classList.contains("modal__show")) {
      setTimeout(function() {
        photoPopup68.classList.remove("modal__show");
        photoPopup69.classList.add("modal__show");
      }, 10);
    }
  }
});
 
photoClose68.addEventListener("click", function (evt) {
  evt.preventDefault();
  photoPopup68.classList.remove("modal__show");
});
 
window.addEventListener("keyup", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    
    if (photoPopup68.classList.contains("modal__show")) {
      photoPopup68.classList.remove("modal__show");
    }
  }
});


// PHOTO-69
 
var photoLink69 = document.querySelector(".photo__link--69");
var photoPopup69 = document.querySelector(".modal__69");
var photoAfter69 = document.querySelector(".modal__69 .modal__photo-a");
var photoBefore69 = document.querySelector(".modal__69 .modal__photo-b");
var photoClose69 = document.querySelector(".modal__69 .modal__button-close");
var photoPrev69 = document.querySelector(".modal__69 .modal__button-prev");
var photoNext69 = document.querySelector(".modal__69 .modal__button-next");
 
photoLink69.addEventListener("click", function (evt) {
  evt.preventDefault();
  photoPopup69.classList.add("modal__show");
});
 
photoAfter69.addEventListener("mouseenter", function () {
  photoAfter69.classList.toggle("modal__photo-a");
  photoAfter69.classList.toggle("modal__photo-b");
  photoBefore69.classList.toggle("modal__photo-b");
  photoBefore69.classList.toggle("modal__photo-a");
});
 
photoBefore69.addEventListener("mouseout", function () {
  photoBefore69.classList.toggle("modal__photo-a");
  photoBefore69.classList.toggle("modal__photo-b");
  photoAfter69.classList.toggle("modal__photo-b");
  photoAfter69.classList.toggle("modal__photo-a");
});
 
photoAfter69.addEventListener("click", function () {
  photoAfter69.classList.toggle("modal__photo-a");
  photoAfter69.classList.toggle("modal__photo-b");
  photoBefore69.classList.toggle("modal__photo-b");
  photoBefore69.classList.toggle("modal__photo-a");
});
 
photoBefore69.addEventListener("click", function () {
  photoBefore69.classList.toggle("modal__photo-a");
  photoBefore69.classList.toggle("modal__photo-b");
  photoAfter69.classList.toggle("modal__photo-b");
  photoAfter69.classList.toggle("modal__photo-a");
});
 
photoPrev69.addEventListener("click", function(evt) {
  evt.preventDefault();
  photoPopup69.classList.remove("modal__show");
  photoPopup68.classList.add("modal__show");
})
 
window.addEventListener("keyup", function (evt) {
  if (evt.keyCode === 37) {
    evt.preventDefault();
    
    if (photoPopup69.classList.contains("modal__show")) {
      photoPopup69.classList.remove("modal__show");
      photoPopup68.classList.add("modal__show");
    }
  }
});
 
photoNext69.addEventListener("click", function(evt) {
  evt.preventDefault();
  photoPopup69.classList.remove("modal__show");
  photoPopup1.classList.add("modal__show");
})
 
window.addEventListener("keyup", function (evt) {
  if (evt.keyCode === 39) {
    evt.preventDefault();
    
    if (photoPopup69.classList.contains("modal__show")) {
      setTimeout(function() {
        photoPopup69.classList.remove("modal__show");
        photoPopup1.classList.add("modal__show");
      }, 10);
    }
  }
});
 
photoClose69.addEventListener("click", function (evt) {
  evt.preventDefault();
  photoPopup69.classList.remove("modal__show");
});
 
window.addEventListener("keyup", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    
    if (photoPopup69.classList.contains("modal__show")) {
      photoPopup69.classList.remove("modal__show");
    }
  }
});
