import styled from 'styled-components';
import { backgroundColor } from '../../helpers';

export const StyledItem = styled.div`
	width: 100%;
	display: flex;

	justify-content: space-between;
`;

export const CartBookContainer = styled.div`
	display: flex;
	justify-content: space-between;
	gap: 30px;
	width: 75%;

	@media (max-width: 750px) {
		width: 85%;
	}

	@media (max-width: 600px) {
		flex-direction: column;
		width: 100%;
	}
`;

export const StyledImg = styled.div`
	max-width: 300px;
	background-color: ${backgroundColor};
	height: 280px;
	display: flex;
	justify-content: center;
	align-items: center;

	@media (max-width: 600px) {
		margin: 0 auto;
	}
`;
export const Image = styled.img`
	display: block;
	height: 250px;
`;

export const StyledCartBookInfo = styled.div`max-width: 670px;`;

export const StyledTitle = styled.h2`
	color: #313037;
	font-family: 'Bebas Neue', sans-serif;
	text-transform: uppercase;
	padding: 10px 0;
	font-size: 24px;
	font-style: normal;
	font-weight: 700;
	line-height: 32px;

	@media (max-width: 850px) {
		font-size: 20px;
		line-height: 28px;
	}
`;

export const StyledInfo = styled.div`width: 100%;`;

export const ArticleContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 10px 0;
	color: #a8a8a8;
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
`;

export const PriceDiv = styled.div`color: black;`;

export const AmountContainer = styled.div`
	display: flex;
	width: 150px;
	margin: 0 auto;
	justify-content: space-between;
	align-items: center;
`;