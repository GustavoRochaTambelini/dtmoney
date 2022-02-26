import logoImg from '../../assets/logo.svg';

import {
    Container,
    Content,
    Logo,
    Button
} from './styles';

interface HeaderProps {
    onTrasactionModalOpen: () => void;
}

export function Header({ onTrasactionModalOpen } : HeaderProps){
    return(
        <Container>
            <Content>
                <Logo src={logoImg} alt="dt money"/>
                <Button type="button" onClick={onTrasactionModalOpen}>Nova Transação</Button>
            </Content>       
        </Container>
    );
}