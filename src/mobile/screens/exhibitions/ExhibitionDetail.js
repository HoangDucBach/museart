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

const ExhibitionDetail = () => {
    const route = useRoute();
    const { ID } = route.params;

    const [exhibition, setexhibition] = useState([]);
    const [isLoading, setLoading] = useState(true);

    const getExhibition = async () => {
        try {
            const response = await axios.get(`${baseUrl}/exhibitions/${ID}`);
            setexhibition(response.data.data);
            console.log(ID);
            console.log(exhibition);
        } catch (error) {
            //console.log(exhibition);
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getExhibition();
    }, []);

    return (
        <View style={styles.exhibitionContainer}>
            <NavbarTop />
            {isLoading ? (
                <ActivityIndicator />
            ) : (
                <ScrollView style={styles.body}>
                    <Picture altText={''} imagePath={exhibition.image_url} commentAmount={exhibition.number_of_comments} likeAmount={exhibition.number_of_likes} date={exhibition.timestamp} />
                    <AboutTitle title={exhibition.title} tagRoute={"Exhibition"} tagDetail={"Exhibition"} isPrice={false} />
                    <AboutArtist />
                    <View>
                        <FrameButton field="AIC start time" value={exhibition.aic_start_at} propColor="#231919" />
                        <FrameButton field="AIC end time" value={exhibition.aic_end_at} propColor="#231919" />
                    </View>
                    <Button />
                    <View style={styles.descriptioncontainerFlexBox}>
                        <Text style={[styles.description, styles.descriptionFlexBox]}>
                            Description
                        </Text>
                        <Text
                            style={[styles.loremIpsumIsSimply, styles.descriptionFlexBox]}
                        >

                        </Text>
                    </View>
                    <Video title={exhibition.title} />
                    <Sound title={exhibition.title} />
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
    exhibitionContainer: {
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

export default ExhibitionDetail;
