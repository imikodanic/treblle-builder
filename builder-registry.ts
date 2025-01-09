"use client";
import { builder, Builder } from "@builder.io/react";
import Counter from "./components/Counter/Counter";
import HeroSection from "./components/Sections/HeroSection";
import InfoSection from "~components/Sections/InfoSection";

builder.init(process.env["NEXT_PUBLIC_BUILDER_API_KEY"]!);

Builder.registerComponent(Counter, {
  name: "Counter",
  inputs: [
    {
      name: "initialCount",
      type: "number",
    },
  ],
});

Builder.registerComponent(HeroSection, {
  name: "HeroSection",
  inputs: [
    {
      name: "title",
      type: "string",
    },
    {
      name: "intro",
      type: "string",
    },
    {
      name: "buttonText",
      type: "string",
    },
    { name: "heroImage", type: "file" },
  ],
});

Builder.registerComponent(InfoSection, {
  name: "InfoSection",
  inputs: [
    {
      name: "title",
      type: "string",
    },
    {
      name: "content",
      type: "string",
    },
    { name: "image", type: "file" },
  ],
});
