import{m as i,d as t,c as r,t as c,j as e,u as p}from"./index-DdVwaZou.js";import{C as d}from"./ContactsForm-Dn7OAdKj.js";import{F as x}from"./FadeUpOnVisible-D7axFk90.js";import{S as m,a as f,b as h}from"./Section-wHC3xYD3.js";const g=t.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px 0px 0px;
  scroll-margin-top: 65px;

  ${i.tablet} {
    padding: 40px 0px 0px;
  }

  ${i.smallDesktop} {
    padding: 40px 0 0px;
  }
`,u=t.div`
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  justify-content: center;
  margin: 0 auto 66px;
  gap: 32px;
  width: 100%;
  max-width: 770px;

  ${i.tablet} {
    flex-direction: row;
    gap: 40px;
    max-width: 770px;
  }
  ${i.smallDesktop} {
    flex-direction: row;
    gap: 72px;
  }
`,j=t.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  width: 100%;
  max-width: 298px;

  & > address{
    display: flex;
    flex-direction: column;
    gap: 16px;
  }
`,w=t.p`
  font-weight: 400;
  font-size: 18px;
  letter-spacing: -0.02em;
  color: ${r.textPrimary};
  text-align: center;

  ${i.tablet}{
  font-size: 18px;
  text-align: start;
  }
  ${i.smallDesktop}{
  font-size: 18px;
  }
`,y=t.div`
  margin: 24px 0;
  width: 100%;
  height: 1px;
  background: ${r.grayText};
  
  ${i.tablet}{
    margin: 40px 0;
  }
`,s=t.a`
  font-weight: 700;
  font-style: normal;
  font-size: 20px;
  letter-spacing: -0.02em;
  color: ${r.textPrimary};
  opacity: 1;
  transition: opacity ${c.default};

  &:hover{
    opacity: 0.8;
    color: inherit;
    text-decoration: none;
    outline: none;
  }

  &:visited{
    color: inherit;
    text-decoration: none;
    outline: none;
  }

  &.accented {
      color: #356eb4;
      font-weight: 400;
      font-size: 18px;
      letter-spacing: -0.02em;
      cursor: pointer;
    }
`,b=t.div`
    font-weight: 400;
    font-size: 18px;
    letter-spacing: -0.02em;
    color: ${r.textPrimary};
    font-style: normal;
`,v=t.div`
  width: 100vw;
  aspect-ratio: 16 / 9;
  height: 360px;

  iframe {
    width: 100%;
    height: 100%;
    border: 0;
  }
`,$=()=>e.jsx(v,{children:e.jsx("iframe",{title:"Google Map",src:"https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d2539.6231751677715!2d30.44476007691752!3d50.4667413861902!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNTDCsDI4JzAwLjMiTiAzMMKwMjYnNTAuNCJF!5e0!3m2!1suk!2sua!4v1753880333978!5m2!1suk!2sua",loading:"lazy",allowFullScreen:!0,referrerPolicy:"no-referrer-when-downgrade"})}),M=({setIsOpenPrivacy:l})=>{const{isMob:n,isTablet:o,isSmallDesktop:a}=p();return e.jsx(x,{children:e.jsx(m,{children:e.jsxs(g,{id:"contacts",children:[e.jsx(f,{$mb:n?"12px":o?"18px":"12px",children:"Контакти"}),e.jsx(h,{$mb:n?"40px":o?"32px":"40px",children:"Залиште, будь ласка, контакти і ми вам зателефонуємо"}),e.jsxs(u,{children:[e.jsxs(j,{children:[e.jsx(w,{children:"Наші спеціалісти готові відповісти на всі ваші запитання та надати детальну консультацію"}),e.jsx(y,{}),e.jsxs("address",{children:[e.jsx(s,{href:"https://maps.app.goo.gl/YyCciKMwxNrtiyv97",target:"_blank",rel:"noopener noreferrer",children:"м. Київ, вул. О.Теліги 4"}),e.jsxs(b,{children:["тел."," ",e.jsx(s,{className:"accented",href:"tel:+380444541201",children:"+38 (044) 454-12-01"})]}),e.jsx(s,{className:"accented",href:"mailto:buh@ukrinformsystems.com.ua",children:"buh@ukrinformsystems.com.ua"})]})]}),e.jsx(d,{openPrivacy:()=>l(!0)})]}),e.jsx($,{})]})})})};export{M as default};
