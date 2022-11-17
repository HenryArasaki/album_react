

export default function Page({details,pageNumber,thisPage}){
    const {title,description,date,photo} = details

    return(<div className={`${pageNumber == thisPage ?"block":"hidden"}`}>
        <h3>{title}</h3>
        <p>{description}</p>
        <img src={photo} />
        <span>{date}</span>
</div>)
}