import icons from 'url:../../img//icons.svg'
export default class View{
  _data;

  render(data){
    if(!data || (Array.isArray(data) && data.length===0 )) return this.renderError();

    this._data=data;
    const markup = this._generateMarkup();

    // recipeContainer.innerHTML='';
    this._clear();
    this._parentElement.insertAdjacentHTML('afterbegin',markup);
  }
  update(data){
    // if(!data || (Array.isArray(data) && data.length===0 )) return this.renderError();

    this._data=data;
    const newMarkup = this._generateMarkup();

    const newDOM = document.createRange().createContextualFragment(newMarkup);
    const newElements = Array.from(newDOM.querySelectorAll('*'));
    const curElements = Array.from(this._parentElement.querySelectorAll('*'));

    newElements.forEach((newE,i)=>{
      const curEl = curElements[i];
      newE.isEqualNode(curEl);
      if(!newE.isEqualNode(curEl) && newE.firstChild?.nodeValue.trim() !== ''){
        curEl.textContent = newE.textContent;
      }
    // update changed attribute
      if(!newE.isEqualNode(curEl)){
        Array.from(newE.attributes).forEach(attr=>{
          curEl.setAttribute(attr.name,attr.value);
        })
      }

    })


  }
  _clear(){
    this._parentElement.innerHTML='';
  }

  renderSpinner = function() {
    const markup = `
  <div class="spinner">
          <svg>
            <use href="${icons}#icon-loader"></use>
          </svg>
  </div>
  `;
    this._parentElement.innerHTML = '';
    this._parentElement.insertAdjacentHTML('afterbegin',markup);
  }

  renderError(message=this._errorMsg){
    const markup = `
      <div class="error">
            <div>
              <svg>
                <use href="${icons}#icon-alert-triangle"></use>
              </svg>
            </div>
            <p>${message}</p>
      </div>
    `;
    this._clear();
    this._parentElement.insertAdjacentHTML('afterbegin',markup);
  }

  renderMsg(message=this._successMsg){
    const markup = `
      <div class="message">
          <div>
            <svg>
              <use href="src/img/icons.svg#icon-smile"></use>
            </svg>
       </div>
    `;
    this._clear();
    this._parentElement.insertAdjacentHTML('afterbegin',markup);
  }
}