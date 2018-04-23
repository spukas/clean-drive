import styled from 'styled-components';

export const Button = styled.button`
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border-radius: 3px;

    /* Color the border and text with theme.main */
    color: ${({ theme, color = 'primary' }) => theme.colors[color]};
    border: 2px solid ${({ theme, color = 'primary' }) => theme.colors[color]};
`;
