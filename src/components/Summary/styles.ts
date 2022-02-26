import styled from 'styled-components';

export const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem; 
    margin-top: -7rem;    
`;

export const Content = styled.div`
    background-color: var(--shape);
    padding: 1.5rem 2rem;
    border-radius: 0.25rem;
    color: var(--text-title);

    &.total{
        background-color: var(--green);
    }
`;

export const Header = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const Tipo = styled.p``;

export const Icon = styled.img``;

export const Total = styled.strong`
    display: block;
    margin-top: 1rem;
    font-size: 2rem;
    font-weight: 500;

`;
