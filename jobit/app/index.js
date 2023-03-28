import { useState } from "react";
import { View, Text, ScrollView, SafeAreaView } from "react-native";
import SafeViewAndroid from "../utils/androidSafeView";

import { Stack, useRouter } from "expo-router";

import { COLORS, icons, images, SIZES } from "../constants";

import { Nearbyjobs, Popularjobs, ScreenHeaderBtn, Welcome } from "../components";
import useFetch from "../hook/useFetch";

const Home = () => {
    const { data, isLoading, error } = useFetch("search", { query: "React developer", num_pages: 1 });

    const router = useRouter();
    const [searchTerm, setSearchTerm] = useState("");
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
                    <Welcome
                        searchTerm={searchTerm}
                        setSearchTerm={setSearchTerm}
                        handleClick={() => {
                            if (searchTerm) {
                                router.push(`/search/${searchTerm}`);
                            }
                        }}
                    />
                    <Popularjobs data={data} isLoading={isLoading} error={error} />
                    <Nearbyjobs data={data} isLoading={isLoading} error={error} />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default Home;
