import { FlatList, RefreshControl, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const MyFlatList = ({ data, renderItem, isLoading,
    handleLoading, renderPaginationButtons }) => {

    const handleEmpty = () => {
        return <Text> No Institution!</Text>;
    };

    return (
        <>
            <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                ListEmptyComponent={handleEmpty}
                refreshControl={
                    <RefreshControl refreshing={isLoading} onRefresh={handleLoading} />
                }
            />
            <View style={styles.paginationContainer}>
                {renderPaginationButtons()}
            </View>
        </>
    );
}

export default MyFlatList;

const styles = StyleSheet.create({
    paginationContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 8,
        backgroundColor: 'transparent',
    },
});
