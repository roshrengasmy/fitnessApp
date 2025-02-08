import { Stack } from "expo-router";
import React from "react";
// Import your global CSS file
import "../global.css";

const _layout = () => {
    return (
        <Stack screenOptions={{ headerShown: false }} >
        </Stack>
    )
}

export default _layout;