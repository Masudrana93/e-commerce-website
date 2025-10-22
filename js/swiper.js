/*=================================================
      For Section-1 == main slider js Start
==================================================*/
var swiper = new Swiper(".mySwiper", {
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true
      },
       autoplay: {
        delay: 2500,
        disableOnInteraction: false
      },
      
    });

/*=======================================================
    For Section-2 == Payment and Return Slider js Start
========================================================*/

   //for Section-2 == Payment and Return Slider
    var swiper = new Swiper(".mySwiperPayReturn", {
      slidesPerView: 4,
      spaceBetween: 30,
      
      breakpoints: {
      0: {
        slidesPerView: 1
      },
      576: {
        slidesPerView: 2,
        spaceBetween: 15,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      992: {
        slidesPerView: 4,
        spaceBetween: 25,
      },
    },
      autoplay: {
        delay: 3500,
        disableOnInteraction: false
      },

    });


/*========================================================
      For Section-3 == Shop by Category Slider js Start
===========================================================*/
var swiper = new Swiper(".mySwiperShopByCat", {
      slidesPerView: 5,
      spaceBetween: 30,
      navigation: {
        nextEl: ".category-button-next2",
        prevEl: ".category-button-prev2",
      },
      breakpoints: {
     
      0: {
        slidesPerView: 2,
        spaceBetween: 15,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      992: {
        slidesPerView: 5,
        spaceBetween: 25,
      },
      
    },
      autoplay: {
        delay: 3000,
        disableOnInteraction: false
      },
    });



/*=================================================
      For Section-5 == Best Sells Slider js Start
==================================================*/

    var swiper = new Swiper(".mySwiper3", {
      slidesPerView: 4,
      // grid: {
      //   rows: 2,
      // },
      spaceBetween: 30,
      navigation: {
        nextEl: ".top-sales-button-next",
        prevEl: ".top-sales-button-prev",
      },
      breakpoints: {
      0: {
        slidesPerView: 1
      },
      576: {
        slidesPerView: 2,
        spaceBetween: 15,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 25,
      },
      
    }
    });

/*====================================================
      For Section-6 == Islamic Corner Slider js Start
=====================================================*/
    
    var swiper = new Swiper(".mySwiperIslamic", {
      slidesPerView: 4,
      spaceBetween: 30,
      navigation: {
        nextEl: ".islamic-corner-button-next",
        prevEl: ".islamic-corner-button-prev",
      },
      breakpoints: {
      0: {
        slidesPerView: 2,
      },
      576: {
        slidesPerView: 2,
        spaceBetween: 15,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      992: {
        slidesPerView: 4,
        spaceBetween: 25,
      },
      
    }
    });


    /*
     //for Section-5 == Tractor Parts Slider
    var swiper = new Swiper(".mySwiper5", {
      slidesPerView: 3,
      spaceBetween: 30,
      navigation: {
        nextEl: ".tractor-parts-button-next",
        prevEl: ".tractor-parts-button-prev",
      },
      breakpoints: {
      0: {
        slidesPerView: 1
      },
      576: {
        slidesPerView: 2,
        spaceBetween: 15,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 25,
      },
      
    }
    });


     //for Section-6 == Harvester Parts Slider
    var swiper = new Swiper(".mySwiper6", {
      slidesPerView: 3,
      spaceBetween: 30,
      navigation: {
        nextEl: ".harvester-parts-button-next",
        prevEl: ".harvester-parts-button-prev",
      },
      breakpoints: {
      0: {
        slidesPerView: 1
      },
      576: {
        slidesPerView: 2,
        spaceBetween: 15,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 25,
      },
      
    }
    });


     //for Section-7 == Motorbike Parts Slider
    var swiper = new Swiper(".mySwiper7", {
      slidesPerView: 3,
      spaceBetween: 30,
      navigation: {
        nextEl: ".motorbike-parts-button-next",
        prevEl: ".motorbike-parts-button-prev",
      },
      breakpoints: {
      0: {
        slidesPerView: 1
      },
      576: {
        slidesPerView: 2,
        spaceBetween: 15,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 25,
      },
      
    }
    });


    //for Section-7 == Deal of the day Slider
    var swiper = new Swiper(".mySwiper8", {
    slidesPerView: 2,
    grid: {
      rows: 2,
      fill: 'row'
    },
    spaceBetween: 30,
    navigation: {
      nextEl: ".deal-of-day-button-next",
      prevEl: ".deal-of-day-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    loop: false, // Set to true if you want infinite loop
    breakpoints: {
      0: {
        slidesPerView: 1,
        grid: {
          rows: 1
        }
      },
      768: {
        slidesPerView: 2,
        grid: {
          rows: 2
        }
      }
    }
  });

  //for Section- == New Product Slider
var swiper = new Swiper(".mySwiper9", {
      navigation: {
        nextEl: ".new-product-swiper-button-next",
        prevEl: ".new-product-swiper-button-prev",
      },
      
    });


//for Section-8 == Featured Brand Slider
      var swiper = new Swiper(".mySwiper10", {
      slidesPerView: 5,
      spaceBetween: 30,
      navigation: {
        nextEl: ".brand-button-next2",
        prevEl: ".brand-button-prev2",
      },
      breakpoints: {
      0: {
        slidesPerView: 1
      },
      576: {
        slidesPerView: 2,
        spaceBetween: 15,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      992: {
        slidesPerView: 5,
        spaceBetween: 25,
      },
      
    }
    });

  


    //for Section-10 == Gadgets == Slider
    var swiper = new Swiper(".mySwiperGadget", {
      slidesPerView: 3,
      spaceBetween: 30,
      navigation: {
        nextEl: ".gadgets-parts-button-next",
        prevEl: ".gadgets-parts-button-prev",
      },
      breakpoints: {
      0: {
        slidesPerView: 1
      },
      576: {
        slidesPerView: 2,
        spaceBetween: 15,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 25,
      },
      
    }
    });

    //for Section-11 == Islamic Corner == Slider
    var swiper = new Swiper(".mySwiperIslamic", {
      slidesPerView: 3,
      spaceBetween: 30,
      navigation: {
        nextEl: ".islamic-corner-button-next",
        prevEl: ".islamic-corner-button-prev",
      },
      breakpoints: {
      0: {
        slidesPerView: 1
      },
      576: {
        slidesPerView: 2,
        spaceBetween: 15,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 25,
      },
      
    }
    });

   //for Section-12 == Supershop == Slider
    var swiper = new Swiper(".mySwiperSupershop", {
      slidesPerView: 3,
      spaceBetween: 30,
      navigation: {
        nextEl: ".supershop-button-next",
        prevEl: ".supershop-button-prev",
      },
      breakpoints: {
      0: {
        slidesPerView: 1
      },
      576: {
        slidesPerView: 2,
        spaceBetween: 15,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 25,
      },
      
    }
    });

      */




//****** For Single Page slider JS Start *********

     const thumbsSwiper = new Swiper(".myThumbs", {
      spaceBetween: 10,
      slidesPerView: 4,
      freeMode: true,
      watchSlidesProgress: true,
    });

    const mainSwiper = new Swiper(".myGallery", {
      spaceBetween: 10,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      thumbs: {
        swiper: thumbsSwiper,
      },
    });

    /*

    // Cursor-follow zoom effect
    document.querySelectorAll(".zoom-container").forEach(container => {
      const img = container.querySelector(".zoom-image");

      container.addEventListener("mousemove", (e) => {
        const rect = container.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        img.style.transformOrigin = `${x}% ${y}%`;
        img.style.transform = "scale(2)"; // Zoom level (2x)
      });

      container.addEventListener("mouseleave", () => {
        img.style.transformOrigin = "center center";
        img.style.transform = "scale(1)";
      });
    });
    
    */
