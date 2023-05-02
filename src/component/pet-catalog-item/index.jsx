import { useNavigate } from 'react-router-dom'
import './style.css'

export const PetCatalogItem = ({ pet }) => {

    const navigate = useNavigate()
    const getPodrobnee = () => {
        navigate("/pets/:type/:id")
    }

    return (
        <div className='container'>
            <div className='petcatalog_block'>
                <div className='petcatalog_img'>
                    {pet.main_image}
                </div>
                <div className='petcatalog_name'>
                    <h2 className='petcatalog_names'>{pet.name} </h2>
                    {pet.gender}
                </div>
                <div className='petcatalog_line'></div>
                <p className='petcatalog_text'>{pet.short_text}</p>
                <div className='petcatalog_lin'></div>
                <div className='percatalog_podrobnee' onClick={getPodrobnee}>
                    ПОДРОБНЕЕ
                </div>
            </div>
        </div>
    )
}

