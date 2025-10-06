import React from 'react';
import 'react-native-reanimated';
import { StatusBar } from 'react-native';
import StackLayout from "../layout/StackLayout";
import { NavigationContainer } from '@react-navigation/native';
import { PortalProvider } from '@gorhom/portal';
import { KeyboardProvider } from 'react-native-keyboard-controller';
import GlobalContextProvider from '../providers/GlobalContextProvider';


export default function Root() {
    return (
        <PortalProvider>
            <KeyboardProvider>
                <GlobalContextProvider>
                    <NavigationContainer>
                        <StatusBar
                            barStyle={"dark-content"}
                            backgroundColor={`#FFFFFF`}
                        />
                        <StackLayout />
                    </NavigationContainer>
                </GlobalContextProvider>
            </KeyboardProvider>
        </PortalProvider>

    )
}