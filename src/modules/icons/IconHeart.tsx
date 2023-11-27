import { FC } from "react";
import { Icon } from "./Icon";

import styles from "./iconHeart.module.scss";
import clsx from "clsx";

interface IconHeartProps {
  isFollow: boolean;
}
export const IconHeart: FC<IconHeartProps> = ({ isFollow }) => {
  return (
    <Icon
      type={isFollow ? "wishlist-full" : "wishlist-reg"}
      containerProps={{
        className: clsx(styles.iconHeart, isFollow && styles.iconHeart_active),
      }}
    />
  );
};
