import styled from "styled-components";

export const CardGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(360px, 1fr));
    grid-gap: 1.5em;
    padding-top: 1.5em;
    width: 100%;
`