import { StyledSection, StyledDiv, StyledH2 } from "./styled";

const Section = ({ title, body, extraHeaderContent }) => (
	<StyledSection>
		<StyledDiv>
			<StyledH2>{title}</StyledH2>
			{extraHeaderContent}
		</StyledDiv>
		{body}
	</StyledSection>
);

export default Section;
