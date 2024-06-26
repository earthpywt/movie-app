import styles from "./topmenu.module.css";
import Image from "next/image";
import TopMenuItem from "./TopMenuItem";

export default function TopMenu() {
    return (
        <div className={styles.menucontainer}>
            <TopMenuItem title="Watchlist" pageRef="/watchlist" />
        </div>
    );
}
