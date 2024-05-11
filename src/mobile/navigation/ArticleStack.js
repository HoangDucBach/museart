import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Articles from "../screens/articles/Articles";
import ArticleDetail from "../screens/articles/ArticleDetail";

const ArticleStack = createNativeStackNavigator();
export default function ArticleStackScreen() {
    return (
        <ArticleStack.Navigator screenOptions={{ headerShown: false }}>
            <ArticleStack.Screen
                name="ArticleScreen"
                component={Articles} />
            <ArticleStack.Screen name="ArticleDetail" component={ArticleDetail} />
        </ArticleStack.Navigator>
    );
}