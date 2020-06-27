import React, { useCallback,useState } from "react";
import Head from "next/head";
import AppLayout from "../components/AppLayout";
import { Form, Input } from "antd";



const Signup = () => {
    
    const [id, setid] = useState("");
    const onChangeId = useCallback((e)=>{
        setid(e.target.value);   
    },[]);
    const [password, setpassword] = useState("");
    const onSubmit = useCallback(() => {
        
    }, []);
    return (

        <AppLayout>
            <Head>
                <title>회원가입 | NodeBird</title>
            </Head>
            <Form onFinsh={onSubmit}>
                <div>
                    <label htmlfor="user-id">아이디</label>
                    <br/>
                    <Input name="user-id" value={id} required onChange={onChangeId}/>
                </div>
                <label htmlfor="user-id">닉네임</label>
                    <br/>
                    <Input name="user-id" value={nick} required onChange={onChangeNick}/>
                </div>
            </Form>
        </AppLayout>
    );
};

export default Signup;