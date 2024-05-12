import { View, ActivityIndicator, FlatList } from "react-native"
import Dashboard from "../../components/header/Dashboard"
import ProductShopping from "../../components/product/ProductShopping"
import { useEffect, useState } from "react";
import { baseUrl } from "../../services/api";
import axios from "axios";
import MyFlatList from "../../components/MyFlatList";

const Shopping = () => {

    const [isLoading, setLoading] = useState(false);
    const [products, setProducts] = useState([]);
    //pagination
    const [page, setPage] = useState(1);
    const [totalPages, setTotalpages] = useState(0);

    const getProducts = async () => {
        try {
            const response = await axios.get(`${baseUrl}/products?page=${page}`);
            setProducts(response.data.data);
            setTotalpages(response.data.pagination.total_pages);
            setLoading(false);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    const handleLoading = () => {
        setLoading(true);
        setTimeout(() => setLoading(false), 1000);
    };

    useEffect(() => {
        getProducts();
    }, []);

    const renderItem = ({ item }) => {
        return (
            <ProductShopping key={item.id}
                id={item.id}
                title={item.title}
                text={"Product"}
                price={item.max_current_price}
                image={item.image_url}>
            </ProductShopping>
        )
    }

    return (
        <View className={'flex-1'}>
            {isLoading ? (
                <ActivityIndicator />
            ) : (
                <Dashboard namePage={"Dashboard"}>
                    <MyFlatList
                        data={products}
                        renderItem={renderItem}
                        isLoading={isLoading}
                        handleLoading={handleLoading}
                        totalPages={totalPages}
                        page={page} />
                </Dashboard>
            )
            }
        </View >
    );
};

export default Shopping;