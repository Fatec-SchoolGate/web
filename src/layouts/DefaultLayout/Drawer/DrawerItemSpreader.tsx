import { NavigationItem } from ".";
import DrawerGroup from "./DrawerGroup";
import DrawerItem from "./DrawerItem";
import DrawerSection from "./DrawerSection";

interface Props {
    items: NavigationItem[]
};

const DrawerItemSpreader = (props: Props) => {

    const {
        items
    } = props;

    return (
        <>
            {items.map((item, key) => {
                if (item.children && item.children.length > 0) {
                    return (
                        <DrawerGroup
                            text={item.text}
                            children={item.children!}
                            icon={item.icon}
                            key={key}
                        />
                    );
                } else if (item.isSection) {
                    return (
                        <DrawerSection
                            text={item.text}
                            key={key}
                        />
                    );
                } else {
                    return (
                        <DrawerItem
                            text={item.text}
                            icon={item?.icon}
                            value={item?.value}
                            key={key}
                        />
                    );
                }
            })}
        </>
    );
}

export default DrawerItemSpreader;