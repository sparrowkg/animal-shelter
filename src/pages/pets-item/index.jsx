import './style.css'
import { useEffect, useState } from 'react'


 function PetsItemPage() {
  const [li, setLi] = useState([])
  useEffect(() => {
    const currentURL = window.location.href;
    const urlParts = currentURL.split('/');
    const lastCharacter = urlParts.slice(-2).join('/');
    fetch(`http://35.195.136.135/api/${lastCharacter}`)
      .then(res => res.json())
      .then((data) => {
        setLi(data)
      })
  }, [])
  return (
    
    <div className='container'>
    <div className='petsitempage_block'>
        {
          <img className='petsitempage_img' src={li.main_image} alt="" />
        }
      <div>
        <div className='petsitempage_info'>
          <div className='petsitem_name_male'>
            {
          <h2 className='petsitempage_name'>{li.name}</h2>
          }
          {
           <p className='petsitempage_male'>Пол питомца: {li.gender} </p> 
          }
          </div>
          {
            <p className='petsitempage_descrition' > {li.description} </p>
          }
        </div>
        
        <div className='petsitempage_contac'>
          <h4 className='petsitempage_volonter'>ВОЛОНТЕР: ВАРВАРА</h4>
          <h4 className='petsitempage_contacts'>ТЕЛЕФОН: +996 555 567 847 </h4>
        </div>
      </div>
       
    </div>
    {/* <div className='petsitempage_kartinki'>
        <img className='one' src="https://images.unsplash.com/photo-1561037404-61cd46aa615b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" />
        <img className='two' src="https://images.unsplash.com/photo-1561037404-61cd46aa615b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" />
        <img className='three' src="https://images.unsplash.com/photo-1561037404-61cd46aa615b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" />
       </div> */}
    </div>
  )  
}
export default PetsItemPage