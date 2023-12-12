import styled from 'styled-components';

export const Container = styled.div`
	width: 100%;
	background: #f4eefd;
	padding: 50px 65px;
	margin-top: 20px;

	@media (max-width: 950px) {
		padding: 30px 35px;
	}

	@media (max-width: 950px) {
		padding: 30px 35px;
	}

	@media (max-width: 600px) {
		padding: 15px 20px;
	}
`;

export const Title = styled.label`
	color: #313037;
	font-family: 'Bebas Neue', sans-serif;
	text-transform: uppercase;
	font-size: 30px;
	font-style: normal;
	font-weight: 700;
	line-height: 60px;
	margin-bottom: 25px;

	@media (max-width: 950px) {
		font-size: 26px;
	}

	@media (max-width: 700px) {
		font-size: 22px;
	}

	@media (max-width: 510px) {
		font-size: 18px;
	}

	@media (max-width: 410px) {
		font-size: 14px;
	}
`;

export const Form = styled.form`font-size: 24px;`;

export const InputContainer = styled.div`
	display: flex;
	justify-content: start;
`;

export const StyledInput = styled.input`
	display: block;
	width: 80%;
	padding: 16px 40px;
	font-family: DIN Pro;
	font-size: 16px;
	font-style: normal;
	font-weight: 400;
	line-height: 24px;

	@media (max-width: 700px) {
		width: 70%;
		padding: 12px 30px;
	}
`;

export const StyledButton = styled.button`
	display: flex;
	width: 20%;
	color: white;
	background: black;
	justify-content: center;
	align-items: center;

	text-transform: uppercase;
	font-family: 'Bebas Neue', sans-serif;
	font-size: 18px;
	font-style: normal;
	font-weight: 700;
	line-height: 24px; /* 133.333% */
	letter-spacing: 0.9px;

	&:hover {
		background: #5b5a62;
	}

	@media (max-width: 950px) {
		font-size: 16px;
	}

	@media (max-width: 700px) {
		width: 30%;
	}

	@media (max-width: 490px) {
		font-size: 10px;
	}
`;