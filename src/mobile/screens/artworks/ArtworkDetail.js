import { ActivityIndicator, ScrollView, StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { Border, Color, FontFamily, FontSize, Padding } from '../../GlobalStyles';
import { useRoute } from '@react-navigation/native';
import axios from 'axios';
import { baseUrl } from '../../services/api';
import Picture from '../../components/detail/picure/Picture';
import AboutTitle from '../../components/detail/content/AboutTitle';
import AboutArtist from '../../components/detail/content/AboutArtist';
import FrameButton from '../../components/detail/content/FrameButton';
import Button from '../../components/detail/content/Button';
import Video from '../../components/detail/content/Video';
import Sound from '../../components/detail/content/Sound';
import NavbarTop from '../../components/header/NavbarTop';

const ArtworkDetail = () => {
    const route = useRoute();
    const { ID } = route.params;

    const [artwork, setArtwork] = useState([]);
    const [isLoading, setLoading] = useState(true);

    const getArtwork = async () => {
        try {
            const response = await axios.get(`${baseUrl}/api/artworks/${ID}`);
            setArtwork(response.data[0].detail);
            console.log(ID);
            console.log(artwork);
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
        <View style={styles.artworkContainer}>
            <NavbarTop />
            {isLoading ? (
                <ActivityIndicator />
            ) : (
                <ScrollView style={styles.body}>
                    <Picture altText={artwork.thumbnail.alt_text} imagePath={`https://www.artic.edu/iiif/2/${artwork.image_id}/full/843,/0/default.jpg`} commentAmount={artwork.number_of_comments} likeAmount={artwork.number_of_likes} date={artwork.timestamp} />
                    <AboutTitle title={artwork.artwork_type_title} tagRoute={"Artwork"} tagDetail={"Art"} isPrice={false} />
                    <AboutArtist />
                    <View>
                        <FrameButton field="Title" value={artwork.artwork_type_title} propColor="#231919" />
                        <FrameButton field="Date" value={`${artwork.date_start}-${artwork.date_end}`} propColor="#101010" />
                        <FrameButton field="Place of Origin" value={artwork.place_of_origin} propColor="#231919" />
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
                            field="Classification"
                            value={artwork.classification_titles.map((item, i, arr) => { return i != arr.length - 1 ? `${item}` + '-' : `${item}` })}
                            propColor="#231919"
                        />
                    </View>
                    <Button />
                    <View style={styles.descriptioncontainerFlexBox}>
                        <Text style={[styles.description, styles.descriptionFlexBox]}>
                            Description
                        </Text>
                        <Text
                            style={[styles.loremIpsumIsSimply, styles.descriptionFlexBox]}
                        >
                            Provenance: {artwork.provenance_text}
                        </Text>
                        <Text
                            style={[styles.loremIpsumIsSimply, styles.descriptionFlexBox]}
                        >
                            Medium: {artwork.medium_display}
                        </Text>
                    </View>
                    <Video title={artwork.artwork_type_title} />
                    <Sound title={artwork.artwork_type_title} />
                </ScrollView>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    contentSpaceBlock: {
        marginTop: 15,
        alignSelf: "stretch",
    },
    descriptioncontainerFlexBox: {
        justifyContent: "center",
        marginTop: 15,
        alignSelf: "stretch",
    },
    descriptionFlexBox: {
        textAlign: "left",
        color: Color.surfaceOnSurface,
    },
    containerfullinformationofartw: {
        alignItems: "center",
    },
    description: {
        fontSize: FontSize.titleMediumBold_size,
        fontWeight: "700",
        fontFamily: FontFamily.labelMediumBold,
    },
    loremIpsumIsSimply: {
        fontSize: FontSize.labelLargeBold_size,
        fontFamily: FontFamily.typographyLabelLarge,
        alignSelf: "stretch",
    },
    content: {
        paddingHorizontal: Padding.p_3xs,
        paddingTop: Padding.p_31xl,
        paddingBottom: Padding.p_3xs,
        flex: 1,
    },
    dashboardMain: {
        padding: Padding.p_3xs,
        alignSelf: "stretch",
        alignItems: "center",
    },
    artworkContainer: {
        paddingHorizontal: Padding.p_3xs,
        borderRadius: Border.br_18xl,
        backgroundColor: Color.surfaceSurfaceContainer,
        borderStyle: "solid",
        borderColor: Color.colorBlack,
        justifyContent: "space-between",
        alignItems: "center",
        flex: 1,
    },
    body: {
        padding: Padding.p_3xs,
        flexDirection: "column",
        gap: 15,
        alignSelf: "stretch",
        marginBottom: 80
    },
});

export default ArtworkDetail;
