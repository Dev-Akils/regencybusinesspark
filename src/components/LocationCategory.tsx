import { Tooltip } from "@mui/material";
import type { IconType } from "react-icons";

export type Item = {
    icon: IconType;
    label: string;
    time: string;
};

export type LocationCategoryProps = {
    icon: IconType;
    title: string;
    color?: string;
    placement?: "bottom" | "left" | "right" | "top";
    items: Item[];
};

const LocationCategory: React.FC<LocationCategoryProps> = ({
    icon: Icon,
    title,
    color = "text-yellow-800",
    placement = "bottom",
    items,
}) => {
    return (
        <Tooltip
        
            title={
                <ul className="text-sm space-y-5 ">
                    {items.map((item, index) => (
                        <li key={index} className="flex items-center gap-2">
                            <span className="p-1 rounded-full bg-white">
                                <item.icon className="text-blue-900" />
                            </span>
                            <span className="text-white">
                                <strong>{item.label}:</strong> {item.time}
                            </span>
                        </li>
                    ))}
                </ul>
            }
            arrow
            placement={placement}
        >
            <h3 className={`flex items-center text-xl font-semibold ${color} mb-2 cursor-pointer`}>
                <Icon className="mr-2 text-blue-900" /> {title}
            </h3>
        </Tooltip>
    );
};

export default LocationCategory;
