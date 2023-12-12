import styled from 'styled-components';
import { backgroundColor } from '../../helpers';

export const StyledItem = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	align-self: stretch;
	background-color: ${(props) => props.theme.palette.primary.background};

	& a {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		width: 100%;
	}
`;

export const StyledImg = styled.div`
	display: block;
	width: 100%;
	background-color: ${backgroundColor};

	display: flex;
	justify-content: center;
	align-items: center;

	@media (max-width: 950px) {
		width: 90%;
	}
`;
export const Image = styled.img`display: block;`;

export const StyledTitle = styled.h2`
	width: 90%;
	color: #313037;
	font-family: ''Bebas Neue', sans-serif';
	text-transform: uppercase;
	padding: 10px 0;
	font-size: 24px;
	font-style: normal;
	font-weight: 700;
	line-height: 32px;

	@media (max-width: 950px) {
		font-size: 18px;
	}
`;

export const StyledInfo = styled.div`
	width: 100%;

	@media (max-width: 950px) {
		width: 90%;
	}
`;

export const ArticleContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 10px 0;
	color: black;
`;

export const PriceContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 10px 0;
`;

export const Price = styled.div`
	color: #313037;
	font-family: 'Bebas Neue', sans-serif;
	font-size: 24px;
	font-style: normal;
	font-weight: 700;
	line-height: 32px;

	@media (max-width: 950px) {
		font-size: 20px;
		font-style: normal;
		font-weight: 700;
		line-height: 24px;
	}
`;

export const PriceDiv = styled.div`color: black;`;