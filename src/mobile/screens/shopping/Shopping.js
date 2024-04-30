import { View, ActivityIndicator } from "react-native"
import Dashboard from "../../components/header/Dashboard"
import ProductShopping from "../../components/product/ProductShopping"
import { useEffect, useState } from "react";
import { baseUrl } from "../../services/api";
import axios from "axios";

const Shopping = () => {

    const [isLoading, setLoading] = useState(true);
    const [products, setProducts] = useState([]);

    const getProducts = async () => {
        try {
            const response = await axios.get(`${baseUrl}/api/products`);
            setProducts(response.data);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getProducts();
    }, []);


    return (
<<<<<<< HEAD

        <View style={{flex: 1}}>
=======
        <View>
>>>>>>> fa7c1d8d70080112f3ca4730aeab1f9320981926
            {isLoading ? (
                <ActivityIndicator />
            ) : (
                <Dashboard namePage={"Shopping"}>
                    {products.map((item) =>
                        <ProductShopping key={item.detail.id} id={item.detail.id} title={item.detail.title} text={"Product"} price={item.detail.max_current_price} image={item.detail.image_url}></ProductShopping>
                    )}
                </Dashboard>
            )}
        </View>
    );
};

export default Shopping;