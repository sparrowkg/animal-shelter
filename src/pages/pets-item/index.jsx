import './style.css'

export const PetsItemPage = () => {
  return (
    <div className='container'>

    <div className='petsitempage_block'>
        <img className='petsitempage_img' src="https://images.unsplash.com/photo-1561037404-61cd46aa615b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" />
      <div>
        <div className='petsitempage_info'>
          <h3 className='petsitempage_name'>МИСА</h3>
          <p className='petsitempage_male'>Пол питомца: ДЕВОЧКА</p>
          <p className='petsitempage_descrition' >Описание: Миса - очаровательная молодая красотка с легким, игривым нравом. Ей всего 2, 5 года, при этом ведет она себя как воспитанная интеллигентная особа, не вступающая в конфликты и обходящая стороной излишне надоедливых и активных сородичей. Исключительно ласковая собака, любящая всецело завладеть вниманием человека.</p>
        </div>
        
        <div className='petsitempage_contac'>
          <h4 className='petsitempage_volonter'>ВОЛОНТЕР:ВАРВАРА</h4>
          <h4 className='petsitempage_contacts'>ТЕЛЕФОН: +996 555 567 847 </h4>
        </div>
      </div>
       
    </div>
    <div className='petsitempage_kartinki'>
        <img className='one' src="https://images.unsplash.com/photo-1561037404-61cd46aa615b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" />
        <img className='two' src="https://images.unsplash.com/photo-1561037404-61cd46aa615b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" />
        <img className='three' src="https://images.unsplash.com/photo-1561037404-61cd46aa615b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" />
       </div>
    </div>
  )  
}