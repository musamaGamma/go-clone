import { View, Text, ActivityIndicator } from "react-native";
import React from "react";
import MapView, { Marker } from "react-native-maps";
import { ErrorBoundary } from "react-error-boundary";

export default function Map({ location }) {
  return location ? (
    <ErrorBoundary fallback={<Text>something went wrong</Text>}>
      <MapView
        // customMapStyle={{ width: "100%", height: "70%", borderRadius: 10 }}

        // mapPadding={10}
        // style={{ width: "100%", height: "70%", borderRadius: 10 }}

        region={{
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
          latitudeDelta: 0.01989,
          longitudeDelta: 0.01989,
        }}>
        <Marker
          coordinate={{
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
          }}
        />
      </MapView>
    </ErrorBoundary>
  ) : (
    <ActivityIndicator />
  );
}
