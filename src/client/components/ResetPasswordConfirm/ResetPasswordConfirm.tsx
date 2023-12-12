import React from 'react';
import { SubmitErrorHandler, SubmitHandler, useForm } from 'react-hook-form';
import { Container, StyledButton, StyledForm, StyledInput, StyledLabel, StyledWrapper } from './styles';
import { useActions } from '../../../store/hooks/useActions';
import { useNavigate, useParams } from 'react-router-dom';

type ResetData = {
    new_password: string;
};

const ResetPasswordConfirmForm = () => {
    const { register, handleSubmit, formState, formState: { errors, isSubmitSuccessful }, reset } = useForm<ResetData>({
        defaultValues: {}
    });

    React.useEffect(
        () => {
            if (formState.isSubmitSuccessful) {
                reset({
                    new_password: ''
                });
            }
        },
        [ formState, reset ]
    );

    const { resetPasswordConfirmAsync } = useActions();
    const navigate = useNavigate();

    const { uid, token } = useParams();

    const submit: SubmitHandler<ResetData> = (data) => {
        resetPasswordConfirmAsync(uid!, token!, data.new_password);
    };

    const error: SubmitErrorHandler<ResetData> = (data) => {
        console.log(data);
    };

    if (formState.isSubmitSuccessful) {
        navigate('/sign_in');
    }

    return (
        <Container>
            <StyledWrapper>
                <StyledForm onSubmit={handleSubmit(submit, error)}>
                    <StyledLabel>
                        New password:
                        <StyledInput
                            {...register('new_password', { required: true })}
                            placeholder="Your password"
                            type="password"
                            autoComplete="on"
                        />
                    </StyledLabel>

                    <StyledButton type="submit">Reset</StyledButton>
                </StyledForm>
            </StyledWrapper>
        </Container>
    );
};

export default ResetPasswordConfirmForm;