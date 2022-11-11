

export default function Page({details,visibility}){
    const {title,description,date,photo} = details

    return(<div className={`${visibility?"block":"hidden"}`}>
        <h3>{title}</h3>
        <p>{description}</p>
        <img src={photo} />
        <span>{date}</span>
</div>)
}