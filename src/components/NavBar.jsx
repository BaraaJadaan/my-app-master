
import { ShoppingCartOutlined } from "@material-ui/icons";

import "./Styles/NavBar.css";

import styled from "styled-components";
import { Link } from "react-router-dom";
import  { useState } from 'react';
import { alpha, makeStyles } from '@material-ui/core/styles';

import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';

import SearchIcon from '@material-ui/icons/Search';

import Sidebar from './Sidebar';

const Container = styled.div`
  height: 60px; 
  background-color:indigo;
  color:white;
  
`;
const Wrapper = styled.div`
  padding: 10px 20px;
  /* border: 1px solid white; */
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;
const Lang = styled.span`
  font-size: 14px;
  cursor: pointer;
`;
const SerachContainer = styled.div`
  border: 0.5px solid teal;
  border-radius:30px;
  background-color:white;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;
const Input = styled.input`
  border: none;
  color:blcak;
  border-radius:30px;
  background-color:white;
  `
const Center = styled.div`
  /* flex: 1; */
  text-align: center;
  cursor: pointer;
`
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
const Menuitems=styled.div`
 font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
`


const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2),
  },
  search: {
    borderRadius: '20px',
    position: 'relative',
  color:'white',
      backgroundColor: 'rgb(255, 255, 255)',
    // borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  inputInput: {
    color:'white',
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

const NavBar = () => {
 
const classes = useStyles();
  return (
    <Container>
      <Wrapper>
        <Left>
      
         <Sidebar/>
         <Link to={"/ProductList"}>
         <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase 
              placeholder="Search…"
              classes={{
                // root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
              </Link>
        </Left>
        <Center>
          <Link to={"/"}>
        <div className="font5">
          AllForOne
        </div>
        </Link>
        </Center>
        <Right>
          <Link to={"/Login"}>
            <Menuitems>REGISTER</Menuitems>
            <Menuitems>SIGN IN</Menuitems>
            </Link>
            <Menuitems>
              
            <Link to={"/cart"}>
            <Badge badgeContent={4} color="primary">
                <ShoppingCartOutlined/>
            </Badge>
            </Link>
            </Menuitems>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default NavBar;
