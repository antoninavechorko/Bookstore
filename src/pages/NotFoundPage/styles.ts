import styled from 'styled-components';

export const Container = styled.div`
	min-height: 100vh;
	font-size: 400px;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: ${(props) => props.theme.palette.primary.background};
`;