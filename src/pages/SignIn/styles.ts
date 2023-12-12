import { TabPanel } from '@mui/lab';
import styled from 'styled-components';

export const StyledWrapper = styled.div`
	width: 50%;

	border: 2px solid black;
	height: 50%;

	background-color: ${(props) => props.theme.palette.primary.background};
	color: ${(props) => props.theme.palette.primary.letterColor};

	@media (max-width: 700px) {
		width: 70%;
	}

	@media (max-width: 600px) {
		width: 85%;
	}
`;

export const StyledTab = styled(TabPanel)`
	color: #313037;
	font-family: 'Helios', sans-serif;
	font-size: 16px;
	font-style: normal;
	font-weight: 400;
	line-height: 32px;
`;

export const StyledForm = styled.form`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: start;

	margin: 0 auto;
`;

export const StyledLabel = styled.label`
	width: 80%;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	padding: 15px;
	color: black;
	font-size: 14px;
	font-weight: 700;
	padding: 20px 20px 20px 20px;
`;

export const StyledInput = styled.input`
	height: 30px;
	width: 100%;
	margin: 0 auto;
	padding-left: 15px;

	& ::-webkit-input-placeholder {
		padding: 15px;
		color: grey;
	}
`;

export const Container = styled.div`
	min-height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: ${(props) => props.theme.palette.primary.background};
`;