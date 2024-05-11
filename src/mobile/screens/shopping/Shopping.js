import { View, ActivityIndicator } from "react-native"
import Dashboard from "../../components/header/Dashboard"
import ProductShopping from "../../components/product/ProductShopping"
import { useEffect, useState } from "react";
import { baseUrl } from "../../services/api";
import axios from "axios";

const Shopping = () => {

    const [isLoading, setLoading] = useState(true);
    const [products, setProducts] = useState([]);
    const [page, setPage] = useState(1);

    const getProducts = async () => {
        try {
            const response = await axios.get(`${baseUrl}/products?page=${page}`);
            setProducts(response.data.data);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    const loadMore = () => {
        setPage(page + 1);
    }

    useEffect(() => {
        getProducts();
    }, []);


    return (
        <View style={{ flex: 1 }}>
            {isLoading ? (
                <ActivityIndicator />
            ) : (
                <Dashboard namePage={"Shopping"}>
                    {products.map((item) =>
                        <ProductShopping key={item.id} id={item.id} title={item.title} text={"Product"} price={item.max_current_price} image={item.image_url}></ProductShopping>
                    )}
                </Dashboard>
            )}
        </View>
    );
};

export default Shopping;