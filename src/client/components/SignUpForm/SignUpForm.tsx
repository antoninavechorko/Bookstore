import React, { useEffect } from 'react';
import { StyledButton, StyledForm, StyledInput, StyledLabel } from './styles';
import { SubmitErrorHandler, SubmitHandler, useForm } from 'react-hook-form';
import { ISignUpUserData } from '../../../types/types';
import { UserApi } from '../../api/userApi';
import { useTypedSelector } from '../../../store/hooks/useTypedSelector';
import { useNavigate } from 'react-router-dom';
import { useActions } from '../../../store/hooks/useActions';

const SignUpForm = () => {
    const { register, handleSubmit, formState, formState: { errors, isSubmitSuccessful }, reset } = useForm<
        ISignUpUserData
    >({
        defaultValues: {}
    });

    React.useEffect(
        () => {
            if (formState.isSubmitSuccessful) {
                reset({
                    username: '',
                    email: '',
                    password: '',
                    repeatPassword: ''
                });
            }
        },
        [ formState, reset ]
    );
    const { getSignUpData } = useActions();

    const submit: SubmitHandler<ISignUpUserData> = (data) => {
        UserApi.signUpUser(data);
        getSignUpData(data);
    };

    const { isSignUpSuccessful, signUpData } = useTypedSelector((state) => state.signUpData);
    const navigate = useNavigate();

    useEffect(
        () => {
            if (isSignUpSuccessful && signUpData) {
                navigate('/sign-up/success');
            }
        },
        [ isSignUpSuccessful, signUpData ]
    );

    const error: SubmitErrorHandler<ISignUpUserData> = (data) => {
        console.log(data);
    };

    function handleUser(): React.MouseEventHandler<HTMLButtonElement> {
        throw new Error('Function not implemented.');
    }

    return (
        <StyledForm onSubmit={handleSubmit(submit, error)}>
            <StyledLabel>
                Name:
                <StyledInput
                    {...register('username', { required: true })}
                    placeholder="Your name"
                    type="text"
                    autoComplete="on"
                />
            </StyledLabel>
            <StyledLabel>
                Email:
                <StyledInput
                    {...register('email', { required: true })}
                    placeholder="Your email"
                    type="email"
                    autoComplete="on"
                />
            </StyledLabel>
            <StyledLabel>
                Password:
                <StyledInput
                    {...register('password', { required: true })}
                    placeholder="Your password"
                    type="password"
                    autoComplete="off"
                />
            </StyledLabel>
            <StyledLabel>
                Confirm password:
                <StyledInput
                    {...register('repeatPassword', {
                        required: true
                    })}
                    placeholder="Confirm your password"
                    type="password"
                    autoComplete="off"
                />
            </StyledLabel>

            <StyledButton type="submit">Sign Up</StyledButton>
        </StyledForm>
    );
};

export default SignUpForm;