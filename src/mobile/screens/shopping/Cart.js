import * as React from "react";
import { useNavigation } from "@react-navigation/native"
import { View } from "react-native";
import Dashboard from "../../components/header/Dashboard";
import ProductCart from "../../components/product/ProductCart";
import ProductShopping from "../../components/product/ProductShopping";

const Cart = () => {
    const navigation = useNavigation();

    return (
        <View>
            <Dashboard namePage="Cart">
                <ProductCart title={"Product"} text={"text"} price={"12.20"} image={require("../../assets/favicon.png")} number={2}></ProductCart>
                <ProductCart title={"Product"} text={"text"} price={"12.20"} image={require("../../assets/favicon.png")} number={2}></ProductCart>
                <ProductCart title={"Product"} text={"text"} price={"12.20"} image={require("../../assets/favicon.png")} number={2}></ProductCart>
                <ProductShopping title={"Product"} text={"text"} price={12.2} image={require("../../assets/favicon.png")}></ProductShopping>
                <ProductShopping title={"Product"} text={"text"} price={12.2} image={require("../../assets/favicon.png")}></ProductShopping>
                <ProductShopping title={"Product"} text={"text"} price={12.20} image={require("../../assets/favicon.png")}></ProductShopping>

            </Dashboard>
        </View>
    );
};

export default Cart;