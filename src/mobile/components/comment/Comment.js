import { FlatList, Image, Modal, RefreshControl, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState, useEffect } from 'react'
import { Border, Color, FontFamily, FontSize, Padding } from '../../GlobalStyles';
import CommentFrame from './CommentFrame';
import { localhost } from '../../services/api';
import axios from 'axios';

const Comment = ({ modalVisible, }) => {
    const [isLoading, setLoading] = useState(false);
    const [comments, setComments] = useState(null);
    const [openInput, setOpenInput] = useState(false);

    const getComments = async () => {
        setLoading(true);
        try {
            const response = await axios.get(`${localhost}/user/comments`);
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

    const renderItem = ({ item }) => {
        return (
            <CommentFrame key={item.id} userName={'username'} date={item.updatedAt.slice(0, 10)} text={item.comment} />

        )
    }

    useEffect(() => {
        getComments();
    }, []);

    return (
        <View style={styles.frameParent}>
            <View style={styles.frameGroupFlexBox}>
                <TouchableOpacity onPress={modalVisible}>
                    <Image
                        style={styles.frameChild}
                        contentFit="cover"
                        source={require("../../assets/frame-67.png")}
                    />
                </TouchableOpacity>
                <Text style={[styles.comment, styles.commentTypo]}>Comment</Text>
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
        </View>
    );
};

const styles = StyleSheet.create({
    frameGroupFlexBox: {
        justifyContent: "space-between",
        flexDirection: "row",
        alignSelf: "stretch",
    },
    commentTypo: {
        textAlign: "left",
        fontFamily: FontFamily.labelMediumBold,
        fontWeight: "700",
    },
    frameChild: {
        width: 25,
        height: 25,
        overflow: "hidden",
    },
    comment: {
        fontSize: FontSize.bodyXlargeBold_size,
        color: Color.surfaceOnSurface,
    },
    frameParent: {
        backgroundColor: Color.surfaceSurfaceContainerHigh,
        padding: Padding.p_xl,
        height: "100%",
        width: "100%",
        alignSelf: "center",
        justifyContent: "center",
    },
});

export default Comment;