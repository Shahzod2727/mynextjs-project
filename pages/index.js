import React from "react";
import MeetupList from "../components/meetups/MeetupList";

export default function HomePage() {
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
  return <MeetupList meetups={DUMMY_MEETUPS} />;
}
