import * as styles from './Square.css';
import type { MandalartType } from '../Mandalart';

export interface SquareProps {
  children: React.ReactNode;
}

export interface CellProps {
  content: string;
  type: MandalartType;
}

export interface SubCellProps extends CellProps {
  isCompleted: boolean;
  onClick: () => void;
  disableInteraction?: boolean;
  position?: number;
  goalId?: number;
}

export const Root = ({ children }: SquareProps) => {
  return <div className={styles.squareContainer}>{children}</div>;
};

export const Main = ({ content, type }: CellProps) => {
  return (
    <div className={styles.squareContainer}>
      <div className={styles.mainCell[type]}>{content}</div>
    </div>
  );
};

export const Sub = ({
  content,
  isCompleted,
  onClick,
  type,
  disableInteraction,
  position,
  goalId,
}: SubCellProps) => {
  return (
    <div className={styles.squareContainer}>
      <div
        className={styles.subCell[type]}
        data-completed={!disableInteraction && isCompleted}
        data-disabled={disableInteraction}
        data-position={position}
        data-goal-id={goalId}
        onClick={!disableInteraction ? onClick : undefined}
      >
        {content}
      </div>
    </div>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const Square = {
  Main,
  Sub,
};
