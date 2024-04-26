import { View } from "react-native";
import Dashboard from "../components/Dashboard";
import ArticleComponent from "../components/ArticleComponent";
import ProductShopping from "../components/ProductShopping";
import ProductCash from "../components/ProductCart";
import NotificationSuccess from "../components/NotificationSuccess";
import NotificationFailed from "../components/NotificationFailed";

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