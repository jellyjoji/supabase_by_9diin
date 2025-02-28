import { Button } from "@/components/ui/button";
import styles from "./SideNavigation.module.scss";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

function SideNavigation() {
  return (
    <div className={styles.container}>
      <div className={styles.container__searchBox}>
        <Input
          type="text"
          placeholder="input something"
          className="focus-visible:ring-0"
        ></Input>
        <Button variant={"outline"} size="icon">
          <Search />
        </Button>
      </div>
      <div className={styles.container__buttonBox}>
        <Button className="w-full bg-transparent text-orange-500 border-orange-400 hover:bg-orange-50 hover:text-orange-500">
          Add New Page
        </Button>
      </div>
      <div className={styles.container__todos__label}>Your To Do</div>
    </div>
  );
}

export default SideNavigation;
