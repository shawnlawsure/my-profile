import View from "../view"

import styles from './page.module.css'

export default function Page() {
    return (
        <View heading='Portfolio'>
            <section className={styles.section}>
				<h3>Latest Projects</h3>
                <ul className={styles.list}>
                    <li className={styles.listItem}>
						<h4 className={styles.title}>My Profile Page</h4>
						<span className={styles.descriptiobn}>The web page you are currently looking at was created by me using the latest version of Next. You may find the code for it <a className={styles.link} href='https://github.com/shawnlawsure/my-profile' target="_blank">here</a>.</span>
					</li>
                </ul>
            </section>
            <section className={styles.section}>
				<h3>Archived Projects</h3>
                <ul className={styles.list}>
                    <li className={styles.listItem}>
						<h4 className={styles.title}>Stamp Collector&apos;s Album (Front-end) - React/Redux</h4>
						<span className={styles.descriptiobn}>The frontend for a SPA written in React and Redux.  The app is intended to be used by stamp collectors to catalog and display their stamp collection. You may find the code for it <a className={styles.link} href='https://github.com/shawnlawsure/stamp' target="_blank">here</a>.</span>
					</li>
                    <li className={styles.listItem}>
						<h4 className={styles.title}>Stamp Collector&apos;s Album (Back-end) - Node.js/MySQL</h4>
						<span className={styles.descriptiobn}>The backend for a SPA using Node.js and MySQL that exposes a REST api. You may find the code for it <a className={styles.link} href='https://github.com/shawnlawsure/stamp-node' target="_blank">here</a>.</span>
					</li>
                    <li className={styles.listItem}>
						<h4 className={styles.title}>Zenith Controls - TypeScript</h4>
						<span className={styles.descriptiobn}>A suite of web UI controls written in TypeScript.  Includes the following controls: Calendar, CheckBoxList, DropDown, Grid, ListBox, and TextBox. You may find the code for it <a className={styles.link} href='https://github.com/shawnlawsure/zenith-controls' target="_blank">here</a>.</span>
					</li>
                </ul>
            </section>
            <section className={styles.section}>
				<h3>Archived Publications</h3>
                <ul className={styles.list}>
                    <li className={styles.listItem}>
						<h4 className={styles.title}>Modularization and Encapsulation in JavaScript</h4>
						<a className={styles.link} href='https://codeproject.com/Articles/1208822/Modularization-and-Encapsulation-in-JavaScript' target="_blank">https://codeproject.com/Articles/1208822/Modularization-and-Encapsulation-in-JavaScript</a>
					</li>
                    <li className={styles.listItem}>
						<h4 className={styles.title}>Beginning ReactJS By Example</h4>
						<a className={styles.link} href='https://codeproject.com/Articles/1227248/Beginning-ReactJS-By-Example' target="_blank">https://codeproject.com/Articles/1227248/Beginning-ReactJS-By-Example</a>
					</li>
                    <li className={styles.listItem}>
						<h4 className={styles.title}>Knockout Code with KnockoutJS</h4>
						<a className={styles.link} href='https://codeproject.com/Articles/1056775/Knockout-Code-with-KnockoutJS' target="_blank">https://codeproject.com/Articles/1056775/Knockout-Code-with-KnockoutJS</a>
					</li>
                    <li className={styles.listItem}>
						<h4 className={styles.title}>Easy JavaScript Generic List Implementation</h4>
						<a className={styles.link} href='https://codeproject.com/Tips/378906/Easy-JavaScript-Generic-List-Implementation' target="_blank">https://codeproject.com/Tips/378906/Easy-JavaScript-Generic-List-Implementation</a>
					</li>
                </ul>
            </section>
        </View>
    )
}
