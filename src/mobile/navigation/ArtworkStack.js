import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Artworks from "../screens/artworks/Artworks";
import ArtworkDetail from "../screens/artworks/ArtworkDetail";

const ArtworkStack = createNativeStackNavigator();
export default function ArtworkStackScreen() {
    return (
        <ArtworkStack.Navigator screenOptions={{ headerShown: false }}>
            <ArtworkStack.Screen
                name="ArtworkScreen"
                component={Artworks} />
            <ArtworkStack.Screen name="ArtworkDetail" component={ArtworkDetail} />
        </ArtworkStack.Navigator>
    );
}