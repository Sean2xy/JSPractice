import {API_URL} from './config.js';
import {getJson} from './helper.js';

export const state = {
  recipe:{},
  search:{
    query:'',
    result:[]
  }
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
    }
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
  }catch (e) {
    throw e;
  }
}
