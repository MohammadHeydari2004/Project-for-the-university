import Card from "#/components/ui/Card.tsx";
import type { ReactNode } from "react";

interface StatCardProps {
  title: string;
  value: string | number;
  color?: string;
  description?: string;
  icon?: ReactNode;
  trend?: {
    value: number;
    label?: string;
  };
  className?: string;
}

export default function StatCard({
  title,
  value,
  color = "text-blue-600",
  description,
  icon,
  trend,
  className = "",
}: StatCardProps) {
  // فرمت‌دهی اعداد بزرگ با جداکننده هزارگان فارسی
  const formattedValue =
    typeof value === "number" ? value.toLocaleString("fa-IR") : value;

  // تعیین رنگ و آیکون روند
  const trendColor =
    trend && trend.value > 0
      ? "text-green-600"
      : trend && trend.value < 0
        ? "text-red-600"
        : "text-gray-500";

  const trendIcon =
    trend && trend.value > 0 ? "↑" : trend && trend.value < 0 ? "↓" : "→";

  return (
    <Card className={className}>
      <div
        className="flex items-start justify-between gap-3"
        role="group"
        aria-label={`${title}: ${value}`}
      >
        <div className="flex flex-col">
          <dt className="text-sm font-medium text-gray-500">{title}</dt>
          <dd className={`mt-2 text-3xl font-bold ${color}`}>
            {formattedValue}
          </dd>

          {/* نشانگر روند */}
          {trend && (
            <div
              className={`mt-1.5 flex items-center gap-1 text-xs font-medium ${trendColor}`}
            >
              <span>{trendIcon}</span>
              <span>{Math.abs(trend.value).toLocaleString("fa-IR")}٪</span>
              {trend.label && (
                <span className="text-gray-400">{trend.label}</span>
              )}
            </div>
          )}

          {/* توضیحات */}
          {description && !trend && (
            <div className="mt-1 text-xs text-gray-400">{description}</div>
          )}
        </div>

        {/* آیکون */}
        {icon && (
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gray-50 text-gray-400">
            {icon}
          </div>
        )}
      </div>
    </Card>
  );
}
// import Card from "#/components/ui/Card.tsx";

// interface StatCardProps {
//   title: string;
//   value: string | number;
//   color?: string;
//   description?: string;
// }

// export default function StatCard({
//   title,
//   value,
//   color = "text-blue-600",
//   description,
// }: StatCardProps) {
//   return (
//     <Card>
//       <div className="text-sm font-medium text-gray-500">{title}</div>
//       <div className={`mt-2 text-3xl font-bold ${color}`}>{value}</div>
//       {description && (
//         <div className="mt-1 text-xs text-gray-400">{description}</div>
//       )}
//     </Card>
//   );
// }
