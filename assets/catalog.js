/* Catálogo de demostración. Referencias ficticias para prototipar; no son cotizaciones en vivo. */
window.DespensaCatalog = {
  products: [
    {id:'papa-criolla', name:'Papa criolla', icon:'🥔', unit:'kg', quantity:2, plaza:4200, supermarket:5100, mayorista:3950, category:'Frescos', meal:'Ajiaco bogotano'},
    {id:'trucha', name:'Trucha fresca', icon:'🐟', unit:'filete (150 g)', quantity:4, plaza:8500, supermarket:8000, mayorista:7800, category:'Proteínas', meal:'Trucha al horno'},
    {id:'espinaca', name:'Espinaca', icon:'🥬', unit:'manojo', quantity:1, plaza:3800, supermarket:4200, mayorista:3500, category:'Frescos', meal:'Ensalada de espinaca'},
    {id:'zanahoria', name:'Zanahoria', icon:'🥕', unit:'kg', quantity:1, plaza:3200, supermarket:3800, mayorista:2900, category:'Frescos', meal:'Lentejas caseras'},
    {id:'aguacate', name:'Aguacate', icon:'🥑', unit:'unidad', quantity:3, plaza:2000, supermarket:2600, mayorista:1800, category:'Frescos', meal:'Guacamole'},
    {id:'tomate', name:'Tomate chonto', icon:'🍅', unit:'kg', quantity:1, plaza:3900, supermarket:5500, mayorista:3500, category:'Frescos', meal:'Hogao'},
    {id:'mazorca', name:'Mazorca', icon:'🌽', unit:'unidad', quantity:4, plaza:1500, supermarket:1900, mayorista:1300, category:'Frescos', meal:'Ajiaco bogotano'},
    {id:'cebolla', name:'Cebolla larga', icon:'🧅', unit:'manojo', quantity:1, plaza:1800, supermarket:2400, mayorista:1500, category:'Frescos', meal:'Hogao'},
    {id:'limon', name:'Limón Tahití', icon:'🍋', unit:'unidad', quantity:6, plaza:650, supermarket:850, mayorista:550, category:'Frescos', meal:'Trucha al limón'},
    {id:'huevos', name:'Huevos AA', icon:'🥚', unit:'cubeta x 12', quantity:1, plaza:10500, supermarket:11900, mayorista:9800, category:'Proteínas', meal:'Arepa con huevo'},
    {id:'lentejas', name:'Lenteja', icon:'🫘', unit:'500 g', quantity:1, plaza:4800, supermarket:5500, mayorista:4300, category:'Despensa', meal:'Lentejas caseras'},
    {id:'arroz', name:'Arroz', icon:'🍚', unit:'kg', quantity:1, plaza:4200, supermarket:4900, mayorista:3800, category:'Despensa', meal:'Acompañamiento'},
    {id:'arepas', name:'Arepas de maíz', icon:'🫓', unit:'paquete x 5', quantity:1, plaza:5000, supermarket:6200, mayorista:4700, category:'Despensa', meal:'Arepa con huevo'},
    {id:'cilantro', name:'Cilantro', icon:'🌿', unit:'manojo', quantity:1, plaza:1200, supermarket:1600, mayorista:1000, category:'Frescos', meal:'Ajiaco bogotano'},
    {id:'leche', name:'Leche deslactosada', icon:'🥛', unit:'litro', quantity:2, plaza:4500, supermarket:4300, mayorista:4100, category:'Refrigerados', meal:'Desayunos'},
    {id:'frijol', name:'Fríjol cargamanto', icon:'🫘', unit:'500 g', quantity:1, plaza:6800, supermarket:7500, mayorista:6200, category:'Despensa', meal:'Fríjoles caseros'},
    {id:'platano', name:'Plátano hartón', icon:'🍌', unit:'unidad', quantity:4, plaza:1300, supermarket:1600, mayorista:1100, category:'Frescos', meal:'Patacón'}
  ],
  stores: [
    {id:'plaza', label:'Plaza local', description:'Paloquemao · referencia minorista'},
    {id:'supermarket', label:'Supermercado', description:'Mercado La 14 · referencia'},
    {id:'mayorista', label:'Mayorista', description:'Central de abastos · referencia'}
  ],
  recipes: [
    {id:'ajiaco', title:'Ajiaco bogotano', icon:'🍲', author:'Camila R.', rating:'4.9 ★', time:55, cost:7900, tags:['tradicional','sin gluten','aprovecha inventario'], ingredients:['papa-criolla','mazorca','cilantro'], description:'Con papa criolla, mazorca y guascas. Revisa que el caldo sea certificado sin gluten.'},
    {id:'trucha-hierbas', title:'Trucha con hierbas', icon:'🐟', author:'Jorge A.', rating:'4.8 ★', time:35, cost:8500, tags:['pescado','sin gluten','fácil'], ingredients:['trucha','limon'], description:'Trucha al horno con limón y hierbas frescas.'},
    {id:'lentejas-abuela', title:'Lentejas de la abuela', icon:'🍛', author:'Camila R.', rating:'4.9 ★', time:45, cost:3200, tags:['sin gluten','económica','bajo sodio'], ingredients:['lentejas','zanahoria','tomate'], description:'Lentejas caseras con zanahoria, tomate y cilantro; ajusta la sal al gusto del hogar.'},
    {id:'ensalada-verde', title:'Ensalada de espinaca', icon:'🥗', author:'Luisa M.', rating:'4.7 ★', time:15, cost:4100, tags:['vegetariana','sin gluten','rescata inventario'], ingredients:['espinaca','aguacate','limon'], description:'Una idea rápida para usar hojas frescas y aguacate maduro.'},
    {id:'hogao-frijol', title:'Tacos de hogao y fríjol', icon:'🌮', author:'Luisa M.', rating:'4.7 ★', time:25, cost:4600, tags:['vegetariana','económica'], ingredients:['frijol','tomate','cebolla'], description:'Fríjoles suaves con hogao de tomate y cebolla.'},
    {id:'arepa-huevo', title:'Arepa con huevo y aguacate', icon:'🫓', author:'Andrés P.', rating:'4.8 ★', time:20, cost:3900, tags:['desayuno','sin gluten'], ingredients:['arepas','huevos','aguacate'], description:'Arepa de maíz con huevo y aguacate fresco.'},
    {id:'crema-zanahoria', title:'Crema de zanahoria', icon:'🥣', author:'Elena T.', rating:'4.6 ★', time:30, cost:2800, tags:['vegetariana','bajo sodio'], ingredients:['zanahoria','leche','cebolla'], description:'Crema suave de zanahoria con poca sal y leche.'},
    {id:'patacon', title:'Patacón con hogao', icon:'🍌', author:'Julián C.', rating:'4.6 ★', time:25, cost:3500, tags:['vegetariana','tradicional'], ingredients:['platano','tomate','cebolla'], description:'Plátano maduro o verde con hogao recién hecho.'},
    {id:'arroz-limon', title:'Arroz al limón y cilantro', icon:'🍚', author:'María F.', rating:'4.5 ★', time:25, cost:1900, tags:['económica','sin gluten'], ingredients:['arroz','limon','cilantro'], description:'Acompañamiento fresco para pescado o verduras.'},
    {id:'frijoles-casa', title:'Fríjoles de la casa', icon:'🫘', author:'Diego V.', rating:'4.9 ★', time:70, cost:5200, tags:['tradicional','sin gluten'], ingredients:['frijol','platano','tomate'], description:'Fríjol cargamanto cocido lento con plátano y hogao.'},
    {id:'huevos-hogao', title:'Huevos pericos con hogao', icon:'🍳', author:'Nora G.', rating:'4.7 ★', time:15, cost:3300, tags:['desayuno','vegetariana'], ingredients:['huevos','tomate','cebolla'], description:'Huevos revueltos con tomate y cebolla larga.'},
    {id:'aguacate-limon', title:'Tostadas de aguacate', icon:'🥑', author:'Pablo S.', rating:'4.5 ★', time:10, cost:2500, tags:['rápida','rescata inventario'], ingredients:['aguacate','limon','arepas'], description:'Aguacate maduro con limón sobre arepas tostadas.'}
  ]
};
window.renderRecipeCards = function(recipes){
  const rows=recipes.map(r=>`<section class="card flat recipe-catalog-card"><div class="meal three" style="height:130px;font-size:20px">${r.icon}</div><div class="eyebrow" style="margin-top:13px">Por ${r.author} · ${r.rating} · ${r.time} min</div><h3 class="section-title" style="margin:5px 0">${r.title}</h3><p class="muted">${r.tags.join(' · ')} · ${new Intl.NumberFormat('es-CO',{style:'currency',currency:'COP',maximumFractionDigits:0}).format(r.cost)} por porción</p><button class="btn secondary" data-go="detalle" data-recipe="${r.id}">Ver receta →</button></section>`).join('');
  return rows || '<p class="muted">No encontramos recetas con esos filtros. Prueba otra búsqueda.</p>';
};
window.renderRecipeDetail = function(id){
  const r=window.DespensaCatalog.recipes.find(x=>x.id===id)||window.DespensaCatalog.recipes[0];
  const ingredients=r.ingredients.map(id=>window.DespensaCatalog.products.find(p=>p.id===id)).filter(Boolean).map(p=>`${p.icon} ${p.name}`).join(' · ');
  return `<div class="pagehead"><div><div class="eyebrow">Receta comunitaria · ${r.rating}</div><h1>${r.title}</h1><p class="subtitle">Por ${r.author} · ${r.time} min · ${r.tags.join(' · ')}</p></div><button class="btn ghost" data-go="comunidad">← Recetario</button></div><div class="grid g2"><div class="meal three" style="height:270px;font-size:20px">${r.icon} ${r.title}</div><section class="card"><span class="badge yellow">${new Intl.NumberFormat('es-CO',{style:'currency',currency:'COP',maximumFractionDigits:0}).format(r.cost)} / porción</span><h3 class="section-title" style="margin-top:17px">Ingredientes · 4 porciones</h3><p class="muted">${ingredients}</p><h3 class="section-title">Preparación</h3><p class="muted">${r.description} Ajusta las cantidades a las porciones del hogar y verifica etiquetas si hay alergias.</p><div class="row"><button class="btn secondary" data-action="favorito">♡ Guardar</button><button class="btn" data-go="generar">Añadir al menú</button></div></section></div><p class="muted" style="margin-top:15px">Atribución a ${r.author} · información dietaria declarada por la comunidad.</p>`;
};
