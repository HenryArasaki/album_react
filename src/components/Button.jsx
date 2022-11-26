export default function Button(props){
    const {children,  className, ...rest}  = props
    const classes = "bg-pink-500 hover:bg-pink-600 rounded px-4 py-1 text-white " + className

    return(
        <button  {...rest} className={classes}>{children}</button>
    )
}