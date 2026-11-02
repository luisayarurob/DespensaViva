/* Lista interactiva y presupuesto. Persiste únicamente el borrador de compra en este navegador. */
window.Shopping = (() => {
  const catalog = window.DespensaCatalog;
  const key = 'despensa-viva-shopping-v1';
  const initialIds = ['papa-criolla','trucha','espinaca','zanahoria','aguacate','tomate','mazorca'];
  let state = load();
  function load() {
    try {
      const saved = JSON.parse(localStorage.getItem(key) || 'null');
      if (saved && Array.isArray(saved.items)) return saved;
    } catch (_) {}
    return {budget:220000, items:initialIds.map(id=>({id,qty:catalog.products.find(p=>p.id===id).quantity,store:'plaza',checked:true}))};
  }
  function persist(){localStorage.setItem(key,JSON.stringify(state));}
  function product(id){return catalog.products.find(p=>p.id===id);}
  function price(row){const p=product(row.id);return p ? p[row.store] : 0;}
  function money(value){return new Intl.NumberFormat('es-CO',{style:'currency',currency:'COP',maximumFractionDigits:0}).format(value);}
  function totals(){const selected=state.items.filter(x=>x.checked);return {total:selected.reduce((sum,x)=>sum+price(x)*x.qty,0),market:selected.reduce((sum,x)=>sum+(product(x.id)?.supermarket||0)*x.qty,0),count:state.items.length,selected:selected.length};}
  function renderShoppingScreen(){
    const available=catalog.products.filter(p=>!state.items.some(row=>row.id===p.id));
    return `<div class="pagehead"><div><div class="eyebrow">Compra editable · ${state.items.length} productos</div><h1>Tu lista de compras</h1><p class="subtitle">Ajusta cantidades, comercio y presupuesto; los totales se actualizan al instante.</p></div><button class="btn" data-go="tiendas">Comparar lugares</button></div>
      <div class="shopping-layout"><section class="card shopping-list"><div class="row shopping-heading"><h3 class="section-title">Productos para tu hogar</h3><span class="badge" data-count>${state.items.length} productos</span></div>
      <div class="shopping-items" data-shopping-items>${state.items.map(rowMarkup).join('')}</div>
      <div class="add-product"><label for="add-product-select">Agregar producto del catálogo</label><div class="add-product-controls"><select class="field" id="add-product-select"><option value="">Elige un producto…</option>${available.map(p=>`<option value="${p.id}">${p.icon} ${p.name} · desde ${money(Math.min(p.plaza,p.supermarket,p.mayorista))}/${p.unit}</option>`).join('')}</select><button class="btn secondary" data-add-product>Agregar</button></div></div>
      <p class="muted shopping-footnote">Precios de referencia por unidad; confirma el valor con cada comercio. Los productos en inventario se pueden descontar desde la despensa.</p></section>
      <aside class="card shopping-summary"><h3 class="section-title">Tu presupuesto</h3><label for="shopping-budget">Límite para esta compra</label><div class="budget-input"><span>$</span><input class="field" id="shopping-budget" type="number" min="0" step="5000" value="${state.budget}" inputmode="numeric" aria-label="Presupuesto en pesos colombianos"><span>COP</span></div>
      <div class="budget-meter"><div class="budget-meter-label"><span>Seleccionado</span><b data-total>${money(totals().total)}</b></div><div class="progress"><i data-progress></i></div><p class="muted" data-budget-status></p></div>
      <div class="summary-line"><span>Comparativo en supermercado</span><b data-supermarket>${money(totals().market)}</b></div><div class="summary-line"><span>Productos seleccionados</span><b data-selected>${totals().selected} de ${state.items.length}</b></div><hr class="line"><div class="summary-line total-line"><b>Total estimado</b><b class="stat" data-total-large>${money(totals().total)}</b></div>
      <button class="btn shopping-cta" data-go="domicilio">Continuar con pedido</button><button class="btn secondary shopping-cta" style="margin-top:9px" data-go="compra">Guardar para comprar en tienda</button><p class="muted">Puedes editar productos y cantidades antes de enviar.</p></aside></div>`;
  }
  function rowMarkup(row){
    const p=product(row.id);if(!p)return '';
    return `<article class="shopping-row" data-product-row="${p.id}"><label class="shopping-check" aria-label="Incluir ${p.name}"><input type="checkbox" data-check="${p.id}" ${row.checked?'checked':''}></label><span class="food">${p.icon}</span><div class="shopping-product"><b>${p.name}</b><small>${p.category} · ${p.meal}</small><small>${money(price(row))} / ${p.unit}</small><select class="store-select" data-store="${p.id}" aria-label="Lugar recomendado para ${p.name}">${catalog.stores.map(s=>`<option value="${s.id}" ${row.store===s.id?'selected':''}>${s.label} · ${money(p[s.id])}</option>`).join('')}</select></div><div class="quantity-control" aria-label="Cantidad de ${p.name}"><button type="button" data-qty="-1" data-id="${p.id}" aria-label="Quitar una unidad">−</button><input type="number" min="0.25" step="0.25" value="${row.qty}" data-quantity="${p.id}" aria-label="Cantidad de ${p.name}"><span>${p.unit}</span><button type="button" data-qty="1" data-id="${p.id}" aria-label="Agregar una unidad">+</button></div><b class="row-price" data-row-total="${p.id}">${money(price(row)*row.qty)}</b><button class="remove-product" data-remove="${p.id}" aria-label="Quitar ${p.name}" title="Quitar">×</button></article>`;
  }
  function renderDelivery(){
    const t=totals(),deliveryFee=4500;
    const cart=state.items.filter(x=>x.checked).map(row=>{const p=product(row.id);return `<div class="summary-line"><span>${p.icon} ${p.name} × ${row.qty}</span><b>${money(price(row)*row.qty)}</b></div>`;}).join('');
    return `<div class="pagehead"><div><div class="eyebrow">Entrega en Bogotá</div><h1>Tu mercado, hasta la puerta</h1><p class="subtitle">Revisa la lista personalizada y el estimado antes de solicitar disponibilidad.</p></div></div><div class="grid g2"><section class="card"><h3 class="section-title">Dirección de entrega</h3><label>Dirección<input class="field" value="Cra. 7 # 54-18, apto 402"></label><label style="margin-top:13px">Instrucciones<input class="field" placeholder="Portería, timbre, etc."></label><h3 class="section-title" style="margin-top:20px">Proveedor</h3><label>Comercio de referencia<select class="field"><option>Mercado local aliado · domicilio $4.500</option><option>Supermercado · domicilio $5.000</option><option>Plaza de mercado · domicilio $6.000</option></select></label><h3 class="section-title" style="margin-top:20px">Productos seleccionados</h3>${cart||'<p class="muted">No hay productos seleccionados. Vuelve a tu lista para elegir.</p>'}</section><section class="card"><h3 class="section-title">Antes de solicitar</h3><div class="summary-line"><span>${t.selected} productos</span><b>${money(t.total)}</b></div><div class="summary-line"><span>Domicilio estimado</span><b>${money(deliveryFee)}</b></div><hr class="line"><div class="summary-line total-line"><b>Total estimado</b><b class="stat">${money(t.total+deliveryFee)}</b></div><label style="margin-top:14px">Sustituciones permitidas<select class="field"><option>Preguntarme antes de cambiar</option><option>Elegir alternativa de precio similar</option></select></label><p class="muted">El comercio confirma disponibilidad y precio final antes del pago. No se realiza ningún cobro en este prototipo.</p><button class="btn" data-action="pedido">Solicitar disponibilidad →</button></section></div>`;
  }
  function refreshTotals(){
    const t=totals(),budget=Math.max(0,Number(state.budget)||0),pct=budget?Math.min(100,t.total/budget*100):0;
    document.querySelectorAll('[data-total]').forEach(el=>el.textContent=money(t.total));
    document.querySelectorAll('[data-total-large]').forEach(el=>el.textContent=money(t.total));
    document.querySelectorAll('[data-supermarket]').forEach(el=>el.textContent=money(t.market));
    document.querySelectorAll('[data-selected]').forEach(el=>el.textContent=`${t.selected} de ${t.count}`);
    document.querySelectorAll('[data-count]').forEach(el=>el.textContent=`${t.count} productos`);
    document.querySelectorAll('[data-progress]').forEach(el=>el.style.width=`${pct}%`);
    const status=document.querySelector('[data-budget-status]');if(status){status.textContent=budget===0?'Ingresa un presupuesto para comparar.':t.total>budget?`Te pasas ${money(t.total-budget)} del presupuesto.`:`Te quedan ${money(budget-t.total)} disponibles.`;status.classList.toggle('over-budget',t.total>budget);}
    state.items.forEach(row=>{const total=document.querySelector(`[data-row-total="${row.id}"]`);if(total)total.textContent=money(price(row)*row.qty);const pr=document.querySelector(`[data-product-row="${row.id}"] .shopping-product small:nth-of-type(2)`);if(pr)pr.textContent=`${money(price(row))} / ${product(row.id).unit}`;});
  }
  function updateFromInput(el){
    if(el.matches('[data-quantity]')){const row=state.items.find(x=>x.id===el.dataset.quantity);if(row){const qty=Number(el.value);if(qty>0)row.qty=qty;persist();refreshTotals();}}
    if(el.matches('#shopping-budget')){state.budget=Math.max(0,Number(el.value)||0);persist();refreshTotals();}
  }
  document.addEventListener('input',e=>{if(e.target.closest('#view')&&(e.target.matches('[data-quantity]')||e.target.matches('#shopping-budget')))updateFromInput(e.target);});
  document.addEventListener('change',e=>{
    const el=e.target;if(el.matches('[data-check]')){const row=state.items.find(x=>x.id===el.dataset.check);if(row){row.checked=el.checked;persist();refreshTotals();}}
    if(el.matches('[data-store]')){const row=state.items.find(x=>x.id===el.dataset.store);if(row){row.store=el.value;persist();refreshTotals();}}
    if(el.matches('[data-quantity]'))updateFromInput(el);
  });
  document.addEventListener('click',e=>{
    const qty=e.target.closest('[data-qty]'),add=e.target.closest('[data-add-product]'),remove=e.target.closest('[data-remove]');
    if(qty){const row=state.items.find(x=>x.id===qty.dataset.id);if(row){row.qty=Math.max(.25,Math.round((row.qty+Number(qty.dataset.qty))*4)/4);const input=document.querySelector(`[data-quantity="${row.id}"]`);if(input)input.value=row.qty;persist();refreshTotals();}}
    if(add){const select=document.getElementById('add-product-select'),p=product(select?.value);if(!p)return;state.items.push({id:p.id,qty:p.quantity,store:'plaza',checked:true});persist();const root=document.getElementById('view');if(root&&location.hash==='#lista')root.innerHTML=renderShoppingScreen();}
    if(remove){state.items=state.items.filter(x=>x.id!==remove.dataset.remove);persist();const root=document.getElementById('view');if(root&&location.hash==='#lista')root.innerHTML=renderShoppingScreen();}
  });
  return {render:renderShoppingScreen,delivery:renderDelivery,refresh:refreshTotals};
})();
