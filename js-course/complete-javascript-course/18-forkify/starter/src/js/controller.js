import * as model from './model.js'
import recipeView from './views/recipeView.js'

import 'core-js/stable';
import 'regenerator-runtime/runtime';

const recipeContainer = document.querySelector('.recipe');



// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////


const controlRecipe = async function(){
  try {
    const id = window.location.hash.slice(1);
    if(!id) return;
    recipeView.renderSpinner();
    // 1 load recipe
    await model.loadRecipe(id)
    // 2 rendering recipe
    recipeView.render(model.data.recipe);
  }catch (err){

    recipeView.renderError(`${err} error`);
  }
}

const controlSearchRes = async function() {
  try {
    await model.loadSearchResults('pizza')
  }catch (e){

  }
}

const init = function() {
  recipeView.addHandlerRender(controlRecipe)
}// view has no idea of how controlRecipe works, but it will receive once it has updated
// it is handled in here


