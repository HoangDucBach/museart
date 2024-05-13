import { ActivityIndicator, FlatList, ScrollView, StyleSheet, Text, TouchableHighlight, TouchableOpacity, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { Border, Color, FontFamily, FontSize, Padding } from '../../GlobalStyles';
import { useNavigation, useRoute } from '@react-navigation/native';
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
import FrameComponent from '../../components/FrameComponent';

const ExhibitionDetail = () => {
    const navigation = useNavigation();
    const route = useRoute();
    const { ID } = route.params;

    const [exhibition, setexhibition] = useState([]);
    const [isLoading, setLoading] = useState(true);

    const getExhibition = async () => {
        try {
            const response = await axios.get(`${baseUrl}/exhibitions/${ID}`);
            setexhibition(response.data.data);
            console.log(ID);
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
                        <FrameButton field="Status" value={exhibition.status} propColor="#231919" />
                        <FrameButton field="Gallery" value={exhibition.gallery_title} propColor="#231919" />
                        <FrameButton field="Source Updated At" value={exhibition.source_updated_at.slice(0, 10)} propColor="#231919" />
                    </View>
                    <Button />
                    {exhibition.short_description != null &&
                        <View style={styles.descriptioncontainerFlexBox}>
                            <Text style={[styles.description, styles.descriptionFlexBox]}>
                                Description
                            </Text>
                            <Text
                                style={[styles.loremIpsumIsSimply, styles.descriptionFlexBox]}
                            >
                                {exhibition.short_description}
                            </Text>
                        </View>
                    }
                    {
                        <View style={styles.descriptioncontainerFlexBox}>
                            <Text style={[styles.description, styles.descriptionFlexBox]}>
                                Artworks
                            </Text>
                            <View>
                                {exhibition.artwork_ids.map((item, index) => {
                                    return (
                                        <TouchableHighlight underlayColor={'gray'} onPress={() => {
                                            navigation.navigate('ArtworkDetail', { ID: item });
                                        }}>
                                            <Text style={[styles.descriptionFlexBox]}>{exhibition.artwork_titles[index]}</Text>
                                        </TouchableHighlight>
                                    );
                                })}
                            </View>
                        </View>
                    }
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
        color: Color.surfaceOnSurface,
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
    exhibitionContainer: {
        paddingHorizontal: Padding.p_3xs,
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
    },
});

export default ExhibitionDetail;
