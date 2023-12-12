import styled from 'styled-components';

export const StyledFooter = styled('footer')`
	position: fixed;
	bottom: 0;
    color: black;
	display: flex;
	justify-content: space-around;
	align-items: center;
	max-width: 1120px;
	width: 100%;
	height: 60px;
	margin: 0 auto;
	background-color: ${(props) => props.theme.palette.primary.background};
`;