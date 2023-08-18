"use client";
import {
  Card,
  CardHeader,
  CardBody,
  Image,
  CardFooter,
} from "@nextui-org/react";

export default function StudentPage() {
  const list = [
    {
      title: "Orange",
      img: "/assets/courses/coursetwo.png",
      price: "$5.50",
    },
    {
      title: "Tangerine",
      img: "/assets/courses/coursetwo.png",
      price: "$3.00",
    },
    {
      title: "Raspberry",
      img: "/assets/courses/coursetwo.png",
      price: "$10.00",
    },
    {
      title: "Lemon",
      img: "/assets/courses/coursetwo.png",
      price: "$5.30",
    },
    {
      title: "Avocado",
      img: "/assets/courses/coursetwo.png",
      price: "$15.70",
    },
    {
      title: "Lemon 2",
      img: "/assets/courses/coursetwo.png",
      price: "$8.00",
    },
    {
      title: "Banana",
      img: "/assets/courses/coursetwo.png",
      price: "$7.50",
    },
    {
      title: "Watermelon",
      img: "/assets/courses/coursetwo.png",
      price: "$12.20",
    },
  ];

  return (
    <div className="gap-2 grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
      {list.map((item, index) => (
        <Card
          shadow="sm"
          key={index}
          isPressable
          onPress={() => console.log("item pressed")}
        >
          <CardBody className="overflow-visible p-0">
            <Image
              shadow="sm"
              radius="lg"
              width="100%"
              alt={item.title}
              className="w-full object-cover h-[140px]"
              src={item.img}
            />
          </CardBody>
          <CardFooter className="text-small justify-between">
            <b>{item.title}</b>
            <p className="text-default-500">{item.price}</p>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
