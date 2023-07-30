var imgs = [
    'https://i.ytimg.com/vi/2IYvO8JL8O4/maxresdefault.jpg',
    'https://img.atwiki.jp/aniwotawiki/attach/52570/14419/%E5%96%9C%E5%A4%9A%E3%81%A1%E3%82%83%E3%82%933.jpg',
    'https://ogre.natalie.mu/media/news/comic/2022/0914/botti_02.jpg?impolicy=lt&imwidth=1200&imdensity=1',
    'https://img.atwiki.jp/aniwotawiki/attach/52608/14308/%E5%B1%B1%E7%94%B0%E3%83%AA%E3%83%A7%E3%82%A61.jpg',
    "https://previews.123rf.com/images/fokaspokas/fokaspokas1607/fokaspokas160700259/59781701-%E9%80%8F%E6%98%8E%E3%82%B0%E3%83%AA%E3%83%83%E3%83%89%E3%80%82%E3%82%B7%E3%83%BC%E3%83%A0%E3%83%AC%E3%82%B9-%E3%83%91%E3%82%BF%E3%83%BC%E3%83%B3.jpg",
  ],
  n = imgs.length,
  current = n-1,
  closedWidth = Math.floor(window.innerWidth/10)


for (var i=0; i<n-1; i++){

var bgImg = document.createElement('div');
bg.appendChild(bgImg);

gsap.set(bgImg, {
  attr:{id:'bgImg'+i, class:'bgImg'},
  width:'100%',
  height:'100%',
  backgroundImage:'url('+imgs[i]+')',
  backgroundSize:'cover',
  backgroundPosition:'center'
})

var b = document.createElement('div');
fg.appendChild(b);

gsap.fromTo(b, {
  attr:{id:'b'+i, class:'box'},
  innerHTML:'<p><sub>MEMBERS</sub> '+(i+1)+'</p>',
  width:'%',
  height:'100%',
  borderLeft:(i>0)?'solid 1px #eee':'',
  backgroundColor:'rgba(250,250,250,0)',
  left:i*closedWidth,
  transformOrigin:'100% 100%',
  x:'100%'
},{
  duration:i*0.15,
  x:0,
  ease:'expo.inOut'
})  

b.onmouseenter = b.onclick = (e)=>{    
  if (Number(e.currentTarget.id.substr(1))==current) return;
   
  var staggerOrder = !!(current < Number(e.currentTarget.id.substr(1)));
  current = Number(e.currentTarget.id.substr(1));
  gsap.to('.box', {
    duration:0.5,
    ease:'elastic.out(0.3)',
    left:(i)=>(i<=current)? i*closedWidth: window.innerWidth-((n-i)*closedWidth),
    x:0,
    stagger: staggerOrder? 0.05:-0.05
  })
  
  bg.appendChild( document.getElementById('bgImg'+current) )
  gsap.fromTo('#bgImg'+current, {opacity:0}, {opacity:1, duration:0.3, ease:'power1.inOut'})
  gsap.fromTo('#bgImg'+current, {scale:1.05, rotation:0.05}, {scale:1, rotation:0, duration:1.5, ease:'sine'}) 
}
}


window.onresize = (e)=>{
closedWidth = Math.floor(window.innerWidth/10)
gsap.set('.box', { x:0, left:(i)=> (i<=current)? i*closedWidth: window.innerWidth-((n-i)*closedWidth) })
}

document.querySelector('#fg').onclick = (e)=>{
window.open(imgs[current], '_self') // be sure to try this outside of codepen's iframe
}