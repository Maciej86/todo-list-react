import styled from "styled-components";

export const StyledSection = styled.section`
	margin-bottom: 20px;
	background: rgb(255, 255, 255);
	border: 1px solid rgb(205, 208, 210);
	box-shadow: 0 0 10px rgb(190, 190, 190);
`;

export const StyledDiv = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: baseline;
	padding: 0 15px;

	@media (max-width: 700px) {
		flex-flow: column;
	}
`;

export const StyledH2 = styled.h2`
	font-size: 20px;
`;
