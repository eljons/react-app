import React, { Component } from 'react';
import Post from './Post/component/Post';
import { Button, CardPanel, Row, Col, Input } from 'react-materialize';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min.js';
import './App.css';

class App extends Component {
  constructor(props) {
     super(props); 
     this.state = { 
       posts : [],
       newPostBody: '', 
       newPostUser: '' 
      } 
    } 
    addPost = () => { 
      // copiar el estado
    const newState = Object.assign({}, this.state);
    // incluir el nuevo mensaje
    newState.posts.push({name: this.state.newPostUser, message: this.state.newPostBody});
    // vaciar el input, solo el del mensaje, pues el usuario queremos que siga siendo el mismo para los sigs mensajes
    newState.newPostBody = '';
    // actualizar el estado
    this.setState(newState);
    } 
    handlePostEditorInputChange = (e) => {
      this.setState({
        newPostBody: e.target.value
      });

     } 
    handleUserNameInputChange = (e) => { 
      this.setState({
        newPostUser: e.target.value
      });
    }
  render() {
    return (
      <Row className="mainContainer">
      <h4>Chat App with React </h4>
        <Col s={12}>
            <CardPanel className="lighten-4 black-text">
              { this.state.posts.map((item, idx) => { 
              return (
                <Post key={idx} userName={item.name} postBody={item.message} />
              ) 
              }) }
            </CardPanel>
            <Input onChange={this.handleUserNameInputChange}  s={12} label="Tu nombre" />
            <Input onChange={this.handlePostEditorInputChange} type='textarea' label="Escribe tu mensaje" s={12}/>
            <Button onClick={this.addPost}  waves='light' node='a' large={true}> Enviar</Button>
        </Col>
    </Row>
    );
  }
}

export default App;
