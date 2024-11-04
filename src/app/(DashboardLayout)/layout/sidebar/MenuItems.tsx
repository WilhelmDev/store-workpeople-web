import routes from "@/utils/routes";
import {
  IconAperture,
  IconCopy,
  IconLayoutDashboard,
  IconLogin,
  IconMoodHappy,
  IconTypography,
  IconUserPlus,
  IconCirclePlus,
  IconCategory,
  IconList,
  IconFileInvoice,
  IconClipboardPlus
} from "@tabler/icons-react";

import { uniqueId } from "lodash";

const Menuitems = [
  {
    navlabel: true,
    subheader: "Home",
  },
  {
    id: uniqueId(),
    title: "Dashboard",
    icon: IconLayoutDashboard,
    href: routes.home,
  },
  {
    navlabel: true,
    subheader: "Facturas",
  },
  {
    id: uniqueId(),
    title: "Nueva factura",
    icon: IconClipboardPlus,
    href: routes.newInvoice,
  },
  {
    id: uniqueId(),
    title: "Todas las facturas",
    icon: IconFileInvoice,
    href: routes.invoices,
  },
  {
    navlabel: true,
    subheader: "Productos",
  },
  {
    id: uniqueId(),
    title: "Todos",
    icon: IconList,
    href: routes.products,
  },
  {
    navlabel: true,
    subheader: "Extra",
  },
  {
    id: uniqueId(),
    title: "Icons",
    icon: IconMoodHappy,
    href: "/icons",
  },
  {
    id: uniqueId(),
    title: "Sample Page",
    icon: IconAperture,
    href: "/sample-page",
  },
];

export default Menuitems;
