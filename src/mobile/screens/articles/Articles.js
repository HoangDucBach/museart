import { View } from "react-native";
import Dashboard from "../../components/header/Dashboard";
import ArticleComponent from "../../components/ArticleComponent";
import ProductShopping from "../../components/product/ProductShopping";
import ProductCash from "../../components/product/ProductCart";
import NotificationSuccess from "../../components/notification/NotificationSuccess";
import NotificationFailed from "../../components/notification/NotificationFailed";

const Articles = () => {

    return (
        <View>
            <Dashboard namePage={"Articles"}>
                <ArticleComponent article={"Luong"} date={"25/01/2024"} text={"Hidden Materials in John Singer Sargent's Watercolors\",\"copy\":\" While John Singer Sargent is..."}></ArticleComponent>
                <ArticleComponent article={"Luong"} date={"25/01/2024"} text={"Hidden Materials in John Singer Sargent's Watercolors\",\"copy\":\" While John Singer Sargent is..."}></ArticleComponent>
                <ArticleComponent article={"Luong"} date={"25/01/2024"} text={"Hidden Materials in John Singer Sargent's Watercolors\",\"copy\":\" While John Singer Sargent is..."}></ArticleComponent>
                <ArticleComponent article={"Luong"} date={"25/01/2024"} text={"Hidden Materials in John Singer Sargent's Watercolors\",\"copy\":\" While John Singer Sargent is..."}></ArticleComponent>
                <ArticleComponent article={"Luong"} date={"25/01/2024"} text={"Hidden Materials in John Singer Sargent's Watercolors\",\"copy\":\" While John Singer Sargent is..."}></ArticleComponent>
            </Dashboard>
        </View>
    );
};

export default Articles;