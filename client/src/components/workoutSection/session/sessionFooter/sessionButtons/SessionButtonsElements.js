import styled, { css } from "styled-components";
import { HiPlay, HiPause } from "react-icons/hi";

export const SessionButtonWrapper = styled.div`
    margin: 50px;
`;

const styledIcon = css`
    color: #Fa4d56;
    font-size: 80px;
    cursor: pointer;

    &:hover {
        color: #000;
    }
`;

export const PlayIcon = styled(HiPlay)`
    ${styledIcon};
`;

export const PauseIcon = styled(HiPause)`
    ${styledIcon};
`;
