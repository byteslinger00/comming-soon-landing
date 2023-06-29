import Link from "next/link";
import Layout from "../components/Layout";
import RemainTime from "../components/remainTime";
import {useEffect, useState} from 'react'
import Image from 'next/image'

const IndexPage = () => {
  const [day, setDay] = useState(0);
  const [hour, setHour] = useState(0);
  const [mins, setMins] = useState(0);
  const [secs, setSecs] = useState(0);
  
  const calc = () => {
    const now = new Date().getTime();
    const futureDate = new Date('30 Jun 2023 24:00:00').getTime();

    const timeleft = futureDate - now;

    const d = Math.floor( timeleft / (1000 * 60 * 60 * 24));
    const h = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const m = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
    const s = Math.floor((timeleft % (1000 * 60)) / 1000);
    setDay(d);
    setHour(h);
    setMins(m);
    setSecs(s);
  }
  useEffect(()=>{
    calc();
    setInterval(()=>{
      calc();
    },1000);
  },[])

  return (
  <Layout title="Coming Soon - Isotope">
    <img
      src="/images/xera.svg"
      alt="Themeptation "
      className="absolute h-96 -top-20 -right-16 lg:right-5 lg:top-10 animate-blob"
    />
    <img
      src="/images/shapes.svg"
      alt="hero"
      className="absolute w-full left-24 bottom-24 animate-blob2"
    />
    <div className="relative z-10 py-6 space-y-16 lg:space-y-32 text-gray-900">
      <div className="text-center space-y-10">
        <h3 className="font-light text-xl uppercase tracking-wider">
          Coming soon
        </h3>
        <h1 className="text-7xl lg:text-9xl font-extrabold">In Progress</h1>
        <p className="text-xl lg:text-2xl tracking-wide mx-10 lg:max-w-xl lg:mx-auto">
          We`re under construction. Check back for an update soon. Stay in
          touch!
        </p>
      </div>
    </div>
    <div className="flex flex-row gap-5">
      <RemainTime value={day} limit={31} title="Days" color="204, 0, 102"/>
      <RemainTime value={hour} limit={24} title="Hours" color="0, 102, 0"/>
      <RemainTime value={mins} limit={60} title="Mins" color="102, 102, 255"/>
      <RemainTime value={secs} limit={60} title="Secs" color="0, 204, 255"/>
    </div>  
    <div className="my-[50px] flex flex-row gap-[100px] z-[1000]">
      <Link href="#">
        <div className="cursor-pointer">
          <Image src="/images/applestore.png" width={150} height={50} alt="apple store" />
        </div>
      </Link>
      <Link href="#">
        <div className="cursor-pointer">
          <Image src="/images/googlestore.png" width={150} height={50} alt="google store" />
        </div>
      </Link>
    </div>
    <div className="fixed bottom-0 text-center bg-[rgb(230,255,255)] w-full pt-2">
      <Image src="/images/brand.svg" width={150} height={30} alt="google store" />
    </div>
  </Layout>
  );
}

export default IndexPage;
