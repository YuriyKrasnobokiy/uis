import{m as $,d as i,c as o,t as h,b as l,F as v,r as f,j as e,B as y,y as k}from"./index-DdVwaZou.js";const j=i.form`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 342px;

  ${$.tablet}{
    min-width: 330px;
  }
  ${$.smallDesktop}{
    max-width: 400px;
  }
`,S=i.div`
  display: flex;
  flex-direction: column; 
  gap: 12px;
  margin-bottom: 16px;
`,C=i.input`
  border-radius: 99px;
  width: 100%;
  font-weight: 400;
  font-size: 15px;
  line-height: 120%;
  color: ${o.textPrimary};
  outline: none;
  background-color: ${o.form.input.background};
  padding: 11px 15px;
  border: none;
  transition: background-color ${h.default};

  &:hover {
    background-color: ${o.form.input.hoverBg};
  }

  &::placeholder {
    color: ${o.form.input.placeholderColor};
    font-size: inherit;
    line-height: inherit;
    font-weight: inherit;
  }
`,O=i.p`
  font-weight: 400;
  font-size: 13px;
  color: ${o.form.confTextColor};
  margin-top: 10px;
`,z=i.div`
  display: flex;
  align-items: center;
`,T=i.span`
    color: ${o.form.confTextSpanColor};
    cursor: pointer;
    transition: color ${h.default};

    &:hover {
      color: ${o.form.confTextSpanHoverColor};
    }
  `,D=i.div`
  position: relative;
  min-width: 280px;
  width: 100%;
  margin-bottom: 12px;

  ${$.tablet} {
  }
  ${$.smallDesktop} {
    margin-bottom: 12px;
  }
`,P=i.button`
  width: 100%;
  height: 40px;
  background: ${({$bg:t})=>t||`${o.form.input.background}`};
  color: ${({$color:t})=>t||`${o.textPrimary}`};
  border: none;
  border-radius: 99px;
  padding: 11px 40px 11px 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 15px;
  font-weight: 400;
  line-height: 120%;
  text-align: left;
  cursor: pointer;
  position: relative;
  transition: 
  background ${h.default};

  &:hover {
    background: ${o.form.input.hoverBg}
  }

  &:focus {
}

@media screen and (min-width: ${l.tablet}) {
    padding: 11px 40px 11px 15px;
    height: 40px;
    font-size: 15px;
  }
  @media screen and (min-width: ${l.smallDesktop}) {
    border-radius: 99px;
    padding: 11px 40px 11px 15px;
    height: 40px;
    font-size: 15px;
  }
`,B=i(v).withConfig({shouldForwardProp:t=>t!=="isOpen"})`
  position: absolute;
  right: 15px;
  top: 50%;
  transform: ${({isOpen:t})=>t?"translateY(-50%) rotate(180deg)":"translateY(-50%) rotate(0deg)"};
  transition: ${h.default};
  color: ${({$color:t})=>t||`${o.textPrimary}`};
  pointer-events: none;
  width: 20px;
  height: 20px;

  @media screen and (min-width: ${l.tablet}) {
  right: 15px;
  width: 20px;
  height: 20px;
  }
  @media screen and (min-width: ${l.smallDesktop}) {
  right: 15px;
  width: 20px;
  height: 20px;
  }
`,E=i.ul`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  border-radius: 12px;
  margin-top: 8px;
  max-height: 200px;
  overflow-y: auto;
  background: ${o.backgroundPrimary};
  z-index: 10;

  @media screen and (min-width: ${l.tablet}) {
    margin-top: 8px;
    border-radius: 12px;
  }
  @media screen and (min-width: ${l.smallDesktop}) {
    margin-top: 8px;
    border-radius: 12px;
  }
`,F=i.li`
  padding: 10px 15px;
  color: ${({$color:t})=>t||`${o.textDefault}`};
  font-size: 16px;
  cursor: pointer;
  background-color: ${o.form.input.background};

  transition: background-color ${h.default};

  &:hover {
    background-color: ${o.customSelect.optionHover};
  }

  @media screen and (min-width: ${l.tablet}) {
  padding: 10px 15px;
  font-size: 16px;
  }
  @media screen and (min-width: ${l.smallDesktop}) {
  padding: 10px 15px;
  font-size: 16px;
  }
`,H=({value:t,onChange:d,options:n=[],background:s="",color:p=""})=>{const[c,u]=f.useState(!1),a=f.useRef(null),x=()=>u(r=>!r),m=r=>{d(r),u(!1)};return f.useEffect(()=>{const r=g=>{a.current&&!a.current.contains(g.target)&&u(!1)};return c&&document.addEventListener("mousedown",r),()=>{document.removeEventListener("mousedown",r)}},[c]),e.jsxs(D,{ref:a,children:[e.jsxs(P,{type:"button",onClick:x,$isOpen:c,$bg:s,$color:p,children:[t||n[0],e.jsx(B,{$color:p,isOpen:c})]}),c&&e.jsx(E,{$bg:s,children:n.map(r=>e.jsx(F,{$color:p,$bg:s,onClick:()=>m(r),children:r},r))})]})},I=i.label`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  user-select: none;
  margin-right: 8px;
`,W=i.input.attrs({type:"checkbox"})`
  display: none;
`,N=i.span`
  width: 18px;
  height: 18px;
  border: 2px solid ${o.form.confTextSpanColor};
  background-color: ${o.backgroundPrimary};
  border-radius: 4px;
  display: inline-block;
  position: relative;
  transition: all ${h.default};

  &:hover {
    border: 2px solid ${o.form.confTextSpanHoverColor};
  }

  &::after {
    content: '✓';
    position: absolute;
    display: ${({checked:t})=>t?"block":"none"};
    top: -4px;
    left: 1px;
  }
`,R=({name:t,checked:d,onChange:n,label:s})=>e.jsxs(I,{children:[e.jsx(W,{name:t,checked:d,onChange:n}),e.jsx(N,{checked:d}),s&&e.jsx("span",{children:s})]}),b=["Зателефонувати мені","Надіслати смс","Надіслати лист"],L=({closeModal:t,openPrivacy:d})=>{const[n,s]=f.useState({name:"",email:"",phone:"",option:"",isChecked:!1}),p=a=>{const{name:x,value:m,type:r,checked:g}=a.target;s(w=>({...w,[x]:r==="checkbox"?g:m}))},c=a=>{s(x=>({...x,option:a}))},u=async a=>{a.preventDefault();const m=["name","email","phone"].some(g=>!n[g].trim()),r=!n.isChecked;if(m||r){k.error("Заповніть будь ласка всі поля та чекбокс!",{className:"custom-toast",autoClose:3e3,hideProgressBar:!0,closeOnClick:!0,pauseOnHover:!0,draggable:!0,position:"top-right"});return}try{console.log(n),k.success("Дякуємо, з вами скоро зв'яжеться наш менеджер",{className:"custom-toast",autoClose:3e3,hideProgressBar:!0,closeOnClick:!0,pauseOnHover:!0,draggable:!0,position:"top-right"}),s({name:"",email:"",phone:"",option:b[0],isChecked:!1}),typeof t=="function"&&t()}catch{k.error("Помилка мережі, спробуйте будь ласка пізніше",{className:"custom-toast",autoClose:3e3,hideProgressBar:!0,closeOnClick:!0,pauseOnHover:!0,draggable:!0,position:"top-right"})}};return f.useEffect(()=>{!n.option&&b.length>0&&s(a=>({...a,option:b[0]}))},[]),e.jsx(e.Fragment,{children:e.jsxs(j,{onSubmit:u,children:[e.jsxs(S,{children:[e.jsx(C,{value:n.name,onChange:p,name:"name",placeholder:"Ваше ім’я",type:"text"}),e.jsx(C,{value:n.email,onChange:p,name:"email",placeholder:"E-mail",type:"email"}),e.jsx(C,{value:n.phone,onChange:p,name:"phone",placeholder:"Контактний телефон",type:"text"})]}),e.jsx(H,{value:n.option,onChange:c,options:b}),e.jsx(y,{type:"submit",size:"xl",width:"100%"}),e.jsxs(z,{children:[e.jsx(R,{name:"isChecked",checked:n.isChecked,onChange:p,label:""}),e.jsxs(O,{children:["Надсилаючи запит, ви погоджуєтесь із"," ",e.jsx(T,{onClick:d,children:"політикою конфіденційності"})]})]})]})})};export{L as C};
