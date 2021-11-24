import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
	<Section row nopadding>
		<LeftSection>
			<SectionTitle main center>
				Welcome To <br />
				My Personal Portfolio
			</SectionTitle>
			<SectionText>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla suscipit ornare dui, nec efficitur magna ultrices id. Aenean iaculis ex sem, vel varius dolor semper sed. Curabitur ac fermentum sem. Integer vitae viverra massa.
			</SectionText>
			<Button onClick={() => window.location = '#'}>
				Learn More
			</Button>
		</LeftSection>
	</Section>
);

export default Hero;