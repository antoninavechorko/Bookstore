import { IconButton } from '@mui/material';
import styled from 'styled-components';

export const StyledInputContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	position: relative;
`;

export const StyledInput = styled.input`
	width: 90%;
	padding: 10px;
	border: 1px solid #d9d9d9;
	margin-left: 10px;

	@media (max-width: 800px) {
		width: 80%;
	}
`;

export const StyledIconButton = styled(IconButton)`
position: absolute;
right: 60px`;