export default function Button(props){
    const {children}  = props
    return(
        <button className="bg-pink-500 rounded px-4 py-1 text-white">{children}</button>
    )
}