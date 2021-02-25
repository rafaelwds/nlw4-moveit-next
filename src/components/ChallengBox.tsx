import styles from '../styles/components/ChallengBox.module.css'

export function ChallengBox() {
    const hasActiveChallenge = true;
    return (
        <div className={styles.challengBoxContainer}>
          { hasActiveChallenge ? (
              <div className={styles.challengeActive}>
                  <header>
                      Ganhe 400 xp
                  </header>

                  <main>
                      <img src="icons/body.svg"/>
                      <strong>Novo desafio</strong>
                      <p>Levante e faça uma caminhada de 3 minutos</p>
                  </main>
                  <footer>
                      <button
                         type="button"
                         className={styles.challengeFailedButton}
                       >
                          falhei
                      </button>
                      <button
                         type="button"
                         className={styles.challengeSucceeddButton}
                      >
                          Completei
                      </button>
                  </footer>
              </div>    
          ) : (
               <div className={styles.challengeNotActive}>
               <strong> 
                   Finalize um ciclo para receber um desafio
               </strong>
               <p>
                   <img src="icons/level-up.svg" alt="Level Up"/>
                   Avance de level completando desafios.
               </p>
            </div>
          )}
        </div>
    )
}