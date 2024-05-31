$(document).ready(function(){

    var count = 2 ;
    $(".ar_clientRiview_link_delet_BtnNew").click(function(){
        count = count + 1;
        var newItemAdd = `
        <div class="ar_link_delet_wrap">
        <h3> `+count+` .ملاحظة </h3>
        <div class="ar_ar_clientRiview_linkDelet_single">
          <div class="ar_ar_clientRiview_linkDelet_cont">
            <textarea name="clta" id="clta" placeholder="Lorem ipsum dolor sit amet consectetur.."></textarea>
            
          </div>
          <div class="ar_ar_clientRiview_linkDelet_img">
            <a class="first" href="#"><img src="assets/images/clientReview/link.png" alt=""></a>
            <a href="#"><img src="assets/images/clientReview/delet.png" alt=""></a>
          </div>
        </div>
      </div>
                    `;

            $('.ar_clientRiview_link_delet_area').append(newItemAdd);
     });



    


    // mobile-navbar
    $(".ar_moblie_bars").click(function(){
        $(".ar_mobile_navbar_area").toggleClass("active");
      });
      $(".ar_moNav_minus").click(function(){
        $(".ar_mobile_navbar_area").toggleClass("active");
      });


    //   profile-dropdown
    $(".ar_profile_user").click(function(){
        $(this).toggleClass("active");
    })

    $(document).click(function(){
        $(".ar_profile_user").removeClass('active'); 
    });

    $(".ar_profile_dropdown, .ar_profile_user").click(function(e){
            e.stopPropagation(); 
    });

    $(".ar_profile_user_moble").click(function(){
        $(this).toggleClass("active");
    })

    $(document).click(function(){
        $(".ar_profile_user_moble").removeClass('active'); 
    });

    $(".mobile_profile, .ar_profile_user_moble").click(function(e){
            e.stopPropagation(); 
    });


    // sidebarNabMenu
    let navigation = document.querySelector('.navigation');
        let toggle = document.querySelector('.toggle');
        toggle.onclick = function() {
        navigation.classList.toggle('active');
    }


    $(function () {
        $('.popup-modal').magnificPopup({
            type: 'inline',
            preloader: false,
            focus: '#username',
            modal: true
        });
        $(document).on('click', '.popup-modal-dismiss', function (e) {
            e.preventDefault();
            $.magnificPopup.close();
        });
    });





// start-drop-drag-img-upload
    var btnUpload = $("#upload_file"),
            btnOuter = $(".button_outer");
        btnUpload.on("change", function(e){
            var ext = btnUpload.val().split('.').pop().toLowerCase();
            if($.inArray(ext, ['gif','png','jpg','jpeg']) == -1) {
            $(".error_msg").text("Not an Image...");
            } else {
            $(".error_msg").text("");
            btnOuter.addClass("file_uploading");
            setTimeout(function(){
                btnOuter.addClass("file_uploaded");
            },3000);
            var uploadedFile = URL.createObjectURL(e.target.files[0]);
            setTimeout(function(){
                $("#uploaded_view").append('<img src="'+uploadedFile+'" />').addClass("show");
            },3500);
            }
        });
        $(".file_remove").on("click", function(e){
            $("#uploaded_view").removeClass("show");
            $("#uploaded_view").find("img").remove();
            btnOuter.removeClass("file_uploading");
            btnOuter.removeClass("file_uploaded");
        });
// end-drop-drag-img-upload


// middle-popup
// $(".ar_orderPage_PopUp_header a").click(function(){
//     $(".ar_orderPage_PopUp_area_wrapper").hide();
//     $('.popup_overlay').fadeOut(); 
//   });








})


// side-nabvar-start
var count = 0; 
  $(document).on('click','.sidebar_arrow',function(){
    if(count == 0){ 
        $(this).css({'transform':'rotate(180deg)'});
        $('.sk_main_drp').hide(); 
        $('.ar_navigation_logo a img').css({"width":"140px"}); 
        $('.ar_dashboard_main_content_area').css({"flex":"0 0 95%"});    
        $('.ar_dashboard_main_sidebar_area').css({"flex":"0 0 5%"});    
      
        count = 1;
    }else{  

        $(this).css({'transform':'rotate(0)'});
        $('.sk_main_drp').show(); 
        $('.ar_navigation_logo a img').css({"width":"250px"}); 
        $('.ar_dashboard_main_content_area').css({"flex":"0 0 85%"});    
        $('.ar_dashboard_main_sidebar_area').css({"flex":"0 0 15%"});  
      
        count = 0; 
    }
    return false;
  }); 
  // side-nabvar-end