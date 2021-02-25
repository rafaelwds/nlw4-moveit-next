import styles from '../styles/components/Profile.module.css'

export function Profile() {
    return(
        <div className={styles.profileContainer}>
            <img src="https://github.com/rafaelwds.png" alt="Rafael Fernando" />
            <div>
                <strong>Rafael Fernando</strong>
                <p>
                  <img src="icons/level.svg" alt="Level"/>
                   Level 1
                 </p>
            </div>
        </div>
    )
}