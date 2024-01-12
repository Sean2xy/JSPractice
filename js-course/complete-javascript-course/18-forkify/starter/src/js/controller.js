import * as model from './model.js'
import recipeView from './views/recipeView.js'
import paginationView from './views/paginationView';
import 'core-js/stable';
import 'regenerator-runtime/runtime';
import searchView from './views/searchView';
import resultsView from './views/resultsView';
import bookmarksView from './views/bookmarksView';

if(module.hot){
  module.hot.accept()
}
// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////

const controlRecipe = async function(){
  try {
    const id = window.location.hash.slice(1);
    if(!id) return;
    recipeView.renderSpinner();
    // 0 result view
    resultsView.update(model.getSearchResultPage());
    bookmarksView.update(model.state.bookmarks);

    // 1 load recipe
    await model.loadRecipe(id)
    // 2 rendering recipe
    recipeView.render(model.state.recipe);
  }catch (err){

    recipeView.renderError(`${err} error`);
  }
}

const controlSearchRes = async function() {
  try {
    resultsView.renderSpinner()
    // 1 get search query
    const query = searchView.getQuery();
    if(!query) return;
    // 2 load search result
    await model.loadSearchResults(query)

    // 3 render result
    // resultsView.render(model.state.search.result)
    resultsView.render(model.getSearchResultPage())

    // 4 pagination
    paginationView.render(model.state.search);
  }catch (e){
    console.log(e);
  }
}

const controlPagination = function(goToPage) {
  console.log('pag controller');
  // render new

  resultsView.render(model.getSearchResultPage(goToPage))

  // pagination
  paginationView.render(model.state.search);
}
// controlSearchRes()
const controlServings = function(newServings) {
  model.updateServings(newServings);

  // recipeView.render(model.state.recipe);
  recipeView.update(model.state.recipe);
}

const controlAddBookmark = function() {
  if(!model.state.recipe.bookmarked) model.addBookmark(model.state.recipe);
  else model.deleteBookmark(model.state.recipe);
  recipeView.update(model.state.recipe);

  // render the marked
  bookmarksView.render(model.state.bookmarks);

}
const init = function() {
  recipeView.addHandlerRender(controlRecipe);
  recipeView.addHandlerUpdateServings(controlServings)
  searchView.addHandlerSearch(controlSearchRes);
  paginationView.addHandlerClick(controlPagination);

  recipeView.addHandlerAddBookMark(controlAddBookmark);
}// view has no idea of how controlRecipe works, but it will receive once it has updated
// it is handled in here

init();


