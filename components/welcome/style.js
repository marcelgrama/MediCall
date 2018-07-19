import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import styled from 'styled-components';

export const ButtonStyle = styled(Button)`
  padding-left: 100px !important;
`;

export const InnerGrid = styled(Grid)`
  padding: 20px;
`;

export const ProgressWrapper = styled.div`
  height: 5px;
`;

export const StyledPaper = styled(Paper)`
  width: 280px;
`;

export const StyledLink = styled.a`
  text-align: center;
  display: block;
  cursor: pointer;
`;
