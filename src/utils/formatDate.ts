import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(relativeTime);

export const formatDate = (createdAt: string | null) => {
  if (!createdAt) return "";

  const createdDate = dayjs(createdAt);

  if (createdDate.isAfter(dayjs().subtract(1, "day"))) {
    return createdDate.fromNow();
  } else {
    return createdDate.format("HH:mm - DD/MM/YYYY");
  }
};
