import { TabPanel } from '@mui/lab';

import styled from 'styled-components';

export const Wrapper = styled.div`
	padding: 100px 10px;
	min-height: 100vh;
	background-color: ${(props) => props.theme.palette.primary.background};
`;

export const Title = styled.h2`
	text-transform: uppercase;
	color: #313037;
	font-family: 'Bebas Neue', sans-serif;
	font-size: 36px;
	font-style: normal;
	font-weight: 700;
	line-height: 64px;

	@media (max-width: 850px) {
		font-size: 30px;
	}
`;

export const SybTitle = styled.h4`
	text-transform: uppercase;
	color: #313037;
	font-family: 'Bebas Neue', sans-serif;
	font-size: 24px;
	font-style: normal;
	font-weight: 700;
	line-height: 64px;

	@media (max-width: 850px) {
		font-size: 20px;
	}
`;

export const StyledWrapper = styled.div`
	width: 50%;
	border: 2px solid black;
	height: 50%;
	margin: 200px auto;
	background-color: ${(props) => props.theme.palette.primary.background};
`;

export const StyledTab = styled(TabPanel)`
	color: #313037;
	font-family: 'Helios', sans-serif;
	font-size: 16px;
	font-style: normal;
	font-weight: 400;
	line-height: 32px;
	background-color: ${(props) => props.theme.palette.primary.background};

`;

export const StyledForm = styled.form`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: start;

	margin: 0 auto;
`;

export const StyledLabel = styled.label`
	width: 50%;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	color: black;
	font-size: 14px;
	font-weight: 700;
	padding: 20px 20px 20px 20px;
	margin-bottom: 2px;

	@media (max-width: 750px) {
		width: 100%;
		margin-right: 3px;
		padding: 10px;
	}
`;

export const StyledInput = styled.input`
	height: 36px;
	width: 98%;
	margin: 1px 2px;
	padding-left: 15px;
	border: 1px solid black;

	& ::-webkit-input-placeholder {
		padding: 15px;
		color: grey;
	}

	@media (max-width: 750px) {
		margin: 3px;
	}
`;

export const StyledButton = styled.button`
	display: flex;
	justify-content: center;
	align-items: center;
	margin: 10px auto 0;
	width: 25%;
	height: 40px;
	background-color: black;
	color: white;
	text-transform: uppercase;
	font-family: 'Bebas Neue', sans-serif;
	font-size: 20px;
	font-style: normal;
	padding: 5px 0;

	background-color: black;

	& a {
		color: white;
	}

	&:hover {
		background-color: grey;
	}

	@media (max-width: 850px) {
		font-size: 16px;
		width: 30%;
	}
`;

export const StyledWhiteButton = styled.button`
	display: flex;
	justify-content: center;
	align-items: center;
	margin: 10px auto 0;
	width: 25%;
	height: 40px;
	background-color: white;
	color: black;
	text-transform: uppercase;
	font-family: 'Bebas Neue', sans-serif;
	font-size: 20px;
	font-style: normal;
	padding: 5px 0;

	& a {
		color: black;
	}

	&:hover {
		background-color: grey;
	}

	@media (max-width: 850px) {
		font-size: 16px;
	}
`;
export const ProfileContainer = styled.div`
	display: flex;
	justify-content: space-between;
	width: 100%;

	@media (max-width: 750px) {
		flex-direction: column;
	}
`;

export const ButtonContainer = styled.div`
	display: flex;
	width: 100%;
	justify-content: space-between;
	text-align: right;
	margin-top: 40px;
	margin-left: auto;

	@media (max-width: 750px) {
		width: 100%;
	}
`;