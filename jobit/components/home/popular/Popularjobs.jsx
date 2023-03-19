import { useState } from "react";
import { View, Text, TouchableOpacity, FlatList, ActivityIndicator } from "react-native";
import { useRouter } from "expo-router";
import { COLORS, SIZES } from "../../../constants";
import PopularJobCard from "../../common/cards/popular/PopularJobCard";

import styles from "./popularjobs.style";

const Popularjobs = () => {
    const router = useRouter();
    const isLoading = false;
    const error = false;

    return (
        <View style={styles.container}>
            {/* header view */}
            <View style={styles.header}>
                <Text style={styles.headerTitle}>Popular Job</Text>

                <TouchableOpacity>
                    <Text style={styles.headerBtn}>Show all</Text>
                </TouchableOpacity>
            </View>

            {/* job listing */}
            <View style={styles.cardsContainer}>
                {isLoading ? (
                    <ActivityIndicator size="large" color={COLORS.tertiary} />
                ) : error ? (
                    <Text>Something went wrong...</Text>
                ) : (
                    <FlatList
                        data={[1, 2, 3, 4, 4, 5]}
                        renderItem={({ item }) => <PopularJobCard item={item} />}
                        keyExtractor={(item) => item?.job_id}
                        contentContainerStyle={{ columnGap: SIZES.medium }}
                        horizontal
                    />
                )}
            </View>
        </View>
    );
};

export default Popularjobs;
