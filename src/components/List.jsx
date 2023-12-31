import React from "react";
import { useDispatch } from "react-redux";
import { toggles, delets } from "../redux/modules/todos";

import { Link } from "react-router-dom";
import styled from "styled-components";

// style component 전체 및 각 태그들을 스타일링
const Body = styled.div`
    width: 250px;
    height: 170px;
    margin: 0 auto;
    padding: 14px;
    border: 4px solid #c3c4c7;
    border-radius: 16px;
    margin-bottom: 30px;
    box-shadow: 20px 20px 80px 1px #888888ad;
`;
const Title = styled.h2`
    width: 210px;
    height: 38px;
    overflow: hidden;
    margin: 0 0 12px 0;
    font-size: 26px;
`;
const Ele = styled.p`
    width: 200px;
    height: 24px;
    overflow: hidden;
    font-size: 16px;
    margin-top: -10px;
    font-weight: 600;
`;
const Btns = styled.div`
    display: flex;
    margin-top: 12px;
    justify-content: center;
    margin: 0 auto;
`;

const DelteBtn = styled.div`
    font-weight: 600;
    padding: 4px 18px 6px 18px;
    margin: 0 10px 0 0;
    border: none;
    border-radius: 5px;
    background-color: #ff8085;
    color: white;
    cursor: pointer;
    &:hover {
        background-color: #d63638;
    }
`;
const ToggleBtn = styled.div`
    font-weight: 600;
    padding: 4px 18px 6px 18px;
    margin: 0 0 0 10px;
    border: none;
    border-radius: 5px;
    background-color: #31ccab;
    color: white;
    cursor: pointer;
    &:hover {
        background-color: #00a380;
    }
`;
const P = styled.p`
    margin: 6px 6px 0 0;
    font-weight: bold;
    font-size: 12px;
    float: right;
    padding: 2px;
    border: none;
    border-radius: 5px;
    color: gray;
`;

function List({ item }) {
    // useDispatch로 action 객체 리두서로 보내기
    const dispatch = useDispatch();
    //id를 받아서 활용하려고함
    const deletOn = (id) => dispatch(delets(id));
    const toggleOn = (id) => dispatch(toggles(id));

    return (
        <Body key={item.id}>
            <Title>{item.title}</Title>
            <Ele>{item.content}</Ele>
            <Btns>
                <DelteBtn onClick={() => deletOn(item.id)}>Delete</DelteBtn>
                <ToggleBtn onClick={() => toggleOn(item.id)}>
                    {!item.isDone ? "Complete" : "Cancel"}
                </ToggleBtn>
            </Btns>
            {/* js문법이라서 ``사용 */}
            <Link to={`${item.id}`}>
                <P>Details</P>
            </Link>
        </Body>
    );
}

export default List;
