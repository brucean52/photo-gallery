import React, {Dispatch, SetStateAction } from 'react';
import LinearProgress from '@mui/material/LinearProgress';
import styles from './AnnotationScoreView.module.scss';

type AnnotationScoreViewProps = {
  annotations: any[];
  height: number;
  setHoveredObjIndex: Dispatch<SetStateAction<number | null>>
}

const AnnotationScoreView: React.FC<AnnotationScoreViewProps> = (props) => {
  let rootHeight = props.height - 64;

  return (
    <div className={styles.root} style={{ height: rootHeight +'px' }}>
      {props.annotations.length && props.annotations.map((object, index) => (
        <div
          key={object['mid'] + index}
          className={styles["label-container"]}
          onMouseEnter={() => props.setHoveredObjIndex(index)}
          onMouseLeave={() => props.setHoveredObjIndex(null)}
        >
          <div className={styles["text-container"]}>
            <div>{object.hasOwnProperty('name') ? object['name']: object['description']}</div>
            <div className={styles.percentage}>{(object['score'] * 100).toFixed(2)}%</div>
          </div>
          <LinearProgress color="secondary" variant="determinate"  value={object['score'] * 100}/>
        </div>
      ))}
    </div>  
  );
};

export default AnnotationScoreView;