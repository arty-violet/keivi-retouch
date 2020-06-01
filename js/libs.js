!function(root, factory) {
    "function" == typeof define && define.amd ? // AMD. Register as an anonymous module unless amdModuleId is set
    define([], function() {
        return root.svg4everybody = factory();
    }) : "object" == typeof module && module.exports ? // Node. Does not work with strict CommonJS, but
    // only CommonJS-like environments that support module.exports,
    // like Node.
    module.exports = factory() : root.svg4everybody = factory();
}(this, function() {
    /*! svg4everybody v2.1.9 | github.com/jonathantneal/svg4everybody */
    function embed(parent, svg, target) {
        // if the target exists
        if (target) {
            // create a document fragment to hold the contents of the target
            var fragment = document.createDocumentFragment(), viewBox = !svg.hasAttribute("viewBox") && target.getAttribute("viewBox");
            // conditionally set the viewBox on the svg
            viewBox && svg.setAttribute("viewBox", viewBox);
            // copy the contents of the clone into the fragment
            for (// clone the target
            var clone = target.cloneNode(!0); clone.childNodes.length; ) {
                fragment.appendChild(clone.firstChild);
            }
            // append the fragment into the svg
            parent.appendChild(fragment);
        }
    }
    function loadreadystatechange(xhr) {
        // listen to changes in the request
        xhr.onreadystatechange = function() {
            // if the request is ready
            if (4 === xhr.readyState) {
                // get the cached html document
                var cachedDocument = xhr._cachedDocument;
                // ensure the cached html document based on the xhr response
                cachedDocument || (cachedDocument = xhr._cachedDocument = document.implementation.createHTMLDocument(""), 
                cachedDocument.body.innerHTML = xhr.responseText, xhr._cachedTarget = {}), // clear the xhr embeds list and embed each item
                xhr._embeds.splice(0).map(function(item) {
                    // get the cached target
                    var target = xhr._cachedTarget[item.id];
                    // ensure the cached target
                    target || (target = xhr._cachedTarget[item.id] = cachedDocument.getElementById(item.id)), 
                    // embed the target into the svg
                    embed(item.parent, item.svg, target);
                });
            }
        }, // test the ready state change immediately
        xhr.onreadystatechange();
    }
    function svg4everybody(rawopts) {
        function oninterval() {
            // while the index exists in the live <use> collection
            for (// get the cached <use> index
            var index = 0; index < uses.length; ) {
                // get the current <use>
                var use = uses[index], parent = use.parentNode, svg = getSVGAncestor(parent), src = use.getAttribute("xlink:href") || use.getAttribute("href");
                if (!src && opts.attributeName && (src = use.getAttribute(opts.attributeName)), 
                svg && src) {
                    if (polyfill) {
                        if (!opts.validate || opts.validate(src, svg, use)) {
                            // remove the <use> element
                            parent.removeChild(use);
                            // parse the src and get the url and id
                            var srcSplit = src.split("#"), url = srcSplit.shift(), id = srcSplit.join("#");
                            // if the link is external
                            if (url.length) {
                                // get the cached xhr request
                                var xhr = requests[url];
                                // ensure the xhr request exists
                                xhr || (xhr = requests[url] = new XMLHttpRequest(), xhr.open("GET", url), xhr.send(), 
                                xhr._embeds = []), // add the svg and id as an item to the xhr embeds list
                                xhr._embeds.push({
                                    parent: parent,
                                    svg: svg,
                                    id: id
                                }), // prepare the xhr ready state change event
                                loadreadystatechange(xhr);
                            } else {
                                // embed the local id into the svg
                                embed(parent, svg, document.getElementById(id));
                            }
                        } else {
                            // increase the index when the previous value was not "valid"
                            ++index, ++numberOfSvgUseElementsToBypass;
                        }
                    }
                } else {
                    // increase the index when the previous value was not "valid"
                    ++index;
                }
            }
            // continue the interval
            (!uses.length || uses.length - numberOfSvgUseElementsToBypass > 0) && requestAnimationFrame(oninterval, 67);
        }
        var polyfill, opts = Object(rawopts), newerIEUA = /\bTrident\/[567]\b|\bMSIE (?:9|10)\.0\b/, webkitUA = /\bAppleWebKit\/(\d+)\b/, olderEdgeUA = /\bEdge\/12\.(\d+)\b/, edgeUA = /\bEdge\/.(\d+)\b/, inIframe = window.top !== window.self;
        polyfill = "polyfill" in opts ? opts.polyfill : newerIEUA.test(navigator.userAgent) || (navigator.userAgent.match(olderEdgeUA) || [])[1] < 10547 || (navigator.userAgent.match(webkitUA) || [])[1] < 537 || edgeUA.test(navigator.userAgent) && inIframe;
        // create xhr requests object
        var requests = {}, requestAnimationFrame = window.requestAnimationFrame || setTimeout, uses = document.getElementsByTagName("use"), numberOfSvgUseElementsToBypass = 0;
        // conditionally start the interval if the polyfill is active
        polyfill && oninterval();
    }
    function getSVGAncestor(node) {
        for (var svg = node; "svg" !== svg.nodeName.toLowerCase() && (svg = svg.parentNode); ) {}
        return svg;
    }
    return svg4everybody;
});
/*! jQuery v3.5.0 | (c) JS Foundation and other contributors | jquery.org/license */
!function(e,t){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=e.document?t(e,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document");return t(e)}:t(e)}("undefined"!=typeof window?window:this,function(C,e){"use strict";var t=[],r=Object.getPrototypeOf,s=t.slice,g=t.flat?function(e){return t.flat.call(e)}:function(e){return t.concat.apply([],e)},u=t.push,i=t.indexOf,n={},o=n.toString,v=n.hasOwnProperty,a=v.toString,l=a.call(Object),y={},m=function(e){return"function"==typeof e&&"number"!=typeof e.nodeType},x=function(e){return null!=e&&e===e.window},E=C.document,c={type:!0,src:!0,nonce:!0,noModule:!0};function b(e,t,n){var r,i,o=(n=n||E).createElement("script");if(o.text=e,t)for(r in c)(i=t[r]||t.getAttribute&&t.getAttribute(r))&&o.setAttribute(r,i);n.head.appendChild(o).parentNode.removeChild(o)}function w(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?n[o.call(e)]||"object":typeof e}var f="3.5.0",S=function(e,t){return new S.fn.init(e,t)};function p(e){var t=!!e&&"length"in e&&e.length,n=w(e);return!m(e)&&!x(e)&&("array"===n||0===t||"number"==typeof t&&0<t&&t-1 in e)}S.fn=S.prototype={jquery:f,constructor:S,length:0,toArray:function(){return s.call(this)},get:function(e){return null==e?s.call(this):e<0?this[e+this.length]:this[e]},pushStack:function(e){var t=S.merge(this.constructor(),e);return t.prevObject=this,t},each:function(e){return S.each(this,e)},map:function(n){return this.pushStack(S.map(this,function(e,t){return n.call(e,t,e)}))},slice:function(){return this.pushStack(s.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},even:function(){return this.pushStack(S.grep(this,function(e,t){return(t+1)%2}))},odd:function(){return this.pushStack(S.grep(this,function(e,t){return t%2}))},eq:function(e){var t=this.length,n=+e+(e<0?t:0);return this.pushStack(0<=n&&n<t?[this[n]]:[])},end:function(){return this.prevObject||this.constructor()},push:u,sort:t.sort,splice:t.splice},S.extend=S.fn.extend=function(){var e,t,n,r,i,o,a=arguments[0]||{},s=1,u=arguments.length,l=!1;for("boolean"==typeof a&&(l=a,a=arguments[s]||{},s++),"object"==typeof a||m(a)||(a={}),s===u&&(a=this,s--);s<u;s++)if(null!=(e=arguments[s]))for(t in e)r=e[t],"__proto__"!==t&&a!==r&&(l&&r&&(S.isPlainObject(r)||(i=Array.isArray(r)))?(n=a[t],o=i&&!Array.isArray(n)?[]:i||S.isPlainObject(n)?n:{},i=!1,a[t]=S.extend(l,o,r)):void 0!==r&&(a[t]=r));return a},S.extend({expando:"jQuery"+(f+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isPlainObject:function(e){var t,n;return!(!e||"[object Object]"!==o.call(e))&&(!(t=r(e))||"function"==typeof(n=v.call(t,"constructor")&&t.constructor)&&a.call(n)===l)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},globalEval:function(e,t,n){b(e,{nonce:t&&t.nonce},n)},each:function(e,t){var n,r=0;if(p(e)){for(n=e.length;r<n;r++)if(!1===t.call(e[r],r,e[r]))break}else for(r in e)if(!1===t.call(e[r],r,e[r]))break;return e},makeArray:function(e,t){var n=t||[];return null!=e&&(p(Object(e))?S.merge(n,"string"==typeof e?[e]:e):u.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:i.call(t,e,n)},merge:function(e,t){for(var n=+t.length,r=0,i=e.length;r<n;r++)e[i++]=t[r];return e.length=i,e},grep:function(e,t,n){for(var r=[],i=0,o=e.length,a=!n;i<o;i++)!t(e[i],i)!==a&&r.push(e[i]);return r},map:function(e,t,n){var r,i,o=0,a=[];if(p(e))for(r=e.length;o<r;o++)null!=(i=t(e[o],o,n))&&a.push(i);else for(o in e)null!=(i=t(e[o],o,n))&&a.push(i);return g(a)},guid:1,support:y}),"function"==typeof Symbol&&(S.fn[Symbol.iterator]=t[Symbol.iterator]),S.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,t){n["[object "+t+"]"]=t.toLowerCase()});var d=function(n){var e,d,b,o,i,h,f,g,w,u,l,T,C,a,E,v,s,c,y,S="sizzle"+1*new Date,p=n.document,k=0,r=0,m=ue(),x=ue(),A=ue(),N=ue(),D=function(e,t){return e===t&&(l=!0),0},j={}.hasOwnProperty,t=[],q=t.pop,L=t.push,H=t.push,O=t.slice,P=function(e,t){for(var n=0,r=e.length;n<r;n++)if(e[n]===t)return n;return-1},R="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",M="[\\x20\\t\\r\\n\\f]",I="(?:\\\\[\\da-fA-F]{1,6}"+M+"?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",W="\\["+M+"*("+I+")(?:"+M+"*([*^$|!~]?=)"+M+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+I+"))|)"+M+"*\\]",F=":("+I+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+W+")*)|.*)\\)|)",B=new RegExp(M+"+","g"),$=new RegExp("^"+M+"+|((?:^|[^\\\\])(?:\\\\.)*)"+M+"+$","g"),_=new RegExp("^"+M+"*,"+M+"*"),z=new RegExp("^"+M+"*([>+~]|"+M+")"+M+"*"),U=new RegExp(M+"|>"),X=new RegExp(F),V=new RegExp("^"+I+"$"),G={ID:new RegExp("^#("+I+")"),CLASS:new RegExp("^\\.("+I+")"),TAG:new RegExp("^("+I+"|[*])"),ATTR:new RegExp("^"+W),PSEUDO:new RegExp("^"+F),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+M+"*(even|odd|(([+-]|)(\\d*)n|)"+M+"*(?:([+-]|)"+M+"*(\\d+)|))"+M+"*\\)|)","i"),bool:new RegExp("^(?:"+R+")$","i"),needsContext:new RegExp("^"+M+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+M+"*((?:-\\d)?\\d*)"+M+"*\\)|)(?=[^-]|$)","i")},Y=/HTML$/i,Q=/^(?:input|select|textarea|button)$/i,J=/^h\d$/i,K=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ee=/[+~]/,te=new RegExp("\\\\[\\da-fA-F]{1,6}"+M+"?|\\\\([^\\r\\n\\f])","g"),ne=function(e,t){var n="0x"+e.slice(1)-65536;return t||(n<0?String.fromCharCode(n+65536):String.fromCharCode(n>>10|55296,1023&n|56320))},re=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,ie=function(e,t){return t?"\0"===e?"\ufffd":e.slice(0,-1)+"\\"+e.charCodeAt(e.length-1).toString(16)+" ":"\\"+e},oe=function(){T()},ae=be(function(e){return!0===e.disabled&&"fieldset"===e.nodeName.toLowerCase()},{dir:"parentNode",next:"legend"});try{H.apply(t=O.call(p.childNodes),p.childNodes),t[p.childNodes.length].nodeType}catch(e){H={apply:t.length?function(e,t){L.apply(e,O.call(t))}:function(e,t){var n=e.length,r=0;while(e[n++]=t[r++]);e.length=n-1}}}function se(t,e,n,r){var i,o,a,s,u,l,c,f=e&&e.ownerDocument,p=e?e.nodeType:9;if(n=n||[],"string"!=typeof t||!t||1!==p&&9!==p&&11!==p)return n;if(!r&&(T(e),e=e||C,E)){if(11!==p&&(u=Z.exec(t)))if(i=u[1]){if(9===p){if(!(a=e.getElementById(i)))return n;if(a.id===i)return n.push(a),n}else if(f&&(a=f.getElementById(i))&&y(e,a)&&a.id===i)return n.push(a),n}else{if(u[2])return H.apply(n,e.getElementsByTagName(t)),n;if((i=u[3])&&d.getElementsByClassName&&e.getElementsByClassName)return H.apply(n,e.getElementsByClassName(i)),n}if(d.qsa&&!N[t+" "]&&(!v||!v.test(t))&&(1!==p||"object"!==e.nodeName.toLowerCase())){if(c=t,f=e,1===p&&(U.test(t)||z.test(t))){(f=ee.test(t)&&ye(e.parentNode)||e)===e&&d.scope||((s=e.getAttribute("id"))?s=s.replace(re,ie):e.setAttribute("id",s=S)),o=(l=h(t)).length;while(o--)l[o]=(s?"#"+s:":scope")+" "+xe(l[o]);c=l.join(",")}try{return H.apply(n,f.querySelectorAll(c)),n}catch(e){N(t,!0)}finally{s===S&&e.removeAttribute("id")}}}return g(t.replace($,"$1"),e,n,r)}function ue(){var r=[];return function e(t,n){return r.push(t+" ")>b.cacheLength&&delete e[r.shift()],e[t+" "]=n}}function le(e){return e[S]=!0,e}function ce(e){var t=C.createElement("fieldset");try{return!!e(t)}catch(e){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function fe(e,t){var n=e.split("|"),r=n.length;while(r--)b.attrHandle[n[r]]=t}function pe(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&e.sourceIndex-t.sourceIndex;if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function de(t){return function(e){return"input"===e.nodeName.toLowerCase()&&e.type===t}}function he(n){return function(e){var t=e.nodeName.toLowerCase();return("input"===t||"button"===t)&&e.type===n}}function ge(t){return function(e){return"form"in e?e.parentNode&&!1===e.disabled?"label"in e?"label"in e.parentNode?e.parentNode.disabled===t:e.disabled===t:e.isDisabled===t||e.isDisabled!==!t&&ae(e)===t:e.disabled===t:"label"in e&&e.disabled===t}}function ve(a){return le(function(o){return o=+o,le(function(e,t){var n,r=a([],e.length,o),i=r.length;while(i--)e[n=r[i]]&&(e[n]=!(t[n]=e[n]))})})}function ye(e){return e&&"undefined"!=typeof e.getElementsByTagName&&e}for(e in d=se.support={},i=se.isXML=function(e){var t=e.namespaceURI,n=(e.ownerDocument||e).documentElement;return!Y.test(t||n&&n.nodeName||"HTML")},T=se.setDocument=function(e){var t,n,r=e?e.ownerDocument||e:p;return r!=C&&9===r.nodeType&&r.documentElement&&(a=(C=r).documentElement,E=!i(C),p!=C&&(n=C.defaultView)&&n.top!==n&&(n.addEventListener?n.addEventListener("unload",oe,!1):n.attachEvent&&n.attachEvent("onunload",oe)),d.scope=ce(function(e){return a.appendChild(e).appendChild(C.createElement("div")),"undefined"!=typeof e.querySelectorAll&&!e.querySelectorAll(":scope fieldset div").length}),d.attributes=ce(function(e){return e.className="i",!e.getAttribute("className")}),d.getElementsByTagName=ce(function(e){return e.appendChild(C.createComment("")),!e.getElementsByTagName("*").length}),d.getElementsByClassName=K.test(C.getElementsByClassName),d.getById=ce(function(e){return a.appendChild(e).id=S,!C.getElementsByName||!C.getElementsByName(S).length}),d.getById?(b.filter.ID=function(e){var t=e.replace(te,ne);return function(e){return e.getAttribute("id")===t}},b.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&E){var n=t.getElementById(e);return n?[n]:[]}}):(b.filter.ID=function(e){var n=e.replace(te,ne);return function(e){var t="undefined"!=typeof e.getAttributeNode&&e.getAttributeNode("id");return t&&t.value===n}},b.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&E){var n,r,i,o=t.getElementById(e);if(o){if((n=o.getAttributeNode("id"))&&n.value===e)return[o];i=t.getElementsByName(e),r=0;while(o=i[r++])if((n=o.getAttributeNode("id"))&&n.value===e)return[o]}return[]}}),b.find.TAG=d.getElementsByTagName?function(e,t){return"undefined"!=typeof t.getElementsByTagName?t.getElementsByTagName(e):d.qsa?t.querySelectorAll(e):void 0}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++])1===n.nodeType&&r.push(n);return r}return o},b.find.CLASS=d.getElementsByClassName&&function(e,t){if("undefined"!=typeof t.getElementsByClassName&&E)return t.getElementsByClassName(e)},s=[],v=[],(d.qsa=K.test(C.querySelectorAll))&&(ce(function(e){var t;a.appendChild(e).innerHTML="<a id='"+S+"'></a><select id='"+S+"-\r\\' msallowcapture=''><option selected=''></option></select>",e.querySelectorAll("[msallowcapture^='']").length&&v.push("[*^$]="+M+"*(?:''|\"\")"),e.querySelectorAll("[selected]").length||v.push("\\["+M+"*(?:value|"+R+")"),e.querySelectorAll("[id~="+S+"-]").length||v.push("~="),(t=C.createElement("input")).setAttribute("name",""),e.appendChild(t),e.querySelectorAll("[name='']").length||v.push("\\["+M+"*name"+M+"*="+M+"*(?:''|\"\")"),e.querySelectorAll(":checked").length||v.push(":checked"),e.querySelectorAll("a#"+S+"+*").length||v.push(".#.+[+~]"),e.querySelectorAll("\\\f"),v.push("[\\r\\n\\f]")}),ce(function(e){e.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var t=C.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),e.querySelectorAll("[name=d]").length&&v.push("name"+M+"*[*^$|!~]?="),2!==e.querySelectorAll(":enabled").length&&v.push(":enabled",":disabled"),a.appendChild(e).disabled=!0,2!==e.querySelectorAll(":disabled").length&&v.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),v.push(",.*:")})),(d.matchesSelector=K.test(c=a.matches||a.webkitMatchesSelector||a.mozMatchesSelector||a.oMatchesSelector||a.msMatchesSelector))&&ce(function(e){d.disconnectedMatch=c.call(e,"*"),c.call(e,"[s!='']:x"),s.push("!=",F)}),v=v.length&&new RegExp(v.join("|")),s=s.length&&new RegExp(s.join("|")),t=K.test(a.compareDocumentPosition),y=t||K.test(a.contains)?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},D=t?function(e,t){if(e===t)return l=!0,0;var n=!e.compareDocumentPosition-!t.compareDocumentPosition;return n||(1&(n=(e.ownerDocument||e)==(t.ownerDocument||t)?e.compareDocumentPosition(t):1)||!d.sortDetached&&t.compareDocumentPosition(e)===n?e==C||e.ownerDocument==p&&y(p,e)?-1:t==C||t.ownerDocument==p&&y(p,t)?1:u?P(u,e)-P(u,t):0:4&n?-1:1)}:function(e,t){if(e===t)return l=!0,0;var n,r=0,i=e.parentNode,o=t.parentNode,a=[e],s=[t];if(!i||!o)return e==C?-1:t==C?1:i?-1:o?1:u?P(u,e)-P(u,t):0;if(i===o)return pe(e,t);n=e;while(n=n.parentNode)a.unshift(n);n=t;while(n=n.parentNode)s.unshift(n);while(a[r]===s[r])r++;return r?pe(a[r],s[r]):a[r]==p?-1:s[r]==p?1:0}),C},se.matches=function(e,t){return se(e,null,null,t)},se.matchesSelector=function(e,t){if(T(e),d.matchesSelector&&E&&!N[t+" "]&&(!s||!s.test(t))&&(!v||!v.test(t)))try{var n=c.call(e,t);if(n||d.disconnectedMatch||e.document&&11!==e.document.nodeType)return n}catch(e){N(t,!0)}return 0<se(t,C,null,[e]).length},se.contains=function(e,t){return(e.ownerDocument||e)!=C&&T(e),y(e,t)},se.attr=function(e,t){(e.ownerDocument||e)!=C&&T(e);var n=b.attrHandle[t.toLowerCase()],r=n&&j.call(b.attrHandle,t.toLowerCase())?n(e,t,!E):void 0;return void 0!==r?r:d.attributes||!E?e.getAttribute(t):(r=e.getAttributeNode(t))&&r.specified?r.value:null},se.escape=function(e){return(e+"").replace(re,ie)},se.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},se.uniqueSort=function(e){var t,n=[],r=0,i=0;if(l=!d.detectDuplicates,u=!d.sortStable&&e.slice(0),e.sort(D),l){while(t=e[i++])t===e[i]&&(r=n.push(i));while(r--)e.splice(n[r],1)}return u=null,e},o=se.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=o(e)}else if(3===i||4===i)return e.nodeValue}else while(t=e[r++])n+=o(t);return n},(b=se.selectors={cacheLength:50,createPseudo:le,match:G,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(te,ne),e[3]=(e[3]||e[4]||e[5]||"").replace(te,ne),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||se.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&se.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2];return G.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&X.test(n)&&(t=h(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(te,ne).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=m[e+" "];return t||(t=new RegExp("(^|"+M+")"+e+"("+M+"|$)"))&&m(e,function(e){return t.test("string"==typeof e.className&&e.className||"undefined"!=typeof e.getAttribute&&e.getAttribute("class")||"")})},ATTR:function(n,r,i){return function(e){var t=se.attr(e,n);return null==t?"!="===r:!r||(t+="","="===r?t===i:"!="===r?t!==i:"^="===r?i&&0===t.indexOf(i):"*="===r?i&&-1<t.indexOf(i):"$="===r?i&&t.slice(-i.length)===i:"~="===r?-1<(" "+t.replace(B," ")+" ").indexOf(i):"|="===r&&(t===i||t.slice(0,i.length+1)===i+"-"))}},CHILD:function(h,e,t,g,v){var y="nth"!==h.slice(0,3),m="last"!==h.slice(-4),x="of-type"===e;return 1===g&&0===v?function(e){return!!e.parentNode}:function(e,t,n){var r,i,o,a,s,u,l=y!==m?"nextSibling":"previousSibling",c=e.parentNode,f=x&&e.nodeName.toLowerCase(),p=!n&&!x,d=!1;if(c){if(y){while(l){a=e;while(a=a[l])if(x?a.nodeName.toLowerCase()===f:1===a.nodeType)return!1;u=l="only"===h&&!u&&"nextSibling"}return!0}if(u=[m?c.firstChild:c.lastChild],m&&p){d=(s=(r=(i=(o=(a=c)[S]||(a[S]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]||[])[0]===k&&r[1])&&r[2],a=s&&c.childNodes[s];while(a=++s&&a&&a[l]||(d=s=0)||u.pop())if(1===a.nodeType&&++d&&a===e){i[h]=[k,s,d];break}}else if(p&&(d=s=(r=(i=(o=(a=e)[S]||(a[S]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]||[])[0]===k&&r[1]),!1===d)while(a=++s&&a&&a[l]||(d=s=0)||u.pop())if((x?a.nodeName.toLowerCase()===f:1===a.nodeType)&&++d&&(p&&((i=(o=a[S]||(a[S]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]=[k,d]),a===e))break;return(d-=v)===g||d%g==0&&0<=d/g}}},PSEUDO:function(e,o){var t,a=b.pseudos[e]||b.setFilters[e.toLowerCase()]||se.error("unsupported pseudo: "+e);return a[S]?a(o):1<a.length?(t=[e,e,"",o],b.setFilters.hasOwnProperty(e.toLowerCase())?le(function(e,t){var n,r=a(e,o),i=r.length;while(i--)e[n=P(e,r[i])]=!(t[n]=r[i])}):function(e){return a(e,0,t)}):a}},pseudos:{not:le(function(e){var r=[],i=[],s=f(e.replace($,"$1"));return s[S]?le(function(e,t,n,r){var i,o=s(e,null,r,[]),a=e.length;while(a--)(i=o[a])&&(e[a]=!(t[a]=i))}):function(e,t,n){return r[0]=e,s(r,null,n,i),r[0]=null,!i.pop()}}),has:le(function(t){return function(e){return 0<se(t,e).length}}),contains:le(function(t){return t=t.replace(te,ne),function(e){return-1<(e.textContent||o(e)).indexOf(t)}}),lang:le(function(n){return V.test(n||"")||se.error("unsupported lang: "+n),n=n.replace(te,ne).toLowerCase(),function(e){var t;do{if(t=E?e.lang:e.getAttribute("xml:lang")||e.getAttribute("lang"))return(t=t.toLowerCase())===n||0===t.indexOf(n+"-")}while((e=e.parentNode)&&1===e.nodeType);return!1}}),target:function(e){var t=n.location&&n.location.hash;return t&&t.slice(1)===e.id},root:function(e){return e===a},focus:function(e){return e===C.activeElement&&(!C.hasFocus||C.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:ge(!1),disabled:ge(!0),checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,!0===e.selected},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!b.pseudos.empty(e)},header:function(e){return J.test(e.nodeName)},input:function(e){return Q.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:ve(function(){return[0]}),last:ve(function(e,t){return[t-1]}),eq:ve(function(e,t,n){return[n<0?n+t:n]}),even:ve(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e}),odd:ve(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e}),lt:ve(function(e,t,n){for(var r=n<0?n+t:t<n?t:n;0<=--r;)e.push(r);return e}),gt:ve(function(e,t,n){for(var r=n<0?n+t:n;++r<t;)e.push(r);return e})}}).pseudos.nth=b.pseudos.eq,{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})b.pseudos[e]=de(e);for(e in{submit:!0,reset:!0})b.pseudos[e]=he(e);function me(){}function xe(e){for(var t=0,n=e.length,r="";t<n;t++)r+=e[t].value;return r}function be(s,e,t){var u=e.dir,l=e.next,c=l||u,f=t&&"parentNode"===c,p=r++;return e.first?function(e,t,n){while(e=e[u])if(1===e.nodeType||f)return s(e,t,n);return!1}:function(e,t,n){var r,i,o,a=[k,p];if(n){while(e=e[u])if((1===e.nodeType||f)&&s(e,t,n))return!0}else while(e=e[u])if(1===e.nodeType||f)if(i=(o=e[S]||(e[S]={}))[e.uniqueID]||(o[e.uniqueID]={}),l&&l===e.nodeName.toLowerCase())e=e[u]||e;else{if((r=i[c])&&r[0]===k&&r[1]===p)return a[2]=r[2];if((i[c]=a)[2]=s(e,t,n))return!0}return!1}}function we(i){return 1<i.length?function(e,t,n){var r=i.length;while(r--)if(!i[r](e,t,n))return!1;return!0}:i[0]}function Te(e,t,n,r,i){for(var o,a=[],s=0,u=e.length,l=null!=t;s<u;s++)(o=e[s])&&(n&&!n(o,r,i)||(a.push(o),l&&t.push(s)));return a}function Ce(d,h,g,v,y,e){return v&&!v[S]&&(v=Ce(v)),y&&!y[S]&&(y=Ce(y,e)),le(function(e,t,n,r){var i,o,a,s=[],u=[],l=t.length,c=e||function(e,t,n){for(var r=0,i=t.length;r<i;r++)se(e,t[r],n);return n}(h||"*",n.nodeType?[n]:n,[]),f=!d||!e&&h?c:Te(c,s,d,n,r),p=g?y||(e?d:l||v)?[]:t:f;if(g&&g(f,p,n,r),v){i=Te(p,u),v(i,[],n,r),o=i.length;while(o--)(a=i[o])&&(p[u[o]]=!(f[u[o]]=a))}if(e){if(y||d){if(y){i=[],o=p.length;while(o--)(a=p[o])&&i.push(f[o]=a);y(null,p=[],i,r)}o=p.length;while(o--)(a=p[o])&&-1<(i=y?P(e,a):s[o])&&(e[i]=!(t[i]=a))}}else p=Te(p===t?p.splice(l,p.length):p),y?y(null,t,p,r):H.apply(t,p)})}function Ee(e){for(var i,t,n,r=e.length,o=b.relative[e[0].type],a=o||b.relative[" "],s=o?1:0,u=be(function(e){return e===i},a,!0),l=be(function(e){return-1<P(i,e)},a,!0),c=[function(e,t,n){var r=!o&&(n||t!==w)||((i=t).nodeType?u(e,t,n):l(e,t,n));return i=null,r}];s<r;s++)if(t=b.relative[e[s].type])c=[be(we(c),t)];else{if((t=b.filter[e[s].type].apply(null,e[s].matches))[S]){for(n=++s;n<r;n++)if(b.relative[e[n].type])break;return Ce(1<s&&we(c),1<s&&xe(e.slice(0,s-1).concat({value:" "===e[s-2].type?"*":""})).replace($,"$1"),t,s<n&&Ee(e.slice(s,n)),n<r&&Ee(e=e.slice(n)),n<r&&xe(e))}c.push(t)}return we(c)}return me.prototype=b.filters=b.pseudos,b.setFilters=new me,h=se.tokenize=function(e,t){var n,r,i,o,a,s,u,l=x[e+" "];if(l)return t?0:l.slice(0);a=e,s=[],u=b.preFilter;while(a){for(o in n&&!(r=_.exec(a))||(r&&(a=a.slice(r[0].length)||a),s.push(i=[])),n=!1,(r=z.exec(a))&&(n=r.shift(),i.push({value:n,type:r[0].replace($," ")}),a=a.slice(n.length)),b.filter)!(r=G[o].exec(a))||u[o]&&!(r=u[o](r))||(n=r.shift(),i.push({value:n,type:o,matches:r}),a=a.slice(n.length));if(!n)break}return t?a.length:a?se.error(e):x(e,s).slice(0)},f=se.compile=function(e,t){var n,v,y,m,x,r,i=[],o=[],a=A[e+" "];if(!a){t||(t=h(e)),n=t.length;while(n--)(a=Ee(t[n]))[S]?i.push(a):o.push(a);(a=A(e,(v=o,m=0<(y=i).length,x=0<v.length,r=function(e,t,n,r,i){var o,a,s,u=0,l="0",c=e&&[],f=[],p=w,d=e||x&&b.find.TAG("*",i),h=k+=null==p?1:Math.random()||.1,g=d.length;for(i&&(w=t==C||t||i);l!==g&&null!=(o=d[l]);l++){if(x&&o){a=0,t||o.ownerDocument==C||(T(o),n=!E);while(s=v[a++])if(s(o,t||C,n)){r.push(o);break}i&&(k=h)}m&&((o=!s&&o)&&u--,e&&c.push(o))}if(u+=l,m&&l!==u){a=0;while(s=y[a++])s(c,f,t,n);if(e){if(0<u)while(l--)c[l]||f[l]||(f[l]=q.call(r));f=Te(f)}H.apply(r,f),i&&!e&&0<f.length&&1<u+y.length&&se.uniqueSort(r)}return i&&(k=h,w=p),c},m?le(r):r))).selector=e}return a},g=se.select=function(e,t,n,r){var i,o,a,s,u,l="function"==typeof e&&e,c=!r&&h(e=l.selector||e);if(n=n||[],1===c.length){if(2<(o=c[0]=c[0].slice(0)).length&&"ID"===(a=o[0]).type&&9===t.nodeType&&E&&b.relative[o[1].type]){if(!(t=(b.find.ID(a.matches[0].replace(te,ne),t)||[])[0]))return n;l&&(t=t.parentNode),e=e.slice(o.shift().value.length)}i=G.needsContext.test(e)?0:o.length;while(i--){if(a=o[i],b.relative[s=a.type])break;if((u=b.find[s])&&(r=u(a.matches[0].replace(te,ne),ee.test(o[0].type)&&ye(t.parentNode)||t))){if(o.splice(i,1),!(e=r.length&&xe(o)))return H.apply(n,r),n;break}}}return(l||f(e,c))(r,t,!E,n,!t||ee.test(e)&&ye(t.parentNode)||t),n},d.sortStable=S.split("").sort(D).join("")===S,d.detectDuplicates=!!l,T(),d.sortDetached=ce(function(e){return 1&e.compareDocumentPosition(C.createElement("fieldset"))}),ce(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||fe("type|href|height|width",function(e,t,n){if(!n)return e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),d.attributes&&ce(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||fe("value",function(e,t,n){if(!n&&"input"===e.nodeName.toLowerCase())return e.defaultValue}),ce(function(e){return null==e.getAttribute("disabled")})||fe(R,function(e,t,n){var r;if(!n)return!0===e[t]?t.toLowerCase():(r=e.getAttributeNode(t))&&r.specified?r.value:null}),se}(C);S.find=d,S.expr=d.selectors,S.expr[":"]=S.expr.pseudos,S.uniqueSort=S.unique=d.uniqueSort,S.text=d.getText,S.isXMLDoc=d.isXML,S.contains=d.contains,S.escapeSelector=d.escape;var h=function(e,t,n){var r=[],i=void 0!==n;while((e=e[t])&&9!==e.nodeType)if(1===e.nodeType){if(i&&S(e).is(n))break;r.push(e)}return r},T=function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n},k=S.expr.match.needsContext;function A(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()}var N=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function D(e,n,r){return m(n)?S.grep(e,function(e,t){return!!n.call(e,t,e)!==r}):n.nodeType?S.grep(e,function(e){return e===n!==r}):"string"!=typeof n?S.grep(e,function(e){return-1<i.call(n,e)!==r}):S.filter(n,e,r)}S.filter=function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?S.find.matchesSelector(r,e)?[r]:[]:S.find.matches(e,S.grep(t,function(e){return 1===e.nodeType}))},S.fn.extend({find:function(e){var t,n,r=this.length,i=this;if("string"!=typeof e)return this.pushStack(S(e).filter(function(){for(t=0;t<r;t++)if(S.contains(i[t],this))return!0}));for(n=this.pushStack([]),t=0;t<r;t++)S.find(e,i[t],n);return 1<r?S.uniqueSort(n):n},filter:function(e){return this.pushStack(D(this,e||[],!1))},not:function(e){return this.pushStack(D(this,e||[],!0))},is:function(e){return!!D(this,"string"==typeof e&&k.test(e)?S(e):e||[],!1).length}});var j,q=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;(S.fn.init=function(e,t,n){var r,i;if(!e)return this;if(n=n||j,"string"==typeof e){if(!(r="<"===e[0]&&">"===e[e.length-1]&&3<=e.length?[null,e,null]:q.exec(e))||!r[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);if(r[1]){if(t=t instanceof S?t[0]:t,S.merge(this,S.parseHTML(r[1],t&&t.nodeType?t.ownerDocument||t:E,!0)),N.test(r[1])&&S.isPlainObject(t))for(r in t)m(this[r])?this[r](t[r]):this.attr(r,t[r]);return this}return(i=E.getElementById(r[2]))&&(this[0]=i,this.length=1),this}return e.nodeType?(this[0]=e,this.length=1,this):m(e)?void 0!==n.ready?n.ready(e):e(S):S.makeArray(e,this)}).prototype=S.fn,j=S(E);var L=/^(?:parents|prev(?:Until|All))/,H={children:!0,contents:!0,next:!0,prev:!0};function O(e,t){while((e=e[t])&&1!==e.nodeType);return e}S.fn.extend({has:function(e){var t=S(e,this),n=t.length;return this.filter(function(){for(var e=0;e<n;e++)if(S.contains(this,t[e]))return!0})},closest:function(e,t){var n,r=0,i=this.length,o=[],a="string"!=typeof e&&S(e);if(!k.test(e))for(;r<i;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(a?-1<a.index(n):1===n.nodeType&&S.find.matchesSelector(n,e))){o.push(n);break}return this.pushStack(1<o.length?S.uniqueSort(o):o)},index:function(e){return e?"string"==typeof e?i.call(S(e),this[0]):i.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(S.uniqueSort(S.merge(this.get(),S(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),S.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return h(e,"parentNode")},parentsUntil:function(e,t,n){return h(e,"parentNode",n)},next:function(e){return O(e,"nextSibling")},prev:function(e){return O(e,"previousSibling")},nextAll:function(e){return h(e,"nextSibling")},prevAll:function(e){return h(e,"previousSibling")},nextUntil:function(e,t,n){return h(e,"nextSibling",n)},prevUntil:function(e,t,n){return h(e,"previousSibling",n)},siblings:function(e){return T((e.parentNode||{}).firstChild,e)},children:function(e){return T(e.firstChild)},contents:function(e){return null!=e.contentDocument&&r(e.contentDocument)?e.contentDocument:(A(e,"template")&&(e=e.content||e),S.merge([],e.childNodes))}},function(r,i){S.fn[r]=function(e,t){var n=S.map(this,i,e);return"Until"!==r.slice(-5)&&(t=e),t&&"string"==typeof t&&(n=S.filter(t,n)),1<this.length&&(H[r]||S.uniqueSort(n),L.test(r)&&n.reverse()),this.pushStack(n)}});var P=/[^\x20\t\r\n\f]+/g;function R(e){return e}function M(e){throw e}function I(e,t,n,r){var i;try{e&&m(i=e.promise)?i.call(e).done(t).fail(n):e&&m(i=e.then)?i.call(e,t,n):t.apply(void 0,[e].slice(r))}catch(e){n.apply(void 0,[e])}}S.Callbacks=function(r){var e,n;r="string"==typeof r?(e=r,n={},S.each(e.match(P)||[],function(e,t){n[t]=!0}),n):S.extend({},r);var i,t,o,a,s=[],u=[],l=-1,c=function(){for(a=a||r.once,o=i=!0;u.length;l=-1){t=u.shift();while(++l<s.length)!1===s[l].apply(t[0],t[1])&&r.stopOnFalse&&(l=s.length,t=!1)}r.memory||(t=!1),i=!1,a&&(s=t?[]:"")},f={add:function(){return s&&(t&&!i&&(l=s.length-1,u.push(t)),function n(e){S.each(e,function(e,t){m(t)?r.unique&&f.has(t)||s.push(t):t&&t.length&&"string"!==w(t)&&n(t)})}(arguments),t&&!i&&c()),this},remove:function(){return S.each(arguments,function(e,t){var n;while(-1<(n=S.inArray(t,s,n)))s.splice(n,1),n<=l&&l--}),this},has:function(e){return e?-1<S.inArray(e,s):0<s.length},empty:function(){return s&&(s=[]),this},disable:function(){return a=u=[],s=t="",this},disabled:function(){return!s},lock:function(){return a=u=[],t||i||(s=t=""),this},locked:function(){return!!a},fireWith:function(e,t){return a||(t=[e,(t=t||[]).slice?t.slice():t],u.push(t),i||c()),this},fire:function(){return f.fireWith(this,arguments),this},fired:function(){return!!o}};return f},S.extend({Deferred:function(e){var o=[["notify","progress",S.Callbacks("memory"),S.Callbacks("memory"),2],["resolve","done",S.Callbacks("once memory"),S.Callbacks("once memory"),0,"resolved"],["reject","fail",S.Callbacks("once memory"),S.Callbacks("once memory"),1,"rejected"]],i="pending",a={state:function(){return i},always:function(){return s.done(arguments).fail(arguments),this},"catch":function(e){return a.then(null,e)},pipe:function(){var i=arguments;return S.Deferred(function(r){S.each(o,function(e,t){var n=m(i[t[4]])&&i[t[4]];s[t[1]](function(){var e=n&&n.apply(this,arguments);e&&m(e.promise)?e.promise().progress(r.notify).done(r.resolve).fail(r.reject):r[t[0]+"With"](this,n?[e]:arguments)})}),i=null}).promise()},then:function(t,n,r){var u=0;function l(i,o,a,s){return function(){var n=this,r=arguments,e=function(){var e,t;if(!(i<u)){if((e=a.apply(n,r))===o.promise())throw new TypeError("Thenable self-resolution");t=e&&("object"==typeof e||"function"==typeof e)&&e.then,m(t)?s?t.call(e,l(u,o,R,s),l(u,o,M,s)):(u++,t.call(e,l(u,o,R,s),l(u,o,M,s),l(u,o,R,o.notifyWith))):(a!==R&&(n=void 0,r=[e]),(s||o.resolveWith)(n,r))}},t=s?e:function(){try{e()}catch(e){S.Deferred.exceptionHook&&S.Deferred.exceptionHook(e,t.stackTrace),u<=i+1&&(a!==M&&(n=void 0,r=[e]),o.rejectWith(n,r))}};i?t():(S.Deferred.getStackHook&&(t.stackTrace=S.Deferred.getStackHook()),C.setTimeout(t))}}return S.Deferred(function(e){o[0][3].add(l(0,e,m(r)?r:R,e.notifyWith)),o[1][3].add(l(0,e,m(t)?t:R)),o[2][3].add(l(0,e,m(n)?n:M))}).promise()},promise:function(e){return null!=e?S.extend(e,a):a}},s={};return S.each(o,function(e,t){var n=t[2],r=t[5];a[t[1]]=n.add,r&&n.add(function(){i=r},o[3-e][2].disable,o[3-e][3].disable,o[0][2].lock,o[0][3].lock),n.add(t[3].fire),s[t[0]]=function(){return s[t[0]+"With"](this===s?void 0:this,arguments),this},s[t[0]+"With"]=n.fireWith}),a.promise(s),e&&e.call(s,s),s},when:function(e){var n=arguments.length,t=n,r=Array(t),i=s.call(arguments),o=S.Deferred(),a=function(t){return function(e){r[t]=this,i[t]=1<arguments.length?s.call(arguments):e,--n||o.resolveWith(r,i)}};if(n<=1&&(I(e,o.done(a(t)).resolve,o.reject,!n),"pending"===o.state()||m(i[t]&&i[t].then)))return o.then();while(t--)I(i[t],a(t),o.reject);return o.promise()}});var W=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;S.Deferred.exceptionHook=function(e,t){C.console&&C.console.warn&&e&&W.test(e.name)&&C.console.warn("jQuery.Deferred exception: "+e.message,e.stack,t)},S.readyException=function(e){C.setTimeout(function(){throw e})};var F=S.Deferred();function B(){E.removeEventListener("DOMContentLoaded",B),C.removeEventListener("load",B),S.ready()}S.fn.ready=function(e){return F.then(e)["catch"](function(e){S.readyException(e)}),this},S.extend({isReady:!1,readyWait:1,ready:function(e){(!0===e?--S.readyWait:S.isReady)||(S.isReady=!0)!==e&&0<--S.readyWait||F.resolveWith(E,[S])}}),S.ready.then=F.then,"complete"===E.readyState||"loading"!==E.readyState&&!E.documentElement.doScroll?C.setTimeout(S.ready):(E.addEventListener("DOMContentLoaded",B),C.addEventListener("load",B));var $=function(e,t,n,r,i,o,a){var s=0,u=e.length,l=null==n;if("object"===w(n))for(s in i=!0,n)$(e,t,s,n[s],!0,o,a);else if(void 0!==r&&(i=!0,m(r)||(a=!0),l&&(a?(t.call(e,r),t=null):(l=t,t=function(e,t,n){return l.call(S(e),n)})),t))for(;s<u;s++)t(e[s],n,a?r:r.call(e[s],s,t(e[s],n)));return i?e:l?t.call(e):u?t(e[0],n):o},_=/^-ms-/,z=/-([a-z])/g;function U(e,t){return t.toUpperCase()}function X(e){return e.replace(_,"ms-").replace(z,U)}var V=function(e){return 1===e.nodeType||9===e.nodeType||!+e.nodeType};function G(){this.expando=S.expando+G.uid++}G.uid=1,G.prototype={cache:function(e){var t=e[this.expando];return t||(t=Object.create(null),V(e)&&(e.nodeType?e[this.expando]=t:Object.defineProperty(e,this.expando,{value:t,configurable:!0}))),t},set:function(e,t,n){var r,i=this.cache(e);if("string"==typeof t)i[X(t)]=n;else for(r in t)i[X(r)]=t[r];return i},get:function(e,t){return void 0===t?this.cache(e):e[this.expando]&&e[this.expando][X(t)]},access:function(e,t,n){return void 0===t||t&&"string"==typeof t&&void 0===n?this.get(e,t):(this.set(e,t,n),void 0!==n?n:t)},remove:function(e,t){var n,r=e[this.expando];if(void 0!==r){if(void 0!==t){n=(t=Array.isArray(t)?t.map(X):(t=X(t))in r?[t]:t.match(P)||[]).length;while(n--)delete r[t[n]]}(void 0===t||S.isEmptyObject(r))&&(e.nodeType?e[this.expando]=void 0:delete e[this.expando])}},hasData:function(e){var t=e[this.expando];return void 0!==t&&!S.isEmptyObject(t)}};var Y=new G,Q=new G,J=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,K=/[A-Z]/g;function Z(e,t,n){var r,i;if(void 0===n&&1===e.nodeType)if(r="data-"+t.replace(K,"-$&").toLowerCase(),"string"==typeof(n=e.getAttribute(r))){try{n="true"===(i=n)||"false"!==i&&("null"===i?null:i===+i+""?+i:J.test(i)?JSON.parse(i):i)}catch(e){}Q.set(e,t,n)}else n=void 0;return n}S.extend({hasData:function(e){return Q.hasData(e)||Y.hasData(e)},data:function(e,t,n){return Q.access(e,t,n)},removeData:function(e,t){Q.remove(e,t)},_data:function(e,t,n){return Y.access(e,t,n)},_removeData:function(e,t){Y.remove(e,t)}}),S.fn.extend({data:function(n,e){var t,r,i,o=this[0],a=o&&o.attributes;if(void 0===n){if(this.length&&(i=Q.get(o),1===o.nodeType&&!Y.get(o,"hasDataAttrs"))){t=a.length;while(t--)a[t]&&0===(r=a[t].name).indexOf("data-")&&(r=X(r.slice(5)),Z(o,r,i[r]));Y.set(o,"hasDataAttrs",!0)}return i}return"object"==typeof n?this.each(function(){Q.set(this,n)}):$(this,function(e){var t;if(o&&void 0===e)return void 0!==(t=Q.get(o,n))?t:void 0!==(t=Z(o,n))?t:void 0;this.each(function(){Q.set(this,n,e)})},null,e,1<arguments.length,null,!0)},removeData:function(e){return this.each(function(){Q.remove(this,e)})}}),S.extend({queue:function(e,t,n){var r;if(e)return t=(t||"fx")+"queue",r=Y.get(e,t),n&&(!r||Array.isArray(n)?r=Y.access(e,t,S.makeArray(n)):r.push(n)),r||[]},dequeue:function(e,t){t=t||"fx";var n=S.queue(e,t),r=n.length,i=n.shift(),o=S._queueHooks(e,t);"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,function(){S.dequeue(e,t)},o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return Y.get(e,n)||Y.access(e,n,{empty:S.Callbacks("once memory").add(function(){Y.remove(e,[t+"queue",n])})})}}),S.fn.extend({queue:function(t,n){var e=2;return"string"!=typeof t&&(n=t,t="fx",e--),arguments.length<e?S.queue(this[0],t):void 0===n?this:this.each(function(){var e=S.queue(this,t,n);S._queueHooks(this,t),"fx"===t&&"inprogress"!==e[0]&&S.dequeue(this,t)})},dequeue:function(e){return this.each(function(){S.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,r=1,i=S.Deferred(),o=this,a=this.length,s=function(){--r||i.resolveWith(o,[o])};"string"!=typeof e&&(t=e,e=void 0),e=e||"fx";while(a--)(n=Y.get(o[a],e+"queueHooks"))&&n.empty&&(r++,n.empty.add(s));return s(),i.promise(t)}});var ee=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,te=new RegExp("^(?:([+-])=|)("+ee+")([a-z%]*)$","i"),ne=["Top","Right","Bottom","Left"],re=E.documentElement,ie=function(e){return S.contains(e.ownerDocument,e)},oe={composed:!0};re.getRootNode&&(ie=function(e){return S.contains(e.ownerDocument,e)||e.getRootNode(oe)===e.ownerDocument});var ae=function(e,t){return"none"===(e=t||e).style.display||""===e.style.display&&ie(e)&&"none"===S.css(e,"display")};function se(e,t,n,r){var i,o,a=20,s=r?function(){return r.cur()}:function(){return S.css(e,t,"")},u=s(),l=n&&n[3]||(S.cssNumber[t]?"":"px"),c=e.nodeType&&(S.cssNumber[t]||"px"!==l&&+u)&&te.exec(S.css(e,t));if(c&&c[3]!==l){u/=2,l=l||c[3],c=+u||1;while(a--)S.style(e,t,c+l),(1-o)*(1-(o=s()/u||.5))<=0&&(a=0),c/=o;c*=2,S.style(e,t,c+l),n=n||[]}return n&&(c=+c||+u||0,i=n[1]?c+(n[1]+1)*n[2]:+n[2],r&&(r.unit=l,r.start=c,r.end=i)),i}var ue={};function le(e,t){for(var n,r,i,o,a,s,u,l=[],c=0,f=e.length;c<f;c++)(r=e[c]).style&&(n=r.style.display,t?("none"===n&&(l[c]=Y.get(r,"display")||null,l[c]||(r.style.display="")),""===r.style.display&&ae(r)&&(l[c]=(u=a=o=void 0,a=(i=r).ownerDocument,s=i.nodeName,(u=ue[s])||(o=a.body.appendChild(a.createElement(s)),u=S.css(o,"display"),o.parentNode.removeChild(o),"none"===u&&(u="block"),ue[s]=u)))):"none"!==n&&(l[c]="none",Y.set(r,"display",n)));for(c=0;c<f;c++)null!=l[c]&&(e[c].style.display=l[c]);return e}S.fn.extend({show:function(){return le(this,!0)},hide:function(){return le(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){ae(this)?S(this).show():S(this).hide()})}});var ce,fe,pe=/^(?:checkbox|radio)$/i,de=/<([a-z][^\/\0>\x20\t\r\n\f]*)/i,he=/^$|^module$|\/(?:java|ecma)script/i;ce=E.createDocumentFragment().appendChild(E.createElement("div")),(fe=E.createElement("input")).setAttribute("type","radio"),fe.setAttribute("checked","checked"),fe.setAttribute("name","t"),ce.appendChild(fe),y.checkClone=ce.cloneNode(!0).cloneNode(!0).lastChild.checked,ce.innerHTML="<textarea>x</textarea>",y.noCloneChecked=!!ce.cloneNode(!0).lastChild.defaultValue,ce.innerHTML="<option></option>",y.option=!!ce.lastChild;var ge={thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};function ve(e,t){var n;return n="undefined"!=typeof e.getElementsByTagName?e.getElementsByTagName(t||"*"):"undefined"!=typeof e.querySelectorAll?e.querySelectorAll(t||"*"):[],void 0===t||t&&A(e,t)?S.merge([e],n):n}function ye(e,t){for(var n=0,r=e.length;n<r;n++)Y.set(e[n],"globalEval",!t||Y.get(t[n],"globalEval"))}ge.tbody=ge.tfoot=ge.colgroup=ge.caption=ge.thead,ge.th=ge.td,y.option||(ge.optgroup=ge.option=[1,"<select multiple='multiple'>","</select>"]);var me=/<|&#?\w+;/;function xe(e,t,n,r,i){for(var o,a,s,u,l,c,f=t.createDocumentFragment(),p=[],d=0,h=e.length;d<h;d++)if((o=e[d])||0===o)if("object"===w(o))S.merge(p,o.nodeType?[o]:o);else if(me.test(o)){a=a||f.appendChild(t.createElement("div")),s=(de.exec(o)||["",""])[1].toLowerCase(),u=ge[s]||ge._default,a.innerHTML=u[1]+S.htmlPrefilter(o)+u[2],c=u[0];while(c--)a=a.lastChild;S.merge(p,a.childNodes),(a=f.firstChild).textContent=""}else p.push(t.createTextNode(o));f.textContent="",d=0;while(o=p[d++])if(r&&-1<S.inArray(o,r))i&&i.push(o);else if(l=ie(o),a=ve(f.appendChild(o),"script"),l&&ye(a),n){c=0;while(o=a[c++])he.test(o.type||"")&&n.push(o)}return f}var be=/^key/,we=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,Te=/^([^.]*)(?:\.(.+)|)/;function Ce(){return!0}function Ee(){return!1}function Se(e,t){return e===function(){try{return E.activeElement}catch(e){}}()==("focus"===t)}function ke(e,t,n,r,i,o){var a,s;if("object"==typeof t){for(s in"string"!=typeof n&&(r=r||n,n=void 0),t)ke(e,s,n,r,t[s],o);return e}if(null==r&&null==i?(i=n,r=n=void 0):null==i&&("string"==typeof n?(i=r,r=void 0):(i=r,r=n,n=void 0)),!1===i)i=Ee;else if(!i)return e;return 1===o&&(a=i,(i=function(e){return S().off(e),a.apply(this,arguments)}).guid=a.guid||(a.guid=S.guid++)),e.each(function(){S.event.add(this,t,i,r,n)})}function Ae(e,i,o){o?(Y.set(e,i,!1),S.event.add(e,i,{namespace:!1,handler:function(e){var t,n,r=Y.get(this,i);if(1&e.isTrigger&&this[i]){if(r.length)(S.event.special[i]||{}).delegateType&&e.stopPropagation();else if(r=s.call(arguments),Y.set(this,i,r),t=o(this,i),this[i](),r!==(n=Y.get(this,i))||t?Y.set(this,i,!1):n={},r!==n)return e.stopImmediatePropagation(),e.preventDefault(),n.value}else r.length&&(Y.set(this,i,{value:S.event.trigger(S.extend(r[0],S.Event.prototype),r.slice(1),this)}),e.stopImmediatePropagation())}})):void 0===Y.get(e,i)&&S.event.add(e,i,Ce)}S.event={global:{},add:function(t,e,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,v=Y.get(t);if(V(t)){n.handler&&(n=(o=n).handler,i=o.selector),i&&S.find.matchesSelector(re,i),n.guid||(n.guid=S.guid++),(u=v.events)||(u=v.events=Object.create(null)),(a=v.handle)||(a=v.handle=function(e){return"undefined"!=typeof S&&S.event.triggered!==e.type?S.event.dispatch.apply(t,arguments):void 0}),l=(e=(e||"").match(P)||[""]).length;while(l--)d=g=(s=Te.exec(e[l])||[])[1],h=(s[2]||"").split(".").sort(),d&&(f=S.event.special[d]||{},d=(i?f.delegateType:f.bindType)||d,f=S.event.special[d]||{},c=S.extend({type:d,origType:g,data:r,handler:n,guid:n.guid,selector:i,needsContext:i&&S.expr.match.needsContext.test(i),namespace:h.join(".")},o),(p=u[d])||((p=u[d]=[]).delegateCount=0,f.setup&&!1!==f.setup.call(t,r,h,a)||t.addEventListener&&t.addEventListener(d,a)),f.add&&(f.add.call(t,c),c.handler.guid||(c.handler.guid=n.guid)),i?p.splice(p.delegateCount++,0,c):p.push(c),S.event.global[d]=!0)}},remove:function(e,t,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,v=Y.hasData(e)&&Y.get(e);if(v&&(u=v.events)){l=(t=(t||"").match(P)||[""]).length;while(l--)if(d=g=(s=Te.exec(t[l])||[])[1],h=(s[2]||"").split(".").sort(),d){f=S.event.special[d]||{},p=u[d=(r?f.delegateType:f.bindType)||d]||[],s=s[2]&&new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),a=o=p.length;while(o--)c=p[o],!i&&g!==c.origType||n&&n.guid!==c.guid||s&&!s.test(c.namespace)||r&&r!==c.selector&&("**"!==r||!c.selector)||(p.splice(o,1),c.selector&&p.delegateCount--,f.remove&&f.remove.call(e,c));a&&!p.length&&(f.teardown&&!1!==f.teardown.call(e,h,v.handle)||S.removeEvent(e,d,v.handle),delete u[d])}else for(d in u)S.event.remove(e,d+t[l],n,r,!0);S.isEmptyObject(u)&&Y.remove(e,"handle events")}},dispatch:function(e){var t,n,r,i,o,a,s=new Array(arguments.length),u=S.event.fix(e),l=(Y.get(this,"events")||Object.create(null))[u.type]||[],c=S.event.special[u.type]||{};for(s[0]=u,t=1;t<arguments.length;t++)s[t]=arguments[t];if(u.delegateTarget=this,!c.preDispatch||!1!==c.preDispatch.call(this,u)){a=S.event.handlers.call(this,u,l),t=0;while((i=a[t++])&&!u.isPropagationStopped()){u.currentTarget=i.elem,n=0;while((o=i.handlers[n++])&&!u.isImmediatePropagationStopped())u.rnamespace&&!1!==o.namespace&&!u.rnamespace.test(o.namespace)||(u.handleObj=o,u.data=o.data,void 0!==(r=((S.event.special[o.origType]||{}).handle||o.handler).apply(i.elem,s))&&!1===(u.result=r)&&(u.preventDefault(),u.stopPropagation()))}return c.postDispatch&&c.postDispatch.call(this,u),u.result}},handlers:function(e,t){var n,r,i,o,a,s=[],u=t.delegateCount,l=e.target;if(u&&l.nodeType&&!("click"===e.type&&1<=e.button))for(;l!==this;l=l.parentNode||this)if(1===l.nodeType&&("click"!==e.type||!0!==l.disabled)){for(o=[],a={},n=0;n<u;n++)void 0===a[i=(r=t[n]).selector+" "]&&(a[i]=r.needsContext?-1<S(i,this).index(l):S.find(i,this,null,[l]).length),a[i]&&o.push(r);o.length&&s.push({elem:l,handlers:o})}return l=this,u<t.length&&s.push({elem:l,handlers:t.slice(u)}),s},addProp:function(t,e){Object.defineProperty(S.Event.prototype,t,{enumerable:!0,configurable:!0,get:m(e)?function(){if(this.originalEvent)return e(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[t]},set:function(e){Object.defineProperty(this,t,{enumerable:!0,configurable:!0,writable:!0,value:e})}})},fix:function(e){return e[S.expando]?e:new S.Event(e)},special:{load:{noBubble:!0},click:{setup:function(e){var t=this||e;return pe.test(t.type)&&t.click&&A(t,"input")&&Ae(t,"click",Ce),!1},trigger:function(e){var t=this||e;return pe.test(t.type)&&t.click&&A(t,"input")&&Ae(t,"click"),!0},_default:function(e){var t=e.target;return pe.test(t.type)&&t.click&&A(t,"input")&&Y.get(t,"click")||A(t,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}}},S.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n)},S.Event=function(e,t){if(!(this instanceof S.Event))return new S.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&!1===e.returnValue?Ce:Ee,this.target=e.target&&3===e.target.nodeType?e.target.parentNode:e.target,this.currentTarget=e.currentTarget,this.relatedTarget=e.relatedTarget):this.type=e,t&&S.extend(this,t),this.timeStamp=e&&e.timeStamp||Date.now(),this[S.expando]=!0},S.Event.prototype={constructor:S.Event,isDefaultPrevented:Ee,isPropagationStopped:Ee,isImmediatePropagationStopped:Ee,isSimulated:!1,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=Ce,e&&!this.isSimulated&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=Ce,e&&!this.isSimulated&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=Ce,e&&!this.isSimulated&&e.stopImmediatePropagation(),this.stopPropagation()}},S.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,"char":!0,code:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:function(e){var t=e.button;return null==e.which&&be.test(e.type)?null!=e.charCode?e.charCode:e.keyCode:!e.which&&void 0!==t&&we.test(e.type)?1&t?1:2&t?3:4&t?2:0:e.which}},S.event.addProp),S.each({focus:"focusin",blur:"focusout"},function(e,t){S.event.special[e]={setup:function(){return Ae(this,e,Se),!1},trigger:function(){return Ae(this,e),!0},delegateType:t}}),S.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,i){S.event.special[e]={delegateType:i,bindType:i,handle:function(e){var t,n=e.relatedTarget,r=e.handleObj;return n&&(n===this||S.contains(this,n))||(e.type=r.origType,t=r.handler.apply(this,arguments),e.type=i),t}}}),S.fn.extend({on:function(e,t,n,r){return ke(this,e,t,n,r)},one:function(e,t,n,r){return ke(this,e,t,n,r,1)},off:function(e,t,n){var r,i;if(e&&e.preventDefault&&e.handleObj)return r=e.handleObj,S(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this;if("object"==typeof e){for(i in e)this.off(i,t,e[i]);return this}return!1!==t&&"function"!=typeof t||(n=t,t=void 0),!1===n&&(n=Ee),this.each(function(){S.event.remove(this,e,n,t)})}});var Ne=/<script|<style|<link/i,De=/checked\s*(?:[^=]|=\s*.checked.)/i,je=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function qe(e,t){return A(e,"table")&&A(11!==t.nodeType?t:t.firstChild,"tr")&&S(e).children("tbody")[0]||e}function Le(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function He(e){return"true/"===(e.type||"").slice(0,5)?e.type=e.type.slice(5):e.removeAttribute("type"),e}function Oe(e,t){var n,r,i,o,a,s;if(1===t.nodeType){if(Y.hasData(e)&&(s=Y.get(e).events))for(i in Y.remove(t,"handle events"),s)for(n=0,r=s[i].length;n<r;n++)S.event.add(t,i,s[i][n]);Q.hasData(e)&&(o=Q.access(e),a=S.extend({},o),Q.set(t,a))}}function Pe(n,r,i,o){r=g(r);var e,t,a,s,u,l,c=0,f=n.length,p=f-1,d=r[0],h=m(d);if(h||1<f&&"string"==typeof d&&!y.checkClone&&De.test(d))return n.each(function(e){var t=n.eq(e);h&&(r[0]=d.call(this,e,t.html())),Pe(t,r,i,o)});if(f&&(t=(e=xe(r,n[0].ownerDocument,!1,n,o)).firstChild,1===e.childNodes.length&&(e=t),t||o)){for(s=(a=S.map(ve(e,"script"),Le)).length;c<f;c++)u=e,c!==p&&(u=S.clone(u,!0,!0),s&&S.merge(a,ve(u,"script"))),i.call(n[c],u,c);if(s)for(l=a[a.length-1].ownerDocument,S.map(a,He),c=0;c<s;c++)u=a[c],he.test(u.type||"")&&!Y.access(u,"globalEval")&&S.contains(l,u)&&(u.src&&"module"!==(u.type||"").toLowerCase()?S._evalUrl&&!u.noModule&&S._evalUrl(u.src,{nonce:u.nonce||u.getAttribute("nonce")},l):b(u.textContent.replace(je,""),u,l))}return n}function Re(e,t,n){for(var r,i=t?S.filter(t,e):e,o=0;null!=(r=i[o]);o++)n||1!==r.nodeType||S.cleanData(ve(r)),r.parentNode&&(n&&ie(r)&&ye(ve(r,"script")),r.parentNode.removeChild(r));return e}S.extend({htmlPrefilter:function(e){return e},clone:function(e,t,n){var r,i,o,a,s,u,l,c=e.cloneNode(!0),f=ie(e);if(!(y.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||S.isXMLDoc(e)))for(a=ve(c),r=0,i=(o=ve(e)).length;r<i;r++)s=o[r],u=a[r],void 0,"input"===(l=u.nodeName.toLowerCase())&&pe.test(s.type)?u.checked=s.checked:"input"!==l&&"textarea"!==l||(u.defaultValue=s.defaultValue);if(t)if(n)for(o=o||ve(e),a=a||ve(c),r=0,i=o.length;r<i;r++)Oe(o[r],a[r]);else Oe(e,c);return 0<(a=ve(c,"script")).length&&ye(a,!f&&ve(e,"script")),c},cleanData:function(e){for(var t,n,r,i=S.event.special,o=0;void 0!==(n=e[o]);o++)if(V(n)){if(t=n[Y.expando]){if(t.events)for(r in t.events)i[r]?S.event.remove(n,r):S.removeEvent(n,r,t.handle);n[Y.expando]=void 0}n[Q.expando]&&(n[Q.expando]=void 0)}}}),S.fn.extend({detach:function(e){return Re(this,e,!0)},remove:function(e){return Re(this,e)},text:function(e){return $(this,function(e){return void 0===e?S.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=e)})},null,e,arguments.length)},append:function(){return Pe(this,arguments,function(e){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||qe(this,e).appendChild(e)})},prepend:function(){return Pe(this,arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=qe(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return Pe(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return Pe(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(S.cleanData(ve(e,!1)),e.textContent="");return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map(function(){return S.clone(this,e,t)})},html:function(e){return $(this,function(e){var t=this[0]||{},n=0,r=this.length;if(void 0===e&&1===t.nodeType)return t.innerHTML;if("string"==typeof e&&!Ne.test(e)&&!ge[(de.exec(e)||["",""])[1].toLowerCase()]){e=S.htmlPrefilter(e);try{for(;n<r;n++)1===(t=this[n]||{}).nodeType&&(S.cleanData(ve(t,!1)),t.innerHTML=e);t=0}catch(e){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var n=[];return Pe(this,arguments,function(e){var t=this.parentNode;S.inArray(this,n)<0&&(S.cleanData(ve(this)),t&&t.replaceChild(e,this))},n)}}),S.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,a){S.fn[e]=function(e){for(var t,n=[],r=S(e),i=r.length-1,o=0;o<=i;o++)t=o===i?this:this.clone(!0),S(r[o])[a](t),u.apply(n,t.get());return this.pushStack(n)}});var Me=new RegExp("^("+ee+")(?!px)[a-z%]+$","i"),Ie=function(e){var t=e.ownerDocument.defaultView;return t&&t.opener||(t=C),t.getComputedStyle(e)},We=function(e,t,n){var r,i,o={};for(i in t)o[i]=e.style[i],e.style[i]=t[i];for(i in r=n.call(e),t)e.style[i]=o[i];return r},Fe=new RegExp(ne.join("|"),"i");function Be(e,t,n){var r,i,o,a,s=e.style;return(n=n||Ie(e))&&(""!==(a=n.getPropertyValue(t)||n[t])||ie(e)||(a=S.style(e,t)),!y.pixelBoxStyles()&&Me.test(a)&&Fe.test(t)&&(r=s.width,i=s.minWidth,o=s.maxWidth,s.minWidth=s.maxWidth=s.width=a,a=n.width,s.width=r,s.minWidth=i,s.maxWidth=o)),void 0!==a?a+"":a}function $e(e,t){return{get:function(){if(!e())return(this.get=t).apply(this,arguments);delete this.get}}}!function(){function e(){if(l){u.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",l.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",re.appendChild(u).appendChild(l);var e=C.getComputedStyle(l);n="1%"!==e.top,s=12===t(e.marginLeft),l.style.right="60%",o=36===t(e.right),r=36===t(e.width),l.style.position="absolute",i=12===t(l.offsetWidth/3),re.removeChild(u),l=null}}function t(e){return Math.round(parseFloat(e))}var n,r,i,o,a,s,u=E.createElement("div"),l=E.createElement("div");l.style&&(l.style.backgroundClip="content-box",l.cloneNode(!0).style.backgroundClip="",y.clearCloneStyle="content-box"===l.style.backgroundClip,S.extend(y,{boxSizingReliable:function(){return e(),r},pixelBoxStyles:function(){return e(),o},pixelPosition:function(){return e(),n},reliableMarginLeft:function(){return e(),s},scrollboxSize:function(){return e(),i},reliableTrDimensions:function(){var e,t,n,r;return null==a&&(e=E.createElement("table"),t=E.createElement("tr"),n=E.createElement("div"),e.style.cssText="position:absolute;left:-11111px",t.style.height="1px",n.style.height="9px",re.appendChild(e).appendChild(t).appendChild(n),r=C.getComputedStyle(t),a=3<parseInt(r.height),re.removeChild(e)),a}}))}();var _e=["Webkit","Moz","ms"],ze=E.createElement("div").style,Ue={};function Xe(e){var t=S.cssProps[e]||Ue[e];return t||(e in ze?e:Ue[e]=function(e){var t=e[0].toUpperCase()+e.slice(1),n=_e.length;while(n--)if((e=_e[n]+t)in ze)return e}(e)||e)}var Ve=/^(none|table(?!-c[ea]).+)/,Ge=/^--/,Ye={position:"absolute",visibility:"hidden",display:"block"},Qe={letterSpacing:"0",fontWeight:"400"};function Je(e,t,n){var r=te.exec(t);return r?Math.max(0,r[2]-(n||0))+(r[3]||"px"):t}function Ke(e,t,n,r,i,o){var a="width"===t?1:0,s=0,u=0;if(n===(r?"border":"content"))return 0;for(;a<4;a+=2)"margin"===n&&(u+=S.css(e,n+ne[a],!0,i)),r?("content"===n&&(u-=S.css(e,"padding"+ne[a],!0,i)),"margin"!==n&&(u-=S.css(e,"border"+ne[a]+"Width",!0,i))):(u+=S.css(e,"padding"+ne[a],!0,i),"padding"!==n?u+=S.css(e,"border"+ne[a]+"Width",!0,i):s+=S.css(e,"border"+ne[a]+"Width",!0,i));return!r&&0<=o&&(u+=Math.max(0,Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-o-u-s-.5))||0),u}function Ze(e,t,n){var r=Ie(e),i=(!y.boxSizingReliable()||n)&&"border-box"===S.css(e,"boxSizing",!1,r),o=i,a=Be(e,t,r),s="offset"+t[0].toUpperCase()+t.slice(1);if(Me.test(a)){if(!n)return a;a="auto"}return(!y.boxSizingReliable()&&i||!y.reliableTrDimensions()&&A(e,"tr")||"auto"===a||!parseFloat(a)&&"inline"===S.css(e,"display",!1,r))&&e.getClientRects().length&&(i="border-box"===S.css(e,"boxSizing",!1,r),(o=s in e)&&(a=e[s])),(a=parseFloat(a)||0)+Ke(e,t,n||(i?"border":"content"),o,r,a)+"px"}function et(e,t,n,r,i){return new et.prototype.init(e,t,n,r,i)}S.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=Be(e,"opacity");return""===n?"1":n}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{},style:function(e,t,n,r){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var i,o,a,s=X(t),u=Ge.test(t),l=e.style;if(u||(t=Xe(s)),a=S.cssHooks[t]||S.cssHooks[s],void 0===n)return a&&"get"in a&&void 0!==(i=a.get(e,!1,r))?i:l[t];"string"===(o=typeof n)&&(i=te.exec(n))&&i[1]&&(n=se(e,t,i),o="number"),null!=n&&n==n&&("number"!==o||u||(n+=i&&i[3]||(S.cssNumber[s]?"":"px")),y.clearCloneStyle||""!==n||0!==t.indexOf("background")||(l[t]="inherit"),a&&"set"in a&&void 0===(n=a.set(e,n,r))||(u?l.setProperty(t,n):l[t]=n))}},css:function(e,t,n,r){var i,o,a,s=X(t);return Ge.test(t)||(t=Xe(s)),(a=S.cssHooks[t]||S.cssHooks[s])&&"get"in a&&(i=a.get(e,!0,n)),void 0===i&&(i=Be(e,t,r)),"normal"===i&&t in Qe&&(i=Qe[t]),""===n||n?(o=parseFloat(i),!0===n||isFinite(o)?o||0:i):i}}),S.each(["height","width"],function(e,u){S.cssHooks[u]={get:function(e,t,n){if(t)return!Ve.test(S.css(e,"display"))||e.getClientRects().length&&e.getBoundingClientRect().width?Ze(e,u,n):We(e,Ye,function(){return Ze(e,u,n)})},set:function(e,t,n){var r,i=Ie(e),o=!y.scrollboxSize()&&"absolute"===i.position,a=(o||n)&&"border-box"===S.css(e,"boxSizing",!1,i),s=n?Ke(e,u,n,a,i):0;return a&&o&&(s-=Math.ceil(e["offset"+u[0].toUpperCase()+u.slice(1)]-parseFloat(i[u])-Ke(e,u,"border",!1,i)-.5)),s&&(r=te.exec(t))&&"px"!==(r[3]||"px")&&(e.style[u]=t,t=S.css(e,u)),Je(0,t,s)}}}),S.cssHooks.marginLeft=$e(y.reliableMarginLeft,function(e,t){if(t)return(parseFloat(Be(e,"marginLeft"))||e.getBoundingClientRect().left-We(e,{marginLeft:0},function(){return e.getBoundingClientRect().left}))+"px"}),S.each({margin:"",padding:"",border:"Width"},function(i,o){S.cssHooks[i+o]={expand:function(e){for(var t=0,n={},r="string"==typeof e?e.split(" "):[e];t<4;t++)n[i+ne[t]+o]=r[t]||r[t-2]||r[0];return n}},"margin"!==i&&(S.cssHooks[i+o].set=Je)}),S.fn.extend({css:function(e,t){return $(this,function(e,t,n){var r,i,o={},a=0;if(Array.isArray(t)){for(r=Ie(e),i=t.length;a<i;a++)o[t[a]]=S.css(e,t[a],!1,r);return o}return void 0!==n?S.style(e,t,n):S.css(e,t)},e,t,1<arguments.length)}}),((S.Tween=et).prototype={constructor:et,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||S.easing._default,this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(S.cssNumber[n]?"":"px")},cur:function(){var e=et.propHooks[this.prop];return e&&e.get?e.get(this):et.propHooks._default.get(this)},run:function(e){var t,n=et.propHooks[this.prop];return this.options.duration?this.pos=t=S.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):et.propHooks._default.set(this),this}}).init.prototype=et.prototype,(et.propHooks={_default:{get:function(e){var t;return 1!==e.elem.nodeType||null!=e.elem[e.prop]&&null==e.elem.style[e.prop]?e.elem[e.prop]:(t=S.css(e.elem,e.prop,""))&&"auto"!==t?t:0},set:function(e){S.fx.step[e.prop]?S.fx.step[e.prop](e):1!==e.elem.nodeType||!S.cssHooks[e.prop]&&null==e.elem.style[Xe(e.prop)]?e.elem[e.prop]=e.now:S.style(e.elem,e.prop,e.now+e.unit)}}}).scrollTop=et.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},S.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},_default:"swing"},S.fx=et.prototype.init,S.fx.step={};var tt,nt,rt,it,ot=/^(?:toggle|show|hide)$/,at=/queueHooks$/;function st(){nt&&(!1===E.hidden&&C.requestAnimationFrame?C.requestAnimationFrame(st):C.setTimeout(st,S.fx.interval),S.fx.tick())}function ut(){return C.setTimeout(function(){tt=void 0}),tt=Date.now()}function lt(e,t){var n,r=0,i={height:e};for(t=t?1:0;r<4;r+=2-t)i["margin"+(n=ne[r])]=i["padding"+n]=e;return t&&(i.opacity=i.width=e),i}function ct(e,t,n){for(var r,i=(ft.tweeners[t]||[]).concat(ft.tweeners["*"]),o=0,a=i.length;o<a;o++)if(r=i[o].call(n,t,e))return r}function ft(o,e,t){var n,a,r=0,i=ft.prefilters.length,s=S.Deferred().always(function(){delete u.elem}),u=function(){if(a)return!1;for(var e=tt||ut(),t=Math.max(0,l.startTime+l.duration-e),n=1-(t/l.duration||0),r=0,i=l.tweens.length;r<i;r++)l.tweens[r].run(n);return s.notifyWith(o,[l,n,t]),n<1&&i?t:(i||s.notifyWith(o,[l,1,0]),s.resolveWith(o,[l]),!1)},l=s.promise({elem:o,props:S.extend({},e),opts:S.extend(!0,{specialEasing:{},easing:S.easing._default},t),originalProperties:e,originalOptions:t,startTime:tt||ut(),duration:t.duration,tweens:[],createTween:function(e,t){var n=S.Tween(o,l.opts,e,t,l.opts.specialEasing[e]||l.opts.easing);return l.tweens.push(n),n},stop:function(e){var t=0,n=e?l.tweens.length:0;if(a)return this;for(a=!0;t<n;t++)l.tweens[t].run(1);return e?(s.notifyWith(o,[l,1,0]),s.resolveWith(o,[l,e])):s.rejectWith(o,[l,e]),this}}),c=l.props;for(!function(e,t){var n,r,i,o,a;for(n in e)if(i=t[r=X(n)],o=e[n],Array.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),(a=S.cssHooks[r])&&"expand"in a)for(n in o=a.expand(o),delete e[r],o)n in e||(e[n]=o[n],t[n]=i);else t[r]=i}(c,l.opts.specialEasing);r<i;r++)if(n=ft.prefilters[r].call(l,o,c,l.opts))return m(n.stop)&&(S._queueHooks(l.elem,l.opts.queue).stop=n.stop.bind(n)),n;return S.map(c,ct,l),m(l.opts.start)&&l.opts.start.call(o,l),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always),S.fx.timer(S.extend(u,{elem:o,anim:l,queue:l.opts.queue})),l}S.Animation=S.extend(ft,{tweeners:{"*":[function(e,t){var n=this.createTween(e,t);return se(n.elem,e,te.exec(t),n),n}]},tweener:function(e,t){m(e)?(t=e,e=["*"]):e=e.match(P);for(var n,r=0,i=e.length;r<i;r++)n=e[r],ft.tweeners[n]=ft.tweeners[n]||[],ft.tweeners[n].unshift(t)},prefilters:[function(e,t,n){var r,i,o,a,s,u,l,c,f="width"in t||"height"in t,p=this,d={},h=e.style,g=e.nodeType&&ae(e),v=Y.get(e,"fxshow");for(r in n.queue||(null==(a=S._queueHooks(e,"fx")).unqueued&&(a.unqueued=0,s=a.empty.fire,a.empty.fire=function(){a.unqueued||s()}),a.unqueued++,p.always(function(){p.always(function(){a.unqueued--,S.queue(e,"fx").length||a.empty.fire()})})),t)if(i=t[r],ot.test(i)){if(delete t[r],o=o||"toggle"===i,i===(g?"hide":"show")){if("show"!==i||!v||void 0===v[r])continue;g=!0}d[r]=v&&v[r]||S.style(e,r)}if((u=!S.isEmptyObject(t))||!S.isEmptyObject(d))for(r in f&&1===e.nodeType&&(n.overflow=[h.overflow,h.overflowX,h.overflowY],null==(l=v&&v.display)&&(l=Y.get(e,"display")),"none"===(c=S.css(e,"display"))&&(l?c=l:(le([e],!0),l=e.style.display||l,c=S.css(e,"display"),le([e]))),("inline"===c||"inline-block"===c&&null!=l)&&"none"===S.css(e,"float")&&(u||(p.done(function(){h.display=l}),null==l&&(c=h.display,l="none"===c?"":c)),h.display="inline-block")),n.overflow&&(h.overflow="hidden",p.always(function(){h.overflow=n.overflow[0],h.overflowX=n.overflow[1],h.overflowY=n.overflow[2]})),u=!1,d)u||(v?"hidden"in v&&(g=v.hidden):v=Y.access(e,"fxshow",{display:l}),o&&(v.hidden=!g),g&&le([e],!0),p.done(function(){for(r in g||le([e]),Y.remove(e,"fxshow"),d)S.style(e,r,d[r])})),u=ct(g?v[r]:0,r,p),r in v||(v[r]=u.start,g&&(u.end=u.start,u.start=0))}],prefilter:function(e,t){t?ft.prefilters.unshift(e):ft.prefilters.push(e)}}),S.speed=function(e,t,n){var r=e&&"object"==typeof e?S.extend({},e):{complete:n||!n&&t||m(e)&&e,duration:e,easing:n&&t||t&&!m(t)&&t};return S.fx.off?r.duration=0:"number"!=typeof r.duration&&(r.duration in S.fx.speeds?r.duration=S.fx.speeds[r.duration]:r.duration=S.fx.speeds._default),null!=r.queue&&!0!==r.queue||(r.queue="fx"),r.old=r.complete,r.complete=function(){m(r.old)&&r.old.call(this),r.queue&&S.dequeue(this,r.queue)},r},S.fn.extend({fadeTo:function(e,t,n,r){return this.filter(ae).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(t,e,n,r){var i=S.isEmptyObject(t),o=S.speed(e,n,r),a=function(){var e=ft(this,S.extend({},t),o);(i||Y.get(this,"finish"))&&e.stop(!0)};return a.finish=a,i||!1===o.queue?this.each(a):this.queue(o.queue,a)},stop:function(i,e,o){var a=function(e){var t=e.stop;delete e.stop,t(o)};return"string"!=typeof i&&(o=e,e=i,i=void 0),e&&this.queue(i||"fx",[]),this.each(function(){var e=!0,t=null!=i&&i+"queueHooks",n=S.timers,r=Y.get(this);if(t)r[t]&&r[t].stop&&a(r[t]);else for(t in r)r[t]&&r[t].stop&&at.test(t)&&a(r[t]);for(t=n.length;t--;)n[t].elem!==this||null!=i&&n[t].queue!==i||(n[t].anim.stop(o),e=!1,n.splice(t,1));!e&&o||S.dequeue(this,i)})},finish:function(a){return!1!==a&&(a=a||"fx"),this.each(function(){var e,t=Y.get(this),n=t[a+"queue"],r=t[a+"queueHooks"],i=S.timers,o=n?n.length:0;for(t.finish=!0,S.queue(this,a,[]),r&&r.stop&&r.stop.call(this,!0),e=i.length;e--;)i[e].elem===this&&i[e].queue===a&&(i[e].anim.stop(!0),i.splice(e,1));for(e=0;e<o;e++)n[e]&&n[e].finish&&n[e].finish.call(this);delete t.finish})}}),S.each(["toggle","show","hide"],function(e,r){var i=S.fn[r];S.fn[r]=function(e,t,n){return null==e||"boolean"==typeof e?i.apply(this,arguments):this.animate(lt(r,!0),e,t,n)}}),S.each({slideDown:lt("show"),slideUp:lt("hide"),slideToggle:lt("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,r){S.fn[e]=function(e,t,n){return this.animate(r,e,t,n)}}),S.timers=[],S.fx.tick=function(){var e,t=0,n=S.timers;for(tt=Date.now();t<n.length;t++)(e=n[t])()||n[t]!==e||n.splice(t--,1);n.length||S.fx.stop(),tt=void 0},S.fx.timer=function(e){S.timers.push(e),S.fx.start()},S.fx.interval=13,S.fx.start=function(){nt||(nt=!0,st())},S.fx.stop=function(){nt=null},S.fx.speeds={slow:600,fast:200,_default:400},S.fn.delay=function(r,e){return r=S.fx&&S.fx.speeds[r]||r,e=e||"fx",this.queue(e,function(e,t){var n=C.setTimeout(e,r);t.stop=function(){C.clearTimeout(n)}})},rt=E.createElement("input"),it=E.createElement("select").appendChild(E.createElement("option")),rt.type="checkbox",y.checkOn=""!==rt.value,y.optSelected=it.selected,(rt=E.createElement("input")).value="t",rt.type="radio",y.radioValue="t"===rt.value;var pt,dt=S.expr.attrHandle;S.fn.extend({attr:function(e,t){return $(this,S.attr,e,t,1<arguments.length)},removeAttr:function(e){return this.each(function(){S.removeAttr(this,e)})}}),S.extend({attr:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return"undefined"==typeof e.getAttribute?S.prop(e,t,n):(1===o&&S.isXMLDoc(e)||(i=S.attrHooks[t.toLowerCase()]||(S.expr.match.bool.test(t)?pt:void 0)),void 0!==n?null===n?void S.removeAttr(e,t):i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:(e.setAttribute(t,n+""),n):i&&"get"in i&&null!==(r=i.get(e,t))?r:null==(r=S.find.attr(e,t))?void 0:r)},attrHooks:{type:{set:function(e,t){if(!y.radioValue&&"radio"===t&&A(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},removeAttr:function(e,t){var n,r=0,i=t&&t.match(P);if(i&&1===e.nodeType)while(n=i[r++])e.removeAttribute(n)}}),pt={set:function(e,t,n){return!1===t?S.removeAttr(e,n):e.setAttribute(n,n),n}},S.each(S.expr.match.bool.source.match(/\w+/g),function(e,t){var a=dt[t]||S.find.attr;dt[t]=function(e,t,n){var r,i,o=t.toLowerCase();return n||(i=dt[o],dt[o]=r,r=null!=a(e,t,n)?o:null,dt[o]=i),r}});var ht=/^(?:input|select|textarea|button)$/i,gt=/^(?:a|area)$/i;function vt(e){return(e.match(P)||[]).join(" ")}function yt(e){return e.getAttribute&&e.getAttribute("class")||""}function mt(e){return Array.isArray(e)?e:"string"==typeof e&&e.match(P)||[]}S.fn.extend({prop:function(e,t){return $(this,S.prop,e,t,1<arguments.length)},removeProp:function(e){return this.each(function(){delete this[S.propFix[e]||e]})}}),S.extend({prop:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return 1===o&&S.isXMLDoc(e)||(t=S.propFix[t]||t,i=S.propHooks[t]),void 0!==n?i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:e[t]=n:i&&"get"in i&&null!==(r=i.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){var t=S.find.attr(e,"tabindex");return t?parseInt(t,10):ht.test(e.nodeName)||gt.test(e.nodeName)&&e.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),y.optSelected||(S.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null},set:function(e){var t=e.parentNode;t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex)}}),S.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){S.propFix[this.toLowerCase()]=this}),S.fn.extend({addClass:function(t){var e,n,r,i,o,a,s,u=0;if(m(t))return this.each(function(e){S(this).addClass(t.call(this,e,yt(this)))});if((e=mt(t)).length)while(n=this[u++])if(i=yt(n),r=1===n.nodeType&&" "+vt(i)+" "){a=0;while(o=e[a++])r.indexOf(" "+o+" ")<0&&(r+=o+" ");i!==(s=vt(r))&&n.setAttribute("class",s)}return this},removeClass:function(t){var e,n,r,i,o,a,s,u=0;if(m(t))return this.each(function(e){S(this).removeClass(t.call(this,e,yt(this)))});if(!arguments.length)return this.attr("class","");if((e=mt(t)).length)while(n=this[u++])if(i=yt(n),r=1===n.nodeType&&" "+vt(i)+" "){a=0;while(o=e[a++])while(-1<r.indexOf(" "+o+" "))r=r.replace(" "+o+" "," ");i!==(s=vt(r))&&n.setAttribute("class",s)}return this},toggleClass:function(i,t){var o=typeof i,a="string"===o||Array.isArray(i);return"boolean"==typeof t&&a?t?this.addClass(i):this.removeClass(i):m(i)?this.each(function(e){S(this).toggleClass(i.call(this,e,yt(this),t),t)}):this.each(function(){var e,t,n,r;if(a){t=0,n=S(this),r=mt(i);while(e=r[t++])n.hasClass(e)?n.removeClass(e):n.addClass(e)}else void 0!==i&&"boolean"!==o||((e=yt(this))&&Y.set(this,"__className__",e),this.setAttribute&&this.setAttribute("class",e||!1===i?"":Y.get(this,"__className__")||""))})},hasClass:function(e){var t,n,r=0;t=" "+e+" ";while(n=this[r++])if(1===n.nodeType&&-1<(" "+vt(yt(n))+" ").indexOf(t))return!0;return!1}});var xt=/\r/g;S.fn.extend({val:function(n){var r,e,i,t=this[0];return arguments.length?(i=m(n),this.each(function(e){var t;1===this.nodeType&&(null==(t=i?n.call(this,e,S(this).val()):n)?t="":"number"==typeof t?t+="":Array.isArray(t)&&(t=S.map(t,function(e){return null==e?"":e+""})),(r=S.valHooks[this.type]||S.valHooks[this.nodeName.toLowerCase()])&&"set"in r&&void 0!==r.set(this,t,"value")||(this.value=t))})):t?(r=S.valHooks[t.type]||S.valHooks[t.nodeName.toLowerCase()])&&"get"in r&&void 0!==(e=r.get(t,"value"))?e:"string"==typeof(e=t.value)?e.replace(xt,""):null==e?"":e:void 0}}),S.extend({valHooks:{option:{get:function(e){var t=S.find.attr(e,"value");return null!=t?t:vt(S.text(e))}},select:{get:function(e){var t,n,r,i=e.options,o=e.selectedIndex,a="select-one"===e.type,s=a?null:[],u=a?o+1:i.length;for(r=o<0?u:a?o:0;r<u;r++)if(((n=i[r]).selected||r===o)&&!n.disabled&&(!n.parentNode.disabled||!A(n.parentNode,"optgroup"))){if(t=S(n).val(),a)return t;s.push(t)}return s},set:function(e,t){var n,r,i=e.options,o=S.makeArray(t),a=i.length;while(a--)((r=i[a]).selected=-1<S.inArray(S.valHooks.option.get(r),o))&&(n=!0);return n||(e.selectedIndex=-1),o}}}}),S.each(["radio","checkbox"],function(){S.valHooks[this]={set:function(e,t){if(Array.isArray(t))return e.checked=-1<S.inArray(S(e).val(),t)}},y.checkOn||(S.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})}),y.focusin="onfocusin"in C;var bt=/^(?:focusinfocus|focusoutblur)$/,wt=function(e){e.stopPropagation()};S.extend(S.event,{trigger:function(e,t,n,r){var i,o,a,s,u,l,c,f,p=[n||E],d=v.call(e,"type")?e.type:e,h=v.call(e,"namespace")?e.namespace.split("."):[];if(o=f=a=n=n||E,3!==n.nodeType&&8!==n.nodeType&&!bt.test(d+S.event.triggered)&&(-1<d.indexOf(".")&&(d=(h=d.split(".")).shift(),h.sort()),u=d.indexOf(":")<0&&"on"+d,(e=e[S.expando]?e:new S.Event(d,"object"==typeof e&&e)).isTrigger=r?2:3,e.namespace=h.join("."),e.rnamespace=e.namespace?new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,e.result=void 0,e.target||(e.target=n),t=null==t?[e]:S.makeArray(t,[e]),c=S.event.special[d]||{},r||!c.trigger||!1!==c.trigger.apply(n,t))){if(!r&&!c.noBubble&&!x(n)){for(s=c.delegateType||d,bt.test(s+d)||(o=o.parentNode);o;o=o.parentNode)p.push(o),a=o;a===(n.ownerDocument||E)&&p.push(a.defaultView||a.parentWindow||C)}i=0;while((o=p[i++])&&!e.isPropagationStopped())f=o,e.type=1<i?s:c.bindType||d,(l=(Y.get(o,"events")||Object.create(null))[e.type]&&Y.get(o,"handle"))&&l.apply(o,t),(l=u&&o[u])&&l.apply&&V(o)&&(e.result=l.apply(o,t),!1===e.result&&e.preventDefault());return e.type=d,r||e.isDefaultPrevented()||c._default&&!1!==c._default.apply(p.pop(),t)||!V(n)||u&&m(n[d])&&!x(n)&&((a=n[u])&&(n[u]=null),S.event.triggered=d,e.isPropagationStopped()&&f.addEventListener(d,wt),n[d](),e.isPropagationStopped()&&f.removeEventListener(d,wt),S.event.triggered=void 0,a&&(n[u]=a)),e.result}},simulate:function(e,t,n){var r=S.extend(new S.Event,n,{type:e,isSimulated:!0});S.event.trigger(r,null,t)}}),S.fn.extend({trigger:function(e,t){return this.each(function(){S.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];if(n)return S.event.trigger(e,t,n,!0)}}),y.focusin||S.each({focus:"focusin",blur:"focusout"},function(n,r){var i=function(e){S.event.simulate(r,e.target,S.event.fix(e))};S.event.special[r]={setup:function(){var e=this.ownerDocument||this.document||this,t=Y.access(e,r);t||e.addEventListener(n,i,!0),Y.access(e,r,(t||0)+1)},teardown:function(){var e=this.ownerDocument||this.document||this,t=Y.access(e,r)-1;t?Y.access(e,r,t):(e.removeEventListener(n,i,!0),Y.remove(e,r))}}});var Tt=C.location,Ct={guid:Date.now()},Et=/\?/;S.parseXML=function(e){var t;if(!e||"string"!=typeof e)return null;try{t=(new C.DOMParser).parseFromString(e,"text/xml")}catch(e){t=void 0}return t&&!t.getElementsByTagName("parsererror").length||S.error("Invalid XML: "+e),t};var St=/\[\]$/,kt=/\r?\n/g,At=/^(?:submit|button|image|reset|file)$/i,Nt=/^(?:input|select|textarea|keygen)/i;function Dt(n,e,r,i){var t;if(Array.isArray(e))S.each(e,function(e,t){r||St.test(n)?i(n,t):Dt(n+"["+("object"==typeof t&&null!=t?e:"")+"]",t,r,i)});else if(r||"object"!==w(e))i(n,e);else for(t in e)Dt(n+"["+t+"]",e[t],r,i)}S.param=function(e,t){var n,r=[],i=function(e,t){var n=m(t)?t():t;r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(null==n?"":n)};if(null==e)return"";if(Array.isArray(e)||e.jquery&&!S.isPlainObject(e))S.each(e,function(){i(this.name,this.value)});else for(n in e)Dt(n,e[n],t,i);return r.join("&")},S.fn.extend({serialize:function(){return S.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=S.prop(this,"elements");return e?S.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!S(this).is(":disabled")&&Nt.test(this.nodeName)&&!At.test(e)&&(this.checked||!pe.test(e))}).map(function(e,t){var n=S(this).val();return null==n?null:Array.isArray(n)?S.map(n,function(e){return{name:t.name,value:e.replace(kt,"\r\n")}}):{name:t.name,value:n.replace(kt,"\r\n")}}).get()}});var jt=/%20/g,qt=/#.*$/,Lt=/([?&])_=[^&]*/,Ht=/^(.*?):[ \t]*([^\r\n]*)$/gm,Ot=/^(?:GET|HEAD)$/,Pt=/^\/\//,Rt={},Mt={},It="*/".concat("*"),Wt=E.createElement("a");function Ft(o){return function(e,t){"string"!=typeof e&&(t=e,e="*");var n,r=0,i=e.toLowerCase().match(P)||[];if(m(t))while(n=i[r++])"+"===n[0]?(n=n.slice(1)||"*",(o[n]=o[n]||[]).unshift(t)):(o[n]=o[n]||[]).push(t)}}function Bt(t,i,o,a){var s={},u=t===Mt;function l(e){var r;return s[e]=!0,S.each(t[e]||[],function(e,t){var n=t(i,o,a);return"string"!=typeof n||u||s[n]?u?!(r=n):void 0:(i.dataTypes.unshift(n),l(n),!1)}),r}return l(i.dataTypes[0])||!s["*"]&&l("*")}function $t(e,t){var n,r,i=S.ajaxSettings.flatOptions||{};for(n in t)void 0!==t[n]&&((i[n]?e:r||(r={}))[n]=t[n]);return r&&S.extend(!0,e,r),e}Wt.href=Tt.href,S.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Tt.href,type:"GET",isLocal:/^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Tt.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":It,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":S.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?$t($t(e,S.ajaxSettings),t):$t(S.ajaxSettings,e)},ajaxPrefilter:Ft(Rt),ajaxTransport:Ft(Mt),ajax:function(e,t){"object"==typeof e&&(t=e,e=void 0),t=t||{};var c,f,p,n,d,r,h,g,i,o,v=S.ajaxSetup({},t),y=v.context||v,m=v.context&&(y.nodeType||y.jquery)?S(y):S.event,x=S.Deferred(),b=S.Callbacks("once memory"),w=v.statusCode||{},a={},s={},u="canceled",T={readyState:0,getResponseHeader:function(e){var t;if(h){if(!n){n={};while(t=Ht.exec(p))n[t[1].toLowerCase()+" "]=(n[t[1].toLowerCase()+" "]||[]).concat(t[2])}t=n[e.toLowerCase()+" "]}return null==t?null:t.join(", ")},getAllResponseHeaders:function(){return h?p:null},setRequestHeader:function(e,t){return null==h&&(e=s[e.toLowerCase()]=s[e.toLowerCase()]||e,a[e]=t),this},overrideMimeType:function(e){return null==h&&(v.mimeType=e),this},statusCode:function(e){var t;if(e)if(h)T.always(e[T.status]);else for(t in e)w[t]=[w[t],e[t]];return this},abort:function(e){var t=e||u;return c&&c.abort(t),l(0,t),this}};if(x.promise(T),v.url=((e||v.url||Tt.href)+"").replace(Pt,Tt.protocol+"//"),v.type=t.method||t.type||v.method||v.type,v.dataTypes=(v.dataType||"*").toLowerCase().match(P)||[""],null==v.crossDomain){r=E.createElement("a");try{r.href=v.url,r.href=r.href,v.crossDomain=Wt.protocol+"//"+Wt.host!=r.protocol+"//"+r.host}catch(e){v.crossDomain=!0}}if(v.data&&v.processData&&"string"!=typeof v.data&&(v.data=S.param(v.data,v.traditional)),Bt(Rt,v,t,T),h)return T;for(i in(g=S.event&&v.global)&&0==S.active++&&S.event.trigger("ajaxStart"),v.type=v.type.toUpperCase(),v.hasContent=!Ot.test(v.type),f=v.url.replace(qt,""),v.hasContent?v.data&&v.processData&&0===(v.contentType||"").indexOf("application/x-www-form-urlencoded")&&(v.data=v.data.replace(jt,"+")):(o=v.url.slice(f.length),v.data&&(v.processData||"string"==typeof v.data)&&(f+=(Et.test(f)?"&":"?")+v.data,delete v.data),!1===v.cache&&(f=f.replace(Lt,"$1"),o=(Et.test(f)?"&":"?")+"_="+Ct.guid+++o),v.url=f+o),v.ifModified&&(S.lastModified[f]&&T.setRequestHeader("If-Modified-Since",S.lastModified[f]),S.etag[f]&&T.setRequestHeader("If-None-Match",S.etag[f])),(v.data&&v.hasContent&&!1!==v.contentType||t.contentType)&&T.setRequestHeader("Content-Type",v.contentType),T.setRequestHeader("Accept",v.dataTypes[0]&&v.accepts[v.dataTypes[0]]?v.accepts[v.dataTypes[0]]+("*"!==v.dataTypes[0]?", "+It+"; q=0.01":""):v.accepts["*"]),v.headers)T.setRequestHeader(i,v.headers[i]);if(v.beforeSend&&(!1===v.beforeSend.call(y,T,v)||h))return T.abort();if(u="abort",b.add(v.complete),T.done(v.success),T.fail(v.error),c=Bt(Mt,v,t,T)){if(T.readyState=1,g&&m.trigger("ajaxSend",[T,v]),h)return T;v.async&&0<v.timeout&&(d=C.setTimeout(function(){T.abort("timeout")},v.timeout));try{h=!1,c.send(a,l)}catch(e){if(h)throw e;l(-1,e)}}else l(-1,"No Transport");function l(e,t,n,r){var i,o,a,s,u,l=t;h||(h=!0,d&&C.clearTimeout(d),c=void 0,p=r||"",T.readyState=0<e?4:0,i=200<=e&&e<300||304===e,n&&(s=function(e,t,n){var r,i,o,a,s=e.contents,u=e.dataTypes;while("*"===u[0])u.shift(),void 0===r&&(r=e.mimeType||t.getResponseHeader("Content-Type"));if(r)for(i in s)if(s[i]&&s[i].test(r)){u.unshift(i);break}if(u[0]in n)o=u[0];else{for(i in n){if(!u[0]||e.converters[i+" "+u[0]]){o=i;break}a||(a=i)}o=o||a}if(o)return o!==u[0]&&u.unshift(o),n[o]}(v,T,n)),!i&&-1<S.inArray("script",v.dataTypes)&&(v.converters["text script"]=function(){}),s=function(e,t,n,r){var i,o,a,s,u,l={},c=e.dataTypes.slice();if(c[1])for(a in e.converters)l[a.toLowerCase()]=e.converters[a];o=c.shift();while(o)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!u&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u=o,o=c.shift())if("*"===o)o=u;else if("*"!==u&&u!==o){if(!(a=l[u+" "+o]||l["* "+o]))for(i in l)if((s=i.split(" "))[1]===o&&(a=l[u+" "+s[0]]||l["* "+s[0]])){!0===a?a=l[i]:!0!==l[i]&&(o=s[0],c.unshift(s[1]));break}if(!0!==a)if(a&&e["throws"])t=a(t);else try{t=a(t)}catch(e){return{state:"parsererror",error:a?e:"No conversion from "+u+" to "+o}}}return{state:"success",data:t}}(v,s,T,i),i?(v.ifModified&&((u=T.getResponseHeader("Last-Modified"))&&(S.lastModified[f]=u),(u=T.getResponseHeader("etag"))&&(S.etag[f]=u)),204===e||"HEAD"===v.type?l="nocontent":304===e?l="notmodified":(l=s.state,o=s.data,i=!(a=s.error))):(a=l,!e&&l||(l="error",e<0&&(e=0))),T.status=e,T.statusText=(t||l)+"",i?x.resolveWith(y,[o,l,T]):x.rejectWith(y,[T,l,a]),T.statusCode(w),w=void 0,g&&m.trigger(i?"ajaxSuccess":"ajaxError",[T,v,i?o:a]),b.fireWith(y,[T,l]),g&&(m.trigger("ajaxComplete",[T,v]),--S.active||S.event.trigger("ajaxStop")))}return T},getJSON:function(e,t,n){return S.get(e,t,n,"json")},getScript:function(e,t){return S.get(e,void 0,t,"script")}}),S.each(["get","post"],function(e,i){S[i]=function(e,t,n,r){return m(t)&&(r=r||n,n=t,t=void 0),S.ajax(S.extend({url:e,type:i,dataType:r,data:t,success:n},S.isPlainObject(e)&&e))}}),S.ajaxPrefilter(function(e){var t;for(t in e.headers)"content-type"===t.toLowerCase()&&(e.contentType=e.headers[t]||"")}),S._evalUrl=function(e,t,n){return S.ajax({url:e,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,converters:{"text script":function(){}},dataFilter:function(e){S.globalEval(e,t,n)}})},S.fn.extend({wrapAll:function(e){var t;return this[0]&&(m(e)&&(e=e.call(this[0])),t=S(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstElementChild)e=e.firstElementChild;return e}).append(this)),this},wrapInner:function(n){return m(n)?this.each(function(e){S(this).wrapInner(n.call(this,e))}):this.each(function(){var e=S(this),t=e.contents();t.length?t.wrapAll(n):e.append(n)})},wrap:function(t){var n=m(t);return this.each(function(e){S(this).wrapAll(n?t.call(this,e):t)})},unwrap:function(e){return this.parent(e).not("body").each(function(){S(this).replaceWith(this.childNodes)}),this}}),S.expr.pseudos.hidden=function(e){return!S.expr.pseudos.visible(e)},S.expr.pseudos.visible=function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)},S.ajaxSettings.xhr=function(){try{return new C.XMLHttpRequest}catch(e){}};var _t={0:200,1223:204},zt=S.ajaxSettings.xhr();y.cors=!!zt&&"withCredentials"in zt,y.ajax=zt=!!zt,S.ajaxTransport(function(i){var o,a;if(y.cors||zt&&!i.crossDomain)return{send:function(e,t){var n,r=i.xhr();if(r.open(i.type,i.url,i.async,i.username,i.password),i.xhrFields)for(n in i.xhrFields)r[n]=i.xhrFields[n];for(n in i.mimeType&&r.overrideMimeType&&r.overrideMimeType(i.mimeType),i.crossDomain||e["X-Requested-With"]||(e["X-Requested-With"]="XMLHttpRequest"),e)r.setRequestHeader(n,e[n]);o=function(e){return function(){o&&(o=a=r.onload=r.onerror=r.onabort=r.ontimeout=r.onreadystatechange=null,"abort"===e?r.abort():"error"===e?"number"!=typeof r.status?t(0,"error"):t(r.status,r.statusText):t(_t[r.status]||r.status,r.statusText,"text"!==(r.responseType||"text")||"string"!=typeof r.responseText?{binary:r.response}:{text:r.responseText},r.getAllResponseHeaders()))}},r.onload=o(),a=r.onerror=r.ontimeout=o("error"),void 0!==r.onabort?r.onabort=a:r.onreadystatechange=function(){4===r.readyState&&C.setTimeout(function(){o&&a()})},o=o("abort");try{r.send(i.hasContent&&i.data||null)}catch(e){if(o)throw e}},abort:function(){o&&o()}}}),S.ajaxPrefilter(function(e){e.crossDomain&&(e.contents.script=!1)}),S.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(e){return S.globalEval(e),e}}}),S.ajaxPrefilter("script",function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),S.ajaxTransport("script",function(n){var r,i;if(n.crossDomain||n.scriptAttrs)return{send:function(e,t){r=S("<script>").attr(n.scriptAttrs||{}).prop({charset:n.scriptCharset,src:n.url}).on("load error",i=function(e){r.remove(),i=null,e&&t("error"===e.type?404:200,e.type)}),E.head.appendChild(r[0])},abort:function(){i&&i()}}});var Ut,Xt=[],Vt=/(=)\?(?=&|$)|\?\?/;S.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Xt.pop()||S.expando+"_"+Ct.guid++;return this[e]=!0,e}}),S.ajaxPrefilter("json jsonp",function(e,t,n){var r,i,o,a=!1!==e.jsonp&&(Vt.test(e.url)?"url":"string"==typeof e.data&&0===(e.contentType||"").indexOf("application/x-www-form-urlencoded")&&Vt.test(e.data)&&"data");if(a||"jsonp"===e.dataTypes[0])return r=e.jsonpCallback=m(e.jsonpCallback)?e.jsonpCallback():e.jsonpCallback,a?e[a]=e[a].replace(Vt,"$1"+r):!1!==e.jsonp&&(e.url+=(Et.test(e.url)?"&":"?")+e.jsonp+"="+r),e.converters["script json"]=function(){return o||S.error(r+" was not called"),o[0]},e.dataTypes[0]="json",i=C[r],C[r]=function(){o=arguments},n.always(function(){void 0===i?S(C).removeProp(r):C[r]=i,e[r]&&(e.jsonpCallback=t.jsonpCallback,Xt.push(r)),o&&m(i)&&i(o[0]),o=i=void 0}),"script"}),y.createHTMLDocument=((Ut=E.implementation.createHTMLDocument("").body).innerHTML="<form></form><form></form>",2===Ut.childNodes.length),S.parseHTML=function(e,t,n){return"string"!=typeof e?[]:("boolean"==typeof t&&(n=t,t=!1),t||(y.createHTMLDocument?((r=(t=E.implementation.createHTMLDocument("")).createElement("base")).href=E.location.href,t.head.appendChild(r)):t=E),o=!n&&[],(i=N.exec(e))?[t.createElement(i[1])]:(i=xe([e],t,o),o&&o.length&&S(o).remove(),S.merge([],i.childNodes)));var r,i,o},S.fn.load=function(e,t,n){var r,i,o,a=this,s=e.indexOf(" ");return-1<s&&(r=vt(e.slice(s)),e=e.slice(0,s)),m(t)?(n=t,t=void 0):t&&"object"==typeof t&&(i="POST"),0<a.length&&S.ajax({url:e,type:i||"GET",dataType:"html",data:t}).done(function(e){o=arguments,a.html(r?S("<div>").append(S.parseHTML(e)).find(r):e)}).always(n&&function(e,t){a.each(function(){n.apply(this,o||[e.responseText,t,e])})}),this},S.expr.pseudos.animated=function(t){return S.grep(S.timers,function(e){return t===e.elem}).length},S.offset={setOffset:function(e,t,n){var r,i,o,a,s,u,l=S.css(e,"position"),c=S(e),f={};"static"===l&&(e.style.position="relative"),s=c.offset(),o=S.css(e,"top"),u=S.css(e,"left"),("absolute"===l||"fixed"===l)&&-1<(o+u).indexOf("auto")?(a=(r=c.position()).top,i=r.left):(a=parseFloat(o)||0,i=parseFloat(u)||0),m(t)&&(t=t.call(e,n,S.extend({},s))),null!=t.top&&(f.top=t.top-s.top+a),null!=t.left&&(f.left=t.left-s.left+i),"using"in t?t.using.call(e,f):("number"==typeof f.top&&(f.top+="px"),"number"==typeof f.left&&(f.left+="px"),c.css(f))}},S.fn.extend({offset:function(t){if(arguments.length)return void 0===t?this:this.each(function(e){S.offset.setOffset(this,t,e)});var e,n,r=this[0];return r?r.getClientRects().length?(e=r.getBoundingClientRect(),n=r.ownerDocument.defaultView,{top:e.top+n.pageYOffset,left:e.left+n.pageXOffset}):{top:0,left:0}:void 0},position:function(){if(this[0]){var e,t,n,r=this[0],i={top:0,left:0};if("fixed"===S.css(r,"position"))t=r.getBoundingClientRect();else{t=this.offset(),n=r.ownerDocument,e=r.offsetParent||n.documentElement;while(e&&(e===n.body||e===n.documentElement)&&"static"===S.css(e,"position"))e=e.parentNode;e&&e!==r&&1===e.nodeType&&((i=S(e).offset()).top+=S.css(e,"borderTopWidth",!0),i.left+=S.css(e,"borderLeftWidth",!0))}return{top:t.top-i.top-S.css(r,"marginTop",!0),left:t.left-i.left-S.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent;while(e&&"static"===S.css(e,"position"))e=e.offsetParent;return e||re})}}),S.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(t,i){var o="pageYOffset"===i;S.fn[t]=function(e){return $(this,function(e,t,n){var r;if(x(e)?r=e:9===e.nodeType&&(r=e.defaultView),void 0===n)return r?r[i]:e[t];r?r.scrollTo(o?r.pageXOffset:n,o?n:r.pageYOffset):e[t]=n},t,e,arguments.length)}}),S.each(["top","left"],function(e,n){S.cssHooks[n]=$e(y.pixelPosition,function(e,t){if(t)return t=Be(e,n),Me.test(t)?S(e).position()[n]+"px":t})}),S.each({Height:"height",Width:"width"},function(a,s){S.each({padding:"inner"+a,content:s,"":"outer"+a},function(r,o){S.fn[o]=function(e,t){var n=arguments.length&&(r||"boolean"!=typeof e),i=r||(!0===e||!0===t?"margin":"border");return $(this,function(e,t,n){var r;return x(e)?0===o.indexOf("outer")?e["inner"+a]:e.document.documentElement["client"+a]:9===e.nodeType?(r=e.documentElement,Math.max(e.body["scroll"+a],r["scroll"+a],e.body["offset"+a],r["offset"+a],r["client"+a])):void 0===n?S.css(e,t,i):S.style(e,t,n,i)},s,n?e:void 0,n)}})}),S.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){S.fn[t]=function(e){return this.on(t,e)}}),S.fn.extend({bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)},hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}}),S.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(e,n){S.fn[n]=function(e,t){return 0<arguments.length?this.on(n,null,e,t):this.trigger(n)}});var Gt=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;S.proxy=function(e,t){var n,r,i;if("string"==typeof t&&(n=e[t],t=e,e=n),m(e))return r=s.call(arguments,2),(i=function(){return e.apply(t||this,r.concat(s.call(arguments)))}).guid=e.guid=e.guid||S.guid++,i},S.holdReady=function(e){e?S.readyWait++:S.ready(!0)},S.isArray=Array.isArray,S.parseJSON=JSON.parse,S.nodeName=A,S.isFunction=m,S.isWindow=x,S.camelCase=X,S.type=w,S.now=Date.now,S.isNumeric=function(e){var t=S.type(e);return("number"===t||"string"===t)&&!isNaN(e-parseFloat(e))},S.trim=function(e){return null==e?"":(e+"").replace(Gt,"")},"function"==typeof define&&define.amd&&define("jquery",[],function(){return S});var Yt=C.jQuery,Qt=C.$;return S.noConflict=function(e){return C.$===S&&(C.$=Qt),e&&C.jQuery===S&&(C.jQuery=Yt),S},"undefined"==typeof e&&(C.jQuery=C.$=S),S});

/*! modernizr 3.6.0 (Custom Build) | MIT *
 * https://modernizr.com/download/?-webp-setclasses !*/
!function(e,n,A){function o(e,n){return typeof e===n}function t(){var e,n,A,t,a,i,l;for(var f in r)if(r.hasOwnProperty(f)){if(e=[],n=r[f],n.name&&(e.push(n.name.toLowerCase()),n.options&&n.options.aliases&&n.options.aliases.length))for(A=0;A<n.options.aliases.length;A++)e.push(n.options.aliases[A].toLowerCase());for(t=o(n.fn,"function")?n.fn():n.fn,a=0;a<e.length;a++)i=e[a],l=i.split("."),1===l.length?Modernizr[l[0]]=t:(!Modernizr[l[0]]||Modernizr[l[0]]instanceof Boolean||(Modernizr[l[0]]=new Boolean(Modernizr[l[0]])),Modernizr[l[0]][l[1]]=t),s.push((t?"":"no-")+l.join("-"))}}function a(e){var n=u.className,A=Modernizr._config.classPrefix||"";if(c&&(n=n.baseVal),Modernizr._config.enableJSClass){var o=new RegExp("(^|\\s)"+A+"no-js(\\s|$)");n=n.replace(o,"$1"+A+"js$2")}Modernizr._config.enableClasses&&(n+=" "+A+e.join(" "+A),c?u.className.baseVal=n:u.className=n)}function i(e,n){if("object"==typeof e)for(var A in e)f(e,A)&&i(A,e[A]);else{e=e.toLowerCase();var o=e.split("."),t=Modernizr[o[0]];if(2==o.length&&(t=t[o[1]]),"undefined"!=typeof t)return Modernizr;n="function"==typeof n?n():n,1==o.length?Modernizr[o[0]]=n:(!Modernizr[o[0]]||Modernizr[o[0]]instanceof Boolean||(Modernizr[o[0]]=new Boolean(Modernizr[o[0]])),Modernizr[o[0]][o[1]]=n),a([(n&&0!=n?"":"no-")+o.join("-")]),Modernizr._trigger(e,n)}return Modernizr}var s=[],r=[],l={_version:"3.6.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,n){var A=this;setTimeout(function(){n(A[e])},0)},addTest:function(e,n,A){r.push({name:e,fn:n,options:A})},addAsyncTest:function(e){r.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=l,Modernizr=new Modernizr;var f,u=n.documentElement,c="svg"===u.nodeName.toLowerCase();!function(){var e={}.hasOwnProperty;f=o(e,"undefined")||o(e.call,"undefined")?function(e,n){return n in e&&o(e.constructor.prototype[n],"undefined")}:function(n,A){return e.call(n,A)}}(),l._l={},l.on=function(e,n){this._l[e]||(this._l[e]=[]),this._l[e].push(n),Modernizr.hasOwnProperty(e)&&setTimeout(function(){Modernizr._trigger(e,Modernizr[e])},0)},l._trigger=function(e,n){if(this._l[e]){var A=this._l[e];setTimeout(function(){var e,o;for(e=0;e<A.length;e++)(o=A[e])(n)},0),delete this._l[e]}},Modernizr._q.push(function(){l.addTest=i}),Modernizr.addAsyncTest(function(){function e(e,n,A){function o(n){var o=n&&"load"===n.type?1==t.width:!1,a="webp"===e;i(e,a&&o?new Boolean(o):o),A&&A(n)}var t=new Image;t.onerror=o,t.onload=o,t.src=n}var n=[{uri:"data:image/webp;base64,UklGRiQAAABXRUJQVlA4IBgAAAAwAQCdASoBAAEAAwA0JaQAA3AA/vuUAAA=",name:"webp"},{uri:"data:image/webp;base64,UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAABBxAR/Q9ERP8DAABWUDggGAAAADABAJ0BKgEAAQADADQlpAADcAD++/1QAA==",name:"webp.alpha"},{uri:"data:image/webp;base64,UklGRlIAAABXRUJQVlA4WAoAAAASAAAAAAAAAAAAQU5JTQYAAAD/////AABBTk1GJgAAAAAAAAAAAAAAAAAAAGQAAABWUDhMDQAAAC8AAAAQBxAREYiI/gcA",name:"webp.animation"},{uri:"data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA=",name:"webp.lossless"}],A=n.shift();e(A.name,A.uri,function(A){if(A&&"load"===A.type)for(var o=0;o<n.length;o++)e(n[o].name,n[o].uri)})}),t(),a(s),delete l.addTest,delete l.addAsyncTest;for(var p=0;p<Modernizr._q.length;p++)Modernizr._q[p]();e.Modernizr=Modernizr}(window,document);

var WiredElements = function (e) {
	"use strict";
	const t = new WeakMap,
		i = e => "function" == typeof e && t.has(e),
		s = void 0 !== window.customElements && void 0 !== window.customElements.polyfillWrapFlushCallback,
		r = (e, t, i = null) => {
			for (; t !== i;) {
				const i = t.nextSibling;
				e.removeChild(t), t = i
			}
		},
		o = {},
		n = {},
		a = `{{lit-${String(Math.random()).slice(2)}}}`,
		d = `\x3c!--${a}--\x3e`,
		l = new RegExp(`${a}|${d}`);
	class h {
		constructor(e, t) {
			this.parts = [], this.element = t;
			const i = [],
				s = [],
				r = document.createTreeWalker(t.content, 133, null, !1);
			let o = 0,
				n = -1,
				d = 0;
			const {
				strings: h,
				values: {
					length: p
				}
			} = e;
			for (; d < p;) {
				const e = r.nextNode();
				if (null !== e) {
					if (n++, 1 === e.nodeType) {
						if (e.hasAttributes()) {
							const t = e.attributes,
								{
									length: i
								} = t;
							let s = 0;
							for (let e = 0; e < i; e++) c(t[e].name, "$lit$") && s++;
							for (; s-- > 0;) {
								const t = h[d],
									i = f.exec(t)[2],
									s = i.toLowerCase() + "$lit$",
									r = e.getAttribute(s);
								e.removeAttribute(s);
								const o = r.split(l);
								this.parts.push({
									type: "attribute",
									index: n,
									name: i,
									strings: o
								}), d += o.length - 1
							}
						}
						"TEMPLATE" === e.tagName && (s.push(e), r.currentNode = e.content)
					} else if (3 === e.nodeType) {
						const t = e.data;
						if (t.indexOf(a) >= 0) {
							const s = e.parentNode,
								r = t.split(l),
								o = r.length - 1;
							for (let t = 0; t < o; t++) {
								let i, o = r[t];
								if ("" === o) i = u();
								else {
									const e = f.exec(o);
									null !== e && c(e[2], "$lit$") && (o = o.slice(0, e.index) + e[1] + e[2].slice(0, -"$lit$".length) + e[3]), i = document.createTextNode(o)
								}
								s.insertBefore(i, e), this.parts.push({
									type: "node",
									index: ++n
								})
							}
							"" === r[o] ? (s.insertBefore(u(), e), i.push(e)) : e.data = r[o], d += o
						}
					} else if (8 === e.nodeType)
						if (e.data === a) {
							const t = e.parentNode;
							null !== e.previousSibling && n !== o || (n++, t.insertBefore(u(), e)), o = n, this.parts.push({
								type: "node",
								index: n
							}), null === e.nextSibling ? e.data = "" : (i.push(e), n--), d++
						} else {
							let t = -1;
							for (; - 1 !== (t = e.data.indexOf(a, t + 1));) this.parts.push({
								type: "node",
								index: -1
							}), d++
						}
				} else r.currentNode = s.pop()
			}
			for (const e of i) e.parentNode.removeChild(e)
		}
	}
	const c = (e, t) => {
			const i = e.length - t.length;
			return i >= 0 && e.slice(i) === t
		},
		p = e => -1 !== e.index,
		u = () => document.createComment(""),
		f = /([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;
	class g {
		constructor(e, t, i) {
			this.__parts = [], this.template = e, this.processor = t, this.options = i
		}
		update(e) {
			let t = 0;
			for (const i of this.__parts) void 0 !== i && i.setValue(e[t]), t++;
			for (const e of this.__parts) void 0 !== e && e.commit()
		}
		_clone() {
			const e = s ? this.template.element.content.cloneNode(!0) : document.importNode(this.template.element.content, !0),
				t = [],
				i = this.template.parts,
				r = document.createTreeWalker(e, 133, null, !1);
			let o, n = 0,
				a = 0,
				d = r.nextNode();
			for (; n < i.length;)
				if (o = i[n], p(o)) {
					for (; a < o.index;) a++, "TEMPLATE" === d.nodeName && (t.push(d), r.currentNode = d.content), null === (d = r.nextNode()) && (r.currentNode = t.pop(), d = r.nextNode());
					if ("node" === o.type) {
						const e = this.processor.handleTextExpression(this.options);
						e.insertAfterNode(d.previousSibling), this.__parts.push(e)
					} else this.__parts.push(...this.processor.handleAttributeExpressions(d, o.name, o.strings, this.options));
					n++
				} else this.__parts.push(void 0), n++;
			return s && (document.adoptNode(e), customElements.upgrade(e)), e
		}
	}
	const y = ` ${a} `;
	class b {
		constructor(e, t, i, s) {
			this.strings = e, this.values = t, this.type = i, this.processor = s
		}
		getHTML() {
			const e = this.strings.length - 1;
			let t = "",
				i = !1;
			for (let s = 0; s < e; s++) {
				const e = this.strings[s],
					r = e.lastIndexOf("\x3c!--");
				i = (r > -1 || i) && -1 === e.indexOf("--\x3e", r + 1);
				const o = f.exec(e);
				t += null === o ? e + (i ? y : d) : e.substr(0, o.index) + o[1] + o[2] + "$lit$" + o[3] + a
			}
			return t += this.strings[e], t
		}
		getTemplateElement() {
			const e = document.createElement("template");
			return e.innerHTML = this.getHTML(), e
		}
	}
	const v = e => null === e || !("object" == typeof e || "function" == typeof e),
		m = e => Array.isArray(e) || !(!e || !e[Symbol.iterator]);
	class w {
		constructor(e, t, i) {
			this.dirty = !0, this.element = e, this.name = t, this.strings = i, this.parts = [];
			for (let e = 0; e < i.length - 1; e++) this.parts[e] = this._createPart()
		}
		_createPart() {
			return new x(this)
		}
		_getValue() {
			const e = this.strings,
				t = e.length - 1;
			let i = "";
			for (let s = 0; s < t; s++) {
				i += e[s];
				const t = this.parts[s];
				if (void 0 !== t) {
					const e = t.value;
					if (v(e) || !m(e)) i += "string" == typeof e ? e : String(e);
					else
						for (const t of e) i += "string" == typeof t ? t : String(t)
				}
			}
			return i += e[t], i
		}
		commit() {
			this.dirty && (this.dirty = !1, this.element.setAttribute(this.name, this._getValue()))
		}
	}
	class x {
		constructor(e) {
			this.value = void 0, this.committer = e
		}
		setValue(e) {
			e === o || v(e) && e === this.value || (this.value = e, i(e) || (this.committer.dirty = !0))
		}
		commit() {
			for (; i(this.value);) {
				const e = this.value;
				this.value = o, e(this)
			}
			this.value !== o && this.committer.commit()
		}
	}
	class k {
		constructor(e) {
			this.value = void 0, this.__pendingValue = void 0, this.options = e
		}
		appendInto(e) {
			this.startNode = e.appendChild(u()), this.endNode = e.appendChild(u())
		}
		insertAfterNode(e) {
			this.startNode = e, this.endNode = e.nextSibling
		}
		appendIntoPart(e) {
			e.__insert(this.startNode = u()), e.__insert(this.endNode = u())
		}
		insertAfterPart(e) {
			e.__insert(this.startNode = u()), this.endNode = e.endNode, e.endNode = this.startNode
		}
		setValue(e) {
			this.__pendingValue = e
		}
		commit() {
			for (; i(this.__pendingValue);) {
				const e = this.__pendingValue;
				this.__pendingValue = o, e(this)
			}
			const e = this.__pendingValue;
			e !== o && (v(e) ? e !== this.value && this.__commitText(e) : e instanceof b ? this.__commitTemplateResult(e) : e instanceof Node ? this.__commitNode(e) : m(e) ? this.__commitIterable(e) : e === n ? (this.value = n, this.clear()) : this.__commitText(e))
		}
		__insert(e) {
			this.endNode.parentNode.insertBefore(e, this.endNode)
		}
		__commitNode(e) {
			this.value !== e && (this.clear(), this.__insert(e), this.value = e)
		}
		__commitText(e) {
			const t = this.startNode.nextSibling,
				i = "string" == typeof (e = null == e ? "" : e) ? e : String(e);
			t === this.endNode.previousSibling && 3 === t.nodeType ? t.data = i : this.__commitNode(document.createTextNode(i)), this.value = e
		}
		__commitTemplateResult(e) {
			const t = this.options.templateFactory(e);
			if (this.value instanceof g && this.value.template === t) this.value.update(e.values);
			else {
				const i = new g(t, e.processor, this.options),
					s = i._clone();
				i.update(e.values), this.__commitNode(s), this.value = i
			}
		}
		__commitIterable(e) {
			Array.isArray(this.value) || (this.value = [], this.clear());
			const t = this.value;
			let i, s = 0;
			for (const r of e) i = t[s], void 0 === i && (i = new k(this.options), t.push(i), 0 === s ? i.appendIntoPart(this) : i.insertAfterPart(t[s - 1])), i.setValue(r), i.commit(), s++;
			s < t.length && (t.length = s, this.clear(i && i.endNode))
		}
		clear(e = this.startNode) {
			r(this.startNode.parentNode, e.nextSibling, this.endNode)
		}
	}
	class S {
		constructor(e, t, i) {
			if (this.value = void 0, this.__pendingValue = void 0, 2 !== i.length || "" !== i[0] || "" !== i[1]) throw new Error("Boolean attributes can only contain a single expression");
			this.element = e, this.name = t, this.strings = i
		}
		setValue(e) {
			this.__pendingValue = e
		}
		commit() {
			for (; i(this.__pendingValue);) {
				const e = this.__pendingValue;
				this.__pendingValue = o, e(this)
			}
			if (this.__pendingValue === o) return;
			const e = !!this.__pendingValue;
			this.value !== e && (e ? this.element.setAttribute(this.name, "") : this.element.removeAttribute(this.name), this.value = e), this.__pendingValue = o
		}
	}
	class R extends w {
		constructor(e, t, i) {
			super(e, t, i), this.single = 2 === i.length && "" === i[0] && "" === i[1]
		}
		_createPart() {
			return new _(this)
		}
		_getValue() {
			return this.single ? this.parts[0].value : super._getValue()
		}
		commit() {
			this.dirty && (this.dirty = !1, this.element[this.name] = this._getValue())
		}
	}
	class _ extends x {}
	let C = !1;
	try {
		const e = {
			get capture() {
				return C = !0, !1
			}
		};
		window.addEventListener("test", e, e), window.removeEventListener("test", e, e)
	} catch (e) {}
	class O {
		constructor(e, t, i) {
			this.value = void 0, this.__pendingValue = void 0, this.element = e, this.eventName = t, this.eventContext = i, this.__boundHandleEvent = e => this.handleEvent(e)
		}
		setValue(e) {
			this.__pendingValue = e
		}
		commit() {
			for (; i(this.__pendingValue);) {
				const e = this.__pendingValue;
				this.__pendingValue = o, e(this)
			}
			if (this.__pendingValue === o) return;
			const e = this.__pendingValue,
				t = this.value,
				s = null == e || null != t && (e.capture !== t.capture || e.once !== t.once || e.passive !== t.passive),
				r = null != e && (null == t || s);
			s && this.element.removeEventListener(this.eventName, this.__boundHandleEvent, this.__options), r && (this.__options = z(e), this.element.addEventListener(this.eventName, this.__boundHandleEvent, this.__options)), this.value = e, this.__pendingValue = o
		}
		handleEvent(e) {
			"function" == typeof this.value ? this.value.call(this.eventContext || this.element, e) : this.value.handleEvent(e)
		}
	}
	const z = e => e && (C ? {
		capture: e.capture,
		passive: e.passive,
		once: e.once
	} : e.capture);
	const M = new class {
		handleAttributeExpressions(e, t, i, s) {
			const r = t[0];
			if ("." === r) {
				return new R(e, t.slice(1), i).parts
			}
			return "@" === r ? [new O(e, t.slice(1), s.eventContext)] : "?" === r ? [new S(e, t.slice(1), i)] : new w(e, t, i).parts
		}
		handleTextExpression(e) {
			return new k(e)
		}
	};

	function W(e) {
		let t = N.get(e.type);
		void 0 === t && (t = {
			stringsArray: new WeakMap,
			keyString: new Map
		}, N.set(e.type, t));
		let i = t.stringsArray.get(e.strings);
		if (void 0 !== i) return i;
		const s = e.strings.join(a);
		return i = t.keyString.get(s), void 0 === i && (i = new h(e, e.getTemplateElement()), t.keyString.set(s, i)), t.stringsArray.set(e.strings, i), i
	}
	const N = new Map,
		$ = new WeakMap;
	(window.litHtmlVersions || (window.litHtmlVersions = [])).push("1.1.2");
	const P = (e, ...t) => new b(e, t, "html", M);

	function j(e, t) {
		const {
			element: {
				content: i
			},
			parts: s
		} = e, r = document.createTreeWalker(i, 133, null, !1);
		let o = T(s),
			n = s[o],
			a = -1,
			d = 0;
		const l = [];
		let h = null;
		for (; r.nextNode();) {
			a++;
			const e = r.currentNode;
			for (e.previousSibling === h && (h = null), t.has(e) && (l.push(e), null === h && (h = e)), null !== h && d++; void 0 !== n && n.index === a;) n.index = null !== h ? -1 : n.index - d, o = T(s, o), n = s[o]
		}
		l.forEach(e => e.parentNode.removeChild(e))
	}
	const A = e => {
			let t = 11 === e.nodeType ? 0 : 1;
			const i = document.createTreeWalker(e, 133, null, !1);
			for (; i.nextNode();) t++;
			return t
		},
		T = (e, t = -1) => {
			for (let i = t + 1; i < e.length; i++) {
				const t = e[i];
				if (p(t)) return i
			}
			return -1
		};
	const I = (e, t) => `${e}--${t}`;
	let E = !0;
	void 0 === window.ShadyCSS ? E = !1 : void 0 === window.ShadyCSS.prepareTemplateDom && (console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."), E = !1);
	const D = e => t => {
			const i = I(t.type, e);
			let s = N.get(i);
			void 0 === s && (s = {
				stringsArray: new WeakMap,
				keyString: new Map
			}, N.set(i, s));
			let r = s.stringsArray.get(t.strings);
			if (void 0 !== r) return r;
			const o = t.strings.join(a);
			if (r = s.keyString.get(o), void 0 === r) {
				const i = t.getTemplateElement();
				E && window.ShadyCSS.prepareTemplateDom(i, e), r = new h(t, i), s.keyString.set(o, r)
			}
			return s.stringsArray.set(t.strings, r), r
		},
		L = ["html", "svg"],
		B = new Set,
		V = (e, t, i) => {
			B.add(e);
			const s = i ? i.element : document.createElement("template"),
				r = t.querySelectorAll("style"),
				{
					length: o
				} = r;
			if (0 === o) return void window.ShadyCSS.prepareTemplateStyles(s, e);
			const n = document.createElement("style");
			for (let e = 0; e < o; e++) {
				const t = r[e];
				t.parentNode.removeChild(t), n.textContent += t.textContent
			}(e => {
				L.forEach(t => {
					const i = N.get(I(t, e));
					void 0 !== i && i.keyString.forEach(e => {
						const {
							element: {
								content: t
							}
						} = e, i = new Set;
						Array.from(t.querySelectorAll("style")).forEach(e => {
							i.add(e)
						}), j(e, i)
					})
				})
			})(e);
			const a = s.content;
			i ? function (e, t, i = null) {
				const {
					element: {
						content: s
					},
					parts: r
				} = e;
				if (null == i) return void s.appendChild(t);
				const o = document.createTreeWalker(s, 133, null, !1);
				let n = T(r),
					a = 0,
					d = -1;
				for (; o.nextNode();) {
					for (d++, o.currentNode === i && (a = A(t), i.parentNode.insertBefore(t, i)); - 1 !== n && r[n].index === d;) {
						if (a > 0) {
							for (; - 1 !== n;) r[n].index += a, n = T(r, n);
							return
						}
						n = T(r, n)
					}
				}
			}(i, n, a.firstChild) : a.insertBefore(n, a.firstChild), window.ShadyCSS.prepareTemplateStyles(s, e);
			const d = a.querySelector("style");
			if (window.ShadyCSS.nativeShadow && null !== d) t.insertBefore(d.cloneNode(!0), t.firstChild);
			else if (i) {
				a.insertBefore(n, a.firstChild);
				const e = new Set;
				e.add(n), j(i, e)
			}
		};
	window.JSCompiler_renameProperty = (e, t) => e;
	const H = {
			toAttribute(e, t) {
				switch (t) {
					case Boolean:
						return e ? "" : null;
					case Object:
					case Array:
						return null == e ? e : JSON.stringify(e)
				}
				return e
			},
			fromAttribute(e, t) {
				switch (t) {
					case Boolean:
						return null !== e;
					case Number:
						return null === e ? null : Number(e);
					case Object:
					case Array:
						return JSON.parse(e)
				}
				return e
			}
		},
		U = (e, t) => t !== e && (t == t || e == e),
		F = {
			attribute: !0,
			type: String,
			converter: H,
			reflect: !1,
			hasChanged: U
		},
		q = Promise.resolve(!0);
	class Y extends HTMLElement {
		constructor() {
			super(), this._updateState = 0, this._instanceProperties = void 0, this._updatePromise = q, this._hasConnectedResolver = void 0, this._changedProperties = new Map, this._reflectingProperties = void 0, this.initialize()
		}
		static get observedAttributes() {
			this.finalize();
			const e = [];
			return this._classProperties.forEach((t, i) => {
				const s = this._attributeNameForProperty(i, t);
				void 0 !== s && (this._attributeToPropertyMap.set(s, i), e.push(s))
			}), e
		}
		static _ensureClassProperties() {
			if (!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties", this))) {
				this._classProperties = new Map;
				const e = Object.getPrototypeOf(this)._classProperties;
				void 0 !== e && e.forEach((e, t) => this._classProperties.set(t, e))
			}
		}
		static createProperty(e, t = F) {
			if (this._ensureClassProperties(), this._classProperties.set(e, t), t.noAccessor || this.prototype.hasOwnProperty(e)) return;
			const i = "symbol" == typeof e ? Symbol() : `__${e}`;
			Object.defineProperty(this.prototype, e, {
				get() {
					return this[i]
				},
				set(t) {
					const s = this[e];
					this[i] = t, this._requestUpdate(e, s)
				},
				configurable: !0,
				enumerable: !0
			})
		}
		static finalize() {
			const e = Object.getPrototypeOf(this);
			if (e.hasOwnProperty("finalized") || e.finalize(), this.finalized = !0, this._ensureClassProperties(), this._attributeToPropertyMap = new Map, this.hasOwnProperty(JSCompiler_renameProperty("properties", this))) {
				const e = this.properties,
					t = [...Object.getOwnPropertyNames(e), ..."function" == typeof Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(e) : []];
				for (const i of t) this.createProperty(i, e[i])
			}
		}
		static _attributeNameForProperty(e, t) {
			const i = t.attribute;
			return !1 === i ? void 0 : "string" == typeof i ? i : "string" == typeof e ? e.toLowerCase() : void 0
		}
		static _valueHasChanged(e, t, i = U) {
			return i(e, t)
		}
		static _propertyValueFromAttribute(e, t) {
			const i = t.type,
				s = t.converter || H,
				r = "function" == typeof s ? s : s.fromAttribute;
			return r ? r(e, i) : e
		}
		static _propertyValueToAttribute(e, t) {
			if (void 0 === t.reflect) return;
			const i = t.type,
				s = t.converter;
			return (s && s.toAttribute || H.toAttribute)(e, i)
		}
		initialize() {
			this._saveInstanceProperties(), this._requestUpdate()
		}
		_saveInstanceProperties() {
			this.constructor._classProperties.forEach((e, t) => {
				if (this.hasOwnProperty(t)) {
					const e = this[t];
					delete this[t], this._instanceProperties || (this._instanceProperties = new Map), this._instanceProperties.set(t, e)
				}
			})
		}
		_applyInstanceProperties() {
			this._instanceProperties.forEach((e, t) => this[t] = e), this._instanceProperties = void 0
		}
		connectedCallback() {
			this._updateState = 32 | this._updateState, this._hasConnectedResolver && (this._hasConnectedResolver(), this._hasConnectedResolver = void 0)
		}
		disconnectedCallback() {}
		attributeChangedCallback(e, t, i) {
			t !== i && this._attributeToProperty(e, i)
		}
		_propertyToAttribute(e, t, i = F) {
			const s = this.constructor,
				r = s._attributeNameForProperty(e, i);
			if (void 0 !== r) {
				const e = s._propertyValueToAttribute(t, i);
				if (void 0 === e) return;
				this._updateState = 8 | this._updateState, null == e ? this.removeAttribute(r) : this.setAttribute(r, e), this._updateState = -9 & this._updateState
			}
		}
		_attributeToProperty(e, t) {
			if (8 & this._updateState) return;
			const i = this.constructor,
				s = i._attributeToPropertyMap.get(e);
			if (void 0 !== s) {
				const e = i._classProperties.get(s) || F;
				this._updateState = 16 | this._updateState, this[s] = i._propertyValueFromAttribute(t, e), this._updateState = -17 & this._updateState
			}
		}
		_requestUpdate(e, t) {
			let i = !0;
			if (void 0 !== e) {
				const s = this.constructor,
					r = s._classProperties.get(e) || F;
				s._valueHasChanged(this[e], t, r.hasChanged) ? (this._changedProperties.has(e) || this._changedProperties.set(e, t), !0 !== r.reflect || 16 & this._updateState || (void 0 === this._reflectingProperties && (this._reflectingProperties = new Map), this._reflectingProperties.set(e, r))) : i = !1
			}!this._hasRequestedUpdate && i && this._enqueueUpdate()
		}
		requestUpdate(e, t) {
			return this._requestUpdate(e, t), this.updateComplete
		}
		async _enqueueUpdate() {
			let e, t;
			this._updateState = 4 | this._updateState;
			const i = this._updatePromise;
			this._updatePromise = new Promise((i, s) => {
				e = i, t = s
			});
			try {
				await i
			} catch (e) {}
			this._hasConnected || await new Promise(e => this._hasConnectedResolver = e);
			try {
				const e = this.performUpdate();
				null != e && await e
			} catch (e) {
				t(e)
			}
			e(!this._hasRequestedUpdate)
		}
		get _hasConnected() {
			return 32 & this._updateState
		}
		get _hasRequestedUpdate() {
			return 4 & this._updateState
		}
		get hasUpdated() {
			return 1 & this._updateState
		}
		performUpdate() {
			this._instanceProperties && this._applyInstanceProperties();
			let e = !1;
			const t = this._changedProperties;
			try {
				e = this.shouldUpdate(t), e && this.update(t)
			} catch (t) {
				throw e = !1, t
			} finally {
				this._markUpdated()
			}
			e && (1 & this._updateState || (this._updateState = 1 | this._updateState, this.firstUpdated(t)), this.updated(t))
		}
		_markUpdated() {
			this._changedProperties = new Map, this._updateState = -5 & this._updateState
		}
		get updateComplete() {
			return this._getUpdateComplete()
		}
		_getUpdateComplete() {
			return this._updatePromise
		}
		shouldUpdate(e) {
			return !0
		}
		update(e) {
			void 0 !== this._reflectingProperties && this._reflectingProperties.size > 0 && (this._reflectingProperties.forEach((e, t) => this._propertyToAttribute(t, this[t], e)), this._reflectingProperties = void 0)
		}
		updated(e) {}
		firstUpdated(e) {}
	}
	Y.finalized = !0;
	const X = e => t => "function" == typeof t ? ((e, t) => (window.customElements.define(e, t), t))(e, t) : ((e, t) => {
			const {
				kind: i,
				elements: s
			} = t;
			return {
				kind: i,
				elements: s,
				finisher(t) {
					window.customElements.define(e, t)
				}
			}
		})(e, t),
		G = (e, t) => "method" !== t.kind || !t.descriptor || "value" in t.descriptor ? {
			kind: "field",
			key: Symbol(),
			placement: "own",
			descriptor: {},
			initializer() {
				"function" == typeof t.initializer && (this[t.key] = t.initializer.call(this))
			},
			finisher(i) {
				i.createProperty(t.key, e)
			}
		} : Object.assign({}, t, {
			finisher(i) {
				i.createProperty(t.key, e)
			}
		});

	function J(e) {
		return (t, i) => void 0 !== i ? ((e, t, i) => {
			t.constructor.createProperty(i, e)
		})(e, t, i) : G(e, t)
	}

	function K(e) {
		return (t, i) => {
			const s = {
				get() {
					return this.renderRoot.querySelector(e)
				},
				enumerable: !0,
				configurable: !0
			};
			return void 0 !== i ? Q(s, t, i) : Z(s, t)
		}
	}
	const Q = (e, t, i) => {
			Object.defineProperty(t, i, e)
		},
		Z = (e, t) => ({
			kind: "method",
			placement: "prototype",
			key: t.key,
			descriptor: e
		}),
		ee = "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype,
		te = Symbol();
	class ie {
		constructor(e, t) {
			if (t !== te) throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
			this.cssText = e
		}
		get styleSheet() {
			return void 0 === this._styleSheet && (ee ? (this._styleSheet = new CSSStyleSheet, this._styleSheet.replaceSync(this.cssText)) : this._styleSheet = null), this._styleSheet
		}
		toString() {
			return this.cssText
		}
	}
	const se = (e, ...t) => {
		const i = t.reduce((t, i, s) => t + (e => {
			if (e instanceof ie) return e.cssText;
			if ("number" == typeof e) return e;
			throw new Error(`Value passed to 'css' function must be a 'css' function result: ${e}. Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security.`)
		})(i) + e[s + 1], e[0]);
		return new ie(i, te)
	};
	(window.litElementVersions || (window.litElementVersions = [])).push("2.2.1");
	const re = e => e.flat ? e.flat(1 / 0) : function e(t, i = []) {
		for (let s = 0, r = t.length; s < r; s++) {
			const r = t[s];
			Array.isArray(r) ? e(r, i) : i.push(r)
		}
		return i
	}(e);
	class oe extends Y {
		static finalize() {
			super.finalize.call(this), this._styles = this.hasOwnProperty(JSCompiler_renameProperty("styles", this)) ? this._getUniqueStyles() : this._styles || []
		}
		static _getUniqueStyles() {
			const e = this.styles,
				t = [];
			if (Array.isArray(e)) {
				re(e).reduceRight((e, t) => (e.add(t), e), new Set).forEach(e => t.unshift(e))
			} else e && t.push(e);
			return t
		}
		initialize() {
			super.initialize(), this.renderRoot = this.createRenderRoot(), window.ShadowRoot && this.renderRoot instanceof window.ShadowRoot && this.adoptStyles()
		}
		createRenderRoot() {
			return this.attachShadow({
				mode: "open"
			})
		}
		adoptStyles() {
			const e = this.constructor._styles;
			0 !== e.length && (void 0 === window.ShadyCSS || window.ShadyCSS.nativeShadow ? ee ? this.renderRoot.adoptedStyleSheets = e.map(e => e.styleSheet) : this._needsShimAdoptedStyleSheets = !0 : window.ShadyCSS.ScopingShim.prepareAdoptedCssText(e.map(e => e.cssText), this.localName))
		}
		connectedCallback() {
			super.connectedCallback(), this.hasUpdated && void 0 !== window.ShadyCSS && window.ShadyCSS.styleElement(this)
		}
		update(e) {
			super.update(e);
			const t = this.render();
			t instanceof b && this.constructor.render(t, this.renderRoot, {
				scopeName: this.localName,
				eventContext: this
			}), this._needsShimAdoptedStyleSheets && (this._needsShimAdoptedStyleSheets = !1, this.constructor._styles.forEach(e => {
				const t = document.createElement("style");
				t.textContent = e.cssText, this.renderRoot.appendChild(t)
			}))
		}
		render() {}
	}
	oe.finalized = !0, oe.render = (e, t, i) => {
		if (!i || "object" != typeof i || !i.scopeName) throw new Error("The `scopeName` option is required.");
		const s = i.scopeName,
			o = $.has(t),
			n = E && 11 === t.nodeType && !!t.host,
			a = n && !B.has(s),
			d = a ? document.createDocumentFragment() : t;
		if (((e, t, i) => {
				let s = $.get(t);
				void 0 === s && (r(t, t.firstChild), $.set(t, s = new k(Object.assign({
					templateFactory: W
				}, i))), s.appendInto(t)), s.setValue(e), s.commit()
			})(e, d, Object.assign({
				templateFactory: D(s)
			}, i)), a) {
			const e = $.get(d);
			$.delete(d);
			const i = e.value instanceof g ? e.value.template : void 0;
			V(s, d, i), r(t, t.firstChild), t.appendChild(d), $.set(t, e)
		}!o && n && window.ShadyCSS.styleElement(t.host)
	};
	var ne = function (e, t) {
		if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t)
	};
	const ae = se `
:host {
  opacity: 0;
}
:host(.wired-rendered) {
  opacity: 1;
}
#overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
}
svg {
  display: block;
}
path {
  stroke: currentColor;
  stroke-width: 0.7;
  fill: transparent;
}
.hidden {
  display: none !important;
}
`;
	class de extends oe {
		constructor() {
			super(...arguments), this.lastSize = [0, 0]
		}
		updated(e) {
			this.wiredRender()
		}
		wiredRender(e = !1) {
			if (this.svg) {
				const t = this.canvasSize();
				if (!e && t[0] === this.lastSize[0] && t[1] === this.lastSize[1]) return;
				for (; this.svg.hasChildNodes();) this.svg.removeChild(this.svg.lastChild);
				this.svg.setAttribute("width", `${t[0]}`), this.svg.setAttribute("height", `${t[1]}`), this.draw(this.svg, t), this.lastSize = t, this.classList.add("wired-rendered")
			}
		}
	}(function (e, t, i, s) {
		var r, o = arguments.length,
			n = o < 3 ? t : null === s ? s = Object.getOwnPropertyDescriptor(t, i) : s;
		if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) n = Reflect.decorate(e, t, i, s);
		else
			for (var a = e.length - 1; a >= 0; a--)(r = e[a]) && (n = (o < 3 ? r(n) : o > 3 ? r(t, i, n) : r(t, i)) || n);
		o > 3 && n && Object.defineProperty(t, i, n)
	})([K("svg"), ne("design:type", SVGSVGElement)], de.prototype, "svg", void 0);
	class le {
		constructor(e, t) {
			this.xi = Number.MAX_VALUE, this.yi = Number.MAX_VALUE, this.px1 = e[0], this.py1 = e[1], this.px2 = t[0], this.py2 = t[1], this.a = this.py2 - this.py1, this.b = this.px1 - this.px2, this.c = this.px2 * this.py1 - this.px1 * this.py2, this._undefined = 0 === this.a && 0 === this.b && 0 === this.c
		}
		isUndefined() {
			return this._undefined
		}
		intersects(e) {
			if (this.isUndefined() || e.isUndefined()) return !1;
			let t = Number.MAX_VALUE,
				i = Number.MAX_VALUE,
				s = 0,
				r = 0;
			const o = this.a,
				n = this.b,
				a = this.c;
			return Math.abs(n) > 1e-5 && (t = -o / n, s = -a / n), Math.abs(e.b) > 1e-5 && (i = -e.a / e.b, r = -e.c / e.b), t === Number.MAX_VALUE ? i === Number.MAX_VALUE ? -a / o == -e.c / e.a && (this.py1 >= Math.min(e.py1, e.py2) && this.py1 <= Math.max(e.py1, e.py2) ? (this.xi = this.px1, this.yi = this.py1, !0) : this.py2 >= Math.min(e.py1, e.py2) && this.py2 <= Math.max(e.py1, e.py2) && (this.xi = this.px2, this.yi = this.py2, !0)) : (this.xi = this.px1, this.yi = i * this.xi + r, !((this.py1 - this.yi) * (this.yi - this.py2) < -1e-5 || (e.py1 - this.yi) * (this.yi - e.py2) < -1e-5) && (!(Math.abs(e.a) < 1e-5) || !((e.px1 - this.xi) * (this.xi - e.px2) < -1e-5))) : i === Number.MAX_VALUE ? (this.xi = e.px1, this.yi = t * this.xi + s, !((e.py1 - this.yi) * (this.yi - e.py2) < -1e-5 || (this.py1 - this.yi) * (this.yi - this.py2) < -1e-5) && (!(Math.abs(o) < 1e-5) || !((this.px1 - this.xi) * (this.xi - this.px2) < -1e-5))) : t === i ? s === r && (this.px1 >= Math.min(e.px1, e.px2) && this.px1 <= Math.max(e.py1, e.py2) ? (this.xi = this.px1, this.yi = this.py1, !0) : this.px2 >= Math.min(e.px1, e.px2) && this.px2 <= Math.max(e.px1, e.px2) && (this.xi = this.px2, this.yi = this.py2, !0)) : (this.xi = (r - s) / (t - i), this.yi = t * this.xi + s, !((this.px1 - this.xi) * (this.xi - this.px2) < -1e-5 || (e.px1 - this.xi) * (this.xi - e.px2) < -1e-5))
		}
	}
	class he {
		constructor(e, t, i, s, r, o, n, a) {
			this.deltaX = 0, this.hGap = 0, this.top = e, this.bottom = t, this.left = i, this.right = s, this.gap = r, this.sinAngle = o, this.tanAngle = a, Math.abs(o) < 1e-4 ? this.pos = i + r : Math.abs(o) > .9999 ? this.pos = e + r : (this.deltaX = (t - e) * Math.abs(a), this.pos = i - Math.abs(this.deltaX), this.hGap = Math.abs(r / n), this.sLeft = new le([i, t], [i, e]), this.sRight = new le([s, t], [s, e]))
		}
		nextLine() {
			if (Math.abs(this.sinAngle) < 1e-4) {
				if (this.pos < this.right) {
					const e = [this.pos, this.top, this.pos, this.bottom];
					return this.pos += this.gap, e
				}
			} else if (Math.abs(this.sinAngle) > .9999) {
				if (this.pos < this.bottom) {
					const e = [this.left, this.pos, this.right, this.pos];
					return this.pos += this.gap, e
				}
			} else {
				let e = this.pos - this.deltaX / 2,
					t = this.pos + this.deltaX / 2,
					i = this.bottom,
					s = this.top;
				if (this.pos < this.right + this.deltaX) {
					for (; e < this.left && t < this.left || e > this.right && t > this.right;)
						if (this.pos += this.hGap, e = this.pos - this.deltaX / 2, t = this.pos + this.deltaX / 2, this.pos > this.right + this.deltaX) return null;
					const r = new le([e, i], [t, s]);
					this.sLeft && r.intersects(this.sLeft) && (e = r.xi, i = r.yi), this.sRight && r.intersects(this.sRight) && (t = r.xi, s = r.yi), this.tanAngle > 0 && (e = this.right - (e - this.left), t = this.right - (t - this.left));
					const o = [e, i, t, s];
					return this.pos += this.hGap, o
				}
			}
			return null
		}
	}

	function ce(e, t) {
		const i = [],
			s = new le([e[0], e[1]], [e[2], e[3]]);
		for (let e = 0; e < t.length; e++) {
			const r = new le(t[e], t[(e + 1) % t.length]);
			s.intersects(r) && i.push([s.xi, s.yi])
		}
		return i
	}

	function pe(e, t, i, s, r, o, n) {
		return [-i * o - s * r + i + o * e + r * t, n * (i * r - s * o) + s + -n * r * e + n * o * t]
	}
	class ue {
		constructor() {
			this.p = ""
		}
		get value() {
			return this.p.trim()
		}
		moveTo(e, t) {
			this.p = `${this.p}M ${e} ${t} `
		}
		bcurveTo(e, t, i, s, r, o) {
			this.p = `${this.p}C ${e} ${t}, ${i} ${s}, ${r} ${o} `
		}
	}

	function fe(e, t) {
		const i = document.createElementNS("http://www.w3.org/2000/svg", e);
		if (t)
			for (const e in t) i.setAttributeNS(null, e, t[e]);
		return i
	}

	function ge(e, t) {
		return 1 * (Math.random() * (t - e) + e)
	}

	function ye(e, t, i, s, r) {
		const o = Math.pow(e - i, 2) + Math.pow(t - s, 2);
		let n = 2;
		n * n * 100 > o && (n = Math.sqrt(o) / 10);
		const a = n / 2,
			d = .2 + .2 * Math.random();
		let l = 1.7 * (s - t) / 200,
			h = 1.7 * (e - i) / 200;
		l = ge(-l, l), h = ge(-h, h);
		const c = r || new ue;
		return c.moveTo(e + ge(-n, n), t + ge(-n, n)), c.bcurveTo(l + e + (i - e) * d + ge(-n, n), h + t + (s - t) * d + ge(-n, n), l + e + 2 * (i - e) * d + ge(-n, n), h + t + 2 * (s - t) * d + ge(-n, n), i + ge(-n, n), s + ge(-n, n)), c.moveTo(e + ge(-a, a), t + ge(-a, a)), c.bcurveTo(l + e + (i - e) * d + ge(-a, a), h + t + (s - t) * d + ge(-a, a), l + e + 2 * (i - e) * d + ge(-a, a), h + t + 2 * (s - t) * d + ge(-a, a), i + ge(-a, a), s + ge(-a, a)), c
	}

	function be(e, t, i, s, r = !1, o = !1, n) {
		n = n || new ue;
		const a = Math.pow(e - i, 2) + Math.pow(t - s, 2);
		let d = 2;
		d * d * 100 > a && (d = Math.sqrt(a) / 10);
		const l = d / 2,
			h = .2 + .2 * Math.random();
		let c = 1.7 * (s - t) / 200,
			p = 1.7 * (e - i) / 200;
		return c = ge(-c, c), p = ge(-p, p), r && n.moveTo(e + ge(-d, d), t + ge(-d, d)), o ? n.bcurveTo(c + e + (i - e) * h + ge(-l, l), p + t + (s - t) * h + ge(-l, l), c + e + 2 * (i - e) * h + ge(-l, l), p + t + 2 * (s - t) * h + ge(-l, l), i + ge(-l, l), s + ge(-l, l)) : n.bcurveTo(c + e + (i - e) * h + ge(-d, d), p + t + (s - t) * h + ge(-d, d), c + e + 2 * (i - e) * h + ge(-d, d), p + t + 2 * (s - t) * h + ge(-d, d), i + ge(-d, d), s + ge(-d, d)), n
	}

	function ve(e, t, i, s, r, o, n, a) {
		const d = ge(-.5, .5) - Math.PI / 2,
			l = [];
		l.push([ge(-o, o) + t + .9 * s * Math.cos(d - e), ge(-o, o) + i + .9 * r * Math.sin(d - e)]);
		for (let n = d; n < 2 * Math.PI + d - .01; n += e) l.push([ge(-o, o) + t + s * Math.cos(n), ge(-o, o) + i + r * Math.sin(n)]);
		return l.push([ge(-o, o) + t + s * Math.cos(d + 2 * Math.PI + .5 * n), ge(-o, o) + i + r * Math.sin(d + 2 * Math.PI + .5 * n)]), l.push([ge(-o, o) + t + .98 * s * Math.cos(d + n), ge(-o, o) + i + .98 * r * Math.sin(d + n)]), l.push([ge(-o, o) + t + .9 * s * Math.cos(d + .5 * n), ge(-o, o) + i + .9 * r * Math.sin(d + .5 * n)]),
			function (e, t) {
				const i = e.length;
				let s = t || new ue;
				if (i > 3) {
					const t = [],
						r = 1;
					s.moveTo(e[1][0], e[1][1]);
					for (let o = 1; o + 2 < i; o++) {
						const i = e[o];
						t[0] = [i[0], i[1]], t[1] = [i[0] + (r * e[o + 1][0] - r * e[o - 1][0]) / 6, i[1] + (r * e[o + 1][1] - r * e[o - 1][1]) / 6], t[2] = [e[o + 1][0] + (r * e[o][0] - r * e[o + 2][0]) / 6, e[o + 1][1] + (r * e[o][1] - r * e[o + 2][1]) / 6], t[3] = [e[o + 1][0], e[o + 1][1]], s.bcurveTo(t[1][0], t[1][1], t[2][0], t[2][1], t[3][0], t[3][1])
					}
				} else 3 === i ? (s.moveTo(e[0][0], e[0][1]), s.bcurveTo(e[1][0], e[1][1], e[2][0], e[2][1], e[2][0], e[2][1])) : 2 === i && (s = ye(e[0][0], e[0][1], e[1][0], e[1][1], s));
				return s
			}(l, a)
	}

	function me(e, t, i, s, r) {
		const o = fe("path", {
			d: ye(t, i, s, r).value
		});
		return e.appendChild(o), o
	}

	function we(e, t, i, s, r) {
		r -= 4;
		let o = ye(t += 2, i += 2, t + (s -= 4), i);
		o = ye(t + s, i, t + s, i + r, o), o = ye(t + s, i + r, t, i + r, o), o = ye(t, i + r, t, i, o);
		const n = fe("path", {
			d: o.value
		});
		return e.appendChild(n), n
	}

	function xe(e, t, i, s, r) {
		s = Math.max(s > 10 ? s - 4 : s - 1, 1), r = Math.max(r > 10 ? r - 4 : r - 1, 1);
		const o = 2 * Math.PI / 9;
		let n = Math.abs(s / 2),
			a = Math.abs(r / 2);
		n += ge(.05 * -n, .05 * n), a += ge(.05 * -a, .05 * a);
		let d = ve(o, t, i, n, a, 1, o * ge(.1, ge(.4, 1)));
		d = ve(o, t, i, n, a, 1.5, 0, d);
		const l = fe("path", {
			d: d.value
		});
		return e.appendChild(l), l
	}

	function ke(e) {
		const t = fe("g");
		let i = null;
		return e.forEach(e => {
			me(t, e[0][0], e[0][1], e[1][0], e[1][1]), i && me(t, i[0], i[1], e[0][0], e[0][1]), i = e[1]
		}), t
	}
	const Se = {
		bowing: .85,
		curveStepCount: 9,
		curveTightness: 0,
		dashGap: 0,
		dashOffset: 0,
		fill: "#000",
		fillStyle: "hachure",
		fillWeight: 1,
		hachureAngle: -41,
		hachureGap: 5,
		maxRandomnessOffset: 2,
		roughness: 1,
		simplification: 1,
		stroke: "#000",
		strokeWidth: 2,
		zigzagOffset: 0
	};

	function Re(e) {
		return ke(function (e, t) {
			const i = [];
			if (e && e.length) {
				let s = e[0][0],
					r = e[0][0],
					o = e[0][1],
					n = e[0][1];
				for (let t = 1; t < e.length; t++) s = Math.min(s, e[t][0]), r = Math.max(r, e[t][0]), o = Math.min(o, e[t][1]), n = Math.max(n, e[t][1]);
				const a = t.hachureAngle;
				let d = t.hachureGap;
				d < 0 && (d = 4 * t.strokeWidth), d = Math.max(d, .1);
				const l = a % 180 * (Math.PI / 180),
					h = Math.cos(l),
					c = Math.sin(l),
					p = Math.tan(l),
					u = new he(o - 1, n + 1, s - 1, r + 1, d, c, h, p);
				let f;
				for (; null != (f = u.nextLine());) {
					const t = ce(f, e);
					for (let e = 0; e < t.length; e++)
						if (e < t.length - 1) {
							const s = t[e],
								r = t[e + 1];
							i.push([s, r])
						}
				}
			}
			return i
		}(e, Se))
	}

	function _e(e, t, i, s) {
		return ke(function (e, t, i, s, r, o) {
			const n = [];
			let a = Math.abs(s / 2),
				d = Math.abs(r / 2);
			a += e.randOffset(.05 * a, o), d += e.randOffset(.05 * d, o);
			const l = o.hachureAngle;
			let h = o.hachureGap;
			h <= 0 && (h = 4 * o.strokeWidth);
			let c = o.fillWeight;
			c < 0 && (c = o.strokeWidth / 2);
			const p = l % 180 * (Math.PI / 180),
				u = Math.tan(p),
				f = d / a,
				g = Math.sqrt(f * u * f * u + 1),
				y = f * u / g,
				b = 1 / g,
				v = h / (a * d / Math.sqrt(d * b * (d * b) + a * y * (a * y)) / a);
			let m = Math.sqrt(a * a - (t - a + v) * (t - a + v));
			for (let e = t - a + v; e < t + a; e += v) {
				m = Math.sqrt(a * a - (t - e) * (t - e));
				const s = pe(e, i - m, t, i, y, b, f),
					r = pe(e, i + m, t, i, y, b, f);
				n.push([s, r])
			}
			return n
		}({
			randOffset: (e, t) => ge(-e, e)
		}, e, t, i, s, Se))
	}

	function Ce(e, t, i, s = !0, r = !0) {
		if (t) {
			const o = {
				bubbles: "boolean" != typeof s || s,
				composed: "boolean" != typeof r || r
			};
			i && (o.detail = i);
			const n = window.SlickCustomEvent || CustomEvent;
			e.dispatchEvent(new n(t, o))
		}
	}
	var Oe = function (e, t, i, s) {
			var r, o = arguments.length,
				n = o < 3 ? t : null === s ? s = Object.getOwnPropertyDescriptor(t, i) : s;
			if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) n = Reflect.decorate(e, t, i, s);
			else
				for (var a = e.length - 1; a >= 0; a--)(r = e[a]) && (n = (o < 3 ? r(n) : o > 3 ? r(t, i, n) : r(t, i)) || n);
			return o > 3 && n && Object.defineProperty(t, i, n), n
		},
		ze = function (e, t) {
			if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t)
		};
	e.WiredButton = class extends de {
		constructor() {
			super(), this.elevation = 1, this.disabled = !1, window.ResizeObserver && (this.resizeObserver = new window.ResizeObserver(() => {
				this.svg && this.wiredRender(!0)
			}))
		}
		static get styles() {
			return [ae, se `
        :host {
          display: inline-block;
          font-size: 14px;
        }
        path {
          transition: transform 0.05s ease;
        }
        button {
          position: relative;
          user-select: none;
          border: none;
          background: none;
          font-family: inherit;
          font-size: inherit;
          cursor: pointer;
          letter-spacing: 1.25px;
          text-transform: uppercase;
          text-align: center;
          padding: 10px;
          color: inherit;
          outline: none;
        }
        button[disabled] {
          opacity: 0.6 !important;
          background: rgba(0, 0, 0, 0.07);
          cursor: default;
          pointer-events: none;
        }
        button:active path {
          transform: scale(0.97) translate(1.5%, 1.5%);
        }
        button:focus path {
          stroke-width: 1.5;
        }
        button::-moz-focus-inner {
          border: 0;
        }
      `]
		}
		render() {
			return P `
    <button ?disabled="${this.disabled}">
      <slot @slotchange="${this.wiredRender}"></slot>
      <div id="overlay">
        <svg></svg>
      </div>
    </button>
    `
		}
		focus() {
			this.button ? this.button.focus() : super.focus()
		}
		canvasSize() {
			if (this.button) {
				const e = this.button.getBoundingClientRect(),
					t = Math.min(Math.max(1, this.elevation), 5);
				return [e.width + 2 * (t - 1), e.height + 2 * (t - 1)]
			}
			return this.lastSize
		}
		draw(e, t) {
			const i = Math.min(Math.max(1, this.elevation), 5),
				s = {
					width: t[0] - 2 * (i - 1),
					height: t[1] - 2 * (i - 1)
				};
			we(e, 0, 0, s.width, s.height);
			for (let t = 1; t < i; t++) me(e, 2 * t, s.height + 2 * t, s.width + 2 * t, s.height + 2 * t).style.opacity = `${(75-10*t)/100}`, me(e, s.width + 2 * t, s.height + 2 * t, s.width + 2 * t, 2 * t).style.opacity = `${(75-10*t)/100}`, me(e, 2 * t, s.height + 2 * t, s.width + 2 * t, s.height + 2 * t).style.opacity = `${(75-10*t)/100}`, me(e, s.width + 2 * t, s.height + 2 * t, s.width + 2 * t, 2 * t).style.opacity = `${(75-10*t)/100}`
		}
		updated() {
			super.updated(), this.attachResizeListener()
		}
		disconnectedCallback() {
			this.detachResizeListener()
		}
		attachResizeListener() {
			this.button && this.resizeObserver && this.resizeObserver.observe && this.resizeObserver.observe(this.button)
		}
		detachResizeListener() {
			this.button && this.resizeObserver && this.resizeObserver.unobserve && this.resizeObserver.unobserve(this.button)
		}
	}, Oe([J({
		type: Number
	}), ze("design:type", Object)], e.WiredButton.prototype, "elevation", void 0), Oe([J({
		type: Boolean,
		reflect: !0
	}), ze("design:type", Object)], e.WiredButton.prototype, "disabled", void 0), Oe([K("button"), ze("design:type", HTMLButtonElement)], e.WiredButton.prototype, "button", void 0), e.WiredButton = Oe([X("wired-button"), ze("design:paramtypes", [])], e.WiredButton);
	var Me = function (e, t, i, s) {
			var r, o = arguments.length,
				n = o < 3 ? t : null === s ? s = Object.getOwnPropertyDescriptor(t, i) : s;
			if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) n = Reflect.decorate(e, t, i, s);
			else
				for (var a = e.length - 1; a >= 0; a--)(r = e[a]) && (n = (o < 3 ? r(n) : o > 3 ? r(t, i, n) : r(t, i)) || n);
			return o > 3 && n && Object.defineProperty(t, i, n), n
		},
		We = function (e, t) {
			if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t)
		};
	e.WiredCalendar = class extends oe {
		constructor() {
			super(...arguments), this.elevation = 3, this.disabled = !1, this.initials = !1, this.format = e => this.months_short[e.getMonth()] + " " + e.getDate() + ", " + e.getFullYear(), this.weekdays_short = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], this.months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"], this.months_short = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], this.firstOfMonthDate = new Date, this.fDate = void 0, this.lDate = void 0, this.calendarRefSize = {
				width: 0,
				height: 0
			}, this.tblColWidth = 0, this.tblRowHeight = 0, this.tblHeadHeight = 0, this.monthYear = "", this.weeks = [
				[]
			]
		}
		connectedCallback() {
			super.connectedCallback(), this.resizeHandler || (this.resizeHandler = this.debounce(this.resized.bind(this), 200, !1, this), window.addEventListener("resize", this.resizeHandler)), this.localizeCalendarHeaders(), this.setInitialConditions(), this.computeCalendar(), this.refreshSelection(), setTimeout(() => this.updated())
		}
		disconnectedCallback() {
			super.disconnectedCallback && super.disconnectedCallback(), this.resizeHandler && (window.removeEventListener("resize", this.resizeHandler), delete this.resizeHandler)
		}
		static get styles() {
			return se `
    :host {
      display: inline-block;
      font-family: inherit;
      position: relative;
      outline: none;
      opacity: 0;
    }

    :host(.wired-disabled) {
      opacity: 0.5 !important;
      cursor: default;
      pointer-events: none;
      background: rgba(0, 0, 0, 0.02);
    }

    :host(.wired-rendered) {
      opacity: 1;
    }

    :host(:focus) path {
      stroke-width: 1.5;
    }

    .overlay {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      pointer-events: none;
    }

    svg {
      display: block;
    }

    .calendar path {
      stroke: var(--wired-calendar-color, black);
      stroke-width: 0.7;
      fill: transparent;
    }

    .selected path {
      stroke: var(--wired-calendar-selected-color, red);
      stroke-width: 2.5;
      fill: transparent;
      transition: transform 0.05s ease;
    }

    table {
      position: relative;
      background: var(--wired-calendar-bg, white);
      border-collapse: collapse;
      font-size: inherit;
      text-transform: capitalize;
      line-height: unset;
      cursor: default;
      overflow: hidden;
    }

    table:focus {
      outline: none !important;
    }

    td,
    th {
      border-radius: 4px;
      text-align: center;
    }

    td.disabled {
      color: var(--wired-calendar-disabled-color, lightgray);
      cursor: not-allowed;
    }

    td.dimmed {
      color: var(--wired-calendar-dimmed-color, gray);
    }

    td.selected {
      position: absolute;
    }

    td:not(.disabled):not(.selected):hover {
      background-color: #d0d0d0;
      cursor: pointer;
    }

    .pointer {
      cursor: pointer;
    }

    `
		}
		render() {
			return P `
    <table style="width:${this.calendarRefSize.width}px;height:${this.calendarRefSize.height}px;border:${8}px solid transparent"
            @mousedown="${this.onItemClick}"
            @touchstart="${this.onItemClick}">
      ${""}
      <tr class="top-header" style="height:${this.tblHeadHeight}px;">
        <th id="prevCal" class="pointer" @click="${this.onPrevClick}"><<</th>
        <th colSpan="5">${this.monthYear}</th>
        <th id="nextCal" class="pointer" @click="${this.onNextClick}">>></th>
      </tr>
      ${""}
      <tr class="header" style="height:${this.tblHeadHeight}px;">
        ${this.weekdays_short.map(e=>P`<th style="width: ${this.tblColWidth};">${this.initials?e[0]:e}</th>
            `)}
      </tr>
      ${""}
      ${this.weeks.map(e=>P`<tr style="height:${this.tblRowHeight}px;">
              ${""}
              ${e.map(e=>P`${e.selected?P`
                            <td class="selected" value="${e.value}">
                            <div style="width: ${this.tblColWidth}px; line-height:${this.tblRowHeight}px;">${e.text}</div>
                            <div class="overlay">
                              <svg id="svgTD" class="selected"></svg>
                            </div></td>
                        `:P`
                            <td .className="${e.disabled?"disabled":e.dimmed?"dimmed":""}"
                                value="${e.disabled?"":e.value}">${e.text}</td>
                        `}
                    `)}${""}
            </tr>`)}${""}
    </table>
    <div class="overlay">
      <svg id="svg" class="calendar"></svg>
    </div>
    `
		}
		firstUpdated() {
			this.setAttribute("role", "dialog")
		}
		updated(e) {
			e && e instanceof Map && (e.has("disabled") && this.refreshDisabledState(), e.has("selected") && this.refreshSelection());
			const t = this.shadowRoot.getElementById("svg");
			for (; t.hasChildNodes();) t.removeChild(t.lastChild);
			const i = this.getCalendarSize(),
				s = Math.min(Math.max(1, this.elevation), 5),
				r = i.width + 2 * (s - 1),
				o = i.height + 2 * (s - 1);
			t.setAttribute("width", `${r}`), t.setAttribute("height", `${o}`), we(t, 2, 2, i.width - 4, i.height - 4);
			for (let e = 1; e < s; e++) me(t, 2 * e, i.height - 4 + 2 * e, i.width - 4 + 2 * e, i.height - 4 + 2 * e).style.opacity = `${(85-10*e)/100}`, me(t, i.width - 4 + 2 * e, i.height - 4 + 2 * e, i.width - 4 + 2 * e, 2 * e).style.opacity = `${(85-10*e)/100}`, me(t, 2 * e, i.height - 4 + 2 * e, i.width - 4 + 2 * e, i.height - 4 + 2 * e).style.opacity = `${(85-10*e)/100}`, me(t, i.width - 4 + 2 * e, i.height - 4 + 2 * e, i.width - 4 + 2 * e, 2 * e).style.opacity = `${(85-10*e)/100}`;
			const n = this.shadowRoot.getElementById("svgTD");
			if (n) {
				for (; n.hasChildNodes();) n.removeChild(n.lastChild);
				const e = Math.max(1 * this.tblColWidth, 20),
					t = Math.max(.9 * this.tblRowHeight, 18),
					i = xe(n, this.tblColWidth / 2, this.tblRowHeight / 2, e, t);
				n.appendChild(i)
			}
			this.classList.add("wired-rendered")
		}
		setSelectedDate(e) {
			if (this.selected = e, this.selected) {
				const e = new Date(this.selected);
				this.firstOfMonthDate = new Date(e.getFullYear(), e.getMonth(), 1), this.computeCalendar(), this.requestUpdate(), this.fireSelected()
			}
		}
		localizeCalendarHeaders() {
			if (!this.locale) {
				const e = navigator;
				e.hasOwnProperty("systemLanguage") ? this.locale = e.systemLanguage : e.hasOwnProperty("browserLanguage") ? this.locale = e.browserLanguage : this.locale = (navigator.languages || ["en"])[0]
			}
			const e = (this.locale || "").toLowerCase();
			if ("en-us" !== e && "en" !== e) {
				const e = new Date,
					t = e.getUTCDay(),
					i = new Date(e.getTime() - 864e5 * t),
					s = new Date(i);
				for (let e = 0; e < 7; e++) s.setDate(i.getDate() + e), this.weekdays_short[e] = s.toLocaleString(this.locale, {
					weekday: "short"
				});
				e.setDate(1);
				for (let t = 0; t < 12; t++) e.setMonth(t), this.months[t] = e.toLocaleString(this.locale, {
					month: "long"
				})
			}
		}
		setInitialConditions() {
			let e;
			this.calendarRefSize = this.getCalendarSize(), this.selected ? (e = new Date(this.selected), this.value = {
				date: new Date(this.selected),
				text: this.selected
			}) : e = new Date, this.firstOfMonthDate = new Date(e.getFullYear(), e.getMonth(), 1), this.firstdate && (this.fDate = new Date(this.firstdate)), this.lastdate && (this.lDate = new Date(this.lastdate))
		}
		refreshSelection() {
			this.weeks.forEach(e => e.forEach(e => {
				e.selected = this.selected && e.value === this.selected || !1
			})), this.requestUpdate()
		}
		resized() {
			this.calendarRefSize = this.getCalendarSize(), this.computeCalendar(), this.refreshSelection()
		}
		getCalendarSize() {
			const e = this.getBoundingClientRect();
			return {
				width: e.width > 180 ? e.width : 320,
				height: e.height > 180 ? e.height : 320
			}
		}
		computeCellsizes(e, t) {
			this.tblColWidth = e.width / 7 - 2, this.tblHeadHeight = .25 * e.height / 2 - 2, this.tblRowHeight = .75 * e.height / t - 2
		}
		refreshDisabledState() {
			this.disabled ? this.classList.add("wired-disabled") : this.classList.remove("wired-disabled"), this.tabIndex = this.disabled ? -1 : +(this.getAttribute("tabindex") || 0)
		}
		onItemClick(e) {
			e.stopPropagation();
			const t = e.target;
			t && t.hasAttribute("value") && "" !== t.getAttribute("value") && (this.selected = t.getAttribute("value") || void 0, this.refreshSelection(), this.fireSelected())
		}
		fireSelected() {
			this.selected && (this.value = {
				date: new Date(this.selected),
				text: this.selected
			}, Ce(this, "selected", {
				selected: this.selected
			}))
		}
		computeCalendar() {
			this.monthYear = this.months[this.firstOfMonthDate.getMonth()] + " " + this.firstOfMonthDate.getFullYear();
			const e = new Date(this.firstOfMonthDate.getFullYear(), this.firstOfMonthDate.getMonth(), 1);
			let t = 0 - e.getDay();
			const i = Math.ceil((new Date(this.firstOfMonthDate.getFullYear(), this.firstOfMonthDate.getMonth() + 1, 0).getDate() - t) / 7);
			this.weeks = [];
			for (let s = 0; s < i; s++) {
				this.weeks[s] = [];
				for (let i = 0; i < 7; i++) {
					const r = new Date(e.getTime() + 864e5 * t),
						o = this.format(r);
					this.weeks[s][i] = {
						value: o,
						text: r.getDate().toString(),
						selected: o === this.selected,
						dimmed: r.getMonth() !== e.getMonth(),
						disabled: this.isDateOutOfRange(r)
					}, t++
				}
			}
			this.computeCellsizes(this.calendarRefSize, i)
		}
		onPrevClick() {
			void 0 !== this.fDate && new Date(this.fDate.getFullYear(), this.fDate.getMonth() - 1, 1).getMonth() === new Date(this.firstOfMonthDate.getFullYear(), this.firstOfMonthDate.getMonth() - 1, 1).getMonth() || (this.firstOfMonthDate = new Date(this.firstOfMonthDate.getFullYear(), this.firstOfMonthDate.getMonth() - 1, 1), this.computeCalendar(), this.refreshSelection())
		}
		onNextClick() {
			void 0 !== this.lDate && new Date(this.lDate.getFullYear(), this.lDate.getMonth() + 1, 1).getMonth() === new Date(this.firstOfMonthDate.getFullYear(), this.firstOfMonthDate.getMonth() + 1, 1).getMonth() || (this.firstOfMonthDate = new Date(this.firstOfMonthDate.getFullYear(), this.firstOfMonthDate.getMonth() + 1, 1), this.computeCalendar(), this.refreshSelection())
		}
		isDateOutOfRange(e) {
			return this.fDate && this.lDate ? e < this.fDate || this.lDate < e : this.fDate ? e < this.fDate : !!this.lDate && this.lDate < e
		}
		debounce(e, t, i, s) {
			let r = 0;
			return () => {
				const o = arguments,
					n = i && !r;
				clearTimeout(r), r = window.setTimeout(() => {
					r = 0, i || e.apply(s, o)
				}, t), n && e.apply(s, o)
			}
		}
	}, Me([J({
		type: Number
	}), We("design:type", Object)], e.WiredCalendar.prototype, "elevation", void 0), Me([J({
		type: String
	}), We("design:type", String)], e.WiredCalendar.prototype, "selected", void 0), Me([J({
		type: String
	}), We("design:type", String)], e.WiredCalendar.prototype, "firstdate", void 0), Me([J({
		type: String
	}), We("design:type", String)], e.WiredCalendar.prototype, "lastdate", void 0), Me([J({
		type: String
	}), We("design:type", String)], e.WiredCalendar.prototype, "locale", void 0), Me([J({
		type: Boolean,
		reflect: !0
	}), We("design:type", Object)], e.WiredCalendar.prototype, "disabled", void 0), Me([J({
		type: Boolean,
		reflect: !0
	}), We("design:type", Object)], e.WiredCalendar.prototype, "initials", void 0), Me([J({
		type: Object
	}), We("design:type", Object)], e.WiredCalendar.prototype, "value", void 0), Me([J({
		type: Function
	}), We("design:type", Function)], e.WiredCalendar.prototype, "format", void 0), e.WiredCalendar = Me([X("wired-calendar")], e.WiredCalendar);
	var Ne = function (e, t, i, s) {
			var r, o = arguments.length,
				n = o < 3 ? t : null === s ? s = Object.getOwnPropertyDescriptor(t, i) : s;
			if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) n = Reflect.decorate(e, t, i, s);
			else
				for (var a = e.length - 1; a >= 0; a--)(r = e[a]) && (n = (o < 3 ? r(n) : o > 3 ? r(t, i, n) : r(t, i)) || n);
			return o > 3 && n && Object.defineProperty(t, i, n), n
		},
		$e = function (e, t) {
			if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t)
		};
	e.WiredCard = class extends de {
		constructor() {
			super(), this.elevation = 1, window.ResizeObserver && (this.resizeObserver = new window.ResizeObserver(() => {
				this.svg && this.wiredRender()
			}))
		}
		static get styles() {
			return [ae, se `
        :host {
          display: inline-block;
          position: relative;
          padding: 10px;
        }
        .cardFill path {
          stroke-width: 3.5;
          stroke: var(--wired-card-background-fill);
        }
        path {
          stroke: var(--wired-card-background-fill, currentColor);
        }
      `]
		}
		render() {
			return P `
    <div id="overlay"><svg></svg></div>
    <div style="position: relative;">
      <slot @slotchange="${this.wiredRender}"></slot>
    </div>
    `
		}
		updated(e) {
			const t = e.has("fill");
			this.wiredRender(t), this.attachResizeListener()
		}
		disconnectedCallback() {
			this.detachResizeListener()
		}
		attachResizeListener() {
			this.resizeObserver && this.resizeObserver.observe ? this.resizeObserver.observe(this) : this.windowResizeHandler || (this.windowResizeHandler = () => this.wiredRender(), window.addEventListener("resize", this.windowResizeHandler, {
				passive: !0
			}))
		}
		detachResizeListener() {
			this.resizeObserver && this.resizeObserver.unobserve && this.resizeObserver.unobserve(this), this.windowResizeHandler && window.removeEventListener("resize", this.windowResizeHandler)
		}
		canvasSize() {
			const e = this.getBoundingClientRect(),
				t = Math.min(Math.max(1, this.elevation), 5);
			return [e.width + 2 * (t - 1), e.height + 2 * (t - 1)]
		}
		draw(e, t) {
			const i = Math.min(Math.max(1, this.elevation), 5),
				s = t[0] - 2 * (i - 1),
				r = t[1] - 2 * (i - 1);
			if (this.fill && this.fill.trim()) {
				const t = Re([
					[2, 2],
					[s - 4, 2],
					[s - 2, r - 4],
					[2, r - 4]
				]);
				t.classList.add("cardFill"), e.style.setProperty("--wired-card-background-fill", this.fill.trim()), e.appendChild(t)
			}
			we(e, 2, 2, s - 4, r - 4);
			for (let t = 1; t < i; t++) me(e, 2 * t, r - 4 + 2 * t, s - 4 + 2 * t, r - 4 + 2 * t).style.opacity = `${(85-10*t)/100}`, me(e, s - 4 + 2 * t, r - 4 + 2 * t, s - 4 + 2 * t, 2 * t).style.opacity = `${(85-10*t)/100}`, me(e, 2 * t, r - 4 + 2 * t, s - 4 + 2 * t, r - 4 + 2 * t).style.opacity = `${(85-10*t)/100}`, me(e, s - 4 + 2 * t, r - 4 + 2 * t, s - 4 + 2 * t, 2 * t).style.opacity = `${(85-10*t)/100}`
		}
	}, Ne([J({
		type: Number
	}), $e("design:type", Object)], e.WiredCard.prototype, "elevation", void 0), Ne([J({
		type: String
	}), $e("design:type", String)], e.WiredCard.prototype, "fill", void 0), e.WiredCard = Ne([X("wired-card"), $e("design:paramtypes", [])], e.WiredCard);
	var Pe = function (e, t, i, s) {
			var r, o = arguments.length,
				n = o < 3 ? t : null === s ? s = Object.getOwnPropertyDescriptor(t, i) : s;
			if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) n = Reflect.decorate(e, t, i, s);
			else
				for (var a = e.length - 1; a >= 0; a--)(r = e[a]) && (n = (o < 3 ? r(n) : o > 3 ? r(t, i, n) : r(t, i)) || n);
			return o > 3 && n && Object.defineProperty(t, i, n), n
		},
		je = function (e, t) {
			if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t)
		};
	e.WiredCheckbox = class extends de {
		constructor() {
			super(...arguments), this.checked = !1, this.disabled = !1, this.focused = !1
		}
		static get styles() {
			return [ae, se `
      :host {
        display: inline-block;
        font-family: inherit;
      }
      :host([disabled]) {
        opacity: 0.6 !important;
        cursor: default;
        pointer-events: none;
      }
      :host([disabled]) svg {
        background: rgba(0, 0, 0, 0.07);
      }

      #container {
        display: flex;
        flex-direction: row;
        position: relative;
        user-select: none;
        min-height: 24px;
        cursor: pointer;
      }
      span {
        margin-left: 1.5ex;
        line-height: 24px;
      }
      input {
        opacity: 0;
      }
      path {
        stroke: var(--wired-checkbox-icon-color, currentColor);
        stroke-width: var(--wired-checkbox-default-swidth, 0.7);
      }
      g path {
        stroke-width: 2.5;
      }
      #container.focused {
        --wired-checkbox-default-swidth: 1.5;
      }
      `]
		}
		focus() {
			this.input ? this.input.focus() : super.focus()
		}
		wiredRender(e = !1) {
			super.wiredRender(e), this.refreshCheckVisibility()
		}
		render() {
			return P `
    <label id="container" class="${this.focused?"focused":""}">
      <input type="checkbox" .checked="${this.checked}" ?disabled="${this.disabled}" 
        @change="${this.onChange}"
        @focus="${()=>this.focused=!0}"
        @blur="${()=>this.focused=!1}">
      <span><slot></slot></span>
      <div id="overlay"><svg></svg></div>
    </label>
    `
		}
		onChange() {
			this.checked = this.input.checked, this.refreshCheckVisibility(), Ce(this, "change", {
				checked: this.checked
			})
		}
		canvasSize() {
			return [24, 24]
		}
		draw(e, t) {
			we(e, 0, 0, t[0], t[1]), this.svgCheck = fe("g"), e.appendChild(this.svgCheck), me(this.svgCheck, .3 * t[0], .4 * t[1], .5 * t[0], .7 * t[1]), me(this.svgCheck, .5 * t[0], .7 * t[1], t[0] + 5, -5)
		}
		refreshCheckVisibility() {
			this.svgCheck && (this.svgCheck.style.display = this.checked ? "" : "none")
		}
	}, Pe([J({
		type: Boolean
	}), je("design:type", Object)], e.WiredCheckbox.prototype, "checked", void 0), Pe([J({
		type: Boolean,
		reflect: !0
	}), je("design:type", Object)], e.WiredCheckbox.prototype, "disabled", void 0), Pe([J(), je("design:type", Object)], e.WiredCheckbox.prototype, "focused", void 0), Pe([K("input"), je("design:type", HTMLInputElement)], e.WiredCheckbox.prototype, "input", void 0), e.WiredCheckbox = Pe([X("wired-checkbox")], e.WiredCheckbox);
	var Ae = function (e, t, i, s) {
			var r, o = arguments.length,
				n = o < 3 ? t : null === s ? s = Object.getOwnPropertyDescriptor(t, i) : s;
			if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) n = Reflect.decorate(e, t, i, s);
			else
				for (var a = e.length - 1; a >= 0; a--)(r = e[a]) && (n = (o < 3 ? r(n) : o > 3 ? r(t, i, n) : r(t, i)) || n);
			return o > 3 && n && Object.defineProperty(t, i, n), n
		},
		Te = function (e, t) {
			if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t)
		};
	e.WiredCombo = class extends oe {
		constructor() {
			super(...arguments), this.disabled = !1, this.cardShowing = !1, this.itemNodes = []
		}
		static get styles() {
			return se `
      :host {
        display: inline-block;
        font-family: inherit;
        position: relative;
        outline: none;
        opacity: 0;
      }
    
      :host(.wired-disabled) {
        opacity: 0.5 !important;
        cursor: default;
        pointer-events: none;
        background: rgba(0, 0, 0, 0.02);
      }
      
      :host(.wired-rendered) {
        opacity: 1;
      }
  
      :host(:focus) path {
        stroke-width: 1.5;
      }
    
      #container {
        white-space: nowrap;
        position: relative;
      }
    
      .inline {
        display: inline-block;
        vertical-align: top
      }
    
      #textPanel {
        min-width: 90px;
        min-height: 18px;
        padding: 8px;
      }
    
      #dropPanel {
        width: 34px;
        cursor: pointer;
      }
    
      .overlay {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        pointer-events: none;
      }
    
      svg {
        display: block;
      }
    
      path {
        stroke: currentColor;
        stroke-width: 0.7;
        fill: transparent;
      }
    
      #card {
        display: block;
        position: absolute;
        background: var(--wired-combo-popup-bg, white);
        z-index: 1;
        box-shadow: 1px 5px 15px -6px rgba(0, 0, 0, 0.8);
        padding: 8px;
      }
  
      ::slotted(wired-item) {
        display: block;
      }
    `
		}
		render() {
			return P `
    <div id="container" @click="${this.onCombo}">
      <div id="textPanel" class="inline">
        <span>${this.value&&this.value.text}</span>
      </div>
      <div id="dropPanel" class="inline"></div>
      <div class="overlay">
        <svg></svg>
      </div>
    </div>
    <wired-card id="card" tabindex="-1" role="listbox" @mousedown="${this.onItemClick}" @touchstart="${this.onItemClick}" style="display: none;">
      <slot id="slot"></slot>
    </wired-card>
    `
		}
		refreshDisabledState() {
			this.disabled ? this.classList.add("wired-disabled") : this.classList.remove("wired-disabled"), this.tabIndex = this.disabled ? -1 : +(this.getAttribute("tabindex") || 0)
		}
		firstUpdated() {
			this.setAttribute("role", "combobox"), this.setAttribute("aria-haspopup", "listbox"), this.refreshSelection(), this.addEventListener("blur", () => {
				this.cardShowing && this.setCardShowing(!1)
			}), this.addEventListener("keydown", e => {
				switch (e.keyCode) {
					case 37:
					case 38:
						e.preventDefault(), this.selectPrevious();
						break;
					case 39:
					case 40:
						e.preventDefault(), this.selectNext();
						break;
					case 27:
						e.preventDefault(), this.cardShowing && this.setCardShowing(!1);
						break;
					case 13:
						e.preventDefault(), this.setCardShowing(!this.cardShowing);
						break;
					case 32:
						e.preventDefault(), this.cardShowing || this.setCardShowing(!0)
				}
			})
		}
		updated(e) {
			e.has("disabled") && this.refreshDisabledState();
			const t = this.svg;
			for (; t.hasChildNodes();) t.removeChild(t.lastChild);
			const i = this.shadowRoot.getElementById("container").getBoundingClientRect();
			t.setAttribute("width", `${i.width}`), t.setAttribute("height", `${i.height}`);
			const s = this.shadowRoot.getElementById("textPanel").getBoundingClientRect();
			this.shadowRoot.getElementById("dropPanel").style.minHeight = s.height + "px", we(t, 0, 0, s.width, s.height);
			const r = s.width - 4;
			we(t, r, 0, 34, s.height);
			const o = Math.max(0, Math.abs((s.height - 24) / 2)),
				n = function (e, t) {
					let i;
					const s = t.length;
					if (s > 2)
						for (let e = 0; e < 2; e++) {
							let r = !0;
							for (let e = 1; e < s; e++) i = be(t[e - 1][0], t[e - 1][1], t[e][0], t[e][1], r, e > 0, i), r = !1;
							i = be(t[s - 1][0], t[s - 1][1], t[0][0], t[0][1], r, e > 0, i)
						} else i = 2 === s ? ye(t[0][0], t[0][1], t[1][0], t[1][1]) : new ue;
					const r = fe("path", {
						d: i.value
					});
					return e.appendChild(r), r
				}(t, [
					[r + 8, 5 + o],
					[r + 26, 5 + o],
					[r + 17, o + Math.min(s.height, 18)]
				]);
			if (n.style.fill = "currentColor", n.style.pointerEvents = this.disabled ? "none" : "auto", n.style.cursor = "pointer", this.classList.add("wired-rendered"), this.setAttribute("aria-expanded", `${this.cardShowing}`), !this.itemNodes.length) {
				this.itemNodes = [];
				const e = this.shadowRoot.getElementById("slot").assignedNodes();
				if (e && e.length)
					for (let t = 0; t < e.length; t++) {
						const i = e[t];
						"WIRED-ITEM" === i.tagName && (i.setAttribute("role", "option"), this.itemNodes.push(i))
					}
			}
		}
		refreshSelection() {
			this.lastSelectedItem && (this.lastSelectedItem.selected = !1, this.lastSelectedItem.removeAttribute("aria-selected"));
			const e = this.shadowRoot.getElementById("slot").assignedNodes();
			if (e) {
				let t = null;
				for (let i = 0; i < e.length; i++) {
					const s = e[i];
					if ("WIRED-ITEM" === s.tagName) {
						const e = s.value || s.getAttribute("value") || "";
						if (this.selected && e === this.selected) {
							t = s;
							break
						}
					}
				}
				this.lastSelectedItem = t || void 0, this.lastSelectedItem && (this.lastSelectedItem.selected = !0, this.lastSelectedItem.setAttribute("aria-selected", "true")), this.value = t ? {
					value: t.value || "",
					text: t.textContent || ""
				} : void 0
			}
		}
		setCardShowing(e) {
			this.card && (this.cardShowing = e, this.card.style.display = e ? "" : "none", e && setTimeout(() => {
				this.shadowRoot.getElementById("slot").assignedNodes().filter(e => e.nodeType === Node.ELEMENT_NODE).forEach(e => {
					const t = e;
					t.requestUpdate && t.requestUpdate()
				})
			}, 10), this.setAttribute("aria-expanded", `${this.cardShowing}`))
		}
		onItemClick(e) {
			e.stopPropagation(), this.selected = e.target.value, this.refreshSelection(), this.fireSelected(), setTimeout(() => {
				this.setCardShowing(!1)
			})
		}
		fireSelected() {
			Ce(this, "selected", {
				selected: this.selected
			})
		}
		selectPrevious() {
			const e = this.itemNodes;
			if (e.length) {
				let t = -1;
				for (let i = 0; i < e.length; i++)
					if (e[i] === this.lastSelectedItem) {
						t = i;
						break
					} t < 0 ? t = 0 : 0 === t ? t = e.length - 1 : t--, this.selected = e[t].value || "", this.refreshSelection(), this.fireSelected()
			}
		}
		selectNext() {
			const e = this.itemNodes;
			if (e.length) {
				let t = -1;
				for (let i = 0; i < e.length; i++)
					if (e[i] === this.lastSelectedItem) {
						t = i;
						break
					} t < 0 || t >= e.length - 1 ? t = 0 : t++, this.selected = e[t].value || "", this.refreshSelection(), this.fireSelected()
			}
		}
		onCombo(e) {
			e.stopPropagation(), this.setCardShowing(!this.cardShowing)
		}
	}, Ae([J({
		type: Object
	}), Te("design:type", Object)], e.WiredCombo.prototype, "value", void 0), Ae([J({
		type: String
	}), Te("design:type", String)], e.WiredCombo.prototype, "selected", void 0), Ae([J({
		type: Boolean,
		reflect: !0
	}), Te("design:type", Object)], e.WiredCombo.prototype, "disabled", void 0), Ae([K("svg"), Te("design:type", SVGSVGElement)], e.WiredCombo.prototype, "svg", void 0), Ae([K("#card"), Te("design:type", HTMLDivElement)], e.WiredCombo.prototype, "card", void 0), e.WiredCombo = Ae([X("wired-combo")], e.WiredCombo);
	var Ie = function (e, t, i, s) {
			var r, o = arguments.length,
				n = o < 3 ? t : null === s ? s = Object.getOwnPropertyDescriptor(t, i) : s;
			if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) n = Reflect.decorate(e, t, i, s);
			else
				for (var a = e.length - 1; a >= 0; a--)(r = e[a]) && (n = (o < 3 ? r(n) : o > 3 ? r(t, i, n) : r(t, i)) || n);
			return o > 3 && n && Object.defineProperty(t, i, n), n
		},
		Ee = function (e, t) {
			if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t)
		};
	e.WiredDialog = class extends oe {
		constructor() {
			super(...arguments), this.elevation = 5, this.open = !1
		}
		static get styles() {
			return se `
      #container {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        pointer-events: none;
        z-index: var(--wired-dialog-z-index, 100);
      }
      #container::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0,0,0,0.4);
        opacity: 0;
        transition: opacity 0.5s ease;
      }
      #overlay {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        opacity: 0;
        transform: translateY(150px);
        transition: transform 0.5s ease, opacity 0.5s ease;
      }
      .layout.vertical {
        display: -ms-flexbox;
        display: -webkit-flex;
        display: flex;
        -ms-flex-direction: column;
        -webkit-flex-direction: column;
        flex-direction: column;
      }
      .flex {
        -ms-flex: 1 1 0.000000001px;
        -webkit-flex: 1;
        flex: 1;
        -webkit-flex-basis: 0.000000001px;
        flex-basis: 0.000000001px;
      }
      wired-card {
        display: inline-block;
        background: white;
        text-align: left;
      }

      :host([open]) #container {
        pointer-events: auto;
      }
      :host([open]) #container::before {
        opacity: 1;
      }
      :host([open]) #overlay {
        opacity: 1;
        transform: none;
      }
    `
		}
		render() {
			return P `
    <div id="container">
      <div id="overlay" class="vertical layout">
        <div class="flex"></div>
        <div style="text-align: center; padding: 5px;">
          <wired-card .elevation="${this.elevation}"><slot></slot></wired-card>
        </div>
        <div class="flex"></div>
      </div>
    </div>
    `
		}
		updated() {
			this.card && this.card.wiredRender(!0)
		}
	}, Ie([J({
		type: Number
	}), Ee("design:type", Object)], e.WiredDialog.prototype, "elevation", void 0), Ie([J({
		type: Boolean,
		reflect: !0
	}), Ee("design:type", Object)], e.WiredDialog.prototype, "open", void 0), Ie([K("wired-card"), Ee("design:type", e.WiredCard)], e.WiredDialog.prototype, "card", void 0), e.WiredDialog = Ie([X("wired-dialog")], e.WiredDialog);
	var De = function (e, t, i, s) {
			var r, o = arguments.length,
				n = o < 3 ? t : null === s ? s = Object.getOwnPropertyDescriptor(t, i) : s;
			if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) n = Reflect.decorate(e, t, i, s);
			else
				for (var a = e.length - 1; a >= 0; a--)(r = e[a]) && (n = (o < 3 ? r(n) : o > 3 ? r(t, i, n) : r(t, i)) || n);
			return o > 3 && n && Object.defineProperty(t, i, n), n
		},
		Le = function (e, t) {
			if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t)
		};
	e.WiredDivider = class extends de {
		constructor() {
			super(...arguments), this.elevation = 1
		}
		static get styles() {
			return [ae, se `
        :host {
          display: block;
          position: relative;
        }
      `]
		}
		render() {
			return P `<svg></svg>`
		}
		canvasSize() {
			const e = this.getBoundingClientRect(),
				t = Math.min(Math.max(1, this.elevation), 5);
			return [e.width, 6 * t]
		}
		draw(e, t) {
			const i = Math.min(Math.max(1, this.elevation), 5);
			for (let s = 0; s < i; s++) me(e, 0, 6 * s + 3, t[0], 6 * s + 3)
		}
	}, De([J({
		type: Number
	}), Le("design:type", Object)], e.WiredDivider.prototype, "elevation", void 0), e.WiredDivider = De([X("wired-divider")], e.WiredDivider);
	var Be = function (e, t, i, s) {
			var r, o = arguments.length,
				n = o < 3 ? t : null === s ? s = Object.getOwnPropertyDescriptor(t, i) : s;
			if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) n = Reflect.decorate(e, t, i, s);
			else
				for (var a = e.length - 1; a >= 0; a--)(r = e[a]) && (n = (o < 3 ? r(n) : o > 3 ? r(t, i, n) : r(t, i)) || n);
			return o > 3 && n && Object.defineProperty(t, i, n), n
		},
		Ve = function (e, t) {
			if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t)
		};
	e.WiredFab = class extends de {
		constructor() {
			super(...arguments), this.disabled = !1
		}
		static get styles() {
			return [ae, se `
        :host {
          display: inline-block;
          font-size: 14px;
          color: #fff;
        }
        button {
          position: relative;
          user-select: none;
          border: none;
          background: none;
          font-family: inherit;
          font-size: inherit;
          cursor: pointer;
          letter-spacing: 1.25px;
          text-transform: uppercase;
          text-align: center;
          padding: 16px;
          color: inherit;
          outline: none;
          border-radius: 50%;
        }
        button[disabled] {
          opacity: 0.6 !important;
          background: rgba(0, 0, 0, 0.07);
          cursor: default;
          pointer-events: none;
        }
        button::-moz-focus-inner {
          border: 0;
        }
        button ::slotted(*) {
          position: relative;
          font-size: var(--wired-icon-size, 24px);
          transition: transform 0.2s ease, opacity 0.2s ease;
          opacity: 0.85;
        }
        path {
          stroke: var(--wired-fab-bg-color, #018786);
          stroke-width: 3;
          fill: transparent;
        }

        button:focus ::slotted(*) {
          opacity: 1;
        }
        button:active ::slotted(*) {
          opacity: 1;
          transform: scale(1.15);
        }
      `]
		}
		render() {
			return P `
    <button ?disabled="${this.disabled}">
      <div id="overlay">
        <svg></svg>
      </div>
      <slot @slotchange="${this.wiredRender}"></slot>
    </button>
    `
		}
		canvasSize() {
			if (this.button) {
				const e = this.button.getBoundingClientRect();
				return [e.width, e.height]
			}
			return this.lastSize
		}
		draw(e, t) {
			const i = Math.min(t[0], t[1]),
				s = _e(i / 2, i / 2, i, i);
			e.appendChild(s)
		}
	}, Be([J({
		type: Boolean,
		reflect: !0
	}), Ve("design:type", Object)], e.WiredFab.prototype, "disabled", void 0), Be([K("button"), Ve("design:type", HTMLButtonElement)], e.WiredFab.prototype, "button", void 0), e.WiredFab = Be([X("wired-fab")], e.WiredFab);
	var He = function (e, t, i, s) {
			var r, o = arguments.length,
				n = o < 3 ? t : null === s ? s = Object.getOwnPropertyDescriptor(t, i) : s;
			if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) n = Reflect.decorate(e, t, i, s);
			else
				for (var a = e.length - 1; a >= 0; a--)(r = e[a]) && (n = (o < 3 ? r(n) : o > 3 ? r(t, i, n) : r(t, i)) || n);
			return o > 3 && n && Object.defineProperty(t, i, n), n
		},
		Ue = function (e, t) {
			if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t)
		};
	e.WiredIconButton = class extends de {
		constructor() {
			super(...arguments), this.disabled = !1
		}
		static get styles() {
			return [ae, se `
        :host {
          display: inline-block;
          font-size: 14px;
        }
        path {
          transition: transform 0.05s ease;
        }
        button {
          position: relative;
          user-select: none;
          border: none;
          background: none;
          font-family: inherit;
          font-size: inherit;
          cursor: pointer;
          letter-spacing: 1.25px;
          text-transform: uppercase;
          text-align: center;
          padding: 10px;
          color: inherit;
          outline: none;
          border-radius: 50%;
        }
        button[disabled] {
          opacity: 0.6 !important;
          background: rgba(0, 0, 0, 0.07);
          cursor: default;
          pointer-events: none;
        }
        button:active path {
          transform: scale(0.97) translate(1.5%, 1.5%);
        }
        button:focus path {
          stroke-width: 1.5;
        }
        button::-moz-focus-inner {
          border: 0;
        }
        button ::slotted(*) {
          position: relative;
          font-size: var(--wired-icon-size, 24px);
        }
      `]
		}
		render() {
			return P `
    <button ?disabled="${this.disabled}">
      <slot @slotchange="${this.wiredRender}"></slot>
      <div id="overlay">
        <svg></svg>
      </div>
    </button>
    `
		}
		canvasSize() {
			if (this.button) {
				const e = this.button.getBoundingClientRect();
				return [e.width, e.height]
			}
			return this.lastSize
		}
		draw(e, t) {
			const i = Math.min(t[0], t[1]);
			e.setAttribute("width", `${i}`), e.setAttribute("height", `${i}`), xe(e, i / 2, i / 2, i, i)
		}
	}, He([J({
		type: Boolean,
		reflect: !0
	}), Ue("design:type", Object)], e.WiredIconButton.prototype, "disabled", void 0), He([K("button"), Ue("design:type", HTMLButtonElement)], e.WiredIconButton.prototype, "button", void 0), e.WiredIconButton = He([X("wired-icon-button")], e.WiredIconButton);
	var Fe = function (e, t, i, s) {
			var r, o = arguments.length,
				n = o < 3 ? t : null === s ? s = Object.getOwnPropertyDescriptor(t, i) : s;
			if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) n = Reflect.decorate(e, t, i, s);
			else
				for (var a = e.length - 1; a >= 0; a--)(r = e[a]) && (n = (o < 3 ? r(n) : o > 3 ? r(t, i, n) : r(t, i)) || n);
			return o > 3 && n && Object.defineProperty(t, i, n), n
		},
		qe = function (e, t) {
			if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t)
		};
	e.WiredImage = class extends de {
		constructor() {
			super(), this.elevation = 1, this.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=", window.ResizeObserver && (this.resizeObserver = new window.ResizeObserver(() => {
				this.svg && this.wiredRender()
			}))
		}
		static get styles() {
			return [ae, se `
        :host {
          display: inline-block;
          position: relative;
          line-height: 1;
          padding: 3px;
        }
        img {
          display: block;
          box-sizing: border-box;
          max-width: 100%;
          max-height: 100%;
        }
        path {
          stroke-width: 1;
        }
      `]
		}
		render() {
			return P `
    <img src="${this.src}">
    <div id="overlay"><svg></svg></div>
    `
		}
		updated() {
			super.updated(), this.attachResizeListener()
		}
		disconnectedCallback() {
			this.detachResizeListener()
		}
		attachResizeListener() {
			this.resizeObserver && this.resizeObserver.observe ? this.resizeObserver.observe(this) : this.windowResizeHandler || (this.windowResizeHandler = () => this.wiredRender(), window.addEventListener("resize", this.windowResizeHandler, {
				passive: !0
			}))
		}
		detachResizeListener() {
			this.resizeObserver && this.resizeObserver.unobserve && this.resizeObserver.unobserve(this), this.windowResizeHandler && window.removeEventListener("resize", this.windowResizeHandler)
		}
		canvasSize() {
			const e = this.getBoundingClientRect(),
				t = Math.min(Math.max(1, this.elevation), 5);
			return [e.width + 2 * (t - 1), e.height + 2 * (t - 1)]
		}
		draw(e, t) {
			const i = Math.min(Math.max(1, this.elevation), 5),
				s = t[0] - 2 * (i - 1),
				r = t[1] - 2 * (i - 1);
			we(e, 2, 2, s - 4, r - 4);
			for (let t = 1; t < i; t++) me(e, 2 * t, r - 4 + 2 * t, s - 4 + 2 * t, r - 4 + 2 * t).style.opacity = `${(85-10*t)/100}`, me(e, s - 4 + 2 * t, r - 4 + 2 * t, s - 4 + 2 * t, 2 * t).style.opacity = `${(85-10*t)/100}`, me(e, 2 * t, r - 4 + 2 * t, s - 4 + 2 * t, r - 4 + 2 * t).style.opacity = `${(85-10*t)/100}`, me(e, s - 4 + 2 * t, r - 4 + 2 * t, s - 4 + 2 * t, 2 * t).style.opacity = `${(85-10*t)/100}`
		}
	}, Fe([J({
		type: Number
	}), qe("design:type", Object)], e.WiredImage.prototype, "elevation", void 0), Fe([J({
		type: String
	}), qe("design:type", String)], e.WiredImage.prototype, "src", void 0), e.WiredImage = Fe([X("wired-image"), qe("design:paramtypes", [])], e.WiredImage);
	var Ye = function (e, t, i, s) {
			var r, o = arguments.length,
				n = o < 3 ? t : null === s ? s = Object.getOwnPropertyDescriptor(t, i) : s;
			if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) n = Reflect.decorate(e, t, i, s);
			else
				for (var a = e.length - 1; a >= 0; a--)(r = e[a]) && (n = (o < 3 ? r(n) : o > 3 ? r(t, i, n) : r(t, i)) || n);
			return o > 3 && n && Object.defineProperty(t, i, n), n
		},
		Xe = function (e, t) {
			if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t)
		};
	e.WiredInput = class extends de {
		constructor() {
			super(...arguments), this.disabled = !1, this.placeholder = "", this.type = "text", this.autocomplete = "", this.autocapitalize = "", this.autocorrect = "", this.required = !1, this.autofocus = !1, this.readonly = !1
		}
		static get styles() {
			return [ae, se `
        :host {
          display: inline-block;
          position: relative;
          padding: 5px;
          font-family: sans-serif;
          width: 150px;
          outline: none;
        }
        :host([disabled]) {
          opacity: 0.6 !important;
          cursor: default;
          pointer-events: none;
        }
        :host([disabled]) svg {
          background: rgba(0, 0, 0, 0.07);
        }
        input {
          display: block;
          width: 100%;
          box-sizing: border-box;
          outline: none;
          border: none;
          font-family: inherit;
          font-size: inherit;
          font-weight: inherit;
          color: inherit;
          padding: 6px;
        }
      `]
		}
		render() {
			return P `
    <input name="${this.name}" type="${this.type}" placeholder="${this.placeholder}" ?disabled="${this.disabled}"
      ?required="${this.required}" autocomplete="${this.autocomplete}" ?autofocus="${this.autofocus}" minlength="${this.minlength}"
      maxlength="${this.maxlength}" min="${this.min}" max="${this.max}" step="${this.step}" ?readonly="${this.readonly}"
      size="${this.size}" autocapitalize="${this.autocapitalize}" autocorrect="${this.autocorrect}" 
      @change="${this.refire}" @input="${this.refire}">
    <div id="overlay">
      <svg></svg>
    </div>
    `
		}
		get input() {
			return this.textInput
		}
		get value() {
			const e = this.input;
			return e && e.value || ""
		}
		set value(e) {
			if (this.shadowRoot) {
				const t = this.input;
				t && (t.value = e)
			} else this.pendingValue = e
		}
		firstUpdated() {
			this.value = this.pendingValue || this.value || this.getAttribute("value") || "", delete this.pendingValue
		}
		canvasSize() {
			const e = this.getBoundingClientRect();
			return [e.width, e.height]
		}
		draw(e, t) {
			we(e, 2, 2, t[0] - 2, t[1] - 2)
		}
		refire(e) {
			e.stopPropagation(), Ce(this, e.type, {
				sourceEvent: e
			})
		}
	}, Ye([J({
		type: Boolean,
		reflect: !0
	}), Xe("design:type", Object)], e.WiredInput.prototype, "disabled", void 0), Ye([J({
		type: String
	}), Xe("design:type", Object)], e.WiredInput.prototype, "placeholder", void 0), Ye([J({
		type: String
	}), Xe("design:type", String)], e.WiredInput.prototype, "name", void 0), Ye([J({
		type: String
	}), Xe("design:type", String)], e.WiredInput.prototype, "min", void 0), Ye([J({
		type: String
	}), Xe("design:type", String)], e.WiredInput.prototype, "max", void 0), Ye([J({
		type: String
	}), Xe("design:type", String)], e.WiredInput.prototype, "step", void 0), Ye([J({
		type: String
	}), Xe("design:type", Object)], e.WiredInput.prototype, "type", void 0), Ye([J({
		type: String
	}), Xe("design:type", Object)], e.WiredInput.prototype, "autocomplete", void 0), Ye([J({
		type: String
	}), Xe("design:type", Object)], e.WiredInput.prototype, "autocapitalize", void 0), Ye([J({
		type: String
	}), Xe("design:type", Object)], e.WiredInput.prototype, "autocorrect", void 0), Ye([J({
		type: Boolean
	}), Xe("design:type", Object)], e.WiredInput.prototype, "required", void 0), Ye([J({
		type: Boolean
	}), Xe("design:type", Object)], e.WiredInput.prototype, "autofocus", void 0), Ye([J({
		type: Boolean
	}), Xe("design:type", Object)], e.WiredInput.prototype, "readonly", void 0), Ye([J({
		type: Number
	}), Xe("design:type", Number)], e.WiredInput.prototype, "minlength", void 0), Ye([J({
		type: Number
	}), Xe("design:type", Number)], e.WiredInput.prototype, "maxlength", void 0), Ye([J({
		type: Number
	}), Xe("design:type", Number)], e.WiredInput.prototype, "size", void 0), Ye([K("input"), Xe("design:type", HTMLInputElement)], e.WiredInput.prototype, "textInput", void 0), e.WiredInput = Ye([X("wired-input")], e.WiredInput);
	var Ge = function (e, t, i, s) {
			var r, o = arguments.length,
				n = o < 3 ? t : null === s ? s = Object.getOwnPropertyDescriptor(t, i) : s;
			if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) n = Reflect.decorate(e, t, i, s);
			else
				for (var a = e.length - 1; a >= 0; a--)(r = e[a]) && (n = (o < 3 ? r(n) : o > 3 ? r(t, i, n) : r(t, i)) || n);
			return o > 3 && n && Object.defineProperty(t, i, n), n
		},
		Je = function (e, t) {
			if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t)
		};
	e.WiredItem = class extends de {
		constructor() {
			super(...arguments), this.value = "", this.name = "", this.selected = !1
		}
		static get styles() {
			return [ae, se `
      :host {
        display: inline-block;
        font-size: 14px;
        text-align: left;
      }
      button {
        cursor: pointer;
        outline: none;
        overflow: hidden;
        color: inherit;
        user-select: none;
        position: relative;
        font-family: inherit;
        text-align: inherit;
        font-size: inherit;
        letter-spacing: 1.25px;
        padding: 1px 10px;
        min-height: 36px;
        text-transform: inherit;
        background: none;
        border: none;
        transition: background-color 0.3s ease, color 0.3s ease;
        width: 100%;
        box-sizing: border-box;
        white-space: nowrap;
      }
      button.selected {
        color: var(--wired-item-selected-color, #fff);
      }
      button::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: currentColor;
        opacity: 0;
      }
      button span {
        display: inline-block;
        transition: transform 0.2s ease;
        position: relative;
      }
      button:active span {
        transform: scale(1.02);
      }
      #overlay {
        display: none;
      }
      button.selected #overlay {
        display: block;
      }
      svg path {
        stroke: var(--wired-item-selected-bg, #000);
        stroke-width: 2.75;
        fill: transparent;
        transition: transform 0.05s ease;
      }
      @media (hover: hover) {
        button:hover::before {
          opacity: 0.05;
        }
      }
      `]
		}
		render() {
			return P `
    <button class="${this.selected?"selected":""}">
      <div id="overlay"><svg></svg></div>
      <span><slot></slot></span>
    </button>`
		}
		canvasSize() {
			const e = this.getBoundingClientRect();
			return [e.width, e.height]
		}
		draw(e, t) {
			const i = Re([
				[0, 0],
				[t[0], 0],
				[t[0], t[1]],
				[0, t[1]]
			]);
			e.appendChild(i)
		}
	}, Ge([J(), Je("design:type", Object)], e.WiredItem.prototype, "value", void 0), Ge([J(), Je("design:type", Object)], e.WiredItem.prototype, "name", void 0), Ge([J({
		type: Boolean
	}), Je("design:type", Object)], e.WiredItem.prototype, "selected", void 0), e.WiredItem = Ge([X("wired-item")], e.WiredItem);
	var Ke = function (e, t, i, s) {
			var r, o = arguments.length,
				n = o < 3 ? t : null === s ? s = Object.getOwnPropertyDescriptor(t, i) : s;
			if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) n = Reflect.decorate(e, t, i, s);
			else
				for (var a = e.length - 1; a >= 0; a--)(r = e[a]) && (n = (o < 3 ? r(n) : o > 3 ? r(t, i, n) : r(t, i)) || n);
			return o > 3 && n && Object.defineProperty(t, i, n), n
		},
		Qe = function (e, t) {
			if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t)
		};
	e.WiredLink = class extends de {
		constructor() {
			super(...arguments), this.elevation = 1
		}
		static get styles() {
			return [ae, se `
        :host {
          display: inline-block;
          position: relative;
        }
        a, a:hover, a:visited {
          color: inherit;
          outline: none;
          display: inline-block;
          white-space: nowrap;
          text-decoration: none;
          border: none;
        }
        path {
          stroke: var(--wired-link-decoration-color, blue);
          stroke-opacity: 0.45;
        }
        a:focus path {
          stroke-opacity: 1;
        }
      `]
		}
		render() {
			return P `
    <a href="${this.href}" target="${this.target||""}">
      <slot></slot>
      <div id="overlay"><svg></svg></div>
    </a>
    `
		}
		focus() {
			this.anchor ? this.anchor.focus() : super.focus()
		}
		canvasSize() {
			if (this.anchor) {
				const e = this.anchor.getBoundingClientRect(),
					t = Math.min(Math.max(1, this.elevation), 5);
				return [e.width, e.height + 2 * (t - 1)]
			}
			return this.lastSize
		}
		draw(e, t) {
			const i = Math.min(Math.max(1, this.elevation), 5),
				s = {
					width: t[0],
					height: t[1] - 2 * (i - 1)
				};
			for (let t = 0; t < i; t++) me(e, 0, s.height + 2 * t - 2, s.width, s.height + 2 * t - 2), me(e, 0, s.height + 2 * t - 2, s.width, s.height + 2 * t - 2)
		}
	}, Ke([J({
		type: Number
	}), Qe("design:type", Object)], e.WiredLink.prototype, "elevation", void 0), Ke([J({
		type: String
	}), Qe("design:type", String)], e.WiredLink.prototype, "href", void 0), Ke([J({
		type: String
	}), Qe("design:type", String)], e.WiredLink.prototype, "target", void 0), Ke([K("a"), Qe("design:type", HTMLAnchorElement)], e.WiredLink.prototype, "anchor", void 0), e.WiredLink = Ke([X("wired-link")], e.WiredLink);
	var Ze = function (e, t, i, s) {
			var r, o = arguments.length,
				n = o < 3 ? t : null === s ? s = Object.getOwnPropertyDescriptor(t, i) : s;
			if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) n = Reflect.decorate(e, t, i, s);
			else
				for (var a = e.length - 1; a >= 0; a--)(r = e[a]) && (n = (o < 3 ? r(n) : o > 3 ? r(t, i, n) : r(t, i)) || n);
			return o > 3 && n && Object.defineProperty(t, i, n), n
		},
		et = function (e, t) {
			if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t)
		};
	e.WiredListbox = class extends de {
		constructor() {
			super(...arguments), this.horizontal = !1, this.itemNodes = [], this.itemClickHandler = this.onItemClick.bind(this)
		}
		static get styles() {
			return [ae, se `
      :host {
        display: inline-block;
        font-family: inherit;
        position: relative;
        padding: 5px;
        outline: none;
      }
      :host(:focus) path {
        stroke-width: 1.5;
      }
      ::slotted(wired-item) {
        display: block;
      }
      :host(.wired-horizontal) ::slotted(wired-item) {
        display: inline-block;
      }
      `]
		}
		render() {
			return P `
    <slot id="slot" @slotchange="${()=>this.requestUpdate()}"></slot>
    <div id="overlay">
      <svg id="svg"></svg>
    </div>
    `
		}
		firstUpdated() {
			this.setAttribute("role", "listbox"), this.tabIndex = +(this.getAttribute("tabindex") || 0), this.refreshSelection(), this.addEventListener("click", this.itemClickHandler), this.addEventListener("keydown", e => {
				switch (e.keyCode) {
					case 37:
					case 38:
						e.preventDefault(), this.selectPrevious();
						break;
					case 39:
					case 40:
						e.preventDefault(), this.selectNext()
				}
			})
		}
		updated() {
			if (super.updated(), this.horizontal ? this.classList.add("wired-horizontal") : this.classList.remove("wired-horizontal"), !this.itemNodes.length) {
				this.itemNodes = [];
				const e = this.shadowRoot.getElementById("slot").assignedNodes();
				if (e && e.length)
					for (let t = 0; t < e.length; t++) {
						const i = e[t];
						"WIRED-ITEM" === i.tagName && (i.setAttribute("role", "option"), this.itemNodes.push(i))
					}
			}
		}
		onItemClick(e) {
			e.stopPropagation(), this.selected = e.target.value, this.refreshSelection(), this.fireSelected()
		}
		refreshSelection() {
			this.lastSelectedItem && (this.lastSelectedItem.selected = !1, this.lastSelectedItem.removeAttribute("aria-selected"));
			const e = this.shadowRoot.getElementById("slot").assignedNodes();
			if (e) {
				let t = null;
				for (let i = 0; i < e.length; i++) {
					const s = e[i];
					if ("WIRED-ITEM" === s.tagName) {
						const e = s.value || "";
						if (this.selected && e === this.selected) {
							t = s;
							break
						}
					}
				}
				this.lastSelectedItem = t || void 0, this.lastSelectedItem && (this.lastSelectedItem.selected = !0, this.lastSelectedItem.setAttribute("aria-selected", "true")), this.value = t ? {
					value: t.value || "",
					text: t.textContent || ""
				} : void 0
			}
		}
		fireSelected() {
			Ce(this, "selected", {
				selected: this.selected
			})
		}
		selectPrevious() {
			const e = this.itemNodes;
			if (e.length) {
				let t = -1;
				for (let i = 0; i < e.length; i++)
					if (e[i] === this.lastSelectedItem) {
						t = i;
						break
					} t < 0 ? t = 0 : 0 === t ? t = e.length - 1 : t--, this.selected = e[t].value || "", this.refreshSelection(), this.fireSelected()
			}
		}
		selectNext() {
			const e = this.itemNodes;
			if (e.length) {
				let t = -1;
				for (let i = 0; i < e.length; i++)
					if (e[i] === this.lastSelectedItem) {
						t = i;
						break
					} t < 0 || t >= e.length - 1 ? t = 0 : t++, this.selected = e[t].value || "", this.refreshSelection(), this.fireSelected()
			}
		}
		canvasSize() {
			const e = this.getBoundingClientRect();
			return [e.width, e.height]
		}
		draw(e, t) {
			we(e, 0, 0, t[0], t[1])
		}
	}, Ze([J({
		type: Object
	}), et("design:type", Object)], e.WiredListbox.prototype, "value", void 0), Ze([J({
		type: String
	}), et("design:type", String)], e.WiredListbox.prototype, "selected", void 0), Ze([J({
		type: Boolean
	}), et("design:type", Object)], e.WiredListbox.prototype, "horizontal", void 0), e.WiredListbox = Ze([X("wired-listbox")], e.WiredListbox);
	var tt = function (e, t, i, s) {
			var r, o = arguments.length,
				n = o < 3 ? t : null === s ? s = Object.getOwnPropertyDescriptor(t, i) : s;
			if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) n = Reflect.decorate(e, t, i, s);
			else
				for (var a = e.length - 1; a >= 0; a--)(r = e[a]) && (n = (o < 3 ? r(n) : o > 3 ? r(t, i, n) : r(t, i)) || n);
			return o > 3 && n && Object.defineProperty(t, i, n), n
		},
		it = function (e, t) {
			if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t)
		};
	e.WiredProgress = class extends de {
		constructor() {
			super(...arguments), this.value = 0, this.min = 0, this.max = 100, this.percentage = !1
		}
		static get styles() {
			return [ae, se `
      :host {
        display: inline-block;
        position: relative;
        width: 400px;
        height: 42px;
        font-family: sans-serif;
      }
      .labelContainer {
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .progressLabel {
        color: var(--wired-progress-label-color, #000);
        font-size: var(--wired-progress-font-size, 14px);
        background: var(--wired-progress-label-background, rgba(255,255,255,0.9));
        padding: 2px 6px;
        border-radius: 4px;
        letter-spacing: 1.25px;
      }
      .progbox path {
        stroke: var(--wired-progress-color, rgba(0, 0, 200, 0.8));
        stroke-width: 2.75;
        fill: none;
      }
      .overlay {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        pointer-events: none;
      }
      `]
		}
		render() {
			return P `
    <div id="overlay" class="overlay">
      <svg></svg>
    </div>
    <div class="overlay labelContainer">
      <div class="progressLabel">${this.getProgressLabel()}</div>
    </div>
    `
		}
		getProgressLabel() {
			if (this.percentage) {
				if (this.max === this.min) return "%";
				return Math.floor((this.value - this.min) / (this.max - this.min) * 100) + "%"
			}
			return "" + this.value
		}
		wiredRender(e = !1) {
			super.wiredRender(e), this.refreshProgressFill()
		}
		canvasSize() {
			const e = this.getBoundingClientRect();
			return [e.width, e.height]
		}
		draw(e, t) {
			we(e, 2, 2, t[0] - 2, t[1] - 2)
		}
		refreshProgressFill() {
			if (this.progBox && (this.progBox.parentElement && this.progBox.parentElement.removeChild(this.progBox), this.progBox = void 0), this.svg) {
				let e = 0;
				const t = this.getBoundingClientRect();
				if (this.max > this.min) {
					e = (this.value - this.min) / (this.max - this.min);
					const i = t.width * Math.max(0, Math.min(e, 100));
					this.progBox = Re([
						[0, 0],
						[i, 0],
						[i, t.height],
						[0, t.height]
					]), this.svg.appendChild(this.progBox), this.progBox.classList.add("progbox")
				}
			}
		}
	}, tt([J({
		type: Number
	}), it("design:type", Object)], e.WiredProgress.prototype, "value", void 0), tt([J({
		type: Number
	}), it("design:type", Object)], e.WiredProgress.prototype, "min", void 0), tt([J({
		type: Number
	}), it("design:type", Object)], e.WiredProgress.prototype, "max", void 0), tt([J({
		type: Boolean
	}), it("design:type", Object)], e.WiredProgress.prototype, "percentage", void 0), e.WiredProgress = tt([X("wired-progress")], e.WiredProgress);
	var st = function (e, t, i, s) {
			var r, o = arguments.length,
				n = o < 3 ? t : null === s ? s = Object.getOwnPropertyDescriptor(t, i) : s;
			if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) n = Reflect.decorate(e, t, i, s);
			else
				for (var a = e.length - 1; a >= 0; a--)(r = e[a]) && (n = (o < 3 ? r(n) : o > 3 ? r(t, i, n) : r(t, i)) || n);
			return o > 3 && n && Object.defineProperty(t, i, n), n
		},
		rt = function (e, t) {
			if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t)
		};
	e.WiredRadio = class extends de {
		constructor() {
			super(...arguments), this.checked = !1, this.disabled = !1, this.focused = !1
		}
		static get styles() {
			return [ae, se `
      :host {
        display: inline-block;
        font-family: inherit;
      }
      :host([disabled]) {
        opacity: 0.6 !important;
        cursor: default;
        pointer-events: none;
      }
      :host([disabled]) svg {
        background: rgba(0, 0, 0, 0.07);
      }

      #container {
        display: flex;
        flex-direction: row;
        position: relative;
        user-select: none;
        min-height: 24px;
        cursor: pointer;
      }
      span {
        margin-left: 1.5ex;
        line-height: 24px;
      }
      input {
        opacity: 0;
      }
      path {
        stroke: var(--wired-radio-icon-color, currentColor);
        stroke-width: var(--wired-radio-default-swidth, 0.7);
      }
      g path {
        stroke-width: 0;
        fill: var(--wired-radio-icon-color, currentColor);
      }
      #container.focused {
        --wired-radio-default-swidth: 1.5;
      }
      `]
		}
		focus() {
			this.input ? this.input.focus() : super.focus()
		}
		wiredRender(e = !1) {
			super.wiredRender(e), this.refreshCheckVisibility()
		}
		render() {
			return P `
    <label id="container" class="${this.focused?"focused":""}">
      <input type="checkbox" .checked="${this.checked}" ?disabled="${this.disabled}" 
        @change="${this.onChange}"
        @focus="${()=>this.focused=!0}"
        @blur="${()=>this.focused=!1}">
      <span><slot></slot></span>
      <div id="overlay"><svg></svg></div>
    </label>
    `
		}
		onChange() {
			this.checked = this.input.checked, this.refreshCheckVisibility(), Ce(this, "change", {
				checked: this.checked
			})
		}
		canvasSize() {
			return [24, 24]
		}
		draw(e, t) {
			xe(e, t[0] / 2, t[1] / 2, t[0], t[1]), this.svgCheck = fe("g"), e.appendChild(this.svgCheck);
			const i = Math.max(.6 * t[0], 5),
				s = Math.max(.6 * t[1], 5);
			xe(this.svgCheck, t[0] / 2, t[1] / 2, i, s)
		}
		refreshCheckVisibility() {
			this.svgCheck && (this.svgCheck.style.display = this.checked ? "" : "none")
		}
	}, st([J({
		type: Boolean
	}), rt("design:type", Object)], e.WiredRadio.prototype, "checked", void 0), st([J({
		type: Boolean,
		reflect: !0
	}), rt("design:type", Object)], e.WiredRadio.prototype, "disabled", void 0), st([J({
		type: String
	}), rt("design:type", String)], e.WiredRadio.prototype, "name", void 0), st([J(), rt("design:type", Object)], e.WiredRadio.prototype, "focused", void 0), st([K("input"), rt("design:type", HTMLInputElement)], e.WiredRadio.prototype, "input", void 0), e.WiredRadio = st([X("wired-radio")], e.WiredRadio);
	var ot = function (e, t, i, s) {
			var r, o = arguments.length,
				n = o < 3 ? t : null === s ? s = Object.getOwnPropertyDescriptor(t, i) : s;
			if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) n = Reflect.decorate(e, t, i, s);
			else
				for (var a = e.length - 1; a >= 0; a--)(r = e[a]) && (n = (o < 3 ? r(n) : o > 3 ? r(t, i, n) : r(t, i)) || n);
			return o > 3 && n && Object.defineProperty(t, i, n), n
		},
		nt = function (e, t) {
			if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t)
		};
	e.WiredRadioGroup = class extends oe {
		constructor() {
			super(...arguments), this.radioNodes = [], this.checkListener = this.handleChecked.bind(this)
		}
		static get styles() {
			return se `
      :host {
        display: inline-block;
        font-family: inherit;
        outline: none;
      }
      :host ::slotted(*) {
        padding: var(--wired-radio-group-item-padding, 5px);
      }
    `
		}
		render() {
			return P `<slot id="slot" @slotchange="${this.slotChange}"></slot>`
		}
		connectedCallback() {
			super.connectedCallback(), this.addEventListener("change", this.checkListener)
		}
		disconnectedCallback() {
			super.disconnectedCallback && super.disconnectedCallback(), this.removeEventListener("change", this.checkListener)
		}
		handleChecked(e) {
			const t = e.detail.checked,
				i = e.target,
				s = i.name || "";
			t ? (this.selected = t && s || "", this.fireSelected()) : i.checked = !0
		}
		slotChange() {
			this.requestUpdate()
		}
		firstUpdated() {
			this.setAttribute("role", "radiogroup"), this.tabIndex = +(this.getAttribute("tabindex") || 0), this.addEventListener("keydown", e => {
				switch (e.keyCode) {
					case 37:
					case 38:
						e.preventDefault(), this.selectPrevious();
						break;
					case 39:
					case 40:
						e.preventDefault(), this.selectNext()
				}
			})
		}
		updated() {
			const e = this.shadowRoot.getElementById("slot").assignedNodes();
			if (this.radioNodes = [], e && e.length)
				for (let t = 0; t < e.length; t++) {
					const i = e[t];
					if ("WIRED-RADIO" === i.tagName) {
						this.radioNodes.push(i);
						const e = i.name || "";
						this.selected && e === this.selected ? i.checked = !0 : i.checked = !1
					}
				}
		}
		selectPrevious() {
			const e = this.radioNodes;
			if (e.length) {
				let t = null,
					i = -1;
				if (this.selected) {
					for (let t = 0; t < e.length; t++) {
						if (e[t].name === this.selected) {
							i = t;
							break
						}
					}
					i < 0 ? t = e[0] : (i--, i < 0 && (i = e.length - 1), t = e[i])
				} else t = e[0];
				t && (t.focus(), this.selected = t.name, this.fireSelected())
			}
		}
		selectNext() {
			const e = this.radioNodes;
			if (e.length) {
				let t = null,
					i = -1;
				if (this.selected) {
					for (let t = 0; t < e.length; t++) {
						if (e[t].name === this.selected) {
							i = t;
							break
						}
					}
					i < 0 ? t = e[0] : (i++, i >= e.length && (i = 0), t = e[i])
				} else t = e[0];
				t && (t.focus(), this.selected = t.name, this.fireSelected())
			}
		}
		fireSelected() {
			Ce(this, "selected", {
				selected: this.selected
			})
		}
	}, ot([J({
		type: String
	}), nt("design:type", String)], e.WiredRadioGroup.prototype, "selected", void 0), e.WiredRadioGroup = ot([X("wired-radio-group")], e.WiredRadioGroup);
	var at = function (e, t, i, s) {
			var r, o = arguments.length,
				n = o < 3 ? t : null === s ? s = Object.getOwnPropertyDescriptor(t, i) : s;
			if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) n = Reflect.decorate(e, t, i, s);
			else
				for (var a = e.length - 1; a >= 0; a--)(r = e[a]) && (n = (o < 3 ? r(n) : o > 3 ? r(t, i, n) : r(t, i)) || n);
			return o > 3 && n && Object.defineProperty(t, i, n), n
		},
		dt = function (e, t) {
			if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t)
		};
	e.WiredSearchInput = class extends de {
		constructor() {
			super(...arguments), this.disabled = !1, this.placeholder = "", this.autocomplete = "", this.autocorrect = "", this.autofocus = !1
		}
		static get styles() {
			return [ae, se `
        :host {
          display: inline-block;
          position: relative;
          padding: 10px 40px 10px 5px;
          font-family: sans-serif;
          width: 180px;
          outline: none;
        }
        :host([disabled]) {
          opacity: 0.6 !important;
          cursor: default;
          pointer-events: none;
        }
        :host([disabled]) svg {
          background: rgba(0, 0, 0, 0.07);
        }
        input {
          display: block;
          width: 100%;
          box-sizing: border-box;
          outline: none;
          border: none;
          font-family: inherit;
          font-size: inherit;
          font-weight: inherit;
          color: inherit;
          padding: 6px;
        }
        
        input[type=search]::-ms-clear {  display: none; width : 0; height: 0; }
        input[type=search]::-ms-reveal {  display: none; width : 0; height: 0; }
        input[type="search"]::-webkit-search-decoration,
        input[type="search"]::-webkit-search-cancel-button,
        input[type="search"]::-webkit-search-results-button,
        input[type="search"]::-webkit-search-results-decoration {
          display: none;
        }

        .thicker path {
          stroke-width: 1.5;
        }

        button {
          position: absolute;
          top: 0;
          right: 2px;
          width: 32px;
          height: 100%;
          box-sizing: border-box;
          background: none;
          border: none;
          cursor: pointer;
          outline: none;
          opacity: 0;
        }
      `]
		}
		render() {
			return P `
    <input type="search" placeholder="${this.placeholder}" ?disabled="${this.disabled}"
      autocomplete="${this.autocomplete}" ?autofocus="${this.autofocus}" 
      autocapitalize="${this.autocapitalize}" autocorrect="${this.autocorrect}" 
      @change="${this.refire}" @input="${this.refire}">
    <div id="overlay">
      <svg></svg>
    </div>
    <button @click="${()=>this.value=""}"></button>
    `
		}
		get input() {
			return this.textInput
		}
		get value() {
			const e = this.input;
			return e && e.value || ""
		}
		set value(e) {
			if (this.shadowRoot) {
				const t = this.input;
				t && (t.value = e), this.refreshIconState()
			} else this.pendingValue = e
		}
		wiredRender(e = !1) {
			super.wiredRender(e), this.refreshIconState()
		}
		firstUpdated() {
			this.value = this.pendingValue || this.value || this.getAttribute("value") || "", delete this.pendingValue
		}
		canvasSize() {
			const e = this.getBoundingClientRect();
			return [e.width, e.height]
		}
		draw(e, t) {
			we(e, 2, 2, t[0] - 2, t[1] - 2), this.searchIcon = fe("g"), this.searchIcon.classList.add("thicker"), e.appendChild(this.searchIcon), xe(this.searchIcon, t[0] - 30, (t[1] - 30) / 2 + 10, 20, 20), me(this.searchIcon, t[0] - 10, (t[1] - 30) / 2 + 30, t[0] - 25, (t[1] - 30) / 2 + 15), this.closeIcon = fe("g"), this.closeIcon.classList.add("thicker"), e.appendChild(this.closeIcon), me(this.closeIcon, t[0] - 33, (t[1] - 30) / 2 + 2, t[0] - 7, (t[1] - 30) / 2 + 28), me(this.closeIcon, t[0] - 7, (t[1] - 30) / 2 + 2, t[0] - 33, (t[1] - 30) / 2 + 28)
		}
		refreshIconState() {
			this.searchIcon && this.closeIcon && (this.searchIcon.style.display = this.value.trim() ? "none" : "", this.closeIcon.style.display = this.value.trim() ? "" : "none")
		}
		refire(e) {
			this.refreshIconState(), e.stopPropagation(), Ce(this, e.type, {
				sourceEvent: e
			})
		}
	}, at([J({
		type: Boolean,
		reflect: !0
	}), dt("design:type", Object)], e.WiredSearchInput.prototype, "disabled", void 0), at([J({
		type: String
	}), dt("design:type", Object)], e.WiredSearchInput.prototype, "placeholder", void 0), at([J({
		type: String
	}), dt("design:type", Object)], e.WiredSearchInput.prototype, "autocomplete", void 0), at([J({
		type: String
	}), dt("design:type", Object)], e.WiredSearchInput.prototype, "autocorrect", void 0), at([J({
		type: Boolean
	}), dt("design:type", Object)], e.WiredSearchInput.prototype, "autofocus", void 0), at([K("input"), dt("design:type", HTMLInputElement)], e.WiredSearchInput.prototype, "textInput", void 0), e.WiredSearchInput = at([X("wired-search-input")], e.WiredSearchInput);
	var lt = function (e, t, i, s) {
			var r, o = arguments.length,
				n = o < 3 ? t : null === s ? s = Object.getOwnPropertyDescriptor(t, i) : s;
			if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) n = Reflect.decorate(e, t, i, s);
			else
				for (var a = e.length - 1; a >= 0; a--)(r = e[a]) && (n = (o < 3 ? r(n) : o > 3 ? r(t, i, n) : r(t, i)) || n);
			return o > 3 && n && Object.defineProperty(t, i, n), n
		},
		ht = function (e, t) {
			if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t)
		};
	e.WiredSlider = class extends de {
		constructor() {
			super(...arguments), this.min = 0, this.max = 100, this.step = 1, this.disabled = !1, this.canvasWidth = 300
		}
		static get styles() {
			return [ae, se `
      :host {
        display: inline-block;
        position: relative;
        width: 300px;
        box-sizing: border-box;
      }
      :host([disabled]) {
        opacity: 0.45 !important;
        cursor: default;
        pointer-events: none;
        background: rgba(0, 0, 0, 0.07);
        border-radius: 5px;
      }
      input[type=range] {
        width: 100%;
        height: 40px;
        box-sizing: border-box;
        margin: 0;
        -webkit-appearance: none;
        background: transparent;
        outline: none;
        position: relative;
      }
      input[type=range]:focus {
        outline: none;
      }
      input[type=range]::-ms-track {
        width: 100%;
        cursor: pointer;
        background: transparent;
        border-color: transparent;
        color: transparent;
      }
      input[type=range]::-moz-focus-outer {
        outline: none;
        border: 0;
      }
      input[type=range]::-moz-range-thumb {
        border-radius: 50px;
        background: none;
        cursor: pointer;
        border: none;
        margin: 0;
        height: 20px;
        width: 20px;
        line-height: 1;
      }
      input[type=range]::-webkit-slider-thumb {
        -webkit-appearance: none;
        border-radius: 50px;
        background: none;
        cursor: pointer;
        border: none;
        height: 20px;
        width: 20px;
        margin: 0;
        line-height: 1;
      }
      .knob{
        fill: var(--wired-slider-knob-color, rgb(51, 103, 214));
        stroke: var(--wired-slider-knob-color, rgb(51, 103, 214));
      }
      .bar {
        stroke: var(--wired-slider-bar-color, rgb(0, 0, 0));
      }
      input:focus + div svg .knob {
        stroke: var(--wired-slider-knob-outline-color, #000);
        fill-opacity: 0.8;
      }
      `]
		}
		get value() {
			return this.input ? +this.input.value : this.min
		}
		set value(e) {
			this.input ? this.input.value = `${e}` : this.pendingValue = e, this.updateThumbPosition()
		}
		firstUpdated() {
			this.value = this.pendingValue || this.value || +(this.getAttribute("value") || this.min), delete this.pendingValue
		}
		render() {
			return P `
    <div id="container">
      <input type="range" 
        min="${this.min}"
        max="${this.max}"
        step="${this.step}"
        ?disabled="${this.disabled}"
        @input="${this.onInput}">
      <div id="overlay">
        <svg></svg>
      </div>
    </div>
    `
		}
		focus() {
			this.input ? this.input.focus() : super.focus()
		}
		onInput(e) {
			e.stopPropagation(), this.updateThumbPosition(), this.input && Ce(this, "change", {
				value: +this.input.value
			})
		}
		wiredRender(e = !1) {
			super.wiredRender(e), this.updateThumbPosition()
		}
		canvasSize() {
			const e = this.getBoundingClientRect();
			return [e.width, e.height]
		}
		draw(e, t) {
			this.canvasWidth = t[0];
			const i = Math.round(t[1] / 2);
			me(e, 0, i, t[0], i).classList.add("bar"), this.knob = xe(e, 10, i, 20, 20), this.knob.classList.add("knob")
		}
		updateThumbPosition() {
			if (this.input) {
				const e = +this.input.value,
					t = Math.max(this.step, this.max - this.min),
					i = (e - this.min) / t;
				this.knob && (this.knob.style.transform = `translateX(${i*(this.canvasWidth-20)}px)`)
			}
		}
	}, lt([J({
		type: Number
	}), ht("design:type", Object)], e.WiredSlider.prototype, "min", void 0), lt([J({
		type: Number
	}), ht("design:type", Object)], e.WiredSlider.prototype, "max", void 0), lt([J({
		type: Number
	}), ht("design:type", Object)], e.WiredSlider.prototype, "step", void 0), lt([J({
		type: Boolean,
		reflect: !0
	}), ht("design:type", Object)], e.WiredSlider.prototype, "disabled", void 0), lt([K("input"), ht("design:type", HTMLInputElement)], e.WiredSlider.prototype, "input", void 0), e.WiredSlider = lt([X("wired-slider")], e.WiredSlider);
	var ct = function (e, t, i, s) {
			var r, o = arguments.length,
				n = o < 3 ? t : null === s ? s = Object.getOwnPropertyDescriptor(t, i) : s;
			if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) n = Reflect.decorate(e, t, i, s);
			else
				for (var a = e.length - 1; a >= 0; a--)(r = e[a]) && (n = (o < 3 ? r(n) : o > 3 ? r(t, i, n) : r(t, i)) || n);
			return o > 3 && n && Object.defineProperty(t, i, n), n
		},
		pt = function (e, t) {
			if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t)
		};
	e.WiredSpinner = class extends de {
		constructor() {
			super(...arguments), this.spinning = !1, this.duration = 1500, this.value = 0, this.timerstart = 0, this.frame = 0
		}
		static get styles() {
			return [ae, se `
        :host {
          display: inline-block;
          position: relative;
        }
        path {
          stroke: currentColor;
          stroke-opacity: 0.65;
          stroke-width: 1.5;
          fill: none;
        }
        .knob {
          stroke-width: 2.8 !important;
          stroke-opacity: 1;
        }
      `]
		}
		render() {
			return P `<svg></svg>`
		}
		canvasSize() {
			return [76, 76]
		}
		draw(e, t) {
			xe(e, t[0] / 2, t[1] / 2, Math.floor(.8 * t[0]), Math.floor(.8 * t[1])), this.knob = _e(0, 0, 20, 20), this.knob.classList.add("knob"), e.appendChild(this.knob), this.updateCursor()
		}
		updateCursor() {
			if (this.knob) {
				const e = [Math.round(38 + 25 * Math.cos(this.value * Math.PI * 2)), Math.round(38 + 25 * Math.sin(this.value * Math.PI * 2))];
				this.knob.style.transform = `translate3d(${e[0]}px, ${e[1]}px, 0) rotateZ(${Math.round(360*this.value*2)}deg)`
			}
		}
		updated() {
			super.updated(), this.spinning ? this.startSpinner() : this.stopSpinner()
		}
		startSpinner() {
			this.stopSpinner(), this.value = 0, this.timerstart = 0, this.nextTick()
		}
		stopSpinner() {
			this.frame && (window.cancelAnimationFrame(this.frame), this.frame = 0)
		}
		nextTick() {
			this.frame = window.requestAnimationFrame(e => this.tick(e))
		}
		tick(e) {
			this.spinning ? (this.timerstart || (this.timerstart = e), this.value = Math.min(1, (e - this.timerstart) / this.duration), this.updateCursor(), this.value >= 1 && (this.value = 0, this.timerstart = 0), this.nextTick()) : this.frame = 0
		}
	}, ct([J({
		type: Boolean
	}), pt("design:type", Object)], e.WiredSpinner.prototype, "spinning", void 0), ct([J({
		type: Number
	}), pt("design:type", Object)], e.WiredSpinner.prototype, "duration", void 0), e.WiredSpinner = ct([X("wired-spinner")], e.WiredSpinner);
	var ut = function (e, t, i, s) {
			var r, o = arguments.length,
				n = o < 3 ? t : null === s ? s = Object.getOwnPropertyDescriptor(t, i) : s;
			if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) n = Reflect.decorate(e, t, i, s);
			else
				for (var a = e.length - 1; a >= 0; a--)(r = e[a]) && (n = (o < 3 ? r(n) : o > 3 ? r(t, i, n) : r(t, i)) || n);
			return o > 3 && n && Object.defineProperty(t, i, n), n
		},
		ft = function (e, t) {
			if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t)
		};
	e.WiredTab = class extends de {
		constructor() {
			super(), this.name = "", this.label = "", window.ResizeObserver && (this.resizeObserver = new window.ResizeObserver(() => {
				this.svg && this.wiredRender()
			}))
		}
		static get styles() {
			return [ae, se `
        :host {
          display: inline-block;
          position: relative;
          padding: 10px;
        }
      `]
		}
		render() {
			return P `
    <div>
      <slot @slotchange="${this.wiredRender}"></slot>
    </div>
    <div id="overlay"><svg></svg></div>
    `
		}
		updated() {
			super.updated(), this.attachResizeListener()
		}
		disconnectedCallback() {
			this.detachResizeListener()
		}
		attachResizeListener() {
			this.resizeObserver && this.resizeObserver.observe ? this.resizeObserver.observe(this) : this.windowResizeHandler || (this.windowResizeHandler = () => this.wiredRender(), window.addEventListener("resize", this.windowResizeHandler, {
				passive: !0
			}))
		}
		detachResizeListener() {
			this.resizeObserver && this.resizeObserver.unobserve && this.resizeObserver.unobserve(this), this.windowResizeHandler && window.removeEventListener("resize", this.windowResizeHandler)
		}
		canvasSize() {
			const e = this.getBoundingClientRect();
			return [e.width, e.height]
		}
		draw(e, t) {
			we(e, 2, 2, t[0] - 4, t[1] - 4)
		}
	}, ut([J({
		type: String
	}), ft("design:type", Object)], e.WiredTab.prototype, "name", void 0), ut([J({
		type: String
	}), ft("design:type", Object)], e.WiredTab.prototype, "label", void 0), e.WiredTab = ut([X("wired-tab"), ft("design:paramtypes", [])], e.WiredTab);
	const gt = new WeakMap,
		yt = void 0 !== window.customElements && void 0 !== window.customElements.polyfillWrapFlushCallback,
		bt = (e, t, i = null) => {
			for (; t !== i;) {
				const i = t.nextSibling;
				e.removeChild(t), t = i
			}
		},
		vt = {},
		mt = {},
		wt = `{{lit-${String(Math.random()).slice(2)}}}`,
		xt = `\x3c!--${wt}--\x3e`,
		kt = e => -1 !== e.index,
		St = () => document.createComment(""),
		Rt = /([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;
	class _t {
		constructor(e, t, i) {
			this.__parts = [], this.template = e, this.processor = t, this.options = i
		}
		update(e) {
			let t = 0;
			for (const i of this.__parts) void 0 !== i && i.setValue(e[t]), t++;
			for (const e of this.__parts) void 0 !== e && e.commit()
		}
		_clone() {
			const e = yt ? this.template.element.content.cloneNode(!0) : document.importNode(this.template.element.content, !0),
				t = [],
				i = this.template.parts,
				s = document.createTreeWalker(e, 133, null, !1);
			let r, o = 0,
				n = 0,
				a = s.nextNode();
			for (; o < i.length;)
				if (r = i[o], kt(r)) {
					for (; n < r.index;) n++, "TEMPLATE" === a.nodeName && (t.push(a), s.currentNode = a.content), null === (a = s.nextNode()) && (s.currentNode = t.pop(), a = s.nextNode());
					if ("node" === r.type) {
						const e = this.processor.handleTextExpression(this.options);
						e.insertAfterNode(a.previousSibling), this.__parts.push(e)
					} else this.__parts.push(...this.processor.handleAttributeExpressions(a, r.name, r.strings, this.options));
					o++
				} else this.__parts.push(void 0), o++;
			return yt && (document.adoptNode(e), customElements.upgrade(e)), e
		}
	}
	const Ct = ` ${wt} `;
	class Ot {
		constructor(e) {
			this.value = void 0, this.__pendingValue = void 0, this.options = e
		}
		appendInto(e) {
			this.startNode = e.appendChild(St()), this.endNode = e.appendChild(St())
		}
		insertAfterNode(e) {
			this.startNode = e, this.endNode = e.nextSibling
		}
		appendIntoPart(e) {
			e.__insert(this.startNode = St()), e.__insert(this.endNode = St())
		}
		insertAfterPart(e) {
			e.__insert(this.startNode = St()), this.endNode = e.endNode, e.endNode = this.startNode
		}
		setValue(e) {
			this.__pendingValue = e
		}
		commit() {
			for (;
				"function" == typeof (e = this.__pendingValue) && gt.has(e);) {
				const e = this.__pendingValue;
				this.__pendingValue = vt, e(this)
			}
			var e;
			const t = this.__pendingValue;
			t !== vt && ((e => null === e || !("object" == typeof e || "function" == typeof e))(t) ? t !== this.value && this.__commitText(t) : t instanceof class {
				constructor(e, t, i, s) {
					this.strings = e, this.values = t, this.type = i, this.processor = s
				}
				getHTML() {
					const e = this.strings.length - 1;
					let t = "",
						i = !1;
					for (let s = 0; s < e; s++) {
						const e = this.strings[s],
							r = e.lastIndexOf("\x3c!--");
						i = (r > -1 || i) && -1 === e.indexOf("--\x3e", r + 1);
						const o = Rt.exec(e);
						t += null === o ? e + (i ? Ct : xt) : e.substr(0, o.index) + o[1] + o[2] + "$lit$" + o[3] + wt
					}
					return t += this.strings[e], t
				}
				getTemplateElement() {
					const e = document.createElement("template");
					return e.innerHTML = this.getHTML(), e
				}
			} ? this.__commitTemplateResult(t) : t instanceof Node ? this.__commitNode(t) : (e => Array.isArray(e) || !(!e || !e[Symbol.iterator]))(t) ? this.__commitIterable(t) : t === mt ? (this.value = mt, this.clear()) : this.__commitText(t))
		}
		__insert(e) {
			this.endNode.parentNode.insertBefore(e, this.endNode)
		}
		__commitNode(e) {
			this.value !== e && (this.clear(), this.__insert(e), this.value = e)
		}
		__commitText(e) {
			const t = this.startNode.nextSibling,
				i = "string" == typeof (e = null == e ? "" : e) ? e : String(e);
			t === this.endNode.previousSibling && 3 === t.nodeType ? t.data = i : this.__commitNode(document.createTextNode(i)), this.value = e
		}
		__commitTemplateResult(e) {
			const t = this.options.templateFactory(e);
			if (this.value instanceof _t && this.value.template === t) this.value.update(e.values);
			else {
				const i = new _t(t, e.processor, this.options),
					s = i._clone();
				i.update(e.values), this.__commitNode(s), this.value = i
			}
		}
		__commitIterable(e) {
			Array.isArray(this.value) || (this.value = [], this.clear());
			const t = this.value;
			let i, s = 0;
			for (const r of e) i = t[s], void 0 === i && (i = new Ot(this.options), t.push(i), 0 === s ? i.appendIntoPart(this) : i.insertAfterPart(t[s - 1])), i.setValue(r), i.commit(), s++;
			s < t.length && (t.length = s, this.clear(i && i.endNode))
		}
		clear(e = this.startNode) {
			bt(this.startNode.parentNode, e.nextSibling, this.endNode)
		}
	}
	let zt = !1;
	try {
		const e = {
			get capture() {
				return zt = !0, !1
			}
		};
		window.addEventListener("test", e, e), window.removeEventListener("test", e, e)
	} catch (e) {}(window.litHtmlVersions || (window.litHtmlVersions = [])).push("1.1.2");
	const Mt = (e, t) => {
			const i = e.startNode.parentNode,
				s = void 0 === t ? e.endNode : t.startNode,
				r = i.insertBefore(St(), s);
			i.insertBefore(St(), s);
			const o = new Ot(e.options);
			return o.insertAfterNode(r), o
		},
		Wt = (e, t) => (e.setValue(t), e.commit(), e),
		Nt = (e, t, i) => {
			const s = e.startNode.parentNode,
				r = i ? i.startNode : e.endNode,
				o = t.endNode.nextSibling;
			o !== r && ((e, t, i = null, s = null) => {
				for (; t !== i;) {
					const i = t.nextSibling;
					e.insertBefore(t, s), t = i
				}
			})(s, t.startNode, o, r)
		},
		$t = e => {
			bt(e.startNode.parentNode, e.startNode, e.endNode.nextSibling)
		},
		Pt = (e, t, i) => {
			const s = new Map;
			for (let r = t; r <= i; r++) s.set(e[r], r);
			return s
		},
		jt = new WeakMap,
		At = new WeakMap,
		Tt = (It = (e, t, i) => {
			let s;
			return void 0 === i ? i = t : void 0 !== t && (s = t), t => {
				if (!(t instanceof Ot)) throw new Error("repeat can only be used in text bindings");
				const r = jt.get(t) || [],
					o = At.get(t) || [],
					n = [],
					a = [],
					d = [];
				let l, h, c = 0;
				for (const t of e) d[c] = s ? s(t, c) : c, a[c] = i(t, c), c++;
				let p = 0,
					u = r.length - 1,
					f = 0,
					g = a.length - 1;
				for (; p <= u && f <= g;)
					if (null === r[p]) p++;
					else if (null === r[u]) u--;
				else if (o[p] === d[f]) n[f] = Wt(r[p], a[f]), p++, f++;
				else if (o[u] === d[g]) n[g] = Wt(r[u], a[g]), u--, g--;
				else if (o[p] === d[g]) n[g] = Wt(r[p], a[g]), Nt(t, r[p], n[g + 1]), p++, g--;
				else if (o[u] === d[f]) n[f] = Wt(r[u], a[f]), Nt(t, r[u], r[p]), u--, f++;
				else if (void 0 === l && (l = Pt(d, f, g), h = Pt(o, p, u)), l.has(o[p]))
					if (l.has(o[u])) {
						const e = h.get(d[f]),
							i = void 0 !== e ? r[e] : null;
						if (null === i) {
							const e = Mt(t, r[p]);
							Wt(e, a[f]), n[f] = e
						} else n[f] = Wt(i, a[f]), Nt(t, i, r[p]), r[e] = null;
						f++
					} else $t(r[u]), u--;
				else $t(r[p]), p++;
				for (; f <= g;) {
					const e = Mt(t, n[g + 1]);
					Wt(e, a[f]), n[f++] = e
				}
				for (; p <= u;) {
					const e = r[p++];
					null !== e && $t(e)
				}
				jt.set(t, n), At.set(t, d)
			}
		}, (...e) => {
			const t = It(...e);
			return gt.set(t, !0), t
		});
	var It, Et = function (e, t, i, s) {
			var r, o = arguments.length,
				n = o < 3 ? t : null === s ? s = Object.getOwnPropertyDescriptor(t, i) : s;
			if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) n = Reflect.decorate(e, t, i, s);
			else
				for (var a = e.length - 1; a >= 0; a--)(r = e[a]) && (n = (o < 3 ? r(n) : o > 3 ? r(t, i, n) : r(t, i)) || n);
			return o > 3 && n && Object.defineProperty(t, i, n), n
		},
		Dt = function (e, t) {
			if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t)
		};
	e.WiredTabs = class extends oe {
		constructor() {
			super(...arguments), this.pages = [], this.pageMap = new Map
		}
		static get styles() {
			return [ae, se `
        :host {
          display: block;
          opacity: 1;
        }
        ::slotted(.hidden) {
          display: none !important;
        }
    
        :host ::slotted(.hidden) {
          display: none !important;
        }
        #bar {
          display: -ms-flexbox;
          display: -webkit-flex;
          display: flex;
          -ms-flex-direction: row;
          -webkit-flex-direction: row;
          flex-direction: row;
        }
      `]
		}
		render() {
			return P `
    <div id="bar">
      ${Tt(this.pages,e=>e.name,e=>P`
      <wired-item role="tab" .value="${e.name}" .selected="${e.name===this.selected}" ?aria-selected="${e.name===this.selected}"
        @click="${()=>this.selected=e.name}">${e.label||e.name}</wired-item>
      `)}
    </div>
    <div>
      <slot @slotchange="${this.mapPages}"></slot>
    </div>
    `
		}
		mapPages() {
			if (this.pages = [], this.pageMap.clear(), this.slotElement) {
				const e = this.slotElement.assignedNodes();
				if (e && e.length) {
					for (let t = 0; t < e.length; t++) {
						const i = e[t];
						if (i.nodeType === Node.ELEMENT_NODE && "wired-tab" === i.tagName.toLowerCase()) {
							const e = i;
							this.pages.push(e);
							const t = e.getAttribute("name") || "";
							t && t.trim().split(" ").forEach(t => {
								t && this.pageMap.set(t, e)
							})
						}
					}
					this.selected || this.pages.length && (this.selected = this.pages[0].name), this.requestUpdate()
				}
			}
		}
		firstUpdated() {
			this.mapPages(), this.tabIndex = +(this.getAttribute("tabindex") || 0), this.addEventListener("keydown", e => {
				switch (e.keyCode) {
					case 37:
					case 38:
						e.preventDefault(), this.selectPrevious();
						break;
					case 39:
					case 40:
						e.preventDefault(), this.selectNext()
				}
			})
		}
		updated() {
			const e = this.getElement();
			for (let t = 0; t < this.pages.length; t++) {
				const i = this.pages[t];
				i === e ? i.classList.remove("hidden") : i.classList.add("hidden")
			}
			this.current = e || void 0, this.current && this.current.wiredRender && requestAnimationFrame(() => requestAnimationFrame(() => this.current.wiredRender()))
		}
		getElement() {
			let e = void 0;
			return this.selected && (e = this.pageMap.get(this.selected)), e || (e = this.pages[0]), e || null
		}
		selectPrevious() {
			const e = this.pages;
			if (e.length) {
				let t = -1;
				for (let i = 0; i < e.length; i++)
					if (e[i] === this.current) {
						t = i;
						break
					} t < 0 ? t = 0 : 0 === t ? t = e.length - 1 : t--, this.selected = e[t].name || ""
			}
		}
		selectNext() {
			const e = this.pages;
			if (e.length) {
				let t = -1;
				for (let i = 0; i < e.length; i++)
					if (e[i] === this.current) {
						t = i;
						break
					} t < 0 || t >= e.length - 1 ? t = 0 : t++, this.selected = e[t].name || ""
			}
		}
	}, Et([J({
		type: String
	}), Dt("design:type", String)], e.WiredTabs.prototype, "selected", void 0), Et([K("slot"), Dt("design:type", HTMLSlotElement)], e.WiredTabs.prototype, "slotElement", void 0), e.WiredTabs = Et([X("wired-tabs")], e.WiredTabs);
	var Lt = function (e, t, i, s) {
			var r, o = arguments.length,
				n = o < 3 ? t : null === s ? s = Object.getOwnPropertyDescriptor(t, i) : s;
			if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) n = Reflect.decorate(e, t, i, s);
			else
				for (var a = e.length - 1; a >= 0; a--)(r = e[a]) && (n = (o < 3 ? r(n) : o > 3 ? r(t, i, n) : r(t, i)) || n);
			return o > 3 && n && Object.defineProperty(t, i, n), n
		},
		Bt = function (e, t) {
			if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t)
		};
	e.WiredTextarea = class extends de {
		constructor() {
			super(...arguments), this.disabled = !1, this.rows = 2, this.maxrows = 0, this.autocomplete = "", this.autofocus = !1, this.inputmode = "", this.placeholder = "", this.required = !1, this.readonly = !1
		}
		static get styles() {
			return [ae, se `
        :host {
          display: inline-block;
          position: relative;
          font-family: sans-serif;
          width: 400px;
          outline: none;
          padding: 4px;
        }
        :host([disabled]) {
          opacity: 0.6 !important;
          cursor: default;
          pointer-events: none;
        }
        :host([disabled]) svg {
          background: rgba(0, 0, 0, 0.07);
        }
        textarea {
          position: relative;
          outline: none;
          border: none;
          resize: none;
          background: inherit;
          color: inherit;
          width: 100%;
          font-size: inherit;
          font-family: inherit;
          line-height: inherit;
          text-align: inherit;
          padding: 10px;
          box-sizing: border-box;
        }
      `]
		}
		render() {
			return P `
    <textarea id="textarea" autocomplete="${this.autocomplete}" ?autofocus="${this.autofocus}" inputmode="${this.inputmode}"
      placeholder="${this.placeholder}" ?readonly="${this.readonly}" ?required="${this.required}" ?disabled="${this.disabled}"
      rows="${this.rows}" minlength="${this.minlength}" maxlength="${this.maxlength}"
      @change="${this.refire}" @input="${this.refire}"></textarea>
    <div id="overlay">
      <svg></svg>
    </div>
    `
		}
		get textarea() {
			return this.textareaInput
		}
		get value() {
			const e = this.textarea;
			return e && e.value || ""
		}
		set value(e) {
			if (this.shadowRoot) {
				const t = this.textarea;
				t && (t.value = e)
			} else this.pendingValue = e
		}
		firstUpdated() {
			this.value = this.pendingValue || this.value || this.getAttribute("value") || "", delete this.pendingValue
		}
		canvasSize() {
			const e = this.getBoundingClientRect();
			return [e.width, e.height]
		}
		draw(e, t) {
			we(e, 4, 4, t[0] - 4, t[1] - 4)
		}
		refire(e) {
			e.stopPropagation(), Ce(this, e.type, {
				sourceEvent: e
			})
		}
	}, Lt([J({
		type: Boolean,
		reflect: !0
	}), Bt("design:type", Object)], e.WiredTextarea.prototype, "disabled", void 0), Lt([J({
		type: Number
	}), Bt("design:type", Object)], e.WiredTextarea.prototype, "rows", void 0), Lt([J({
		type: Number
	}), Bt("design:type", Object)], e.WiredTextarea.prototype, "maxrows", void 0), Lt([J({
		type: String
	}), Bt("design:type", Object)], e.WiredTextarea.prototype, "autocomplete", void 0), Lt([J({
		type: Boolean
	}), Bt("design:type", Object)], e.WiredTextarea.prototype, "autofocus", void 0), Lt([J({
		type: String
	}), Bt("design:type", Object)], e.WiredTextarea.prototype, "inputmode", void 0), Lt([J({
		type: String
	}), Bt("design:type", Object)], e.WiredTextarea.prototype, "placeholder", void 0), Lt([J({
		type: Boolean
	}), Bt("design:type", Object)], e.WiredTextarea.prototype, "required", void 0), Lt([J({
		type: Boolean
	}), Bt("design:type", Object)], e.WiredTextarea.prototype, "readonly", void 0), Lt([J({
		type: Number
	}), Bt("design:type", Number)], e.WiredTextarea.prototype, "minlength", void 0), Lt([J({
		type: Number
	}), Bt("design:type", Number)], e.WiredTextarea.prototype, "maxlength", void 0), Lt([K("textarea"), Bt("design:type", HTMLTextAreaElement)], e.WiredTextarea.prototype, "textareaInput", void 0), e.WiredTextarea = Lt([X("wired-textarea")], e.WiredTextarea);
	var Vt = function (e, t, i, s) {
			var r, o = arguments.length,
				n = o < 3 ? t : null === s ? s = Object.getOwnPropertyDescriptor(t, i) : s;
			if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) n = Reflect.decorate(e, t, i, s);
			else
				for (var a = e.length - 1; a >= 0; a--)(r = e[a]) && (n = (o < 3 ? r(n) : o > 3 ? r(t, i, n) : r(t, i)) || n);
			return o > 3 && n && Object.defineProperty(t, i, n), n
		},
		Ht = function (e, t) {
			if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t)
		};
	e.WiredToggle = class extends de {
		constructor() {
			super(...arguments), this.checked = !1, this.disabled = !1
		}
		static get styles() {
			return [ae, se `
      :host {
        display: inline-block;
        cursor: pointer;
        position: relative;
        outline: none;
      }
      :host([disabled]) {
        opacity: 0.4 !important;
        cursor: default;
        pointer-events: none;
      }
      :host([disabled]) svg {
        background: rgba(0, 0, 0, 0.07);
      }
      input {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        box-sizing: border-box;
        cursor: pointer;
        opacity: 0;
      }
      .knob {
        transition: transform 0.3s ease;
      }
      .knob path {
        stroke-width: 0.7;
      }
      .knob.checked {
        transform: translateX(48px);
      }
      .knobfill path {
        stroke-width: 3 !important;
        fill: transparent;
      }
      .knob.unchecked .knobfill path {
        stroke: var(--wired-toggle-off-color, gray);
      }
      .knob.checked .knobfill path {
        stroke: var(--wired-toggle-on-color, rgb(63, 81, 181));
      }
      `]
		}
		render() {
			return P `
    <div style="position: relative;">
      <svg></svg>
      <input type="checkbox" .checked="${this.checked}" ?disabled="${this.disabled}"  @change="${this.onChange}">
    </div>
    `
		}
		focus() {
			this.input ? this.input.focus() : super.focus()
		}
		wiredRender(e = !1) {
			super.wiredRender(e), this.refreshKnob()
		}
		onChange() {
			this.checked = this.input.checked, this.refreshKnob(), Ce(this, "change", {
				checked: this.checked
			})
		}
		canvasSize() {
			return [80, 34]
		}
		draw(e, t) {
			we(e, 16, 8, t[0] - 32, 18), this.knob = fe("g"), this.knob.classList.add("knob"), e.appendChild(this.knob);
			const i = _e(16, 16, 32, 32);
			i.classList.add("knobfill"), this.knob.appendChild(i), xe(this.knob, 16, 16, 32, 32)
		}
		refreshKnob() {
			if (this.knob) {
				const e = this.knob.classList;
				this.checked ? (e.remove("unchecked"), e.add("checked")) : (e.remove("checked"), e.add("unchecked"))
			}
		}
	}, Vt([J({
		type: Boolean
	}), Ht("design:type", Object)], e.WiredToggle.prototype, "checked", void 0), Vt([J({
		type: Boolean,
		reflect: !0
	}), Ht("design:type", Object)], e.WiredToggle.prototype, "disabled", void 0), Vt([K("input"), Ht("design:type", HTMLInputElement)], e.WiredToggle.prototype, "input", void 0), e.WiredToggle = Vt([X("wired-toggle")], e.WiredToggle);
	var Ut = function (e, t, i, s) {
			var r, o = arguments.length,
				n = o < 3 ? t : null === s ? s = Object.getOwnPropertyDescriptor(t, i) : s;
			if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) n = Reflect.decorate(e, t, i, s);
			else
				for (var a = e.length - 1; a >= 0; a--)(r = e[a]) && (n = (o < 3 ? r(n) : o > 3 ? r(t, i, n) : r(t, i)) || n);
			return o > 3 && n && Object.defineProperty(t, i, n), n
		},
		Ft = function (e, t) {
			if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t)
		};
	return e.WiredVideo = class extends de {
		constructor() {
			super(), this.src = "", this.autoplay = !1, this.loop = !1, this.muted = !1, this.playsinline = !1, this.playing = !1, this.timeDisplay = "", window.ResizeObserver && (this.resizeObserver = new window.ResizeObserver(() => {
				this.svg && this.wiredRender()
			}))
		}
		static get styles() {
			return [ae, se `
        :host {
          display: inline-block;
          position: relative;
          line-height: 1;
          padding: 3px 3px 68px;
          --wired-progress-color: var(--wired-video-highlight-color, rgb(51, 103, 214));
          --wired-slider-knob-color: var(--wired-video-highlight-color, rgb(51, 103, 214));
        }
        video {
          display: block;
          box-sizing: border-box;
          max-width: 100%;
          max-height: 100%;
        }
        path {
          stroke-width: 1;
        }
        #controls {
          position: absolute;
          pointer-events: auto;
          left: 0;
          bottom: 0;
          width: 100%;
          box-sizing: border-box;
          height: 70px;
        }
        .layout.horizontal {
          display: -ms-flexbox;
          display: -webkit-flex;
          display: flex;
          -ms-flex-direction: row;
          -webkit-flex-direction: row;
          flex-direction: row;
          -ms-flex-align: center;
          -webkit-align-items: center;
          align-items: center;
          padding: 5px 10px;
        }
        .flex {
          -ms-flex: 1 1 0.000000001px;
          -webkit-flex: 1;
          flex: 1;
          -webkit-flex-basis: 0.000000001px;
          flex-basis: 0.000000001px;
        }
        wired-progress {
          display: block;
          width: 100%;
          box-sizing: border-box;
          height: 20px;
          --wired-progress-label-color: transparent;
          --wired-progress-label-background: transparent;
        }
        wired-icon-button span {
          font-size: 16px;
          line-height: 16px;
          width: 16px;
          height: 16px;
          padding: 0px;
          font-family: sans-serif;
          display: inline-block;
        }
        #timeDisplay {
          padding: 0 20px 0 8px;
          font-size: 13px;
        }
        wired-slider {
          display: block;
          max-width: 200px;
          margin: 0 6px 0 auto;
        }
      `]
		}
		render() {
			return P `
    <video 
      .autoplay="${this.autoplay}"
      .loop="${this.loop}"
      .muted="${this.muted}"
      .playsinline="${this.playsinline}"
      src="${this.src}"
      @play="${()=>this.playing=!0}"
      @pause="${()=>this.playing=!1}"
      @canplay="${this.canPlay}"
      @timeupdate="${this.updateTime}">
    </video>
    <div id="overlay">
      <svg></svg>
    </div>
    <div id="controls">
      <wired-progress></wired-progress>
      <div class="horizontal layout center">
        <wired-icon-button @click="${this.togglePause}">
          <span>${this.playing?"||":"▶"}</span>
        </wired-icon-button>
        <div id="timeDisplay">${this.timeDisplay}</div>
        <div class="flex">
          <wired-slider @change="${this.volumeChange}"></wired-slider>
        </div>
        <div style="width: 24px; height: 24px;">
          <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" style="pointer-events: none; display: block; width: 100%; height: 100%;"><g><path style="stroke: none; fill: currentColor;" d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"></path></g></svg>
        </div>
      </div>
    </div>
    `
		}
		updated() {
			super.updated(), this.attachResizeListener()
		}
		disconnectedCallback() {
			this.detachResizeListener()
		}
		attachResizeListener() {
			this.resizeObserver && this.resizeObserver.observe ? this.resizeObserver.observe(this) : this.windowResizeHandler || (this.windowResizeHandler = () => this.wiredRender(), window.addEventListener("resize", this.windowResizeHandler, {
				passive: !0
			}))
		}
		detachResizeListener() {
			this.resizeObserver && this.resizeObserver.unobserve && this.resizeObserver.unobserve(this), this.windowResizeHandler && window.removeEventListener("resize", this.windowResizeHandler)
		}
		wiredRender() {
			super.wiredRender(), this.progressBar && this.progressBar.wiredRender(!0)
		}
		canvasSize() {
			const e = this.getBoundingClientRect();
			return [e.width, e.height]
		}
		draw(e, t) {
			we(e, 2, 2, t[0] - 4, t[1] - 4)
		}
		updateTime() {
			this.video && this.progressBar && (this.progressBar.value = this.video.duration ? Math.round(this.video.currentTime / this.video.duration * 100) : 0, this.timeDisplay = `${this.getTimeDisplay(this.video.currentTime)} / ${this.getTimeDisplay(this.video.duration)}`)
		}
		getTimeDisplay(e) {
			const t = Math.floor(e / 60);
			return `${t}:${Math.round(e-60*t)}`
		}
		togglePause() {
			this.video && (this.playing ? this.video.pause() : this.video.play())
		}
		volumeChange() {
			this.video && this.slider && (this.video.volume = this.slider.value / 100)
		}
		canPlay() {
			this.slider && this.video && (this.slider.value = 100 * this.video.volume)
		}
	}, Ut([J({
		type: String
	}), Ft("design:type", Object)], e.WiredVideo.prototype, "src", void 0), Ut([J({
		type: Boolean
	}), Ft("design:type", Object)], e.WiredVideo.prototype, "autoplay", void 0), Ut([J({
		type: Boolean
	}), Ft("design:type", Object)], e.WiredVideo.prototype, "loop", void 0), Ut([J({
		type: Boolean
	}), Ft("design:type", Object)], e.WiredVideo.prototype, "muted", void 0), Ut([J({
		type: Boolean
	}), Ft("design:type", Object)], e.WiredVideo.prototype, "playsinline", void 0), Ut([J(), Ft("design:type", Object)], e.WiredVideo.prototype, "playing", void 0), Ut([J(), Ft("design:type", Object)], e.WiredVideo.prototype, "timeDisplay", void 0), Ut([K("wired-progress"), Ft("design:type", e.WiredProgress)], e.WiredVideo.prototype, "progressBar", void 0), Ut([K("wired-slider"), Ft("design:type", e.WiredSlider)], e.WiredVideo.prototype, "slider", void 0), Ut([K("video"), Ft("design:type", HTMLVideoElement)], e.WiredVideo.prototype, "video", void 0), e.WiredVideo = Ut([X("wired-video"), Ft("design:paramtypes", [])], e.WiredVideo), e
}({});
