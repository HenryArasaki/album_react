export default function Button(props){
    const {children, ...rest}  = props
    return(
        <button {...rest} className="bg-pink-500 rounded px-4 py-1 text-white">{children}</button>
    )
}