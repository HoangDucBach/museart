import { Text, View, ActivityIndicator, FlatList } from "react-native";
import Dashboard from "../../components/header/Dashboard";
import ArticleComponent from "../../components/ArticleComponent";
import ProductShopping from "../../components/product/ProductShopping";
import ProductCash from "../../components/product/ProductCart";
import NotificationSuccess from "../../components/notification/NotificationSuccess";
import NotificationFailed from "../../components/notification/NotificationFailed";
import { useEffect, useState } from "react";
import { baseUrl } from "../../services/api";
import axios from "axios";
import MyFlatList from "../../components/MyFlatList";

const Articles = () => {
    const [isLoading, setLoading] = useState(false);
    const [articles, setArticles] = useState([]);
    //pagination
    const [page, setPage] = useState(1);
    const [totalPages, setTotalpages] = useState(0);

    const getArticles = async () => {
        setLoading(true);
        try {
            const response = await axios.get(`${baseUrl}/articles?page=${page}`);
            setArticles(response.data.data);
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
        getArticles();
    }, [page]);

    const renderItem = ({ item }) => {
        return (
            <ArticleComponent key={item.id}
                id={item.id}
                article={item.title}
                date={item.timestamp}
                text={item.copy}>
            </ArticleComponent>
        )
    }

    return (
        <View className={'flex-1'}>
            {isLoading ? (
                <ActivityIndicator />
            ) : (
                <Dashboard namePage={"Dashboard"}>
                    <MyFlatList
                        data={articles}
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

export default Articles;