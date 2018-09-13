import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import styled from 'styled-components';
import MenuList from '@material-ui/core/MenuList';

export const TitleTypography = styled(Typography)`
  padding: 1em;
`;

export const HeadTypography = styled(Typography)`
  color: primary;
`;

export const MenuListStyle = styled(MenuList)`
  background-clip: content-box;
  height: 530px;
  width: 180px;
`;
export const LeftGrid = styled(Grid)`
  padding: 1em;
  padding-top: 1.85em;
`;

export const RightGrid = styled(Grid)`
  background-clip: content-box;
  height: 552px;
  width: 1120px;
  padding-top: 2.4em;
  padding-bottom: 0em;
  padding-left: 0.1em;
  padding-right: 1em;
`;
