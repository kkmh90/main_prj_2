import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const ContactUs = () => {
  const form = useRef();

  const inputRef1 = useRef(null);
  const inputRef2 = useRef(null);
  const inputRef3 = useRef(null);
  const inputRef4 = useRef(null);

  const inputClear = () => {
    inputRef1.current.value = "";
    inputRef2.current.value = "";
    inputRef3.current.value = "";
    inputRef4.current.value = "";
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_fbvf4hf",
        "template_o7rq7gp",
        form.current,
        "0bDdbLbXCqRFapznw"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    inputClear();
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <div className="flex justify-between">
        {/* <div style={{ width: "40%" }}> */}
        <input
          type="text"
          name="name"
          className="p-1 mr-3 text-sm bg-white border-2 border-gray-300 placeholder:text-gray-400"
          style={{ width: "100%" }}
          placeholder="이름"
          required
          ref={inputRef1}
        />
        {/* </div> */}

        {/* <div style={{ width: "60%" }} className="ml-3"> */}
        <input
          type="text"
          name="email"
          className="p-1 text-sm bg-white border-2 border-gray-300 placeholder:text-gray-400 "
          style={{ width: "100%" }}
          placeholder="이메일"
          required
          ref={inputRef2}
        />
        {/* </div> */}
      </div>

      <div>
        <div>
          <input
            type="text"
            name="title"
            className="p-1 mt-3 text-sm bg-white border-2 border-gray-300 placeholder:text-gray-400"
            style={{ width: "100%" }}
            placeholder="제목"
            required
            ref={inputRef3}
          />
        </div>
        <div>
          <textarea
            name="text"
            cols="30"
            rows="10"
            required
            className="h-40 p-1 mt-3 text-sm bg-white border-2 border-gray-300 resize-none placeholder:text-gray-400"
            style={{ width: "100%" }}
            placeholder="내용"
            ref={inputRef4}
          ></textarea>
        </div>
      </div>
      <div className="flex justify-center">
        <button
          type="submit"
          className="w-32 h-10 mt-3 text-sm font-bold text-white bg-red-500 rounded-3xl hover:bg-red-600"
        >
          보내기
        </button>
      </div>
    </form>
  );
};

export default ContactUs;
