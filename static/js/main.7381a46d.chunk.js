(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,,function(t,e,n){t.exports=n.p+"static/media/reload.dbda2823.svg"},function(t,e,n){t.exports=n(28)},,,,,,function(t,e,n){},,,function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){"use strict";n.r(e);var a=n(0),c=n.n(a),r=n(9),o=n.n(r),s=(n(17),n(6)),i=n.n(s),l=n(7),u=n(1),m=n(2),h=n(4),f=n(3),p=n(5),d=n(10),v=n.n(d),g=(n(20),function(t){return c.a.createElement("img",{src:v.a,className:"reload",alt:"logo",onClick:t.imageClick})}),b=(n(21),function(t){function e(t){var n;return Object(u.a)(this,e),(n=Object(h.a)(this,Object(f.a)(e).call(this,t))).state={date:new Date},n}return Object(p.a)(e,t),Object(m.a)(e,[{key:"componentDidMount",value:function(){var t=this;this.timerID=setInterval(function(){return t.tick()},1e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.timerID)}},{key:"tick",value:function(){this.setState({date:new Date})}},{key:"render",value:function(){return c.a.createElement("div",{className:"clock"},this.state.date.toLocaleTimeString())}}]),e}(a.Component)),k=(n(22),function(){return c.a.createElement("div",{className:"credits"},"Credits: ",c.a.createElement("a",{href:"https://unsplash.com"},"Unsplash"),"\xa0&\xa0",c.a.createElement("a",{href:"https://www.svgrepo.com/svg/125334/reload"},"SVGrepo"))}),y=(n(23),function(t){return c.a.createElement("div",{className:"img",style:{backgroundImage:"url(".concat(t.src,")")}})}),O=(n(24),n(25),function(t){function e(){return Object(u.a)(this,e),Object(h.a)(this,Object(f.a)(e).apply(this,arguments))}return Object(p.a)(e,t),Object(m.a)(e,[{key:"render",value:function(){return c.a.createElement("ul",null,this.props.items.map(function(t){return c.a.createElement("li",{key:t.id},t.text)}))}}]),e}(a.Component)),j=function(t){function e(t){var n;return Object(u.a)(this,e),(n=Object(h.a)(this,Object(f.a)(e).call(this,t))).handleChange=function(t){n.setState({text:t.target.value})},n.handleSubmit=function(t){t.preventDefault();var e={id:Date.now(),text:n.state.text},a=n.state.items.concat(e);n.setState(function(t){return{items:a,text:""}}),localStorage.setItem("items",JSON.stringify(a))},n.localStorage=JSON.parse(localStorage.getItem("items")),console.log(localStorage.getItem("items")),console.log(n.localStorage),n.items=null!==n.localStorage?n.localStorage:[],n.state={text:"",items:n.items},n}return Object(p.a)(e,t),Object(m.a)(e,[{key:"render",value:function(){return c.a.createElement("div",{className:"memolist"},c.a.createElement("h3",null,"My plan for the day!"),c.a.createElement(O,{items:this.state.items}),c.a.createElement("form",{onSubmit:this.handleSubmit},c.a.createElement("input",{type:"text",id:"listItem",onChange:this.handleChange,value:this.state.text}),c.a.createElement("button",null,"Add #",this.state.items.length+1)))}}]),e}(a.Component),E=(n(26),function(t){function e(t){var n;return Object(u.a)(this,e),(n=Object(h.a)(this,Object(f.a)(e).call(this,t))).state={quote:"",author:""},n}return Object(p.a)(e,t),Object(m.a)(e,[{key:"componentDidMount",value:function(){this.fetchAsync()}},{key:"fetchAsync",value:function(){var t=Object(l.a)(i.a.mark(function t(){var e,n,a,c,r;return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return"https://favqs.com/api/qotd",t.prev=1,t.next=4,fetch("https://favqs.com/api/qotd");case 4:return e=t.sent,t.next=7,e.json();case 7:return n=t.sent,console.log(n),t.next=11,n.quote;case 11:a=t.sent,c=a.body,r=a.author,this.setState({quote:c,author:r}),t.next=20;break;case 17:t.prev=17,t.t0=t.catch(1),console.log(t.t0);case 20:case"end":return t.stop()}},t,this,[[1,17]])}));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){return c.a.createElement("div",{className:"qod"},this.state.quote," ",c.a.createElement("p",null,"(",this.state.author,")"))}}]),e}(a.Component)),w=(n(27),function(t){function e(t){var n;return Object(u.a)(this,e),(n=Object(h.a)(this,Object(f.a)(e).call(this,t))).imageClick=function(){console.log("Change background!"),n.fetchAsync()},n.state={src:""},n}return Object(p.a)(e,t),Object(m.a)(e,[{key:"componentDidMount",value:function(){this.fetchAsync()}},{key:"fetchAsync",value:function(){var t=Object(l.a)(i.a.mark(function t(){var e;return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return"https://source.unsplash.com/random",t.prev=1,t.next=4,fetch("https://source.unsplash.com/random");case 4:e=t.sent,console.log(e),this.setState({src:e.url}),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),console.log(t.t0);case 12:case"end":return t.stop()}},t,this,[[1,9]])}));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){return c.a.createElement("div",{className:"container"},c.a.createElement(b,null),c.a.createElement(g,{imageClick:this.imageClick}),c.a.createElement(j,null),c.a.createElement(y,{src:this.state.src}),c.a.createElement(E,null),c.a.createElement(k,null))}}]),e}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(c.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})}],[[11,1,2]]]);
//# sourceMappingURL=main.7381a46d.chunk.js.map