"use strict";(self.webpackChunk_genially_view_client=self.webpackChunk_genially_view_client||[]).push([[9972],{89690:(e,t,i)=>{i.d(t,{Z:()=>a});var n=i(45992),r=i(62772),o=i(11833);const a=e=>{let{title:t,frontImageSrc:i,coverImageSrc:a,fitImages:s,flipped:l,burned:d,onClick:m}=e;const c=Boolean(d),u=Boolean(l);return(0,n.jsxs)(o.Ox,{role:"button",$burned:c,$flipped:u,onClick:e=>{e.stopPropagation(),m&&m()},"aria-label":`Card showing ${u?"front":"back"} side with title: ${t}`,"aria-disabled":c,tabIndex:c?-1:0,children:[(0,n.jsx)("img",{style:{opacity:u?1:0,position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:s?"contain":"cover",transition:`opacity ${o.uD}ms steps(1)`},src:i,alt:"front"}),(0,n.jsx)("img",{style:{opacity:u?0:1,position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:s?"contain":"cover",transition:`opacity ${o.uD}ms steps(1)`},src:a,alt:"cover"}),t&&(0,n.jsx)(o.aW,{hidden:!u,children:(0,n.jsx)(r.m_,{text:t,placement:r.m_.Position.TOP,fallbackPlacements:[r.m_.Position.TOP],renderReferencePortalNode:document.querySelector("body"),children:(0,n.jsx)(o.hE,{"data-testid":"card-title",children:t})})})]})}},11833:(e,t,i)=>{i.d(t,{Ox:()=>l,aW:()=>a,hE:()=>s,rl:()=>r,uD:()=>o});var n=i(37577);const r=1e3,o=r/3.4,a=n.Ay.div({display:"flex",justifyContent:"center",alignItems:"center",flexShrink:0,position:"absolute",paddingLeft:"12px",paddingRight:"12px",bottom:0,left:0,userSelect:"none",minHeight:"25%",top:"75%",width:"100%",backgroundColor:"rgba(18,18,18,0.5)"}),s=n.Ay.p({color:"white",fontSize:12,textAlign:"center",fontStyle:"normal",fontWeight:400,lineHeight:"16px",overflow:"hidden",textOverflow:"ellipsis",wordWrap:"break-word",whiteSpace:"nowrap",pointerEvents:"none"}),l=n.Ay.div`
  @keyframes rotate-out {
    0% {
      transform: rotateY(0deg);
    }
    33% {
      transform: rotateY(90deg);
    }
    100% {
      transform: rotateY(0deg);
    }
  }

  @keyframes rotate-in {
    0% {
      transform: rotateY(0deg);
    }
    33% {
      transform: rotateY(90deg);
    }
    100% {
      transform: rotateY(0deg);
    }
  }

  @keyframes pulse {
    0% {
      transform: scale(1);
    }
    12% {
      transform: scale(1.05, 1.05);
    }
    40% {
      transform: scale(1.05, 1.05);
    }
    100% {
      transform: scale(1);
    }
  }

  position: relative;
  overflow: hidden;
  flex-shrink: 0;
  width: 100%;
  height: 100%;
  container-type: size;

  cursor: ${e=>{let{$flipped:t,$burned:i}=e;return t||i?"default":"pointer"}};

  animation-name: ${e=>{let{$flipped:t}=e;return t?"rotate-out":"rotate-in"}}
    ${e=>{let{$burned:t}=e;return t?",pulse":""}};
  animation-duration: ${r}ms;
  animation-delay: 0ms, ${r}ms;
  animation-iteration-count: 1;
  animation-timing-function: ease-out, ease-in-out;
  perspective: 1500px;

  border-radius: 9%;
  @supports (container-type: size) {
    border-radius: 6cqmin;
  }

  /* HACK: We need to set border as important because .genially-embed is reseting our borders in the View */
  border: 1px solid
    ${e=>{let{theme:t,$flipped:i}=e;return i?t.color.border.primary.disabled():t.color.border.primary.default()}} !important;
  outline: 1px white solid;

  filter: ${e=>{let{$flipped:t}=e;return t?"":"drop-shadow(0px 1px 4px rgba(0, 15, 51, 0.2))"}};

  &:hover {
    filter: ${e=>{let{$flipped:t}=e;return t?"":"drop-shadow(rgba(0, 15, 51, 0.3) 0px 1px 8px)"}};
    border-color: ${e=>{let{theme:t,$flipped:i}=e;return i?t.color.border.primary.disabled():t.color.border.primary.hover()}} !important;
  }

  ${a} {
    visibility: ${e=>{let{$flipped:t}=e;return t?"initial":"hidden"}};
    transition: visibility ${o}ms steps(1);
    z-index: 1;
  }

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
    width: 100%;
    height: 100%;
    opacity: ${e=>{let{$burned:t}=e;return t?"0.4":"0"}};
    transition: opacity ${r}ms steps(1);
    transition-delay: ${r}ms;
    background-color: white;
    pointer-events: none;
  }
`},56292:(e,t,i)=>{i.d(t,{x:()=>m});var n=i(45992),r=i(40671),o=i(99049),a=i(76838),s=i(37577);const l=s.Ay.div`
  container-type: size;
  height: 100%;
  padding: 8px;
`,d=s.Ay.div`
  --contained-gap: 16px;

  display: grid;
  grid-template-columns: repeat(${e=>e.numColumns}, minmax(0, 1fr));
  grid-template-rows: repeat(${e=>e.numRows}, 1fr);
  grid-auto-flow: column;
  height: 100%;
  gap: var(--contained-gap);

  @supports (container-type: size) {
    --contained-gap: 4cqmin;
  }
`,m=(s.Ay.canvas({width:"100%",height:"100%",pointerEvents:"none",position:"absolute",top:0,left:0,zIndex:3}),e=>{let{items:t,renderItem:i,keyExtractor:s,getComputedStyles:m,forcedRows:c}=e;const u=(0,a.f)(t.length,c);return(0,n.jsx)(l,{children:(0,n.jsx)(d,{numColumns:u.numColumns,numRows:u.numRows,children:(0,n.jsx)(r.N,{children:t.map(((e,t)=>(0,n.jsx)(o.P.div,{layout:!0,style:m?m(e,t):void 0,initial:{opacity:0,scale:.7},animate:{opacity:1,scale:1},transition:{type:"spring",ease:"easeInOut",stiffness:30,damping:10},"data-testid":`grid-item-${s(e)}`,children:i(e)},s(e))))})})})})},39972:(e,t,i)=>{i.r(t),i.d(t,{geniallyFindThePairEditorScript:()=>f});var n=i(45992),r=i(62772),o=i(57277),a=i(17588),s=i(37577),l=i(89690),d=i(56292);const m=e=>{let{theme:t,pairedImages:i,fitImages:r,forwardSetFlipped:o,coverImageSrc:m,rowsDitributionFromConfig:c}=e;const[u,p]=(0,a.useState)(!1);return(0,a.useEffect)((()=>{o(p)}),[o]),(0,n.jsx)(s.NP,{theme:t,children:(0,n.jsx)(d.x,{items:i,forcedRows:c,renderItem:e=>(0,n.jsx)(l.Z,{title:e.title,frontImageSrc:e.src,coverImageSrc:m,fitImages:r,flipped:u}),keyExtractor:e=>e.id,getComputedStyles:()=>({pointerEvents:"none"})})})};var c=i(30555),u=i(76838),p=i(54072);const g=(e,t,i,n)=>({src:e,title:t,altText:i,id:n}),f=e=>{let{script:t,editor:i}=e;const a=t.item;let s;if(!a)return;a.thumbnail="https://static.genially.com/widgets/find-the-pair-thumbnail";let l=[];t.on("configChange",(e=>{let{config:t,prevConfig:i}=e;if(!i)return;const n=t.itemList,r=i.itemList;l=t.diffImages!==i.diffImages?(0,c.u)(n,t.diffImages):((e,t,i,n)=>e.flatMap(((e,r)=>{var o,a,s,l,d,m;const c=r>=t,u=(0,p.Ak)(),f=(null===(o=e.image)||void 0===o?void 0:o.source)||"",h=e.title||"",v=(null===(a=e.image)||void 0===a?void 0:a.altText)||"",b=n?(null===(s=e.imagePair)||void 0===s?void 0:s.source)||"":(null===(l=e.image)||void 0===l?void 0:l.source)||"",x=n?e.titlePair:e.title,y=n?(null===(d=e.imagePair)||void 0===d?void 0:d.altText)||"":(null===(m=e.image)||void 0===m?void 0:m.altText)||"";return c?[g(f,h,v,`${u}-original`),g(b,x,y,`${u}-pair`)]:[Object.assign(Object.assign({},i[2*r]),{src:f,title:h,altText:v}),Object.assign(Object.assign({},i[2*r+1]),{src:b,title:x,altText:y})]})))(n,r.length,l,t.diffImages),((e,t,i)=>{const{itemList:n}=t,{itemList:r}=i,{numRows:o}=t,{numRows:a}=i;if(0===n.length-r.length&&o===a)return;const s=2*r.length,l=(0,u.f)(s,(0,u.v)(a)),d=e.width/l.numColumns,m=e.height/l.numRows,c=2*n.length,p=(0,u.f)(c,(0,u.v)(o));e.setSize(p.numColumns*d,p.numRows*m)})(a,t,i)})),i.on("sidebarOpened",(e=>{let{isOpened:t}=e;s&&s(t)})),(0,o.x)({getTargetNodeItem:()=>t.item,renderApp:()=>{const{justCreatedFromSidebar:e}=i,{itemList:o,coverImage:a,fitImages:d,numRows:p,diffImages:g}=t.getConfig();return 0===l.length&&(l=(0,c.u)(o,g)),(0,n.jsx)(m,{theme:r.iF.themes.newPrimary,pairedImages:l,coverImageSrc:String(a.source),fitImages:d,forwardSetFlipped:t=>{e&&t(!0),s=t},rowsDitributionFromConfig:(0,u.v)(p)})},nodePrefix:"find-the-pair"})({script:t,editor:i})}},30555:(e,t,i)=>{i.d(t,{u:()=>a});var n=i(54072);const r=e=>null!==e,o=(e,t)=>{var i;const n=null===(i=e.image)||void 0===i?void 0:i.source;return n?{id:t,src:n,title:e.title,altText:e.image.altText||""}:null},a=function(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return e.flatMap((e=>{const i=(0,n.Ak)();return[o(e,`${i}-original`),t?((e,t)=>{var i,n;const r=null===(i=e.imagePair)||void 0===i?void 0:i.source;return r?{id:t,src:r,title:e.titlePair||e.title,altText:(null===(n=e.imagePair)||void 0===n?void 0:n.altText)||""}:null})(e,`${i}-pair`):o(e,`${i}-pair`)]})).filter(r)}},76838:(e,t,i)=>{i.d(t,{f:()=>r,v:()=>n});const n=e=>{if("auto"===e)return;const t=Number(e);if(!Number.isNaN(t))return t;console.warn("Cannot parse row distribution. Setting to auto",e)},r=(e,t)=>t?((e,t)=>e<t?{numColumns:1,numRows:e}:{numColumns:Math.ceil(e/t),numRows:t})(e,t):(e=>{if(e<4)return{numColumns:1,numRows:e};let t=4;for(;e%t!==0&&t<7;)t+=1;return{numColumns:t,numRows:Math.ceil(e/t)}})(e)},57277:(e,t,i)=>{i.d(t,{x:()=>r});var n=i(70377);function r(e){let{getTargetNodeItem:t,renderApp:i,renderThumbnailApp:r,nodePrefix:o}=e;return e=>{let{script:a,editor:s}=e,l=null,d=[];function m(e){l&&(n.unmountComponentAtNode(l),l=null),e&&"innerHtml"in e&&(e.innerHtml='<div class="card-iframe"><div style="width: 100%; height: 100%; background: #FF0000; color: #FFFFFF;">Deleted</div><script><\/script></div>')}function c(){l&&n.render(i(),l)}function u(){const e=t(a.getConfig());if(!e)return;const i=`${o}-${e.id}`;"innerHtml"in e&&(e.innerHtml=`<div class="card-iframe"><div id="${i}" class="genially-widget-app" style="width: 100%; height: 100%;"></div></div>`),requestAnimationFrame((()=>{l="idOfFreeNode"in e?document.getElementById(e.idOfFreeNode)||null:document.getElementById(i)||null,c()}))}function p(){r&&d.length&&d.forEach((e=>{n.render(r(),e)}))}function g(){const e=t(a.getConfig());e&&"idOfThumbnailFreeNode"in e&&requestAnimationFrame((()=>{const t=document.getElementsByClassName(e.idOfThumbnailFreeNode);d=Array.from(t),p()}))}a.on("configChange",(e=>{let{config:i,prevConfig:n}=e;const r=t(i),o=n?t(n):void 0;o&&o!==r&&m(o),r&&(r!==o?(u(),g()):(c(),p()))})),a.on("dispose",(()=>{m(t(a.getConfig()))})),s.on("itemMount",(e=>{let{item:t}=e;t===a.item&&u()})),s.on("itemUnmount",(e=>{let{item:t}=e;t===a.item&&m()})),s.on("itemThumbnailMount",(e=>{let{item:t}=e;t===a.item&&g()}))}}}}]);
//# sourceMappingURL=https://s3-static-genially.genially.com/view/static/js/9972.c47ce836.chunk.js.map