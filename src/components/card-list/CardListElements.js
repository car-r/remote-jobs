import styled from "styled-components";

export const CardGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
    grid-gap: 1.5em;
    padding-top: 1.5em;
    width: auto;
    border: 1px solid black;
    margin: 0;
    padding-left: 0;
    padding-right: 0;
`