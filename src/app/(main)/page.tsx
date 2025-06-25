import dynamic from "next/dynamic";
import Loader from "@/components/ui/loader/Loader";

const LazyComponent = dynamic(() => import("./components/Hero"), {
  loading: () => <Loader/>,
})

export default function Home() {
    return (
      <section>
        <LazyComponent/>
      </section>
    );
  }