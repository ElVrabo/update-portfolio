import "./cardProjects.css"
export default function CardProjects({title,description,image}){
  return (
    <>
    <div className="body-card" >
                <img src={image} />
                <div className="text-card" >
                    <h3>{title}</h3>
                    <p>{description}</p>
                    <hr/>
                </div>
            </div>
    </>
  )
}