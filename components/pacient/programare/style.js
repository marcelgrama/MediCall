import MenuList from '@material-ui/core/MenuList';
import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';
import { TextField, Select, Button } from '@material-ui/core';

export const StyledTextField = styled(TextField)`
  width: 150px !important;
  padding: 50px;
`;
export const STextField = styled(TextField)`
  padding: 5px !important;
`;
export const Password = styled(TextField)`
  width: 150px !important;
  padding: 50px;
`;
export const StyledSelect = styled(Select)`
  width: 150px !important;
`;
export const StyledButton = styled(Button)`
  width: 150px !important;
  margin-top: 50px !important;
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
