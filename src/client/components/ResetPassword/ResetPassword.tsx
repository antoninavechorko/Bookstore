import React from 'react';
import { SubmitErrorHandler, SubmitHandler, useForm } from 'react-hook-form';
import { StyledButton, StyledForm, StyledInput, StyledLabel, StyledWrapper } from './styles';
import { useActions } from '../../../store/hooks/useActions';
import { useNavigate, useParams } from 'react-router-dom';

type ResetData = {
    email: string;
};

const ResetPasswordForm = () => {
    const { register, handleSubmit, formState, formState: { errors, isSubmitSuccessful }, reset } = useForm<ResetData>({
        defaultValues: {}
    });

    const navigate = useNavigate();
    const { uid, token } = useParams();

    React.useEffect(
        () => {
            if (formState.isSubmitSuccessful) {
                reset({
                    email: ''
                });
            }
        },
        [ formState, reset ]
    );

    const { resetPasswordAsync } = useActions();

    const submit: SubmitHandler<ResetData> = (data) => {
        resetPasswordAsync(data.email);
    };

    const error: SubmitErrorHandler<ResetData> = (data) => {
        console.log(data);
    };

    if (formState.isSubmitSuccessful) {
        navigate('/reset_password_check');
    }

    if (uid && token) {
        navigate('/reset_password/confirm');
    }

    return (
        <StyledWrapper>
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

                <StyledButton type="submit">Reset</StyledButton>
            </StyledForm>
        </StyledWrapper>
    );
};

export default ResetPasswordForm;