(window["canvasWebpackJsonp"]=window["canvasWebpackJsonp"]||[]).push([[59,602],{"0crz":function(e,t,n){"use strict"
var i=n("ouhR")
var a=n.n(i)
var r=n("pQTu")
var s=n("m0r6")
Object(s["a"])(JSON.parse('{"ar":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"إظهار النص المقتبس","word_separator":" "}}},"cy":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"dangos testun wedi’i ddyfynnu","word_separator":" "}}},"da":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"vis tekst i gåseøjne","word_separator":" "}}},"da-x-k12":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"vis tekst i gåseøjne","word_separator":" "}}},"de":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"zitierten Text zeigen","word_separator":" "}}},"el":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"προβολή κειμένου που παρατίθεται"}}},"en-AU":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"show quoted text","word_separator":" "}}},"en-AU-x-unimelb":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"show quoted text","word_separator":" "}}},"en-CA":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"show quoted text","word_separator":" "}}},"en-GB":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"show quoted text","word_separator":" "}}},"en-GB-x-lbs":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"show quoted text","word_separator":" "}}},"en-GB-x-ukhe":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"show quoted text","word_separator":" "}}},"es":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"mostrar texto citado","word_separator":" "}}},"fa":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"نمایش متن نقل شده","word_separator":" "}}},"fi":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"näytä lainattu teksti","word_separator":" "}}},"fr":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"afficher le texte entre guillemets","word_separator":" "}}},"fr-CA":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"afficher le texte entre guillemets","word_separator":" "}}},"he":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"מציג ציטוט","word_separator":" "}}},"ht":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"afiche tèks site","word_separator":" "}}},"hu":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"idézett szöveg megjelenítése","word_separator":" "}}},"hy":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"ցույց տալ մեջբերվող տեքստը","word_separator":"-"}}},"is":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"Sýna ívitnaðan texta","word_separator":" "}}},"it":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"mostra testo citato","word_separator":" "}}},"ja":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"引用したテキストを表示","word_separator":" "}}},"ko":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"인용된 텍스트 표시","word_separator":" "}}},"mi":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"whakaatu kuputuhi faahiti","word_separator":"-"}}},"nb":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"vis den merkede teksten","word_separator":" "}}},"nb-x-k12":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"vis den merkede teksten","word_separator":" "}}},"nl":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"geciteerde tekst tonen","word_separator":" "}}},"nn":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"vis sitert tekst","word_separator":" "}}},"pl":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"pokaż cytowany fragment tekstu","word_separator":" "}}},"pt":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"exibir texto citado","word_separator":" "}}},"pt-BR":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"exibir texto citado","word_separator":" "}}},"ru":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"показать цитированный текст","word_separator":" "}}},"sl":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"prikaži citirano besedilo","word_separator":" "}}},"sv":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"visa citerad text","word_separator":" "}}},"sv-x-k12":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"visa citerad text","word_separator":" "}}},"tr":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"alıntılanan metni göster","word_separator":" "}}},"uk":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"Показати цитований текст","word_separator":" "}}},"zh-Hans":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"显示引用的文本","word_separator":" "}}},"zh-Hant":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"顯示引用的文字","word_separator":" "}}}}'))
n("jQeR")
n("0sPK")
var l=r["default"].scoped("lib.text_helper")
var o=n("5Ky4")
var c,u,d
c="LINK-PLACEHOLDER"
u=/\b((?:https?:\/\/|www\d{0,3}[.]|[a-z0-9.\-]+[.][a-z]{2,4}\/)(?:[^\s()<>]+|\([^\s()<>]*\))+(?:\([^\s()<>]*\)|[^\s`!()\[\]{};:'".,<>?«»“”‘’]))|(LINK-PLACEHOLDER)/gi
t["a"]=d={quoteClump:function(e){return"<div class='quoted_text_holder'> <a href='#' class='show_quoted_text_link'>"+Object(o["a"])(l.t("quoted_text_toggle","show quoted text"))+"</a> <div class='quoted_text' style='display: none;'> "+a.a.raw(e.join("\n"))+" </div> </div>"},formatMessage:function(e){var t,n,i,a,r,s,l,_
a=[]
r=[]
e=e.replace(u,function(e,t){var n
r.push(e===c?c:(n=e,"http://"===n.slice(0,7)||"https://"===n.slice(0,8)||(n="http://"+n),a.push(n),"<a href='"+Object(o["a"])(n)+"'>"+Object(o["a"])(e)+"</a>"))
return c})
e=Object(o["a"])(e)
e=e.replace(new RegExp(c,"g"),function(e,t){return r.shift()})
e=e.replace(/\n/g,"<br />\n")
s=[]
l=[]
_=e.split("\n")
for(t=0,n=_.length;t<n;t++){i=_[t]
if(i.match(/^(&gt;|>)/))l.push(i)
else{l.length&&s.push(d.quoteClump(l))
l=[]
s.push(i)}}l.length&&s.push(d.quoteClump(l))
return s.join("\n")},delimit:function(e){var t,n,i,a,r
if(isNaN(e))return String(e)
r=e<0?"-":""
t=Math.abs(e)
if(Infinity===t)return String(e)
n=Math.floor(t)
a=t===n?"":String(t).replace(/^\d+\./,".")
while(n>=1e3){i=String(n).replace(/\d+(\d\d\d)$/,",$1")
n=Math.floor(n/1e3)
a=i+a}return r+String(n)+a},truncateText:function(e,t){var n,i,a,r,s,o
null==t&&(t={})
i=null!=(r=t.max)?r:30
n=l.t("ellipsis","...")
o=l.t("word_separator"," ")
e=(null!=e?e:"").replace(/\s+/g,o).trim()
if(!e||e.length<=i)return e
s=0
while(true){a=e.indexOf(o,s+1)
if(a<0||a>i-n.length)break
s=a}s||(s=i-n.length)
return e.substring(0,s)+n},plainText:function(e){return e.replace(/(<([^>]+)>)/gi,"")}}},B1vq:function(e,t,n){"use strict"
var i=n("ouhR")
var a=n.n(i)
n("s/PJ")
a.a.fn.scrollToVisible=function(e){var t={}
var n=a()(e)
if(0===n.length)return
var i=n.offset(),r=n.outerWidth(),s=n.outerHeight(),l=i.top,o=l+s,c=i.left,u=c+r,d="html,body"==this.selector?a.a.windowScrollTop():this.scrollTop(),_=this.scrollLeft(),h=this.outerHeight(),f=this.outerWidth()
if("html,body"!=this.selector){var p=a()("body").offset()
this.each(function(){try{p=a()(this).offset()
return false}catch(e){}})
l-=p.top
o-=p.top
c-=p.left
u-=p.left}if("HTML"==this[0].tagName||"BODY"==this[0].tagName){h=a()(window).height()
a()("#wizard_box:visible").length>0&&(h-=a()("#wizard_box:visible").height())
f=a()(window).width()
l-=d
c-=_
o-=d
u-=_}l<0||h<s&&o>h?t.scrollTop=l+d:o>h&&(t.scrollTop=o+d-h+20)
c<0?t.scrollLeft=c+_:u>f&&(t.scrollLeft=u+_-f+20)
1==t.scrollTop&&(t.scrollTop=0)
1==t.scrollLeft&&(t.scrollLeft=0)
this.scrollTop(t.scrollTop)
this.scrollLeft(t.scrollLeft)
return this}},goGJ:function(e,t,n){"use strict"
n.d(t,"a",function(){return r})
var i=n("ouhR")
var a=n.n(i)
n("rEd+")
function r(){return a()(".vdd_tooltip_link").tooltip({position:{my:"center bottom",at:"center top-10",collision:"fit fit"},tooltipClass:"center bottom vertical",content(){const e=a()(this).data("tooltipSelector")
try{const t=document.querySelector(e)
return a()(t).html()}catch(e){}}})}},p6Wi:function(e,t,n){"use strict"
var i=n("pQTu")
var a=n("m0r6")
Object(a["a"])(JSON.parse('{"ar":{"buttons":{"cancel":"إلغاء","delete":"حذف"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"هل ترغب بالتأكيد في حذف هذا؟"}}},"cy":{"buttons":{"cancel":"Canslo","delete":"Dileu"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Ydych chi’n siŵr eich bod am ddileu hyn?"}}},"da":{"buttons":{"cancel":"Annuller","delete":"Slet"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Er du sikker på, at du vil slette dette?"}}},"da-x-k12":{"buttons":{"cancel":"Annuller","delete":"Slet"}},"de":{"buttons":{"cancel":"Abbrechen","delete":"Löschen"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Möchten Sie dies wirklich löschen?"}}},"el":{"buttons":{"cancel":"Ακύρωση","delete":"Διαγραφή"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Είστε σίγουρος/η ότι επιθυμείτε να το διαγράψετε;"}}},"en-AU":{"buttons":{"cancel":"Cancel","delete":"Delete"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Are you sure you want to delete this?"}}},"en-AU-x-unimelb":{"buttons":{"cancel":"Cancel","delete":"Delete"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Are you sure you want to delete this?"}}},"en-CA":{"buttons":{"cancel":"Cancel","delete":"Delete"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Are you sure you want to delete this?"}}},"en-GB":{"buttons":{"cancel":"Cancel","delete":"Delete"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Are you sure you want to delete this?"}}},"en-GB-x-lbs":{"buttons":{"cancel":"Cancel","delete":"Delete"}},"en-GB-x-ukhe":{"buttons":{"cancel":"Cancel","delete":"Delete"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Are you sure you want to delete this?"}}},"es":{"buttons":{"cancel":"Cancelar","delete":"Eliminar"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"¿Seguro que desea eliminarlo?"}}},"fa":{"buttons":{"cancel":"لغو","delete":"حذف"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"مطمئنید که می خواهید این مورد حذف شود؟"}}},"fi":{"buttons":{"cancel":"Peruuta","delete":"Poista"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Haluatko varmasti poistaa tämän?"}}},"fr":{"buttons":{"cancel":"Annuler","delete":"Supprimer"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Voulez-vous vraiment supprimer cet élément ?"}}},"fr-CA":{"buttons":{"cancel":"Annuler","delete":"Supprimer"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Voulez-vous vraiment supprimer cet élément?"}}},"he":{"buttons":{"cancel":"ביטול","delete":"ביטול"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"בטוח/ה שרוצה לבטל זאת?"}}},"ht":{"buttons":{"cancel":"Anile","delete":"Efase"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Ou kwè vrèman ou vle efase sa a?"}}},"hu":{"buttons":{"cancel":"Mégse","delete":"Törlés"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Biztos benne, hogy törli ezt?"}}},"hy":{"buttons":{"cancel":"Չեղյալ համարել","delete":"Ջնջել"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Դուք իսկապե՞ս ցանկանում եք ջնջել սա:"}}},"is":{"buttons":{"cancel":"Hætta við","delete":"Eyða"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Viltu örugglega eyða þessu?"}}},"it":{"buttons":{"cancel":"Annulla","delete":"Elimina"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Vuoi eliminare questo?"}}},"ja":{"buttons":{"cancel":"キャンセル","delete":"削除"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"これを削除してもよろしいですか?"}}},"ko":{"buttons":{"cancel":"취소","delete":"삭제"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"삭제하시겠습니까?"}}},"mi":{"buttons":{"cancel":"Whakakore","delete":"Muku"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"E tino hiahia ana koe ki te muku i tēnei?"}}},"nb":{"buttons":{"cancel":"Avbryt","delete":"Slett"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Er du sikker på at du ønsker å slette dette?"}}},"nb-x-k12":{"buttons":{"cancel":"Avbryt","delete":"Slett"}},"nl":{"buttons":{"cancel":"Annuleren","delete":"Verwijderen"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Weet je zeker dat je dit wilt verwijderen?"}}},"nn":{"buttons":{"cancel":"Avbryt","delete":"Slett"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Er du sikker på at du vil slette dette?"}}},"pl":{"buttons":{"cancel":"Anuluj","delete":"Usuń"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Czy na pewno chcesz usunąć ten element?"}}},"pt":{"buttons":{"cancel":"Cancelar","delete":"Excluir"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Tem certeza de que deseja excluir isto?"}}},"pt-BR":{"buttons":{"cancel":"Cancelar","delete":"Excluir"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Tem certeza que deseja excluir isto?"}}},"ru":{"buttons":{"cancel":"Отменить","delete":"Удалить"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Действительно хотите удалить?"}}},"sl":{"buttons":{"cancel":"Prekliči","delete":"Odstrani"}},"sv":{"buttons":{"cancel":"Avbryt","delete":"Radera"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Är du säker på att du vill radera det här?"}}},"sv-x-k12":{"buttons":{"cancel":"Avbryt","delete":"Radera"}},"tr":{"buttons":{"cancel":"İptal","delete":"Sil"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Bunu silmek istediğinize emin misiniz?"}}},"uk":{"buttons":{"cancel":"Скасувати","delete":"Видалити"}},"zh-Hans":{"buttons":{"cancel":"取消","delete":"删除"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"是否确定要删除它?"}}},"zh-Hant":{"buttons":{"cancel":"取消","delete":"刪除"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"您是否確定要刪除？"}}}}'))
n("jQeR")
n("0sPK")
var r=i["default"].scoped("instructure_misc_plugins")
var s=n("ouhR")
var l=n.n(s)
var o=n("5Ky4")
var c=n("JD5e")
n("jYyc")
n("YGE8")
n("B1vq")
n("s/PJ")
l.a.fn.setOptions=function(e,t){var n=e?"<option value=''>"+Object(o["a"])(e)+"</option>":""
null==t&&(t=[])
t.forEach(e=>{var t=Object(o["a"])(e)
n+='<option value="'+t+'">'+t+"</option>"})
return this.html(l.a.raw(n))}
l.a.fn.ifExists=function(e){this.length&&e.call(this,this)
return this}
l.a.fn.scrollbarWidth=function(){var e=l()('<div style="width:50px;height:50px;overflow:hidden;position:absolute;top:-200px;left:-200px;"><div style="height:100px;"></div>').appendTo(this),t=e.find("div")
var n=t.innerWidth()
e.css("overflow-y","scroll")
var i=t.innerWidth()
e.remove()
return n-i}
l.a.fn.dim=function(e){return this.animate({opacity:.4},e)}
l.a.fn.undim=function(e){return this.animate({opacity:1},e)}
l.a.fn.confirmDelete=function(e){e=l.a.extend({},l.a.fn.confirmDelete.defaults,e)
var t=this
var n=null
var i=true
e.noMessage=e.noMessage||e.no_message
var a=function(){if(!i){e.cancelled&&l.a.isFunction(e.cancelled)&&e.cancelled.call(t)
return}e.confirmed||(e.confirmed=function(){t.dim()})
e.confirmed.call(t)
if(e.url){e.success||(e.success=function(e){t.fadeOut("slow",()=>{t.remove()})})
var a=e.prepareData?e.prepareData.call(t,n):{}
a.authenticity_token=Object(c["a"])()
l.a.ajaxJSON(e.url,"DELETE",a,n=>{e.success.call(t,n)},(n,i,a,r)=>{e.error&&l.a.isFunction(e.error)?e.error.call(t,n,i,a,r):l.a.ajaxJSON.unhandledXHRs.push(i)})}else{e.success||(e.success=function(){t.fadeOut("slow",()=>{t.remove()})})
e.success.call(t)}}
if(e.message&&!e.noMessage&&!l.a.skipConfirmations){if(e.dialog){i=false
var s="object"==typeof e.dialog?e.dialog:{}
n=l()(e.message).dialog(l.a.extend({},{modal:true,close:a,buttons:[{text:r.t("#buttons.cancel","Cancel"),click:function(){l()(this).dialog("close")}},{text:r.t("#buttons.delete","Delete"),class:"btn-primary",click:function(){i=true
l()(this).dialog("close")}}]},s))
return}i=confirm(e.message)}a()}
l.a.fn.confirmDelete.defaults={get message(){return r.t("confirms.default_delete_thing","Are you sure you want to delete this?")}}
l.a.fn.fragmentChange=function(e){if(e&&true!==e){var t=(window.location.search||"").replace(/^\?/,"").split("&")
var n=null
for(var i=0;i<t.length;i++){var a=t[i]
a&&0===a.indexOf("hash=")&&(n="#"+a.substring(5))}this.bind("document_fragment_change",e)
var r=this
var s=false
for(i=0;i<l.a._checkFragments.fragmentList.length;i++){var o=l.a._checkFragments.fragmentList[i]
o.doc[0]==r[0]&&(s=true)}s||l.a._checkFragments.fragmentList.push({doc:r,fragment:""})
l()(window).bind("hashchange",l.a._checkFragments)
setTimeout(()=>{n&&n.length>0?r.triggerHandler("document_fragment_change",n):r&&r[0]&&r[0].location&&r[0].location.hash.length>0&&r.triggerHandler("document_fragment_change",r[0].location.hash)},500)}else this.triggerHandler("document_fragment_change",this[0].location.hash)
return this}
l.a._checkFragments=function(){var e=l.a._checkFragments.fragmentList
for(var t=0;t<e.length;t++){var n=e[t]
var i=n.doc
if(i[0].location.hash!=n.fragment){i.triggerHandler("document_fragment_change",i[0].location.hash)
n.fragment=i[0].location.hash
l.a._checkFragments.fragmentList[t]=n}}}
l.a._checkFragments.fragmentList=[]
l.a.fn.clickLink=function(){var e=this.eq(0)
e.hasClass("disabled_link")||e.click()}
l.a.fn.showIf=function(e){if(l.a.isFunction(e))return this.each(function(t){l()(this).showIf(e.call(this))})
e?this.show():this.hide()
return this}
l.a.fn.disableIf=function(e){l.a.isFunction(e)&&(e=e.call(this))
this.prop("disabled",!!e)
return this}
l.a.fn.indicate=function(e){e=e||{}
var t
if("remove"==e){t=this.data("indicator")
t&&t.remove()
return}l()(".indicator_box").remove()
var n=this.offset()
e&&e.offset&&(n=e.offset)
var i=this.width()
var a=this.height()
var r=(e.container||this).zIndex()
t=l()(document.createElement("div"))
t.css({width:i+6,height:a+6,top:n.top-3,left:n.left-3,zIndex:r+1,position:"absolute",display:"block","-moz-border-radius":5,opacity:.8,border:"2px solid #870",backgroundColor:"#fd0"})
t.addClass("indicator_box")
t.mouseover(function(){l()(this).stop().fadeOut("fast",function(){l()(this).remove()})})
this.data("indicator")&&this.indicate("remove")
this.data("indicator",t)
l()("body").append(t)
e&&e.singleFlash?t.hide().fadeIn().animate({opacity:.8},500).fadeOut("slow",function(){l()(this).remove()}):t.hide().fadeIn().animate({opacity:.8},500).fadeOut("slow").fadeIn("slow").animate({opacity:.8},2500).fadeOut("slow",function(){l()(this).remove()})
e&&e.scroll&&l()("html,body").scrollToVisible(t)}
l.a.fn.hasScrollbar=function(){return this.length&&this[0].clientHeight<this[0].scrollHeight}
l.a.fn.log=function(e){console.log("%s: %o",e,this)
return this}
l.a.fn.fillWindowWithMe=function(e){var t=l.a.extend({minHeight:400},e),n=l()(this),i=l()("#wrapper"),a=l()("#main"),r=l()("#not_right_side"),s=l()(window),o=l()(this).add(t.alsoResize)
function c(){o.height(0)
var e=s.height()-(i.offset().top+i.outerHeight())+(a.height()-r.height()),c=Math.max(400,e)
o.height(c)
l.a.isFunction(t.onResize)&&t.onResize.call(n,c)}c()
s.unbind("resize.fillWindowWithMe").bind("resize.fillWindowWithMe",c)
return this}
l.a.fn.autoGrowInput=function(e){e=l.a.extend({maxWidth:1e3,minWidth:0,comfortZone:70},e)
this.filter("input:text").each(function(){var t=e.minWidth||l()(this).width(),n="",i=l()(this),a=l()("<tester/>").css({position:"absolute",top:-9999,left:-9999,width:"auto",fontSize:i.css("fontSize"),fontFamily:i.css("fontFamily"),fontWeight:i.css("fontWeight"),letterSpacing:i.css("letterSpacing"),whiteSpace:"nowrap"}),r=function(){setTimeout(()=>{if(n===(n=i.val()))return
a.text(n)
var r=a.width(),s=r+e.comfortZone>=t?r+e.comfortZone:t,l=i.width(),o=s<l&&s>=t||s>t&&s<e.maxWidth
o&&i.width(s)})}
a.insertAfter(i)
l()(this).bind("keyup keydown blur update change",r)})
return this}
l.a},ppAs:function(e,t,n){"use strict"
var i=n("ouhR")
var a=n.n(i)
var r=n("GLiE")
var s=n.n(r)
var l=n("5Ky4")
var o=n("pQTu")
var c=n("m0r6")
Object(c["a"])(JSON.parse('{"ar":{"user_content_aaf0fb5a":"محتوى المستخدم"},"cy":{"user_content_aaf0fb5a":"Cynnwys Defnyddiwr"},"da":{"user_content_aaf0fb5a":"Brugerindhold"},"da-x-k12":{"user_content_aaf0fb5a":"Brugerindhold"},"de":{"user_content_aaf0fb5a":"Benutzer-Content"},"el":{"user_content_aaf0fb5a":"Περιεχόμενο Χρήστη"},"en-AU":{"user_content_aaf0fb5a":"User Content"},"en-AU-x-unimelb":{"user_content_aaf0fb5a":"User Content"},"en-CA":{"user_content_aaf0fb5a":"User Content"},"en-GB":{"user_content_aaf0fb5a":"User content"},"en-GB-x-lbs":{"user_content_aaf0fb5a":"User content"},"en-GB-x-ukhe":{"user_content_aaf0fb5a":"User content"},"es":{"user_content_aaf0fb5a":"Contenido del usuario"},"fa":{"user_content_aaf0fb5a":"محتوای کاربر"},"fi":{"user_content_aaf0fb5a":"Käyttäjän sisältö"},"fr":{"user_content_aaf0fb5a":"Contenu de l\'utilisateur"},"fr-CA":{"user_content_aaf0fb5a":"Contenu de l\'utilisateur"},"he":{"user_content_aaf0fb5a":"תוכן משתמש"},"ht":{"user_content_aaf0fb5a":"Kontni Itilizatè"},"hu":{"user_content_aaf0fb5a":"Felhasználói tartalom"},"is":{"user_content_aaf0fb5a":"Notandaefni"},"it":{"user_content_aaf0fb5a":"Contenuto utente"},"ja":{"user_content_aaf0fb5a":"ユーザーコンテンツ"},"mi":{"user_content_aaf0fb5a":"Ihirangi kaiwhakamahi"},"nb":{"user_content_aaf0fb5a":"Brukerinnhold"},"nb-x-k12":{"user_content_aaf0fb5a":"Brukerinnhold"},"nl":{"user_content_aaf0fb5a":"Gebruikersinhoud"},"nn":{"user_content_aaf0fb5a":"Brukarinnhald"},"pl":{"user_content_aaf0fb5a":"Zawartość użytkownika"},"pt":{"user_content_aaf0fb5a":"Conteúdo do Utilizador"},"pt-BR":{"user_content_aaf0fb5a":"Conteúdo do Usuário"},"ru":{"user_content_aaf0fb5a":"Контент пользователя"},"sl":{"user_content_aaf0fb5a":"Vsebina uporabnika"},"sv":{"user_content_aaf0fb5a":"Användarinnehåll"},"sv-x-k12":{"user_content_aaf0fb5a":"Användarinnehåll"},"tr":{"user_content_aaf0fb5a":"Kullanıcı İçeriği"},"uk":{"user_content_aaf0fb5a":"Контент користувача"},"zh-Hans":{"user_content_aaf0fb5a":"用户内容"},"zh-Hant":{"user_content_aaf0fb5a":"使用者內容"}}'))
n("jQeR")
n("0sPK")
var u=o["default"].scoped("user_content")
const d={translateMathmlForScreenreaders(e){const t=a()("<div/>").html(e.attr("x-canvaslms-safe-mathml")).html()
const n=a()('<span class="hidden-readable"></span>')
n.html(t)
return n},toMediaCommentLink(e){const t=a()("<a\n        id='media_comment_".concat(Object(l["a"])(a()(e).data("media_comment_id")),"'\n        data-media_comment_type='").concat(Object(l["a"])(a()(e).data("media_comment_type")),"'\n        class='instructure_inline_media_comment ").concat(Object(l["a"])(e.nodeName.toLowerCase()),"_comment'\n        data-alt='").concat(Object(l["a"])(a()(e).attr("data-alt")),"'\n      />"))
t.html(a()(e).html())
return t},convert(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
const n=a()("<div />").html(e)
n.find("video.instructure_inline_media_comment,audio.instructure_inline_media_comment").replaceWith(function(){return d.toMediaCommentLink(this)})
n.find("object.instructure_user_content:not(#kaltura_player) embed").remove()
if(!t.forEditing){n.find("object.instructure_user_content,embed.instructure_user_content").replaceWith(function(){const e=a()(this)
if(!e.data("uc_snippet")||!e.data("uc_sig"))return this
const t=s.a.uniqueId("uc_")
let n="/object_snippet"
ENV.files_domain&&(n="//".concat(ENV.files_domain).concat(n))
const i=a()("<form\n            action='".concat(Object(l["a"])(n),"'\n            method='post'\n            class='user_content_post_form'\n            target='").concat(Object(l["a"])(t),"'\n            id='form-").concat(Object(l["a"])(t),"'\n          />"))
i.append(a()("<input type='hidden'/>").attr({name:"object_data",value:e.data("uc_snippet")}))
i.append(a()("<input type='hidden'/>").attr({name:"s",value:e.data("uc_sig")}))
a()("body").append(i)
setTimeout(()=>i.submit(),0)
return a()("<iframe\n            class='user_content_iframe'\n            name='".concat(Object(l["a"])(t),"'\n            style='width: ").concat(Object(l["a"])(e.data("uc_width")),"; height: ").concat(Object(l["a"])(e.data("uc_height")),";'\n            frameborder='0'\n            title='").concat(Object(l["a"])(u.t("User Content")),"'\n          />"))})
n.find("img.equation_image").each((e,t)=>{const n=a()(t)
const i=d.translateMathmlForScreenreaders(n)
n.removeAttr("x-canvaslms-safe-mathml")
n.after(i)})}return n.html()}}
t["a"]=d}}])

//# sourceMappingURL=59-c-b0e2a51d64.js.map