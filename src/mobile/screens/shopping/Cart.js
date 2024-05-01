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
                <ProductCart title={"Product"} text={"text"} price={"12.20"} image={'https://fastly.picsum.photos/id/20/200/200.jpg?hmac=wHmtG3BEC6aOsGZU_Q2wnxVQq34B__t4x4LFw-sptM8'} number={2}></ProductCart>
                <ProductCart title={"Product"} text={"text"} price={"12.20"} image={'https://fastly.picsum.photos/id/20/200/200.jpg?hmac=wHmtG3BEC6aOsGZU_Q2wnxVQq34B__t4x4LFw-sptM8'} number={2}></ProductCart>
                <ProductCart title={"Product"} text={"text"} price={"12.20"} image={'https://fastly.picsum.photos/id/20/200/200.jpg?hmac=wHmtG3BEC6aOsGZU_Q2wnxVQq34B__t4x4LFw-sptM8'} number={2}></ProductCart>

            </Dashboard>
        </View>
    );
};

export default Cart;