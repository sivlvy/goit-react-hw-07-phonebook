import { ContactForm } from './ContactForm/ContactForm';
import { Container } from './Container/Container';
import { Section } from './Section/Section';
import { Filter } from './Filter/Filter';
import { ContactContent } from './ContactContent/ContactContent';
export const App = () => {
	return (
		<Section>
			<Container title="Phonebook">
				<ContactForm />
			</Container>
			<Container title="Contacts">
				<Filter />
				<ContactContent />
			</Container>
		</Section>
	);
};
