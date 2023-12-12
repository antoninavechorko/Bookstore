import React from 'react';
import { IAccountData } from '../../types/types';
import { SubmitErrorHandler, SubmitHandler, useForm } from 'react-hook-form';
import {
    ButtonContainer,
    ProfileContainer,
    StyledButton,
    StyledForm,
    StyledInput,
    StyledLabel,
    StyledWhiteButton,
    SybTitle,
    Title,
    Wrapper
} from './styles';
import { NavLink, useNavigate } from 'react-router-dom';
import { IconButton } from '@mui/material';
import { KeyboardBackspace } from '@mui/icons-material';
import { useTypedSelector } from '../../store/hooks/useTypedSelector';
import { logInActions } from '../../store/LogIn/LogInActions';
import { useDispatch } from 'react-redux';
import { signUpActions } from '../../store/SignUpData/SignUpActions';
import { useActions } from '../../store/hooks/useActions';

const Account = () => {
    const user = useTypedSelector((state) => state.userInfo.userInfo);

    const { register, handleSubmit, formState, formState: { errors, isSubmitSuccessful }, reset } = useForm<
        IAccountData
    >({
        defaultValues: {
            name: user!.username,
            email: user!.email
        }
    });

    React.useEffect(
        () => {
            if (formState.isSubmitSuccessful) {
                reset({
                    name: '',
                    email: '',
                    password: '',
                    newPassword: '',
                    confirmNewPassword: ''
                });
            }
        },
        [ formState, reset ]
    );
    const { changePasswordAsync } = useActions();
    const accessToken = localStorage.getItem('access_token');
    const rightToken = JSON.parse(accessToken!);
    const navigate = useNavigate();

    const submit: SubmitHandler<IAccountData> = (data) => {
        changePasswordAsync(data.newPassword, data.password, rightToken!);
        navigate('/');
    };

    const error: SubmitErrorHandler<IAccountData> = (data) => {
        console.log(data);
    };
    const dispatch = useDispatch();
    const handleLogOut = () => {
        dispatch(signUpActions.clearSignUpData());
        dispatch(logInActions.logOutUser());
    };

    return (
        <Wrapper>
            <NavLink to="/">
                <IconButton>
                    <KeyboardBackspace />
                </IconButton>
            </NavLink>
            <Title>Account</Title>
            <StyledForm onSubmit={handleSubmit(submit, error)}>
                <SybTitle>Profile</SybTitle>
                <ProfileContainer>
                    <StyledLabel>
                        Name
                        <StyledInput
                            {...register('name', { required: true })}
                            placeholder="Your name"
                            type="text"
                            autoComplete="on"
                        />
                    </StyledLabel>
                    <StyledLabel>
                        Email
                        <StyledInput
                            {...register('email', { required: true })}
                            placeholder="Your email"
                            type="email"
                            autoComplete="on"
                        />
                    </StyledLabel>
                </ProfileContainer>
                <SybTitle>Password</SybTitle>
                <StyledLabel>
                    Password
                    <StyledInput
                        {...register('password', { required: true })}
                        placeholder="Your password"
                        type="password"
                        autoComplete="off"
                    />
                </StyledLabel>

                <ProfileContainer>
                    <StyledLabel>
                        New password
                        <StyledInput
                            {...register('newPassword', { required: true })}
                            placeholder="New password"
                            type="password"
                            autoComplete="off"
                        />
                    </StyledLabel>
                    <StyledLabel>
                        Confirm new password
                        <StyledInput
                            {...register('confirmNewPassword', { required: true })}
                            placeholder="Confirm new password"
                            type="password"
                            autoComplete="off"
                        />
                    </StyledLabel>
                </ProfileContainer>
                <ButtonContainer>
                    <StyledButton type="submit" onClick={handleLogOut}>
                        <NavLink to="/"> Log out</NavLink>
                    </StyledButton>
                    <StyledButton type="submit" onClick={() => submit}>
                        Change Password
                    </StyledButton>

                    <StyledWhiteButton type="submit">
                        <NavLink to="/">Cancel</NavLink>
                    </StyledWhiteButton>
                </ButtonContainer>
            </StyledForm>
        </Wrapper>
    );
};

export default Account;