var selector = document.querySelector("input[type='tel']");

var im = new Inputmask("+7 (999) — 9999999");
im.mask(selector);


const validation = new JustValidate("#form");

validation
  .addField("#name", [
    {
      rule: "required",
      errorMessage: "Поле обязаьельно к заполнению!",
    },
    {
      rule: "minLength",
      value: 3,
      errorMessage: "Нужно полноценное имя!",
    },
    {
      rule: "maxLength",
      value: 30,
      errorMessage: "Давай покороче....",
    },
  ])
  .addField("#email", [
    {
      rule: "required",
      errorMessage: "Поле обязаьельно к заполнению!",
    },
    {
      rule: "email",
      errorMessage: "Почта инвалид!",
    },
  ])
  .addField("#tel", [
    {
      rule: "required",
      errorMessage: "Поле обязаьельно к заполнению!",
    },
    {
      validator: (name, value) => {
        const phone = selector.inputmask.unmaskedvalue();
        console.log(phone);
        return Number(phone) && phone.length == 10;
      },
      errorMessage: "Короткий какой то!",
    },
  ]);