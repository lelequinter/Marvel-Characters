import React, {useState, useEffect}  from 'react'
import './App.css'
import Card from './components/card'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import NavbarComp from './components/navbarComp'


//import Pages from './components/pagination'

export default function App() {

  const [currentPage,setcurrentPage] = useState(0);

  const nextPage = () => {
    setcurrentPage(i => i + 9)
  }

  const prevPage = () => {
    if (currentPage >0)
    setcurrentPage(i => i - 9)
  }

  const [infos,setInfos] = useState()

  const fetchApi = async () => {
    let marvelUrl = `https://gateway.marvel.com/v1/public/characters?limit=9&offset=${currentPage}&ts=jkluio&apikey=d2b78cb0e828720eff23e5194b99c04b&hash=1b81c1d1bb5d8c7cb9608d0b32aaa270`;
    const response = await fetch(marvelUrl)
    //console.log(response.status)
    const responseJson = await response.json()
    setInfos(responseJson)
    //console.log(currentPage)
  }

  useEffect(() => {
    fetchApi()
  }, [currentPage])
  // el [] vacío hace lo del useEffect una sola vez, si se le asigna un parametro 
  // se activará el useEffect cada que este parametro asignado sufra un cambio
  //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
/*
  const[currentPage, setCurrentPage] = useState(0)

  const filteredCharacters = () : infos.data.results => {
    return infos.data.results.slice( currentPage , currentPage + 12 );
  }

  const nextPage = () => {
    setCurrentPage( currentPage + 12);
  }

  const prevPage = () => {
    if (currentPage >0)
    setCurrentPage( currentPage - 12);
  }
  //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
*/
  return (
    <div className="App">
      <NavbarComp/>
  
      <div className="container d-flex justify-content-center align-items-center">
        <div className="row">
          {!infos ? <div className="lds-dual-ring"></div> :
          //recorro el json con map en el punto de results para extraer los nombres
          infos.data.results.map( hero =>(
            //<li>{hero.name}</li>
              <div className="col-md-4 mt-4" key={hero.id}>  
                <Card characters={hero}/>
              </div>
           ))
        }
       </div>

      </div>

      <div className="container d-flex justify-content-center align-items-center mt-4">
        <button className="btn btn-secondary" onClick={prevPage}> Before </button>
        <button className="btn btn-secondary" onClick={nextPage}> Next </button>
      </div>

    </div>
  )
}
