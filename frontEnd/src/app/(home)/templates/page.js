"use client";
import Link from "next/link";
import React, { useState } from "react";

const template = [
  {
    _id: "1",
    templateName: "/resumes/Marina-Anderson",
    templateImage: "https://i.postimg.cc/m2qKB5Jz/template1.webp",
    templateURL: "/resumes/awesome-resume",
  },
  {
    _id: "2",
    templateName: "/resumes/Denver-Dahl",
    templateImage: "https://i.postimg.cc/tJcgnyfP/template-2.png",
    templateURL: "/resumes/denver-dahl",
  },
];

const Templates = () => {
  // const [data, setData] = useState([]);
  const [hoverTemplateId, setHoverTemplateId] = useState(null);

  const handleHover = (_id) => {
    setHoverTemplateId(_id);
  };

  const handleLive = () => {
    setHoverTemplateId(null);
  };

  // useEffect(() => {
  //   fetch("http://localhost:5000/template")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setData(data);
  //     });
  // }, []);

  return (
    <div>
      <div className="m-10 flex flex-wrap justify-center gap-16">
        {template.map((item) => (
          <div
            key={item?._id}
            className="relative flex items-center justify-center"
            onMouseEnter={() => handleHover(item._id)}
            onMouseLeave={handleLive}
          >
            <Link
              href={item?.templateURL}
              className="absolute bg-green-500 p-2 uppercase text-white"
              style={{
                display: hoverTemplateId === item._id ? "block" : "none",
              }}
            >
              Use This Template
            </Link>
            <img
              src={item?.templateImage}
              width={350}
              draggable="false"
              alt={item?.templateImage}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Templates;
