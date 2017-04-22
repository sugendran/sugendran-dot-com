// A jQuery plugin written by Sugendran
// Adds a cheat code event for webpages in under 700 bytes! The cheat code in this case being the Konami code 
// [up,up,down,down,left,right,left,right,a,b,a,b]
// 
// Usage:
// Simply bind it like you would any other event. There are two events that are raised
//  - "konami" = a successful cheat sequence
//  - "konamifail" = an unsucessful cheat sequence
// $("p").bind("konami",function(){ alert("you cheated"); });
// $("p").bind("konamifail", function(){ alert("you fail"); });
// Note: just like in video games, you only get one chance to cheat and 
//       if you fail in that chance then the konami event is no longer active.
jQuery.extend({
	konami : { 
		keycodes : [ 38, 38, 40, 40, 37, 39, 37, 39, 66, 65 ], 
		keyindex : 0, 
		fail : false,
		bind : function(){ 
			$(window).unbind("keydown", this.handler)
				.bind("keydown", this.handler);
		},
		unbind : function(){
			$(window).unbind("keydown", this.handler);
		},
		handler: function(e) {
			if((!jQuery.konami.fail) && (e.keyCode == jQuery.konami.keycodes[jQuery.konami.keyindex++])){
				if(jQuery.konami.keyindex == jQuery.konami.keycodes.length){
					jQuery.konami.fail = true;
					jQuery.konami.unbind();
					jQuery.event.trigger("konami");
				}
			}else{
				jQuery.konami.fail = true;
				jQuery.konami.unbind();
				jQuery.event.trigger("konamifail");
			}
		}
	}
});
jQuery.konami.bind();