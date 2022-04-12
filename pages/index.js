import React, { useState, useEffect } from "react";
import MeetupList from "../components/meetups/MeetupList";
// import Layout from "../components/layout/Layout";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "A First Meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Thomas_Wolfe%27s_Home.jpg/1280px-Thomas_Wolfe%27s_Home.jpg",
    address: "Some address 5, 12345 SomeCity",
    description: "some data",
  },
  {
    id: "m2",
    title: "A Second Meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Thomas_Wolfe%27s_Home.jpg/1280px-Thomas_Wolfe%27s_Home.jpg",
    address: "Some address 5, 12345 SomeCity",
    description: "some data",
  },
];

export default function HomePage(props) {
  return <MeetupList meetups={props.meetups} />;
}

export async function getStaticProps(props) {
  // const res = await fetch('https://.../posts')
  // const posts = await res.json()

  return {
    props: {
      meetups: DUMMY_MEETUPS,
    },
    revalidate: 10,
  };
}
