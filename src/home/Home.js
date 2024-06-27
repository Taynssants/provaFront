import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { useNavigate } from "react-router-dom";
import { Container, Button, Card, Row } from 'react-bootstrap'
import ProdutoService from '../servicos/ProdutoService';


function Home(props) {
  const navigate = useNavigate();
  
  return (
    <div>Home
      <Container>

        <Button onClick={()=>navigate("/adiciona")}>Criar produto</Button>

        <Row>

        <Card>
        <Card.Img variant="top" src="https://revista.abrale.org.br/wp-content/uploads/2017/05/imagem-jabuticaba.jpg" />
      <Card.Body>
        <Card.Title value="id"></Card.Title>
        <Card.Text>
          Preço: R$200,00
        </Card.Text>
        <Button variant="primary">Editar</Button>
        <Button variant="danger">Excluir</Button>
      </Card.Body>
        </Card>

        <Card>
        <Card.Img variant="top" src="https://phygital-files.mercafacil.com/primo/uploads/produto/morango_caixa_250g_79504c1c-da3a-4e6c-a9a6-36e3f5bad65b.png" />
      <Card.Body>
        <Card.Title>Morango</Card.Title>
        <Card.Text>
          R$8,00 a caixinha
        </Card.Text>
        <Button variant="primary">Editar</Button>
        <Button variant="danger">Excluir</Button>
      </Card.Body>
        </Card>
        </Row>
      </Container>
    </div>

  )
}

Home.propTypes = {}

export default Home