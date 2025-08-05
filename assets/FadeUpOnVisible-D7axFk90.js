import{r as s,j as p,t as i,d as l}from"./index-DdVwaZou.js";const u=l.div`
  opacity: 0;
  transform: translateY(20px);
  transition: opacity ${i.fadeUp}, transform ${i.fadeUp};

  &.visible {
    opacity: 1;
    transform: translateY(0);
  }
`,b=({children:o,forceVisible:r=!1})=>{const n=s.useRef(null),[c,a]=s.useState(!1);return s.useEffect(()=>{if(r){a(!0);return}const e=n.current;if(!e)return;const t=new IntersectionObserver(([f])=>{f.isIntersecting&&(a(!0),t.unobserve(e))},{threshold:.1});return t.observe(e),()=>t.disconnect()},[r]),p.jsx(u,{ref:n,className:c?"visible":"",children:o})};export{b as F};
