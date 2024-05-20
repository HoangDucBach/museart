import { FlatList, Modal, RefreshControl, StyleSheet, Text, TextInput, TouchableOpacity, View, SafeAreaView } from 'react-native'
import React, { useState, useEffect, useContext } from 'react'
import { FontFamily, FontSize } from '../../GlobalStyles';
import CommentFrame from './CommentFrame';
import { localhost } from '../../services/api';
import axios from 'axios';
import { useTheme } from '@react-navigation/native';
import { Path, Svg } from 'react-native-svg';
import { AuthContext } from '../../context/authContext';

const Comment = ({ modalVisible, }) => {
    const [isLoading, setLoading] = useState(false);
    const [comments, setComments] = useState([]);
    const [openInput, setOpenInput] = useState(false);
    const [input, setInput] = useState(null);
    const { userInfo } = useContext(AuthContext);
    const { colors } = useTheme();

    const getComments = async () => {
        setLoading(true);
        try {
            const response = await axios.get(`${localhost}/users/comments`);
            setComments(response.data);
            setLoading(false);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    const createComments = async () => {
        setLoading(true);
        if (userInfo != null)
            try {
                const response = await axios.post(`${localhost}/users/comments`,
                    { userId: userInfo.user.id, comment: input }, { headers: { 'Authorization': `${userInfo.token}` } });
                comments.push(response.data);
                setOpenInput(false);
                setLoading(false);
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
    };

    const handleLoading = () => {
        setLoading(true);
        setTimeout(() => setLoading(false), 1000);
    };
    const a = [
        "Hoàng Đức Bách",
        "Trần Đức Lương",
        "Đặng Thị Thanh Hiền",
        "Phạm Minh Tâm",
    ];
    const renderItem = ({ item }) => {
        return (
            <CommentFrame key={item.id} id={item.userId}
                date={item.updatedAt.slice(0, 10)} text={item.comment} />

        )
    }

    useEffect(() => {
        getComments();
    }, []);

    return (
        <SafeAreaView style={[styles.frameParent, {backgroundColor: colors.surfaceContainerHigh}]}>
            <View style={styles.frameGroupFlexBox}>
                <TouchableOpacity onPress={modalVisible}>
                    <Svg width={25} height={25} viewBox="0 0 25 25" fill="none">
                        <Path
                            d="M2.9887 5.96607C2.44266 5.42003 2.44265 4.53473 2.98869 3.98869C3.53473 3.44265 4.42003 3.44265 4.96607 3.98868L21.0113 20.0338C21.5573 20.5799 21.5573 21.4652 21.0113 22.0112C20.4653 22.5572 19.58 22.5572 19.0339 22.0112L2.9887 5.96607Z"
                            fill={colors.onSurface}
                        />
                        <Path
                            d="M2.98872 22.0113C2.44267 21.4653 2.44266 20.58 2.98869 20.0339L19.0339 3.98874C19.5799 3.44268 20.4653 3.44269 21.0113 3.98877C21.5574 4.53482 21.5573 5.42013 21.0113 5.96617L4.96602 22.0113C4.42001 22.5573 3.53475 22.5573 2.98872 22.0113Z"
                            fill={colors.onSurface}
                        />
                    </Svg>
                </TouchableOpacity>
                <Text style={[styles.commentTypo, { color: colors.onSurface }]}>Comment</Text>
                <TouchableOpacity onPress={() => {
                    setOpenInput(true);
                    console.log("add comment");
                }}>
                    <Svg width={25} height={25} viewBox="0 0 25 25" fill="none">
                        <Path
                            d="M18.75 2.08337H6.25C5.4212 2.08337 4.62634 2.41261 4.04029 2.99867C3.45424 3.58472 3.125 4.37957 3.125 5.20837V16.6667C3.125 17.4955 3.45424 18.2904 4.04029 18.8764C4.62634 19.4625 5.4212 19.7917 6.25 19.7917H8.94792L11.7604 22.6146C11.8577 22.7112 11.9732 22.7875 12.1001 22.8394C12.227 22.8912 12.3629 22.9175 12.5 22.9167C12.7483 22.9167 12.9884 22.8281 13.1771 22.6667L16.5312 19.7917H18.75C19.5788 19.7917 20.3737 19.4625 20.9597 18.8764C21.5458 18.2904 21.875 17.4955 21.875 16.6667V5.20837C21.875 4.37957 21.5458 3.58472 20.9597 2.99867C20.3737 2.41261 19.5788 2.08337 18.75 2.08337ZM19.7917 16.6667C19.7917 16.943 19.6819 17.2079 19.4866 17.4033C19.2912 17.5986 19.0263 17.7084 18.75 17.7084H16.1458C15.8976 17.7084 15.6574 17.797 15.4688 17.9584L12.5521 20.4584L10.1146 18.0105C10.0172 17.9139 9.90182 17.8375 9.7749 17.7857C9.64799 17.7339 9.51209 17.7076 9.375 17.7084H6.25C5.97373 17.7084 5.70878 17.5986 5.51343 17.4033C5.31808 17.2079 5.20833 16.943 5.20833 16.6667V5.20837C5.20833 4.93211 5.31808 4.66716 5.51343 4.4718C5.70878 4.27645 5.97373 4.16671 6.25 4.16671H18.75C19.0263 4.16671 19.2912 4.27645 19.4866 4.4718C19.6819 4.66716 19.7917 4.93211 19.7917 5.20837V16.6667Z"
                            fill={colors.onSurface}
                        />
                    </Svg>
                </TouchableOpacity>
            </View>
            <Modal
                visible={openInput}
                transparent={true}
            >
                <TouchableOpacity onPressOut={() => { setOpenInput(false) }}
                    style={{ justifyContent: "center", alignSelf: "center", alignItems: "center", flex: 1 }}>
                    <View style={{ backgroundColor: colors.surface, padding: 10, borderRadius: 15, flexDirection: "row", alignSelf: "stretch", alignItems: "center", justifyContent: "center", gap: 5 }}>
                        <View style={{ width: 25, height: 25 }} />
                        <TextInput placeholderTextColor={colors.onSurface}
                            style={{ height: 40, borderColor: 'gray', color: colors.onSurfaceVarient, borderWidth: 1, padding: 5 }}
                            placeholder="Write your comment here"
                            onChangeText={(text) => { setInput(text) }}
                        />
                        <TouchableOpacity style={{ color: colors.onSurfaceVarient }} onPress={() => { createComments() }}>
                            <Svg width={25} height={25} viewBox="0 -0.5 25 25" fill={colors.primary}>
                                <Path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M18.455 9.8834L7.063 4.1434C6.76535 3.96928 6.40109 3.95274 6.08888 4.09916C5.77667 4.24558 5.55647 4.53621 5.5 4.8764C5.5039 4.98942 5.53114 5.10041 5.58 5.2024L7.749 10.4424C7.85786 10.7903 7.91711 11.1519 7.925 11.5164C7.91714 11.8809 7.85789 12.2425 7.749 12.5904L5.58 17.8304C5.53114 17.9324 5.5039 18.0434 5.5 18.1564C5.55687 18.4961 5.77703 18.7862 6.0889 18.9323C6.40078 19.0785 6.76456 19.062 7.062 18.8884L18.455 13.1484C19.0903 12.8533 19.4967 12.2164 19.4967 11.5159C19.4967 10.8154 19.0903 10.1785 18.455 9.8834V9.8834Z"
                                    stroke={"black"}
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </Svg>
                        </TouchableOpacity>
                    </View>
                </TouchableOpacity>
            </Modal>
            <FlatList
                data={comments}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                refreshControl={
                    <RefreshControl refreshing={isLoading} onRefresh={handleLoading} />
                }
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    frameGroupFlexBox: {
        margin: 10,
        justifyContent: "space-between",
        flexDirection: "row",
        alignSelf: "stretch",
        alignItems: "center",
    },
    commentTypo: {
        fontFamily: FontFamily.labelMediumBold,
        fontSize: FontSize.bodyXlargeBold_size,
        fontWeight: "700",
        textAlign: "left",
    },
    frameChild: {
        width: 25,
        height: 25,
        overflow: "hidden",
    },
    frameParent: {
        padding: 10,
        height: "100%",
        width: "100%",
        alignSelf: "center",
        justifyContent: "center",
    },
});

export default Comment;