import { View, Text, TouchableOpacity, FlatList, ActivityIndicator } from "react-native";
import { useRouter } from "expo-router";
import { COLORS, SIZES } from "../../../constants";
import PopularJobCard from "../../common/cards/popular/PopularJobCard";

import styles from "./popularjobs.style";
import useFetch from "../../../hook/useFetch";
import { useState } from "react";

const Popularjobs = ({ data, isLoading, error }) => {
    const router = useRouter();

    const [selectedJob, setSelectedJob] = useState();

    const handleCardPress = (item) => {
        router.push(`/job-details/${item?.job_id}`);
    };

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
                        data={data}
                        renderItem={({ item }) => <PopularJobCard item={item} selectedJob={selectedJob} handleCardPress={handleCardPress} />}
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
