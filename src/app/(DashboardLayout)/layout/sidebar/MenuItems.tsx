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
    id: uniqueId(),
    title: "Nuevo producto",
    icon: IconList,
    href: routes.newProduct,
  },
  {
    navlabel: true,
    subheader: "Categorias",
  },
  {
    id: uniqueId(),
    title: "Todas las categorias",
    icon: IconMoodHappy,
    href: routes.categories,
  },
  {
    id: uniqueId(),
    title: "Nueva categoria",
    icon: IconAperture,
    href: routes.newCategory,
  },
];

export default Menuitems;
