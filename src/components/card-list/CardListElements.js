import styled from "styled-components";

export const CardGrid = styled.div`
    display: grid;
    margin: 0 auto;
    grid-template-columns: repeat(auto-fit, minmax(425px, 1fr));
    grid-gap: 1.5em;
    padding-top: 1.5em;
`