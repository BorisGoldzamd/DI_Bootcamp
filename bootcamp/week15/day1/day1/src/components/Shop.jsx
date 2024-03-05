import { useState } from 'react'; // Import useState hook
import { Link } from 'react-router-dom';

const Shop = () => {
    const [products] = useState([
        { id: 15, name: 'Iphone 15', price: 1500 },
        { id: 14, name: 'Iphone 14', price: 1400 },
        { id: 13, name: 'Iphone 13', price: 1300 }
    ]);

    return (
        <>
            <h2>Shop</h2>
            {products.map(item => (
                <Link key={item.id} to={`/product/${item.id}`}>{item.name}</Link>
            ))}
            {<Link to='/product/15'>Iphone</Link>}
        </>
    );
};

export default Shop;
