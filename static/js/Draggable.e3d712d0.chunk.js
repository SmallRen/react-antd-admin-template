(this.webpackJsonpreact_antd_admin_template=this.webpackJsonpreact_antd_admin_template||[]).push([[12],{1268:function(t,e,n){t.exports=n.p+"static/media/draggable.e58eaef0.gif"},1336:function(t,e,n){"use strict";n.r(e);var a=n(0),i=n.n(a),o=n(472),r=n(1268),s=n.n(r);e.default=function(){var t='\n    \u4f60\u53ef\u4ee5\u8bd5\u7740\u62d6\u62fd\u4e00\u4e0b\u5de6\u4fa7\u5bfc\u822a\u83dc\u5355\u680f\u7684\u67d0\u4e00\u9879\uff0c\u5b83\u662f\u53ef\u4ee5\u62d6\u62fd\u7684\u54e6\u3002\n    \u672cDemo\u662f\u57fa\u4e8e<a href="https://github.com/atlassian/react-beautiful-dnd" target="_blank">react-beautiful-dnd</a>\u3002\n    <p><img src="'.concat(s.a,'"/></p>\n  ');return i.a.createElement("div",{className:"app-container"},i.a.createElement(o.a,{title:"\u5217\u8868\u62d6\u62fd",source:t}))}},472:function(t,e,n){"use strict";n(478);var a=n(477),i=n(42),o=n(43),r=n(45),s=n(44),u=n(0),c=n.n(u),l=function(){function t(e){Object(i.a)(this,t),this.opts=e||{},this.source=e.source,this.output=e.output,this.delay=e.delay||120,this.chain={parent:null,dom:this.output,val:[]},"function"!==typeof this.opts.done&&(this.opts.done=function(){})}return Object(o.a)(t,[{key:"init",value:function(){this.chain.val=this.convert(this.source,this.chain.val)}},{key:"convert",value:function(t,e){for(var n=Array.from(t.childNodes),a=0;a<n.length;a++){var i=n[a];if(3===i.nodeType)e=e.concat(i.nodeValue.split(""));else if(1===i.nodeType){var o=[];o=this.convert(i,o),e.push({dom:i,val:o})}}return e}},{key:"print",value:function(t,e,n){setTimeout((function(){t.appendChild(document.createTextNode(e)),n()}),this.delay)}},{key:"play",value:function(t){var e=this;if(t.val.length){var n=t.val.shift();if("string"===typeof n)this.print(t.dom,n,(function(){e.play(t)}));else{var a=n.dom.cloneNode();t.dom.appendChild(a),this.play({parent:t,dom:a,val:n.val})}}else t.parent?this.play(t.parent):this.opts.done()}},{key:"start",value:function(){this.init(),this.play(this.chain)}}]),t}(),p=function(t){Object(r.a)(n,t);var e=Object(s.a)(n);function n(){return Object(i.a)(this,n),e.apply(this,arguments)}return Object(o.a)(n,[{key:"componentDidMount",value:function(){new l({source:this.source,output:this.output,delay:30}).start()}},{key:"render",value:function(){var t=this;return c.a.createElement(a.a,{bordered:!1,className:"card-item",title:this.props.title,style:{minHeight:this.props.height},id:this.props.id},c.a.createElement("div",{style:{display:"none"},ref:function(e){return t.source=e},dangerouslySetInnerHTML:{__html:this.props.source}}),c.a.createElement("div",{ref:function(e){return t.output=e}}))}}]),n}(c.a.Component);p.defaultProps={title:"\u4f55\u65f6\u4f7f\u7528",source:"",height:136};e.a=p}}]);