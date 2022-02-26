import { useContext } from 'react';
import IncomeImg from '../../assets/income.svg';
import OutImg from '../../assets/outcome.svg';
import TotalImg from '../../assets/total.svg';
import { useTransactions } from '../../hooks/useTransactions';

import { 
    Container,
    Content,
    Header,
    Tipo,
    Icon,
    Total
} from './styles';

export function Summary(){
    const { transactions } = useTransactions();
    
    const summary = transactions.reduce((acc , transaction) => {
        if(transaction.type === 'deposit'){
            acc.deposit += transaction.amount;
            acc.total += transaction.amount;
        }else{
            acc.withdraws += transaction.amount;
            acc.total -= transaction.amount;
        }

        return acc;
    },{
        deposit: 0,
        withdraws: 0,
        total: 0,
    }); 

    return(
        <Container>
            <Content>
                <Header>
                    <Tipo>Entradas</Tipo>
                    <Icon src={IncomeImg}/>     
                </Header>
                <Total>
                    {new Intl.NumberFormat('pt-BR', {
                        style: 'currency',
                        currency: 'BRL',
                    }).format(summary.deposit)}
                </Total>
            </Content>
            <Content>
                <Header>
                    <Tipo>Saídas</Tipo>
                    <Icon src={OutImg}/>     
                </Header>
                <Total>
                   -{new Intl.NumberFormat('pt-BR', {
                        style: 'currency',
                        currency: 'BRL',
                    }).format(summary.withdraws)}
                </Total>
            </Content>
            <Content className='total'>
                <Header>
                    <Tipo>Total</Tipo>
                    <Icon src={TotalImg}/>     
                </Header>
                <Total>
                    {new Intl.NumberFormat('pt-BR', {
                        style: 'currency',
                        currency: 'BRL',
                    }).format(summary.total)}
                </Total>
            </Content>
            
        </Container>
    );
}