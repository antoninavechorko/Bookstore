import React from 'react';
import { Container, Form, InputContainer, StyledButton, StyledInput, Title } from './styles';

const SubscribeInput = () => {
    return (
        <Container>
            <Form>
                <Title>Subscribe to Newsletter</Title>
                <InputContainer>
                    <StyledInput placeholder="Your email" type="email" />
                    <StyledButton>Subscribe</StyledButton>
                </InputContainer>
            </Form>
        </Container>
    );
};

export default SubscribeInput;