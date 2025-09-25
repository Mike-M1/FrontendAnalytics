"use client"
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Home() {

  useEffect(() => {
    console.log("navigator", navigator);
    console.log("screen", screen);
    console.log("document", document);
    console.log("window", window);
    console.log("location", location);
    console.log("history", history);
    console.log("performance", performance);
  }, []);

  return (
    <div>
      <h1>Hello World</h1>
    </div>
  )
  }
