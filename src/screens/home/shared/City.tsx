"use client";
import { useAppSelector } from "@/hook/useActions";
import { FC } from "react";



type TypeEnding = {
  [key: string]: string;
};

const City: FC = () => {
  const { location } = useAppSelector((state) => state.search);
  const cityEnding: TypeEnding = {
    Москва: "Москве",
    Сочи: "Сочи",
		"Cанкт-петербург": "Cанкт-петербургe"
  };
  return <>{cityEnding[location] || "Москве"}</>;
};

export default City;
