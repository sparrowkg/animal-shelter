import { useParams } from 'react-router'
import { Title } from '../../component/title'
import { PetCatalogItem } from '../../component/pet-catalog-item'
import './style.css'
import { useEffect, useState } from 'react'

const api = 'http://35.195.136.135/api'

const getRoute = (type) => {
  if (type === 'cats') return 'cat'
  if (type === 'dogs') return 'dog'
  return ''
}

export const PetsPage = () => {
  const { type } = useParams()
  const [list, setList] = useState([])

  useEffect(() => {
    const route = getRoute(type)
    if (!route) return

    fetch(`${api}/${route}/`)
      .then(res => res.json())
      .then((data) => {
        setList(data)
      })
  }, [])

  return (
      <div className='container'>
        <Title>
          { type === 'cats' ? 'Кошки' : 'Собаки' }
        </Title>

        <div className="content">
          {
            list.map(pet => (
              <PetCatalogItem pet={pet} key={pet.id}/>
            ))
          }
        </div>
      </div>
  )  
}