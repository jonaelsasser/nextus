"use strict";(self.webpackChunkyuewu_dev=self.webpackChunkyuewu_dev||[]).push([[8503],{31346:(h,r,e)=>{e.r(r),e.d(r,{default:()=>$});var t=e(53547),l=e(22072),i=e(69554),n=e(22551),R=e(185),f=e(53979),v=e(29728),c=e(49066),M=e(41580),P=e(11047),A=e(75515),y=e(11276),E=e(67819),S=e(20707),O=e(16364),u=e(85018),g=e(8934),C=e(94123),D=e(80826),d=e(93742),s=e(90306),o=e(54863),F=e(25752);const U=(0,o.default)(F.E)`
  svg {
    height: 1rem;
    width: 1rem;
    path {
      fill: ${({theme:a})=>a.colors.neutral600};
    }
  }
`;var T=e(87561);const K=T.Ry().shape({restrictedAccess:T.O7(),password:T.Z_().when("restrictedAccess",(a,p)=>a?p.required(n.translatedErrors.required):p)}),$=()=>{(0,n.useFocusWhenNavigate)();const{formatMessage:a}=(0,l.Z)(),{submitMutation:p,data:Z,isLoading:w}=(0,s.Z)(),[I,x]=(0,t.useState)(!1),Q=L=>{p.mutate({prefix:Z?.prefix,body:L})};return t.createElement(R.o,null,w?t.createElement(n.LoadingIndicatorPage,null,"Plugin settings are loading"):t.createElement(i.Formik,{initialValues:{restrictedAccess:Z?.documentationAccess.restrictedAccess||!1,password:""},onSubmit:Q,validationSchema:K},({handleSubmit:L,values:m,handleChange:N,errors:B,setFieldTouched:G,setFieldValue:W})=>t.createElement(n.Form,{noValidate:!0,onSubmit:L},t.createElement(f.T,{title:a({id:(0,d.O)("plugin.name"),defaultMessage:"Documentation"}),subtitle:a({id:(0,d.O)("pages.SettingsPage.header.description"),defaultMessage:"Configure the documentation plugin"}),primaryAction:t.createElement(n.CheckPermissions,{permissions:D.Z.update},t.createElement(v.z,{type:"submit",startIcon:t.createElement(u.Z,null)},a({id:(0,d.O)("pages.SettingsPage.Button.save"),defaultMessage:"Save"})))}),t.createElement(c.D,null,t.createElement(M.x,{background:"neutral0",hasRadius:!0,shadow:"filterShadow",paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7},t.createElement(P.k,{direction:"column",alignItems:"stretch",gap:4},t.createElement(A.Z,{variant:"delta",as:"h2"},a({id:"global.settings",defaultMessage:"Settings"})),t.createElement(y.r,{gap:4},t.createElement(E.P,{col:6,s:12},t.createElement(S.s,{name:"restrictedAccess",label:a({id:(0,d.O)("pages.SettingsPage.toggle.label"),defaultMessage:"Restricted Access"}),hint:a({id:(0,d.O)("pages.SettingsPage.toggle.hint"),defaultMessage:"Make the documentation endpoint private"}),checked:m.restrictedAccess,onChange:()=>{m.restrictedAccess===!0&&(W("password","",!1),G("password",!1,!1)),W("restrictedAccess",!m.restrictedAccess,!1)},onLabel:"On",offLabel:"Off"})),m.restrictedAccess&&t.createElement(E.P,{col:6,s:12},t.createElement(O.o,{label:a({id:"global.password",defaultMessage:"Password"}),name:"password",placeholder:"**********",type:I?"text":"password",value:m.password,onChange:N,error:B.password?a({id:B.password,defaultMessage:"Invalid value"}):null,endAction:t.createElement(U,{onClick:H=>{H.stopPropagation(),x(X=>!X)},label:a(I?{id:"Auth.form.password.show-password",defaultMessage:"Show password"}:{id:"Auth.form.password.hide-password",defaultMessage:"Hide password"})},I?t.createElement(g.Z,null):t.createElement(C.Z,null))})))))))))}},90306:(h,r,e)=>{e.d(r,{Z:()=>f});var t=e(88767),l=e(22551),i=e(49950),n=e(798);const f=()=>{const v=(0,t.useQueryClient)(),c=(0,l.useNotification)(),{isLoading:M,isError:P,data:A}=(0,t.useQuery)(["get-documentation",i.Z],async()=>{try{const{data:s}=await O(`/${i.Z}/getInfos`);return s}catch{return c({type:"warning",message:{id:"notification.error"}}),null}}),{del:y,post:E,put:S,get:O}=(0,l.useFetchClient)(),u=s=>{c({type:"warning",message:s.response.payload.message})},g=(s,o)=>{v.invalidateQueries("get-documentation"),c({type:s,message:{id:(0,n.Z)(o)}})},C=(0,t.useMutation)(({prefix:s,version:o})=>y(`${s}/deleteDoc/${o}`),{onSuccess:()=>g("info","notification.delete.success"),onError:s=>u(s)}),D=(0,t.useMutation)(({prefix:s,body:o})=>S(`${s}/updateSettings`,o),{onSuccess:()=>g("success","notification.update.success"),onError:u}),d=(0,t.useMutation)(({prefix:s,version:o})=>E(`${s}/regenerateDoc`,{version:o}),{onSuccess:()=>g("info","notification.generate.success"),onError:s=>u(s)});return{data:A,isLoading:M,isError:P,deleteMutation:C,submitMutation:D,regenerateDocMutation:d}}},798:(h,r,e)=>{e.d(r,{Z:()=>i});var t=e(49950);const i=n=>`${t.Z}.${n}`},93742:(h,r,e)=>{e.d(r,{O:()=>t.Z});var t=e(798)}}]);
