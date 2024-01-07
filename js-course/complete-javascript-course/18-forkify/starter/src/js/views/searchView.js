class SearchView{
  _parentE = document.querySelector('.search')

  getQuery(){
    const query = this._parentE.querySelector('.search__field').value;
    this.clearInput();
    return query
  }

  clearInput(){
    this._parentE.querySelector('.search__field').value='';
  }
  addHandlerSearch(handler){
    this._parentE.addEventListener('submit',function(ev) {
      ev.preventDefault();
      handler();
    });
  }
}
export default new SearchView()