import { useParams, Link, useNavigate } from "react-router-dom";

const Product = (props) =>{
    const params = useParams ();
    const navigate = useNavigate();

    const goBack = () =>{
        navigate('/about')
    }
    return(
        <>
            <h2>Iphone {params.productId}</h2>
            <Link to='/shop'>Go back to the shop</Link>
            <button onClick={() => goBack()}>About us</button>
        </>
    )
};

export default Product