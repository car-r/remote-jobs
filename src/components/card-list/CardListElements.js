import styled from "styled-components";

export const CardGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(375px, 1fr));
    grid-gap: 1.5em;
    padding-top: 1.5em;
    width: 100%;
    margin: 0;
`