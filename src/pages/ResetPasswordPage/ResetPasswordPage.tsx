import React from 'react';
import { Container } from './styles';
import { useParams } from 'react-router-dom';
import ResetPasswordForm from '../../client/components/ResetPassword/ResetPassword';
import ResetPasswordConfirmForm from '../../client/components/ResetPasswordConfirm/ResetPasswordConfirm';

const ResetPasswordPage = () => {
    const { uid, token } = useParams();
    console.log(uid);
    console.log(token);

    return (
        <Container>
            {uid === undefined && token === undefined ? <ResetPasswordForm /> : <ResetPasswordConfirmForm />}
        </Container>
    );
};

export default ResetPasswordPage;