import{m as t,d as s,c as o,r as p,u as x,j as e,B as l,M as d}from"./index-DdVwaZou.js";import{C as c}from"./ContactsForm-Dn7OAdKj.js";const m="/uis/assets/hero_bg-B7D0sRrd.jpg",g=s.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 96px 21px;
  width: 100%;
  scroll-margin-top: 65px;

  ${t.tablet} {
    padding: 144px 78px;
  }
  ${t.smallDesktop} {
    padding: 244px 0 238px;
  }

  background-image: url(${m});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`,h=s.div`
  font-weight: 800;
  font-size: 30px;
  line-height: 110%;
  text-align: center;
  color: ${o.textSecondary};
  text-shadow:${o.hero.textShadow};

  ${t.tablet} {
    font-size: 40px;
  }
  ${t.smallDesktop} {
    font-size: 67px;
  }
  ${t.desktop} {
    font-size: 67px;
  }
`,f=s.p`
  font-weight: 800;
  font-size: 28px;
  line-height: 110%;
  text-align: center;
  color: ${o.textSecondary};
  text-shadow: ${o.hero.textShadow};
  margin-bottom: 24px;

  ${t.tablet} {
    font-size: 40px;
    margin-bottom: 24px;
  }
  ${t.smallDesktop} {
    font-size: 53px;
    margin-bottom: 32px;
  }
`,u=s.p`
  font-weight: 400;
  font-size: 16px;
  text-align: center;
  color: ${o.textSecondary};
  margin-bottom: 24px;
  max-width: 334px;

  ${t.tablet} {
    max-width: 611px;
    font-size: 18px;
    margin-bottom: 24px;
  }
  ${t.desktop} {
    max-width: 805px;
    font-size: 24px;
    margin-bottom: 32px;
  }
`,w=({setIsOpenPrivacy:i})=>{const[r,n]=p.useState(!1),{isMob:a}=x();return e.jsxs(g,{id:"hero",children:[e.jsx(h,{children:"Професійні IT-рішення"}),e.jsx(f,{children:"для вашого бізнесу"}),e.jsx(u,{children:"Ми пропонуємо широкий спектр послуг, щоб допомогти вашому бізнесу зростати та розвиватися"}),e.jsx(l,{onClick:()=>n(!0),size:"md",width:a?"220px":"248px",type:"button"}),e.jsx(d,{onClose:()=>n(!1),isOpen:r,children:e.jsx(c,{openPrivacy:()=>i(!0),closeModal:()=>n(!1)})})]})};export{w as default};
