function Header(props){

    console.log("Header component : " ,props.data)
    return(
        <div>     
            <div className="add-to-cart">
                <span className="cart-count">{props.data.cardDaata.length}</span>
                <img src="https://png.pngtree.com/png-vector/20190501/ourmid/pngtree-add-to-cart--icon-design-png-image_1012399.jpg"/>
            </div>
        </div>
    )
}
export default Header;