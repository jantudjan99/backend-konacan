(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-a8efeab2"],{"16b3":function(a,t,e){"use strict";e.r(t);var s=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",[e("br"),e("br"),e("br"),a._m(0),e("div",{staticClass:"modal fade",attrs:{id:"ModalLoginForm"}},[e("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[e("div",{staticClass:"modal-content"},[a._m(1),e("div",{staticClass:"modal-body"},[e("form",{attrs:{role:"form",method:"novaoObjava()",action:""}},[e("input",{attrs:{type:"hidden",name:"_token",value:""}}),a._m(2),e("div",{staticClass:"form-group"},[e("span",{staticClass:"fw-500"},[a._v("Grad")]),e("input",{directives:[{name:"model",rawName:"v-model",value:a.grad,expression:"grad"}],staticClass:"form-control input-lg",attrs:{type:"text",name:"grad",id:"grad",value:""},domProps:{value:a.grad},on:{input:function(t){t.target.composing||(a.grad=t.target.value)}}})]),e("div",{staticClass:"form-group"},[e("span",{staticClass:"fw-500"},[a._v("Vrijeme")]),e("input",{directives:[{name:"model",rawName:"v-model",value:a.vrijeme,expression:"vrijeme"}],staticClass:"form-control input-lg",attrs:{type:"text",name:"vrijeme",id:"vrijeme",value:""},domProps:{value:a.vrijeme},on:{input:function(t){t.target.composing||(a.vrijeme=t.target.value)}}})]),e("div",{staticClass:"form-group"},[e("span",{staticClass:"fw-500"},[a._v("Adresa")]),e("input",{directives:[{name:"model",rawName:"v-model",value:a.adresa,expression:"adresa"}],staticClass:"form-control input-lg",attrs:{type:"text",name:"adresa",id:"adresa",value:""},domProps:{value:a.adresa},on:{input:function(t){t.target.composing||(a.adresa=t.target.value)}}})]),e("div",{staticClass:"form-group"},[e("span",{staticClass:"fw-500"},[a._v("Potrebna oprema: ")]),e("button",{staticClass:"oprema",on:{click:function(t){return t.preventDefault(),a.Da()}}},[a._v("Da")]),e("button",{staticClass:"oprema",on:{click:function(t){return t.preventDefault(),a.Ne()}}},[a._v("Ne")])]),a.store.prazno?e("p",{attrs:{id:"poruka"}},[a._v("Popunite sva polja!")]):a._e(),e("div",[e("button",{staticClass:"btn",attrs:{type:"submit"},on:{click:function(t){return t.preventDefault(),a.dodajDogadaj()}}},[a._v("Objavi")])])])])])])]),e("div",{staticClass:"row"},[e("div",{staticClass:"col s12",attrs:{id:"admin"}},[e("div",{staticClass:"card material-table"},[a._m(3),e("table",{attrs:{id:"datatable"}},a._l(a.objave,(function(t){return e("div",{key:t.id},[e("tbody",[e("tr",[e("div",{staticClass:"marginaTablice"},[e("td",[a._v(a._s(t.email))]),e("td",[a._v(a._s(t.grad))]),e("td",[a._v(a._s(t.vrijeme))]),e("td",[a._v(a._s(t.adresa)),e("p",{staticClass:"paragraf"})]),e("td",[a._v("Oprema: "+a._s(t.ponijetiOpremu))])])])])])})),0)])])])])},r=[function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"objavabtn"},[e("input",{staticClass:"objava",attrs:{type:"text",placeholder:"Dodaj objavu...",id:"dogadaji","data-toggle":"modal","data-target":"#ModalLoginForm"}}),e("button",{staticClass:"btn1 objaviGumb",attrs:{type:"button","data-toggle":"modal","data-target":"#ModalLoginForm"}},[a._v(" Objavi")])])},function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"modal-header"},[e("h1",{staticClass:"modal-title"},[a._v("Događaji")])])},function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"form-group"},[e("label",{staticClass:"control-label",attrs:{for:"dogadaji"}},[a._v("Dodaj događaj")]),e("br")])},function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"table-header"},[e("span",{staticClass:"table-title"},[a._v("Turniri")])])}],i=(e("96cf"),e("1da1")),o=e("c0d6"),n=e("dde5"),l={data:function(){return{grad:"",vrijeme:"",adresa:"",ponijetiOpremu:null,objave:[],store:o["a"]}},methods:{Da:function(){this.ponijetiOpremu="Da"},Ne:function(){this.ponijetiOpremu="Ne"},dodajDogadaj:function(){if(""==this.grad||""==this.vrijeme||""==this.adresa||null==this.ponijetiOpremu)o["a"].prazno=!0;else{var a={email:o["a"].email,grad:this.grad,vrijeme:this.vrijeme,adresa:this.adresa,ponijetiOpremu:this.ponijetiOpremu};n["b"].dodaj_dogadaj4(a);console.log(a),console.log("evo me hehe")}}},created:function(){var a=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return console.log("uso sam u dohvati objavu"),t.next=3,n["b"].dohvatiCatan();case 3:a.objave=t.sent,a.drugeobjave=JSON.parse(localStorage.getItem("catan")),console.log(JSON.parse(localStorage.getItem("catan")));case 6:case"end":return t.stop()}}),t)})))()}},d=l,c=(e("ea70"),e("2877")),u=Object(c["a"])(d,s,r,!1,null,null,null);t["default"]=u.exports},e240:function(a,t,e){},ea70:function(a,t,e){"use strict";e("e240")}}]);
//# sourceMappingURL=chunk-a8efeab2.13fccdaf.js.map