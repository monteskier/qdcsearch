import { useState } from "react";


export const useGetQDC = ()=>{

  // const [seccio, setSeccio ] = useState([]);
  // const [subSeccio, setSubSeccio ] = useState([]);
  // const [serie, setSerie ] = useState([]);
  const [data, setData ] = useState([]);

  const getSeccio = async()=>{
    try {
      const response = await fetch('../assets/dades/seccio.csv');
      const csvData = await response.text();


      const lines =csvData.trim().split('\n');      
      
      const headers = ['SECCOD', 'SUBSECCOD', 'SERCOD',	'SUBSERCOD','DESC'];

      const jsonData =  lines.map( (line, i) =>  {
        if(i > 0){
          const fields = line.split(';');
          const row = {};
                      
          row[headers[0]] = fields[0].trim();
          row[headers[1]] = 'X';
          row[headers[2]] = 'X';
          row[headers[3]] = 'X';
          row[headers[4]] = fields[1].trim();          
          
          return row;
        }else{
          return null;
        }
        
      }).filter(row => row !== null); 
      
      return jsonData;

    } catch (error) {
      console.error('Error al leer el archivo CSV:', error);
      return false;
    }
  }

  const getSubSeccio = async()=>{
    try {
      const response = await fetch('../assets/dades/subseccio.csv');
      const csvData = await response.text();


      const lines =csvData.trim().split('\n');      
      
      const headers = ['SECCOD', 'SUBSECCOD', 'SERCOD',	'SUBSERCOD','DESC'];

      const jsonData =  lines.map( (line, i) =>  {
        if(i > 0){
          const fields = line.split(';');
          const row = {};
                      
          row[headers[0]] = fields[0].trim();
          row[headers[1]] = fields[1].trim();
          row[headers[2]] = 'X';
          row[headers[3]] = 'X';
          row[headers[4]] = fields[2].trim();          
          
          return row;
        }else{
          return null;
        }
        
      }).filter(row => row !== null); 
      
      return jsonData;

    } catch (error) {
      console.error('Error al leer el archivo CSV:', error);
      return false;
    }
  }
  
  const getSubSerie = async()=>{
    try {
      const response = await fetch('../assets/dades/subserie.csv');
      const csvData = await response.text();


      const lines =csvData.trim().split('\n');      
      
      const headers = ['SECCOD', 'SUBSECCOD', 'SERCOD',	'SUBSERCOD','DESC'];

      const jsonData =  lines.map( (line, i) =>  {
        if(i > 0){
          const fields = line.split(';');
          const row = {};
                      
          row[headers[0]] = fields[0].trim();
          row[headers[1]] = fields[1].trim();
          row[headers[2]] = fields[2].trim();
          row[headers[3]] = fields[3].trim();
          row[headers[4]] = fields[4].trim();          
          
          return row;
        }else{
          return null;
        }
        
      }).filter(row => row !== null); 
      
      return jsonData;

    } catch (error) {
      console.error('Error al leer el archivo CSV:', error);
      return false;
    }
  }
  const getSerie = async()=>{
   try {
      const response = await fetch('../assets/dades/serie.csv');
      const csvData = await response.text();


      const lines =csvData.trim().split('\n');      
      
      const headers = ['SECCOD', 'SUBSECCOD', 'SERCOD',	'SUBSERCOD','DESC'];

      const jsonData = lines.map( (line, i) =>  {
        if(i > 0){
          const fields = line.split(';');
          const row = {};
                      
          row[headers[0]] = fields[0].trim();
          row[headers[1]] = fields[1].trim();
          row[headers[2]] = fields[2].trim();
          row[headers[3]] = 'X';
          row[headers[4]] = fields[3].trim();          
          
          return row;
        }else{
          return null;
        }
        
      }).filter(row => row !== null); 
      

      
      return jsonData;
    } catch (error) {
      console.error('Error al leer el archivo CSV:', error);
      return false;
    }
  }

  const search = (text, book)=>{
          
      const jsonData = book.filter(item => {
        // Convertir la descripción actual a minúsculas para hacer la comparación
        const descripcionMinusculas = item.DESC.toLowerCase();
        // Convertir el texto buscado a minúsculas
        const textoBuscadoMinusculas = text.toLowerCase();
        // Verificar si la descripción contiene el texto buscado en cualquier posición
        return descripcionMinusculas.includes(textoBuscadoMinusculas);
      });
      return jsonData;  
  
}

  const superSearch= async(text)=>{    
    const subseries = await getSubSerie();
    const series =  await getSerie();
    const subseccio = await getSubSeccio();
    const seccio = await getSeccio();

    const jsonData = [...subseries, ...series, ...subseccio, ...seccio];

    console.log(`es carregen les dades de series i subseries}`);
    
    const jsonDataResult = search(text, jsonData);      
    if(jsonDataResult.length>0){
      setData(jsonDataResult);
      return true;
    }else{
      return false;        
    }
  }  
  return ({
    data,
    //metodos:
    getSubSerie, superSearch, getSerie
  })
}
