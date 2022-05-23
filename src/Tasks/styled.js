import styled, { css } from "styled-components";

export const StyledList = styled.ul`
	margin: 0;
	padding: 15px;
	border-top: 1px solid rgb(205, 208, 210);
	list-style: none;
`;

export const StyledListItem = styled.li`
	display: grid;
	grid-template-columns: auto 1fr auto;
	gap: 20px;
	align-items: center;
	margin-bottom: 20px;
	padding-bottom: 20px;
	border-bottom: 1px solid rgb(205, 208, 210);

	&:last-child {
		margin-bottom: 0;
		padding-bottom: 0;
		border-bottom: none;
	}

	${({ hidden }) =>
		hidden &&
		css`
			display: none;
		`};
`;

export const StyledButton = styled.button`
	width: 30px;
	height: 30px;
	border: none;
	transition: background 0.4s;

	${({ doneTask }) =>
		doneTask &&
		css`
			background: rgb(0, 128, 128);
			&:hover {
				background: rgb(0, 148, 148);
			}
		`};

	${({ removeTask }) =>
		removeTask &&
		css`
			background: rgb(236, 54, 54);

			&:hover {
				background: rgb(206, 47, 47);
			}
		`};
`;

export const StyledContentTask = styled.span`
	@media (max-width: 500px) {
		grid-column-start: 1;
		grid-column-end: 4;
		grid-row-start: 1;
	}

	${({ taskDone }) =>
		taskDone &&
		css`
			text-decoration: line-through;
		`}
`;