import { useState } from "react";
import styled from "styled-components";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import {auth} from './../../firebase'
import Header from "../components/header/Header";

const AuthenticationForm = styled.form`
`

const DataInput = styled.input`
`

const SubmitButton = styled.button`
    width:10rem;
    height:2rem;
    border-radius:0.5rem;
    margin 2rem;
`

interface emailAuthentificationData{
    email: string,
    password:string
}

const ShignUp = (): JSX.Element => {
    const [emailUser, setEmailUser] = useState<emailAuthentificationData>({ email: "", password: "" });
    window.onload = () => {
        document.getElementById("password")!.focus();
    }

    const submitAuthentification = () => {
        createUserWithEmailAndPassword(auth, emailUser.email, emailUser.password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user)
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode);
                console.log(errorMessage);
            });
    }

    const KeyPressHandler = (e:React.KeyboardEvent<HTMLInputElement>) => {
        if (e.code === "Enter") {
            submitAuthentification();
        }
    }
    
    return (
    <div>
        <Header></Header>
        <h2>新規登録</h2>
        <AuthenticationForm>
            <div>メールアドレス</div>
            <DataInput
                type="email"
                id={"email"}
                onChange={(e) => setEmailUser({ ...emailUser, email: e.target.value })}
                placeholder={"メールアドレス"}
                onKeyDown={(e) => KeyPressHandler(e)}
            >
            </DataInput>
            <div>パスワード</div>
            <DataInput
                type="password"
                id={"password"}
                onChange={(e) => setEmailUser({ ...emailUser, password: e.target.value })}
                placeholder={"パスワード"}
                onKeyDown={(e) => KeyPressHandler(e)}
            >
            </DataInput>
        </AuthenticationForm>
        <SubmitButton onClick={()=>submitAuthentification()}>サインアップ</SubmitButton>
    </div>
    );
}

export default ShignUp;
