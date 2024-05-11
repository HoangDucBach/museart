import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Shopping from "../screens/shopping/Shopping";
import ProductDetail from "../screens/shopping/ProductDetail";

const ShoppingStack = createNativeStackNavigator();
export default function ShoppingStackScreen() {
    return (
        <ShoppingStack.Navigator screenOptions={{ headerShown: false }}>
            <ShoppingStack.Screen
                name="ShoppingScreen"
                component={Shopping} />
            <ShoppingStack.Screen name="ProductDetail" component={ProductDetail} />
        </ShoppingStack.Navigator>
    );
}
