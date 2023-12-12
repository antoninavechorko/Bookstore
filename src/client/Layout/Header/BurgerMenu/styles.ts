import styled from 'styled-components';

export const BurgerMenuWrapper = styled.div`
	background-color: ${(props) => props.theme.palette.primary.background};
	display: none;

	@media (max-width: 800px) {
		position: relative;
		display: flex;
		justify-content: center;
		align-items: center;
		width: 30px;
		height: 30px;
		background-color: ${(props) => props.theme.palette.primary.background};
		transition: all 0.3s;
		margin-bottom: 5px;
	}
`;

export const StyledModal = styled.div`
	background-color: ${(props) => props.theme.palette.primary.background};
	position: fixed;
	height: 100%;
	z-index: 999;
	width: 50%;

	top: 0;
	right: 0;
	display: flex;
	justify-content: space-between;
	flex-direction: column;

	@media (max-width: 450px) {
		width: 100%;
	}
`;

export const StyledList = styled.ul`
	list-style-type: none;
	display: flex;
	flex-direction: column;
	justify-content: center;
`;

export const StyledLi = styled.li`
	padding: 35px 0;
	display: flex;
	justify-content: center;
	align-items: center;
	height: 50px;
	border-bottom: 1px solid grey;
	color: #313037;
	font-family: 'Bebas Neue', sans-serif;
	font-size: 32px;
	font-style: normal;
	font-weight: 700;
	line-height: 44px;
	text-transform: uppercase;
	& a {
		text-decoration: none;
		color: black;
	}
	&:hover {
		background-color: #f3f3f3;
	}
`;

export const StyledButton = styled.button`
	display: block;
	padding: 10px 30px;
	margin: 10px auto 30px;
`;

export const StyledSortedList = styled.ul`
	list-style-type: none;
	display: flex;
	flex-direction: column;
	justify-content: center;
	padding: 15px;
	& a {
		color: ${(props) => props.theme.palette.primary.main};
	}
`;

export const StyledLiSort = styled.li`
	display: flex;

	height: 30px;

	& a {
		text-decoration: none;
		color: ${(props) => props.theme.palette.primary.letterColor};
	}
	&:hover {
		background-color: #f3f3f3;
	}
	& .active {
		text-decoration: none;
		color: ${(props) => props.theme.palette.primary.main};
	}
`;

export const StyledButtonCart = styled.button`
	display: block;
	margin: 20px 10px;
	width: 80%;
	margin: 0 auto;
	color: white;
	background: black;
	padding: 16px 40px;
	text-transform: uppercase;
	font-family: 'Bebas Neue', sans-serif;
	font-size: 18px;
	font-style: normal;
	font-weight: 700;
	line-height: 24px;
	letter-spacing: 0.9px;

	&:hover {
		background: #5b5a62;
	}

	& a {
		color: white;
	}

	@media (max-width: 700px) {
		font-size: 14px;
	}
`;

export const StyledLiClose = styled.li`
	padding-right: 30px;
	display: flex;
	justify-content: right;
	align-items: right;
	height: 50px;
`;

export const SearchWrapper = styled.div`
	width: 90%;
	margin: 0 auto;
`;