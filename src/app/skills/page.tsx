import View from "../view"

import styles from './page.module.css'

export default function Page() {
    return (
        <View heading='Skills'>
                <section className={styles.heading}>
                    <h3>Front-End</h3>
                    <ul className={styles.group}>
                        <li className={styles.skill}>JavaScript</li>
                        <li className={styles.skill}>TypeScript</li>
                        <li className={styles.skill}>React</li>
                        <li className={styles.skill}>Redux</li>
                        <li className={styles.skill}>Next.js</li>
                        <li className={styles.skill}>Vue.js</li>
                        <li className={styles.skill}>Vuex</li>
                        <li className={styles.skill}>Nuxt.js</li>
                        <li className={styles.skill}>jQuery</li>
                        <li className={styles.skill}>Tailwind</li>
                        <li className={styles.skill}>CSS</li>
                        <li className={styles.skill}>HTML</li>
                        <li className={styles.skill}>Bootstrap</li>
                        <li className={styles.skill}>JSON</li>
                        <li className={styles.skill}>AJAX</li>
                        <li className={styles.skill}>Webpack</li>
                        <li className={styles.skill}>Webpack Module Federation</li>
                        <li className={styles.skill}>REST</li>
                        <li className={styles.skill}>Jest</li>
                    </ul>
                </section>

                <section className={styles.heading}>
                    <h3>Back-End</h3>
                    <ul className={styles.group}>
                        <li className={styles.skill}>C#</li>
                        <li className={styles.skill}>.NET</li>
                        <li className={styles.skill}>ASP.NET</li>
                        <li className={styles.skill}>VB.NET</li>
                        <li className={styles.skill}>XAML</li>
                        <li className={styles.skill}>XSLT</li>
                    </ul>
                </section>

                <section className={styles.heading}>
                    <h3>Database</h3>
                    <ul className={styles.group}>
                        <li className={styles.skill}>SQL</li>
                        <li className={styles.skill}>SQL Server</li>
                        <li className={styles.skill}>MySQL</li>
                    </ul>
                </section>

                <section className={styles.heading}>
                    <h3>Tools</h3>
                    <ul className={styles.group}>
                        <li className={styles.skill}>Jira</li>
                        <li className={styles.skill}>Git</li>
                        <li className={styles.skill}>SVN</li>
                        <li className={styles.skill}>Visual Studio</li>
                        <li className={styles.skill}>Visual Studio Code</li>
                    </ul>
                </section>
        </View>
    )
}