import{a as i,u as v,b as w,d as y,e,w as o,r as t,o as k,f as V,g as B,p as I,h as S,i as p}from"./index-CcXq1M0O.js";import{_ as N}from"./plugin-vueexport-helper-DlAUqK2U.js";const C="/dk_pratice_backstage/logo.svg",m=s=>(I("data-v-fd9f14a2"),s=s(),S(),s),F={class:"common-layout bg-primary h-screen flex justify-center bgimage"},z=m(()=>p("img",{src:C,class:"block w-full h-full mb-3 mx-auto",alt:"",style:{width:"92px"}},null,-1)),L=m(()=>p("p",{class:"font-600 text-primary text-center mb-7"},"格上駕駛附駕平台",-1)),M=m(()=>p("h1",{class:"font-600 text-8 text-primary text-center mb-15"},"客服端",-1)),R={__name:"BackstageLogin",setup(s){const l=i(""),a=i(""),_=v();w(()=>{l.value="",a.value=""});const f=()=>{if(!l.value.trim()||!a.value.trim()){alert("帳號與密碼欄位不可空白");return}const r=JSON.stringify({useraccount:l.value,password:a.value});localStorage.setItem("token",r),_.push("/admin/carinfo")};return(r,n)=>{const d=t("el-input"),c=t("el-form-item"),b=t("el-button"),g=t("el-form"),h=t("el-col"),x=t("el-row");return k(),y("div",F,[e(x,{class:"row-bg",align:"middle"},{default:o(()=>[e(h,{span:8},{default:o(()=>[e(g,{ref:"ruleFormRef",style:{"max-width":"600px"},model:r.ruleForm,"status-icon":"",rules:r.rules,"label-width":"auto",class:"demo-ruleForm form bg-white pt-8 px-8 border-rounded-1"},{default:o(()=>[z,L,M,e(c,{label:"帳號",type:"font-size-large",prop:"checkPass",class:"mb-10 font-600"},{default:o(()=>[e(d,{type:"account",autocomplete:"off",class:"border-none",placeholder:"請輸入帳號",modelValue:l.value,"onUpdate:modelValue":n[0]||(n[0]=u=>l.value=u)},null,8,["modelValue"])]),_:1}),e(c,{label:"密碼",prop:"pass",class:"mb-12 font-600"},{default:o(()=>[e(d,{type:"password",autocomplete:"off",placeholder:"請輸入密碼",modelValue:a.value,"onUpdate:modelValue":n[1]||(n[1]=u=>a.value=u)},null,8,["modelValue"])]),_:1}),e(c,null,{default:o(()=>[e(b,{type:"primary",size:"large",class:"bg-primary border-0 text-5 font-500 px-15 rounded-full mx-auto",onClick:V(f,["prevent"])},{default:o(()=>[B("登入")]),_:1})]),_:1})]),_:1},8,["model","rules"])]),_:1})]),_:1})])}}},E=N(R,[["__scopeId","data-v-fd9f14a2"]]);export{E as default};
