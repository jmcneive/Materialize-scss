!function(e){e.fn.materialbox=function(){return this.each(function(){function t(){a=!1;var t=d.parent(".material-placeholder"),o=(window.innerWidth,window.innerHeight,d.data("width")),l=d.data("height");e("#materialbox-overlay").fadeOut(n,function(){i=!1,e(this).remove()}),d.velocity({width:o,height:l,left:0,top:0},{duration:n,queue:!1,easing:"easeOutQuad"}),e(".materialbox-caption").velocity({opacity:0},{duration:n+200,queue:!1,easing:"easeOutQuad",complete:function(){t.css({height:"",width:"",position:"",top:"",left:""}),d.css({height:"",position:"",top:"",left:"",width:"","max-width":"",position:"","z-index":""}),d.removeClass("active"),a=!0,e(this).remove()}})}var i=!1,a=!0,o=275,n=200,d=e(this),l=e("<div></div>").addClass("material-placeholder");d.wrap(l),d.on("click",function(){var n=d.parent(".material-placeholder"),l=window.innerWidth,c=window.innerHeight,s=d.width(),r=d.height();if(a===!1)return!1;if(i&&a===!0)return t(),!1;a=!1,d.addClass("active"),i=!0,n.css({width:n[0].getBoundingClientRect().width,height:n[0].getBoundingClientRect().height,position:"relative",top:0,left:0}),d.css({position:"absolute","z-index":1e3}).data("width",s).data("height",r);var u=e('<div id="materialbox-overlay"></div>').css({opacity:0}).click(function(){a===!0&&t()});if(e("body").append(u),u.velocity({opacity:1},{duration:o,queue:!1,easing:"easeOutQuad"}),""!==d.data("caption")){var h=e('<div class="materialbox-caption"></div');h.text(d.data("caption")),e("body").append(h),h.css({display:"inline"}),h.velocity({opacity:1},{duration:o,queue:!1,easing:"easeOutQuad"})}var p=0,f=s/l,v=r/c,m=0,w=0;f>v?(p=r/s,m=.9*l,w=.9*l*p):(p=s/r,m=.9*c*p,w=.9*c),d.hasClass("responsive-img")?d.velocity({"max-width":m,width:s},{duration:0,queue:!1,complete:function(){d.css({left:0,top:0}).velocity({height:w,width:m,left:e(document).scrollLeft()+l/2-d.parent(".material-placeholder").offset().left-m/2,top:e(document).scrollTop()+c/2-d.parent(".material-placeholder").offset().top-w/2},{duration:o,queue:!1,easing:"easeOutQuad",complete:function(){a=!0}})}}):d.css("left",0).css("top",0).velocity({height:w,width:m,left:e(document).scrollLeft()+l/2-d.parent(".material-placeholder").offset().left-m/2,top:e(document).scrollTop()+c/2-d.parent(".material-placeholder").offset().top-w/2},{duration:o,queue:!1,easing:"easeOutQuad",complete:function(){a=!0}})}),e(window).scroll(function(){i&&t()}),e(document).keyup(function(e){27===e.keyCode&&a===!0&&i&&t()})})}}(jQuery);