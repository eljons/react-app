import React from 'react';
import {  Card } from 'react-materialize';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min.js';

const Post = (props) => (
    <Card className="teal lighten-4 black-text" >
        <em>{props.userName} : </em>
        <strong>{ props.postBody } </strong>
    </Card>

);


export default Post; 