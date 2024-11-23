import styles from './not-found-view.module.scss'
import { useNavigate } from 'react-router-dom'
import { useDate } from '@/app/hooks'

import { CustomLink, StandardButton } from '@/ui'
import { useTranslation } from 'react-i18next'
import { LessonsLegend } from '@/components/SchedulerControl'

const NotFoundView = () => {
  const navigate = useNavigate()
  const currentDate = useDate()
  const { i18n, t } = useTranslation()
  const tPath = 'views.not-found-view'
  const currentLanguage = i18n.language
  const locales: { [key: string]: string } = {
    en: 'en-US',
    ru: 'ru-RU',
  }
  const getLocale = (language: string): string => locales[language] || 'en-US'

  return (
    <>
      <div className={styles['not-found-view']}>
        <div className={`${styles['block']} ${styles['block1']}`}>
          <div className={styles['back-button-date-wrapper']}>
            <StandardButton
              buttonText={ t(`${tPath}.block1.go-back-btn-text`) }
              onClick={() => navigate(-1)}
              width='318px'
              height='100%'
              padding='10px 40px'
            />
            <div className={styles['project-date-info']}>
              <span>{ t(`${tPath}.block1.date-info-text`) }</span>
              <span className={styles['date-time']}>
                {`
                  ${new Date(currentDate).toLocaleString(
                    getLocale(currentLanguage),
                    { day: 'numeric', month: 'long', year: "numeric" })},
                  ${new Date(currentDate).toLocaleTimeString(
                    getLocale(currentLanguage),
                    { timeZone: 'UTC', hour12: false, hour: '2-digit', minute: '2-digit' })}
                `}
              </span>
            </div>
          </div>
        </div>

        <div className={`${styles['block']} ${styles['block2']}`}>
          <section>
            <h2 style={{ paddingTop: '12px' }}>{ t(`${tPath}.block2.intro.title`) }</h2>
            <p>{ t(`${tPath}.block2.intro.intro-text`) }</p>
            <p style={{ whiteSpace: "pre-line "}}>
              { t(`${tPath}.block2.intro.description-text`) }
            </p>
          </section>

          <section>
            <h2>{ t(`${tPath}.block2.available-users.title`) }</h2>
            <ul className={styles['available-users']}>
              <li><span>mike123@mail.com</span> / <span>mike123</span></li>
              <li><span>anna321@mail.com</span> / <span>anna321</span></li>
            </ul>
          </section>

          <section>
            <h2>{ t(`${tPath}.block2.stack.title`) }</h2>
            <ul>
              <li>{ t(`${tPath}.block2.stack.programming-language`) }</li>
              <li>{ t(`${tPath}.block2.stack.framework`) }</li>
              <li>{ t(`${tPath}.block2.stack.state-manager`) }</li>
              <li>{ t(`${tPath}.block2.stack.stylization`) }</li>
            </ul>
          </section>

          <section className={styles['useful-links']}>
            <div className={styles['links']}>
              <CustomLink
                to='https://github.com/high489/sirius-future-test-task'
                text={ t(`${tPath}.block2.intro.github-link-text`) }
                target='_blank'
                customStyles={{
                  link: styles['link']
                }}
              />
              <CustomLink
                to='https://high489.github.io/portfolio-frontend/'
                text={ t(`${tPath}.block2.intro.portfolio-link-text`) }
                target='_blank'
                customStyles={{
                  link: styles['link']
                }}
              />
            </div>
          </section>
        </div>

        <div className={`${styles['block']} ${styles['block3']}`}>
          <section>
            <h2 style={{ paddingTop: '12px' }}>
              { t(`${tPath}.block3.student-dashboard-description.title`) }
            </h2>
            <p>
              { t(`${tPath}.block3.student-dashboard-description.text`) }
              <CustomLink
                to='/'
                text={ t(`${tPath}.block3.student-dashboard-description.link-text`) }
                customStyles={{
                  link: styles['link']
                }}
              />
            </p>
          </section>
          
          <section>
            <h2>{ t(`${tPath}.block3.schedule-description.title`) }</h2>
            <p>
              { t(`${tPath}.block3.schedule-description.text`) }
              <CustomLink
                to='/schedule'
                text={ t(`${tPath}.block3.schedule-description.link-text`) }
                customStyles={{
                  link: styles['link']
                }}
              />
            </p>
            <p style={{ marginBottom: '6px' }}>
              { t(`${tPath}.block3.schedule-description.legend-title`) }
            </p>
            <LessonsLegend />
          </section>
        </div>
      </div>
    </>
  )
}

export { NotFoundView }