import { useParams } from 'react-router'
import { Title } from '../../component/title'
import './style.css'

export const PetsPage = () => {
  const { type } = useParams()

  return (
      <div className='container'>
        <Title>
          { type === 'cats' ? 'Кошки' : 'Собаки' }
        </Title>

        <div className="content">
          контент страницы
        </div>
      </div>
  )  
}