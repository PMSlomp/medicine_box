import styled, { css } from "styled-components/native"

//ESTILOS PARA "buttonAdd"
export const Container = styled.View`
    ${({theme}) => css`
        height: 100%;
        width: 100%;
        border-radius: 20px;
        flexDirection: row;
        alignItems: center;
        padding: 4px 4px 4px 4px;
        background-color: ${theme.colors.backgroundElement};
    `}
`;

export const SimbolBox = styled.View`
    ${({theme}) => css`
        height: 100%;
        aspectRatio: 1;
        borderRadius: 20px;
        alignItems: center;
        justifyContent: center;
        background-color: ${theme.colors.background};
    `}
`

export const DeleteType = styled.TouchableOpacity`
    ${({theme}) => css`
        margin-left: 10px;
        height: 90%;
        aspect-ratio: 1;
        alignItems: center;
        justifyContent: center;
        border-radius: 20px;
        background-color: ${theme.colors.background};
    `}
`

export const Simbol = styled.Text`
    ${({theme}) => css`
        fontWeight: bold;
        fontSize: 15px;
        color: ${theme.colors.backgroundElement};
    `}
`

export const NameButton = styled.Text`
    ${({theme}) => css`
        padding-right: 5px;
        margin-left: 5px;
        color: ${theme.colors.textWhite};
        border-radius: 20px;
        background-color: ${theme.colors.backgroundElement};
    `}
`
//ESTILOS PARA "listMedicine"
export const ListContainer = styled.View`
    ${({theme}) => css`
        justifyContent: center;
        padding: 0px 10px 0px 10px;
        margin-top: 5px;
    `}
`;

export const ItemList = styled.View`
    ${({theme}) => css`
        height: 50px;
        border-color: ${theme.colors.backgroundElement};
        border-width: 1px;
        border-style: solid;
        padding: 5px 10px 5px 10px;
        flexDirection: row;
        justify-content: space-between;
        backgroundColor: ${theme.colors.backgroundElement};
    `}
`;

export const ListText = styled.Text`
    ${({theme}) => css`
        color: ${theme.colors.textWhite};
    `} 
`