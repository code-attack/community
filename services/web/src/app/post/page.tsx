import { Text } from "@/components/common/text";
import { Header } from "@/components/common/header";
import Image from "next/image";
import { Footer } from "@/components/common/footer";
import { Card } from "@/components/common/card";

export default () => {
  return (
    <>
      <Header />
      <main className="m-auto w-[1192px] px-4">
        <Text.title1 className="mt-32 mb-8">포스팅</Text.title1>
        <div className="flex flex-wrap gap-6 gap-y-7"></div>
        <Card.Basic
          {...{
            thumbnail: "",
            name: "fdsfdsf",
            date: "dfsdfdsfdsf",
            title: "ddddsfdsfdsfsd",
            content:
              "wkdmewkdmkewdmlwemdlwkdmewkdmkewdmlwemdlwkdmewkdmkewdmlwemdl",
            profile: "",
          }}
        />
      </main>
      <Footer />
    </>
  );
};
