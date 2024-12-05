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
        <ListGroup>
        <div
        style={{
          backgroundColor: "gray",
          width: "100%",
          height: "1px",
        //   margin: "0 auto",
        }}
      />
          <ListGroup.Item style={{
            backgroundColor: "rgb(255 215 0 / 30%)"
          }}>
            <div className="text-center">
            <span style={{ color: "gray", marginRight: "5px" }}>#1</span>
              <Image width={30} roundedCircle src={faker.image.avatar()} />
              <p
                className="d-flex flex-nowrap align-items-center"
                style={{ textAlign: "center" }}
              >
                
                {faker.person.firstName()}
                <span
                  className="LeaderBoards__medal"
                  style={{ backgroundColor: "rgb(168, 181, 209)" }}
                />
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
            <div
              className="text-center"
            //   style={{ position: "relative", top: "-50px" }}
            >
              <span style={{ color: "gray", marginRight: "5px" }}>#2</span>
              <Image width={30} roundedCircle src={faker.image.avatar()} />
              <p
                className="d-flex flex-nowrap align-items-center"
                style={{ textAlign: "center" }}
              >
                {faker.person.firstName()}
                <span
                  className="LeaderBoards__medal"
                  style={{ backgroundColor: "yellow" }}
                />
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
            <div className="text-center">
              <span style={{ color: "gray", marginRight: "5px" }}>#3</span>
              <Image width={30} roundedCircle src={faker.image.avatar()} />
              <p
                className="d-flex flex-nowrap align-items-center"
                style={{ textAlign: "center" }}
              >
                {faker.person.firstName()}
                <span
                  className="LeaderBoards__medal"
                  style={{ backgroundColor: "orange" }}
                />
              </p>
            </div>
          </ListGroup.Item>
        </ListGroup>
      </div>
      <div
        style={{
          backgroundColor: "gray",
          width: "100%",
          height: "1px",
        //   margin: "10px auto",
        }}
      />
      <p className="i-am">
        <span style={{ color: "gray" }}>#564</span>{" "}
        <Image width={30} roundedCircle src={faker.image.avatar()} /> Олег (Вы){" "}
        <CiShare1 />
      </p>
      <div
        style={{
          backgroundColor: "gray",
          width: "90%",
          height: "1px",
          margin: "10px auto",
        }}
      />
    </div>
  );
};

export default LeaderBoards;
