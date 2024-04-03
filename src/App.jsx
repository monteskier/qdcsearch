
import './App.css'
import Swal from 'sweetalert2'
import 'sweetalert2/dist/sweetalert2.css';
import { QdcItem, Cercador } from './components';
import { useEffect } from 'react';
import {useGetQDC } from './hooks';


function App() {
  const {getSubSerie, superSearch, data } = useGetQDC();  
  useEffect(() => {
    const fetchDataAsync = async () => {
      await getSubSerie();
      
    };
    fetchDataAsync();    
  }, []); 

  const handleSubmit = async(e)=>{    
    e.preventDefault();
    const text = e.target.descripcio.value;
    if(text){
      const resp = await superSearch(text);    
      console.log({resp});
      if(!resp){
        Swal.fire('Error', `No s'na trobat referències a la cerca...`,'error');
        e.target.descripcio.value='';
        await getSubSerie();
      } 
      

    }else{
      await getSubSerie();
    }
    
  }
  
  return (
    <>    
    <main className='container'>
      <div className="row">
        <div className="col-3 g-0">
          <Cercador onSubmit={handleSubmit}></Cercador>
        </div>
        <div className="col-9">
          <table id="miTabla" className="table table-light table-striped table-hover table-sm">
              <caption>TAULA QDC</caption>
              <thead>
                <tr>
                  <th>Seccio</th>
                  <th>Subseccio</th>
                  <th>Serie</th>
                  <th>Subserie</th>
                  <th>Descripcio</th>
                </tr>
              </thead>
              <tbody>

                  {data&&
                    data.map( (item, index) =>{
                      return(
                        <QdcItem item={item} key={index}></QdcItem>
                      )
                    })
                  }
                
              </tbody>
          </table>
        </div>    
      </div>
    </main>
    </>
  )
}

export default App
