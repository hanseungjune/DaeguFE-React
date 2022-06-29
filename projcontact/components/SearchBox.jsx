import React from 'react';
import {Form, Button, Row, Col} from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import '../App.css';

const SearchBox = () => {
  return (
    <Row>
      <Col lg={10}>
        <Form.Label>Search Name</Form.Label>
        <Form.Control type="text" placeholder="이름을 입력해주세요" />
      </Col>
      <Col lg={2}>
        <Button id="search_btn">찾기</Button>
      </Col>
    </Row>
  );
};

export default SearchBox;
