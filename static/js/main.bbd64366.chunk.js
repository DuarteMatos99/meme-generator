(this["webpackJsonpmeme-generator"]=this["webpackJsonpmeme-generator"]||[]).push([[0],{14:function(e,t,a){},15:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var n=a(0),m=a.n(n),l=a(3),o=a.n(l);a(14),a(15);var r=function(){return m.a.createElement("header",null,m.a.createElement("img",{src:"http://www.pngall.com/wp-content/uploads/2016/05/Trollface.png",alt:"Problem?"}),m.a.createElement("p",null,"Meme Generator"))},c=a(4),i=a(5),s=a(6),u=a(1),h=a(8),p=a(7),d=function(e){Object(h.a)(a,e);var t=Object(p.a)(a);function a(){var e;return Object(i.a)(this,a),(e=t.call(this)).state={topText:"",bottomText:"",randomImage:"http://i.imgflip.com/1bij.jpg",allMemeImgs:[]},e.handleChange=e.handleChange.bind(Object(u.a)(e)),e.handleSubmit=e.handleSubmit.bind(Object(u.a)(e)),e}return Object(s.a)(a,[{key:"handleChange",value:function(e){var t=e.target,a=t.name,n=t.value;this.setState(Object(c.a)({},a,n))}},{key:"handleSubmit",value:function(e){e.preventDefault();var t=this.state.allMemeImgs.map((function(e){return e.url}))[Math.floor(Math.random()*this.state.allMemeImgs.length)];this.setState({randomImage:t})}},{key:"componentDidMount",value:function(){var e=this;fetch("https://api.imgflip.com/get_memes").then((function(e){return e.json()})).then((function(t){e.setState({allMemeImgs:t.data.memes})}))}},{key:"render",value:function(){return m.a.createElement("div",null,m.a.createElement("form",{className:"meme-form",onSubmit:this.handleSubmit},m.a.createElement("input",{type:"text",value:this.state.topText,name:"topText",placeholder:"Top Text",onChange:this.handleChange}),m.a.createElement("input",{type:"text",value:this.state.bottomText,name:"bottomText",placeholder:"Bottom Text",onChange:this.handleChange}),m.a.createElement("button",{type:"submit"},"Gen")),m.a.createElement("div",{className:"meme"},m.a.createElement("img",{src:this.state.randomImage,alt:""}),m.a.createElement("h2",{className:"top"},this.state.topText),m.a.createElement("h2",{className:"bottom"},this.state.bottomText)))}}]),a}(n.Component);var g=function(){return m.a.createElement("div",{className:"App"},m.a.createElement(r,null),m.a.createElement(d,null))};o.a.render(m.a.createElement(g,null),document.getElementById("root"))},9:function(e,t,a){e.exports=a(16)}},[[9,1,2]]]);
//# sourceMappingURL=main.bbd64366.chunk.js.map