import React from 'react';
import { Container } from 'react-bootstrap'

export const ContainerLayout = (props) => (
    <Container>
        {props.children}
    </Container>
)
