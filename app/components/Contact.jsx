import React from "react";
import { FaStethoscope } from "react-icons/fa";
import { Button, Input, SimpleGrid, Textarea } from "@mantine/core";
import { CiStopwatch } from "react-icons/ci";

const Contacts = [
  {
    title: "Surgical Instruments",
    description:
      "High-quality surgical instruments including scalpels, forceps, scissors, and clamps for various medical procedures.",
    logo: <FaStethoscope />,
  },
  {
    title: "Diagnostic Equipment",
    description:
      "Advanced diagnostic tools such as stethoscopes, blood pressure monitors, and otoscopes to aid in accurate patient assessments.",
    logo: <FaStethoscope />,
  },
  {
    title: "Medical Consumables",
    description:
      "A wide range of disposable medical supplies including gloves, syringes, bandages, and masks to ensure hygiene and safety.",
    logo: <FaStethoscope />,
  },
];

const Contact = () => {
  return (
    <section className="flex w-full layout-bg flex-col justify-center md:px-20 md:py-20 px-6 py-10 items-center space-y-10">
      <div className="w-full text-center">
        <h2 className="text-2xl font-bold">Get In Touch</h2>
        <p className="text-secondary py-6">
          connet with us with inquires, quotes , and leadlkfj
        </p>
      </div>
      <div>
        <SimpleGrid cols={{ base: 1, sm: 2, lg: 3 }} className="">
          {Contacts.map((item, index) => {
            return (
              <div
                style={{
                  backgroundColor: "white",
                  padding: "20px",
                  borderRadius: "10px",
                  border: "1px solid #e0e0e0",
                  marginBottom: "10px",
                }}
                className="flex text-center justify-around flex-col h-60 hover:shadow-lg p-5 space-y-3 transition-all duration-400"
                key={index}
              >
                <div className="bg-slate-200 mx-auto text-sky-700 w-10 h-10 flex justify-center rounded-md items-center">
                  {item.logo}
                </div>
                <div>
                  <h3 className="sub-heading">{item.title}</h3>
                </div>
                <div>
                  <p className="text-secondary">{item.description}</p>
                </div>
              </div>
            );
          })}
        </SimpleGrid>
      </div>
      <div className="w-full flex flex-col md:flex-row justify-between md:gap-x-10  items-start  ">
        <div className="w-full px-6 bg-white py-10 flex justify-center items-center rounded-md border border-slate-200  flex-col gap-3">
          <div className="w-full flex items-center flex-col ">
            <label className="text-sm w-full text-start   font-semibold">
              Name
            </label>
            <Input
              type="text"
              placeholder="Your Name"
              className="border border-gray-300 rounded-md   w-full "
            />
          </div>
          <div className="w-full">
            <label className="text-sm   font-semibold">Email</label>
            <Input
              type="email"
              placeholder="Your Email"
              className="border border-gray-300 rounded-md   w-full "
            />
          </div>
          <div className="w-full">
            <label className="text-sm   font-semibold">Phone</label>
            <Input
              type="phone"
              placeholder="Your Phone"
              className="border border-gray-300 rounded-md   w-full "
            />
          </div>
          <div className="w-full">
            <label className="text-sm    font-semibold">Message</label>
            <Textarea
              type="phone"
              placeholder="Your Phone"
              className="border border-gray-300 rounded-md   w-full "
            ></Textarea>
          </div>

          <Button
            style={{
              "background-color": "#005085",
            }}
            className="w-full"
          >
            Submit
          </Button>
        </div>

        <SimpleGrid cols={1} className="w-full">
          <div className="flex w-full bg-white p-6 rounded-xl border border-slate-200 mb-3  justify-start gap-x-10 items-start flex-row h-40 hover:shadow-lg  space-y-3 transition-all duration-400">
            <div className="w-10 h-10 rounded-lg bg-sky-300 flex justify-center items-center grow-0">
              <CiStopwatch className="text-black text-xl" />
            </div>
            <div>
              <h3 className="sub-heading">Address</h3>
              <p className="text-secondary">Kathmandu, Nepal</p>
              <p className="text-secondary">Street 123, Building 45</p>
              <p className="text-secondary">Street 123, Building 45</p>
            </div>
          </div>
          <div className="flex w-full bg-white p-6 rounded-xl border border-slate-200 mb-3  justify-start gap-x-10 items-start flex-col h-40 hover:shadow-lg  space-y-3 transition-all duration-400">
            <h2 className="sub-heading">Follow Us</h2>
            <div className="flex gap-x-7">
              <div className="w-10 h-10  rounded-lg bg-slate-200 flex justify-center  items-center grow-0">
                <h3>LI</h3>
              </div>
              <div className="w-10 h-10  rounded-lg bg-slate-200 flex justify-center  items-center grow-0">
                <h3>LI</h3>
              </div>
              <div className="w-10 h-10  rounded-lg bg-slate-200 flex justify-center  items-center grow-0">
                <h3>LI</h3>
              </div>
            </div>
          </div>
        </SimpleGrid>
      </div>
    </section>
  );
};

export default Contact;
