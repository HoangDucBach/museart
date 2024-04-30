import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Border, Color, FontFamily, FontSize, Padding } from '../../GlobalStyles';
import CommentFrame from './CommentFrame';

const Comment = ({ modalVisible }) => {
    return (
        <View style={styles.frameParent}>
            <View style={[styles.frameGroup, styles.frameGroupFlexBox]}>
                <TouchableOpacity onPress={modalVisible}>
                    <Image
                        style={styles.frameChild}
                        contentFit="cover"
                        source={require("../../assets/frame-67.png")}
                    />
                </TouchableOpacity>
                <Text style={[styles.comment, styles.commentTypo]}>Comment</Text>
                <TouchableOpacity onPress={() => { console.log("add comment"); }}>
                    <Image
                        style={styles.frameChild}
                        contentFit="cover"
                        source={require("../../assets/Comment.png")}
                    />
                </TouchableOpacity>
            </View>
            <ScrollView>
                <View style={[styles.frameContainer, styles.frameContainerSpaceBlock]}>
                    <View style={styles.frameGroupFlexBox}>
                        <Text style={[styles.username, styles.usernameTypo]}>username</Text>
                        <Text style={[styles.ddmmyyyy, styles.commentTypo]}>dd/mm/yyyy</Text>
                    </View>
                    <Text
                        style={[styles.loremIpsumIsSimply, styles.usernameTypo]}
                    >{`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived `}</Text>
                </View>
                <View style={[styles.frameContainer, styles.frameContainerSpaceBlock]}>
                    <View style={styles.frameGroupFlexBox}>
                        <Text style={[styles.username, styles.usernameTypo]}>username</Text>
                        <Text style={[styles.ddmmyyyy, styles.commentTypo]}>dd/mm/yyyy</Text>
                    </View>
                    <Text
                        style={[styles.loremIpsumIsSimply, styles.usernameTypo]}
                    >{`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived `}</Text>
                </View>
                <View style={[styles.frameContainer, styles.frameContainerSpaceBlock]}>
                    <View style={styles.frameGroupFlexBox}>
                        <Text style={[styles.username, styles.usernameTypo]}>username</Text>
                        <Text style={[styles.ddmmyyyy, styles.commentTypo]}>dd/mm/yyyy</Text>
                    </View>
                    <Text
                        style={[styles.loremIpsumIsSimply, styles.usernameTypo]}
                    >{`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived `}</Text>
                </View>
                <View style={[styles.frameContainer, styles.frameContainerSpaceBlock]}>
                    <View style={styles.frameGroupFlexBox}>
                        <Text style={[styles.username, styles.usernameTypo]}>username</Text>
                        <Text style={[styles.ddmmyyyy, styles.commentTypo]}>dd/mm/yyyy</Text>
                    </View>
                    <Text
                        style={[styles.loremIpsumIsSimply, styles.usernameTypo]}
                    >{`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived `}</Text>
                </View>
                <View style={[styles.frameContainer, styles.frameContainerSpaceBlock]}>
                    <View style={styles.frameGroupFlexBox}>
                        <Text style={[styles.username, styles.usernameTypo]}>username</Text>
                        <Text style={[styles.ddmmyyyy, styles.commentTypo]}>dd/mm/yyyy</Text>
                    </View>
                    <Text
                        style={[styles.loremIpsumIsSimply, styles.usernameTypo]}
                    >{`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived `}</Text>
                </View>
                <CommentFrame userName={''} date={''} text={''} />
            </ScrollView>
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
    frameContainerSpaceBlock: {
        marginTop: 10,
        alignSelf: "stretch",
    },
    usernameTypo: {
        fontSize: FontSize.labelLargeBold_size,
        textAlign: "left",
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
    frameGroup: {
        alignItems: "center",
    },
    username: {
        color: Color.surfaceOnSurfaceVarient,
        fontFamily: FontFamily.labelMediumBold,
        fontWeight: "700",
        fontSize: FontSize.labelLargeBold_size,
    },
    ddmmyyyy: {
        fontSize: FontSize.labelMediumBold_size,
        color: Color.primaryPrimary,
    },
    loremIpsumIsSimply: {
        fontFamily: FontFamily.typographyLabelLarge,
        marginTop: 10,
        alignSelf: "stretch",
        color: Color.surfaceOnSurface,
    },
    frameContainer: {
        borderRadius: Border.br_3xs,
        backgroundColor: Color.surfaceSurfaceContainerHighest,
        padding: Padding.p_3xs,
        overflow: "hidden",
    },
    frameParent: {
        shadowColor: "#d9cfbe",
        shadowOffset: {
            width: 2,
            height: 2,
        },
        shadowRadius: 20,
        elevation: 20,
        shadowOpacity: 1,
        borderTopLeftRadius: Border.br_xl,
        borderTopRightRadius: Border.br_xl,
        backgroundColor: Color.surfaceSurfaceContainerHigh,
        padding: Padding.p_xl,
        overflow: "hidden",
    },
});

export default Comment;