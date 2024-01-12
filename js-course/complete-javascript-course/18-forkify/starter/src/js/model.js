import {API_URL} from './config.js';
import {getJson} from './helper.js';

export const state = {
  recipe:{},
  search:{
    query:'',
    result:[],
    page:1,
    resultPerPage:10
  },
  bookmarks:[]
};

export const loadRecipe = async function(id) {
  try {
    // const res = await fetch(`${API_URL}/${id}`)
    // const data = await res.json();
    // console.log(data);
    //
    // if(!res.ok) throw new Error(`${data.message} (${res.status})`);
    const data = await getJson(`${API_URL}/${id}`)

    const {recipe} = data.data;
    state.recipe = {
      id:recipe.id,
      title:recipe.title,
      publisher: recipe.publisher,
      sourceUrl: recipe.sourceUrl,
      image: recipe.image_url,
      servings:recipe.servings,
      cookingTime:recipe.cooking_time,
      ingredients: recipe.ingredients
    };

    if(state.bookmarks.some(b=>b.id===id)) state.recipe.bookmarked=true;
    else state.recipe.bookmarked = false;

    console.log(state.recipe);
  }catch (e) {
    throw e;
  }
}

export const loadSearchResults = async function(query) {
  try{
    const data = await getJson(`${API_URL}?search=${query}`)
    console.log(data);
    state.search.query=query;

    state.search.result=data.data.recipes.map(recipe=>{
      return {
        id:recipe.id,
        title:recipe.title,
        publisher: recipe.publisher,
        sourceUrl: recipe.sourceUrl,
      }
    });
    state.search.page=1;
  }catch (e) {
    throw e;
  }
}

export const getSearchResultPage =  function(page=state.search.page) {
  state.search.page = page;

  const start = (page-1) * state.search.resultPerPage;
  const end = page * state.search.resultPerPage;
  return state.search.result.slice(start,end);
}

export const updateServings = function(newServings) {
  state.recipe.ingredients.forEach(ing=>{
    ing.quantity=ing.quantity * newServings/state.recipe.servings;
  })

  state.recipe.servings=newServings;
}

// presist the data
const presistBookmarks = function() {
  localStorage.setItem('bookmarks',JSON.stringify(state.bookmarks));
}
export const addBookmark = function(recipe) {

  state.bookmarks.push(recipe);
  if(recipe.id===state.recipe.id) state.recipe.bookmarked = true;

  presistBookmarks();
}

export const deleteBookmark = function(id) {
  state.bookmarks.splice(state.bookmarks.findIndex(e=>e.id===id),1);

  if(id===state.recipe.id) state.recipe.bookmarked = false;

  presistBookmarks()
}

const init= function(){
  const storage = localStorage.getItem('bookmarks');
  if(storage) state.bookmarks=JSON.parse(storage);

}
init();
