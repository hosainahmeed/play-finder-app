import { Dimensions, StyleSheet, TouchableOpacity, View } from 'react-native'
import React from 'react'
import SafeAreaProvider from '../../../providers/SafeAreaProvider'
import RegisterFields from '../../../formFields/RegisterFields'
import DynamicFields from '../../../utils/DynamicFields';
import HeaderDesign from '../../../components/Shared/HeaderDesign';
import TextSecondary from '../../../components/Shared/TextSecondary';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import FlexText from '../../../components/Shared/FlexText';
import Divider from '../../../components/ui/devider/Divider';
import HeaderSecondary from '../../../components/Shared/HeaderSecondary';
import TextPrimary from '../../../components/Shared/TextPrimary';
import ButtonBG from '../../../components/ui/buttons/ButtonBG';
import { handleSignup } from '../../../handler/serviceSignUp';
import Navigate from '../../../utils/Navigate';
import { useNavigation } from '@react-navigation/native';

export default function Register() {
    const { fields, setFields } = RegisterFields();
    const { height } = Dimensions.get("window");
    const { top, bottom } = useSafeAreaInsets();
    const navigate = useNavigation()
    return (
        <SafeAreaProvider>
            <View
                style={{
                    flex: 1,
                    gap: 6,
                    justifyContent: "center",
                    minHeight: height - top - bottom,
                }}
            >
                <HeaderDesign text="Create Your Account" />
                <TextSecondary text="Join for free to find, browse, and register for youth Sport events near you, all in one place." />
                {fields?.map((field) => DynamicFields(field, setFields))}
                <FlexText
                    style={{
                        marginTop: 8,
                    }}
                >
                    <Divider
                        style={{
                            width: "45%",
                        }}
                    />
                    <HeaderSecondary text="OR" />
                    <Divider
                        style={{
                            width: "45%",
                        }}
                    />
                </FlexText>

                <FlexText
                    style={{
                        marginTop: 8,
                        marginBottom: 6,
                    }}
                >
                    <TextPrimary text="Already have an account?" />
                    <TouchableOpacity
                        onPress={() => navigate("Login")}
                    >
                        <TextSecondary
                            style={{
                                color: "#002868",
                            }}
                            text="Log In"
                        />
                    </TouchableOpacity>
                </FlexText>
                <ButtonBG
                    text="Continue"
                    handler={() => {
                        // handleSignup(fields, setFields);
                        navigate.navigate("Verify", {
                            params: { phoneNumber: fields[0].value, from: "Register" },
                        });
                    }}
                />
            </View>
        </SafeAreaProvider >
    )
}

const styles = StyleSheet.create({})