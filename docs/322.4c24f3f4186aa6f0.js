"use strict";(self.webpackChunkpoc_gpt=self.webpackChunkpoc_gpt||[]).push([[322],{2322:(T,d,i)=>{i.r(d),i.d(d,{LoginModule:()=>S});var p=i(6895),r=i(3456),n=i(4650),h=i(5657),u=i(95);let g=(()=>{class t{constructor(o){this.cookieService=o}getToken(){return this.cookieService.get("aromToken")||(console.warn("No token in cookies !\nAdd a cookie {aromToken: THE_TOKEN}"),"")}static#t=this.\u0275fac=function(e){return new(e||t)(n.LFG(h.N))};static#o=this.\u0275prov=n.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var m=i(529);let f=(()=>{class t{constructor(o,e){this.tokenService=o,this.httpClient=e}doCall(){const o=this.tokenService.getToken();return this.httpClient.get("https://tdm-api.hp.gda.edf.fr/ipnn_kmu_rfp/v1/api/sites",{headers:{Authorization:`Bearer ${o}`}})}static#t=this.\u0275fac=function(e){return new(e||t)(n.LFG(g),n.LFG(m.eN))};static#o=this.\u0275prov=n.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var v=i(4144),k=i(9549),c=i(4006);const y=[{path:"",component:(()=>{class t{constructor(o,e,s,a){this.cookieService=o,this.router=e,this.keyService=s,this.dipnnService=a,this.value=""}ngOnInit(){console.log("on INIT"),this.dipnnService.doCall().subscribe(o=>console.log({resp:o}))}onSubmit(){this.cookieService.set("key-encryption-pass",this.value),this.keyService.init(),this.router.navigate(["/chat/talk"])}onInput(o){"Enter"==o.key&&this.onSubmit()}static#t=this.\u0275fac=function(e){return new(e||t)(n.Y36(h.N),n.Y36(r.F0),n.Y36(u.B),n.Y36(f))};static#o=this.\u0275cmp=n.Xpm({type:t,selectors:[["app-login"]],decls:3,vars:1,consts:[[1,"password-form"],[1,"chat-input-field"],["matInput","","type","text","placeholder","Mot de passe ?",3,"ngModel","ngModelChange","keydown"]],template:function(e,s){1&e&&(n.TgZ(0,"div",0)(1,"mat-form-field",1)(2,"input",2),n.NdJ("ngModelChange",function(l){return s.value=l})("keydown",function(l){return s.onInput(l)}),n.qZA()()()),2&e&&(n.xp6(2),n.Q6J("ngModel",s.value))},dependencies:[v.Nt,k.KE,c.Fj,c.JJ,c.On],styles:["[_nghost-%COMP%]{display:block;background-color:#d7d0c9;background-image:url(background.0e2e4ccb6f8f5a46.png);min-width:100vw;min-height:100vh}[_nghost-%COMP%]   .password-form[_ngcontent-%COMP%]{position:absolute;top:40%;margin:auto;width:100%}[_nghost-%COMP%]   .password-form[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]{margin:auto;display:block;width:50%}[_nghost-%COMP%]     .mat-mdc-text-field-wrapper{background:rgb(245,245,245)}"]})}return t})(),children:[]},{path:"**",redirectTo:""}];let C=(()=>{class t{static#t=this.\u0275fac=function(e){return new(e||t)};static#o=this.\u0275mod=n.oAB({type:t});static#n=this.\u0275inj=n.cJS({imports:[r.Bz.forChild(y),r.Bz]})}return t})();var M=i(2271);let S=(()=>{class t{static#t=this.\u0275fac=function(e){return new(e||t)};static#o=this.\u0275mod=n.oAB({type:t});static#n=this.\u0275inj=n.cJS({imports:[p.ez,C,M.m]})}return t})()}}]);