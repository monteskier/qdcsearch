

export const Cercador = ({onSubmit}) => {
      
  return (
    <form action="" className="form" onSubmit={onSubmit}>               
      <input type="text" className="form-control" name="descripcio" id="descripcio"/>
      <label htmlFor="" className="form-label form-label-fluid"></label>
      <input className='btn btn-primary mt-3 w-100' type="submit"  />
    </form>
  )
}
