import { View, ActivityIndicator, FlatList, StyleSheet, TouchableOpacity, Text } from "react-native"
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
        setLoading(true);
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

    const loadMore = (p) => setPage(p);

    const renderPaginationButtons = () => {
        const maxButtonsToShow = 5;
        let startPage = Math.max(1, page - Math.floor(maxButtonsToShow / 2));
        let endPage = Math.min(totalPages, startPage + maxButtonsToShow - 1);

        if (endPage - startPage + 1 < maxButtonsToShow) {
            startPage = Math.max(1, endPage - maxButtonsToShow + 1);
        }

        const buttons = [];

        for (let i = startPage; i <= endPage; i++) {
            buttons.push(
                <TouchableOpacity
                    key={i}
                    onPress={() => loadMore(i)}
                    style={[
                        styles.paginationButton,
                        i === page ? styles.activeButton : null,
                    ]}>
                    <Text style={{ color: 'white' }}>{i}</Text>
                </TouchableOpacity>,
            );
        }

        return buttons;
    };

    useEffect(() => {
        getProducts();
    }, [page]);

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
                    <MyFlatList data={products} renderItem={renderItem}
                        isLoading={isLoading} handleLoading={handleLoading}
                        renderPaginationButtons={renderPaginationButtons} />
                </Dashboard>
            )
            }
        </View >
    );
};

export default Shopping;

const styles = StyleSheet.create({
    paginationButton: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 40,
        height: 40,
        borderRadius: 20,
        marginHorizontal: 4,
        backgroundColor: 'gray',
    },
    activeButton: {
        backgroundColor: '#22c55d',
        width: 50,
        height: 50,
        borderRadius: 25,
    },
});