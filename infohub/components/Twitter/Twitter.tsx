import { twitterUser } from 'widget-settings';
import { useTwitterImages } from './useTwitterImages';
import styles from './Twitter.module.scss';

export function Twitter() {
  const { data, isSuccess } = useTwitterImages({ twitterUser })

  return (
    <div className={styles.twitterContainer}>
      <div className={`widget ${styles.twitter}`}>
        <div className={styles.imageContainer}>
          {isSuccess && <img src={data?.images?.[0]} alt="" />}
        </div>
        <div className={styles.labelContainer}>
          <h3>@{twitterUser}</h3>
        </div>
      </div>
    </div>
  );
}
