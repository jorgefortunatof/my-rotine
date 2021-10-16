import React from 'react';

import Button from '../../components/Button';
import {
	Container,
	Content,
	Logo,
	Title,
	Description,
	Tip,
	Footer
} from './styles';

const Welcome: React.FC = () => {
	return (
		<Container>

			<Content>
				<Logo />
				<Title>Bem-vindo ao MyRotine</Title>
				<Description>
					o aplicativo que vai melhorar sua produtividade e te ajudar a alcançar seus obejetivos
				</Description>
			</Content>

			<Footer>
				<Tip>clique em iniciar para prosseguir</Tip>
				<Button onPress={() => { }} title="Iniciar" />
			</Footer>
		</Container>
	);
}

export default Welcome;
