import styled from 'styled-components';

export const FavoriteBookContainer = styled.div`
	max-width: 1120px;
	margin: 0 auto;
	padding: 100px 30px;
	background-color: ${(props) => props.theme.palette.primary.background};
`;

export const BookContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 15px;
`;

export const Title = styled.h2`
	font-family: ''Bebas Neue', sans-serif';
	text-transform: uppercase;
	font-size: 50px;
	font-style: normal;
	font-weight: 700;
	line-height: 64px;
	padding: 10px 0 20px;

	@media (max-width: 750px) {
		font-size: 40px;
		padding: 10px 0 10px;
	}

	@media (max-width: 600px) {
		font-size: 34px;
	}
`;

export const SliderTitle = styled.div`
	margin-top: 20px;
	color: #313037;
	font-family: 'Bebas Neue', sans-serif;
	font-size: 40px;
	font-style: normal;
	font-weight: 700;
	line-height: 60px; /* 150% */
`;