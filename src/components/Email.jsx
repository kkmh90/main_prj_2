import React, { useCallback } from "react";
import useInput from "../hooks/useInput";
import emailjs from "emailjs-com";
import styled from "styled-components";

const Form = styled.form`
  margin: 0 auto;
  padding: 40px;
  width: 400px;
  background: none;
  text-align: center;

  input {
    padding: 5px 10px;
    width: 100%;
    background: none;
    border-radius: 0.2rem;
    border: 1px solid #bfbfbf;

    & + input,
    & + textarea {
      margin-top: 20px;
    }
  }

  textarea {
    padding: 5px 10px;
    width: 100%;
    min-height: 100px;
    outline: none;
    resize: none;
    ime-mode: auto;
    background: none;
    border-radius: 0.2rem;
    border: 1px solid #bfbfbf;
  }

  button {
    margin-top: 20px;
    padding: 5px 15px;
    outline: none;
    cursor: pointer;
    color: white;
    background-color: #1d4ed8;
    border: none;
    border-radius: 0.2rem;
    :hover {
      background-color: #22c55e;
    }
  }
`;

const Email = ({ closeModal }) => {
  const [name, onChangeName] = useInput("");
  const [email, onChangeEmail] = useInput("");
  const [text, onChangeText] = useInput("");
  const onSubmit = useCallback((e) => {
    e.preventDefault();

    const inputNum = e.target.childElementCount - 1; // [D] 버튼한개 제외
    const data = new FormData(e.target);
    const entries = data.entries();
    let failNum = 0;

    for (let i = 0; i < inputNum; i++) {
      const next = entries.next();
      const key = next.value[0];
      const value = next.value[1];

      if (!value) {
        failNum++;
        alert(`${key}을/를 입력해주십시오.`);
        break;
      }
    }

    if (!failNum) {
      emailjs
        .sendForm(
          "service_fbvf4hf",
          "template_o7rq7gp",
          e.target,
          "0bDdbLbXCqRFapznw"
        )
        .then(
          (result) => {
            console.log("result.text", result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );
    }
    closeModal();
  }, []);

  return (
    <Form onSubmit={onSubmit}>
      <input
        type="text"
        name="name"
        placeholder="이름"
        lang="ko"
        value={name}
        onChange={onChangeName}
      />
      <input
        type="text"
        name="email"
        placeholder="이메일"
        lang="ko"
        value={email}
        onChange={onChangeEmail}
      />

      <textarea
        name="text"
        placeholder="메시지"
        lang="ko"
        value={text}
        onChange={onChangeText}
      />

      <button type="submit" className="text-white">
        보내기
      </button>
    </Form>
  );
};

export default Email;
