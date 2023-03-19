import { useState } from "react";
import { View, Text, ScrollView, SafeAreaView } from "react-native";
import SafeViewAndroid from "../utils/androidSafeView";

import { Stack, useRouter } from "expo-router";

import { COLORS, icons, images, SIZES } from "../constants";

import { Nearbyjobs, Popularjobs, ScreenHeaderBtn, Welcome } from "../components";

const Home = () => {
    return (
        <SafeAreaView style={SafeViewAndroid.AndroidSafeArea}>
            <Stack.Screen
                options={{
                    headerStyle: { backgroundColor: COLORS.lightWhite },

                    // for the top line
                    headerShadowVisible: false,

                    headerLeft: () => <ScreenHeaderBtn iconUrl={icons.menu} dimension="60%" />,
                    headerRight: () => <ScreenHeaderBtn iconUrl={images.profile} dimension="60%" />,

                    headerTitle: "",
                }}
            />

            <ScrollView showsVerticalScrollIndicator={false}>
                <View
                    style={{
                        flex: 1,
                        padding: SIZES.medium,
                    }}
                >
                    <Welcome />
                    <Popularjobs />
                    <Nearbyjobs />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default Home;
