(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-58d93317"],{"68ed":function(e,t,i){},8076:function(e,t,i){"use strict";i("68ed")},"8e6e":function(e,t,i){"use strict";i.r(t);i("b0c0");var n=i("7a23"),c=i("37b6"),a=i.n(c),o=Object(n["O"])("data-v-1b10d3c0");Object(n["v"])("data-v-1b10d3c0");var r={id:"training-registration-form"},u=Object(n["i"])("p",{class:"section-title"},"Register",-1),l={class:"registration-container"},s=Object(n["i"])("div",{id:"registration-image"},[Object(n["i"])("img",{src:a.a,alt:"welcome","aria-hidden":"true"})],-1),p={id:"form-container"},b=Object(n["i"])("p",{id:"description"},"Register with us",-1),d={class:"input-container"},O={class:"input-container"},j={class:"input-container"},m={class:"input-container"},h={class:"input-container"},f={class:"input-container"},v=Object(n["i"])("legend",null,"Select topics of interest",-1),k={class:"checkbox-list"},g={class:"checkbox-pair"},y=Object(n["h"])(" Coffee "),x=Object(n["h"])(" Matooke "),M={class:"checkbox-pair"},V=Object(n["h"])(" Chicken "),w=Object(n["h"])(" Others "),U={class:"checkbox-pair"},F=Object(n["h"])(" Irish "),z={class:"checkbox-pair"},I=Object(n["h"])(" Maize "),S=Object(n["i"])("div",{class:"submit-container"},[Object(n["i"])("button",{class:"submit",type:"submit"},"Submit")],-1);Object(n["t"])();var q=o((function(e,t,i,c,a,o){return Object(n["s"])(),Object(n["e"])("div",r,[u,Object(n["i"])("div",l,[s,Object(n["i"])("div",p,[b,Object(n["i"])("form",{onSubmit:t[13]||(t[13]=Object(n["N"])((function(){return o.handleSubmitForm&&o.handleSubmitForm.apply(o,arguments)}),["prevent"]))},[Object(n["i"])("div",d,[Object(n["M"])(Object(n["i"])("input",{type:"text",name:"name",placeholder:"Name","onUpdate:modelValue":t[1]||(t[1]=function(e){return a.trainee.name=e}),required:""},null,512),[[n["I"],a.trainee.name]])]),Object(n["i"])("div",O,[Object(n["M"])(Object(n["i"])("input",{type:"email",placeholder:"Email Address",name:"email","onUpdate:modelValue":t[2]||(t[2]=function(e){return a.trainee.email=e}),required:""},null,512),[[n["I"],a.trainee.email]])]),Object(n["i"])("div",j,[Object(n["M"])(Object(n["i"])("input",{type:"text",placeholder:"Telephone",name:"telephone","onUpdate:modelValue":t[3]||(t[3]=function(e){return a.trainee.phone=e}),required:""},null,512),[[n["I"],a.trainee.phone]])]),Object(n["i"])("div",m,[Object(n["M"])(Object(n["i"])("input",{type:"text",name:"groupsize",placeholder:"Group size","onUpdate:modelValue":t[4]||(t[4]=function(e){return a.trainee.groupsize=e}),required:""},null,512),[[n["I"],a.trainee.groupsize]])]),Object(n["i"])("div",h,[Object(n["M"])(Object(n["i"])("input",{type:"text",name:"checkin",placeholder:"Visitation date","onUpdate:modelValue":t[5]||(t[5]=function(e){return a.trainee.checkin=e}),required:"",onfocus:'(this.type="date")'},null,512),[[n["I"],a.trainee.checkin]]),Object(n["M"])(Object(n["i"])("input",{type:"text",name:"bookingtype","onUpdate:modelValue":t[6]||(t[6]=function(e){return a.trainee.bookingtype=e}),hidden:""},null,512),[[n["I"],a.trainee.bookingtype]])]),Object(n["i"])("div",f,[Object(n["i"])("fieldset",null,[v,Object(n["i"])("div",k,[Object(n["i"])("div",g,[Object(n["i"])("span",null,[Object(n["M"])(Object(n["i"])("input",{type:"checkbox",name:"topics",value:"coffee","onUpdate:modelValue":t[7]||(t[7]=function(e){return a.trainee.topics=e})},null,512),[[n["F"],a.trainee.topics]]),y]),Object(n["i"])("span",null,[Object(n["M"])(Object(n["i"])("input",{type:"checkbox",name:"topics",value:"matooke","onUpdate:modelValue":t[8]||(t[8]=function(e){return a.trainee.topics=e})},null,512),[[n["F"],a.trainee.topics]]),x])]),Object(n["i"])("div",M,[Object(n["i"])("span",null,[Object(n["M"])(Object(n["i"])("input",{type:"checkbox",name:"topics",value:"chicken","onUpdate:modelValue":t[9]||(t[9]=function(e){return a.trainee.topics=e})},null,512),[[n["F"],a.trainee.topics]]),V]),Object(n["i"])("span",null,[Object(n["M"])(Object(n["i"])("input",{type:"checkbox",name:"topics",value:"others","onUpdate:modelValue":t[10]||(t[10]=function(e){return a.trainee.topics=e})},null,512),[[n["F"],a.trainee.topics]]),w])]),Object(n["i"])("div",U,[Object(n["i"])("span",null,[Object(n["M"])(Object(n["i"])("input",{type:"checkbox",name:"topics",value:"irish","onUpdate:modelValue":t[11]||(t[11]=function(e){return a.trainee.topics=e})},null,512),[[n["F"],a.trainee.topics]]),F])]),Object(n["i"])("div",z,[Object(n["i"])("span",null,[Object(n["M"])(Object(n["i"])("input",{type:"checkbox",name:"topics",value:"maize","onUpdate:modelValue":t[12]||(t[12]=function(e){return a.trainee.topics=e})},null,512),[[n["F"],a.trainee.topics]]),I])])])])]),S],32)])])])})),R=i("1da1"),T=(i("96cf"),i("3d20")),C=i.n(T),B={name:"TrainingRegistration",data:function(){return{trainee:{name:"",email:"",phone:"",groupsize:"",checkin:"",topics:[],bookingtype:"Training"}}},methods:{handleSubmitForm:function(){var e=this;return Object(R["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.$store.dispatch("saveTrainee",e.trainee);case 3:console.log(e.trainee),e.trainee={name:"",email:"",phone:"",groupsize:"",checkin:"",topics:[]},C.a.fire({title:"Thank you",text:"Your Booking has been received ",icon:"success",timer:1500,showConfirmButton:!1}),t.next=11;break;case 8:t.prev=8,t.t0=t["catch"](0),e.message="failed to submit; please, try again!";case 11:case"end":return t.stop()}}),t,null,[[0,8]])})))()}}};i("8076");B.render=q,B.__scopeId="data-v-1b10d3c0";t["default"]=B}}]);
//# sourceMappingURL=chunk-58d93317.c299a35f.js.map