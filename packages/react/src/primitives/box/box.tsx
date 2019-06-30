import React from 'react';
// import styled from 'styled-components';

export interface BoxProps {}

const Box = (props: BoxProps) => <div {...props}></div>;

// Box.Element = styled.div`
//     display: grid;
//     grid-template-columns: 1fr 1fr 1fr;
//     grid-template-rows: 1fr 1fr 1fr;
//     grid-template-areas:
//         'topLeft topCenter topRight'
//         'middleLeft ... middleRight'
//         'bottomLeft bottomCenter bottomRight';
// `;

// Box.Top = styled.div`
//     grid-area: topLeft / topLeft / topLeft / topRight;
// `;

// Box.TopLeft = styled.div`
//     grid-area: topLeft;
// `;

// Box.TopCenter = styled.div`
//     grid-area: topCenter;
// `;

// Box.TopRight = styled.div`
//     grid-area: topRight;
// `;

// Box.Middle = styled.div`
//     grid-area: middleLeft / middleRight;
// `;

// Box.MiddleLeft = styled.div`
//     grid-area: middleLeft;
// `;

// Box.MiddleRight = styled.div`
//     grid-area: middleRight;
// `;

// Box.Left = styled.div`
//     grid-area: topLeft / topLeft / bottomLeft / topLeft;
// `;

// Box.Right = styled.div`
//     grid-area: topRight / bottomRight / bottomRight / BottomRight;
// `;

// Box.Bottom = styled.div`
//     grid-area: bottomLeft / bottomLeft / bottomLeft / bottomRight;
// `;

// Box.BottomLeft = styled.div`
//     grid-area: bottomLeft;
// `;

// Box.BottomCenter = styled.div`
//     grid-area: bottomCenter;
// `;

// Box.BottomRight = styled.div`
//     grid-area: bottomRight;
// `;

export default Box;
