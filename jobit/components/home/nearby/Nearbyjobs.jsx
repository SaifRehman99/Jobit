import { View, Text, TouchableOpacity, FlatList, ActivityIndicator } from "react-native";
import { useRouter } from "expo-router";
import { COLORS } from "../../../constants";
import NearByJobCard from "../../common/cards/nearby/NearbyJobCard";

import styles from "./nearbyjobs.style";
import useFetch from "../../../hook/useFetch";

const Nearbyjobs = ({ data, isLoading, error }) => {
    const router = useRouter();

    return (
        <View style={styles.container}>
            {/* header view */}
            <View style={styles.header}>
                <Text style={styles.headerTitle}>Nearby Job</Text>

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
                    data?.map((job) => (
                        <NearByJobCard job={job} key={`nearby-job-${job?.job_id}`} handleNavigate={() => router.push(`/job-details/${job?.job_id}`)} />
                    ))
                )}
            </View>
        </View>
    );
};

export default Nearbyjobs;
