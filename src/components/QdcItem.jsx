export const QdcItem = ({item}) => {
  
  return (
    <tr>
      {/* Renderiza los datos en la plantilla */}
        <td>{item.SECCOD}</td>
        <td>{item.SUBSECCOD}</td>
        <td>{item.SERCOD}</td>
        <td>{item.SUBSERCOD}</td>
        <td>{item.DESC}</td>
        {/* Puedes mostrar otros datos según la estructura de tu JSON */}
    </tr>
    
  )
}
