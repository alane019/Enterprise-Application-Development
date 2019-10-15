(window["canvasWebpackJsonp"]=window["canvasWebpackJsonp"]||[]).push([[9],{"8OEV":function(t,e,n){"use strict"
var r=n("rePB")
var o=n("VTBJ")
var i=n("vuIU")
var a=n("1OyB")
var s=n("md7G")
var c=n("foSv")
var l=n("Ji7U")
var f=n("q1tI")
var u=n.n(f)
var h=n("17x9")
var p=n.n(h)
var m=n("TSYQ")
var v=n.n(m)
var d=n("J2CL")
var g=n("AdN2")
var b=n("lzgt")
var y=n("II2N")
var O=n("QF4Q")
var w=n("gCYW")
var j=n("ISHz")
function k(t,e){var n=Object(O["a"])(t)
var r=[]
var o=Object(w["a"])(n)||{}
var i=false
function a(){if(false===i){var t=Object(w["a"])(n)||{}
var s=t.top!==o.top||t.left!==o.left||t.right!==o.right||t.bottom!==o.bottom||t.width!==o.width||t.height!==o.height
s&&"function"===typeof e&&e(t)
o=t
r.push(Object(j["a"])(a))}}a()
return{remove:function(){i=true
r.forEach(function(t){return t.cancel()})}}}var T=n("BTe1")
var P=n("IE60")
var A=n("0mOT")
var x=n("eGSd")
var N=n("oXx0")
var _=n("3Zzb")
var C=n("asnQ")
var E=n("u9uf")
var z=function(t){var e=t.stacking
return{zIndex:e.topmost}}
n.d(e,"a",function(){return J})
var I,D,V,H,W,L,X,S,Y,U,M,Q,q
var B={componentId:"bgLNT",template:function(t){return"\n\n.bgLNT_bGBk{box-sizing:border-box;z-index:".concat(t.zIndex||"inherit","}")},root:"bgLNT_bGBk"}
var F=(I=Object(N["a"])(),I(D=(H=V=function(t){Object(l["a"])(e,t)
function e(){Object(a["a"])(this,e)
return Object(s["a"])(this,Object(c["a"])(e).apply(this,arguments))}return e}(b["a"]),V.displayName="PositionTarget",V.locatorAttribute="data-position-target",H))||D)
var G=(W=Object(N["a"])(),W(L=(S=X=function(t){Object(l["a"])(e,t)
function e(){Object(a["a"])(this,e)
return Object(s["a"])(this,Object(c["a"])(e).apply(this,arguments))}return e}(b["a"]),X.displayName="PositionContent",X.propTypes={children:p.a.node,placement:E["a"].placement},X.locatorAttribute="data-position-content",S))||L)
var J=(Y=Object(N["a"])(),U=Object(d["i"])(z,B),Y(M=U(M=(q=Q=function(t){Object(l["a"])(e,t)
function e(t){var n
Object(a["a"])(this,e)
n=Object(s["a"])(this,Object(c["a"])(e).call(this,t))
n._timeouts=[]
n.handlePortalOpen=function(){n.position()
n.props.trackPosition&&n.startTracking()
n._timeouts.push(setTimeout(function(){n.state.positioned&&"function"===typeof n.props.onPositioned&&n.props.onPositioned({top:n.state.style.top,left:n.state.style.left,placement:n.state.placement})},0))}
n.position=function(){n.setState(Object(o["a"])({positioned:true},n.calculatePosition(n.props)))}
n.state=Object(o["a"])({positioned:false},n.calculatePosition(t))
n.position=Object(x["a"])(n.position,0,{leading:false,trailing:true})
n._id=n.props.id||Object(T["a"])("Position")
return n}Object(i["a"])(e,[{key:"shouldComponentUpdate",value:function(t,e,n){return!Object(P["a"])(this.state,e)||!Object(A["a"])(this.props,t)||!Object(A["a"])(this.context,n)}},{key:"componentDidMount",value:function(){this.toggleLocatorAttributes(true)}},{key:"componentDidUpdate",value:function(t,e){this.position()
this.toggleLocatorAttributes(true)
this.props.trackPosition!==t.trackPosition&&(this.props.trackPosition?this.startTracking():this.stopTracking())
var n=this.state,r=n.style,o=n.placement
r&&e.style&&(o!==e.placement||r.top!==e.style.top||r.left!==e.style.left)&&this.props.onPositionChanged({top:r.top,left:r.left,placement:o})}},{key:"componentWillUnmount",value:function(){this.position.cancel()
this.stopTracking()
this._timeouts.forEach(function(t){return clearTimeout(t)})
this.toggleLocatorAttributes(false)}},{key:"toggleLocatorAttributes",value:function(t){this.toggleLocatorAttribute(Object(O["a"])(this._content),G.locatorAttribute,t)
this.toggleLocatorAttribute(Object(O["a"])(this._target),F.locatorAttribute,t)}},{key:"toggleLocatorAttribute",value:function(t,e,n){if(t&&t.hasAttribute){n&&!t.hasAttribute(e)&&t.setAttribute(e,this._id)
!n&&t.hasAttribute(e)&&t.removeAttribute(e)}}},{key:"calculatePosition",value:function(t){return Object(C["a"])(this._content,this._target,{placement:t.placement,offsetX:t.offsetX,offsetY:t.offsetY,constrain:t.constrain,container:t.mountNode,over:t.over})}},{key:"startTracking",value:function(){this._listener=this._listener||k(this._target,this.position)}},{key:"stopTracking",value:function(){if(this._listener){this._listener.remove()
this._listener=null}}},{key:"renderContent",value:function(){var t=this
var n=b["a"].pick(e.Content,this.props.children)
if(n&&u.a.Children.count(n.props.children)>0){var i
n=Object(y["a"])(n,Object(r["a"])({ref:function(e){t._content=e},style:Object(o["a"])({},n.props.style,{},this.state.style),className:v()((i={},Object(r["a"])(i,B.root,true),Object(r["a"])(i,n.props.className,n.props.className),i))},G.locatorAttribute,this._id))
n=u.a.createElement(_["a"],{open:true,onOpen:this.handlePortalOpen,mountNode:this.props.mountNode,insertAt:this.props.insertAt},n)}return n}},{key:"renderTarget",value:function(){var t=this
var n=b["a"].pick(e.Target,this.props.children)
if(n)return Object(y["a"])(n,{ref:function(e){t._target=e}})
if(!this.props.target)return null
this._target="function"===typeof this.props.target?this.props.target():this.props.target}},{key:"render",value:function(){var t=Object(r["a"])({},e.locatorAttribute,this._id)
return u.a.createElement("span",t,this.renderTarget(),this.renderContent())}}])
e.displayName="Position"
return e}(f["Component"]),Q.Target=F,Q.Content=G,Q.locatorAttribute="data-position",Q.propTypes={children:p.a.node,target:p.a.oneOfType([g["a"],p.a.func]),over:p.a.bool,placement:E["a"].placement,offsetX:p.a.oneOfType([p.a.string,p.a.number]),offsetY:p.a.oneOfType([p.a.string,p.a.number]),onPositionChanged:p.a.func,onPositioned:p.a.func,trackPosition:p.a.bool,mountNode:E["a"].mountNode,insertAt:p.a.oneOf(["bottom","top"]),constrain:E["a"].constrain,id:p.a.string},Q.defaultProps={trackPosition:true,placement:"bottom center",offsetX:0,offsetY:0,mountNode:null,target:null,insertAt:"bottom",over:false,onPositioned:function(t){},onPositionChanged:function(t){},constrain:"window",children:null,id:void 0},q))||M)||M)},AXvA:function(t,e,n){"use strict"
n.d(e,"a",function(){return o})
var r=n("HMVb")
function o(t,e){var n=Object.keys(t)
if(1!==n.length)throw new Error("Expected exactly one key in query object.")
var o=n[0]
var a=["minHeight","maxHeight","minWidth","maxWidth"]
if(-1===a.indexOf(o))throw new Error("Invalid key `".concat(o,"` in query object. Valid keys should consist of one of the following: ")+"".concat(a.join(", ")," (case sensitive)"))
var s=t[o]
if("string"!==typeof s&&"number"!==typeof s)throw new Error("The value of the query object must be a string or number.")
if(!s)throw new Error("No value supplied for query object")
return"(".concat(i(o.toLowerCase()),": ").concat(Object(r["a"])(s,e),"px)")}function i(t){return t.slice(0,3)+"-"+t.slice(3)}},"E+IV":function(t,e,n){"use strict"
n.d(e,"a",function(){return i})
var r=n("q1tI")
var o=n.n(r)
function i(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
if("function"===typeof t){if(!(t.prototype&&t.prototype.isReactComponent))return t(e)
return o.a.createElement(t,e)}return t}},HMVb:function(t,e,n){"use strict"
var r=n("ODXe")
var o=n("i/8D")
var i=n("DUTp")
var a=n("IPIv")
var s={}
function c(t,e){if(!o["a"])return 16
var n=t||Object(i["a"])(t).documentElement
if(!e&&s[n])return s[n]
var r=parseInt(Object(a["a"])(n).getPropertyValue("font-size"))
s[n]=r
return r}var l=n("CyAq")
n.d(e,"a",function(){return f})
function f(t,e){var n=e||document.body
if(!t||"number"===typeof t)return t
var o=Object(l["a"])(t),i=Object(r["a"])(o,2),a=i[0],s=i[1]
return"rem"===s?a*c():"em"===s?a*c(n):a}},asnQ:function(t,e,n){"use strict"
var r=n("ODXe")
var o=n("1OyB")
var i=n("vuIU")
var a=n("QF4Q")
var s=n("gCYW")
var c=n("DUTp")
var l=n("i/8D")
var f=n("IPIv")
function u(t){var e=[]
if(!l["a"])return e
var n=Object(a["a"])(t)
if(n){var r=Object(f["a"])(n)||{}
var o=r.position
if("fixed"===o)return[n.ownerDocument]
var i=n
while(i&&1===i.nodeType&&(i=i.parentNode)){var s=void 0
try{s=Object(f["a"])(i)}catch(t){}if("undefined"===typeof s||null===s){e.push(i)
return e}var c=s,u=c.overflow,h=c.overflowX,p=c.overflowY;/(auto|scroll|overlay)/.test(u+p+h)&&("absolute"!==o||["relative","absolute","fixed"].indexOf(s.position)>=0)&&e.push(i)}e.push(n.ownerDocument.body)
n.ownerDocument!==document&&e.push(n.ownerDocument.defaultView)}return e}function h(t){var e=[]
if(!l["a"])return e
var n=Object(a["a"])(t)
if(n){var r=n
while((r=r.parentNode)&&r&&1===r.nodeType&&"BODY"!==r.tagName){var o=Object(f["a"])(r)
var i=o.getPropertyValue("-webkit-transform")||o.getPropertyValue("-moz-transform")||o.getPropertyValue("-ms-transform")||o.getPropertyValue("-o-transform")||o.getPropertyValue("transform")||"none"
var s="none"===i||"matrix(1, 0, 0, 1, 0, 0)"===i
"static"===o.position&&s||e.push(r)}e.push(Object(c["a"])(n).body)}return e}var p=n("gpCx")
var m=n("wohU")
n.d(e,"a",function(){return v})
n.d(e,"b",function(){return j})
function v(t,e,n){if(!t||"offscreen"===n.placement){var r=!n.container&&t
return{placement:n.placement,style:{left:"-9999em",overflow:"hidden",position:"absolute",top:"0",display:r?"none":null}}}var o=new g(t,e,n)
return{placement:o.placement,style:o.style}}var d=function(){function t(e,n){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{top:0,left:0}
Object(o["a"])(this,t)
this.node=Object(a["a"])(e)
"string"===typeof n?this.placement=j(n):Array.isArray(n)?this.placement=n:this.placement=["bottom","center"]
this.rect=Object(s["a"])(this.node)
this._offset=O(r,this.size)}Object(i["a"])(t,[{key:"calculateOffset",value:function(t){var e={top:0,start:0,center:"50%",bottom:"100%",end:"100%",stretch:0}
var n=Object(r["a"])(t,2),o=n[0],i=n[1]
if(["start","end"].indexOf(o)>=0){var a=[i,o]
o=a[0]
i=a[1]}var s=0
var c=0
"undefined"!==typeof e[o]&&(s=e[o])
"undefined"!==typeof e[i]&&(c=e[i])
return b([O({top:s,left:c},this.size),y(this._offset,this.placement)])}},{key:"normalizeScrollTop",value:function(t){return Object(c["a"])(this.node).body===t?0:t.scrollTop}},{key:"width",get:function(){return this.rect.width}},{key:"height",get:function(){return this.rect.height}},{key:"size",get:function(){return{width:this.width,height:this.height}}},{key:"position",get:function(){return{top:this.rect.top,left:this.rect.left}}},{key:"hasVerticalPlacement",get:function(){return["top","bottom"].indexOf(this.placement[0])>=0}},{key:"hasHorizontalPlacement",get:function(){return["start","end"].indexOf(this.placement[0])>=0}},{key:"shouldStretchVertically",get:function(){return"stretch"===this.placement[1]&&this.hasVerticalPlacement}},{key:"shouldStretchHorizontally",get:function(){return"stretch"===this.placement[1]&&this.hasHorizontalPlacement}},{key:"mirroredPlacement",get:function(){return Object(m["b"])(this.placement)}},{key:"scrollParentsOffset",get:function(){var t=u(this.node)
var e=0
var n=0
for(var r=1;r<t.length;r++){var o=t[r]
var i=t[r-1]
e+=this.normalizeScrollTop(o)-this.normalizeScrollTop(i)
n+=o.scrollLeft-i.scrollLeft}return{top:e,left:n}}},{key:"positionedParentsOffset",get:function(){var t=h(this.node)
var e=Object(c["a"])(this.node)
var n=t.length>1?0:e.documentElement.offsetTop
var r=0
var o=0
for(var i=1;i<t.length;i++){var a=Object(s["a"])(t[i])
var l=Object(s["a"])(t[i-1])
n+=l.top-a.top
r+=l.left-a.left
if(t[i]===e.body){n+=a.top
r+=a.left}o+=this.normalizeScrollTop(t[i])}n+=o
return{top:n,left:r}}}])
return t}()
var g=function(){function t(e,n,r){Object(o["a"])(this,t)
this.options=r||{}
var i=this.options,s=i.container,l=i.constrain,f=i.placement,h=i.over
if(!e||"offscreen"===f)return
this.container=s||Object(c["a"])(e).body
this.element=new d(e,f,{top:this.options.offsetY,left:this.options.offsetX})
this.target=new d(n||this.container,h?this.element.placement:this.element.mirroredPlacement)
"window"===l?this.constrainTo(Object(p["a"])(e)):"scroll-parent"===l?this.constrainTo(u(this.target.node)[0]):"parent"===l?this.constrainTo(this.container):"function"===typeof l?this.constrainTo(Object(a["a"])(l.call(null))):"object"===typeof l&&this.constrainTo(Object(a["a"])(l))}Object(i["a"])(t,[{key:"overflow",value:function(t){var e=Object(p["a"])(t)
var n=Object(s["a"])(t)
var r=Object(s["a"])(e)
var o=b([this.target.position,this.offset])
var i={top:this.element.positionedParentsOffset.top+this.element.scrollParentsOffset.top,left:this.element.positionedParentsOffset.left+this.element.scrollParentsOffset.left}
var a=o.left+i.left
var c=o.left+this.element.width+i.left
var l=o.top+i.top
var f=o.top+this.element.height+i.top
"bottom"===this.element.placement[0]?l-=this.element.height+this.target.height:"top"===this.element.placement[0]&&(f+=this.element.height+this.target.height)
"start"===this.element.placement[1]?a-=this.element.width-this.target.width:"end"===this.element.placement[1]&&(c+=this.element.width-this.target.width)
"top"===this.element.placement[1]?l-=this.element.height-this.target.height:"bottom"===this.element.placement[1]&&(f+=this.element.height-this.target.height)
"end"===this.element.placement[0]?a-=this.element.width+this.target.width:"start"===this.element.placement[0]&&(c+=this.element.width+this.target.width)
var u=t===e?n:{top:r.top+n.top,bottom:n.top+n.height,left:r.left+n.left,right:n.left+n.width}
return{top:l<u.top?u.top-l:0,bottom:f>u.bottom?f-u.bottom:0,left:a<u.left?u.left-a:0,right:c>u.right?c-u.right:0}}},{key:"constrainTo",value:function(t){if(!t)return
var e=this.overflow(t)
var n={top:e.top>0,bottom:e.bottom>0,left:e.left>0,right:e.right>0}
if(this.element.hasVerticalPlacement){if("stretch"!==this.element.placement[1])if(n.left&&n.right){this.element.placement[1]="center"
this.target.placement[1]="center"}else if(n.left){this.element.placement[1]="start"
this.target.placement[1]="start"}else if(n.right){this.element.placement[1]="end"
this.target.placement[1]="end"}if(n.top&&n.bottom){if(e.bottom<e.top){this.element.placement[0]="bottom"
this.target.placement[0]="top"}else if(e.bottom>e.top){this.element.placement[0]="top"
this.target.placement[0]="bottom"}}else if(n.top){this.element.placement[0]="bottom"
this.target.placement[0]="top"}else if(n.bottom){this.element.placement[0]="top"
this.target.placement[0]="bottom"}}else if(this.element.hasHorizontalPlacement){if(n.top&&n.bottom){this.element.placement[1]="center"
this.target.placement[1]="center"}else if(n.top){this.element.placement[1]="top"
this.target.placement[1]="top"}else if(n.bottom){this.element.placement[1]="bottom"
this.target.placement[1]="bottom"}if(n.left&&n.right){if(e.left>e.right){this.element.placement[0]="end"
this.target.placement[0]="start"}else if(e.left<e.right){this.element.placement[0]="start"
this.target.placement[0]="end"}}else if(n.left){this.element.placement[0]="end"
this.target.placement[0]="start"}else if(n.right){this.element.placement[0]="start"
this.target.placement[0]="end"}}}},{key:"offset",get:function(){var t=this.target.calculateOffset(this.element.placement),e=t.top,n=t.left
var r=b([this.element.calculateOffset(this.target.placement),this.element.scrollParentsOffset,this.element.positionedParentsOffset])
return{top:e-r.top,left:n-r.left}}},{key:"placement",get:function(){return k(this.element.placement)}},{key:"minWidth",get:function(){return this.element.shouldStretchVertically?this.target.width:null}},{key:"minHeight",get:function(){return this.element.shouldStretchHorizontally?this.target.height:null}},{key:"position",get:function(){var t=Object(p["a"])(this.target.node)
var e=b([this.target.position,this.offset]),n=e.left,r=e.top
if(l["a"]&&t.matchMedia){var o=t.matchMedia("only screen and (min-resolution: 1.3dppx)").matches||t.matchMedia("only screen and (-webkit-min-device-pixel-ratio: 1.3)").matches
if(!o){n=Math.round(n)
r=Math.round(r)}}return{left:n,top:r}}},{key:"style",get:function(){return{top:0,left:0,minWidth:this.minWidth,minHeight:this.minHeight,position:"absolute",transform:"translateX(".concat(this.position.left,"px) translateY(").concat(this.position.top,"px) translateZ(0)")}}}])
return t}()
function b(t){return t.reduce(function(t,e){return{top:t.top+e.top,left:t.left+e.left}},{top:0,left:0})}function y(t,e){var n=t.top,r=t.left
"bottom"===e[0]&&(n=0-parseFloat(n,10))
"end"===e[0]&&(r=0-parseFloat(r,10))
return{top:n,left:r}}function O(t,e){var n=t.left,r=t.top
n="string"===typeof n&&-1!==n.indexOf("%")?parseFloat(n,10)/100*e.width:parseFloat(n,10)
r="string"===typeof r&&-1!==r.indexOf("%")?parseFloat(r,10)/100*e.height:parseFloat(r,10)
return{top:r,left:n}}function w(t){var e=Object(r["a"])(t,2),n=e[0],o=e[1]
if("center"===n||"stretch"===n){var i=[o,n]
n=i[0]
o=i[1]}return[n,o]}function j(t){var e=t.split(" ")
1===e.length&&(e=[t,"center"])
return w(e)}function k(t){return t.join(" ")}},eGSd:function(t,e,n){"use strict"
n.d(e,"a",function(){return r})
function r(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0
var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{}
var r,o,i,a
var s=0
var c=[]
var l=false
if("function"!==typeof t)throw new TypeError("Expected a function")
var f=!!n.leading
var u="maxWait"in n
var h=!("trailing"in n)||!!n.trailing
var p=u?Math.max(+n.maxWait||0,e):0
function m(e){var n=r
var a=o
r=o=void 0
s=e
if(true!==l){i=t.apply(a,n)
return i}}function v(t){s=t
c.push(setTimeout(b,e))
return f?m(t):i}function d(t){var n=t-a
var r=t-s
var o=e-n
return u?Math.min(o,p-r):o}function g(t){var n=t-a
var r=t-s
return"undefined"===typeof a||n>=e||n<0||u&&r>=p}function b(){var t=Date.now()
if(g(t))return y(t)
c.push(setTimeout(b,d(t)))}function y(t){j()
if(h&&r)return m(t)
r=o=void 0
return i}function O(){l=true
j()
s=0
r=a=o=void 0}function w(){return 0===c.length?i:y(Date.now())}function j(){c.forEach(function(t){return clearTimeout(t)})
c=[]}function k(){var t=Date.now()
var n=g(t)
for(var s=arguments.length,l=new Array(s),f=0;f<s;f++)l[f]=arguments[f]
r=l
o=this
a=t
if(n){if(0===c.length)return v(a)
if(u){c.push(setTimeout(b,e))
return m(a)}}0===c.length&&c.push(setTimeout(b,e))
return i}k.cancel=O
k.flush=w
return k}},gCYW:function(t,e,n){"use strict"
n.d(e,"a",function(){return s})
var r=n("QF4Q")
var o=n("i/8D")
var i=n("EgqM")
var a=n("DUTp")
function s(t){var e={top:0,left:0,height:0,width:0}
if(!o["a"])return e
var n=Object(r["a"])(t)
if(!n)return e
if(n===window)return{left:window.pageXOffset,top:window.pageYOffset,width:window.innerWidth,height:window.innerHeight,right:window.innerWidth+window.pageXOffset,bottom:window.innerHeight+window.pageYOffset}
var c=t===document?document:Object(a["a"])(n)
var l=c&&c.documentElement
if(!l||!Object(i["a"])(l,n))return e
var f=n.getBoundingClientRect()
var u
for(u in f)e[u]=f[u]
if(c!==document){var h=c.defaultView.frameElement
if(h){var p=s(h)
e.top+=p.top
e.bottom+=p.top
e.left+=p.left
e.right+=p.left}}return{top:e.top+(window.pageYOffset||l.scrollTop)-(l.clientTop||0),left:e.left+(window.pageXOffset||l.scrollLeft)-(l.clientLeft||0),width:(null==e.width?n.offsetWidth:e.width)||0,height:(null==e.height?n.offsetHeight:e.height)||0,right:c.body.clientWidth-e.width-e.left,bottom:c.body.clientHeight-e.height-e.top}}},lzgt:function(t,e,n){"use strict"
n.d(e,"a",function(){return v})
var r=n("Ff2n")
var o=n("1OyB")
var i=n("vuIU")
var a=n("md7G")
var s=n("foSv")
var c=n("Ji7U")
var l=n("q1tI")
var f=n.n(l)
var u=n("17x9")
var h=n.n(u)
var p=n("4Awi")
var m=n("sQ3t")
var v=function(t){Object(c["a"])(e,t)
function e(){Object(o["a"])(this,e)
return Object(a["a"])(this,Object(s["a"])(e).apply(this,arguments))}Object(i["a"])(e,[{key:"render",value:function(){var t=this.props,e=t.children,n=Object(r["a"])(t,["children"])
return Object(m["a"])(e,n)}}])
e.displayName="ComponentIdentifier"
return e}(l["Component"])
v.propTypes={children:h.a.node}
v.defaultProps={children:null}
v.pick=function(t,e){var n
f.a.Children.forEach(e,function(e){Object(p["a"])(e,[t])&&(n=e)})
return n}},u9uf:function(t,e,n){"use strict"
n.d(e,"a",function(){return s})
var r=n("17x9")
var o=n.n(r)
var i=n("AdN2")
var a=n("AXvA")
var s={validQuery:function(t,e,n){try{Object(a["a"])(t[e])}catch(t){return new Error("Invalid query prop supplied to `".concat(n,"`. ").concat(t.message))}},placement:o.a.oneOf(["top","end","bottom","start","top start","start top","start center","start bottom","bottom start","bottom center","bottom end","end bottom","end center","end top","top end","top center","center end","center start","top stretch","bottom stretch","end stretch","start stretch","offscreen"]),mountNode:o.a.oneOfType([i["a"],o.a.func]),constrain:o.a.oneOfType([i["a"],o.a.func,o.a.oneOf(["window","scroll-parent","parent","none"])])}},wohU:function(t,e,n){"use strict"
n.d(e,"b",function(){return i})
n.d(e,"a",function(){return a})
var r=n("ODXe")
var o={center:"center",start:"end",end:"start",top:"bottom",bottom:"top",stretch:"stretch",offscreen:"offscreen"}
function i(t,e){return s(t,function(t,e){return[o[t],e]},e)}function a(t,e){return s(t,function(t,e){return[t,e].map(function(t){return"start"===t||"end"===t?o[t]:t})},e)}function s(t,e,n){var o=Array.isArray(t)?t:t.split(" "),i=Object(r["a"])(o,2),a=i[0],s=i[1]
var c=e(a,s).filter(function(t){return t})
return n?c.join(n):c}}}])

//# sourceMappingURL=9-c-31417bf76e.js.map