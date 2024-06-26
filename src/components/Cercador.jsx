

export const Cercador = ({onSubmit}) => {
      
  return (
    <div className="row justify-content-between align-items-center">
      <div className="col-12 d-flex align-items-center">
        <form action="" className="form" onSubmit={onSubmit}>
          <div className="barra-busqueda d-block">
            <div class="icono">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
              </svg>
            </div>
            <input name="descripcio" id="descripcio" type="search" placeholder="Buscar" />
          </div>               
        </form>
      </div>
    </div>
  )
}
