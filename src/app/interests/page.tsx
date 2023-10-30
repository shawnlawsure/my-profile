import View from "../view"

import styles from './page.module.css'

export default function Page() {
    return (
        <View heading='Interests'>
            <section className='flex justify-center'>
                <ul className='flex flex-col gap-4'>
                    <li className={styles.interest}>Pickleball</li>
                    <li className={styles.interest}>Biking</li>
                    <li className={styles.interest}>Golf</li>
                    <li className={styles.interest}>Piano</li>
                    <li className={styles.interest}>Guitar</li>
                    <li className={styles.interest}>Reading</li>
                    <li className={styles.interest}>Baking</li>
                    <li className={styles.interest}>Cooking</li>
                    <li className={styles.interest}>Volunteering</li>
                </ul>
            </section>
        </View>
    )
}
