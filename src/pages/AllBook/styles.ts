import { Pagination } from '@mui/material';
import styled from 'styled-components';

export const AllBookContainer = styled.div`
	max-width: 1120px;
	margin: 0 auto;
	padding: 100px 10px;
	background-color: ${(props) => props.theme.palette.primary.background};
`;

export const BookContainer = styled.div`
	width: 100%;
	display: grid;
	grid-template-columns: repeat(3, minmax(100px, 350px));

	grid-column-gap: 18px;
	grid-row-gap: 20px;
	justify-content: center;

	@media (max-width: 900px) {
		grid-template-columns: repeat(2, 1fr);
	}

	@media (max-width: 650px) {
		grid-template-columns: repeat(1, 1fr);
	}
`;

export const Title = styled.h2`
	width: 100%;
	font-family: 'Bebas Neue', sans-serif;
	text-transform: uppercase;
	font-size: 50px;
	font-style: normal;
	font-weight: 700;
	line-height: 64px;
	padding: 10px 0 20px;

	@media (max-width: 800px) {
		font-size: 40px;
		line-height: 58px;
	}

	@media (max-width: 600px) {
		font-size: 32px;
		line-height: 50px;
	}

	@media (max-width: 400px) {
		font-size: 28px;
		line-height: 40px;
	}
`;

export const StyledPagination = styled(Pagination)`
margin-top: 15px;
	display: flex;
	justify-content: center;
	align-items: center`;