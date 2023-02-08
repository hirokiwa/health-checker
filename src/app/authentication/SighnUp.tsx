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
    passwordConfirmation:string
}

const ShignUp = (): JSX.Element => {
    const [emailUser, setEmailUser] = useState<emailAuthentificationData>(
        {
            email: "",
            password: "",
            passwordConfirmation: ""
        }
    );
    window.onload = () => {
        document.getElementById("password")!.focus();
    }

    const submitAuthentification = () => {
        Object.entries(emailUser).map(([key,value]) => {
            if (value === '') {
                alert(`${key}を入力してください。`);
            }
        })
    
        if (emailUser.password !== emailUser.passwordConfirmation) {
            alert("パスワードが異なります。");
            return;
        }
        console.log("サインインします。");
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
            />
            <div>パスワード</div>
            <DataInput
                type="password"
                id={"password"}
                onChange={(e) => setEmailUser({ ...emailUser, password: e.target.value })}
                placeholder={"パスワード"}
                onKeyDown={(e) => KeyPressHandler(e)}
            />
            <div>パスワード再入力</div>
            <DataInput
                type="password"
                id={"passwordConfirmation"}
                onChange={(e) => setEmailUser({ ...emailUser, passwordConfirmation: e.target.value })}
                placeholder={"パスワード再入力"}
                onKeyDown={(e) => KeyPressHandler(e)}
            />
        </AuthenticationForm>
        <SubmitButton onClick={()=>submitAuthentification()}>サインアップ</SubmitButton>
    </div>
    );
}

export default ShignUp;
