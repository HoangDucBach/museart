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

    const getArticles = async () => {
        try {
            const response = await axios.get(`${baseUrl}/api/articles`);
            console.log(response.data);
            setArticles(response.data);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getArticles();
    }, []);

    return (
        <View style={{flex: 1}}>
            {isLoading ? (
                <ActivityIndicator />
            ) : (
                <Dashboard namePage={"Articles"}>
                    {articles.map((item) =>
                        <ArticleComponent key={item.detail.id} id={item.detail.id} article={item.detail.title} date={item.detail.timestamp} text={item.detail.copy}></ArticleComponent>
                    )}
                </Dashboard>
            )
            }
        </View>
    );
};

export default Articles;