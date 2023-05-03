import "./style.css"
export const AboutPage = () => {
    return (
        <div className="about_title">
         <div className="about_container"> 
            <h3 className="about_title_text" >О НАС</h3>
            <p className="about_t">МЫ - ВОЛОНТЕРЫ  МУНИЦИПАЛЬНОГО ПРИЮТА ДЛЯ БЕЗДОМНЫХ ЖИВОТНЫХ </p>
           
            <img className="about_img" src="https://images.unsplash.com/photo-1507682520764-93440a60e9b5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=725&q=80" alt="" />
            <p className="about_text">Сердце в лапках - это муниципальный приют для бездомных собак и кошек. В нем живет почти 2500 собак и 150 кошек. Большие и маленькие, пушистые и гладкие, веселые и задумчивые - и на всех одна большая мечта - встретить своего Человека и найти Дом.</p>
         </div>
        </div>
    )  
}