"use strict";(self.webpackChunkpoc_gpt=self.webpackChunkpoc_gpt||[]).push([[322],{2322:(L,d,i)=>{i.r(d),i.d(d,{LoginModule:()=>T});var p=i(6895),c=i(2048),u=i(8182),n=i(4650),h=i(5657),g=i(95);let m=(()=>{class t{constructor(o){this.cookieService=o}getToken(){return this.cookieService.get("aromToken")||(console.warn("No token in cookies !\nAdd a cookie {aromToken: THE_TOKEN}"),"")}static#t=this.\u0275fac=function(e){return new(e||t)(n.LFG(h.N))};static#n=this.\u0275prov=n.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var f=i(529);let v=(()=>{class t{constructor(o,e){this.tokenService=o,this.httpClient=e}doCall(){const o=this.tokenService.getToken();return this.httpClient.get("https://tdm-api.hp.gda.edf.fr/ipnn_kmu_rfp/v1/api/sites",{headers:{Authorization:`Bearer ${o}`}})}static#t=this.\u0275fac=function(e){return new(e||t)(n.LFG(m),n.LFG(f.eN))};static#n=this.\u0275prov=n.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var y=i(4144),C=i(9549),l=i(4006);const k=[{path:"",component:(()=>{class t{constructor(o,e,s,a){this.cookieService=o,this.router=e,this.keyService=s,this.dipnnService=a,this.value="",this.apiKey=""}ngOnInit(){console.log("on INIT"),this.dipnnService.doCall().subscribe(o=>console.log({resp:o}))}onSubmit(){this.cookieService.set(u.bl,this.value),this.keyService.init(),this.router.navigate(["/llm"])}onInput(o){"Enter"==o.key&&this.onSubmit()}onCustomKeySubmit(){this.cookieService.set(u.ah,this.apiKey),this.keyService.init(),console.log("qsdf"),this.router.navigate(["/llm"])}onCustomKeyInput(o){"Enter"==o.key&&this.onCustomKeySubmit()}static#t=this.\u0275fac=function(e){return new(e||t)(n.Y36(h.N),n.Y36(c.F0),n.Y36(g.B),n.Y36(v))};static#n=this.\u0275cmp=n.Xpm({type:t,selectors:[["app-login"]],decls:5,vars:2,consts:[[1,"password-form"],[1,"chat-input-field"],["matInput","","type","text","placeholder","Mot de passe ?",3,"ngModel","ngModelChange","keydown"],["matInput","","type","text","placeholder","Ou cl\xe9 API ?",3,"ngModel","ngModelChange","keydown"]],template:function(e,s){1&e&&(n.TgZ(0,"div",0)(1,"mat-form-field",1)(2,"input",2),n.NdJ("ngModelChange",function(r){return s.value=r})("keydown",function(r){return s.onInput(r)}),n.qZA()(),n.TgZ(3,"mat-form-field",1)(4,"input",3),n.NdJ("ngModelChange",function(r){return s.apiKey=r})("keydown",function(r){return s.onCustomKeyInput(r)}),n.qZA()()()),2&e&&(n.xp6(2),n.Q6J("ngModel",s.value),n.xp6(2),n.Q6J("ngModel",s.apiKey))},dependencies:[y.Nt,C.KE,l.Fj,l.JJ,l.On],styles:["[_nghost-%COMP%]{display:block;background-color:#d7d0c9;background-image:url(background.0e2e4ccb6f8f5a46.png);min-width:100vw;min-height:100vh}[_nghost-%COMP%]   .password-form[_ngcontent-%COMP%]{position:absolute;top:40%;margin:auto;width:100%}[_nghost-%COMP%]   .password-form[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]{margin:auto;display:block;width:50%}[_nghost-%COMP%]     .mat-mdc-text-field-wrapper{background:rgb(245,245,245)}"]})}return t})(),children:[]},{path:"**",redirectTo:""}];let M=(()=>{class t{static#t=this.\u0275fac=function(e){return new(e||t)};static#n=this.\u0275mod=n.oAB({type:t});static#o=this.\u0275inj=n.cJS({imports:[c.Bz.forChild(k),c.Bz]})}return t})();var S=i(2271);let T=(()=>{class t{static#t=this.\u0275fac=function(e){return new(e||t)};static#n=this.\u0275mod=n.oAB({type:t});static#o=this.\u0275inj=n.cJS({imports:[p.ez,M,S.m]})}return t})()}}]);