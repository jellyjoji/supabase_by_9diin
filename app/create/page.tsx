import React from "react";
import styles from "./page.module.scss";
import { Progress } from "@radix-ui/react-progress";
import { Button } from "@/components/ui/button";
import LabelCalendar from "../../components/common/calendar/LabelCalendar";

function create() {
  return (
    <div className={styles.container}>
      <header className={styles.container__header}>
        <div className={styles.container__header__contents}>
          <input
            type="text"
            placeholder="Enter Title Here"
            className={styles.input}
          />
          <div className={styles.progressBar}>
            <span className={styles.progressBar__status}>0/10 completed</span>
            <Progress value={33} className="w-[30%] h-2"></Progress>
          </div>
          <div className={styles.calendarBox}>
            <div className={styles.calendarBox__calendar}>
              <LabelCalendar label="from" readonly={true} />
              <LabelCalendar label="to" readonly={true} />
            </div>

            <Button
              variant={"outline"}
              className="bg-transparent text-orange-500 border-orange-400 hover:bg-orange-50 hover:text-orange-500 mt-5"
            >
              Add New Board
            </Button>
          </div>
        </div>
      </header>
      <main className={styles.container__body}>
        <div className={styles.container__body__infoBox}>
          <span className={styles.title}>There is no board yet.</span>
          <span className={styles.subTitle}>Click the button.</span>
          <button className={styles.button}>
            <span>+</span>
          </button>
        </div>
      </main>
    </div>
  );
}

export default create;
