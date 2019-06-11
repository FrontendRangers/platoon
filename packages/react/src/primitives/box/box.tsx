import styled from 'styled-components';

export const Box = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    grid-template-areas:
        'topLeft topCenter topRight'
        'middleLeft ... middleRight'
        'bottomLeft bottomCenter bottomRight';

    && > * {
        /* outline: 1px solid rebeccapurple; */
        /* text-align: center; */
    }
`;

export const Top = styled.div`
    grid-area: topLeft / topLeft / topLeft / topRight;
`;

export const TopLeft = styled.div`
    grid-area: topLeft;
`;

export const TopCenter = styled.div`
    grid-area: topCenter;
`;

export const TopRight = styled.div`
    grid-area: topRight;
`;

export const Middle = styled.div`
    grid-area: middleLeft / middleRight;
`;

export const MiddleLeft = styled.div`
    grid-area: middleLeft;
`;

export const MiddleRight = styled.div`
    grid-area: middleRight;
`;

export const Left = styled.div`
    grid-area: topLeft / topLeft / bottomLeft / topLeft;
`;

export const Right = styled.div`
    grid-area: topRight / bottomRight / bottomRight / BottomRight;
`;

export const Bottom = styled.div`
    grid-area: bottomLeft / bottomLeft / bottomLeft / bottomRight;
`;

export const BottomLeft = styled.div`
    grid-area: bottomLeft;
`;

export const BottomCenter = styled.div`
    grid-area: bottomCenter;
`;

export const BottomRight = styled.div`
    grid-area: bottomRight;
`;
