/* Interacciones específicas de catálogo separadas del enrutador de pantallas. */
document.addEventListener('click',event=>{
  const recipe=event.target.closest('[data-recipe]');
  if(recipe)sessionStorage.setItem('selectedRecipe',recipe.dataset.recipe);
  const filter=event.target.closest('[data-recipe-filter]');
  if(!filter)return;event.stopPropagation();
  const value=filter.dataset.recipeFilter;
  document.querySelectorAll('[data-recipe-filter]').forEach(button=>button.classList.toggle('selected',button===filter));
  const recipes=window.DespensaCatalog.recipes;
  const results=value==='all'?recipes:recipes.filter(item=>value==='inventario'?item.tags.some(tag=>tag.includes('inventario')):item.tags.some(tag=>tag.includes(value)));
  const grid=document.getElementById('recipe-grid');
  if(grid)grid.innerHTML=window.renderRecipeCards(results);
},true);
