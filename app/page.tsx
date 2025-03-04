"use client";

import { Button } from "@/components/ui/button";
import styles from "./page.module.scss";
import { useRouter } from "next/navigation";

// rfec

function Home() {
  const router = useRouter();
  return (
    <div className={styles.container}>
      <div className={styles.container__onBoarding}>
        <span>
          <div className={styles.container__onBoarding__title}>
            How to start
          </div>
        </span>
        <div className={styles.container__steps}>
          <span>1. Create a page</span>
          <span>2. Add boards to page</span>
        </div>

        <Button
          variant={"outline"}
          className="w-full bg-transparent text-orange-500 border-orange-400 hover:bg-orange-50 hover:text-orange-500"
          onClick={() => router.push("/create")}
        >
          Button
        </Button>
      </div>
    </div>
  );
}

export default Home;
