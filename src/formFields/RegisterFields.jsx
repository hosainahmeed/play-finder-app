import { useState } from "react";

const RegisterFields = () => {
    const [fields, setFields] = useState([
        {
            name: "Full Name",
            type: "string",
            placeHolder: "Enter Full Name",
            label: "Full Name",
            error: false,
            value: "Hosain ali",
            required: true,
            keyboard: "email-address",
        },
        {
            name: "Email Address",
            type: "string",
            placeHolder: "Enter Email Address",
            label: "Email Address",
            error: false,
            value: "exmple@gmail.com",
            required: true,
            keyboard: "email-address",
        },
        {
            name: "phoneNumber",
            type: "string",
            placeHolder: "Enter Phone Number",
            label: "Phone Number",
            error: false,
            value: "0123456789",
            required: true,
            keyboard: "default",
        },
        {
            name: "password",
            type: "password",
            placeHolder: "******",
            label: "Password",
            error: false,
            value: "password",
            required: true,
            keyboard: "default",
        },
        {
            name: "confirmPassword",
            type: "password",
            placeHolder: "******",
            label: "Confirm Password",
            error: false,
            value: "password",
            required: true,
            keyboard: "default",
        },
        {
            name: "agree",
            type: "checkbox",
            placeHolder: "",
            label: "I agree to the Terms & Conditions and Privacy Policy.",
            error: false,
            value: "true",
            required: true,
            keyboard: "default",
        },
    ]);
    return { fields, setFields };
};

export default RegisterFields;
