import * as React from "react";
import { useNavigation } from "@react-navigation/native"
import { View } from "react-native";
import Dashboard from "../components/Dashboard";
import ProductCart from "../components/ProductCart";
import ProductShopping from "../components/ProductCart";

const Cart = () => {
    const navigation = useNavigation();

    return (
        <View>
            <Dashboard namePage="Cart">
                <ProductCart title={"Product"} text={"text"} price={"12.20"} image={require("../assets/favicon.png")}></ProductCart>
                <ProductCart title={"Product"} text={"text"} price={"12.20"} image={require("../assets/favicon.png")}></ProductCart>
                <ProductCart title={"Product"} text={"text"} price={"12.20"} image={require("../assets/favicon.png")}></ProductCart>
                <ProductShopping title={"Product"} text={"text"} price={12.2} number={2} image={require("../assets/favicon.png")}></ProductShopping>
                <ProductShopping title={"Product"} text={"text"} price={12.2} number={2} image={require("../assets/favicon.png")}></ProductShopping>

            </Dashboard>
        </View>
    );
};

export default Cart;