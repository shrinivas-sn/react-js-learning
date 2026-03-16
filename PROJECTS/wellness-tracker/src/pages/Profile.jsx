import styles from "./Profile.module.css";
export default function Profile() {
  const profile = JSON.parse(localStorage.getItem("dailyLog")) || [];
  console.log(profile);
  return (
    <div className={styles.container}>
      <h1>Profile Page</h1>
      <div className={styles.profilecard}>
        <div>{profile[0].name}'s profile details</div>
        <div className={styles.profilephoto}></div>
        <div>Member since {profile[0].date}</div>
      </div>
    </div>
  );
}
