import React from "react";
function List(){
    const products=[
        
        {
            name:"FRONTEND  LANGUAGES",
            capital:"HTML,CSS,JAVASCRIPT,REACT,JQUERY,TYPESCRIPT"
        },
        {
            name:"BACKEND LANGUAGES",
            capital: "PHP,PYTHON,JAVA,RUST,RUBY,C#"
        }
    ];

    return(
       <div>
           <h1 className="heading">WEB DEVELOPMENT</h1>
          
           <h5 className="product-class" >
              {
                   products.map((product,index) =>(
                    <div key={index}>
                        <h1>{product.name}</h1>
                        <p>{product.capital}</p>
                    </div>
                ))
              }
           </h5>
       </div>
    )
}



export default List;