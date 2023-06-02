

  $(document).ready(function(){
   
  });

var sessionRegsiteredList=[];

var eventRows='';

function getDynamicContent(){
	 vars = getUrlVars();
	var ICT = {"header":{"logo":[{"title":"CAPSS","url":"../assets/brand/CAPSS.png","class":"","style":"height:70px;width:100px;","comments":null},{"title":"RSCLogo","url":"../assets/brand/RSCLogoTransparent.png","class":"logo","style":"margin-top:10px;height:50px;width:90px;","comments":null},{"title":"SiviSoft","url":"../assets/brand/SiviSoft.png","class":"logo","style":"height:70px;width:70px;","comments":null}],"registration":{"isRequired":true,"id":"","class":"","style":"","custom":[{"HTMLElement":"<div id=\"loginControls\" class=\"col-md-auto text-right\" style=\"border:0px solid red;white-space: nowrap;\">\n\t\t\t\t\t\t\t<p class=\"m-b-0\" style=\"font-size:12px;color:orange\">Would like to join this event ?&nbsp;&nbsp;\n\t\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-primary btn-sm\" id=\"registerButton\">\n\t\t\t\t\t\t\t\t&nbsp;<i class=\"fad fa-feather-alt\"></i>&nbsp; Register</button> \n\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t</div>"}],"comments":null},"login":{"isRequired":true,"id":"","class":"","style":"","custom":[{"HTMLElement":"<div id=\"logoutControls\" class=\"col-md-auto text-right\" style=\"display:none;border:0px solid red;white-space: nowrap;\">\n\t\t\t\t\t\t\t<p class=\"m-b-0\" style=\"font-size:12px;color:orange\">&nbsp;&nbsp;\n\t\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-primary btn-sm\" id=\"sessionLogOut\">\n\t\t\t\t\t\t\t\t&nbsp;<i class=\"fad fa-feather-alt\"></i>&nbsp; Logout</button> \n\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t</div>"}],"comments":null},"cancel":{"isRequired":true,"id":"","class":"","style":"","custom":[{"HTMLElement":"<div id=\"cancell\" class=\"col-md-auto text-right\" style=\"display:none;border:0px solid red;white-space: nowrap;\">\n\t\t\t\t\t\t\t<p class=\"m-b-0\" style=\"font-size:12px;color:orange\">&nbsp;&nbsp;\n\t\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-primary btn-sm\" id=\"cancelRegistrationOne\">\n\t\t\t\t\t\t\t\t&nbsp;<i class=\"fad fa-feather-alt\"></i>&nbsp; Cancel Registration</button> \n\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t</div>"}],"comments":null}},"navigator":{"sideBar":[{"title":"dashboard","class":null,"style":null,"href":"index.html","comments":null},{"title":"user","class":null,"style":null,"href":"userList.html","comments":null}],"card":[{"title":"Collaborators","class":null,"style":null,"comments":null,"logo":[{"title":"amazon","url":"../assets/brand/ssp-amazon.png","class":null,"style":null,"comments":null},{"title":"amchamTT","url":"../assets/brand/ssp-amchamTT.png","class":null,"style":null,"comments":null},{"title":"cnembassy","url":"../assets/brand/ssp-cnembassy.png","class":null,"style":null,"comments":null},{"title":"gnembassy","url":"../assets/brand/ssp-gnembassy.png","class":null,"style":null,"comments":null},{"title":"google","url":"../assets/brand/ssp-google.png","class":null,"style":null,"comments":null},{"title":"ms","url":"../assets/brand/ssp-ms.png","class":null,"style":null,"comments":null},{"title":"usEmbassyTT","url":"../assets/brand/ssp-usEmbassyTT.png","class":null,"style":null,"comments":null}]},{"title":"Platform Providers","class":null,"style":null,"comments":null,"logo":[{"title":"RSCLogoTransparent","url":"../assets/brand/RSCLogoTransparent.png","class":null,"style":null,"comments":null},{"title":"SiviSoft","url":"../assets/brand/SiviSoft.png","class":null,"style":null,"comments":null}]},{"title":"Live Sessions","class":null,"style":null,"comments":null,"logo":null,"custom":[{"HTMLElement":"<div class=\"card new-cust-card\">\n\t\t\t\t\t<div class=\"card-header\">\n\t\t\t\t\t\t<h5>Live Sessions</h5>\n\t\t\t\t\t\t<div class=\"card-header-right\">\n\t\t\t\t\t\t\t<div class=\"btn-group card-option\">\n\t\t\t\t\t\t\t\t<button type=\"button\" class=\"btn dropdown-toggle\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n\t\t\t\t\t\t\t\t\t<i class=\"feather icon-more-horizontal\"></i>\n\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t<ul class=\"list-unstyled card-option dropdown-menu dropdown-menu-right\">\n\t\t\t\t\t\t\t\t\t<li class=\"dropdown-item full-card\"><a href=\"#!\"><span><i class=\"feather icon-maximize\"></i> maximize</span><span style=\"display:none\"><i class=\"feather icon-minimize\"></i> Restore</span></a></li>\n\t\t\t\t\t\t\t\t\t<li class=\"dropdown-item minimize-card\"><a href=\"#!\"><span><i class=\"feather icon-minus\"></i> collapse</span><span style=\"display:none\"><i class=\"feather icon-plus\"></i> expand</span></a></li>\n\t\t\t\t\t\t\t\t\t<li class=\"dropdown-item reload-card\"><a href=\"#!\"><i class=\"feather icon-refresh-cw\"></i> reload</a></li>\n\t\t\t\t\t\t\t\t\t<li class=\"dropdown-item close-card\"><a href=\"#!\"><i class=\"feather icon-trash\"></i> remove</a></li>\n\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"cust-scroll\" style=\"position:relative;\">\n\t\t\t\t\t\t<div id=\"liveSessionsList\" class=\"card-body p-b-0\" style=\"overflow-y:scroll\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>"}]}]},"mainContent":{"sponserBy":[{"logo":"../assets/brand/itu-logo2.png","class":null,"style":null,"comments":null},{"logo":"../assets/brand/GIRLSinICT.png","class":null,"style":null,"comments":null},{"logo":"../assets/brand/ICT_time.png","class":null,"style":null,"comments":null},{"logo":"../assets/brand/GIRLSinICT_banner.png","class":null,"style":null,"comments":null}],"eventOn":{"date":"22/04/2021","comments":"Please visit this page on 22 April 2021 for LIVE sessions"},"dynamicTabs":[{"id":"home-tab","title":"Events & Sessions","class":"feather icon-airplay mr-2","active":true,"href":"home","style":null,"custom":{"HTMLElement":null},"comments":null},{"id":"session-tab","title":"My Sessions","class":"feather icon-star mr-2","active":false,"href":"contact","style":null,"custom":{"HTMLElement":null},"comments":null},{"id":"profile-tab","title":"My Details","class":"feather icon-star mr-2","active":false,"href":"profile","style":null,"custom":{"HTMLElement":null},"comments":null},{"id":"profile-tab","title":"Feedback","class":"feather icon-star mr-2","active":false,"href":"feedback","style":null,"custom":{"HTMLElement":"<header class='header text-center'>\n    <h2>Rating Widget</h2>\n    <p>A simple star rating widget with <b>jQuery</b> and <b>FontAwesome</b> icons.</p>\n</header>\n<section class='rating-widget'>\n    <!-- Rating Stars Box -->\n    <div class='rating-stars text-center'>\n        <ul id='stars'>\n            <li class='star' title='Poor' data-value='1'>\n                <i class='fa fa-star fa-fw'></i>\n            </li>\n            <li class='star' title='Fair' data-value='2'>\n                <i class='fa fa-star fa-fw'></i>\n            </li>\n            <li class='star' title='Good' data-value='3'>\n                <i class='fa fa-star fa-fw'></i>\n            </li>\n            <li class='star' title='Excellent' data-value='4'>\n                <i class='fa fa-star fa-fw'></i>\n            </li>\n            <li class='star' title='WOW!!!' data-value='5'>\n                <i class='fa fa-star fa-fw'></i>\n            </li>\n        </ul>\n    </div>\n    <div class='success-box'>\n        <div class='clearfix'></div>\n        <img alt='tick image' width='32' src='data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeD0iMHB4IiB5PSIwcHgiIHZpZXdCb3g9IjAgMCA0MjYuNjY3IDQyNi42NjciIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQyNi42NjcgNDI2LjY2NzsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHdpZHRoPSI1MTJweCIgaGVpZ2h0PSI1MTJweCI+CjxwYXRoIHN0eWxlPSJmaWxsOiM2QUMyNTk7IiBkPSJNMjEzLjMzMywwQzk1LjUxOCwwLDAsOTUuNTE0LDAsMjEzLjMzM3M5NS41MTgsMjEzLjMzMywyMTMuMzMzLDIxMy4zMzMgIGMxMTcuODI4LDAsMjEzLjMzMy05NS41MTQsMjEzLjMzMy0yMTMuMzMzUzMzMS4xNTcsMCwyMTMuMzMzLDB6IE0xNzQuMTk5LDMyMi45MThsLTkzLjkzNS05My45MzFsMzEuMzA5LTMxLjMwOWw2Mi42MjYsNjIuNjIyICBsMTQwLjg5NC0xNDAuODk4bDMxLjMwOSwzMS4zMDlMMTc0LjE5OSwzMjIuOTE4eiIvPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8L3N2Zz4K'/>\n        <div class='text-message'></div>\n        <div class='clearfix'></div>\n    </div>\n</section>\n<footer id=\"a-footer\">\n    <div class=\"affiliate-container\" style=\"justify-content: center;\">\n        <a href=\"https://wordpress.com/alp/?aff=17623&cid=1874995\" target=\"_blank\" class=\"wp-overlay-link\"></a>\n        <div class=\"wp-icon-circle\">\n            <span>WP</span>\n        </div>\n        <div class=\"the-text\">\n            <span>Need a site? Get one with WordPress.com!</span>\n        </div>\n    </div>\n    <div class=\"new-react-version\">\n        <div class=\"react-svg-logo\">\n            <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 841.9 595.3\">\n                <g fill=\"#61DAFB\">\n                    <path d=\"M666.3 296.5c0-32.5-40.7-63.3-103.1-82.4 14.4-63.6 8-114.2-20.2-130.4-6.5-3.8-14.1-5.6-22.4-5.6v22.3c4.6 0 8.3.9 11.4 2.6 13.6 7.8 19.5 37.5 14.9 75.7-1.1 9.4-2.9 19.3-5.1 29.4-19.6-4.8-41-8.5-63.5-10.9-13.5-18.5-27.5-35.3-41.6-50 32.6-30.3 63.2-46.9 84-46.9V78c-27.5 0-63.5 19.6-99.9 53.6-36.4-33.8-72.4-53.2-99.9-53.2v22.3c20.7 0 51.4 16.5 84 46.6-14 14.7-28 31.4-41.3 49.9-22.6 2.4-44 6.1-63.6 11-2.3-10-4-19.7-5.2-29-4.7-38.2 1.1-67.9 14.6-75.8 3-1.8 6.9-2.6 11.5-2.6V78.5c-8.4 0-16 1.8-22.6 5.6-28.1 16.2-34.4 66.7-19.9 130.1-62.2 19.2-102.7 49.9-102.7 82.3 0 32.5 40.7 63.3 103.1 82.4-14.4 63.6-8 114.2 20.2 130.4 6.5 3.8 14.1 5.6 22.5 5.6 27.5 0 63.5-19.6 99.9-53.6 36.4 33.8 72.4 53.2 99.9 53.2 8.4 0 16-1.8 22.6-5.6 28.1-16.2 34.4-66.7 19.9-130.1 62-19.1 102.5-49.9 102.5-82.3zm-130.2-66.7c-3.7 12.9-8.3 26.2-13.5 39.5-4.1-8-8.4-16-13.1-24-4.6-8-9.5-15.8-14.4-23.4 14.2 2.1 27.9 4.7 41 7.9zm-45.8 106.5c-7.8 13.5-15.8 26.3-24.1 38.2-14.9 1.3-30 2-45.2 2-15.1 0-30.2-.7-45-1.9-8.3-11.9-16.4-24.6-24.2-38-7.6-13.1-14.5-26.4-20.8-39.8 6.2-13.4 13.2-26.8 20.7-39.9 7.8-13.5 15.8-26.3 24.1-38.2 14.9-1.3 30-2 45.2-2 15.1 0 30.2.7 45 1.9 8.3 11.9 16.4 24.6 24.2 38 7.6 13.1 14.5 26.4 20.8 39.8-6.3 13.4-13.2 26.8-20.7 39.9zm32.3-13c5.4 13.4 10 26.8 13.8 39.8-13.1 3.2-26.9 5.9-41.2 8 4.9-7.7 9.8-15.6 14.4-23.7 4.6-8 8.9-16.1 13-24.1zM421.2 430c-9.3-9.6-18.6-20.3-27.8-32 9 .4 18.2.7 27.5.7 9.4 0 18.7-.2 27.8-.7-9 11.7-18.3 22.4-27.5 32zm-74.4-58.9c-14.2-2.1-27.9-4.7-41-7.9 3.7-12.9 8.3-26.2 13.5-39.5 4.1 8 8.4 16 13.1 24 4.7 8 9.5 15.8 14.4 23.4zM420.7 163c9.3 9.6 18.6 20.3 27.8 32-9-.4-18.2-.7-27.5-.7-9.4 0-18.7.2-27.8.7 9-11.7 18.3-22.4 27.5-32zm-74 58.9c-4.9 7.7-9.8 15.6-14.4 23.7-4.6 8-8.9 16-13 24-5.4-13.4-10-26.8-13.8-39.8 13.1-3.1 26.9-5.8 41.2-7.9zm-90.5 125.2c-35.4-15.1-58.3-34.9-58.3-50.6 0-15.7 22.9-35.6 58.3-50.6 8.6-3.7 18-7 27.7-10.1 5.7 19.6 13.2 40 22.5 60.9-9.2 20.8-16.6 41.1-22.2 60.6-9.9-3.1-19.3-6.5-28-10.2zM310 490c-13.6-7.8-19.5-37.5-14.9-75.7 1.1-9.4 2.9-19.3 5.1-29.4 19.6 4.8 41 8.5 63.5 10.9 13.5 18.5 27.5 35.3 41.6 50-32.6 30.3-63.2 46.9-84 46.9-4.5-.1-8.3-1-11.3-2.7zm237.2-76.2c4.7 38.2-1.1 67.9-14.6 75.8-3 1.8-6.9 2.6-11.5 2.6-20.7 0-51.4-16.5-84-46.6 14-14.7 28-31.4 41.3-49.9 22.6-2.4 44-6.1 63.6-11 2.3 10.1 4.1 19.8 5.2 29.1zm38.5-66.7c-8.6 3.7-18 7-27.7 10.1-5.7-19.6-13.2-40-22.5-60.9 9.2-20.8 16.6-41.1 22.2-60.6 9.9 3.1 19.3 6.5 28.1 10.2 35.4 15.1 58.3 34.9 58.3 50.6-.1 15.7-23 35.6-58.4 50.6zM320.8 78.4z\"/>\n                    <circle cx=\"420.9\" cy=\"296.5\" r=\"45.7\"/>\n                    <path d=\"M520.5 78.1z\"/>\n                </g>\n            </svg>\n        </div>\n        Love React? Check the new React version of this widget you can use right out of the box! \n        <div><a href=\"https://goo.gl/DtrXHy\" target=\"_blank\">\n            React Version of Simple Rating Widget</a>\n        </div>\n    </div>\n</footer>"},"comments":null}]},"footer":{}}
	console.log(vars)
	fetchdata('https://qa.servicedx.com/eventfeed/event/dynamicform/?event_id='+vars.eventId);
	//console.log("DATA is :::: " +JSON.stringify(fetchAPI));
	/*$.ajax({
		url: 'https://qa.servicedx.com/eventfeed/event/dynamicform/'+vars.eventDepartment+'/'+vars.eventName, 
		method: "GET", 
		async:false,
		contentType: "application/json",
		success: function (result) {
           //ICT = result;
			console.log('rest'+JSON.stringify(result));
			return result;
		},
		beforeSend: function (request) {
			//request.setRequestHeader("clientid", session.clientId);
			//showLoader('show');
		},
		complete: function () {
			//showLoader('hide');
		},
		error: function (textStatus) {
			console.log(textStatus);
			//WarningAlert(textStatus.responseJSON.errorCode, textStatus.responseJSON.message);
			//formObj = textStatus.responseJSON;
		}
	});*/
	
}

	var fetchAPI = async function (url, formdata, handlerName) {
		
	}


var fetchdata = async function (url) {
		let response = await fetch(url)
		if (response.ok) {
			response.text().then(function (text) { 
			console.log(url);
				eventRows=JSON.parse(text);
				formdef = JSON.parse(text);
				vars=formdef.mainContent.eventInfo;
				console.log(JSON.parse(text));
				buildHeader(JSON.parse(text));
	            buildSideNav(JSON.parse(text));
	            buildMainContent(JSON.parse(text));
				buildSponserLogos(JSON.parse(text));
				buildRegisterButton(JSON.parse(text));
				
				$('#decription').text(formdef.mainContent.eventInfo.eventDescriptions);
				$('#bannername').text(formdef.mainContent.eventInfo.eventName);	
				$('#bannerdate').text(formdef.mainContent.eventInfo.eventStartDate);					
				//$('#bannerimage').attr('src', formdef.mainContent.eventInfo.registrationImage.attachmentUrl);
				//$('#mainbanner').attr('src', formdef.mainContent.eventInfo.registrationImage.attachmentUrl);
				var baseEnv= "https://qa.servicedx.com/";
				var bannerUrl=formdef.mainContent.eventInfo.registrationImage.attachmentUrl;
				console.log("Main banner url",bannerUrl);
				bannerUrl =baseEnv+bannerUrl;
				$('#mainbanner').attr('src', bannerUrl);

				$('#youTubeLink').attr('src', formdef.mainContent.eventInfo.youTubeLink);
				$("#titleLogoImage").attr('src', baseEnv+formdef.mainContent.eventInfo.titleLogoImage.attachmentUrl);
				
				
			});
		} else {
			console.log(response.status);
					
		}			
	}

			function buildRegisterButton(data){
				
				if(data.mainContent.eventInfo.registrationStartDate !=null && data.mainContent.eventInfo.registrationEndDate !=null){
					
					var registrationStartDate = data.mainContent.eventInfo.registrationStartDate;
					var registrationEndDate = data.mainContent.eventInfo.registrationEndDate;
					var tz = jstz.determine(); // Determines the time zone of the browser client
					var timezone = tz.name(); //For e.g.:"Asia/Kolkata" for the Indian Time.
					var timenow = luxon.DateTime.fromISO(luxon.DateTime.now(), {zone: timezone }).valueOf();
								var convertTS = luxon.DateTime.fromISO(registrationStartDate, {zone: 'UTC' }).valueOf();
								var convertTE = luxon.DateTime.fromISO(registrationEndDate, {zone: 'UTC' }).valueOf();
								var tS = moment(convertTS).valueOf();
								var tE = moment(convertTE).valueOf();
									
								if (inRange(timenow, tS, tE)){
								   var registerButton=`<p class="m-b-0" style="font-size:12px;color:orange">Would like to join this event ?&nbsp;&nbsp;
								   <button type="button" class="btn btn-primary btn-sm" id="registerButton">
							       &nbsp;<i class="fad fa-feather-alt"></i>&nbsp; Register</button> 
								   </p>`
								var registration = `${registerButton}`;
								$("#loginControls").append(registration);
								}
					
				
				}
				
				
				
				
			}

 
		function getUrlVars() {
			var vars = {};
			var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function (m, key, value) {
				var convert = convertType(decodeURI(value));
				vars[key] = convert;
			});
			return vars;
		}

					var convertType = function (value) {
						var values = {
								undefined: undefined,
								null: null,
								true: true,
								false: false
							},
							isNumber = !isNaN(+(value));
						return isNumber && +(value) || !(value in values) && value || values[value];
					};
						
					function getDynamicForm(){
						var content = getDynamicContent();
						
						//buildHeader(content);
						//buildSideNav(content);
						//buildMainContent(content);
					}

					function buildHeader(content){
						var header = content.header;
						var logo = '';
						var registration = '';
						var login = '';
						var cancel = '';
						console.log(header);
						if(header.hoster){
							console.log("COMING HERE");
							logo += `<div class="row" style="border-radius:5px;position:absolute;top:-20px;left:40px;box-shadow:0 0 0 5px #ffffff30;background:white;padding:8px 20px;">`;
							header.hoster.forEach(function (data) {
							logo += `<div style="">&emsp;<img src='${data.src}' style="${data.style}" alt="" class="${data.className}">&nbsp;</div>`;
							});
							logo += `</div>`;
							$("#header-logo").append(logo);
						}
						
						
						
						

						if(header.isRegistrationRequired){
							//if(header.registration.custom){
							//var custom = header.registration.custom[0].HTMLElement.replace(/\\/g, '');
							
							var custom = `<div id="loginControls" class="col-md-auto text-right" style="border:0px solid red;white-space: nowrap;">
												<p class="m-b-0" style="font-size:12px;color:orange">Would like to join this event ?&nbsp;&nbsp;
													<button type="button" class="btn btn-primary btn-sm" id="registerButton">
													&nbsp;<i class="fad fa-feather-alt"></i>&nbsp; Register</button> 
												</p>
											</div>`

								registration += `${custom}`;
								$("#header-register").append(registration);
							//}
						}
						
						if(header.isLoginRequired){
							//if(header.login.custom){
								//var custom = header.login.custom[0].HTMLElement.replace(/\\/g, '');
								
								var custom = `<div id="logoutControls" class="col-md-auto text-right" style="display:none;border:0px solid red;white-space: nowrap;">
												<p class="m-b-0" style="font-size:12px;color:orange">&nbsp;&nbsp;
													<button type="button" class="btn btn-primary btn-sm" id="sessionLogOut">
													&nbsp;<i class="fad fa-feather-alt"></i>&nbsp; Logout</button> 
												</p>
											</div>`

								login += `${custom}`;
								$("#header-login").append(login);
							//}
						}
						if(header.isCancelRequired){
							//if(header.login.custom){
								//var custom = header.login.custom[0].HTMLElement.replace(/\\/g, '');
								
								var custom = `<div id="cancell" class="col-md-auto text-right" style="display:none;border:0px solid red;white-space: nowrap;">
												<p class="m-b-0" style="font-size:12px;color:orange">&nbsp;&nbsp;
													<button type="button" class="btn btn-primary btn-sm" id="cancelRegistrationOne">
													&nbsp;<i class="fad fa-feather-alt"></i>&nbsp; Cancel Registration</button> 
												</p>
											</div>`

								cancel += `${custom}`;
								$("#header-cancel").append(cancel);
							//}
						}
					}

					function buildSideNav(content){
						var nav = content.navigator;
						var card = '';
						if(nav.card){
							nav.card.forEach(function (cards) {
								if(cards.logo){
									card += `<div class="card">
											<div class="card-header d-flex align-items-center justify-content-between">
												<h5 class="mb-0">${cards.title}</h5>
												<span class="badge badge-light-primary float-right"></span>
											</div>
											<div class="card-body text-center" style="padding:5px;">`;
									cards.logo.forEach(function (imageData) {
										card += `<img style="width:80px" class="img-fluid w-20" src="${imageData.src}">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`;
									});
									card += `</div></div>`;
								}else if(cards.custom){
									var custom = cards.custom[0].HTMLElement.replace(/\\/g, '');
									card+= `${custom}`;
								}
							});
							$("#nav-card").append(card);
						}
					}


function buildAllSessionAndEvents(row){
	
		
		
		//	var timenow = luxon.DateTime.fromISO(luxon.DateTime.now(), {zone: 'America/Port_of_Spain'}).valueOf();
			var tz = jstz.determine(); // Determines the time zone of the browser client
			var timezone = tz.name(); //For e.g.:"Asia/Kolkata" for the Indian Time.
			var timenow = luxon.DateTime.fromISO(luxon.DateTime.now(), {zone: timezone }).valueOf();
		
			$('#allSessions').DataTable().clear().destroy();
			$('#allSessions').dataTable( {
				"aaData": row,
				"columns": [
					{ row: "sessionName",
						render :  function(data,type,row){
							if (type=="sort"){
								var convertTS = luxon.DateTime.fromISO(row.startDate, {zone: 'UTC' }).valueOf();
								var convertTE = luxon.DateTime.fromISO(row.endDate, {zone: 'UTC' }).valueOf();
								var tS = moment(convertTS).valueOf();
								var tE = moment(convertTE).valueOf();
									//alert(tS);
								if (inRange(timenow, tS, tE)){
									var subOutStr  = '<div class="align-middle m-b-25">';
										subOutStr += '<img src="../assets/dist/images/icons/session.png" class="img-radius align-top m-r-15">';
										subOutStr += '<div class="d-inline-block">';
										subOutStr += '<a href="#!"> <h6>'+row.sessionDisplayName+'</h6> </a>';
										subOutStr += '<p class="m-b-0">'+row.speaker+'</p>';
										subOutStr += '<span class="status active"></span>';
										subOutStr += '</div>';
										subOutStr += '</div>';
									$("#liveSessionsList").append(subOutStr);
								}	
							}
							var timeStartDate = luxon.DateTime.fromISO(row.startDate, {zone: 'UTC' }).valueOf();
							var timeEndDate = luxon.DateTime.fromISO(row.endDate, {zone: 'UTC' }).valueOf();
							var startTime = new Date(timeStartDate).toLocaleTimeString("en-US");
							var endTime = new Date(timeEndDate).toLocaleTimeString("en-US")
							//console.log(s)
							//console.log( timestamp.format("HH/mm/ss") );
							outStr  = '<div id="'+row.eventId+'-'+row.sessionName+'" class="card user-card user-card-1" style="margin-bottom:10px;">';
							outStr += '<div class="card-header">';
							outStr += '<h5 class="font-weight-normal">';
							outStr += moment(timeStartDate).format('MMMM D YYYY') +" "+"-"+ startTime;
							outStr += '<span class="text-muted mb-0">&emsp;to&emsp;</span>';
							outStr += moment(timeEndDate).format('MMMM D YYYY')+" "+"-"+ endTime;
							outStr += '</h5>';
							outStr += '</div>';
							outStr += '<a href="#!"><img src="" alt="" class="img-fluid"></a>';
							outStr += '<div class="card-body" style="padding-top:0px;">';
							outStr += '<a href="#!" class="text-h-primary">';
							outStr += '<h6>'+row.sessionDisplayName;
							if(sessionRegsiteredList.includes(row.sessionName)){							
								console.log("status reg");
								outStr += '<span style="color:red; margin-right:10px">Already Registered for this Session</span>';
							}
							outStr += '</h6></a>';
							outStr += '<p class="text-muted mb-0" style="white-space:break-spaces;">'+row.comments+'</p>';
							outStr += '</div>';
							outStr += '<div class="card-body">';
							outStr += '<div class="row justify-content-between mb-4">';
							outStr += '<div class="col col-auto text-muted" style="white-space:nowrap;border:0px solid red; font-size:small">Facilitators &emsp;';
							outStr += '<span><h6 class="mb-0 text-h-primary" style="color:#7a72ef;line-height:25px;">'+row.speaker+'</h6></span></div>';
							outStr += '<div class="col col-auto text-muted" style="white-space:nowrap;border:0px solid red;color:#7a72ef; font-size:small">Collaborators &emsp;';
							outStr += '<div class="col col-auto text-muted" style="white-space:nowrap;border:0px solid red; font-size:small">'+row.sponsor+' &emsp;';
							outStr += '</div>';
							outStr += '</div>';
							outStr += '</div>';
							outStr += '<div class="card-body hover-data text-white" style="background:linear-gradient(to bottom,rgba(36, 46, 62, 0.52),rgba(36, 46, 62, 0.98)) !important;">';
							outStr += '<div>';
							outStr += '<h4 class="text-white">Interesting ?</h4>';
							outStr += '<h5 class="text-white">Like to register for this session ?</h5>';
							outStr += '<p class="mb-3">&nbsp</p>';
							outStr += '';
							outStr += '<button type="button" id='+row.sessionName+'  onclick="registerSession(\'' + row.sessionName + '\',\'' + row.eventId + '\')"; class="btn waves-effect waves-light btn-warning"><i class="feather icon-link"></i> Register</button>&nbsp;&nbsp;';
							outStr += '<button style="display:none" type="button" class="btn waves-effect waves-light btn-danger"><i class="feather icon-download"></i> Bookmark</button>';
							outStr += '</div>';
							outStr += '</div>';
							outStr += '</div>';
							outStr += ''; 
							console.log("OUTSTR" + outStr);
							return outStr;
						}
					}
				]
			});
				
			var wrapperRow = $($("#allSessions_wrapper div:first-child")[0]);
			wrapperRow.css("margin","0px 8px");
			wrapperRow.css("padding","5px 15px");
			wrapperRow.css("padding-top","10px");
			wrapperRow.css("background","white");
			wrapperRow.css("border-radius","5px");
		
	}

			
			
			function buildSponserLogos(content){
				var mainContent = content.navigator.card;
				
				var arrayLength = content.navigator.card.length;
				var sponsorLogos = '';
				
				if(arrayLength==0){
					
					sponsorLogos += `<p>No Informations Available</p>
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp`;
						$("#platform").append(sponsorLogos);
						$("#sponser").append(sponsorLogos);
					
				}
				
				if(arrayLength==1){
					
					if(mainContent[0].title =="SPONSERS"){
						buildSponserData(mainContent,0);
						sponsorLogos += `<p>No Informations Available</p>
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp`;
						$("#platform").append(sponsorLogos);
					}else if(mainContent[0].title =="PLATFORMPROVIDER"){
						buildPlatformData(mainContent,0);
						sponsorLogos += `<p>No Informations Available</p>
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp`;
						$("#sponser").append(sponsorLogos);
					}
					
					
				}
				
				if(arrayLength==2){
					if(mainContent[0].title =="SPONSERS"){
						buildSponserData(mainContent,0);
					}else if(mainContent[0].title =="PLATFORMPROVIDER"){
						buildPlatformData(mainContent,0);
						
					}
					
					if(mainContent[1].title =="PLATFORMPROVIDER"){
						buildPlatformData(mainContent,1);
					}else if(mainContent[1].title =="SPONSERS"){
						buildSponserData(mainContent,1);
						
					}
					
					
				}
					
			}
			
			function buildSponserData(mainContent,index){
				var sponsorLogos = '';
				var baseurl="https://qa.servicedx.com/";
				mainContent[index].sponser.forEach(function (sponsers) {
						if(sponsers){
							console.log(sponsers.href);
						sponsorLogos += `<img style="width:80px" class="img-fluid w-20" src="` + baseurl + `${sponsers.href}">
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp`;
				
							
						}
					});
					$("#sponser").append(sponsorLogos);	
				
			}
			
			
			function buildPlatformData(mainContent,index){
				var sponsorLogos = '';
				var baseurl="https://qa.servicedx.com/";
				mainContent[index].sponser.forEach(function (sponsers) {
						if(sponsers){
							console.log(sponsers.href);
						sponsorLogos += `<img style="width:80px" class="img-fluid w-20" src="` + baseurl + `${sponsers.href}">
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp`;
				
							
						}
					});
					$("#platform").append(sponsorLogos);	
				
			}

			function buildMainContent(content){
				var mainContent = content.mainContent;
				var tabs = '';
				if(mainContent.dynamicTabs){
					tabs += `<div class="row" style="border:0px solid black">
									<div class="col-md-4 text-center mt-md-4"> &nbsp; </div>
									<div class="col-md-8 mt-md-4" style="background-color:white;border-radius:5px;border-bottom-left-radius:0px;border-bottom-right-radius:0px;" >
										<ul class="nav nav-tabs profile-tabs nav-fill" id="myTab" role="tablist">`;
					mainContent.dynamicTabs.forEach(function (dTabs) {
						if(dTabs){
							console.log(dTabs.id);
							tabs += `<li class="nav-item">`;
							var isActive = '';
							var isSelected = false;
							if(dTabs.active){
								isActive = true;
								isSelected = true;
							}
							tabs += `<a class="nav-link text-reset ${isActive}" id="${dTabs.id}" data-toggle="tab" href="#${dTabs.href}" role="tab" aria-controls="${dTabs.href}" aria-selected="${dTabs.isSelected}"><i class="${dTabs.class}"></i>${dTabs.title}</a>`;
							tabs += `</li>`;
						}
					});
					tabs +=  `</ul></div></div>`;
					$("#main-content").append(tabs);
				}
			
				buildAllSessionAndEvents(mainContent.dynamicTabs[0].data);
				feedBackformdef = mainContent.dynamicTabs[3].data;
				
			}


			$(document).ready(function(){
			  rating();
			});

			function rating() {
				 $('#stars li').on('mouseover', function(){
				var onStar = parseInt($(this).data('value'), 10);
			   
				$(this).parent().children('li.star').each(function(e){
				  if (e < onStar) {
					$(this).addClass('hover');
				  }
				  else {
					$(this).removeClass('hover');
				  }
				});
				
			  }).on('mouseout', function(){
				$(this).parent().children('li.star').each(function(e){
				  $(this).removeClass('hover');
				});
			  });
			  
			  $('#stars li').on('click', function(){
				var onStar = parseInt($(this).data('value'), 10);
				var stars = $(this).parent().children('li.star');
				
				for (i = 0; i < stars.length; i++) {
				  $(stars[i]).removeClass('selected');
				}
				
				for (i = 0; i < onStar; i++) {
				  $(stars[i]).addClass('selected');
				}
				
				var ratingValue = parseInt($('#stars li.selected').last().data('value'), 10);
				var msg = "";
				if (ratingValue > 1) {
					msg = "Thanks! You rated this " + ratingValue + " stars.";
				}
				else {
					msg = "We will improve ourselves. You rated this " + ratingValue + " stars.";
				}
				responseMessage(msg);
			  });
			}

			function responseMessage(msg) {
			  $('.success-box').fadeIn(200);  
			  $('.success-box div.text-message').html("<span>" + msg + "</span>");
			}

			$(document).on("click", "#registerButton, #registrationFormClose", function(){
		
			console.log((JSON.stringify(formdef.mainContent.eventInfo.registrationFormDefinition)));
			
			const submit_button = { "type":"button","label":"Submit", "key":"submit","disableOnInvalid":false,"input":true,"tableView":false,"validate":{"unique":false,"multiple":false }}; 
			var formDefinition = null; 
			formDefinition = JSON.parse(formdef.mainContent.eventInfo.registrationFormDefinition);
			//formDefinition.components.push(submit_button);
			//var defnition = data.eventRegisterFormDefn;
			//Formio.createForm($("#registrationFormDiv"), formDefinition);
				
			Formio.createForm(document.getElementById('registrationFormDiv'), formDefinition).then(function (form) {
					
				form.on('submit', function (submission) {
					$('#formSubmit').attr('disabled','disabled');		
					var userObject = submission.data;
					console.log(userObject);
						
					var formdata= new Object();
					formdata.eventRegisterSubmissionData=JSON.stringify(userObject);
					
					if(formdef.mainContent.eventInfo.eventType=="DEPARTMENT-WITHOUT-NOTIFICATION"){
					var options = { method: "POST", body: JSON.stringify(formdata), redirect: 'follow', headers: new Headers({'content-type': 'application/json'}) };
					postRegistrationData(sdxenv+"/eventfeed/invitee/"+vars.eventDepartment+"/"+userObject.email+"/"+vars.eventId+"/",options);
					}else{
					var options = { method: "POST", body: JSON.stringify(formdata), redirect: 'follow', headers: new Headers({'content-type': 'application/json'}) };
					postRegistrationData(sdxenv+"/eventfeed/invitee/"+vars.eventDepartment+"/"+userObject.userName+"/"+vars.eventId+"/",options);
						
					}

					
				});

				form.on('redraw', () => {
					form.triggerChange();
				});
			});
				
		$('#registrationFormHolder').modal('toggle');
		
		var $this = $("#registrationForm");
		var port = $($this.parents('.card'));
		port.toggleClass("full-card");
			
		$(this).children('a').children('span').toggle();
		if (port.hasClass('full-card')) {
			$('body').css('overflow', 'hidden');
			$('html,body').animate({ scrollTop: 0 }, 1000);
			var elm = $(port, this);
			var off = elm.offset();
			var l = off.left;
			var t = off.top;
			var docH = $(window).height();
			var docW = $(window).width();
			port.animate({
				'marginLeft': l - (l * 2), 'marginTop': t - (t * 2), 'width': docW, 'height': docH,
			});
		} else {
			$('body').css('overflow', '');
			$('body').css('overflow-x', 'hidden');	
			port.removeAttr('style');
			setTimeout(function() {
				$('html,body').animate({
					scrollTop: ($(port).offset().top) - 70
				}, 500);
			}, 400);
		}
		//$("#registrationCard").css("padding","10px");
		//$("#registrationCard").css("background","-webkit-linear-gradient(194deg, rgb(45, 22, 119) 0%, rgb(28, 138, 218) 35%, rgb(76, 7, 63) 100%)");
		
	});	
	
		
		var postRegistrationData = async function (url, requestOptions) {
			let response = await fetch(url, requestOptions) 
			if (response.ok) {
				response.text().then(function (text) {
					//$('#registrationFormClose').click();
					console.log(text);
					swal("Whoa", text); 
				});
			} else if(response.status==429){
				console.log(response.status);
				response.text().then(function (text) { 
				  swal("Alert", text);
				}); 
			}
			else{
				console.log(response.status);
				response.text().then(function (text) { 
				  swal("Something went wrong", "", "error");
				}); 
			}
			$('#registrationFormHolder').modal('toggle');	
		}
		
		$(document).on("click", "#feedback-tab", function(){
		
					$("#NoFeedBackForm").empty();
					console.log( formdef.mainContent.dynamicTabs[3].data);
					var tabs = '';
					var formDefinition = null;
					
					formDefinition = JSON.parse(formdef.mainContent.dynamicTabs[3].data);
					
					var endDateTime = new Date(formdef.mainContent.eventInfo.eventEndDate);
// 					console.log("first end time",endDateTime);
// 			                var istEndTime = endDateTime.toLocaleString('en-IN', {timeZone: 'Asia/Kolkata'});			                       
// 					console.log("end time",istEndTime);
			
					var tz = jstz.determine(); // Determines the time zone of the browser client
					var timezone = tz.name(); //For e.g.:"Asia/Kolkata" for the Indian Time.
			                var timenow = new Date();
                                        console.log(timenow.toLocaleString('en-GB', { timeZone: 'Europe/London' }));
			                timenow = timenow.toLocaleString('en-GB', { timeZone: 'Europe/London' });
					//var timenow = luxon.DateTime.fromISO(luxon.DateTime.now(), {zone: 'Europe/London'});
					var currentDateTime = timenow;	
			                console.log("current time",currentDateTime);
					var Time1 = moment(endDateTime);			                	             			                
					var Time2 = moment(currentDateTime);						
					if(formdef.mainContent.eventInfo.eventEndDate){					
					if(logedInUserName == null){
						
						var outStr 	 = '<div class="text-center w-100" style="padding:25px;margin:25px;background:white;border-radius:7px;">';
						outStr 	+= '<h5 class="text-info mb-1">Please register or login to view your Feedback form</h5>';
						outStr 	+= '</div>';
						$("#NoFeedBackForm").append(outStr);
					}		
					else if(Time2.isBefore(Time1)){
					console.log("No feedback");
					console.log("current time",currentDateTime);
					console.log("event time",endDateTime);
					tabs += ` <center><h5 class="mb-0"> Feedback will be enabled only when the Event is completed. </h5></center> `;
					$("#NoFeedBackForm").append(tabs);

					}
					else{


					Formio.createForm(document.getElementById('FeedBackForm'), formDefinition).then(function (form) {
					form.on('submit', function (submission) {
					$('#formSubmit').attr('disabled','disabled');
					var userObject = submission.data;
					console.log(userObject);
					
					console.log(userObject);

	                var formdata= new Object();
					formdata.feedBack=JSON.stringify(userObject);
					
					var options = { method: "PUT", body: JSON.stringify(formdata), redirect: 'follow', headers: new Headers({'content-type': 'application/json'}) };
					//alert("a");
					postFeedbackData(sdxenv+'/eventfeed/invitee/update/'+vars.eventDepartment+'/'+logedInUserName+'/'+vars.eventId+'/EVENT/',options);	
						

					});

					form.on('redraw', () => { form.triggerChange(); });
					});

					}
					}

					else{
					tabs += ` <center><h5 class="mb-0"> Contact The Event Manager regarding the feedback</h5></center> `;
					$("#NoFeedBackForm").append(tabs);
					}
			});
	function registerSession(sessionName,eventId){ 	
		
	//	alert(sdxenv+"/eventfeed/invitee/"+vars.eventDepartment+"/"+logedInUserName+"/"+vars.eventId+"/?session_name="+sessionName);
		var formdata= new Object();
		//formdata.eventRegisterSubmissionData=null
		if(logedInUserName!=null){
			var options = { 
			method: "POST", 
			body: JSON.stringify(formdata), redirect: 'follow', headers: new Headers({'content-type': 'application/json'}) };
						
			postRegistrationSessionData(sdxenv+"/eventfeed/invitee/"+vars.eventDepartment+"/"+logedInUserName+"/"+vars.eventId+"/?session_name="+sessionName,options,logedInUserName);
				
		} else {
			//swal("Please Login to Register");
			swal("You haven't logged-in or registered yet", "Only after register/login, you shall register to sessions", "warning")
			.then(function () {
				$("#registerButton").focus();
				$("#registerButton").addClass('animated');
				$("#registerButton").addClass('jello');
				setTimeout(function() { $("#registerButton").removeClass('animated');$("#registerButton").removeClass('jello'); }, 10000);
				$("#registerButton").flash(5000, 10);
			});			
		}		
	}
	
		var postRegistrationSessionData = async function (url, requestOptions,logedInUserName) {
		let response = await fetch(url, requestOptions)
		if (response.ok) {
			response.text().then(function (text) { 
				console.log(text);
				swal("Registration done successfully", text)
				.then(function () {
					buildLoggedInUserSessions(logedInUserName);
				});	
			});
		} else {
			console.log(response.status);
			response.text().then(function (text) {			  
				swal("Something went wrong", "", "error");
			});		
		}			
	}
	
		$(document).on("click",'button[id="launchLogin"]',function() { 
		
		
		if(formdef.mainContent.eventInfo.eventType=="DEPARTMENT-WITH-AUDIENCE"){
			
			
				loginFormDefinition = {"components": [ { "label": "Enter your User-Name", "tableView": true, "key": "email", "type": "textfield", "input": true }, { "type": "button", "label": "Submit", "key": "submit", "disableOnInvalid": true, "input": true, "tableView": false } ]};	
				Formio.createForm(document.getElementById('loginFormDiv'), loginFormDefinition).then(function (form) {
					
					form.on('submit', function (submission) {
						$('#formSubmit').attr('disabled','disabled');
						
						var userObject = submission.data;
						console.log(userObject);
						
						var formdata= new Object();
						formdata.eventRegisterSubmissionData=JSON.stringify(userObject);
						
						var options = { method: "GET", redirect: 'follow', headers: new Headers({'content-type': 'application/json'}) };
							
							//alert(vars.eventDepartment);
						loginCheck(sdxenv+"/eventfeed/login?event_department_name="+vars.eventDepartment+"&event_id="+vars.eventId+"&user_name="+userObject.email,options,userObject.email);
					});

					form.on('redraw', () => { form.triggerChange(); });
				});
			
			
		}else{
				var formDefinition = null;
				var loginFormDefinition = null;
			//alert("asd");
				formDefinition = {"components": [ { "label": "Enter your Registered Email Id", "tableView": true, "key": "email", "type": "email", "input": true }, { "type": "button", "label": "Submit", "key": "submit", "disableOnInvalid": true, "input": true, "tableView": false } ]};	
				Formio.createForm(document.getElementById('loginFormDiv'), formDefinition).then(function (form) {
					
					form.on('submit', function (submission) {
						$('#formSubmit').attr('disabled','disabled');
						
						var userObject = submission.data;
						console.log(userObject);
						
						var formdata= new Object();
						formdata.eventRegisterSubmissionData=JSON.stringify(userObject);
						
						var options = { method: "GET", redirect: 'follow', headers: new Headers({'content-type': 'application/json'}) };
							
							//alert(vars.eventDepartment);
						loginCheck(sdxenv+"/eventfeed/login?event_department_name="+vars.eventDepartment+"&event_id="+vars.eventId+"&user_name="+userObject.email,options,userObject.email);
					});

					form.on('redraw', () => { form.triggerChange(); });
				});
				
		}
				//registrationFormDiv 
			$('#modal-to-login').modal('toggle'); 
		});
		
		
			function buildLoggedInUserSessions(userID){		
	        sessionRegsiteredList = []; 
		$("#myRegistrations").empty();
		if (userID){ 
	//	alert(vars.eventId);
			$.ajax({ 'url': sdxenv+'/eventfeed/invite/userdetails?event_id='+vars.eventId+'&user_name='+userID, 'method': "GET", 'contentType': 'application/json'
			}).done( function(data) {
				var randAnim 	= animTypes[Math.floor(Math.random() * animTypes.length)];
				var tz = jstz.determine(); // Determines the time zone of the browser client
				var timezone = tz.name(); //For e.g.:"Asia/Kolkata" for the Indian Time.
			
				var timenow 	= luxon.DateTime.fromISO(luxon.DateTime.now(), {zone: timezone}).valueOf();
				$.each(data, function(index, value){
				
					if (value.sessions){ 
						if(value.status=='REGISTERED' || value.status=='ATTENDED'){
							sessionRegsiteredList.push(value.sessionName);
						}
					
						var convertTSMinus1Hour = luxon.DateTime.fromISO(value.sessions.startDate, {zone: 'UTC' }).minus({hours: 1}).valueOf();
						var convertTS = luxon.DateTime.fromISO(value.sessions.startDate, {zone: 'UTC' }).valueOf();
						var convertTE = luxon.DateTime.fromISO(value.sessions.endDate, {zone: 'UTC' }).valueOf();
						var tSMinus1Hour = moment(convertTSMinus1Hour).valueOf();
						var tS = moment(convertTS).valueOf();
						var tE = moment(convertTE).valueOf();
							
						var showJoinSession = inRange(timenow, tSMinus1Hour, tE);
						var isEventLive = inRange(timenow, tS, tE);
						var eventFinished = inRange(tE, tS, timenow);
						outStr  = '';
						outStr += '<div class="col-md-6">';
						outStr += '<div class="card user-card user-card-1">';
						outStr += '<div class="card-header border-0 p-2 pb-0"><div class="cover-img-block"> </div> </div>';
						outStr += '<div class="card-body pt-0">';
						outStr += '';
						outStr += '<div class="user-about-block text-center">';
						outStr += '<div class="row align-items-end">';
						outStr += '<div class="col text-left pb-3"> <i style="font-size:1.05rem;--fa-primary-color:rgb(225,19,131);--fa-secondary-color:rgb(245,130,31);" class="fad fa-star text-muted f-20"></i>&nbsp;'+value.status+'</div>';
						outStr += '<div class="col"><img class="img-radius img-fluid wid-80" src="../assets/dist/images/icons/session.png"></div>';
						outStr += '<div class="col text-right pb-3">';
						if (isEventLive){
							outStr += '<div class="animation-toggle animated" data-animate="'+randAnim+'" style="box-shadow:none;margin-bottom:0;border:none;position:absolute;top:-50px;right:0px;">';
							outStr += '<span class="pcoded-badge badge badge-success">Live</span>';
							outStr += '</div>';
						}
					
						var timenowStartDateforSession = luxon.DateTime.fromISO(value.sessions.startDate, {zone: 'UTC' }).valueOf();
						var timenowEndDateforSession = luxon.DateTime.fromISO(value.sessions.endDate, {zone: 'UTC' }).valueOf();
						var startTimeforSession = new Date(timenowStartDateforSession).toLocaleTimeString("en-US");
						var endTimeforSession = new Date(timenowEndDateforSession).toLocaleTimeString("en-US")
						outStr += '</div>';
						outStr += '</div>';
						outStr += '</div>';
						outStr += '<div class="text-center">';
						outStr += '<h6 class="mb-1 mt-3">'+( isEventLive? value.location:"" )+'</h6>';
						outStr += '<p class="mb-3 text-muted">Event : '+value.eventName+'&emsp;Session : '+value.sessionDisplayName+'</p>';
						outStr += '<p class="mb-0">';
						outStr += moment(timenowStartDateforSession).format('MMMM D YYYY') +"-"+" "+startTimeforSession;
						outStr += '<span class="text-muted mb-0">&emsp;to&emsp;</span>';
						outStr += moment(timenowEndDateforSession).format('MMMM D YYYY')+"-"+" "+endTimeforSession;
						outStr += '</p>';
						outStr += '</div>';
						outStr += '';
						outStr += '</div>';
						if (!eventFinished && (value.status == 'REGISTERED' || showJoinSession)) {
							outStr += '<div class="card-body hover-data text-white" style="background:linear-gradient(to bottom,rgba(36,46,62,0.52),rgba(36,46,62,0.98)) !important;">';
							if (showJoinSession) {
								outStr += '<div style="display: block;">';
								if (value.sessions) {
									outStr += '<div>';
									outStr += '<h5 class="text-white">This Session is On-Air</h5>';
									outStr += '<h5 class="text-white">&nbsp;</h5>';
									outStr += '</div>';
									outStr += '<div>';
									outStr += '<a target="_blank" href="'+buildSessionInvokeURL(userID, value)+'"><button type="button" class="btn waves-effect waves-light btn-danger"><i class="fas fa-hand-point-right"></i>&nbsp;&nbsp;Join Session</button>';
									outStr += '</a>'; 
									outStr += '</div>';
								} else {
									outStr += '<h5 class="text-white">Please wait for host to enable the session</h5>';
									outStr += '<h5 class="text-white">&nbsp;</h5>';
									outStr += '<p class="mb-3">&nbsp;</p>';
								}
								outStr += '</div>';
							} else {
								outStr += '<button type="button" class="btn btn-danger" id='+value.sessionName+'  onclick="cancelSession(\'' + value.eventDepartmentName + '\',\'' + value.sessionName + '\',\'' + value.userName + '\',\'' + value.eventId + '\')";>Deregister Session</button>';
							}
							outStr += '</div>';
							outStr += ''; 
						} else {
							console.log(" for["+value.eventName+" "+value.sessionName+"] NOW, Start, end "+timenow+" , "+tS+" - "+tE);
						}
						outStr += '</div>';
						outStr += '</div>';
						outStr += '';
						$("#myRegistrations").append(outStr); 
					} 
				
				});
				const filteredRow = eventRows.mainContent.dynamicTabs[0].data.filter(r => !sessionRegsiteredList.includes(r.sessionName));
				buildAllSessionAndEvents(filteredRow);
			}).fail(function (exception) {
			//alert("Exception "+JSON.stringify(exception));
			}); 
		
		} else {
			var outStr 	 = '<div class="text-center w-100" style="padding:25px;margin:25px;background:white;border-radius:7px;">';
				outStr 	+= '<h5 class="text-info mb-1">Please register or login to view your registered sessions</h5>';
				outStr 	+= '</div>';
			$("#myRegistrations").append(outStr);
		}
	}
	
	var postFeedbackData = async function (url, requestOptions) {
		let response = await fetch(url, requestOptions)
		if (response.ok) {
			response.text().then(function (text) { 
				console.log(text);
				swal("Feedback submitted successfully")
				.then(function () {
					
				});	
			});
		} else {
			console.log(response.status);
			response.text().then(function (text) {			  
				swal("Something went wrong", "", "error");
			});		
		}			
	}
	
	var cancelRegistration = async function (logedInUserName) {
		var options = { method: "DELETE", headers: new Headers({'content-type': 'application/json'}) };
		console.log("Inside Delete");
		console.log("event id", vars.eventId);
		console.log("event department name", vars.eventDepartment);
		let url=sdxenv+"/eventfeed/invitee/"+vars.eventDepartment+"?event_id="+vars.eventId+"&user_name="+logedInUserName;
		let response = await fetch(url, options)
		if (response.ok) {
			response.text().then(function (text) { 
				console.log(text);
				swal("Alert", text)
				.then(function () {
					buildLoggedInUserSessions(null);
				});	
			});
		} else {
			console.log(response.status);
			response.text().then(function (text) {			  
				swal("Something went wrong", "", "error");
			});		
		}
	}

	var cancelSession = async function (eventDepartmentName, sessionName, userName, eventId) {
		swal({
			text: "Are you sure you want to deregister this session?",
			type: "warning",
			buttons: ["No", "Yes"]
		 }).then(
			function (result) {
				if (result) {
					console.log("confirmed");
					cancelSessionConfirmed(eventDepartmentName, sessionName, userName, eventId);
				} else {
					console.log("cancelled");
					return false;
				}
			}
		);
	}

	var cancelSessionConfirmed = async function (eventDepartmentName, sessionName, userName, eventId) {
		var options = { method: "DELETE", headers: new Headers({'content-type': 'application/json'}) };
		let url=sdxenv+"/eventfeed/invitee/"+eventDepartmentName+"/"+userName+"/"+eventId+"/"+sessionName;
		let response = await fetch(url, options)
		if (response.ok) {
			response.text().then(function (text) { 
				console.log(text);
				swal("Alert", text)
				.then(function () {
					buildLoggedInUserSessions(userName);
				});	
			});
		} else {
			response.text().then(function (text) {			  
				swal("Something went wrong", "", "error");
			});		
		}
	}
	
	
