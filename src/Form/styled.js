import styled from "styled-components";

export const StyledForm = styled.form`
	display: grid;
	grid-template-columns: 1fr auto;
	gap: 24px;
	padding: 15px;
	border-top: 1px solid rgb(205, 208, 210);

	@media (max-width: 700px) {
		grid-template-columns: 1fr;
	}
`;

export const Input = styled.input`
	padding: 7px;
	border: 1px solid rgb(205, 208, 210);

	&:focus,
	&:hover {
		border: 1px solid rgb(69, 69, 69);
		outline: none;
	}
`;

export const Button = styled.button`
	padding: 10px 25px;
	background: rgb(0, 128, 128);
	border: none;
	font-family: "Lato", sans-serif;
	color: rgb(255, 255, 255);
	transition: background 0.4s, transform 0.4s;

	&:hover {
		background: rgb(0, 142, 142);
	}
`;
