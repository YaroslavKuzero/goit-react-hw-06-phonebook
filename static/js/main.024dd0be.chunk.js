(this["webpackJsonpgoit-react-hw-06-phonebook"]=this["webpackJsonpgoit-react-hw-06-phonebook"]||[]).push([[0],{21:function(e,t,n){e.exports={find_contact:"FindContact_find_contact__1SlRi"}},23:function(e,t,n){e.exports=n(37)},36:function(e,t,n){},37:function(e,t,n){"use strict";n.r(t);var a,c=n(0),o=n.n(c),r=n(9),l=n.n(r),u=n(10),i=n(11),s=n(13),m=n(12),_=n(4),d=n(19),b=n(2),f=n(5),p=n(22),h=n(1),C=n(39),O={addContact:Object(b.b)("contacts/add",(function(e){return{payload:{id:Object(C.a)(),name:e.name,number:e.number}}})),deleteContact:Object(b.b)("contacts/delete"),changeFilter:Object(b.b)("contacts/filter")},E=Object(b.c)([],(a={},Object(f.a)(a,O.addContact,(function(e,t){return[t.payload].concat(Object(p.a)(e))})),Object(f.a)(a,O.deleteContact,(function(e,t){var n=t.payload;return e.filter((function(e){return e.id!==n}))})),a)),j=Object(b.c)("",Object(f.a)({},O.changeFilter,(function(e,t){return t.payload}))),v=Object(h.c)({contacts:E,filter:j}),g=n(3),y=n(20),k={key:"contacts",storage:n.n(y).a},N=Object(g.g)(k,v),x=Object(b.a)({reducer:N,devTools:!1,middleware:Object(b.d)({serializableCheck:{ignoredActions:[g.a,g.f,g.b,g.c,g.d,g.e]}})}),w={store:x,persistor:Object(g.h)(x)},F=n(7),L=n.n(F),S={name:"",number:""},B=function(e){Object(s.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(e=t.call.apply(t,[this].concat(c))).state={name:"",number:""},e.addContactHandler=function(t){t.preventDefault();var n=e.props,a=n.contacts,c=n.onSubmit,o=e.state.name;a.find((function(e){return e.name.toLowerCase()===o.toLowerCase()}))?alert("".concat(o," already in your contact list")):(c(e.state),e.resetInputs())},e.changeHandler=function(t){var n=t.currentTarget,a=n.name,c=n.value;e.setState(Object(f.a)({},a,c))},e.resetInputs=function(){e.setState(S)},e}return Object(i.a)(n,[{key:"render",value:function(){var e=this.state,t=e.name,n=e.number;return o.a.createElement("form",{className:L.a.form,onSubmit:this.addContactHandler},o.a.createElement("label",null,o.a.createElement("input",{className:L.a.input_name,name:"name",type:"text",placeholder:"Name",value:t,onChange:this.changeHandler})),o.a.createElement("label",null,o.a.createElement("input",{className:L.a.input_num,name:"number",type:"tel",placeholder:"Number",value:n,onChange:this.changeHandler})),o.a.createElement("button",{className:L.a.btn_add,type:"submit"},"Add contact"))}}]),n}(c.Component),H=Object(_.b)((function(e){return{contacts:e.contacts}}),(function(e){return{onSubmit:function(t){return e(O.addContact(t))}}}))(B),I=n(21),P=n.n(I),A=Object(_.b)((function(e){return{value:e.filter}}),(function(e){return{onChange:function(t){return e(O.changeFilter(t.target.value))}}}))((function(e){var t=e.value,n=e.onChange;return o.a.createElement("label",null,o.a.createElement("input",{className:P.a.find_contact,type:"text",placeholder:"Find contact by name",value:t,onChange:n}))})),J=n(6),D=n.n(J),M=function(e,t){var n=t.toLowerCase();return e.filter((function(e){return e.name.toLowerCase().includes(n)}))},T=Object(_.b)((function(e){return{items:M(e.contacts,e.filter)}}),(function(e){return{onDelete:function(t){return e(O.deleteContact(t))}}}))((function(e){var t=e.items,n=e.onDelete;return o.a.createElement("ul",{className:D.a.contact_list},t.map((function(e){return o.a.createElement("li",{className:D.a.contact_list_item,key:e.id},o.a.createElement("span",{className:D.a.contact_name},e.name,": "),o.a.createElement("span",{className:D.a.contact_number},e.number),o.a.createElement("button",{className:D.a.btn_delete,title:"delete",onClick:function(){return n(e.id)}},"x"))})))})),V=n(8),X=n.n(V),z=function(e){Object(s.a)(n,e);var t=Object(m.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){return o.a.createElement("div",{className:X.a.phonebook},o.a.createElement("h1",{className:X.a.phonebook_header},"Phonebook"),o.a.createElement("h2",{className:X.a.section_header},"Create a new contact"),o.a.createElement(_.a,{store:w.store},o.a.createElement(d.a,{loading:null,persistor:w.persistor},o.a.createElement(H,null),o.a.createElement("h2",{className:X.a.section_header},"Contacts"),o.a.createElement(A,null),o.a.createElement(T,null))))}}]),n}(c.Component);n(36);var G=function(){return o.a.createElement(c.Fragment,null,o.a.createElement(z,null))};l.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(G,null)),document.getElementById("root"))},6:function(e,t,n){e.exports={contact_list:"ContactList_contact_list__3Oc4x",contact_list_item:"ContactList_contact_list_item__-SX2V",btn_delete:"ContactList_btn_delete__rw0JX",contact_name:"ContactList_contact_name__16ElV",contact_number:"ContactList_contact_number__sx8Qx",total_contacts:"ContactList_total_contacts__1IrPn"}},7:function(e,t,n){e.exports={form:"Form_form__2TM1N",input_name:"Form_input_name__1ZOWf",input_num:"Form_input_num__2GmlK",btn_add:"Form_btn_add__A_Mxs"}},8:function(e,t,n){e.exports={phonebook:"PhoneBook_phonebook__2sJx_",phonebook_header:"PhoneBook_phonebook_header__2yB4I",section_header:"PhoneBook_section_header__1yS1d"}}},[[23,1,2]]]);
//# sourceMappingURL=main.024dd0be.chunk.js.map