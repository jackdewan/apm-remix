import { V2_MetaFunction, json } from "@remix-run/node";
import { Link, Outlet, useLoaderData } from "@remix-run/react";
import { client } from "../models/contentful.server";
import Header from "~/components/Header";
import { Hero } from "~/components/Hero";
import { RecentClients } from "~/components/RecentClients";
import { Process } from "~/components/Process";
import { Experts } from "~/components/Experts";
import { CTAFullScreen } from "~/components/CTAFullScreen";
import { About } from "~/components/About";
import { RecentArticles } from "~/components/RecentArticles";

export const meta: V2_MetaFunction = () => {
  return [{ title: "Added Performance Machining" }];
};

export async function loader() {
  return json(await client.getRecentArticles());
}

export default function Index() {
  const articles = useLoaderData();
  return (
    <div>
      <Hero />
      <RecentClients />
      <Process />
      <Experts />
      <CTAFullScreen dark />
      <About />
      <RecentArticles data={articles} />
    </div>
  );
}
