import { Text, View, ActivityIndicator, FlatList, StyleSheet, TouchableOpacity, } from "react-native";
import Dashboard from "../../components/header/Dashboard";
import ArticleComponent from "../../components/ArticleComponent";
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
                    <MyFlatList data={articles} renderItem={renderItem}
                        isLoading={isLoading} handleLoading={handleLoading}
                        renderPaginationButtons={renderPaginationButtons} />
                </Dashboard>
            )
            }
        </View >
    );
};

export default Articles;

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