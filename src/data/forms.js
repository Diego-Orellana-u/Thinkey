export const colegiosFormInfo = {
  sectionMargin: "my-10",
  title: "We Love to Hear From You",
  desc: "Estamos aquí para ayudarte a llevar la ciencia y la creatividad a tu comunidad educativa. Escríbenos y nos pondremos en contacto contigo.",
  imgHref: "/a.png",
  imgAlt: "",
  formFields: [
    {
      name: "username",
      placeholder: "Nombre",
      key: "form-colegios-key-example1",
    },
    {
      name: "correo",
      placeholder: "Correo Electrónico",
      key: "form-key-example2",
    },
    {
      name: "teléfono",
      placeholder: "Teléfono",
      key: "form-colegios-key-example3",
    },
  ],
  formKey: "random-form-key-2",
  btnText: "Contactar",
};

// If you put two objects in an array in formFields, they will be rendered into a flex div
export const contactFormInfo = {
  sectionMargin: false,
  title: "We Love to Hear From You",
  desc: "Estamos aquí para ayudarte a llevar la ciencia y la creatividad a tu comunidad. No importa si es para preguntarnos algo o para cotizar, escríbenos y nos pondremos en contacto contigo apenas podamos.",
  imgHref: "/a.png",
  imgAlt: "",
  formFields: [
    [
      { name: "Nombre", placeholder: "Nombre", key: "form-key-example1" },
      { name: "Apellido", placeholder: "Apellido", key: "form-key-example2" },
    ],
    [
      {
        name: "Correo",
        placeholder: "Correo Electrónico",
        key: "form-key-example3",
      },
      { name: "Teléfono", placeholder: "Teléfono", key: "form-key-example4" },
    ],
    { name: "Mensaje", placeholder: "Mensaje", key: "form-key-example5" },
  ],
  formKey: "random-form-key-1",
  btnText: "Contactar",
};
