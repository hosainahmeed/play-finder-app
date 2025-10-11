import { useState } from "react";

const LoginFields = () => {
    const [fields, setFields] = useState([
        {
            name: "email",
            type: "string",
            placeHolder: "Enter Email Address",
            label: "Email Address",
            error: false,
            value: "hosain@gmail.com",
            required: true,
            keyboard: "email-address",
        },
        {
            name: "password",
            type: "password",
            placeHolder: "******",
            label: "Password",
            error: false,
            value: "1234567",
            required: true,
            keyboard: "default",
        },
        {
            name: "remember",
            type: "checkbox",
            placeHolder: "",
            label: "Remember me",
            error: false,
            value: "",
            required: true,
            keyboard: "default",
        },
    ]);
    return { fields, setFields };
};

export default LoginFields;
