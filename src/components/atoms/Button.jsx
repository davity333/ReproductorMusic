function Button({customkey, props, onClick}) {
    return ( 
        <>
        <button name={props.nameSong} key={customkey} onClick={onClick}></button>
        </>
     );
}

export default Button;