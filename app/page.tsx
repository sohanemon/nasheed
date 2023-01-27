import { Poppins } from "@next/font/google";

const poppins = Poppins({ subsets: ["latin"], weight: "400" });

export default function Home() {
  return (
    <main className={poppins.className}>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum itaque
      aliquam possimus doloribus facilis, soluta repellendus enim molestias unde
      voluptate quo optio impedit inventore debitis veniam laborum magni,
      asperiores recusandae.
    </main>
  );
}
