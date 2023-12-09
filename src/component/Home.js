function Home(props) {

    console.log("Props : ",props )
    return (
        <div>

            {/* <div className="add-to-cart">
                <img src="https://png.pngtree.com/png-vector/20190501/ourmid/pngtree-add-to-cart--icon-design-png-image_1012399.jpg"/>
            </div> */}
            <h1>Home Component</h1>
            <div className="cart-wrapper">
                <div className="img-wrapper item">
                    <img src="https://rukminim2.flixcart.com/image/128/128/ktketu80/mobile/u/n/k/iphone-13-mini-mlk23hn-a-apple-original-imag6vp6fjthdq3h.jpeg?q=70" />
                </div>
                <div className="text-wrapper item">
                    <span>I-Phone</span><br/>
                    <span>Price:$1000.00</span>
                </div>
                <div className="btn-wrapper item">
                    <button
                        onClick={() => props.addToCartHandle({ price: 1000, name: 'Iphone' })}
                    >Add to Cart</button>
                    <button className="remove-cart-btn"
                        onClick={() => props.removeToCartHandle()}
                    >Remove to Cart</button>

                </div>

            </div>
        </div>
    )
}
export default Home;