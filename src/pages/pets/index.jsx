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
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const route = getRoute(type)
    if (!route) return

    setLoading(true)
    fetch(`${api}/${route}/`)
      .then(res => res.json())
      .then((data) => {
        setList(data)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [type])

  return (
      <div className='container'>
        <Title>
          { type === 'cats' ? 'Кошки' : 'Собаки' }
        </Title>

        <div className="content flex">
          {
            (list.length && !loading) && list.map(pet => (
              <PetCatalogItem pet={pet} key={pet.id}/>
            ))
          }
          {
            loading && <div>Loading...</div>
          }
        </div>
      </div>
  )  
}