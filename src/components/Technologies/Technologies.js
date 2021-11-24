import React from 'react';
import { DiDatabase, DiFirebase, DiMysql, DiPython, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () => (
	<Section id='tech'>
		<SectionDivider />
		<br/>
		<SectionTitle>Technologies</SectionTitle>
		<SectionText>
			Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla suscipit ornare dui, nec efficitur magna ultrices id. Aenean iaculis ex sem, vel varius dolor semper sed.
		</SectionText>
		<List>
			<ListItem>
				<DiReact size='3rem' />
				<ListContainer>
					<ListTitle>Front End</ListTitle>
					<ListParagraph>
						Experience with <br/>
						React.js <br/>
						Knockout.js
					</ListParagraph>
				</ListContainer>
			</ListItem>
			<ListItem>
				<DiReact size='3rem' />
				<ListContainer>
					<ListTitle>Machine Learning</ListTitle>
					<ListParagraph>
						Experience with <br/>
						Python <br />
						Tensorflow
					</ListParagraph>
				</ListContainer>
			</ListItem>
			<ListItem>
				<DiDatabase size='3rem' />
				<ListContainer>
					<ListTitle>Database</ListTitle>
					<ListParagraph>
						Experience with <br/>
						Google Bigquery <br/>
						Neo4j <br/>
						Memgraph 
					</ListParagraph>
				</ListContainer>
			</ListItem>
		</List>
	</Section >
);

export default Technologies;
