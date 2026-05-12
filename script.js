
async function carregar(){
  const res = await fetch('produtos.json');
  const data = await res.json();
  montarNav(data.categorias);
  controlarHappy(data.config?.happyHour);
  montarHero(data.categorias[0].produtos[0]);
  const app=document.getElementById('app');
  data.categorias.forEach(cat=> app.appendChild(renderCategoria(cat)));
}
function montarNav(categorias){
 const nav=document.getElementById('nav');
 const icons={pratos:'🍖',petiscos:'🍻',bebidas:'🍺',whisky:'🥃'};
 categorias.forEach(c=>{const a=document.createElement('a');a.href='#'+c.id;a.textContent=(icons[c.id]||'•')+' '+c.titulo;nav.appendChild(a)});
}
function controlarHappy(hh){
 if(!hh) return; const el=document.getElementById('happyHour');
 const agora=new Date(); const m=agora.getHours()*60+agora.getMinutes();
 const [ih,im]=hh.inicio.split(':').map(Number), [fh,fm]=hh.fim.split(':').map(Number);
 if(m>=ih*60+im && m<=fh*60+fm){el.classList.remove('hidden'); el.innerHTML=`<strong>🍹 ${hh.titulo} • ${hh.inicio} às ${hh.fim}</strong><span>${hh.texto}</span>`}
}
function montarHero(p){
 const hero=document.getElementById('hero');
 hero.innerHTML=`<div class="hero-card"><img src="${p.imagem}" alt="${p.nome}" loading="eager"><div class="hero-overlay"><div class="hero-text"><span class="tag">⭐ Mais pedido da casa</span><h1>${p.nome}</h1><p>${p.descricao}</p><div class="price">${p.preco}</div><a href="#pratos" class="cta">Ver cardápio</a></div></div></div>`;
}
function renderCategoria(cat){
 const sec=document.createElement('section'); sec.className='section'; sec.id=cat.id;
 sec.innerHTML=`<div class="section-head"><h2>${cat.titulo}</h2><p>${cat.subtitulo||''}</p></div>`;
 if(cat.tipo==='food') sec.appendChild(renderFoodGrid(cat.produtos));
 if(cat.tipo==='drink') cat.grupos.forEach(g=>sec.appendChild(renderDrinkGroup(g)));
 if(cat.tipo==='whisky') sec.appendChild(renderWhisky(cat.produtos));
 return sec;
}
function renderFoodGrid(produtos){
 const grid=document.createElement('div'); grid.className='grid';
 produtos.forEach(p=>{const card=document.createElement('article'); card.className='card'; card.innerHTML=`${p.selo?`<span class="selo">${p.selo}</span>`:''}<img src="${p.imagem}" alt="${p.nome}" loading="lazy"><div class="card-body"><h3>${p.nome}</h3><p>${p.descricao||''}</p><div class="preco">${p.preco}</div></div>`; grid.appendChild(card)});
 return grid;
}
function renderDrinkGroup(g){
 const box=document.createElement('div'); box.className='drink-group';
 box.innerHTML=`<div class="drink-header"><img src="${g.imagem}" alt="${g.titulo}" loading="lazy"><h3>${g.titulo}</h3></div>`;
 const list=document.createElement('div'); list.className='list';
 g.produtos.forEach(p=>{const row=document.createElement('div'); row.className='row'; row.innerHTML=`<div><strong>${p.nome}</strong>${p.descricao?`<br><span>${p.descricao}</span>`:''}</div><div class="valor">${p.preco}</div>`; list.appendChild(row)});
 box.appendChild(list); return box;
}
function renderWhisky(produtos){
 const grid=document.createElement('div'); grid.className='whisky-grid';
 produtos.forEach(p=>{const c=document.createElement('article'); c.className='whisky-card'; c.innerHTML=`<h3>${p.nome}</h3><div class="whisky-prices"><span>Dose <b>${p.dose}</b></span><span>Garrafa <b>${p.garrafa}</b></span></div>`; grid.appendChild(c)});
 return grid;
}
carregar();
