import MenuList from '@material-ui/core/MenuList';
import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import CloudDownload from '@material-ui/icons/CloudDownload';

export const CloudDownloadStyled = styled(CloudDownload)`
  && {
    padding-left: 5px;
  }
`;

export const MenuListStyle = styled(MenuList)`
  background-clip: content-box;
  height: 530px;
  width: 200px;
`;
export const LeftGrid = styled(Grid)`
  padding: 1em;
  padding-top: 1.85em;
`;

export const RightGrid = styled(Grid)`
  background-clip: content-box;
  height: 552px;
  width: 1100px;
  padding-top: 2.4em;
  padding-bottom: 0em;
  padding-left: 0.1em;
  padding-right: 1em;
`;

export const ButtonStyle = styled(Button)`
  margin-left: 100px !important;
  text-transform: none !important;
`;
