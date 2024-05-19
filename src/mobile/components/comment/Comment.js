import { FlatList, Image, Modal, RefreshControl, StyleSheet, Text, TextInput, TouchableOpacity, View, SafeAreaView } from 'react-native'
import React, { useState, useEffect } from 'react'
import { FontFamily, FontSize, Padding } from '../../GlobalStyles';
import CommentFrame from './CommentFrame';
import { localhost } from '../../services/api';
import axios from 'axios';
import { useTheme } from '@react-navigation/native';

const Comment = ({ modalVisible, }) => {
    const [isLoading, setLoading] = useState(false);
    const [comments, setComments] = useState(null);
    const [openInput, setOpenInput] = useState(false);
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
            <CommentFrame key={item.id} userName={a[item.id % 4]} date={item.updatedAt.slice(0, 10)} text={item.comment} />

        )
    }

    useEffect(() => {
        getComments();
    }, []);

    return (
        <SafeAreaView style={[styles.frameParent, {backgroundColor: colors.surfaceContainerHigh}]}>
            <View style={styles.frameGroupFlexBox}>
                <TouchableOpacity onPress={modalVisible}>
                    <Image
                        style={styles.frameChild}
                        contentFit="cover"
                        source={require("../../assets/frame-67.png")}
                    />
                </TouchableOpacity>
                    <Text style={[styles.commentTypo, {color: colors.onSurface}]}>Comment</Text>
                <TouchableOpacity onPress={() => {
                    setOpenInput(true);
                    console.log("add comment");
                }}>
                    <Image
                        style={styles.frameChild}
                        contentFit="cover"
                        source={require("../../assets/Comment.png")}
                    />
                </TouchableOpacity>
            </View>
            <Modal
                visible={openInput}
                transparent={true}
            >
                <TouchableOpacity onPressOut={() => { setOpenInput(false) }}
                    style={{ justifyContent: "center", alignSelf: "center", alignItems: "center", flex: 1 }}>
                    <View style={{ backgroundColor: "white", }}>
                        <TextInput
                            placeholder="Write your comment here"
                        />
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