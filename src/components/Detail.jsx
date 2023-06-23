import React from "react";
import { useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import Style from "./Style";
import styled from "styled-components";

const Body = styled.div`
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Div = styled.section`
    width: 850px;
    height: 250px;
    padding: 40px;
    border: 5px double #3582c4;
    border-radius: 20px;
    background-color: #f0f0f1;
`;

const Inner = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const Btn = styled.button`
    float: right;
    margin-top: -20px;
    font-size: 20px;
    color: white;
    font-weight: 600;
    background-color: #2271b1;
    padding: 6px 24px 6px 24px;
    border: 3px solid #2271b1;
    border-radius: 10px;
`;

function Detail() {
    const todos = useSelector((state) => state.todos);
    const params = useParams();

    const navigate = useNavigate();

    const foundData = todos.find((item) => item.id === params.id);
    //id 찾아
    return (
        <>
            <Style />
            <Body>
                <Div>
                    <Inner>
                        <span>ID : {foundData.id}</span>
                    </Inner>
                    <div>
                        <h1>{foundData.title}</h1>
                        <p>{foundData.content}</p>
                    </div>
                    <Btn onClick={() => navigate("/")}>Home</Btn>
                </Div>
            </Body>
        </>
    );
}

export default Detail;