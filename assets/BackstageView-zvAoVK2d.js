import{r as l,o as y,c as D,w as t,e,j as X,g as n,t as Y,a as x,u as Z,k as ee,d as E,i as s,F as te,l as le,E as ne,p as ae,h as oe}from"./index-CcXq1M0O.js";import{_ as se}from"./plugin-vueexport-helper-DlAUqK2U.js";const ce="/dk_pratice_backstage/logo-v.svg",I={__name:"ButtonView",props:{title:{type:String,required:!0},icon:{type:String,default:()=>"Close"}},setup(u){const m=u;return(w,C)=>{const k=l("el-icon"),r=l("el-button");return y(),D(r,{color:"#828282",class:"text-white",dark:w.isDark},{default:t(()=>[e(k,{size:20},{default:t(()=>[(y(),D(X(m.icon)))]),_:1}),n(" "+Y(m.title),1)]),_:1},8,["dark"])}}},p=u=>(ae("data-v-f18129ee"),u=u(),oe(),u),ie={class:"common-layout"},re={class:"p-5 alignment-container flex justify-between items-center"},de=p(()=>s("img",{src:ce,alt:"格上租車橫式Logo"},null,-1)),ue=p(()=>s("h2",{class:"font-500 text-5"},"格上駕駛附駕平台",-1)),_e=p(()=>s("span",null,"車商資料管理",-1)),pe=p(()=>s("span",null,"業務管理",-1)),me={class:"bg-white m-5 border-rounded-1"},fe=p(()=>s("div",{class:"grid-content ep-bg-white"},[s("h1",{class:"text-6 font-600 p-5"},"車商基本資料")],-1)),be=p(()=>s("span",null,"新增車商基本資料",-1)),ve={class:"dialog-footer"},ge={class:"grid-content ep-bg-white mx-5"},he={class:"flex flex-wrap gap-4 items-center"},xe={class:"grid-content ep-bg-white"},ye={__name:"BackstageView",setup(u){const m=x("");x(!0);const w=Z(),C=()=>{localStorage.removeItem("token"),w.push("/admin/login")},k=[{value:"機場接送",label:"機場接送"},{value:"代駕服務",label:"代駕服務"},{value:"計時包車",label:"計時包車"},{value:"長照接駁",label:"長照接駁"}],r=x(!1),F=c=>{ne.confirm("是否確認完資訊?").then(function(){c()}).catch(function(){})},V=x(!1),z=[{enabled:!0,cardealer:"7",cardealername:"格上汽車",importance:"1",servertype:"機場接送、代駕服務、計時包車、長照接駁",bidnum:"12208883",principal:"",contactnum:""},{enabled:!1,cardealer:"7",cardealername:"格上汽車",importance:"1",servertype:"機場接送、代駕服務",bidnum:"12208883",principal:"",contactnum:""},{enabled:!0,cardealer:"7",cardealername:"格上汽車",importance:"1",servertype:"機場接送、代駕服務、計時包車",bidnum:"12208883",principal:"",contactnum:""},{enabled:!1,cardealer:"7",cardealername:"格上汽車",importance:"1",servertype:"代駕服務",bidnum:"12208883",principal:"",contactnum:""}],U=ee(()=>V.value?z.filter(c=>!c.enabled):z.filter(c=>c.enabled));return(c,o)=>{const $=l("fold"),b=l("el-icon"),v=l("el-space"),f=l("el-button"),j=l("el-header"),N=l("van"),d=l("el-menu-item"),g=l("el-sub-menu"),O=l("el-sub-item"),L=l("shop"),R=l("el-menu"),_=l("el-col"),h=l("el-row"),q=l("el-aside"),B=l("el-breadcrumb-item"),A=l("el-breadcrumb"),M=l("el-dialog"),T=l("el-option"),G=l("el-select"),H=l("el-checkbox"),J=l("Edit"),i=l("el-table-column"),K=l("el-switch"),P=l("el-table"),Q=l("el-main"),S=l("el-container");return y(),E("div",ie,[e(S,null,{default:t(()=>[e(j,null,{default:t(()=>[s("div",null,[s("nav",re,[e(v,{direction:"horizontal",alignment:"center",size:16},{default:t(()=>[de,ue,e(b,{color:"#FF5600",size:22},{default:t(()=>[e($)]),_:1})]),_:1}),e(v,null,{default:t(()=>[e(f,{type:"primary",class:"text-4 font-500 rounded-full mx-auto",onClick:C,plain:""},{default:t(()=>[n("登出")]),_:1})]),_:1})])])]),_:1}),e(S,null,{default:t(()=>[e(q,{class:"bg-primary h-screen",width:"260px"},{default:t(()=>[e(h,{class:"tac",width:"260px"},{default:t(()=>[e(_,{span:24},{default:t(()=>[e(R,{"active-text-color":"#fff","background-color":"#3366A2",class:"el-menu-vertical-demo","default-active":"1-1","text-color":"#fff",onOpen:c.handleOpen,onClose:F},{default:t(()=>[e(g,{index:"1"},{title:t(()=>[e(b,null,{default:t(()=>[e(N)]),_:1}),_e]),default:t(()=>[e(d,{index:"1-1",class:"menu-active"},{default:t(()=>[n("車商基本資料")]),_:1}),e(d,{index:"1-2"},{default:t(()=>[n("司機資料維護")]),_:1}),e(g,{index:"1-3"},{title:t(()=>[n("駕駛排班設定")]),default:t(()=>[e(d,{index:"1-3-1"},{default:t(()=>[n("駕駛管理")]),_:1}),e(d,{index:"1-3-2"},{default:t(()=>[n("當月駕駛班表")]),_:1}),e(d,{index:"1-3-3"},{default:t(()=>[n("排班設定")]),_:1})]),_:1}),e(g,{index:"1-4"},{title:t(()=>[n("車商價格設定")]),default:t(()=>[e(d,{index:"1-4-1"},{default:t(()=>[n("其他價格設定")]),_:1}),e(d,{index:"1-4-2"},{default:t(()=>[n("連續假期設定")]),_:1})]),_:1}),e(O,{index:"1-5"},{title:t(()=>[n("車商端公告管理")]),_:1})]),_:1}),e(g,{index:"2"},{title:t(()=>[e(b,null,{default:t(()=>[e(L)]),_:1}),pe]),default:t(()=>[e(d,{index:"2-1"},{default:t(()=>[n("合約設定")]),_:1})]),_:1})]),_:1},8,["onOpen"])]),_:1})]),_:1})]),_:1}),e(Q,{class:"p-0 bg-bg-gray"},{default:t(()=>[e(A,{separator:"/",class:""},{default:t(()=>[e(B,{to:{path:"/"}},{default:t(()=>[n("車商資料管理")]),_:1}),e(B,null,{default:t(()=>[n("車商基本資料")]),_:1})]),_:1}),s("div",me,[e(h,{justify:"space-between",alignment:"center","me-5":""},{default:t(()=>[e(_,{span:18},{default:t(()=>[fe]),_:1}),e(_,{span:3},{default:t(()=>[e(f,{type:"primary",round:"",onClick:o[0]||(o[0]=a=>r.value=!0),class:"my-5 w-full"},{default:t(()=>[n(" 新增 ")]),_:1}),e(M,{modelValue:r.value,"onUpdate:modelValue":o[3]||(o[3]=a=>r.value=a),title:"新增車商基本資料",width:"500","before-close":F},{footer:t(()=>[s("div",ve,[e(f,{onClick:o[1]||(o[1]=a=>r.value=!1)},{default:t(()=>[n("取消")]),_:1}),e(f,{type:"primary",onClick:o[2]||(o[2]=a=>r.value=!1)},{default:t(()=>[n(" 儲存 ")]),_:1})])]),default:t(()=>[be]),_:1},8,["modelValue"])]),_:1})]),_:1}),e(h,{justify:"space-between"},{default:t(()=>[e(_,{span:18},{default:t(()=>[e(v,{direction:"horizontal",alignment:"center",class:"pb-5"},{default:t(()=>[s("div",ge,[s("div",he,[e(G,{modelValue:m.value,"onUpdate:modelValue":o[4]||(o[4]=a=>m.value=a),placeholder:"服務類型",size:"large",style:{width:"200px"}},{default:t(()=>[(y(),E(te,null,le(k,a=>e(T,{key:a.value,label:a.label,value:a.value},null,8,["label","value"])),64))]),_:1},8,["modelValue"])])]),e(I,{title:"清除條件"}),e(I,{title:"搜尋",color:"#E6653C",icon:"Search"})]),_:1})]),_:1}),e(_,{span:4},{default:t(()=>[e(v,{direction:"horizontal",alignment:"center",class:"pb-5"},{default:t(()=>[s("div",xe,[e(H,{modelValue:V.value,"onUpdate:modelValue":o[5]||(o[5]=a=>V.value=a),label:"顯示停用項目",size:"large",alignment:"center"},null,8,["modelValue"])])]),_:1})]),_:1})]),_:1}),e(h,null,{default:t(()=>[e(_,{span:23,class:"mx-5 mb-5"},{default:t(()=>[e(P,{data:U.value,border:"",style:{width:"100%"},"row-class-name":c.tableRowClassName,"header-cell-style":{background:"#F5F7F9"}},{default:t(()=>[e(i,{align:"center","row-style":"#F5F7F9",label:"操作"},{default:t(()=>[e(f,{type:"primary",link:"",onClick:o[6]||(o[6]=a=>r.value=!0)},{default:t(()=>[e(b,{size:25},{default:t(()=>[e(J)]),_:1})]),_:1})]),_:1}),e(i,{align:"center",label:"啟用"},{default:t(({row:a})=>[e(K,{modelValue:a.enabled,"onUpdate:modelValue":W=>a.enabled=W,class:"mt-2",style:{"margin-left":"24px"},"inline-prompt":"","active-icon":c.Check,"inactive-icon":c.Close},null,8,["modelValue","onUpdate:modelValue","active-icon","inactive-icon"])]),_:1}),e(i,{align:"center",prop:"cardealer",label:"車商代碼"}),e(i,{align:"center",prop:"cardealername",label:"車商簡稱"}),e(i,{align:"center",prop:"importance",label:"重要度"}),e(i,{align:"center",prop:"servertype",label:"服務類型"}),e(i,{align:"center",prop:"bidnum",label:"統一編號"}),e(i,{align:"center",prop:"principal",label:"負責人"}),e(i,{align:"center",prop:"contactnum",label:"聯絡電話"})]),_:1},8,["data","row-class-name"])]),_:1})]),_:1})])]),_:1})]),_:1})]),_:1})])}}},Ve=se(ye,[["__scopeId","data-v-f18129ee"]]);export{Ve as default};
