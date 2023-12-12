import React, { useEffect, useState } from 'react';
import { Container, SignUpWrapper, StyledButton, Title, TitleWrapper } from './styles';
import { NavLink, useNavigate, useParams } from 'react-router-dom';
import { useTypedSelector } from '../../store/hooks/useTypedSelector';
import { UserApi } from '../../client/api/userApi';

enum ActivationStatus {
    SUCCESS = 204
}

const SignUpSuccess = () => {
    const { uid, token } = useParams();
    const [ activationStatus, setActivationStatus ] = useState<number | null>(null);

    const navigate = useNavigate()

    const goHome = () => {
        navigate('/')
    }

    useEffect(
        () => {
            if (uid && token) {

                UserApi.activateUserAccount(uid, token).then((request) => setActivationStatus(Number(request.status)));
            }
        },
        [ uid, token ]
    );

    const userInfo = useTypedSelector((state) => state.signUpData.signUpData);
    return (
        <Container>
            {activationStatus === null ? (
                <div>
                    <SignUpWrapper>

                        <TitleWrapper>
                            <Title> Registration Confirmation</Title>
                            <p>Dear {userInfo?.username}, your registration was successful. Go to your {userInfo?.email} to confirm registration</p>
                        </TitleWrapper>

                        <StyledButton onClick={goHome}>
                            Go to home
                        </StyledButton>

                    </SignUpWrapper>
                </div>
            ) : (
                <div>
                    <SignUpWrapper>

                        <TitleWrapper>
                            <Title> Account activation</Title>
                            {activationStatus === ActivationStatus.SUCCESS ? (
                                <div>
                                    <p>Email confirmed.</p>
                                    <StyledButton>
                                        <NavLink to={'/sign_in'}>Sign In</NavLink>
                                    </StyledButton>
                                </div>
                            ) : (
                                <div>
                                    <p>Something went wrong, try again.</p>
                                    <StyledButton>
                                        <NavLink to={'/sign_in'}>Sign In</NavLink>
                                    </StyledButton>
                                </div>
                            )}
                        </TitleWrapper>
                    </SignUpWrapper>
                </div>
            )}
        </Container>
    );
};

export default SignUpSuccess;