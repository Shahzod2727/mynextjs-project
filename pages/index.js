import React, { useState, useEffect } from "react";
import MeetupList from "../components/meetups/MeetupList";
import { MongoClient } from "mongodb";


export default function HomePage(props) {
  return <MeetupList meetups={props.meetups} />;
}




export async function getStaticProps(props) {
  const client = await MongoClient.connect(
    "mongodb+srv://shaxzod:shaxzod27@cluster0.1bcrt.mongodb.net/meetups?retryWrites=true&w=majority"
  );
  const db = client.db();

  const meetupsCollection = db.collection("meetups");

  const meetups = await meetupsCollection.find().toArray();

  client.close();

  return {
    props: {
      meetups: meetups.map((meetup) => ({
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
        id: meetup._id.toString(),
      })),
    },
    revalidate: 1,
  };
}
