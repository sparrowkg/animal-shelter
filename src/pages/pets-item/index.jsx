import './style.css'

export const PetsItemPage = () => {
  return (
    <div className='container'>

      <div className='petsitempage_block'>
        <img className='petsitempage_img' src="https://images.unsplash.com/photo-1561037404-61cd46aa615b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" />
      <div>
        <div className='petsitempage_info'>
         <h3 className='petsitempage_name'>МИСА</h3>
         <p>Пол питомца:ДЕВОЧКА</p>
         <p>Озорная и смышлёная крошка</p>
        </div>
        
        <div className='petsitempage_contac'>
         <h4 className='petsitempage_volonter'>ВОЛОНТЕР:ВАРВАРА</h4>
         <h4 className='petsitempage_contacts'>ТЕЛЕФОН: +996 555 567 847 </h4>
        </div>
      </div>
       
      </div>
       
     </div>
  )  
}