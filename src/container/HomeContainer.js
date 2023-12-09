import Home from "../component/Home";
import { connect } from "react-redux";
import { addtoCart , removetoCart } from "../service/action/action";

const mapStateToProps=state=>({
    data:state.cardItems
})
const mapDispatchToProps=dispatch=>({
    addToCartHandle:data=>dispatch(addtoCart(data)),
    removeToCartHandle:data=>dispatch(removetoCart(data))
})

export default connect(mapStateToProps,mapDispatchToProps)(Home)