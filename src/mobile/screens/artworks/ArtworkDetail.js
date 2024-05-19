import { ActivityIndicator, ScrollView, StyleSheet, Text, View, Dimensions } from 'react-native';
import React, { useEffect, useState } from 'react';
import { Color, FontFamily, FontSize, Padding } from '../../GlobalStyles';
import { useRoute, useTheme } from '@react-navigation/native';
import axios from 'axios';
import { baseUrl } from '../../services/api';
import Picture from '../../components/detail/picure/Picture';
import AboutTitle from '../../components/detail/content/AboutTitle';
import AboutArtist from '../../components/detail/content/AboutArtist';
import FrameButton from '../../components/detail/content/FrameButton';
import Video from '../../components/detail/content/Video';
import Sound from '../../components/detail/content/Sound';
import NavbarTop from '../../components/header/NavbarTop';
import HTMLRender from "react-native-render-html";

const ArtworkDetail = () => {
    const route = useRoute();
    const { ID } = route.params;

    const { colors } = useTheme();
    const [artwork, setArtwork] = useState([]);
    const [isLoading, setLoading] = useState(true);

    const getArtwork = async () => {
        try {
            console.log(`${baseUrl}/api/v1/artworks/${ID}`);
            const response = await axios.get(`${baseUrl}/artworks/${ID}`);
            setArtwork(response.data.data);
            console.log(response.data.data.description);
        } catch (error) {
            //console.log(artwork);
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getArtwork();
    }, []);

    return (
        <View style={[styles.artworkContainer, {backgroundColor: colors.surfaceContainer}]}>
            <NavbarTop />
            {isLoading ? (
                <ActivityIndicator />
            ) : (
                <ScrollView style={styles.body}>
                    <Picture altText={artwork?.thumbnail.alt_text} imagePath={`https://www.artic.edu/iiif/2/${artwork?.image_id}/full/843,/0/default.jpg`} commentAmount={artwork.number_of_comments} likeAmount={artwork.number_of_likes} date={artwork.timestamp} />
                    <AboutTitle title={artwork?.title} tagRoute={artwork.artwork_type_title} tagDetail={artwork.department_title} isPrice={false} />
                    <AboutArtist text={artwork.artist_title} />
                    <View>
                        <FrameButton field="Title" value={artwork?.artwork_type_title} />
                        <FrameButton field="Date" value={`${artwork?.date_start}-${artwork?.date_end}`} />
                        <FrameButton field="Date Display" value={artwork?.date_display} />
                        <FrameButton field="Artist Display" value={artwork?.artist_display} />
                        <FrameButton field="Place of Origin" value={artwork?.place_of_origin} />
                        <FrameButton field="Fiscal Year" value={artwork?.fiscal_year} />
                        <FrameButton
                            field="Dimensions"
                            value={artwork.dimensions}
                            propColor="#231919"
                        />
                        <FrameButton
                            field="Credit Line"
                            value={artwork.credit_line}
                            propColor="#231919"
                        />
                        <FrameButton
                            field="Inscriptions"
                            value={artwork.inscriptions}
                            propColor="#231919"
                        />
                        <FrameButton
                            field="Classification"
                            value={artwork.classification_titles.map((item, i, arr) => { return i != arr.length - 1 ? `${item}` + '-' : `${item}` })}
                            propColor="#231919"
                        />
                    </View>
                    {/* <Button /> */}
                    <View style={styles.descriptioncontainerFlexBox}>
                        <Text style={[styles.description, styles.descriptionFlexBox, {color: colors.onSurface}]}>
                            Description
                        </Text>
                        <Text
                            style={[styles.loremIpsumIsSimply, styles.descriptionFlexBox, {color: colors.onSurface}]}
                        >
                            Description:
                        </Text>
                        <HTMLRender source={{ html: artwork.description }}
                                    baseStyle={{color: colors.onSurface,
                                                fontFamily: FontFamily.typographyLabelLarge,
                                                fontSize: FontSize.labelLargeBold_size,
                                                textAlign: "justify",
                                                alignSelf: "stretch"}}
                                    contentWidth={Dimensions.get("window").width} />
                        <Text
                            style={[styles.loremIpsumIsSimply, styles.descriptionFlexBox, {color: colors.onSurface}]}
                        >
                            Provenance: {artwork.provenance_text}
                        </Text>
                        <Text
                            style={[styles.loremIpsumIsSimply, styles.descriptionFlexBox, {color: colors.onSurface}]}
                        >
                            Medium: {artwork.medium_display}
                        </Text>
                        <Text
                            style={[styles.loremIpsumIsSimply, styles.descriptionFlexBox, {color: colors.onSurface}]}
                        >
                            Publication History: {artwork.publication_history}
                        </Text>
                    </View>
                    <Video title={artwork.title} />
                    <Sound title={artwork.title} />
                    <View style={{paddingBottom: 70}} />
                </ScrollView>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    descriptioncontainerFlexBox: {
        justifyContent: "center",
        marginTop: 15,
        alignSelf: "stretch",
    },
    descriptionFlexBox: {
        textAlign: "left",
    },
    description: {
        marginBottom: 10,
        fontFamily: FontFamily.labelMediumBold,
        fontSize: FontSize.titleMediumBold_size,
        fontWeight: 700,
    },
    loremIpsumIsSimply: {
        fontSize: FontSize.labelLargeBold_size,
        fontFamily: FontFamily.typographyLabelLarge,
        alignSelf: "stretch",
    },
    artworkContainer: {
        paddingHorizontal: Padding.p_3xs,
        // backgroundColor: Color.surfaceSurfaceContainer,
        borderStyle: "solid",
        borderColor: Color.colorBlack,
        justifyContent: "space-between",
        alignItems: "center",
        flex: 1,
        display: "flex",
    },
    body: {
        // padding: Padding.p_3xs,
        flexDirection: "column",
        gap: 15,
        alignSelf: "stretch",
    },
});

export default ArtworkDetail;
