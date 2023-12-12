import React, { useEffect } from 'react';
import { ILogInUserData } from '../../../types/types';
import { SubmitErrorHandler, SubmitHandler, useForm } from 'react-hook-form';
import { StyledButton, StyledForm, StyledInput, StyledLabel } from './styles';
import { useActions } from '../../../store/hooks/useActions';
import { useTypedSelector } from '../../../store/hooks/useTypedSelector';
import { NavLink, useNavigate } from 'react-router-dom';

const LoginForm = () => {
    const { register, handleSubmit, formState, formState: { errors, isSubmitSuccessful }, reset } = useForm<
        ILogInUserData
    >({
        defaultValues: {}
    });

    React.useEffect(
        () => {
            if (formState.isSubmitSuccessful) {
                reset({
                    email: '',
                    password: ''
                });
            }
        },
        [ formState, reset ]
    );

    const { getLogInUserAsync, resetPasswordAsync } = useActions();

    const submit: SubmitHandler<ILogInUserData> = (data) => {
        getLogInUserAsync(data);
    };

    const error: SubmitErrorHandler<ILogInUserData> = (data) => {
        console.log(data);
    };

    const isLoggedIn = useTypedSelector((state) => state.userInfo.isLoggedIn);
    const navigate = useNavigate();

    useEffect(
        () => {
            if (isLoggedIn) {
                navigate('/');
            }
        },
        [ isLoggedIn ]
    );

    return (
        <StyledForm onSubmit={handleSubmit(submit, error)}>
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

            <StyledButton type="submit">Log in</StyledButton>
            <p>
                <NavLink to="/reset_password">Forgot password? </NavLink>
            </p>
        </StyledForm>
    );
};

export default LoginForm;