(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{AvNi:function(e,a,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/form",function(){var e=t("BWbJ");return{page:e.default||e}}])},BWbJ:function(e,a,t){"use strict";t.r(a);var n=t("9Jkg"),i=t.n(n),l=t("0iUn"),u=t("sLSF"),r=t("MI3g"),c=t("a7VT"),o=t("AT/M"),s=t("Tit0"),m=t("vYYK"),p=t("q1tI"),d=t.n(p),h=(t("i8i4"),t("TIwn"),function(e){function a(){var e,t;Object(l.default)(this,a);for(var n=arguments.length,u=new Array(n),s=0;s<n;s++)u[s]=arguments[s];return t=Object(r.default)(this,(e=Object(c.default)(a)).call.apply(e,[this].concat(u))),Object(m.a)(Object(o.default)(t),"state",{name:"",title:"",description:"",rating:5,quality:5,value:5,joinDate:2018}),Object(m.a)(Object(o.default)(t),"handleChange",function(e){var a=e.target,n="checkbox"===a.type?a.checked:a.value,i=a.name;t.setState(Object(m.a)({},i,n))}),Object(m.a)(Object(o.default)(t),"handleSubmit",function(e){var a=t.state,n={name:a.name,title:a.title,description:a.description,rating:a.rating,quality:a.quality,value:a.value,joinDate:a.joinDate,date:new Date};fetch("http://localhost:3001/reviews",{method:"POST",body:i()(n),headers:{"Content-Type":"application/json"}}).then(function(e){return e.json()}).then(function(e){console.log("Success:",i()(e)),window.location.href="/"}).catch(function(e){return console.error("Error:",e)})}),t}return Object(s.default)(a,e),Object(u.default)(a,[{key:"render",value:function(){var e=this.state,a=e.name,t=e.title,n=e.description;e.rating,e.quality,e.value,e.joinDate;return d.a.createElement("div",null,d.a.createElement("form",{onSubmit:this.handleSubmit,className:"ui-form ui-grid ui-grid--compressed is-mobile is-multiline ui-pl--1 ui-pr--1"},d.a.createElement("div",{className:"ui-grid-col is-12 ui-text--center"},d.a.createElement("strong",{className:"ui-text__label ui-text__label--xl ui-display--block ui-mt--2 ui-mb--0"},"Product Review"),d.a.createElement("p",{className:"ui-color--paper-medium ui-mt--0 ui-mb--1"},"Tell us what you think")),d.a.createElement("div",{className:"ui-grid-col"},d.a.createElement("div",{className:"ui-input__text-wrapper"},d.a.createElement("input",{placeholder:"First Name",type:"text",className:"ui-input__text",name:"name",value:a,onChange:this.handleChange})),d.a.createElement("div",{className:"ui-input__text-wrapper"},d.a.createElement("input",{placeholder:"Review Title",type:"text",className:"ui-input__text",name:"title",value:t,onChange:this.handleChange})),d.a.createElement("div",{className:"ui-input__text-wrapper"},d.a.createElement("input",{placeholder:"Your Review",type:"text",className:"ui-input__text",name:"description",value:n,onChange:this.handleChange,size:"200"})),d.a.createElement("div",{className:"ui-input__radio-wrapper"},d.a.createElement("label",{htmlFor:"rating"},"Overall Rating"),d.a.createElement("input",{className:"ui-input__radio",type:"radio",name:"rating",value:1,onChange:this.handleChange}),d.a.createElement("input",{className:"ui-input__radio",type:"radio",name:"rating",value:2,onChange:this.handleChange}),d.a.createElement("input",{className:"ui-input__radio",type:"radio",name:"rating",value:3,onChange:this.handleChange}),d.a.createElement("input",{className:"ui-input__radio",type:"radio",name:"rating",value:4,onChange:this.handleChange}),d.a.createElement("input",{className:"ui-input__radio",type:"radio",name:"rating",value:4,onChange:this.handleChange})),d.a.createElement("div",{className:"ui-input__radio-wrapper"},d.a.createElement("label",{htmlFor:"quality"},"Quality"),d.a.createElement("input",{className:"ui-input__radio",type:"radio",name:"quality",value:1,onChange:this.handleChange}),d.a.createElement("input",{className:"ui-input__radio",type:"radio",name:"quality",value:2,onChange:this.handleChange}),d.a.createElement("input",{className:"ui-input__radio",type:"radio",name:"quality",value:3,onChange:this.handleChange}),d.a.createElement("input",{className:"ui-input__radio",type:"radio",name:"quality",value:4,onChange:this.handleChange}),d.a.createElement("input",{className:"ui-input__radio",type:"radio",name:"quality",value:4,onChange:this.handleChange})),d.a.createElement("div",{className:"ui-input__radio-wrapper"},d.a.createElement("label",{htmlFor:"value"},"Value"),d.a.createElement("input",{className:"ui-input__radio",type:"radio",name:"value",value:1,onChange:this.handleChange}),d.a.createElement("input",{className:"ui-input__radio",type:"radio",name:"value",value:2,onChange:this.handleChange}),d.a.createElement("input",{className:"ui-input__radio",type:"radio",name:"value",value:3,onChange:this.handleChange}),d.a.createElement("input",{className:"ui-input__radio",type:"radio",name:"value",value:4,onChange:this.handleChange}),d.a.createElement("input",{className:"ui-input__radio",type:"radio",name:"value",value:4,onChange:this.handleChange})),d.a.createElement("div",{className:"ui-input__select-wrapper"},d.a.createElement("label",{className:"ui-input__select-label",htmlFor:"someID","data-text":"Member Since"},"Member Since"),d.a.createElement("select",{name:"joinDate",onChange:this.handleChange,className:"ui-input__select"},d.a.createElement("option",{className:"ui-input__select-option ui-input__select-option--hidden",disabled:"",value:""}),d.a.createElement("option",{className:"ui-input__select-option",value:2012},"2012"),d.a.createElement("option",{className:"ui-input__select-option",value:2013},"2013"),d.a.createElement("option",{className:"ui-input__select-option",value:2014},"2014"),d.a.createElement("option",{className:"ui-input__select-option",value:2015},"2015"),d.a.createElement("option",{className:"ui-input__select-option",value:2016},"2016"),d.a.createElement("option",{className:"ui-input__select-option",value:2017},"2017"),d.a.createElement("option",{className:"ui-input__select-option",value:2018},"2018"),d.a.createElement("option",{className:"ui-input__select-option",value:2019},"2019")))),d.a.createElement("div",{className:"ui-grid-col is-12"},d.a.createElement("button",{className:"ui-btn ui-btn__primary ui-btn--xl ui-btn--block",type:"submit"},"Submit"))))}}]),a}(p.Component));a.default=h}},[["AvNi",1,0]]]);