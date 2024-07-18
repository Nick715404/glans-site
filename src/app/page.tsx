import { Listing, WeddingCounter, Gallery } from "@/components";

export default function Home() {
  return (
    <main className="flex-grow container flex items-center justify-center flex-col overflow-x-hidden">
      <Listing />
      <WeddingCounter />
      <Gallery />
    </main>
  );
}
