import { Image, Row, Col, Button, ListGroup } from "react-bootstrap";
import Separator from "../Separator";
import { faker } from "@faker-js/faker/locale/ru";

import "./LeaderBoards.scss";
import { CiShare1 } from "react-icons/ci";
import { BiBorderAll } from "react-icons/bi";

const LeaderBoards = () => {
  return (
    <div>
      <Separator distance="90px" />
      <h1>Лидеры предыдущего месяца</h1>
      <div className="LeaderBoards__winners d-flex justify-content-between">
        <ListGroup style={{width: "100%", textAlign: "left"}}>
        <div style={{
            backgroundColor: "gray",
            width: "100%",
            height: "1px"}} />
          <ListGroup.Item style={{
            backgroundColor: "rgb(255 215 0 / 30%)"
          }}>
            <div className="d-flex flex-nowrap align-items-center" style={{gap: 10}}>
            <span style={{ color: "gray", marginRight: "5px" }}>#1</span>
              <Image width={30} roundedCircle src={faker.image.avatar()} />
              <p
                className="d-flex flex-nowrap align-items-center"
                style={{ margin: 0 }}
              >
                
                {faker.person.firstName()}
              </p>
            </div>
          </ListGroup.Item>

          <div
            style={{
              backgroundColor: "gray",
              width: "100%",
              height: "1px",
            //   margin: "10px auto",
            }}
          />
          <ListGroup.Item style={{
            backgroundColor: "rgb(94 94 94 / 30%)"
          }}>
            <div className="d-flex flex-nowrap align-items-center" style={{gap: 10}}>
            <span style={{ color: "gray", marginRight: "5px" }}>#2</span>
              <Image width={30} roundedCircle src={faker.image.avatar()} />
              <p
                className="d-flex flex-nowrap align-items-center"
                style={{ margin: 0 }}
              >
                
                {faker.person.firstName()}
              </p>
            </div>
          </ListGroup.Item>
          <div
            style={{
              backgroundColor: "gray",
              width: "100%",
              height: "1px",
            //   margin: "10px auto",
            }}
      />
          <ListGroup.Item style={{
            backgroundColor: "rgb(255 163 0 / 30%)"
          }}>
            <div className="d-flex flex-nowrap align-items-center" style={{gap: 10}}>
            <span style={{ color: "gray", marginRight: "5px" }}>#3</span>
              <Image width={30} roundedCircle src={faker.image.avatar()} />
              <p
                className="d-flex flex-nowrap align-items-center"
                style={{ margin: 0 }}
              >
                
                {faker.person.firstName()}
              </p>
            </div>
          </ListGroup.Item>

          {/* <ListGroup.Item style={{
            backgroundColor: "rgb(94 94 94 / 30%)"
          }}>
            <div className="d-flex flex-nowrap align-items-center" style={{gap: 10}}>
            <span style={{ color: "gray", marginRight: "5px" }}>#2</span>
              <Image width={30} roundedCircle src={faker.image.avatar()} />
              <p
                className="d-flex flex-nowrap align-items-center"
                style={{ margin: 0 }}
              >
                
                {faker.person.firstName()}
              </p>
            </div>
          </ListGroup.Item> */}
          <div
            style={{
              backgroundColor: "gray",
              width: "100%",
              height: "1px",
            //   margin: "10px auto",
            }}
      />
          <ListGroup.Item style={{
            // backgroundColor: "rgb(255 163 0 / 30%)"
          }}>
            <div className="d-flex flex-nowrap align-items-center" style={{gap: 10}}>
            <span style={{ color: "gray", marginRight: "5px" }}>#548</span>
              <Image width={30} roundedCircle src={faker.image.avatar()} />
              <p
                className="d-flex flex-nowrap align-items-center"
                style={{ margin: 0 }}
              >
                Олег (Вы)
              </p>
            </div>
          </ListGroup.Item>

          <div
            style={{
              backgroundColor: "gray",
              width: "100%",
              height: "1px",
            //   margin: "10px auto",
            }}
          />

        </ListGroup>
      </div>
      
    </div>
  );
};

export default LeaderBoards;
