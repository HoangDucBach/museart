import { View } from "react-native"
import Dashboard from "../../components/header/Dashboard"
import ProductShopping from "../../components/product/ProductShopping"

const Shopping = () => {

    return (
        <View>
            <Dashboard namePage={"Shopping"}>
                <ProductShopping title={"Product"} text={"text"} price={12.20} image={require("../../assets/favicon.png")}></ProductShopping>
                <ProductShopping title={"Product"} text={"text"} price={12.20} image={require("../../assets/favicon.png")}></ProductShopping>
                <ProductShopping title={"Product"} text={"text"} price={12.20} image={require("../../assets/favicon.png")}></ProductShopping>
                <ProductShopping title={"Product"} text={"text"} price={12.20} image={require("../../assets/favicon.png")}></ProductShopping>
                <ProductShopping title={"Product"} text={"text"} price={12.20} image={require("../../assets/favicon.png")}></ProductShopping>
            </Dashboard>
        </View>
    );
};

export default Shopping;