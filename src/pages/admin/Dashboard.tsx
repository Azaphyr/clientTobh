import styles from "../../styles/Dashboard.module.scss"
import DashboardSideMenu from "../../components/admin/DashboardSideBar"
import {Tables} from "../../components/admin/Tables"

export default function Dashboard() {
  return (
    <div className={styles.container}>
      <DashboardSideMenu/>
      <main className={styles.main}>
        <Tables/>
      </main>
      
    </div>
  );
}
