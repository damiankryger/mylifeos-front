'use client'

import Image from "next/image";
import {Form, Formik, FormikHelpers} from "formik";
import {EmailInput, Label, PasswordInput, Submit} from "@/components/ui/forms";
import {LoginRequest} from "@/types/auth";
import {AxiosError} from "axios";
import {redirect} from "next/navigation";
import {login} from "@/services/auth";

const submit = async (values: LoginRequest, helpers: FormikHelpers<LoginRequest>) => {
    try {
        helpers.setSubmitting(true);

        const response = await login(values);

        redirect(response.redirect);
    } catch (error) {
        if (error instanceof AxiosError) {
            if (error.status === 422) {
                const response = error.response;

                if (!response) {
                    return;
                }

                const errors = response.data.errors

                helpers.setErrors(errors);
            }
        }
    } finally {
        helpers.setSubmitting(false);
    }
}

export default function Home() {
    return (
        <div className={'grid grid-cols-1 lg:grid-cols-2 h-screen w-screen'}>
            <div
                className={'hidden lg:block relative before:content-[""] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-gradient-to-l before:from-white before:to-transparent'}>
                <Image className={'object-cover h-full w-full'} src={'/background.jpg'} alt={'background'} width={1920}
                       height={1280}/>
            </div>
            <div className={'bg-white flex flex-col items-center justify-center'}>
                <h1 className={'text-4xl font-bold mb-8'}>My LifeOS</h1>

                <Formik<LoginRequest> initialValues={{email: '', password: ''}} onSubmit={submit}>
                    <Form className={'w-full px-8 flex flex-col items-start max-w-lg space-y-8'}>
                        <div className={'w-full space-y-3'}>
                            <Label label={'Email'} id={'email'}/>
                            <EmailInput name={'email'} id={'email'}/>
                        </div>

                        <div className={'w-full space-y-3'}>
                            <Label label={'Hasło'} id={'password'}/>
                            <PasswordInput name={'password'} id={'password'}/>
                        </div>

                        <Submit style={{width: '100%', justifyContent: 'center'}}>Zaloguj</Submit>
                    </Form>
                </Formik>
            </div>
        </div>
    );
}
