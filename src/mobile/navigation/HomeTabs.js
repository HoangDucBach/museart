import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import NavbarBottom from "../components/footer/NavbarBottom";
import ArtworkStackScreen from "./ArtworkStack";
import ExhibitionStackScreen from "./ExhibitionStack";
import ArticleStackScreen from "./ArticleStack";
import ShoppingStackScreen from "./ShoppingStack";

const Tab = createBottomTabNavigator();
export default function HomeTabs() {
    return (
        <Tab.Navigator tabBar={props => <NavbarBottom  {...props} />} screenOptions={{ headerShown: false }}>
            <Tab.Screen
                name="Artworks"
                component={ArtworkStackScreen}
            />
            <Tab.Screen
                name="Exhibitions"
                component={ExhibitionStackScreen}
            />
            <Tab.Screen
                name="Articles"
                component={ArticleStackScreen}
            />
            <Tab.Screen
                name="Shopping"
                component={ShoppingStackScreen}
            />
        </Tab.Navigator>
    );
}