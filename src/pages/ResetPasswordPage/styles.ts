import styled from 'styled-components';

export const SignUpWrapper = styled.div`
	width: 80%;
	margin: 0 auto;
	height: 100%;
	min-height: 400px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	padding: 100px 10px;

	background-color: ${(props) => props.theme.palette.primary.background};

	@media (max-width: 700px) {
		width: 80%;
	}
`;

export const StyledForm = styled.form`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: start;
	background-color: #f2eded;
	border: 2px solid #a39d9d;
	border-radius: 3px;
	margin: 0 auto;
	padding-bottom: 20px;
`;

export const StyledButton = styled.button`
	display: block;

	width: 60%;
	margin: 10px auto;
	color: white;
	background: black;
	padding: 16px 10px;
	text-transform: uppercase;
	font-family: 'Bebas Neue', sans-serif;
	font-size: 18px;
	font-style: normal;
	font-weight: 700;
	line-height: 24px;
	letter-spacing: 0.9px;

	& a {
		display: block;
		width: 100%;
		color: white;
	}

	&:hover {
		background: #5b5a62;
	}

	@media (max-width: 700px) {
		font-size: 14px;
		padding: 16px 30px;
	}

	@media (max-width: 450px) {
		font-size: 10px;
		padding: 16px 5px;
	}
`;

export const StyledStr = styled.div`
	margin: 0 auto;
	padding: 15px 0 0 15px;
	font-size: 14px;
	font-weight: 700;
	width: 400px;
	text-align: left;
	margin-bottom: 20px;
`;

export const TitleWrapper = styled.div`
	margin: 0 auto;
	width: 400px;
	padding: 20px;
`;

export const Title = styled.h3`
	color: #313037;
	font-family: 'Bebas Neue', sans-serif;
	font-size: 24px;
	padding: 15px;
	font-style: normal;
	font-weight: 700;
	line-height: 32px;

	@media (max-width: 450px) {
		font-size: 20px;
	}
`;

export const Container = styled.div`
	min-height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: ${(props) => props.theme.palette.primary.background};
`;