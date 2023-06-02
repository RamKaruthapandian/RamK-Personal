
const params = new URLSearchParams(document.location.search);
const memberlyAvatarBase = "https://memberly-app.github.io/heroku/assets/images/user";

$(document).ready(function() {
    var vw = $(window)[0].innerWidth;
	invokeUserValidations();
	invokeMenuConfigs();
	
	// remove pre-loader start
    setTimeout(function() {
        $('.loader-bg').fadeOut('slow', function() {
            $(this).remove();
        });
    }, 400);
	
	$(document).on("click",'li[name="leftMenuHeader"]',function() {
		if ($(this).hasClass('pcoded-trigger')) {
			$(this).removeClass('pcoded-trigger');
		} else {
			//$('.pcoded-submenu > li > .pcoded-submenu > li.pcoded-trigger').children('.pcoded-submenu').slideUp();
			//$(this).closest('.pcoded-inner-navbar').find('li.pcoded-trigger').removeClass('pcoded-trigger');
			$(this).addClass('pcoded-trigger');
			//$(this).children('.pcoded-submenu').slideDown();
		}
	});
	$(document).on("click",'a[class="dud-logout"]',function(e) {
		alert("YES< NAV LogOUT");	
		e.preventDefault();
		//var sessStore = window.sessionStorage;
		window.sessionStorage.clear();
		window.location.href = navURL;
		
	});
	//dud-logout
	 $(".mobile-menu").on('click', function() {
        var $this = $(this);
        $this.toggleClass('on');
		$("span[name='submenu_wrapper']").each(function(){
			$(this).toggle();
		});
    });
    $("#mobile-collapse").on('click', function() {
        if (vw > 991) {
            $(".pcoded-navbar:not(.theme-horizontal)").toggleClass("navbar-collapsed");
        }
    });
	
});
	
function invokeUserValidations(){
	var loggedInUser = JSON.parse(window.sessionStorage.getItem("loggedInUser"));
	setUserDetails(loggedInUser);
}

function setUserDetails(data){
	var lookup = (data.userRole == "SUPERADMIN" || data.userRole == "ADMIN")? "admin" : "random";
	$("#loggedAvatar").attr("src", memberlyAvatarBase+"/"+lookup+"/"+data.userID+".jpg");
	$("#loggedAvatar2").attr("src", memberlyAvatarBase+"/"+lookup+"/"+data.userID+".jpg");
	$("#loggedName").html(data.firstName +" "+data.lastName );
	$("#loggedName2").html(data.firstName +" "+data.lastName );
	$("#loggedRole").text(data.userRole+"&nbsp;&nbsp;");
}

function invokeMenuConfigs(){
	var expanded		= false;
	var appMenus 		= crossfilter(JSON.parse(window.sessionStorage.getItem("appMenus")));
	
	//console.log("appMenus "+JSON.stringify(JSON.parse(window.sessionStorage.getItem("appMenus"))));
	var dimByName		= appMenus.dimension(function(d) {
		 return d.isModule +"-"+ d.moduleID;
	});
	
	var filteredByHDRs = dimByName.filterExact("true-undefined").top(Infinity);
	console.log("filteredByHDRs "+JSON.stringify(filteredByHDRs));
	$.each(filteredByHDRs, function(index,value){ 
		expanded 			= (value.menuID == currModule)? true : false; 
		var linkUUID		= createNodashUUID("gmid"); 
		
		var menuHDRCtnt 	=  '<ul class="pcoded-inner-navbar ">';
			menuHDRCtnt     =  '<li name="leftMenuHeader" class="nav-item pcoded-hasmenu '+(expanded? "active pcoded-trigger" : "" )+'">';
			menuHDRCtnt		+= '<a href="#'+linkUUID+'" data-toggle="collapse" class="nav-link has-ripple">';
			menuHDRCtnt		+= '<span class="pcoded-micon"><i class="'+value.faIcon+'"></i></span>';
			menuHDRCtnt		+= '<span class="pcoded-mtext">'+value.menuID+'</span></a>';
			
			menuHDRCtnt		+= '<div name="" class="row" style="margin-top:-7px;"><div class="col-sm-12"><div class="collapse multi-collapse mt-2 '+(expanded? "show":"")+'" id="'+linkUUID+'">';  
			menuHDRCtnt		+= '<ul class="test" style="list-style:none;">'; 
			var filterByThisHDR = dimByName.filterExact("false-"+value.menuID).top(Infinity);
			$.each(filterByThisHDR.reverse(), function(subindex, subvalue){
				menuHDRCtnt		+= '<li style="margin:-5px 15px;">';
				menuHDRCtnt		+= '<a name="leftMenuItem" style="width:100%;border:0px solid yellow;" href="'+navURL+""+subvalue.url+'.html">'; 
				menuHDRCtnt		+= '<span name="submenu_wrapper" class="pcoded-micon"><i class="'+subvalue.faIcon+'"></i></span>';
				menuHDRCtnt		+= '<span name="submenu_wrapper">'+subvalue.menuID+'</span>';
				menuHDRCtnt		+= '</a>';
				menuHDRCtnt		+= '</li>';
			});
			menuHDRCtnt		+= '</ul>'; 
			menuHDRCtnt		+= '</div></div></div>';  
			
			menuHDRCtnt		+= '</li>';
			menuHDRCtnt		+= '</ul>';
			menuHDRCtnt		+= '<hr style="margin:0.5rem 0.25rem;border-top:1px solid rgb(221 225 239 / 67%)">';
				
		$("#allmenusUL").append(menuHDRCtnt); 
	});
	
}

// menu [ Mobile ]
$("#mobile-collapse,#mobile-collapse1").click(function(e) {
    var vw = $(window)[0].innerWidth;
    if (vw < 992) {
        $(".pcoded-navbar").toggleClass('mob-open');
        e.stopPropagation(); 
    }
});
$(window).ready(function() {
    var vw = $(window)[0].innerWidth;
    $(".pcoded-navbar").on('click tap', function(e) {
        //e.stopPropagation();
    });
    $('.pcoded-main-container,.pcoded-header').on("click", function() {
        if (vw < 992) {
            if ($(".pcoded-navbar").hasClass("mob-open") == true) {
                $(".pcoded-navbar").removeClass('mob-open');
                $("#mobile-collapse,#mobile-collapse1").removeClass('on');
            }
        }
    });
});

$.ripple(".btn, .pcoded-navbar a,.pcoded-header .navbar-nav > li > .dropdown > a,.page-link, .nav .nav-link", {
    debug: false, // Turn Ripple.js logging on/off
    on: 'mousedown', // The event to trigger a ripple effect
    opacity: 0.4, // The opacity of the ripple
    color: "auto", // Set the background color. If set to "auto", it will use the text color
    multi: false, // Allow multiple ripples per element
    duration: 0.7, // The duration of the ripple
    // Filter function for modifying the speed of the ripple
    rate: function(pxPerSecond) {
        return pxPerSecond;
    },
    easing: 'linear' // The CSS3 easing function of the ripple
});