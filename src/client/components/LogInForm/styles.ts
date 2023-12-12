import { TabPanel } from '@mui/lab';
import styled from 'styled-components';

export const StyledWrapper = styled.div`
	width: 50%;
	border: 2px solid black;
	height: 50%;
	margin: 200px auto;

	@media (max-width: 700px) {
		width: 70%;
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
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	padding: 15px;
	color: black;
	font-size: 14px;
	font-weight: 700;
	padding: 20px 20px 20px 20px;

	@media (max-width: 600px) {
		padding: 10px;
	}
`;

export const StyledInput = styled.input`
	height: 30px;
	width: 100%;
	margin: 0 auto;
	padding-left: 15px;
	border: 1px solid black;

	& ::-webkit-input-placeholder {
		padding: 15px;
		color: grey;
	}

	@media (max-width: 500px) {
		padding-left: 10px;
		font-size: 12px;
	}

	@media (max-width: 430px) {
		padding-left: 4px;
		font-size: 10px;
	}
`;

export const StyledButton = styled.button`
	display: inline-block;
	margin: 10px auto 0;
	width: 90%;
	height: 40px;
	background-color: black;
	color: white;
	text-transform: uppercase;
	font-family: 'Bebas Neue', sans-serif;
	font-size: 20px;
	font-style: normal;
	padding: 5px 0;

	&:hover {
		background-color: grey;
	}

	@media (max-width: 850px) {
		font-size: 16px;
	}

	@media (max-width: 650px) {
		font-size: 14px;
	}
`;