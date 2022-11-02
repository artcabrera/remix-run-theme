var e=require("react");function t(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var n=/*#__PURE__*/t(e),r=["light","dark"],o="(prefers-color-scheme: dark)",a="undefined"==typeof window,i=e.createContext(void 0),c={setTheme:function(e){},themes:[]},u=["light","dark"],l=function(t){var a=t.forcedTheme,c=t.disableTransitionOnChange,l=void 0!==c&&c,h=t.enableSystem,v=void 0===h||h,y=t.enableColorScheme,g=void 0===y||y,b=t.storageKey,S=void 0===b?"theme":b,p=t.themes,T=void 0===p?u:p,w=t.defaultTheme,C=void 0===w?v?"system":"light":w,E=t.attribute,k=void 0===E?"data-theme":E,x=t.value,L=t.children,I=t.nonce,M=e.useState(function(){return d(S,C)}),O=M[0],j=M[1],A=e.useState(function(){return d(S)}),K=A[0],N=A[1],J=x?Object.values(x):T,P=e.useCallback(function(e){var t=e;if(t){"system"===e&&v&&(t=f());var n,o=x?x[t]:t,a=l?m():null,i=document.documentElement;if("class"===k?((n=i.classList).remove.apply(n,J),o&&i.classList.add(o)):o?i.setAttribute(k,o):i.removeAttribute(k),g){var c=r.includes(C)?C:null,u=r.includes(t)?t:c;i.style.colorScheme=u}null==a||a()}},[]),_=e.useCallback(function(e){j(e);try{localStorage.setItem(S,e)}catch(e){}},[a]),q=e.useCallback(function(e){var t=f(e);N(t),"system"===O&&v&&!a&&P("system")},[O,a]);e.useEffect(function(){var e=window.matchMedia(o);return e.addListener(q),q(e),function(){return e.removeListener(q)}},[q]),e.useEffect(function(){var e=function(e){e.key===S&&_(e.newValue||C)};return window.addEventListener("storage",e),function(){return window.removeEventListener("storage",e)}},[_]),e.useEffect(function(){P(null!=a?a:O)},[a,O]);var z=e.useMemo(function(){return{theme:O,setTheme:_,forcedTheme:a,resolvedTheme:"system"===O?K:O,themes:v?[].concat(T,["system"]):T,systemTheme:v?K:void 0}},[O,_,a,K,v,T]);/*#__PURE__*/return n.default.createElement(i.Provider,{value:z},/*#__PURE__*/n.default.createElement(s,{forcedTheme:a,disableTransitionOnChange:l,enableSystem:v,enableColorScheme:g,storageKey:S,themes:T,defaultTheme:C,attribute:k,value:x,children:L,attrs:J,nonce:I}),L)},s=e.memo(function(e){var t=e.forcedTheme,a=e.storageKey,i=e.attribute,c=e.enableSystem,u=e.enableColorScheme,l=e.defaultTheme,s=e.value,d=e.nonce,m="system"===l,f="class"===i?"var d=document.documentElement,c=d.classList;c.remove("+e.attrs.map(function(e){return"'"+e+"'"}).join(",")+");":"var d=document.documentElement,n='"+i+"',s='setAttribute';",h=u?r.includes(l)&&l?"if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'"+l+"'":"if(e==='light'||e==='dark')d.style.colorScheme=e":"",v=function(e,t,n){void 0===t&&(t=!1),void 0===n&&(n=!0);var o=s?s[e]:e,a=t?e+"|| ''":"'"+o+"'",c="";return u&&n&&!t&&r.includes(e)&&(c+="d.style.colorScheme = '"+e+"';"),"class"===i?c+=t||o?"c.add("+a+")":"null":o&&(c+="d[s](n,"+a+")"),c},y=t?"!function(){"+f+v(t)+"}()":c?"!function(){try{"+f+"var e=localStorage.getItem('"+a+"');if('system'===e||(!e&&"+m+")){var t='"+o+"',m=window.matchMedia(t);if(m.media!==t||m.matches){"+v("dark")+"}else{"+v("light")+"}}else if(e){"+(s?"var x="+JSON.stringify(s)+";":"")+v(s?"x[e]":"e",!0)+"}"+(m?"":"else{"+v(l,!1,!1)+"}")+h+"}catch(e){}}()":"!function(){try{"+f+"var e=localStorage.getItem('"+a+"');if(e){"+(s?"var x="+JSON.stringify(s)+";":"")+v(s?"x[e]":"e",!0)+"}else{"+v(l,!1,!1)+";}"+h+"}catch(t){}}();";/*#__PURE__*/return n.default.createElement("script",{nonce:d,dangerouslySetInnerHTML:{__html:y}})},function(){return!0}),d=function(e,t){if(!a){var n;try{n=localStorage.getItem(e)||void 0}catch(e){}return n||t}},m=function(){var e=document.createElement("style");return e.appendChild(document.createTextNode("*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")),document.head.appendChild(e),function(){window.getComputedStyle(document.body),setTimeout(function(){document.head.removeChild(e)},1)}},f=function(e){return e||(e=window.matchMedia(o)),e.matches?"dark":"light"};exports.ThemeProvider=function(t){return e.useContext(i)?/*#__PURE__*/n.default.createElement(e.Fragment,null,t.children):/*#__PURE__*/n.default.createElement(l,t)},exports.useTheme=function(){var t;return null!=(t=e.useContext(i))?t:c};
