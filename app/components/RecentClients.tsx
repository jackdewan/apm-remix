import { Section } from "./Section";

const clients = [
  {
    title: "AA Gear",
    image: "aagear.jpg",
  },
  {
    title: "Borg Warner",
    image: "bw.jpg",
  },
  {
    title: "Classic Turning",
    image: "ct.jpg",
  },
  {
    title: "GM",
    image: "gm.jpg",
  },
  {
    title: "Metaldyne",
    image: "md.jpg",
  },
  {
    title: "Michigan Automatic",
    image: "mt.jpg",
  },
  {
    title: "US Manufacturing",
    image: "usmfg.jpg",
  },
];

export const RecentClients = () => {
  return (
    <Section title="Recent Clients">
      <div className="grid grid-cols-2 gap-2 md:grid-cols-3 lg:grid-cols-4 container">
        {clients.map((client) => (
          <div key={client.title} className="flex justify-center items-center">
            <img
              className="w-32"
              src={`/assets/img/clients/${client.image}`}
              alt={`${client.title} Logo`}
            />
          </div>
        ))}
      </div>
    </Section>
  );
};
