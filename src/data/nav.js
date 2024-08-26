export const mobileNav = [
  {
    name: "Servicios",
    link: "/servicios",
    subnav: [
      {
        name: "Para colegios",
        link: "/servicios/colegios",
        key: "organizacionesnav-mobile",
      },
      {
        name: "Para empresas",
        link: "/servicios/empresas",
        key: "empresasnav-mobile",
      },
      {
        name: "Para familias",
        link: "/servicios/familias",
        key: "familiasnav-mobile",
      },
    ],
    key: "serviciosnav-mobile",
  },
  {
    name: "Nosotros",
    link: "/nosotros",
    subnav: [],
    key: "nosotrosnav-mobile",
  },
  {
    name: "Contacto",
    link: "/contacto",
    subnav: [],
    key: "contactonav-mobile",
  },
];

export const desktopNav = [
  {
    name: "Servicios",
    link: false,
    subnav: [
      {
        title: "Para colegios",
        href: "/servicios/colegios",
        description:
          "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
        key: "progess-subnav",
      },
      {
        title: "Para empresas",
        href: "/servicios/empresas",
        description:
          "For sighted users to preview content available behind a link.",
        key: "hover-card-subnav",
      },
      {
        title: "Para familias",
        href: "/servicios/familias",
        description:
          "A modal dialog that interrupts the user with important content and expects a response.",
        key: "alert-dialog-subnav",
      },
    ],
    key: "serviciosnav-desktop",
  },
  {
    name: "Nosotros",
    link: "/nosotros",
    subnav: [],
    key: "nosotrosnav-desktop",
  },
  {
    name: "Contacto",
    link: "/contacto",
    subnav: [],
    key: "contactonav-desktop",
  },
];

export const btn = {
  title: "Agendar",
};
