/*! For license information please see bootstrap-select.js.LICENSE.txt */
!function(e,t){"function"==typeof define&&define.amd?define(["jquery"],(function(e){return t(e)})):"object"==typeof exports?module.exports=t(require("jquery")):t(jQuery)}(0,(function(e){!function(e){"use strict";var t,i,n,s;function o(t){return e.each([{re:/[\xC0-\xC6]/g,ch:"A"},{re:/[\xE0-\xE6]/g,ch:"a"},{re:/[\xC8-\xCB]/g,ch:"E"},{re:/[\xE8-\xEB]/g,ch:"e"},{re:/[\xCC-\xCF]/g,ch:"I"},{re:/[\xEC-\xEF]/g,ch:"i"},{re:/[\xD2-\xD6]/g,ch:"O"},{re:/[\xF2-\xF6]/g,ch:"o"},{re:/[\xD9-\xDC]/g,ch:"U"},{re:/[\xF9-\xFC]/g,ch:"u"},{re:/[\xC7-\xE7]/g,ch:"c"},{re:/[\xD1]/g,ch:"N"},{re:/[\xF1]/g,ch:"n"}],(function(){t=t.replace(this.re,this.ch)})),t}function a(e){var t={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"},i="(?:"+Object.keys(t).join("|")+")",n=new RegExp(i),s=new RegExp(i,"g"),o=null==e?"":""+e;return n.test(o)?o.replace(s,(function(e){return t[e]})):o}String.prototype.includes||(t={}.toString,i=function(){try{var e={},t=Object.defineProperty,i=t(e,e,e)&&t}catch(e){}return i}(),n="".indexOf,s=function(e){if(null==this)throw new TypeError;var i=String(this);if(e&&"[object RegExp]"==t.call(e))throw new TypeError;var s=i.length,o=String(e),a=o.length,l=arguments.length>1?arguments[1]:void 0,r=l?Number(l):0;return r!=r&&(r=0),!(a+Math.min(Math.max(r,0),s)>s)&&-1!=n.call(i,o,r)},i?i(String.prototype,"includes",{value:s,configurable:!0,writable:!0}):String.prototype.includes=s),String.prototype.startsWith||function(){var e=function(){try{var e={},t=Object.defineProperty,i=t(e,e,e)&&t}catch(e){}return i}(),t={}.toString,i=function(e){if(null==this)throw new TypeError;var i=String(this);if(e&&"[object RegExp]"==t.call(e))throw new TypeError;var n=i.length,s=String(e),o=s.length,a=arguments.length>1?arguments[1]:void 0,l=a?Number(a):0;l!=l&&(l=0);var r=Math.min(Math.max(l,0),n);if(o+r>n)return!1;for(var d=-1;++d<o;)if(i.charCodeAt(r+d)!=s.charCodeAt(d))return!1;return!0};e?e(String.prototype,"startsWith",{value:i,configurable:!0,writable:!0}):String.prototype.startsWith=i}(),Object.keys||(Object.keys=function(e,t,i){for(t in i=[],e)i.hasOwnProperty.call(e,t)&&i.push(t);return i}),e.fn.triggerNative=function(e){var t,i=this[0];i.dispatchEvent?("function"==typeof Event?t=new Event(e,{bubbles:!0}):(t=document.createEvent("Event")).initEvent(e,!0,!1),i.dispatchEvent(t)):(i.fireEvent&&((t=document.createEventObject()).eventType=e,i.fireEvent("on"+e,t)),this.trigger(e))},e.expr[":"].icontains=function(t,i,n){var s=e(t);return(s.data("tokens")||s.text()).toUpperCase().includes(n[3].toUpperCase())},e.expr[":"].ibegins=function(t,i,n){var s=e(t);return(s.data("tokens")||s.text()).toUpperCase().startsWith(n[3].toUpperCase())},e.expr[":"].aicontains=function(t,i,n){var s=e(t);return(s.data("tokens")||s.data("normalizedText")||s.text()).toUpperCase().includes(n[3].toUpperCase())},e.expr[":"].aibegins=function(t,i,n){var s=e(t);return(s.data("tokens")||s.data("normalizedText")||s.text()).toUpperCase().startsWith(n[3].toUpperCase())};var l=function(t,i,n){n&&(n.stopPropagation(),n.preventDefault()),this.$element=e(t),this.$newElement=null,this.$button=null,this.$menu=null,this.$lis=null,this.options=i,null===this.options.title&&(this.options.title=this.$element.attr("title")),this.val=l.prototype.val,this.render=l.prototype.render,this.refresh=l.prototype.refresh,this.setStyle=l.prototype.setStyle,this.selectAll=l.prototype.selectAll,this.deselectAll=l.prototype.deselectAll,this.destroy=l.prototype.destroy,this.remove=l.prototype.remove,this.show=l.prototype.show,this.hide=l.prototype.hide,this.init()};function r(t,i){var n,s=arguments,o=t,a=i;[].shift.apply(s);var r=this.each((function(){var t=e(this);if(t.is("select")){var i=t.data("selectpicker"),r="object"==typeof o&&o;if(i){if(r)for(var d in r)r.hasOwnProperty(d)&&(i.options[d]=r[d])}else{var h=e.extend({},l.DEFAULTS,e.fn.selectpicker.defaults||{},t.data(),r);h.template=e.extend({},l.DEFAULTS.template,e.fn.selectpicker.defaults?e.fn.selectpicker.defaults.template:{},t.data().template,r.template),t.data("selectpicker",i=new l(this,h,a))}"string"==typeof o&&(n=i[o]instanceof Function?i[o].apply(i,s):i.options[o])}}));return void 0!==n?n:r}l.VERSION="1.10.0",l.DEFAULTS={noneSelectedText:"Nothing selected",noneResultsText:"No results matched {0}",countSelectedText:function(e,t){return 1==e?"{0} item selected":"{0} items selected"},maxOptionsText:function(e,t){return[1==e?"Limit reached ({n} item max)":"Limit reached ({n} items max)",1==t?"Group limit reached ({n} item max)":"Group limit reached ({n} items max)"]},selectAllText:"Select All",deselectAllText:"Deselect All",doneButton:!1,doneButtonText:"Close",multipleSeparator:", ",styleBase:"btn",style:"btn-default",size:"auto",title:null,selectedTextFormat:"values",width:!1,container:!1,hideDisabled:!1,showSubtext:!1,showIcon:!0,showContent:!0,dropupAuto:!0,header:!1,liveSearch:!1,liveSearchPlaceholder:null,liveSearchNormalize:!1,liveSearchStyle:"contains",actionsBox:!1,iconBase:"glyphicon",tickIcon:"glyphicon-ok",showTick:!1,template:{caret:'<span class="caret"></span>'},maxOptions:!1,mobile:!1,selectOnTab:!1,dropdownAlignRight:!1},l.prototype={constructor:l,init:function(){var t=this,i=this.$element.attr("id");this.$element.addClass("bs-select-hidden"),this.liObj={},this.multiple=this.$element.prop("multiple"),this.autofocus=this.$element.prop("autofocus"),this.$newElement=this.createView(),this.$element.after(this.$newElement).appendTo(this.$newElement),this.$button=this.$newElement.children("button"),this.$menu=this.$newElement.children(".dropdown-menu"),this.$menuInner=this.$menu.children(".inner"),this.$searchbox=this.$menu.find("input"),this.$element.removeClass("bs-select-hidden"),this.options.dropdownAlignRight&&this.$menu.addClass("dropdown-menu-right"),void 0!==i&&(this.$button.attr("data-id",i),e('label[for="'+i+'"]').click((function(e){e.preventDefault(),t.$button.focus()}))),this.checkDisabled(),this.clickListener(),this.options.liveSearch&&this.liveSearchListener(),this.render(),this.setStyle(),this.setWidth(),this.options.container&&this.selectPosition(),this.$menu.data("this",this),this.$newElement.data("this",this),this.options.mobile&&this.mobile(),this.$newElement.on({"hide.bs.dropdown":function(e){t.$element.trigger("hide.bs.select",e)},"hidden.bs.dropdown":function(e){t.$element.trigger("hidden.bs.select",e)},"show.bs.dropdown":function(e){t.$element.trigger("show.bs.select",e)},"shown.bs.dropdown":function(e){t.$element.trigger("shown.bs.select",e)}}),t.$element[0].hasAttribute("required")&&this.$element.on("invalid",(function(){t.$button.addClass("bs-invalid").focus(),t.$element.on({"focus.bs.select":function(){t.$button.focus(),t.$element.off("focus.bs.select")},"shown.bs.select":function(){t.$element.val(t.$element.val()).off("shown.bs.select")},"rendered.bs.select":function(){this.validity.valid&&t.$button.removeClass("bs-invalid"),t.$element.off("rendered.bs.select")}})})),setTimeout((function(){t.$element.trigger("loaded.bs.select")}))},createDropdown:function(){var t=this.multiple||this.options.showTick?" show-tick":"",i=this.$element.parent().hasClass("input-group")?" input-group-btn":"",n=this.autofocus?" autofocus":"",s=this.options.header?'<div class="popover-title"><button type="button" class="close" aria-hidden="true">&times;</button>'+this.options.header+"</div>":"",o=this.options.liveSearch?'<div class="bs-searchbox"><input type="text" class="form-control" autocomplete="off"'+(null===this.options.liveSearchPlaceholder?"":' placeholder="'+a(this.options.liveSearchPlaceholder)+'"')+"></div>":"",l=this.multiple&&this.options.actionsBox?'<div class="bs-actionsbox"><div class="btn-group btn-group-sm btn-block"><button type="button" class="actions-btn bs-select-all btn btn-default">'+this.options.selectAllText+'</button><button type="button" class="actions-btn bs-deselect-all btn btn-default">'+this.options.deselectAllText+"</button></div></div>":"",r=this.multiple&&this.options.doneButton?'<div class="bs-donebutton"><div class="btn-group btn-block"><button type="button" class="btn btn-sm btn-default">'+this.options.doneButtonText+"</button></div></div>":"",d='<div class="btn-group bootstrap-select'+t+i+'"><button type="button" class="'+this.options.styleBase+' dropdown-toggle" data-toggle="dropdown"'+n+'><span class="filter-option pull-left"></span>&nbsp;<span class="bs-caret">'+this.options.template.caret+'</span></button><div class="dropdown-menu open">'+s+o+l+'<ul class="dropdown-menu inner" role="menu"></ul>'+r+"</div></div>";return e(d)},createView:function(){var e=this.createDropdown(),t=this.createLi();return e.find("ul")[0].innerHTML=t,e},reloadLi:function(){this.destroyLi();var e=this.createLi();this.$menuInner[0].innerHTML=e},destroyLi:function(){this.$menu.find("li").remove()},createLi:function(){var t=this,i=[],n=0,s=document.createElement("option"),l=-1,r=function(e,t,i,n){return"<li"+(void 0!==i&""!==i?' class="'+i+'"':"")+(void 0!==t&null!==t?' data-original-index="'+t+'"':"")+(void 0!==n&null!==n?'data-optgroup="'+n+'"':"")+">"+e+"</li>"},d=function(e,i,n,s){return'<a tabindex="0"'+(void 0!==i?' class="'+i+'"':"")+(void 0!==n?' style="'+n+'"':"")+(t.options.liveSearchNormalize?' data-normalized-text="'+o(a(e))+'"':"")+(void 0!==s||null!==s?' data-tokens="'+s+'"':"")+">"+e+'<span class="'+t.options.iconBase+" "+t.options.tickIcon+' check-mark"></span></a>'};if(this.options.title&&!this.multiple&&(l--,!this.$element.find(".bs-title-option").length)){var h=this.$element[0];s.className="bs-title-option",s.appendChild(document.createTextNode(this.options.title)),s.value="",h.insertBefore(s,h.firstChild),void 0===e(h.options[h.selectedIndex]).attr("selected")&&(s.selected=!0)}return this.$element.find("option").each((function(s){var o=e(this);if(l++,!o.hasClass("bs-title-option")){var a=this.className||"",h=this.style.cssText,c=o.data("content")?o.data("content"):o.html(),p=o.data("tokens")?o.data("tokens"):null,u=void 0!==o.data("subtext")?'<small class="text-muted">'+o.data("subtext")+"</small>":"",m=void 0!==o.data("icon")?'<span class="'+t.options.iconBase+" "+o.data("icon")+'"></span> ':"",f="OPTGROUP"===this.parentNode.tagName,v=this.disabled||f&&this.parentNode.disabled;if(""!==m&&v&&(m="<span>"+m+"</span>"),t.options.hideDisabled&&v&&!f)l--;else{if(o.data("content")||(c=m+'<span class="text">'+c+u+"</span>"),f&&!0!==o.data("divider")){var b=" "+this.parentNode.className||"";if(0===o.index()){n+=1;var g=this.parentNode.label,$=void 0!==o.parent().data("subtext")?'<small class="text-muted">'+o.parent().data("subtext")+"</small>":"";g=(o.parent().data("icon")?'<span class="'+t.options.iconBase+" "+o.parent().data("icon")+'"></span> ':"")+'<span class="text">'+g+$+"</span>",0!==s&&i.length>0&&(l++,i.push(r("",null,"divider",n+"div"))),l++,i.push(r(g,null,"dropdown-header"+b,n))}if(t.options.hideDisabled&&v)return void l--;i.push(r(d(c,"opt "+a+b,h,p),s,"",n))}else!0===o.data("divider")?i.push(r("",s,"divider")):!0===o.data("hidden")?i.push(r(d(c,a,h,p),s,"hidden is-hidden")):(this.previousElementSibling&&"OPTGROUP"===this.previousElementSibling.tagName&&(l++,i.push(r("",null,"divider",n+"div"))),i.push(r(d(c,a,h,p),s)));t.liObj[s]=l}}})),this.multiple||0!==this.$element.find("option:selected").length||this.options.title||this.$element.find("option").eq(0).prop("selected",!0).attr("selected","selected"),i.join("")},findLis:function(){return null==this.$lis&&(this.$lis=this.$menu.find("li")),this.$lis},render:function(t){var i,n=this;!1!==t&&this.$element.find("option").each((function(e){var t=n.findLis().eq(n.liObj[e]);n.setDisabled(e,this.disabled||"OPTGROUP"===this.parentNode.tagName&&this.parentNode.disabled,t),n.setSelected(e,this.selected,t)})),this.tabIndex();var s=this.$element.find("option").map((function(){if(this.selected){if(n.options.hideDisabled&&(this.disabled||"OPTGROUP"===this.parentNode.tagName&&this.parentNode.disabled))return;var t,i=e(this),s=i.data("icon")&&n.options.showIcon?'<i class="'+n.options.iconBase+" "+i.data("icon")+'"></i> ':"";return t=n.options.showSubtext&&i.data("subtext")&&!n.multiple?' <small class="text-muted">'+i.data("subtext")+"</small>":"",void 0!==i.attr("title")?i.attr("title"):i.data("content")&&n.options.showContent?i.data("content"):s+i.html()+t}})).toArray(),o=this.multiple?s.join(this.options.multipleSeparator):s[0];if(this.multiple&&this.options.selectedTextFormat.indexOf("count")>-1){var a=this.options.selectedTextFormat.split(">");if(a.length>1&&s.length>a[1]||1==a.length&&s.length>=2){i=this.options.hideDisabled?", [disabled]":"";var l=this.$element.find("option").not('[data-divider="true"], [data-hidden="true"]'+i).length;o=("function"==typeof this.options.countSelectedText?this.options.countSelectedText(s.length,l):this.options.countSelectedText).replace("{0}",s.length.toString()).replace("{1}",l.toString())}}null==this.options.title&&(this.options.title=this.$element.attr("title")),"static"==this.options.selectedTextFormat&&(o=this.options.title),o||(o=void 0!==this.options.title?this.options.title:this.options.noneSelectedText),this.$button.attr("title",e.trim(o.replace(/<[^>]*>?/g,""))),this.$button.children(".filter-option").html(o),this.$element.trigger("rendered.bs.select")},setStyle:function(e,t){this.$element.attr("class")&&this.$newElement.addClass(this.$element.attr("class").replace(/selectpicker|mobile-device|bs-select-hidden|validate\[.*\]/gi,""));var i=e||this.options.style;"add"==t?this.$button.addClass(i):"remove"==t?this.$button.removeClass(i):(this.$button.removeClass(this.options.style),this.$button.addClass(i))},liHeight:function(t){if(t||!1!==this.options.size&&!this.sizeInfo){var i=document.createElement("div"),n=document.createElement("div"),s=document.createElement("ul"),o=document.createElement("li"),a=document.createElement("li"),l=document.createElement("a"),r=document.createElement("span"),d=this.options.header&&this.$menu.find(".popover-title").length>0?this.$menu.find(".popover-title")[0].cloneNode(!0):null,h=this.options.liveSearch?document.createElement("div"):null,c=this.options.actionsBox&&this.multiple&&this.$menu.find(".bs-actionsbox").length>0?this.$menu.find(".bs-actionsbox")[0].cloneNode(!0):null,p=this.options.doneButton&&this.multiple&&this.$menu.find(".bs-donebutton").length>0?this.$menu.find(".bs-donebutton")[0].cloneNode(!0):null;if(r.className="text",i.className=this.$menu[0].parentNode.className+" open",n.className="dropdown-menu open",s.className="dropdown-menu inner",o.className="divider",r.appendChild(document.createTextNode("Inner text")),l.appendChild(r),a.appendChild(l),s.appendChild(a),s.appendChild(o),d&&n.appendChild(d),h){var u=document.createElement("span");h.className="bs-searchbox",u.className="form-control",h.appendChild(u),n.appendChild(h)}c&&n.appendChild(c),n.appendChild(s),p&&n.appendChild(p),i.appendChild(n),document.body.appendChild(i);var m=l.offsetHeight,f=d?d.offsetHeight:0,v=h?h.offsetHeight:0,b=c?c.offsetHeight:0,g=p?p.offsetHeight:0,$=e(o).outerHeight(!0),x="function"==typeof getComputedStyle&&getComputedStyle(n),w=x?null:e(n),C=parseInt(x?x.paddingTop:w.css("paddingTop"))+parseInt(x?x.paddingBottom:w.css("paddingBottom"))+parseInt(x?x.borderTopWidth:w.css("borderTopWidth"))+parseInt(x?x.borderBottomWidth:w.css("borderBottomWidth")),y=C+parseInt(x?x.marginTop:w.css("marginTop"))+parseInt(x?x.marginBottom:w.css("marginBottom"))+2;document.body.removeChild(i),this.sizeInfo={liHeight:m,headerHeight:f,searchHeight:v,actionsHeight:b,doneButtonHeight:g,dividerHeight:$,menuPadding:C,menuExtras:y}}},setSize:function(){if(this.findLis(),this.liHeight(),this.options.header&&this.$menu.css("padding-top",0),!1!==this.options.size){var t,i,n,s,o=this,a=this.$menu,l=this.$menuInner,r=e(window),d=this.$newElement[0].offsetHeight,h=this.sizeInfo.liHeight,c=this.sizeInfo.headerHeight,p=this.sizeInfo.searchHeight,u=this.sizeInfo.actionsHeight,m=this.sizeInfo.doneButtonHeight,f=this.sizeInfo.dividerHeight,v=this.sizeInfo.menuPadding,b=this.sizeInfo.menuExtras,g=this.options.hideDisabled?".disabled":"",$=function(){n=o.$newElement.offset().top-r.scrollTop(),s=r.height()-n-d};if($(),"auto"===this.options.size){var x=function(){var r,d=function(t,i){return function(n){return i?n.classList?n.classList.contains(t):e(n).hasClass(t):!(n.classList?n.classList.contains(t):e(n).hasClass(t))}},f=o.$menuInner[0].getElementsByTagName("li"),g=Array.prototype.filter?Array.prototype.filter.call(f,d("hidden",!1)):o.$lis.not(".hidden"),x=Array.prototype.filter?Array.prototype.filter.call(g,d("dropdown-header",!0)):g.filter(".dropdown-header");$(),t=s-b,o.options.container?(a.data("height")||a.data("height",a.height()),i=a.data("height")):i=a.height(),o.options.dropupAuto&&o.$newElement.toggleClass("dropup",n>s&&t-b<i),o.$newElement.hasClass("dropup")&&(t=n-b),r=g.length+x.length>3?3*h+b-2:0,a.css({"max-height":t+"px",overflow:"hidden","min-height":r+c+p+u+m+"px"}),l.css({"max-height":t-c-p-u-m-v+"px","overflow-y":"auto","min-height":Math.max(r-v,0)+"px"})};x(),this.$searchbox.off("input.getSize propertychange.getSize").on("input.getSize propertychange.getSize",x),r.off("resize.getSize scroll.getSize").on("resize.getSize scroll.getSize",x)}else if(this.options.size&&"auto"!=this.options.size&&this.$lis.not(g).length>this.options.size){var w=this.$lis.not(".divider").not(g).children().slice(0,this.options.size).last().parent().index(),C=this.$lis.slice(0,w+1).filter(".divider").length;t=h*this.options.size+C*f+v,o.options.container?(a.data("height")||a.data("height",a.height()),i=a.data("height")):i=a.height(),o.options.dropupAuto&&this.$newElement.toggleClass("dropup",n>s&&t-b<i),a.css({"max-height":t+c+p+u+m+"px",overflow:"hidden","min-height":""}),l.css({"max-height":t-v+"px","overflow-y":"auto","min-height":""})}}},setWidth:function(){if("auto"===this.options.width){this.$menu.css("min-width","0");var e=this.$menu.parent().clone().appendTo("body"),t=this.options.container?this.$newElement.clone().appendTo("body"):e,i=e.children(".dropdown-menu").outerWidth(),n=t.css("width","auto").children("button").outerWidth();e.remove(),t.remove(),this.$newElement.css("width",Math.max(i,n)+"px")}else"fit"===this.options.width?(this.$menu.css("min-width",""),this.$newElement.css("width","").addClass("fit-width")):this.options.width?(this.$menu.css("min-width",""),this.$newElement.css("width",this.options.width)):(this.$menu.css("min-width",""),this.$newElement.css("width",""));this.$newElement.hasClass("fit-width")&&"fit"!==this.options.width&&this.$newElement.removeClass("fit-width")},selectPosition:function(){this.$bsContainer=e('<div class="bs-container" />');var t,i,n=this,s=function(e){n.$bsContainer.addClass(e.attr("class").replace(/form-control|fit-width/gi,"")).toggleClass("dropup",e.hasClass("dropup")),t=e.offset(),i=e.hasClass("dropup")?0:e[0].offsetHeight,n.$bsContainer.css({top:t.top+i,left:t.left,width:e[0].offsetWidth})};this.$button.on("click",(function(){var t=e(this);n.isDisabled()||(s(n.$newElement),n.$bsContainer.appendTo(n.options.container).toggleClass("open",!t.hasClass("open")).append(n.$menu))})),e(window).on("resize scroll",(function(){s(n.$newElement)})),this.$element.on("hide.bs.select",(function(){n.$menu.data("height",n.$menu.height()),n.$bsContainer.detach()}))},setSelected:function(e,t,i){i||(i=this.findLis().eq(this.liObj[e])),i.toggleClass("selected",t)},setDisabled:function(e,t,i){i||(i=this.findLis().eq(this.liObj[e])),t?i.addClass("disabled").children("a").attr("href","#").attr("tabindex",-1):i.removeClass("disabled").children("a").removeAttr("href").attr("tabindex",0)},isDisabled:function(){return this.$element[0].disabled},checkDisabled:function(){var e=this;this.isDisabled()?(this.$newElement.addClass("disabled"),this.$button.addClass("disabled").attr("tabindex",-1)):(this.$button.hasClass("disabled")&&(this.$newElement.removeClass("disabled"),this.$button.removeClass("disabled")),-1!=this.$button.attr("tabindex")||this.$element.data("tabindex")||this.$button.removeAttr("tabindex")),this.$button.click((function(){return!e.isDisabled()}))},tabIndex:function(){this.$element.data("tabindex")!==this.$element.attr("tabindex")&&-98!==this.$element.attr("tabindex")&&"-98"!==this.$element.attr("tabindex")&&(this.$element.data("tabindex",this.$element.attr("tabindex")),this.$button.attr("tabindex",this.$element.data("tabindex"))),this.$element.attr("tabindex",-98)},clickListener:function(){var t=this,i=e(document);this.$newElement.on("touchstart.dropdown",".dropdown-menu",(function(e){e.stopPropagation()})),i.data("spaceSelect",!1),this.$button.on("keyup",(function(e){/(32)/.test(e.keyCode.toString(10))&&i.data("spaceSelect")&&(e.preventDefault(),i.data("spaceSelect",!1))})),this.$button.on("click",(function(){t.setSize()})),this.$element.on("shown.bs.select",(function(){if(t.options.liveSearch||t.multiple){if(!t.multiple){var e=t.liObj[t.$element[0].selectedIndex];if("number"!=typeof e||!1===t.options.size)return;var i=t.$lis.eq(e)[0].offsetTop-t.$menuInner[0].offsetTop;i=i-t.$menuInner[0].offsetHeight/2+t.sizeInfo.liHeight/2,t.$menuInner[0].scrollTop=i}}else t.$menuInner.find(".selected a").focus()})),this.$menuInner.on("click","li a",(function(i){var n=e(this),s=n.parent().data("originalIndex"),o=t.$element.val(),a=t.$element.prop("selectedIndex");if(t.multiple&&i.stopPropagation(),i.preventDefault(),!t.isDisabled()&&!n.parent().hasClass("disabled")){var l=t.$element.find("option"),r=l.eq(s),d=r.prop("selected"),h=r.parent("optgroup"),c=t.options.maxOptions,p=h.data("maxOptions")||!1;if(t.multiple){if(r.prop("selected",!d),t.setSelected(s,!d),n.blur(),!1!==c||!1!==p){var u=c<l.filter(":selected").length,m=p<h.find("option:selected").length;if(c&&u||p&&m)if(c&&1==c)l.prop("selected",!1),r.prop("selected",!0),t.$menuInner.find(".selected").removeClass("selected"),t.setSelected(s,!0);else if(p&&1==p){h.find("option:selected").prop("selected",!1),r.prop("selected",!0);var f=n.parent().data("optgroup");t.$menuInner.find('[data-optgroup="'+f+'"]').removeClass("selected"),t.setSelected(s,!0)}else{var v="function"==typeof t.options.maxOptionsText?t.options.maxOptionsText(c,p):t.options.maxOptionsText,b=v[0].replace("{n}",c),g=v[1].replace("{n}",p),$=e('<div class="notify"></div>');v[2]&&(b=b.replace("{var}",v[2][c>1?0:1]),g=g.replace("{var}",v[2][p>1?0:1])),r.prop("selected",!1),t.$menu.append($),c&&u&&($.append(e("<div>"+b+"</div>")),t.$element.trigger("maxReached.bs.select")),p&&m&&($.append(e("<div>"+g+"</div>")),t.$element.trigger("maxReachedGrp.bs.select")),setTimeout((function(){t.setSelected(s,!1)}),10),$.delay(750).fadeOut(300,(function(){e(this).remove()}))}}}else l.prop("selected",!1),r.prop("selected",!0),t.$menuInner.find(".selected").removeClass("selected"),t.setSelected(s,!0);t.multiple?t.options.liveSearch&&t.$searchbox.focus():t.$button.focus(),(o!=t.$element.val()&&t.multiple||a!=t.$element.prop("selectedIndex")&&!t.multiple)&&t.$element.trigger("changed.bs.select",[s,r.prop("selected"),d]).triggerNative("change")}})),this.$menu.on("click","li.disabled a, .popover-title, .popover-title :not(.close)",(function(i){i.currentTarget==this&&(i.preventDefault(),i.stopPropagation(),t.options.liveSearch&&!e(i.target).hasClass("close")?t.$searchbox.focus():t.$button.focus())})),this.$menuInner.on("click",".divider, .dropdown-header",(function(e){e.preventDefault(),e.stopPropagation(),t.options.liveSearch?t.$searchbox.focus():t.$button.focus()})),this.$menu.on("click",".popover-title .close",(function(){t.$button.click()})),this.$searchbox.on("click",(function(e){e.stopPropagation()})),this.$menu.on("click",".actions-btn",(function(i){t.options.liveSearch?t.$searchbox.focus():t.$button.focus(),i.preventDefault(),i.stopPropagation(),e(this).hasClass("bs-select-all")?t.selectAll():t.deselectAll()})),this.$element.change((function(){t.render(!1)}))},liveSearchListener:function(){var t=this,i=e('<li class="no-results"></li>');this.$button.on("click.dropdown.data-api touchstart.dropdown.data-api",(function(){t.$menuInner.find(".active").removeClass("active"),t.$searchbox.val()&&(t.$searchbox.val(""),t.$lis.not(".is-hidden").removeClass("hidden"),i.parent().length&&i.remove()),t.multiple||t.$menuInner.find(".selected").addClass("active"),setTimeout((function(){t.$searchbox.focus()}),10)})),this.$searchbox.on("click.dropdown.data-api focus.dropdown.data-api touchend.dropdown.data-api",(function(e){e.stopPropagation()})),this.$searchbox.on("input propertychange",(function(){if(t.$searchbox.val()){var n=t.$lis.not(".is-hidden").removeClass("hidden").children("a");(n=t.options.liveSearchNormalize?n.not(":a"+t._searchStyle()+'("'+o(t.$searchbox.val())+'")'):n.not(":"+t._searchStyle()+'("'+t.$searchbox.val()+'")')).parent().addClass("hidden"),t.$lis.filter(".dropdown-header").each((function(){var i=e(this),n=i.data("optgroup");0===t.$lis.filter("[data-optgroup="+n+"]").not(i).not(".hidden").length&&(i.addClass("hidden"),t.$lis.filter("[data-optgroup="+n+"div]").addClass("hidden"))}));var s=t.$lis.not(".hidden");s.each((function(t){var i=e(this);i.hasClass("divider")&&(i.index()===s.first().index()||i.index()===s.last().index()||s.eq(t+1).hasClass("divider"))&&i.addClass("hidden")})),t.$lis.not(".hidden, .no-results").length?i.parent().length&&i.remove():(i.parent().length&&i.remove(),i.html(t.options.noneResultsText.replace("{0}",'"'+a(t.$searchbox.val())+'"')).show(),t.$menuInner.append(i))}else t.$lis.not(".is-hidden").removeClass("hidden"),i.parent().length&&i.remove();t.$lis.filter(".active").removeClass("active"),t.$searchbox.val()&&t.$lis.not(".hidden, .divider, .dropdown-header").eq(0).addClass("active").children("a").focus(),e(this).focus()}))},_searchStyle:function(){return{begins:"ibegins",startsWith:"ibegins"}[this.options.liveSearchStyle]||"icontains"},val:function(e){return void 0!==e?(this.$element.val(e),this.render(),this.$element):this.$element.val()},changeAll:function(t){void 0===t&&(t=!0),this.findLis();for(var i=this.$element.find("option"),n=this.$lis.not(".divider, .dropdown-header, .disabled, .hidden").toggleClass("selected",t),s=n.length,o=[],a=0;a<s;a++){var l=n[a].getAttribute("data-original-index");o[o.length]=i.eq(l)[0]}e(o).prop("selected",t),this.render(!1),this.$element.trigger("changed.bs.select").triggerNative("change")},selectAll:function(){return this.changeAll(!0)},deselectAll:function(){return this.changeAll(!1)},toggle:function(e){(e=e||window.event)&&e.stopPropagation(),this.$button.trigger("click")},keydown:function(t){var i,n,s,a,l,r,d,h,c,p=e(this),u=p.is("input")?p.parent().parent():p.parent(),m=u.data("this"),f=":not(.disabled, .hidden, .dropdown-header, .divider)",v={32:" ",48:"0",49:"1",50:"2",51:"3",52:"4",53:"5",54:"6",55:"7",56:"8",57:"9",59:";",65:"a",66:"b",67:"c",68:"d",69:"e",70:"f",71:"g",72:"h",73:"i",74:"j",75:"k",76:"l",77:"m",78:"n",79:"o",80:"p",81:"q",82:"r",83:"s",84:"t",85:"u",86:"v",87:"w",88:"x",89:"y",90:"z",96:"0",97:"1",98:"2",99:"3",100:"4",101:"5",102:"6",103:"7",104:"8",105:"9"};if(m.options.liveSearch&&(u=p.parent().parent()),m.options.container&&(u=m.$menu),i=e("[role=menu] li",u),!(c=m.$newElement.hasClass("open"))&&(t.keyCode>=48&&t.keyCode<=57||t.keyCode>=96&&t.keyCode<=105||t.keyCode>=65&&t.keyCode<=90)&&(m.options.container?m.$button.trigger("click"):(m.setSize(),m.$menu.parent().addClass("open"),c=!0),m.$searchbox.focus()),m.options.liveSearch&&(/(^9$|27)/.test(t.keyCode.toString(10))&&c&&0===m.$menu.find(".active").length&&(t.preventDefault(),m.$menu.parent().removeClass("open"),m.options.container&&m.$newElement.removeClass("open"),m.$button.focus()),i=e("[role=menu] li"+f,u),p.val()||/(38|40)/.test(t.keyCode.toString(10))||0===i.filter(".active").length&&(i=m.$menuInner.find("li"),i=m.options.liveSearchNormalize?i.filter(":a"+m._searchStyle()+"("+o(v[t.keyCode])+")"):i.filter(":"+m._searchStyle()+"("+v[t.keyCode]+")"))),i.length){if(/(38|40)/.test(t.keyCode.toString(10)))n=i.index(i.find("a").filter(":focus").parent()),a=i.filter(f).first().index(),l=i.filter(f).last().index(),s=i.eq(n).nextAll(f).eq(0).index(),r=i.eq(n).prevAll(f).eq(0).index(),d=i.eq(s).prevAll(f).eq(0).index(),m.options.liveSearch&&(i.each((function(t){e(this).hasClass("disabled")||e(this).data("index",t)})),n=i.index(i.filter(".active")),a=i.first().data("index"),l=i.last().data("index"),s=i.eq(n).nextAll().eq(0).data("index"),r=i.eq(n).prevAll().eq(0).data("index"),d=i.eq(s).prevAll().eq(0).data("index")),h=p.data("prevIndex"),38==t.keyCode?(m.options.liveSearch&&n--,n!=d&&n>r&&(n=r),n<a&&(n=a),n==h&&(n=l)):40==t.keyCode&&(m.options.liveSearch&&n++,-1==n&&(n=0),n!=d&&n<s&&(n=s),n>l&&(n=l),n==h&&(n=a)),p.data("prevIndex",n),m.options.liveSearch?(t.preventDefault(),p.hasClass("dropdown-toggle")||(i.removeClass("active").eq(n).addClass("active").children("a").focus(),p.focus())):i.eq(n).children("a").focus();else if(!p.is("input")){var b,g=[];i.each((function(){e(this).hasClass("disabled")||e.trim(e(this).children("a").text().toLowerCase()).substring(0,1)==v[t.keyCode]&&g.push(e(this).index())})),b=e(document).data("keycount"),b++,e(document).data("keycount",b),e.trim(e(":focus").text().toLowerCase()).substring(0,1)!=v[t.keyCode]?(b=1,e(document).data("keycount",b)):b>=g.length&&(e(document).data("keycount",0),b>g.length&&(b=1)),i.eq(g[b-1]).children("a").focus()}if((/(13|32)/.test(t.keyCode.toString(10))||/(^9$)/.test(t.keyCode.toString(10))&&m.options.selectOnTab)&&c){if(/(32)/.test(t.keyCode.toString(10))||t.preventDefault(),m.options.liveSearch)/(32)/.test(t.keyCode.toString(10))||(m.$menuInner.find(".active a").click(),p.focus());else{var $=e(":focus");$.click(),$.focus(),t.preventDefault(),e(document).data("spaceSelect",!0)}e(document).data("keycount",0)}(/(^9$|27)/.test(t.keyCode.toString(10))&&c&&(m.multiple||m.options.liveSearch)||/(27)/.test(t.keyCode.toString(10))&&!c)&&(m.$menu.parent().removeClass("open"),m.options.container&&m.$newElement.removeClass("open"),m.$button.focus())}},mobile:function(){this.$element.addClass("mobile-device")},refresh:function(){this.$lis=null,this.liObj={},this.reloadLi(),this.render(),this.checkDisabled(),this.liHeight(!0),this.setStyle(),this.setWidth(),this.$lis&&this.$searchbox.trigger("propertychange"),this.$element.trigger("refreshed.bs.select")},hide:function(){this.$newElement.hide()},show:function(){this.$newElement.show()},remove:function(){this.$newElement.remove(),this.$element.remove()},destroy:function(){this.$newElement.before(this.$element).remove(),this.$bsContainer?this.$bsContainer.remove():this.$menu.remove(),this.$element.off(".bs.select").removeData("selectpicker").removeClass("bs-select-hidden selectpicker")}};var d=e.fn.selectpicker;e.fn.selectpicker=r,e.fn.selectpicker.Constructor=l,e.fn.selectpicker.noConflict=function(){return e.fn.selectpicker=d,this},e(document).data("keycount",0).on("keydown.bs.select",'.bootstrap-select [data-toggle=dropdown], .bootstrap-select [role="menu"], .bs-searchbox input',l.prototype.keydown).on("focusin.modal",'.bootstrap-select [data-toggle=dropdown], .bootstrap-select [role="menu"], .bs-searchbox input',(function(e){e.stopPropagation()})),e(window).on("load.bs.select.data-api",(function(){e(".selectpicker").each((function(){var t=e(this);r.call(t,t.data())}))}))}(e)}));