const progress=document.getElementById("progress");
const backTop=document.getElementById("backTop");
const menuToggle=document.getElementById("menuToggle");
const nav=document.getElementById("nav");

window.addEventListener("scroll",()=>{
  const h=document.documentElement;
  const pct=(h.scrollTop/(h.scrollHeight-h.clientHeight))*100;
  progress.style.width=pct+"%";
  backTop.classList.toggle("show",h.scrollTop>600);
});

backTop.addEventListener("click",()=>window.scrollTo({top:0,behavior:"smooth"}));
menuToggle.addEventListener("click",()=>nav.classList.toggle("open"));
document.querySelectorAll(".nav a").forEach(a=>a.addEventListener("click",()=>nav.classList.remove("open")));

const posts=[
 {date:"Coming soon",title:"Your first public article",text:"Replace this card with your first LinkedIn-style article, reflection, or practical idea.",type:"Article"},
 {date:"Weekly series",title:"One idea, clearly explained",text:"A flexible space for short essays on psychology, organizations, higher education, leadership, and technology.",type:"Reflection"},
 {date:"Your next post",title:"Notes from the field",text:"Share an observation from a conference, meeting, classroom, project, or everyday professional life.",type:"Notes"}
];

const grid=document.getElementById("insightsGrid");
posts.forEach((p,i)=>{
  const article=document.createElement("article");
  article.className="insight-card reveal";
  article.innerHTML=`<div class="date">${p.date} · ${p.type}</div><h3>${p.title}</h3><p>${p.text}</p><a href="#contact">Read more →</a>`;
  grid.appendChild(article);
});

const observer=new IntersectionObserver(entries=>{
 entries.forEach(entry=>{
   if(entry.isIntersecting){entry.target.classList.add("visible");observer.unobserve(entry.target)}
 });
},{threshold:.12});
document.querySelectorAll(".reveal").forEach(el=>observer.observe(el));
document.getElementById("year").textContent=new Date().getFullYear();
