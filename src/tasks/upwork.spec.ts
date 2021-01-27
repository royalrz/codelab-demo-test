it("maps from one shape to another", () => {
  const original = {
    company: {
      devs: [
        {
          firstname: "Webber",
          lastname: "Wang",
        },
        {
          firstname: "Vien",
          lastname: "Nguyen",
        },
      ],
    },
    info: [
      {
        key: "user.address.number",
        value: "1200",
      },
      {
        key: "user.address.street",
        value: "Park ave.",
      },
    ],
  };

  const expected = {
    company: {
      devs: [
        {
          firstname: "Webber",
          lastname: "Wang",
        },
        {
          firstname: "Vien",
          lastname: "Nguyen",
        },
      ],      
    },
    info: [
      {
        key: "user.address.number",
        value: "1200",
      },
      {
        key: "user.address.street",
        value: "Park ave.",
      },
    ],
  };

  expect(original).toStrictEqual(expected);
});
