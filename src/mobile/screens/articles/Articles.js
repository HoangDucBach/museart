import { Text, View, ActivityIndicator } from "react-native";
import Dashboard from "../../components/header/Dashboard";
import ArticleComponent from "../../components/ArticleComponent";
import ProductShopping from "../../components/product/ProductShopping";
import ProductCash from "../../components/product/ProductCart";
import NotificationSuccess from "../../components/notification/NotificationSuccess";
import NotificationFailed from "../../components/notification/NotificationFailed";
import { useEffect, useState } from "react";
import { baseUrl } from "../../services/api";
import axios from "axios";

const Articles = () => {

    const [isLoading, setLoading] = useState(true);
    const [articles, setArticles] = useState([]);
    const [page, setPage] = useState(1);

    const getArticles = async () => {
        try {
            const response = await axios.get(`${baseUrl}/articles?page=${page}`);
            setArticles(response.data.data);
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
        getArticles();
    }, [page]);

    return (
        <View className={'flex-1 pb-60'}>
            {isLoading ? (
                <ActivityIndicator />
            ) : (
                <Dashboard namePage={"Articles"}>
                    {articles.map((item) =>
                        <ArticleComponent key={item.id} id={item.id} article={item.title} date={item.timestamp} text={item.copy}></ArticleComponent>
                    )}
                </Dashboard>
            )
            }
        </View>
    );
};

export default Articles;